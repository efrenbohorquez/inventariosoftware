# Inventario Técnico Web - Personería de Bogotá D.C.

[![CI/CD Tests](https://github.com/PersoneriaBogota/inventario-tecnico/workflows/CI%2FCD%20Tests/badge.svg)](https://github.com/PersoneriaBogota/inventario-tecnico/actions)
[![Deploy to GitHub Pages](https://github.com/PersoneriaBogota/inventario-tecnico/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/PersoneriaBogota/inventario-tecnico/actions)

Plataforma moderna y responsiva para visualizar, filtrar y gestionar el inventario de aplicaciones web de la Personería de Bogotá D.C.

## 🎯 Características

- ✨ **Interfaz moderna** - Diseño limpio y profesional con Tailwind CSS
- 🔍 **Búsqueda avanzada** - Busca por nombre o descripción en tiempo real
- 📁 **Filtrado por categoría** - Organiza aplicaciones por tipo (Misional, Administrativo, Ciudadano)
- 📊 **Dashboard de estadísticas** - Visualiza el estado del inventario de forma instantánea
- 📱 **Diseño responsive** - Funciona perfectamente en dispositivos móviles y escritorio
- 🎨 **Análisis de riesgo** - Información detallada sobre dependencias y vulnerabilidades técnicas
- ♿ **Accesibilidad** - Cumple con estándares WCAG 2.1
- ⚡ **Rendimiento** - Optimizado para carga rápida y experiencia fluida

## 🏗️ Arquitectura del Proyecto

```
inventario-tecnico/
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ApplicationCard.tsx
│   │   ├── ApplicationDetailModal.tsx
│   │   ├── EmptyState.tsx
│   │   └── index.ts
│   ├── hooks/               # Hooks personalizados
│   │   ├── useApplicationFilters.ts
│   │   ├── useApplicationStats.ts
│   │   └── index.ts
│   ├── types/               # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── data/                # Datos y fuentes de información
│   │   └── applications.ts
│   ├── utils/               # Utilidades y funciones auxiliares
│   ├── styles/              # Estilos globales
│   │   └── index.css
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Punto de entrada
├── .github/
│   ├── workflows/           # GitHub Actions para CI/CD
│   │   ├── deploy.yml
│   │   └── test.yml
│   └── ISSUE_TEMPLATE/
├── docs/                    # Documentación adicional
├── public/                  # Archivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependencias del proyecto
├── tsconfig.json            # Configuración de TypeScript
├── vite.config.ts           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── .eslintrc.cjs            # Configuración de ESLint
├── .prettierrc               # Configuración de Prettier
├── .gitignore               # Archivos ignorados por Git
└── README.md                # Este archivo
```

## 📋 Tecnologías

- **React 18** - Librería UI moderna
- **TypeScript** - Tipado estático para mayor confiabilidad
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework CSS utilitario
- **Lucide React** - Librería de iconos
- **ESLint** - Linter para análisis de código
- **Prettier** - Formateador de código

## 🚀 Inicio Rápido

### Requisitos
- Node.js 18+ 
- npm 9+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/PersoneriaBogota/inventario-tecnico.git
cd inventario-tecnico

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto abrirá automáticamente en `http://localhost:5173`

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo con HMR

# Build
npm run build        # Compila para producción

# Calidad de código
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos TypeScript
npm run format       # Formatea código con Prettier
npm run format:check # Verifica formato sin cambiar archivos

# Preview
npm run preview      # Previsualiza build de producción localmente
```

## 📊 Estructura de Datos

Cada aplicación contiene:

```typescript
interface Application {
  name: string;              // Nombre del aplicativo
  url: string;              // URL de acceso
  category: Category;        // Categoría (Misional/Administrativo/Ciudadano)
  tech: string;             // Stack tecnológico
  criticality: Criticality;  // Nivel de criticidad
  dependency: Dependency;    // Nivel de dependencia
  status: Status;           // Estado (Legacy/Estándar/Moderno)
  description: string;      // Descripción detallada
  risk: string;             // Análisis de riesgo
}
```

## 🎨 Personalización

### Agregar nuevas aplicaciones

Edita `src/data/applications.ts`:

```typescript
const APP_DATA: Application[] = [
  {
    name: "Tu Aplicativo",
    url: "https://ejemplo.personeriabogota.gov.co",
    category: "Misional",
    tech: "React / Node.js",
    criticality: "Alta",
    dependency: "Media",
    status: "Moderno",
    description: "Descripción del aplicativo",
    risk: "Análisis de riesgos"
  },
  // ... más aplicaciones
];
```

### Modificar temas y colores

Personaliza `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'personeria-blue': '#1e3a8a',
      'personeria-light': '#eff6ff',
    },
  },
}
```

## 🔄 Flujo de Contribución

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

## 📝 Mejoras Recomendadas (Roadmap)

- [ ] **Backend API REST** - Conectar a base de datos
- [ ] **Autenticación** - Sistema de login con LDAP/OAuth
- [ ] **Análisis avanzado** - Gráficos y reportes interactivos
- [ ] **Exportación de datos** - CSV, PDF, Excel
- [ ] **Sistema de comentarios** - Para notas y seguimiento
- [ ] **Historial de cambios** - Auditoría de modificaciones
- [ ] **Integración con CI/CD** - Deploy automático
- [ ] **Notificaciones** - Alertas de cambios críticos
- [ ] **API pública** - Para integraciones externas
- [ ] **Internacionalización** - Soporte multiidioma

## 🔒 Seguridad

- Validación de tipos con TypeScript
- Linting automático con ESLint
- GitHub Actions para CI/CD
- Auditoría de dependencias con npm
- HTTPS requerido en producción
- Content Security Policy (CSP)

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles (iOS 12+, Android 8+)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

**Personería de Bogotá D.C.**
- Oficina de Tecnologías de la Información (DTIC)
- Email: dtic@personeriabogota.gov.co

## 🙏 Agradecimientos

Desarrollado por el equipo de Tecnologías de la Información de la Personería de Bogotá D.C.

---

**Última actualización:** Enero 2025
