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
  }
];
