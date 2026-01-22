# 📋 ESPECIFICACIÓN DE REQUERIMIENTOS TÉCNICOS
## Rediseño Sitio Web Personería de Bogotá - Conformidad MINTIC 2025

**Versión:** 1.0  
**Fecha:** 22 de enero de 2026  
**Estado:** Propuesta  

---

## 1. REQUERIMIENTOS FUNCIONALES

### 1.1 Gestión de Servicios Ciudadanos

#### RF-001: Portal Unificado de Servicios
- **Descripción:** Integrar todos los servicios en línea bajo una interfaz única
- **Criterios de aceptación:**
  - Mínimo 40 servicios/trámites accesibles desde inicio
  - Búsqueda global de servicios con filtros (categoría, público, estado)
  - Información actualizable desde CMS sin redeploy
  - Integración con PQRSD, Tutelas, Conciliaciones, Antecedentes

#### RF-002: Sistema de Recomendación de Servicios
- **Descripción:** Sugerir servicios según perfil del ciudadano
- **Criterios de aceptación:**
  - Preguntas de contexto (edad, tipo de necesidad)
  - Resultado: Top 3 servicios recomendados
  - Historial de consultas del usuario (opcional, con consentimiento)

#### RF-003: Sistema de Turnos Integrado (Reemplazar Digiturno)
- **Descripción:** Gestión de citas en línea para sedes
- **Criterios de aceptación:**
  - Disponibilidad en tiempo real de turnos
  - Confirmación por SMS + email
  - Recordatorio automático 24h antes
  - Cancelación/reprogramación sin costo

### 1.2 Formularios y PQRSD

#### RF-004: Formularios Dinámicos Accesibles
- **Descripción:** Motor de formularios reutilizable WCAG 2.1 AA
- **Criterios de aceptación:**
  - Labels asociados correctamente a inputs
  - Validación real-time + server-side
  - Mensajes de error in-line con aria-describedby
  - Progresión clara del formulario
  - Guardado automático en draft

#### RF-005: Seguimiento de PQRSD
- **Descripción:** Radicación en línea + seguimiento por radicado
- **Criterios de aceptacion:**
  - Número de radicado inmediato
  - Estatus en tiempo real (Radicado, En proceso, Respondido)
  - Notificaciones por SMS/email en cambios
  - Carga de evidencia/anexos
  - Respuesta descargable en PDF certificado

### 1.3 Información Institucional

#### RF-006: Sitemap Dinámico
- **Descripción:** Mapa del sitio actualizable, HTML + XML
- **Criterios de aceptación:**
  - Estructura visual del sitio
  - Prioridad de páginas (priority)
  - Última modificación (lastmod)
  - Cambio frecuencia (changefreq)
  - Generación automática desde árbol de contenidos

#### RF-007: Búsqueda Avanzada
- **Descripción:** Motor de búsqueda con filtros y facetas
- **Criterios de aceptación:**
  - Autocomplete en búsqueda
  - Filtros: tipo de contenido, fecha, servicio
  - Resaltado de términos en resultados
  - Búsqueda por campos específicos (Ej: NIT, radicado)
  - Tiempo de respuesta < 500ms

---

## 2. REQUERIMIENTOS NO FUNCIONALES

### 2.1 Rendimiento

#### RNF-001: Velocidad de Carga
- **Requisito:** First Contentful Paint (FCP) < 1.8s
- **Requisito:** Largest Contentful Paint (LCP) < 2.5s
- **Requisito:** Cumulative Layout Shift (CLS) < 0.1
- **Cumplimiento:** Google PageSpeed Insights > 90
- **Medición:** Simulación 4G slow / 3G slow
- **Herramientas:** Lighthouse, WebPageTest, Real User Monitoring (RUM)

#### RNF-002: Escalabilidad
- **Requisito:** Soportar 5,000 usuarios simultáneos
- **Requisito:** 50,000 sesiones diarias en picos
- **Requisito:** Respuesta API p95 < 200ms bajo carga
- **Requisito:** Auto-scaling automático (5-100 pods)
- **Medición:** Load testing con k6, JMeter mensual

#### RNF-003: Disponibilidad
- **Requisito:** SLA 99.9% (máximo 43 minutos downtime/mes)
- **Requisito:** RTO (Recovery Time Objective) < 1 hora
- **Requisito:** RPO (Recovery Point Objective) < 15 minutos
- **Requisito:** Monitoreo 24/7 con alertas automatizadas
- **Medición:** Uptime.com, Synthetic monitoring

### 2.2 Seguridad

#### RNF-004: Cifrado en Tránsito
- **Requisito:** HTTPS/TLS 1.2 mínimo en todas las páginas
- **Requisito:** TLS 1.3 preferido
- **Requisito:** Certificate pinning en apps móviles
- **Requisito:** HSTS header con max-age ≥ 31536000
- **Requisito:** Perfect Forward Secrecy (PFS) habilitado
- **Validación:** SSL Labs A+ rating

#### RNF-005: Cifrado en Reposo
- **Requisito:** AES-256 para datos sensibles (PII)
- **Requisito:** Gestión centralizada de claves (Vault)
- **Requisito:** Rotación de claves cada 90 días
- **Requisito:** Cifrado de backups
- **Validación:** Auditoría criptográfica trimestral

#### RNF-006: Protección contra Ataques OWASP Top 10
- **Requisito:** 0 vulnerabilidades críticas
- **Requisito:** Validación de entrada en servidor (nunca solo cliente)
- **Requisito:** Prevención de XSS (sanitización + CSP)
- **Requisito:** Prevención de CSRF (tokens SameSite)
- **Requisito:** Prevención de SQL Injection (prepared statements)
- **Requisito:** Rate limiting en endpoints (100 req/min por IP)
- **Validación:** OWASP ZAP scan automatizado, Pentest anual

#### RNF-007: Gestión de Sesiones
- **Requisito:** Timeout de sesión 30 minutos (inactividad)
- **Requisito:** Renovación de tokens cada 15 minutos
- **Requisito:** Logout en cierre de pestaña
- **Requisito:** Una sesión activa por usuario simultáneamente
- **Requisito:** Registro de acceso (fecha, IP, dispositivo)
- **Validación:** Testing automatizado de sesiones

### 2.3 Accesibilidad (WCAG 2.1 AA)

#### RNF-008: Perceivable - Contenido Visual
- **Requisito:** Contraste mínimo 4.5:1 texto normal
- **Requisito:** Contraste mínimo 3:1 texto grande (18pt+)
- **Requisito:** Alt text para todas las imágenes (descriptivo, no redundante)
- **Requisito:** Redimensionamiento texto hasta 200% sin scroll horizontal
- **Requisito:** Sin información transmitida solo por color
- **Validación:** WAVE scanner, Axe-core test, pruebas manuales

#### RNF-009: Operable - Navegación
- **Requisito:** Navegación completa por teclado (Tab, Enter, Escape)
- **Requisito:** Sin trampas de foco (focus trap innecesario)
- **Requisito:** Indicador de foco visible (outline, highlight)
- **Requisito:** Orden de tabulación lógico de izquierda a derecha
- **Requisito:** Sin límite de tiempo para acciones (excepto por seguridad)
- **Validación:** Pruebas manuales con teclado, NVDA, JAWS

#### RNF-010: Comprensible - Contenido
- **Requisito:** Lenguaje claro y simple (B1 en escala CEFR)
- **Requisito:** Definición de términos técnicos (glosario o title)
- **Requisito:** Encabezados jerárquicos (H1, H2, H3 anidados)
- **Requisito:** Texto alternativo para gráficos/datos
- **Requisito:** Instrucciones claras en formularios
- **Validación:** Readability score > 60 (Flesch), revisión de legal

#### RNF-011: Robusto - Compatibilidad
- **Requisito:** HTML5 válido según W3C (0 errores)
- **Requisito:** ARIA labels donde sea necesario
- **Requisito:** Nombres/roles/valores programables
- **Requisito:** Compatible con lectores de pantalla (NVDA, JAWS, VoiceOver)
- **Requisito:** Compatible navegadores: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Validación:** Validación HTML W3C, testing con NVDA

### 2.4 Usabilidad

#### RNF-012: Diseño Responsivo
- **Requisito:** Mobile-first approach
- **Requisito:** Breakpoints: 320px (móvil), 768px (tablet), 1024px (desktop), 1920px (HD)
- **Requisito:** Funcionalidad completa en todos los breakpoints
- **Requisito:** Botones táctiles mínimo 48x48px (touch target)
- **Requisito:** Sin zoom manual requerido para leer
- **Validación:** Testing manual, Chrome DevTools, responsive design checker

#### RNF-013: Tiempo de Interacción
- **Requisito:** Tiempo para completar formulario < 5 minutos (PQRSD)
- **Requisito:** Número de pasos en flujo < 5 (formulario multistep)
- **Requisito:** Carga de página < 3 segundos (en 4G)
- **Requisito:** Tiempo de respuesta a entrada < 100ms
- **Validación:** User testing, analytics de tiempo en página

#### RNF-014: Tasa de Error
- **Requisito:** Tasa de abandono de formulario < 5%
- **Requisito:** Errores de validación < 2% de envíos
- **Requisito:** Errores de transacción < 0.1%
- **Validación:** Google Analytics, monitoreo de eventos

### 2.5 Conformidad Normativa

#### RNF-015: Protección de Datos Personales (LPDP)
- **Requisito:** Política de privacidad actualizada y visible
- **Requisito:** Consentimiento explícito previo para PII
- **Requisito:** Derechos ARCO implementados (Acceso, Rectificación, Cancelación, Oposición)
- **Requisito:** Registro de actividades de tratamiento
- **Requisito:** DPA (Data Protection Impact Assessment) documentado
- **Requisito:** Responsable de datos designado públicamente
- **Validación:** Auditoría legal trimestral

#### RNF-016: Cumplimiento Ley 1712 (Transparencia)
- **Requisito:** API pública con datos de gestión
- **Requisito:** Datasets en formatos abiertos (CSV, JSON)
- **Requisito:** Licencia CC-BY indicada en cada dataset
- **Requisito:** Metadata Dublin Core (título, creador, fecha)
- **Requisito:** Búsqueda y descarga fácil de datos
- **Validación:** Auditoría de datos abiertos anual

#### RNF-017: Normativa Colombiana
- **Requisito:** Términos y condiciones actualizados
- **Requisito:** Avisos legales en español
- **Requisito:** Integración con plataformas gubernamentales (notificaciones.gov.co, CEDEC)
- **Requisito:** Facturación electrónica (si aplica) conforme DIAN
- **Validación:** Revisión legal semestral

---

## 3. REQUERIMIENTOS DE INTERFAZ DE USUARIO

### 3.1 Componentes Reutilizables

```
Design System: PersoneriaUI
├── Colores (WCAG AA compliant)
│   ├── Primary: #1e3a8a (azul oficial)
│   ├── Secondary: #0f766e (verde agua)
│   ├── Danger: #dc2626 (rojo)
│   └── Accesibles en contraste
│
├── Tipografía
│   ├── Títulos: Inter, 24-32px, bold
│   ├── Body: Inter, 14-18px, regular
│   └── Código: Fira Code, 12-14px
│
├── Componentes
│   ├── Button (variant, size, state, loading)
│   ├── Input (text, email, phone, date, number)
│   ├── Select / Dropdown
│   ├── Checkbox / Radio
│   ├── Textarea (character counter)
│   ├── Alert (success, warning, error, info)
│   ├── Modal / Dialog (accessible)
│   ├── Toast (notification)
│   ├── Card (image, title, description)
│   ├── Breadcrumb (navigation context)
│   ├── Pagination (with labels)
│   ├── Accordion (keyboard accessible)
│   ├── Tabs (ARIA roles)
│   ├── Stepper (progress indication)
│   └── Timeline (temporal context)
│
└── Iconografía
    └── Feather icons (SVG, scalable)
```

### 3.2 Patrones de Flujo

#### Patrón: Formulario PQRSD
```
Inicio → Tipo PQRS → Categoría → Descripción → Anexos → 
Datos Contacto → Confirmación → Éxito (Radicado)
```

#### Patrón: Búsqueda de Servicio
```
Inicio → Búsqueda/Categoría → Filtros → Resultados → 
Detalles Servicio → Iniciar Trámite
```

#### Patrón: Autenticación
```
Login → MFA (TOTP/SMS) → Dashboard → Acciones → Logout
```

---

## 4. REQUERIMIENTOS DE BASE DE DATOS

### 4.1 Esquema de Datos (Modelos)

#### Tabla: users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  document_number VARCHAR(20) UNIQUE,
  document_type VARCHAR(20), -- CC, CE, PP, NIT
  full_name VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE,
  
  -- Seguridad
  password_hash VARCHAR(255), -- bcrypt
  mfa_enabled BOOLEAN DEFAULT FALSE,
  mfa_secret VARCHAR(32),
  
  -- Consentimiento
  privacy_accepted BOOLEAN DEFAULT FALSE,
  privacy_accepted_at TIMESTAMP,
  marketing_consent BOOLEAN DEFAULT FALSE,
  
  CONSTRAINT email_valid CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);
```

#### Tabla: services
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL, -- SCU (Servicio código único)
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(50), -- Misional, Administrativo, Ciudadano
  requirements TEXT[], -- Array de requisitos
  processing_days INTEGER, -- Tiempo promedio
  cost DECIMAL(10,2), -- Gratuito si 0
  online BOOLEAN DEFAULT FALSE,
  in_person_required BOOLEAN DEFAULT FALSE,
  url VARCHAR(500),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);
```

#### Tabla: pqrsd
```sql
CREATE TABLE pqrsd (
  id UUID PRIMARY KEY,
  tracking_number VARCHAR(20) UNIQUE NOT NULL, -- Radicado
  user_id UUID NOT NULL REFERENCES users(id),
  type VARCHAR(20) NOT NULL, -- P=Petición, Q=Queja, R=Reclamo, S=Sugerencia, D=Denuncia
  category VARCHAR(100),
  description TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'RADICADO', -- RADICADO, EN_PROCESO, RESPONDIDO, CERRADO
  priority VARCHAR(20) DEFAULT 'NORMAL', -- BAJA, NORMAL, ALTA, CRÍTICA
  assigned_to UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  response_date TIMESTAMP,
  response_text TEXT,
  attachment_urls VARCHAR(500)[],
  
  -- Auditoría
  created_by VARCHAR(100),
  updated_at TIMESTAMP DEFAULT NOW(),
  updated_by VARCHAR(100),
  
  CONSTRAINT valid_type CHECK (type IN ('P','Q','R','S','D'))
);
```

#### Tabla: audit_logs
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  action VARCHAR(100), -- CREATE, UPDATE, DELETE, LOGIN, LOGOUT, DOWNLOAD
  entity_type VARCHAR(50), -- users, pqrsd, services
  entity_id UUID,
  ip_address INET,
  user_agent TEXT,
  changes JSONB, -- Registro de cambios
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Tabla: consent_logs
```sql
CREATE TABLE consent_logs (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  consent_type VARCHAR(50), -- privacy, cookies, marketing
  value BOOLEAN, -- true = consintió, false = rechazó
  timestamp TIMESTAMP DEFAULT NOW(),
  ip_address INET,
  user_agent TEXT
);
```

### 4.2 Seguridad de Base de Datos

- **Encriptación:** pgcrypto para campos sensibles
- **Row-Level Security (RLS):** Usuarios solo ven sus propios datos
- **Backups:** Diarios con replicación a otro servidor
- **Connection pooling:** PgBouncer con máx 100 conexiones
- **Monitoreo:** Alertas para queries lentas (>5s)

---

## 5. REQUERIMIENTOS DE API

### 5.1 Endpoints REST

#### Authentication (POST /api/v1/auth/*)
```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/mfa/verify
POST /api/v1/auth/refresh-token
POST /api/v1/auth/logout
POST /api/v1/auth/forgot-password
POST /api/v1/auth/reset-password
```

#### Services (GET /api/v1/services/*)
```
GET  /api/v1/services (búsqueda, filtros, paginación)
GET  /api/v1/services/:id
GET  /api/v1/services/:id/requirements
GET  /api/v1/services/search?q=tutelas
GET  /api/v1/services/by-category/:category
```

#### PQRSD (POST,GET /api/v1/pqrsd/*)
```
POST /api/v1/pqrsd (crear nueva)
GET  /api/v1/pqrsd/:tracking_number (seguimiento público)
GET  /api/v1/pqrsd/user/:user_id (mis solicitudes - auth requerida)
PUT  /api/v1/pqrsd/:id (actualizar - admin)
GET  /api/v1/pqrsd/:id/download-pdf (descarga certificada)
```

#### Users (GET /api/v1/users/* - auth requerida)
```
GET  /api/v1/users/me (perfil actual)
PUT  /api/v1/users/me (actualizar perfil)
DELETE /api/v1/users/me (solicitar eliminación - GDPR)
POST /api/v1/users/me/download-data (descarga de datos - GDPR)
PUT  /api/v1/users/me/password (cambiar contraseña)
GET  /api/v1/users/me/consents (historial de consentimientos)
```

#### Open Data (GET /api/v1/data/*)
```
GET  /api/v1/data/services.json (todas los servicios)
GET  /api/v1/data/statistics.json (estadísticas públicas)
GET  /api/v1/data/pqrsd-stats.json (estadísticas PQRSD)
```

### 5.2 Especificación OpenAPI 3.0

```yaml
openapi: 3.0.0
info:
  title: Personería de Bogotá API
  version: 1.0.0
  description: API pública para servicios digitales
  contact:
    name: DTIC Personería
    email: soporte@personeriabogota.gov.co

servers:
  - url: https://api.personeriabogota.gov.co/v1
    description: Producción
  - url: https://api-staging.personeriabogota.gov.co/v1
    description: Staging

securitySchemes:
  bearerAuth:
    type: http
    scheme: bearer
    bearerFormat: JWT

paths:
  /auth/login:
    post:
      summary: Login de usuario
      tags: [Authentication]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email: {type: string, format: email}
                password: {type: string, format: password}
              required: [email, password]
      responses:
        '200':
          description: Login exitoso
          content:
            application/json:
              schema:
                type: object
                properties:
                  access_token: {type: string}
                  mfa_required: {type: boolean}
                  mfa_method: {type: string, enum: [totp, sms]}
        '401':
          description: Credenciales inválidas
        '429':
          description: Demasiados intentos de login
          
  /services:
    get:
      summary: Listar servicios
      tags: [Services]
      parameters:
        - name: category
          in: query
          schema: {type: string}
        - name: search
          in: query
          schema: {type: string}
        - name: page
          in: query
          schema: {type: integer, default: 1}
        - name: limit
          in: query
          schema: {type: integer, default: 20}
      responses:
        '200':
          description: Lista de servicios
          content:
            application/json:
              schema:
                type: object
                properties:
                  data: {type: array}
                  pagination: {type: object}
                  meta: {type: object}
```

---

## 6. REQUERIMIENTOS DE TESTING

### 6.1 Estrategia de Testing

| Tipo | Herramienta | Cobertura | Frecuencia |
|------|-------------|-----------|------------|
| Unit | Jest | >70% | Cada commit |
| Integration | Supertest | >60% | Cada PR |
| E2E | Playwright | Flujos críticos | Cada deploy |
| Accesibilidad | Axe-core | 100% de páginas | Cada PR |
| Seguridad | OWASP ZAP | Escaneo completo | Semanal |
| Rendimiento | Lighthouse | PageSpeed > 90 | Diario |
| Pen Test | Profesional | Completo | Anual |

### 6.2 Criterios de Aceptación de Testing

- ✅ 0 bugs críticos en producción
- ✅ Cobertura de código ≥ 70%
- ✅ WCAG 2.1 AA 100% de páginas
- ✅ SLA uptime 99.9%
- ✅ Tiempo de respuesta p95 < 200ms
- ✅ 0 vulnerabilidades OWASP Top 10

---

## 7. REQUERIMIENTOS DE ENTREGA Y DOCUMENTACIÓN

### 7.1 Documentación Obligatoria

- [ ] Architecture Decision Records (ADRs)
- [ ] API Documentation (OpenAPI + Swagger UI)
- [ ] Security & Compliance Report (ISO 27001)
- [ ] Accessibility Report (WCAG 2.1 AA)
- [ ] Data Protection Impact Assessment (DPIA)
- [ ] Runbooks (deployment, incident response, rollback)
- [ ] User Guide (ciudadanos + administradores)
- [ ] Training Materials (equipo DTIC)

### 7.2 Criterios de Go-Live

- ✅ Auditoría WCAG 2.1 AA pasada
- ✅ Pentest sin vulnerabilidades críticas/altas
- ✅ Load testing exitoso (5K usuarios)
- ✅ Disaster recovery probado
- ✅ Plan de soporte 72h post-lanzamiento
- ✅ Equipo capacitado
- ✅ SLA monitoreo activo
- ✅ Comunicación a usuarios completada

---

**Documento preparado por:** DTIC Personería de Bogotá  
**Vigencia:** Enero 2026 - Junio 2026  
**Próxima Revisión:** Mensual durante desarrollo

