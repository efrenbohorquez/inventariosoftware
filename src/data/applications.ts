import type { Application } from '@types/index';

export const APP_DATA: Application[] = [
  {
    name: "SIRIUS (SGDEA)",
    url: "https://sirius.personeriabogota.gov.co:8443/toolbox-front/#/login",
    category: "Misional",
    tech: "Java / Angular / Azure",
    criticality: "Crítica",
    dependency: "Baja",
    status: "Moderno",
    description: "Eje central de gestión documental y procesos. Es la memoria institucional de la entidad.",
    risk: "Bajo riesgo técnico, pero dependencia contractual con el proveedor."
  },
  {
    name: "Portal Web Institucional",
    url: "https://www.personeriabogota.gov.co",
    category: "Ciudadano",
    tech: "PHP / Joomla! CMS",
    criticality: "Alta",
    dependency: "Media",
    status: "Estándar",
    description: "Puerta de entrada única para servicios ciudadanos y transparencia.",
    risk: "Riesgo de defacement o caída que aislaría digitalmente a la ciudadanía."
  },
  {
    name: "SINPROC",
    url: "https://apps.personeriabogota.gov.co/sinproc/login.php",
    category: "Misional",
    tech: "PHP / MySQL (Legacy)",
    criticality: "Alta",
    dependency: "Muy Alta",
    status: "Legacy",
    description: "Sistema integrado de procesos. Representa la mayor deuda técnica de la entidad.",
    risk: "Vulnerabilidades por versiones antiguas y dependencia de conocimiento tribal."
  },
  {
    name: "SIAD",
    url: "https://siad.personeriabogota.gov.co",
    category: "Misional",
    tech: ".NET Core / PHP Moderno",
    criticality: "Alta",
    dependency: "Baja",
    status: "Moderno",
    description: "Sistema de Reporte de Actuaciones Disciplinarias lanzado en 2025.",
    risk: "Aplicativo nuevo de extranet para centralizar información disciplinaria distrital."
  },
  {
    name: "ControlDoc",
    url: "https://sgdea.personeriabogota.gov.co/ControlDoc/Home/Index",
    category: "Administrativo",
    tech: "ASP.NET / IIS",
    criticality: "Media",
    dependency: "Baja",
    status: "Estándar",
    description: "Plataforma para Ventanilla Virtual y gestión inicial de PQRSD.",
    risk: "Dependencia de servidores Windows locales."
  },
  {
    name: "Antecedentes Disciplinarios",
    url: "https://antecedentes.personeriabogota.gov.co/expedicion-antecedentes",
    category: "Ciudadano",
    tech: "Web App / Azure / SQL",
    criticality: "Alta",
    dependency: "Baja",
    status: "Moderno",
    description: "Servicio de mayor tráfico. Permite expedir certificados en tiempo real.",
    risk: "Crítico para la contratación pública nacional."
  },
  {
    name: "RAPIV",
    url: "https://sccpb.personeriabogota.gov.co/rapiv",
    category: "Misional",
    tech: "Web App Segura",
    criticality: "Alta",
    dependency: "Media",
    status: "Estándar",
    description: "Registro de Atención Psicosocial Integral a Víctimas.",
    risk: "Manejo de información extremadamente sensible (Habeas Data)."
  },
  {
    name: "Isolución",
    url: "https://isolucion.personeriabogota.gov.co/Isolucion/PaginaLogin.aspx",
    category: "Administrativo",
    tech: "ASP.NET (.aspx)",
    criticality: "Media",
    dependency: "Baja",
    status: "Estándar",
    description: "Administra el Sistema de Gestión de Calidad (SGC) y mapas de riesgos.",
    risk: "Fuente de la verdad normativa y procedimental."
  },
  {
    name: "Agendamiento (Digiturno)",
    url: "https://digiturno.personeriabogota.gov.co:8914/",
    category: "Ciudadano",
    tech: "Software Propietario",
    criticality: "Media",
    dependency: "Baja",
    status: "Legacy",
    description: "Gestión de filas y turnos en centros de atención.",
    risk: "Exposición de puertos no estándar (8914) directo a Internet."
  },
  {
    name: "Chat Institucional",
    url: "https://www.personeriabogota.gov.co/servicios-a-la-ciudadania/chat-institucional",
    category: "Ciudadano",
    tech: "Widget JS / Atención Humana",
    criticality: "Media",
    dependency: "Extrema",
    status: "Legacy",
    description: "Canal de atención síncrona asistida por humanos (15 operadores).",
    risk: "Escalabilidad limitada a la nómina humana; no posee IA robusta."
  },
  {
    name: "Tutelas en Línea",
    url: "https://www.personeriabogota.gov.co/servicios-a-la-ciudadania/tutelas-en-linea",
    category: "Ciudadano",
    tech: "Web App",
    criticality: "Alta",
    dependency: "Media",
    status: "Moderno",
    description: "Sistema para radicación y seguimiento de tutelas, impugnaciones y desacatos en línea.",
    risk: "Impacto legal directo en procesos constitucionales. Requiere auditoría permanente."
  },
  {
    name: "Conciliaciones en Línea",
    url: "https://conciwebv2.personeriabogota.gov.co/",
    category: "Ciudadano",
    tech: "Web App / Gestor de conflictos",
    criticality: "Alta",
    dependency: "Media",
    status: "Moderno",
    description: "Plataforma para gestión y seguimiento de procesos de conciliación.",
    risk: "Crítica para resolución alternativa de conflictos. Datos sensibles de disputantes."
  },
  {
    name: "Relatoría de la Potestad Disciplinaria",
    url: "https://relatorias.personeriabogota.gov.co/relatoria/consulta",
    category: "Ciudadano",
    tech: "Portal Web / Base de datos",
    criticality: "Alta",
    dependency: "Baja",
    status: "Moderno",
    description: "Consulta de expedientes y antecedentes disciplinarios de servidores públicos.",
    risk: "Información pública sensible. Acceso abierto a información de expedientes disciplinarios."
  },
  {
    name: "Chat Bot Inteligente",
    url: "https://frontos.outsourcing.com.co:8706/TestChatBot/Test?CampanaId=nYw6J7YK5ZBPju9xh83SqQ==",
    category: "Ciudadano",
    tech: "Bot IA / Cloud Outsourcing",
    criticality: "Media",
    dependency: "Baja",
    status: "Moderno",
    description: "Bot conversacional para orientación inicial a ciudadanos.",
    risk: "Dependencia de proveedor externo. Integración con infraestructura tercerizada."
  },
  {
    name: "Línea 143 (Atención Telefónica)",
    url: "https://www.personeriabogota.gov.co/tramites-servicios-sedes-y-canales-de-atencion/personeria-linea-143",
    category: "Ciudadano",
    tech: "Sistema Telefónico / Call Center",
    criticality: "Alta",
    dependency: "Extrema",
    status: "Legacy",
    description: "Línea gratuita de atención ciudadana 24/7 para denuncias y orientación.",
    risk: "Dependencia 100% de infraestructura telefónica y personal humano. Escala limitada."
  },
  {
    name: "PQRSD (Peticiones, Quejas, Reclamos, Sugerencias, Denuncias)",
    url: "https://www.personeriabogota.gov.co/al-servicio-de-la-ciudad/peticiones-quejas-reclamos-sugerencias-denuncias-y-felicitaciones",
    category: "Ciudadano",
    tech: "Portal Web / Gestor documental",
    criticality: "Crítica",
    dependency: "Media",
    status: "Estándar",
    description: "Tramitador de peticiones, quejas, reclamos y denuncias contra funcionarios públicos.",
    risk: "Eje central de la función de control. Manejo de información sensible de denuncias."
  },
  {
    name: "WhatsApp Institucional",
    url: "https://wa.link/c5313e",
    category: "Ciudadano",
    tech: "WhatsApp Business API / Cloud",
    criticality: "Media",
    dependency: "Extrema",
    status: "Moderno",
    description: "Atención por WhatsApp para consultas ciudadanas y denuncias.",
    risk: "Dependencia total de Meta/WhatsApp. Información sensible en plataforma tercerizada."
  },
  {
    name: "Sistema de Gestión de Calidad (SGC)",
    url: "https://isolucion.personeriabogota.gov.co/Isolucion/PaginaLogin.aspx",
    category: "Administrativo",
    tech: "ASP.NET / SGC Integrado",
    criticality: "Media",
    dependency: "Baja",
    status: "Estándar",
    description: "Gestión de procesos, procedimientos y mejora continua según normativa ICONTEC.",
    risk: "Fuente de verdad normativa. Cambios requieren coordinación institucional."
  },
  {
    name: "Portal de Transparencia y Datos Abiertos",
    url: "https://www.personeriabogota.gov.co",
    category: "Ciudadano",
    tech: "Joomla CMS / Portal de datos",
    criticality: "Alta",
    dependency: "Media",
    status: "Estándar",
    description: "Acceso público a reportes, estadísticas y datos de gestión institucional.",
    risk: "Vitrina pública de la entidad. Caída afecta reputación y acceso a información."
  }
];
