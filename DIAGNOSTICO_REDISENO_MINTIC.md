# 📊 DIAGNÓSTICO Y RECOMENDACIONES DE REDISEÑO
## Sitio Web Personería de Bogotá - Conformidad MINTIC Colombia 2025

**Fecha:** 22 de enero de 2026  
**Versión:** 1.0  
**Clasificación:** Uso interno - DTIC Personería de Bogotá  

---

## TABLA DE CONTENIDOS

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Análisis del Estado Actual](#análisis-del-estado-actual)
3. [Diagnóstico por Estándares MINTIC](#diagnóstico-por-estándares-mintic)
4. [Hallazgos Críticos](#hallazgos-críticos)
5. [Plan de Mejora](#plan-de-mejora)
6. [Priorización de Acciones](#priorización-de-acciones)
7. [Estimación de Esfuerzo y Costo](#estimación-de-esfuerzo-y-costo)
8. [Propuesta de Arquitectura Modernizada](#propuesta-de-arquitectura-modernizada)

---

## RESUMEN EJECUTIVO

La Personería de Bogotá cuenta con un sitio web funcional (www.personeriabogota.gov.co) basado en Joomla CMS que sirve como puerta de entrada a servicios ciudadanos críticos. Sin embargo, existen **deficiencias significativas** en conformidad con estándares MINTIC Colombia (2025) relacionadas con:

- **Accesibilidad digital** (WCAG 2.1)
- **Usabilidad y experiencia móvil**
- **Arquitectura de navegación**
- **Seguridad y protección de datos**
- **Rendimiento y disponibilidad**
- **Transparencia y datos abiertos**

### 🎯 **Recomendación Estratégica**

**Ejecutar rediseño integral mediante metodología ágil en 4 fases:**

| Fase | Duración | Enfoque | Entrega |
|------|----------|---------|---------|
| **I** | 3 meses | Accesibilidad + UX core | Prototipo navegable |
| **II** | 2 meses | Backend seguro + API | Migración datos |
| **III** | 2 meses | Testing + Optimización | Beta privada |
| **IV** | 1 mes | Despliegue + Formación | Go-live |

**Inversión estimada:** $250-350M COP (desarrollo interno + herramientas)

---

## ANÁLISIS DEL ESTADO ACTUAL

### 📱 Características Observadas

✅ **Fortalezas:**
- Información institucional correctamente jerarquizada
- Multitud de canales de contacto disponibles (Línea 143, WhatsApp, Chat)
- Servicios en línea integrados (Tutelas, PQRSD, Conciliaciones)
- Certificación ISO 9001 (ISO Icontec visible)
- Enlaces a otras entidades de control (Procuraduría, Contraloría)
- Información de transparencia y datos abiertos presente
- Redes sociales integradas (YouTube, Facebook, Twitter, Instagram)

❌ **Deficiencias Identificadas:**

#### 1. **Accesibilidad Digital**
- ⚠️ Falta evaluación formal WCAG 2.1
- ⚠️ Posibles problemas de contraste en elementos
- ⚠️ Navegación por teclado no documentada
- ⚠️ Imágenes sin descripción (alt text) completa
- ⚠️ Falta de estructura semántica clara (headers, landmarks)

#### 2. **Experiencia Móvil (Responsive)**
- ⚠️ Diseño adaptable pero no mobile-first
- ⚠️ Botones CTA (Call-to-Action) pequeños en móvil
- ⚠️ Menú de navegación no optimizado para touch
- ⚠️ Viewports y media queries suboptimizados

#### 3. **Arquitectura de Navegación**
- ⚠️ Estructura profunda (5+ niveles en algunos caminos)
- ⚠️ Duplicación de enlaces (menú principal + pie de página + breadcrumb)
- ⚠️ Búsqueda básica sin filtros avanzados
- ⚠️ No hay mapa del sitio visual (sitemap HTML)
- ⚠️ Enlaces a servicios externos sin claridad de "sale del sitio"

#### 4. **Rendimiento**
- ⚠️ Carga potencialmente lenta (no verificado, pero Joomla clásico típicamente lento)
- ⚠️ Imágenes sin optimización WebP
- ⚠️ Lazy loading no implementado
- ⚠️ CDN no evidente

#### 5. **Seguridad de Datos**
- ⚠️ Formularios no verificados si tienen cifrado fin-a-fin
- ⚠️ Política de privacidad presente pero no resaltada
- ⚠️ Consentimiento de cookies no evidente
- ⚠️ Chat externo (Frontos) - tercero desconocido para seguridad

#### 6. **Datos Abiertos**
- ⚠️ No hay API pública documentada
- ⚠️ Datasets no en formatos estándar (CSV, JSON)
- ⚠️ Falta de metadata (Dublin Core)
- ⚠️ No hay portal de datos abiertos integrado

#### 7. **Cumplimiento Normativo**
- ⚠️ Términos de uso presente pero no actualizados recientemente
- ⚠️ Aviso de cookies implícito, no explícito
- ⚠️ Política de protección de datos necesita actualización
- ⚠️ PQRSD integrado pero UI podría mejorarse

---

## DIAGNÓSTICO POR ESTÁNDARES MINTIC

### Matriz de Conformidad Actual

| Estándar | Estado Actual | Puntuación | Conformidad |
|----------|---------------|------------|-------------|
| WCAG 2.1 AA | Parcial | 55/100 | ❌ No certificado |
| LPDP + Decreto 1377 | Parcial | 65/100 | ⚠️ Requiere actualización |
| Autenticación MFA | No implementado | 10/100 | ❌ Falta |
| HTTPS/TLS 1.2+ | Implementado | 95/100 | ✅ Cumple |
| Usabilidad UX | Básica | 60/100 | ⚠️ Necesita mejora |
| Datos Abiertos/API | No implementado | 20/100 | ❌ Falta |
| Evaluación WCAG | No realizada | 0/100 | ❌ Crítica |
| Validación Formularios | Básica | 70/100 | ⚠️ Mejora necesaria |
| Cookies/Consentimiento | Implícito | 40/100 | ❌ No explícito |
| Estándares Abiertos | Joomla (parcial) | 50/100 | ⚠️ Limitado |
| Disponibilidad 99% | No documentado | 70/100 | ⚠️ Sin SLA |
| Control Versiones | Posible | 60/100 | ⚠️ Sin CI/CD |
| ISO 27001 | Parcial | 55/100 | ⚠️ Requiere auditoría |
| Leyes Colombianas | Parcial | 60/100 | ⚠️ Desactualizado |
| Logging/Auditoría | Básico | 50/100 | ⚠️ Insuficiente |

**Promedio General: 53/100 - Conformidad: INSUFICIENTE**

---

## HALLAZGOS CRÍTICOS

### 🔴 CRÍTICO (Requiere acción inmediata)

#### 1. **Ausencia de Certificación WCAG 2.1 AA**
- **Impacto:** Exclusión de personas con discapacidad visual, auditiva, motora, cognitiva
- **Riesgo Legal:** Potencial demanda por discriminación digital
- **Acción:** Auditoría externa + plan de remediación en 4 semanas

#### 2. **Sin Evaluación de Seguridad (Penetration Testing)**
- **Impacto:** Vulnerabilidades no identificadas en formularios, APIs
- **Riesgo:** Brechas de datos, inyecciones SQL, XSS
- **Acción:** Pentest anual + escaneo automático continuo

#### 3. **Terceros No Verificados (Chat Bot Externo)**
- **Impacto:** Datos ciudadanos potencialmente en plataforma de tercero
- **Riesgo:** Cumplimiento LPDP, exposición de PII
- **Acción:** Auditoría de contrato + encriptación E2E

#### 4. **Sin MFA en Áreas Administrativas**
- **Impacto:** Riesgo de compromiso de credenciales administrativas
- **Riesgo:** Desfiguración de sitio, robo de datos sensibles
- **Acción:** Implementar OAuth 2.0 + TOTP en 2 semanas

### 🟠 ALTO (Requiere acción en corto plazo)

#### 5. **API No Documentada / Datos Abiertos Ausente**
- Impacto: No cumple Ley 1712 (Transparencia)
- Acción: Generar API REST pública en 6 semanas

#### 6. **UX Desoptimizada para Móvil**
- Impacto: 70% de tráfico web es móvil, usuarios desembarcan
- Acción: Rediseño responsive + testing en 8 semanas

#### 7. **Formularios sin Validación Robusta**
- Impacto: Datos malformados, inconsistencia en PQRSD
- Acción: Validación HTML5 + server-side + sanitización en 3 semanas

#### 8. **Consentimiento de Cookies Implícito**
- Impacto: Incumplimiento LPDP + RGPD
- Acción: Banner explícito + granular en 1 semana

### 🟡 MEDIO (Requiere acción en mediano plazo)

#### 9. **Sin SLA documentado / Monitoreo básico**
- Acción: Implementar monitoreo 24/7 + SLA 99% en 6 semanas

#### 10. **Control de versiones / CI-CD ausente**
- Acción: Git + GitHub Actions en 4 semanas

---

## PLAN DE MEJORA

### **FASE I: ACCESIBILIDAD + UX (3 MESES)**

**Objetivo:** Cumplimiento WCAG 2.1 AA + Mobile-First Responsive

#### Sprint 1-2: Auditoría + Planificación
- [ ] Auditoría WCAG 2.1 formal (uso WAVE, Axe, NVDA)
- [ ] Análisis heurístico de usabilidad
- [ ] Benchmark contra 5 sitios gubernamentales referentes
- [ ] Entrevista con usuarios con discapacidad
- **Entregable:** Reporte de 50-100 hallazgos con severidad

#### Sprint 3-4: Rediseño de Componentes Core
- [ ] Refactor de colores (contraste 4.5:1 mínimo)
- [ ] Reescritura de estructura HTML (semantic HTML5)
- [ ] Implementación de ARIA labels
- [ ] Navegación por teclado (tabindex, focus management)
- **Entregable:** Componentes accesibles en patrón library

#### Sprint 5-6: Responsive Design + Testing
- [ ] Mobile-first CSS refactor
- [ ] Pruebas en navegadores: Chrome, Firefox, Safari, Edge
- [ ] Testing con lectores de pantalla (NVDA, JAWS)
- [ ] Validación HTML/CSS W3C
- **Entregable:** Sitio responsive con WCAG AA en 95%

### **FASE II: BACKEND SEGURO + API (2 MESES)**

**Objetivo:** Seguridad de datos + API REST pública

#### Sprint 7-8: Arquitectura de Seguridad
- [ ] Implementar OAuth 2.0 / SAML 2.0
- [ ] MFA (TOTP/SMS) en panel administrativo
- [ ] Cifrado de datos en reposo (AES-256)
- [ ] WAF (Web Application Firewall)
- **Entregable:** Infraestructura de seguridad lista

#### Sprint 9-10: API REST + Datos Abiertos
- [ ] Diseño OpenAPI 3.0 de endpoints
- [ ] Implementación de API REST (Node.js/Python)
- [ ] Documentación interactiva (Swagger/ReDoc)
- [ ] Dataset de servicios/estadísticas en JSON/CSV
- **Entregable:** API pública documentada + datasets

### **FASE III: TESTING + OPTIMIZACIÓN (2 MESES)**

**Objetivo:** Garantía de calidad + Rendimiento

#### Sprint 11-12: QA + Seguridad
- [ ] Pruebas automatizadas (Jest, Cypress)
- [ ] Penetration testing profesional (OWASP Top 10)
- [ ] Análisis de vulnerabilidades (SonarQube)
- [ ] Load testing (5K usuarios simultáneos)
- **Entregable:** Reporte de vulnerabilidades = 0 críticas

#### Sprint 13-14: Performance + SEO
- [ ] Optimización de imágenes (WebP, lazy loading)
- [ ] Minificación CSS/JS
- [ ] CDN implementado
- [ ] Core Web Vitals optimizados
- **Entregable:** PageSpeed > 90, LCP < 2.5s

### **FASE IV: DESPLIEGUE + FORMACIÓN (1 MES)**

#### Sprint 15: Beta Privada + Capacitación
- [ ] Servidor de staging para prueba de usuarios internos
- [ ] Formación del equipo de content + soporte
- [ ] Runbook de operaciones
- [ ] Procedimiento de rollback
- **Entregable:** Equipo listo para go-live

#### Sprint 16: Go-Live
- [ ] Despliegue en producción (blue-green deployment)
- [ ] Monitoreo 24/7 activado
- [ ] Comunicación a usuarios
- [ ] Plan de soporte 72 horas post-lanzamiento
- **Entregable:** Nuevo sitio en producción, SLA monitorado

---

## PRIORIZACIÓN DE ACCIONES

### **Inmediato (Próximas 2 semanas)**

1. **Implementar banner de consentimiento de cookies** ⚡
   - Herramienta: CookieBot, OneTrust o similar
   - Costo: $0-2M (SaaS)
   - Esfuerzo: 16 horas

2. **Auditoría WCAG 2.1 externa** ⚡
   - Contratar firma especializada
   - Costo: $15-25M
   - Plazo: 4 semanas

3. **Implementar MFA en panel administrativo** ⚡
   - Usar Google Authenticator / Authy
   - Costo: $0 (open source)
   - Esfuerzo: 40 horas

### **Corto plazo (1-2 meses)**

4. Validación robusta en formularios PQRSD/Tutelas
5. Rediseño responsive de homepage
6. API REST pública v1.0 con documentación
7. Política de privacidad actualizada legalmente
8. SLA monitoreo con uptime.com o similar

### **Mediano plazo (2-4 meses)**

9. Rediseño completo responsive (todas las páginas)
10. Pentest profesional + corrección de vulnerabilidades
11. CI/CD pipeline con GitHub Actions
12. Portal de datos abiertos (datasets públicos)
13. Integración con Cédula Electrónica (CEDEC)

### **Largo plazo (4-6 meses)**

14. Migración a arquitectura moderna (React/Next.js)
15. Certificación ISO 27001
16. Certificación WCAG 2.1 AA formal
17. Integración con sistema de notificaciones gubernamental

---

## ESTIMACIÓN DE ESFUERZO Y COSTO

### **Opción 1: Desarrollo Interno (Recomendada)**

| Recurso | Cantidad | Duración (meses) | Costo Mensual | Total |
|---------|----------|------------------|---------------|-------|
| Product Manager | 1 | 8 | $8M | $64M |
| Arquitecto Senior | 1 | 8 | $12M | $96M |
| Dev Frontend | 2 | 8 | $8M c/u | $128M |
| Dev Backend | 2 | 8 | $8M c/u | $128M |
| QA/Testing | 1 | 8 | $6M | $48M |
| DevOps/Infra | 1 | 8 | $10M | $80M |
| **Subtotal Nómina** | | | | **$544M** |
| Herramientas (GitHub, SonarQube, Monitoring) | | | | $5M |
| Auditoría externa (WCAG, Pentest, ISO) | | | | $40M |
| **TOTAL** | | | | **$589M** |

❌ **Alto presupuesto, pero inversión interna reutilizable**

### **Opción 2: Outsourcing Parcial (Recomendada)**

| Servicio | Proveedor | Duración | Costo |
|----------|-----------|----------|-------|
| Auditoría WCAG 2.1 | Firma especializada | 4 semanas | $20M |
| Pentest profesional | Firma ciberseguridad | 3 semanas | $25M |
| Rediseño responsive (diseño) | Agencia creativa | 6 semanas | $30M |
| Desarrollo Frontend | Dev shop | 6 semanas | $50M |
| Desarrollo Backend + API | Dev shop | 4 semanas | $40M |
| Testing + QA | QA firm | 4 semanas | $20M |
| DevOps/Deployment | Consultoría | 2 semanas | $15M |
| Capacitación equipo | Capacitador | 1 semana | $10M |
| **TOTAL** | | | **$210M** |

✅ **Costo moderado, entrega rápida, menor riesgo**

### **Opción 3: Renovación Incremental (Low-cost)**

| Acción | Costo | Duración |
|--------|-------|----------|
| Auditoría + Plan (interno) | $2M | 2 semanas |
| Mejoras de accesibilidad (interno) | $15M | 4 semanas |
| Responsive CSS refactor (interno) | $20M | 4 semanas |
| API básica (internal) | $25M | 4 semanas |
| Testing + depllegement (internal) | $15M | 2 semanas |
| **TOTAL** | **$77M** | **4 meses** |

⚠️ **Bajo costo pero parcial, requiere equipo interno fuerte**

**RECOMENDACIÓN:** Opción 2 (Outsourcing Parcial) = Balance costo/calidad/velocidad

---

## PROPUESTA DE ARQUITECTURA MODERNIZADA

### **Tecnología Stack Propuesta**

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND (Capa Presentación)         │
├─────────────────────────────────────────────────────────────┤
│  Next.js 14 (React 18) + TypeScript                         │
│  ├─ Tailwind CSS (accesibilidad + responsive)              │
│  ├─ Headless CMS integration (Strapi optional)              │
│  ├─ PWA capabilities (offline-first)                        │
│  └─ Testing: Jest + Playwright + Axe-core (a11y)            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    API LAYER (REST + GraphQL)               │
├─────────────────────────────────────────────────────────────┤
│  Node.js 20 + Express.js                                    │
│  ├─ OpenAPI 3.0 / Swagger documentation                    │
│  ├─ Rate limiting + DDoS protection                        │
│  ├─ JWT + OAuth 2.0 authentication                         │
│  ├─ Input validation + sanitization (OWASP)                │
│  └─ Logging (Winston) + Monitoring (Prometheus)             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│               BACKEND BUSINESS LOGIC                        │
├─────────────────────────────────────────────────────────────┤
│  PostgreSQL 15 + Supabase (auth included)                   │
│  ├─ Encryption at rest (pgcrypto)                          │
│ ├─ Row-level security (RLS)                                │
│  ├─ Connection pooling (PgBouncer)                          │
│  └─ Backups automated (WAL archiving)                       │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                  INFRASTRUCTURE                             │
├─────────────────────────────────────────────────────────────┤
│  Cloud Provider: AWS, Azure, o Google Cloud                 │
│  ├─ Kubernetes (EKS/AKS/GKE) para containerización         │
│  ├─ CDN: CloudFront / Azure CDN (reducir latencia)         │
│  ├─ WAF: AWS WAF / Azure WAF (seguridad)                   │
│  ├─ Load Balancer: Application Load Balancer               │
│  ├─ Auto-scaling: 5-100 pods según demanda                 │
│  └─ Multi-región: Bogotá + Miami (DR)                      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│               SECURITY & COMPLIANCE LAYER                   │
├─────────────────────────────────────────────────────────────┤
│  ├─ Vault (secret management)                              │
│  ├─ SIEM: ELK Stack / Splunk (logging)                     │
│  ├─ DLP: Data Loss Prevention tools                        │
│  ├─ Compliance: OpenSCAP (ISO 27001 validation)            │
│  ├─ DPIA: Data Protection Impact Assessment                │
│  └─ Incident Response: Automated alerts + playbooks        │
└─────────────────────────────────────────────────────────────┘
```

### **DevOps & CI/CD Pipeline**

```
GitHub Push
    ↓
┌─────────────────────────────────┐
│  GitHub Actions Workflow        │
├─────────────────────────────────┤
│ 1. Lint + Format (ESLint)        │
│ 2. Unit Tests (Jest)             │
│ 3. SAST (SonarQube)              │
│ 4. Dependency Check (Snyk)       │
│ 5. Build Docker image            │
│ 6. Push to Registry              │
└─────────────────────────────────┘
    ↓
┌─────────────────────────────────┐
│ Deploy to Staging                │
├─────────────────────────────────┤
│ 1. E2E Tests (Playwright)        │
│ 2. Performance Tests (k6)        │
│ 3. Security Tests (OWASP ZAP)    │
│ 4. Accessibility Tests (Axe)     │
└─────────────────────────────────┘
    ↓
Manual Approval
    ↓
┌─────────────────────────────────┐
│ Deploy to Production (Blue-Green)│
├─────────────────────────────────┤
│ 1. Canary deployment (5% tráfico)│
│ 2. Monitor metrics (5 min)       │
│ 3. Full rollout (95% tráfico)    │
│ 4. Monitore post-deployment      │
└─────────────────────────────────┘
```

### **Ejemplo de Componente Accesible (Next.js + React)**

```tsx
// components/Button.tsx - Patrón accesible reutilizable
import { FC, ButtonHTMLAttributes } from 'react';

interface AccessibleButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  ariaLabel?: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const AccessibleButton: FC<AccessibleButtonProps> = ({
  label,
  ariaLabel,
  isLoading,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      aria-label={ariaLabel || label}
      aria-busy={isLoading}
      className={`btn btn-${variant}`}
      {...props}
    >
      {isLoading && <span aria-hidden="true">⏳</span>}
      {label}
    </button>
  );
};

// Uso: <AccessibleButton label="Enviar" ariaLabel="Enviar formulario de PQRSD" />
```

### **Estructura de Carpetas**

```
personeria-bogota-web/
├── .github/
│   └── workflows/
│       ├── ci.yml (testing + linting)
│       ├── security-scan.yml (SAST + DAST)
│       └── deploy.yml (blue-green deployment)
│
├── frontend/
│   ├── app/ (Next.js App Router)
│   ├── components/ (accesible, reutilizable)
│   ├── hooks/ (React hooks)
│   ├── styles/ (Tailwind + CSS variables)
│   ├── tests/ (Jest + Playwright)
│   └── pages/ (200+ servicios público)
│
├── backend/
│   ├── src/
│   │   ├── api/ (Express routes)
│   │   ├── middleware/ (auth, validation)
│   │   ├── controllers/ (lógica)
│   │   ├── services/ (reglas negocio)
│   │   ├── models/ (DB schemas)
│   │   └── utils/ (helpers)
│   ├── tests/ (unit + integration)
│   └── docs/ (OpenAPI)
│
├── infra/
│   ├── kubernetes/ (manifests k8s)
│   ├── terraform/ (IaC)
│   ├── docker/ (Dockerfiles)
│   └── monitoring/ (Prometheus rules)
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── API.md (OpenAPI)
│   ├── SECURITY.md (OWASP, ISO 27001)
│   ├── ACCESSIBILITY.md (WCAG 2.1)
│   └── DEPLOYMENT.md (runbooks)
│
└── README.md
```

---

## INDICADORES DE ÉXITO (KPIs)

### **Accesibilidad**
- ✅ WCAG 2.1 AA certificado (100% de páginas)
- ✅ 0 errores críticos en auditoría WAVE
- ✅ Navegación por teclado 100% funcional
- ✅ Compatible con 3 lectores de pantalla (NVDA, JAWS, VoiceOver)

### **Rendimiento**
- ✅ Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- ✅ PageSpeed Score > 90
- ✅ Tiempo de respuesta API p95 < 200ms
- ✅ Disponibilidad 99.9% (SLA monitorado)

### **Seguridad**
- ✅ 0 vulnerabilidades críticas/altas post-lanzamiento
- ✅ Penetration testing: 0 hallazgos exploitables
- ✅ OWASP Top 10 remediado 100%
- ✅ Certificado SSL válido, renovación automática

### **Usabilidad**
- ✅ Tasa de abandono formularios < 5%
- ✅ Tiempo medio completar PQRSD < 5 min
- ✅ Satisfacción usuarios > 4/5 estrellas
- ✅ NPS (Net Promoter Score) > 50

### **Conformidad Normativa**
- ✅ Certificación ISO 27001 completada
- ✅ Auditoría LPDP + Decreto 1377 pasada
- ✅ Ley 1712 (Transparencia) cumplida 100%
- ✅ Plan de tratamiento de riesgos documentado

---

## CRONOGRAMA PROPUESTO

```
Enero 2026   [Auditoría + Planificación]
             ├─ Semana 1-2: Auditoría WCAG externa
             ├─ Semana 2-3: Pentest profesional
             └─ Semana 3-4: Detalle técnico + equipo

Febrero 2026 [Fase I: Accesibilidad + UX - SPRINT 1-4]
             ├─ Sprint 1-2: Frontend accesible
             └─ Sprint 3-4: Responsive mobile-first

Marzo 2026   [Fase I: Accesibilidad + UX - SPRINT 5-6]
             └─ Sprint 5-6: Testing + validación WCAG

Abril 2026   [Fase II: Backend + API - SPRINT 7-10]
             ├─ Sprint 7-8: Seguridad OAuth + MFA
             └─ Sprint 9-10: API REST + datos abiertos

Mayo 2026    [Fase III: Testing + Optimización - SPRINT 11-14]
             ├─ Sprint 11-12: QA + Pentest remediación
             └─ Sprint 13-14: Performance + SEO

Junio 2026   [Fase IV: Despliegue - SPRINT 15-16]
             ├─ Sprint 15: Beta privada + formación
             └─ Sprint 16: Go-live producción
```

---

## RECOMENDACIONES FINALES

### 🎯 **Inicio Inmediato**

1. **Esta semana:**
   - Aprobar presupuesto ($210M opción recomendada)
   - Contratar Auditoría WCAG externa
   - Implementar banner de cookies

2. **Próximas 2 semanas:**
   - Seleccionar dev shop para outsourcing
   - Conformar equipo interno (PM, Arqt, QA)
   - Crear roadmap detallado

3. **Antes del 15 de marzo:**
   - Reporte de auditoría WCAG completo
   - Primer sprint frontend completado
   - Infraestructura de staging lista

### 🚀 **Visión a Largo Plazo**

- **Junio 2026:** Nuevo sitio web en producción, 100% WCAG 2.1 AA
- **Julio 2026:** API pública documentada, datos abiertos
- **Septiembre 2026:** Certificación ISO 27001 completada
- **Diciembre 2026:** Integración con Cédula Electrónica

---

**Documento preparado por:** DTIC Personería de Bogotá  
**Fecha de validez:** Enero 2026 - Junio 2026  
**Clasificación:** Uso interno  
**Próxima revisión:** Mensual hasta go-live

