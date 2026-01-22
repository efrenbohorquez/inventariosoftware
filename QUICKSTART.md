# 🚀 INICIO RÁPIDO

## 📋 Requisitos Previos

- **Node.js** 18+ ([Descargar aquí](https://nodejs.org/))
- **npm** 9+ (incluido con Node.js)
- **Git** ([Descargar aquí](https://git-scm.com/))

## ⚡ Instalación (5 minutos)

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El navegador se abrirá automáticamente en `http://localhost:5173`

### 3. ¡Listo! 🎉

Verás el dashboard con el inventario de aplicaciones.

## 📝 Próximas Acciones Recomendadas

### Explorar el Proyecto

```bash
# Ver estructura
ls -la src/

# Editar datos
code src/data/applications.ts

# Modificar estilos
code src/styles/index.css
```

### Subir a GitHub

```bash
# 1. Crear repositorio en GitHub
# https://github.com/new

# 2. Configurar git local
git init
git add .
git commit -m "feat: Initial commit - Inventario Técnico"
git branch -M main
git remote add origin https://github.com/TU_USERNAME/inventario-tecnico.git
git push -u origin main

# 3. Activar GitHub Pages
# Settings → Pages → Source: GitHub Actions
```

### Hacer Build para Producción

```bash
npm run build
# Genera carpeta dist/ lista para deployment
```

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev           # Inicia servidor con HMR

# Verificación de calidad
npm run lint          # Valida código
npm run type-check    # Verifica tipos TypeScript

# Formatting
npm run format        # Formatea código
npm run format:check  # Verifica sin cambiar

# Build
npm run build         # Genera build de producción
npm run preview       # Previsualiza el build local
```

## 📂 Agregar Nuevas Aplicaciones

Edita `src/data/applications.ts`:

```typescript
{
  name: "Tu Aplicativo",
  url: "https://ejemplo.personeriabogota.gov.co",
  category: "Misional",          // Misional, Administrativo, Ciudadano
  tech: "React / Node.js",
  criticality: "Alta",           // Crítica, Alta, Media
  dependency: "Media",           // Baja, Media, Muy Alta, Extrema
  status: "Moderno",             // Moderno, Estándar, Legacy
  description: "Descripción corta...",
  risk: "Análisis de riesgos..."
}
```

Guarda y verás el cambio inmediatamente.

## 🎨 Personalizar Colores

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'personeria-blue': '#TU_COLOR',
      'personeria-light': '#TU_COLOR',
    },
  },
}
```

## 🔍 Troubleshooting

### Error: "npm command not found"
→ Instala Node.js desde https://nodejs.org/

### Error: Port 5173 en uso
```bash
npm run dev -- --port 3000
```

### Cambios no se ven
```bash
# Limpia cache
rm -rf node_modules dist
npm install
npm run dev
```

## 📚 Documentación

- [README.md](../README.md) - Guía completa
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Normas de contribución
- [docs/ARCHITECTURE.md](ARCHITECTURE.md) - Arquitectura técnica
- [docs/DEPLOYMENT.md](DEPLOYMENT.md) - Despliegue

## ✅ Checklist Inicial

- [ ] ✅ Node.js instalado
- [ ] ✅ `npm install` ejecutado
- [ ] ✅ `npm run dev` corriendo
- [ ] ✅ Navegador abierto en localhost:5173
- [ ] ✅ Dashboard visible
- [ ] ✅ Búsqueda funciona
- [ ] ✅ Filtros funcionan
- [ ] ✅ Modales abren

## 🤝 Necesitas Ayuda?

- **Problemas técnicos**: Abre un [Issue en GitHub](https://github.com/PersoneriaBogota/inventario-tecnico/issues)
- **Preguntas generales**: Usa [GitHub Discussions](https://github.com/PersoneriaBogota/inventario-tecnico/discussions)
- **Contacto directo**: dtic@personeriabogota.gov.co

---

**¡Estás listo para comenzar! 🚀**

Próximos pasos:
1. Familiarízate con el código
2. Lee la documentación
3. Haz tu primer cambio
4. ¡Contribuye!
