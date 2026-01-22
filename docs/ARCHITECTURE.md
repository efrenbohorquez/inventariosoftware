# Arquitectura del Proyecto

## 🏛️ Visión General

El Inventario Técnico Web es una aplicación SPA (Single Page Application) moderna construida con React y TypeScript, diseñada para ser escalable, mantenible y de alto rendimiento.

## 🗂️ Estructura de Directorios

```
src/
├── components/              # Componentes React (presentación)
│   ├── Header.tsx          # Encabezado con estadísticas
│   ├── Footer.tsx          # Pie de página
│   ├── SearchBar.tsx       # Barra de búsqueda
│   ├── CategoryFilter.tsx   # Filtro por categoría
│   ├── ApplicationCard.tsx  # Tarjeta de aplicación
│   ├── ApplicationDetailModal.tsx # Modal de detalle
│   ├── EmptyState.tsx      # Estado vacío
│   └── index.ts            # Barrel exports
│
├── hooks/                   # Hooks personalizados (lógica)
│   ├── useApplicationFilters.ts
│   ├── useApplicationStats.ts
│   └── index.ts
│
├── types/                   # Tipos TypeScript
│   └── index.ts            # Definiciones de interfaces
│
├── data/                    # Datos y constantes
│   └── applications.ts     # Array de aplicaciones
│
├── utils/                   # Funciones utilitarias
│   └── (por completar)
│
├── styles/                  # Estilos globales
│   └── index.css           # CSS global + Tailwind
│
├── App.tsx                 # Componente raíz
└── main.tsx                # Punto de entrada
```

## 🔄 Flujo de Datos

```
┌─────────────────────────────────────────┐
│          main.tsx (Punto entrada)       │
└──────────────────┬──────────────────────┘
                   │
                   ▼
        ┌──────────────────────┐
        │      App.tsx         │
        │   (Componente raíz)  │
        └──────────────────────┘
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
      Header    Main        Footer
              (Grid)
        │
        ├─ useApplicationFilters
        │  └─ [searchTerm, activeCategory]
        │
        ├─ useApplicationStats
        │  └─ [total, legacy, modern]
        │
        └─ ApplicationCard[]
           └─ ApplicationDetailModal (onClick)
```

## 🎯 Principios Arquitectónicos

### 1. **Separación de Responsabilidades**

- **Components**: Únicamente presentación visual
- **Hooks**: Lógica y estado de la aplicación
- **Types**: Definiciones compartidas
- **Data**: Fuentes de datos

```typescript
// ❌ Evitar mezclar lógica en componentes
const MyComponent = () => {
  const [filtered, setFiltered] = useState([]);
  const [stats, setStats] = useState({});
  // ... lógica compleja aquí
};

// ✅ Usar hooks personalizados
const MyComponent = () => {
  const { filteredApps } = useApplicationFilters(APP_DATA);
  const stats = useApplicationStats(APP_DATA);
  // Solo presentación
};
```

### 2. **DRY (Don't Repeat Yourself)**

Reutiliza componentes y lógica:

```typescript
// Componente reutilizable
export const ApplicationCard = ({ app, onDetailClick }) => {
  // Una única implementación
};

// Usado múltiples veces
{filteredApps.map(app => (
  <ApplicationCard key={app.name} app={app} />
))}
```

### 3. **Type Safety**

TypeScript en todos lados:

```typescript
// Tipos claramente definidos
interface Application {
  name: string;
  criticality: 'Crítica' | 'Alta' | 'Media';
  // ...
}

// Componentes tipados
const ApplicationCard: React.FC<ApplicationCardProps> = (...) => {}
```

### 4. **Performance**

- `useMemo` para filtrado y estadísticas
- Code splitting automático con Vite
- Lazy loading de modales
- Tailwind purging de CSS no usado

```typescript
const filteredApps = useMemo(() => {
  return APP_DATA.filter(...); // Solo recalcula si deps cambian
}, [searchTerm, activeCategory]);
```

## 📊 Flujo de Componentes

```
App
├── Header (muestra stats)
│   └── useApplicationStats
├── SearchBar (input)
│   └── handleSearch (callback)
├── CategoryFilter (botones)
│   └── handleCategoryChange (callback)
├── ApplicationCard (múltiples)
│   └── onDetailClick (callback)
├── ApplicationDetailModal (condicional)
│   └── selectedApp (state)
└── Footer (pie de página)
```

## 🔌 Extensibilidad

### Agregar Nueva Funcionalidad

**1. Crear tipo:**
```typescript
// src/types/index.ts
export interface AguNewFeature {
  // ...
}
```

**2. Crear hook:**
```typescript
// src/hooks/useNewFeature.ts
export const useNewFeature = () => {
  // lógica
};
```

**3. Crear componente:**
```typescript
// src/components/NewFeature.tsx
export const NewFeature: React.FC = () => {
  const { data } = useNewFeature();
  return <div>{/* UI */}</div>;
};
```

**4. Integrar en App:**
```typescript
// src/App.tsx
import { NewFeature } from '@components/NewFeature';

export default function App() {
  return (
    <>
      {/* ... otros componentes */}
      <NewFeature />
    </>
  );
}
```

## 📦 Dependencias Principales

| Paquete | Propósito | Versión |
|---------|----------|---------|
| react | UI Framework | ^18.2.0 |
| react-dom | DOM rendering | ^18.2.0 |
| lucide-react | Iconos | ^0.298.0 |
| typescript | Type checking | ^5.3.3 |
| vite | Build tool | ^5.0.8 |
| tailwindcss | CSS framework | ^3.3.6 |
| eslint | Linter | ^8.55.0 |

## 🧪 Testing (Roadmap)

Estructura propuesta para tests:

```
tests/
├── unit/
│   ├── hooks/
│   │   ├── useApplicationFilters.test.ts
│   │   └── useApplicationStats.test.ts
│   └── utils/
├── integration/
│   ├── App.integration.test.tsx
│   └── components/
└── e2e/
    ├── search.e2e.test.ts
    └── filtering.e2e.test.ts
```

## 🚀 Performance Optimization

### Actual
- ✅ Tree-shaking automático con Vite
- ✅ CSS purging con Tailwind
- ✅ Minimal JS bundle (~80KB gzip)

### Futuro
- [ ] Code splitting por rutas
- [ ] Image optimization
- [ ] Service Worker / PWA
- [ ] GraphQL para datos (en lugar de JSON estático)

## 🔒 Seguridad

### Presente
- ✅ TypeScript type safety
- ✅ ESLint rules
- ✅ Dependencias auditadas
- ✅ GitHub Actions CI/CD

### Recomendado
- [ ] OWASP security headers
- [ ] Content Security Policy (CSP)
- [ ] Dependency scanning automático
- [ ] Code review antes de merge

## 📈 Escalabilidad

### Fase 1 (Actual)
- Datos estáticos en JSON
- Single page
- ~10 aplicaciones

### Fase 2 (Próximo)
- Backend Node.js/Express
- Base de datos PostgreSQL
- API REST
- Autenticación LDAP

### Fase 3 (Futuro)
- Microservicios
- Kubernetes deployment
- GraphQL API
- Real-time updates (WebSocket)

## 🛠️ Desarrollo Local

```bash
# Estructura del proyecto ya está lista
npm install      # Instala todas las dependencias
npm run dev      # Inicia servidor de desarrollo
npm run build    # Build para producción
npm run lint     # Valida código
```

## 📚 Referencias

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Hooks API](https://react.dev/reference/react/hooks)

---

**Última actualización:** Enero 2025
