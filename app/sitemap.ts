import { MetadataRoute } from 'next';

// Importar los posts del blog (copiado del archivo de blog posts)
// En producción, esto vendría de una base de datos o API
const blogPosts = [
  'baja-maternidad',
  'cita-previa-seguridad-social',
  'ayudas-discapacitados',
  'prestacion-desempleo',
  'prestacion-hijo-cargo',
  'pension-no-contributiva',
  'ayudas-madres-solteras',
  'trabajastur',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webcursosepe.es';
  
  const staticRoutes: Array<{
    url: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly';
    priority: number;
    lastModified?: Date;
  }> = [
    {
      url: '',
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: '/cursos',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/tutoriales',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/como-inscribirse',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/contacto',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: '/requisitos',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Categorías
    {
      url: '/categorias/cita-previa',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/cursos-ccaa',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/cursos-sector',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/ayudas-sepe',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/prestaciones-sepe',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/tramites-sepe',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/subsidios',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/pensiones',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/masters',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/fiscal',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Añadir rutas de blog dinámicamente
  const blogRoutes = blogPosts.map((postId) => ({
    url: `/blog/${postId}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Alta prioridad para los blogs
  }));

  // Combinar todas las rutas
  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified || new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

