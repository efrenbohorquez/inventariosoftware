# Despliegue y Configuración

## 🚀 Despliegue Automático con GitHub Pages

El proyecto está configurado para desplegarse automáticamente a GitHub Pages en cada push a `main`.

### Configuración Inicial

1. **Habilita GitHub Pages en tu repositorio:**
   - Settings → Pages
   - Source: `GitHub Actions`

2. **Workflow se ejecuta automáticamente** en `.github/workflows/deploy.yml`

3. **Tu sitio estará en:** `https://username.github.io/inventario-tecnico`

## 📦 Despliegue Manual

### Generar Build

```bash
npm run build
# Genera carpeta `dist/` lista para producción
```

### Opciones de Hosting

#### Opción 1: GitHub Pages (Recomendado para público)

```bash
# Ya está configurado con GitHub Actions
# Solo necesita push a main
```

#### Opción 2: Vercel

```bash
npm install -g vercel

vercel
# Sigue las instrucciones interactivas
```

#### Opción 3: Netlify

```bash
npm install -g netlify-cli

netlify deploy --prod --dir=dist
```

#### Opción 4: Azure Static Web Apps

```bash
# Crear Static Web App en Azure Portal
# Conectar repositorio GitHub
# Usar Build preset: Vite
# App location: ./
# Build location: dist
```

#### Opción 5: Servidor propio

```bash
# Copiar contenido de dist/ a servidor web
scp -r dist/* usuario@servidor:/var/www/html/inventario/

# Nginx configuration
server {
    listen 443 ssl http2;
    server_name inventario.personeriabogota.gov.co;
    
    root /var/www/html/inventario;
    index index.html;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache headers
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # HTTPS redirect
    if ($scheme != "https") {
        return 301 https://$server_name$request_uri;
    }
}
```

## 🔐 Seguridad en Producción

### Variables de Entorno

Crear archivo `.env.production`:

```env
VITE_API_URL=https://api.personeriabogota.gov.co
VITE_ANALYTICS_ID=UA-XXXXXXXXX
```

### Headers de Seguridad

Configurar en servidor:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## 📊 Monitoreo

### GitHub Actions Workflows

Monitorea ejecuciones en: Actions tab → Workflow runs

### Logs de Deployment

```bash
# Ver logs de la última versión
git log --oneline -n 20
```

## 🔄 Actualizar Contenido

### Agregar/Modificar Aplicaciones

1. Edita `src/data/applications.ts`
2. Commit y push a main
3. GitHub Actions despliega automáticamente

### Cambios en Documentación

1. Edita archivos `.md`
2. Commit y push
3. Cambios visibles en GitHub

## ⚙️ Configuración Avanzada

### Custom Domain

**GitHub Pages:**
1. Settings → Pages → Custom domain
2. Ingresa `inventario.personeriabogota.gov.co`
3. Crea registro DNS CNAME

### SSL/TLS

- GitHub Pages: ✅ Automático (Let's Encrypt)
- Otros: Usar certificado de DigiCert o similar

### CDN

Para mejor rendimiento global:

```bash
# Usar Cloudflare
# - Crear zona DNS
# - Activar Page Rules
# - Cache Control: 1 mes para archivos static
```

## 🆘 Troubleshooting

### Build falla

```bash
# Limpiar cache
rm -rf node_modules dist
npm install
npm run build
```

### Sitio muestra 404

- Verifica `dist/index.html` existe
- Check routing en servidor web
- Para SPA, todos deben apuntar a `index.html`

### Estilos no cargan

```bash
# Reconstruir Tailwind
npm run build
```

## 📋 Checklist de Despliegue

- [ ] `npm run build` exitoso
- [ ] No hay errores en `npm run lint`
- [ ] `npm run type-check` sin errores
- [ ] Tests pasando (cuando estén implementados)
- [ ] Variables de entorno configuradas
- [ ] HTTPS habilitado
- [ ] Headers de seguridad configurados
- [ ] Domain personalizado configurado
- [ ] Email DTIC configurado para alertas

---

Para soporte contacta a: dtic@personeriabogota.gov.co
