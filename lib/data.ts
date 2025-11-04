// Datos de blogs para búsqueda
export const blogPosts = [
  {
    id: "baja-maternidad",
    title: "Guía Completa para Pedir la Baja por Maternidad en España",
    description: "Todo lo que necesitas saber sobre la baja por maternidad: requisitos, trámites, duración y cuantía. Una guía detallada para trabajadoras por cuenta ajena, autónomas y personas en situación de desempleo.",
    category: "Prestaciones",
    date: "16 OCT 2024",
    readTime: "10 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/baja-maternidad"
  },
  {
    id: "cita-previa-seguridad-social",
    title: "Cómo Solicitar Cita Previa en la Seguridad Social Paso a Paso",
    description: "Guía completa para obtener tu cita previa en la Seguridad Social de forma online y presencial. Incluye requisitos, documentos necesarios y soluciones a los problemas más comunes.",
    category: "Trámites",
    date: "14 OCT 2024",
    readTime: "7 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/cita-previa-seguridad-social"
  },
  {
    id: "ayudas-discapacitados",
    title: "Ayudas y Prestaciones para Personas con Discapacidad o Diversidad Funcional",
    description: "Descubre todas las ayudas y beneficios disponibles para personas con discapacidad: prestaciones económicas, ayudas técnicas, beneficios fiscales y acceso a vivienda protegida.",
    category: "Ayudas",
    date: "12 OCT 2024",
    readTime: "12 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/ayudas-discapacitados"
  },
  {
    id: "prestacion-desempleo",
    title: "Prestación por Desempleo: Cómo Cobrar el Paro en 2024",
    description: "Todo sobre la prestación por desempleo: requisitos de cotización, cuantía, duración máxima, cómo solicitarla y renovarla. Incluye calculadora de prestación y casos especiales.",
    category: "Prestaciones",
    date: "10 OCT 2024",
    readTime: "10 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/prestacion-desempleo"
  },
  {
    id: "prestacion-hijo-cargo",
    title: "Prestación por Hijo a Cargo: Requisitos y Cuantía 2024",
    description: "Información detallada sobre la prestación por hijo a cargo: requisitos, cuantía, cómo solicitarla y diferencias entre prestación contributiva y no contributiva.",
    category: "Ayudas",
    date: "8 OCT 2024",
    readTime: "6 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/prestacion-hijo-cargo"
  },
  {
    id: "pension-no-contributiva",
    title: "Pensión No Contributiva: Requisitos y Cómo Solicitarla",
    description: "Guía completa sobre las pensiones no contributivas: quién puede solicitarla, requisitos económicos, cuantía actualizada y proceso de solicitud paso a paso.",
    category: "Pensiones",
    date: "6 OCT 2024",
    readTime: "9 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/pension-no-contributiva"
  },
  {
    id: "ayudas-madres-solteras",
    title: "Ayudas para Madres Solteras y Familias Monoparentales 2024",
    description: "Prestaciones específicas para madres solteras y familias monoparentales: ayudas económicas, beneficios fiscales, acceso a vivienda y ayudas para la crianza.",
    category: "Ayudas",
    date: "4 OCT 2024",
    readTime: "7 min",
    author: "Equipo SEPE",
    location: "España",
    type: "blog" as const,
    href: "/blog/ayudas-madres-solteras"
  },
  {
    id: "trabajastur",
    title: "Trabajastur: Servicio de Empleo del Principado de Asturias",
    description: "Guía completa sobre Trabajastur: cursos gratuitos, ofertas de empleo, ayudas regionales y servicios disponibles para demandantes de empleo en Asturias.",
    category: "Regionales",
    date: "2 OCT 2024",
    readTime: "5 min",
    author: "Equipo SEPE",
    location: "Asturias",
    type: "blog" as const,
    href: "/blog/trabajastur"
  }
];

// Datos de tutoriales para búsqueda
export const tutorials = [
  {
    id: "1",
    title: "Cómo Inscribirse en un Curso SEPE Online",
    description: "Guía paso a paso para inscribirte en cursos de formación profesional a través de la sede electrónica del SEPE.",
    category: "Inscripción",
    duration: "10 min",
    difficulty: "Fácil",
    type: "tutorial" as const,
    href: "/tutoriales/1"
  },
  {
    id: "2",
    title: "Descargar Certificados Profesionales",
    description: "Aprende a descargar tus certificados profesionales una vez finalizado el curso SEPE.",
    category: "Certificados",
    duration: "5 min",
    difficulty: "Fácil",
    type: "tutorial" as const,
    href: "/tutoriales/2"
  },
  {
    id: "3",
    title: "Renovar la Demanda de Empleo",
    description: "Tutorial completo para renovar tu demanda de empleo de forma online y no perder las prestaciones.",
    category: "Prestaciones",
    duration: "8 min",
    difficulty: "Fácil",
    type: "tutorial" as const,
    href: "/tutoriales/3"
  },
  {
    id: "4",
    title: "Acceder a la Sede Electrónica del SEPE",
    description: "Guía para crear tu cuenta y acceder a todos los servicios online del SEPE.",
    category: "Acceso",
    duration: "12 min",
    difficulty: "Medio",
    type: "tutorial" as const,
    href: "/tutoriales/4"
  },
  {
    id: "5",
    title: "Consultar tu Historial Formativo",
    description: "Cómo acceder y consultar todos los cursos que has realizado en el SEPE.",
    category: "Consulta",
    duration: "5 min",
    difficulty: "Fácil",
    type: "tutorial" as const,
    href: "/tutoriales/5"
  },
  {
    id: "6",
    title: "Solicitar Certificado de Prestaciones",
    description: "Aprende a solicitar tu certificado de prestaciones por desempleo de forma online.",
    category: "Certificados",
    duration: "7 min",
    difficulty: "Fácil",
    type: "tutorial" as const,
    href: "/tutoriales/6"
  }
];

// Función de búsqueda
export function searchContent(query: string) {
  if (!query.trim()) {
    return { blogs: [], tutorials: [] };
  }

  const searchTerm = query.toLowerCase().trim();
  
  // Buscar en blogs
  const blogResults = blogPosts.filter(item => {
    const searchableText = `${item.title} ${item.description} ${item.category} ${item.author || ""} ${item.location || ""}`.toLowerCase();
    return searchableText.includes(searchTerm);
  });

  // Buscar en tutoriales
  const tutorialResults = tutorials.filter(item => {
    const searchableText = `${item.title} ${item.description} ${item.category} ${item.difficulty}`.toLowerCase();
    return searchableText.includes(searchTerm);
  });

  return {
    blogs: blogResults,
    tutorials: tutorialResults
  };
}
