# 📦 Preparación para GitHub

## ✅ Proyecto Listo para Subir

Este proyecto está 100% configurado y listo para GitHub. Sigue estos pasos:

## 🚀 Pasos para Subir a GitHub

### 1. Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `inventario-tecnico` (o similar)
3. Descripción: "Sistema de inventario técnico web para la Personería de Bogotá"
4. Privado o Público (recomendado: Público)
5. NO selecciones "Add README" (ya existe)
6. Click en "Create repository"

### 2. Configurar Git Localmente

```bash
# Desde la carpeta del proyecto
git init
git add .
git commit -m "feat: Initial commit - Inventario Técnico Web v1.0"

# Agregar el repositorio remoto
git branch -M main
git remote add origin https://github.com/TU_USERNAME/inventario-tecnico.git

# Subir código
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a **Settings** del repositorio
2. Busca **Pages** en el menú izquierdo
3. **Source**: Selecciona "GitHub Actions"
4. Listo - se desplegará automáticamente

### 4. Habilitar Workflows

1. Ve a **Actions**
2. Habilita los workflows si te lo pide
3. Los workflows en `.github/workflows/` se ejecutarán automáticamente

## 📋 Checklist Pre-Push

- [ ] No hay archivos `.env` con secretos
- [ ] `node_modules/` está en `.gitignore`
- [ ] No hay archivos grandes (>50MB)
- [ ] Todos los archivos necesarios están incluidos
- [ ] README.md está actualizado
- [ ] LICENSE incluido
- [ ] `.gitignore` está configurado

## 🔒 Configuración de Seguridad Adicional

### Proteger la rama main

1. Settings → Branches
2. Add rule
   - Branch name pattern: `main`
   - Require pull request reviews
   - Require status checks to pass
   - Require branches to be up to date

### Habilitar seguridad

1. Settings → Security and analysis
   - Dependabot alerts: ON
   - Dependabot security updates: ON
   - Code scanning: ON (con GitHub Advanced Security)

## 📊 Workflows Incluidos

### 1. `deploy.yml`
- ✅ Build automático en cada push a main
- ✅ Deploy a GitHub Pages
- ✅ Type checking
- ✅ Linting

### 2. `test.yml`
- ✅ Ejecuta en Node 18 y 20
- ✅ Verifica tipos
- ✅ Ejecuta linter
- ✅ Build validation
- ✅ Format check

## 🌐 Configurar Dominio Personalizado (Opcional)

### Con GitHub Pages

1. Settings → Pages
2. Custom domain: `inventario.personeriabogota.gov.co`
3. En tu proveedor DNS, crea un CNAME:
   ```
   inventario.personeriabogota.gov.co CNAME username.github.io
   ```

### Con CloudFlare (Recomendado)

1. Cambiar nameservers en registrador
2. Crear zona en CloudFlare
3. CNAME: `inventario` → `username.github.io`

## 📈 Después del Primer Push

1. **Verifica el deploy**
   - Ve a tu repo → Settings → Pages
   - Copia el URL (ej: `https://username.github.io/inventario-tecnico`)
   - Abre en navegador

2. **Revisa los Workflows**
   - Ve a Actions
   - Verifica que `deploy.yml` ejecutó correctamente
   - Revisa logs si hay errores

3. **Prueba la funcionalidad**
   - Búsqueda: ✅
   - Filtros: ✅
   - Modal de detalles: ✅
   - Links externos: ✅

## 🔄 Flujo de Trabajo Continuo

### Para agregar cambios

```bash
# 1. Crear rama feature
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios
npm run dev

# 3. Verificar calidad
npm run lint
npm run type-check
npm run format

# 4. Commit
git add .
git commit -m "feat: descripción clara de cambios"

# 5. Push
git push origin feature/nueva-funcionalidad

# 6. Crear Pull Request en GitHub
# 7. Code review
# 8. Merge a main
# 9. Auto-deploy
```

## 📝 Otros Repositorios Recomendados

Considera crear repositorios adicionales para:

1. **inventario-tecnico-api** - Backend Node.js
   ```bash
   npm init --template=node
   ```

2. **inventario-tecnico-docs** - Documentación adicional
   - Wikis
   - Guías internas
   - Manuales

3. **inventario-tecnico-mobile** - App móvil (React Native)
   ```bash
   npx react-native init InventarioTecnico
   ```

## 🤖 GitHub Secrets (Futuro)

Cuando necesites variables de entorno secretas:

1. Settings → Secrets and variables → Actions
2. New repository secret
   ```
   VITE_API_URL = https://api.personeriabogota.gov.co
   DATABASE_URL = postgres://...
   ```

3. Usar en workflows:
   ```yaml
   - name: Build
     env:
      VITE_API_URL: ${{ secrets.VITE_API_URL }}
      run: npm run build
   ```

## 📞 Contacto

- **DTIC**: dtic@personeriabogota.gov.co
- **GitHub Organization**: https://github.com/PersoneriaBogota

## 🎓 Recursos GitHub

- [GitHub Docs](https://docs.github.com)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [GitHub Actions](https://github.com/features/actions)
- [GitHub Workflows](https://docs.github.com/en/actions/using-workflows)

---

**¡Tu proyecto está listo para GitHub! 🚀**

Próximo paso: `git push`
