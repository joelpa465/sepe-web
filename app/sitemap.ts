import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sepe.es';
  
  const routes = [
    '',
    '/cursos',
    '/tutoriales',
    '/como-inscribirse',
    '/contacto',
    '/requisitos',
    // Categorías
    '/categorias/cita-previa',
    '/categorias/cursos-ccaa',
    '/categorias/cursos-sector',
    '/categorias/ayudas-sepe',
    '/categorias/prestaciones-sepe',
    '/categorias/tramites-sepe',
    '/categorias/subsidios',
    '/categorias/pensiones',
    '/categorias/masters',
    '/categorias/fiscal',
    // Legales (no indexar)
  ];
  
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.startsWith('/categorias') ? 0.8 : 0.9,
  }));
}

