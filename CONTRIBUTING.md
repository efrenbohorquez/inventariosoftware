# Guía de Contribución

¡Gracias por tu interés en contribuir al Inventario Técnico Web de la Personería de Bogotá!

## 📋 Código de Conducta

Este proyecto se adhiere a un Código de Conducta que esperamos que todos los contribuyentes sigan.

## 🤝 Cómo Contribuir

### 1. Fork y Clone

```bash
# Fork en GitHub
git clone https://github.com/TU_USERNAME/inventario-tecnico.git
cd inventario-tecnico
git remote add upstream https://github.com/PersoneriaBogota/inventario-tecnico.git
```

### 2. Crea una Rama

```bash
git checkout -b feature/descripcion-clara
```

**Prefijos recomendados:**
- `feature/` - Nueva funcionalidad
- `bugfix/` - Corrección de errores
- `docs/` - Documentación
- `refactor/` - Refactorización
- `perf/` - Mejoras de rendimiento
- `chore/` - Tareas de mantenimiento

### 3. Desarrollo Local

```bash
npm install
npm run dev

# En otra terminal
npm run lint
npm run type-check
```

### 4. Commit y Push

```bash
# Sigue el formato de commit convencional
git commit -m "feat: agregar búsqueda avanzada"

git push origin feature/descripcion-clara
```

**Formatos de commit:**
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de error
- `docs:` - Cambios en documentación
- `refactor:` - Refactorización sin cambios funcionales
- `perf:` - Mejoras de rendimiento
- `test:` - Agregar o actualizar tests
- `chore:` - Cambios en build, deps, etc.

### 5. Pull Request

- Describe claramente qué cambios hiciste
- Referencia issues relacionados (`Fixes #123`)
- Asegúrate de que los tests y lints pasen
- Proporciona screenshots si aplicable

## 📝 Estándares de Código

### TypeScript

- Usa tipos explícitos siempre que sea posible
- Evita `any`, usa tipos genéricos
- Comenta código complejo

```typescript
// ❌ Evita
const getData = (id: any) => {
  return fetch(`/api/${id}`);
};

// ✅ Bien
interface DataResponse {
  id: string;
  name: string;
}

const getData = (id: string): Promise<DataResponse> => {
  return fetch(`/api/${id}`).then(r => r.json());
};
```

### React

- Componentes funcionales con hooks
- Props tipadas explícitamente
- Nombres descriptivos

```typescript
// ✅ Bien
interface ApplicationCardProps {
  app: Application;
  onDetailClick: (app: Application) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ app, onDetailClick }) => {
  return <div>...</div>;
};
```

### CSS/Tailwind

- Usa clases Tailwind en lugar de CSS personalizado
- Mantén componentes pequeños y reutilizables
- Prioriza accesibilidad

```tsx
// ✅ Bien
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
  Hacer algo
</button>
```

## 🧪 Testing

```bash
# Próximamente: tests unitarios
npm run test
npm run test:coverage
```

## 📚 Documentación

- Actualiza README.md si cambias funcionalidad
- Documenta componentes complejos
- Añade ejemplos de uso

## 🔍 Checklist Antes de Enviar PR

- [ ] Código formateado (`npm run format`)
- [ ] Linting sin errores (`npm run lint`)
- [ ] Type-check sin errores (`npm run type-check`)
- [ ] Build exitoso (`npm run build`)
- [ ] Funcionalidad testeada manualmente
- [ ] README actualizado si aplica
- [ ] Commits con mensajes claros
- [ ] PR description clara

## 🐛 Reportar Bugs

Usa GitHub Issues con el template de bug:

1. **Descripción clara** - ¿Qué está mal?
2. **Pasos para reproducir** - Paso a paso
3. **Comportamiento esperado** - ¿Qué debería pasar?
4. **Comportamiento actual** - ¿Qué sucede?
5. **Screenshots** - Si aplica
6. **Ambiente** - Browser, OS, versión de Node

## 💡 Sugerir Mejoras

Usa GitHub Discussions o Issues con tag `enhancement`:

- Descripción clara de la mejora
- Casos de uso
- Posibles implementaciones
- Referencias

## 📞 Preguntas

- Issues para bugs y features
- Discussions para preguntas
- Pull Requests para cambios de código

## ✨ Gracias

Tu contribución hace que este proyecto sea mejor. ¡Apreciamos tu tiempo y esfuerzo!

---

**Happy coding! 🚀**
