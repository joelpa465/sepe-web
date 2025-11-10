import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webcursosepe.es';
  const now = new Date();
  
  const staticRoutes: Array<{
    url: string;
    changeFrequency: 'daily' | 'weekly' | 'monthly';
    priority: number;
    lastModified?: Date;
  }> = [
    // Páginas principales
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
      url: '/blog',
      changeFrequency: 'daily' as const,
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
    {
      url: '/buscar',
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: '/informacion-oficial',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/newsletter',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/legal',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: '/privacidad',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: '/cookies',
      changeFrequency: 'monthly' as const,
      priority: 0.5,
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
    {
      url: '/categorias/certificados-documentos',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/categorias/servicios-digitales',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Certificados
    {
      url: '/certificados/prestaciones',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/certificados/duplicados',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Servicios Digitales
    {
      url: '/servicios-digitales/clave-pin',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/servicios-digitales/certificado-digital',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/servicios-digitales/sede-electronica-sepe',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/servicios-digitales/tu-seguridad-social',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/servicios-digitales/app-sepe',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/servicios-digitales/identificacion-digital',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Fiscal
    {
      url: '/fiscal/certificado-penales',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/fiscal/modelo-600',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/fiscal/modelo-145',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/fiscal/modelo-036',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/fiscal/irpf-2024',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/fiscal/declaracion-renta',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Ayudas
    {
      url: '/ayudas/ingreso-minimo-vital',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/ayudas/madres-solteras',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/ayudas/discapacidad',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/ayudas/alquiler',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/ayudas/familiar',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/ayudas/jovenes',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Prestaciones
    {
      url: '/prestaciones/hijo-a-cargo',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/prestaciones/desempleo',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/prestaciones/maternidad',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/prestaciones/contributiva',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/prestaciones/no-contributiva',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/prestaciones/paternidad',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Trámites
    {
      url: '/tramites/tgss',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tramites/sellar-paro',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tramites/apuntarse-paro',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tramites/inss',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tramites/vida-laboral',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tramites/certificado-empresa',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Subsidios
    {
      url: '/subsidios/desempleo',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/subsidios/mayores-45',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/subsidios/insuficiencia-cotizacion',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/subsidios/mayores-52',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/subsidios/agrario',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/subsidios/renta-activa',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Pensiones
    {
      url: '/pensiones/no-contributiva',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/pensiones/orfandad',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/pensiones/viudedad',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/pensiones/jubilacion-maxima',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/pensiones/incapacidad',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/pensiones/alimenticia',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Tutoriales
    {
      url: '/tutoriales/cita-previa-inem',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tutoriales/anular-cita-sepe',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tutoriales/cita-previa-seguridad-social',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tutoriales/cita-previa-extranjeria',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tutoriales/cita-previa-hacienda',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/tutoriales/cita-previa-dgt',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Cursos por CCAA
    {
      url: '/cursos-ccaa/barcelona',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-ccaa/madrid',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-ccaa/sevilla',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-ccaa/malaga',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-ccaa/valencia',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-ccaa/bilbao',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    // Cursos por Sector
    {
      url: '/cursos-sector/barcelona',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-sector/madrid',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-sector/seo-avanzado',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-sector/youtube',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-sector/marketing-digital',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/cursos-sector/programacion',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Añadir rutas de blog dinámicamente desde lib/data.ts
  const blogRoutes = blogPosts.map((post) => ({
    url: `/blog/${post.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Alta prioridad para los blogs
  }));

  // Combinar todas las rutas
  const allRoutes = [...staticRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified || now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
