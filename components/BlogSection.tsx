"use client";

import { 
  Calendar, 
  Baby, 
  Heart, 
  FileText, 
  DollarSign, 
  GraduationCap,
  Building,
  Users,
  Clock
} from "lucide-react";
import Link from "next/link";
import AdSidebar from "./AdSidebar";
import { useState, useEffect } from "react";
import { blogPosts } from "@/lib/data";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  category: string;
  date: string;
  readTime: string;
  author?: string;
  location?: string;
  image?: string;
}

// Mapeo de iconos para los blogs
const iconMap: { [key: string]: React.ReactNode } = {
  "baja-maternidad": <Baby className="w-8 h-8" />,
  "cita-previa-seguridad-social": <Calendar className="w-8 h-8" />,
  "ayudas-discapacitados": <Heart className="w-8 h-8" />,
  "prestacion-desempleo": <FileText className="w-8 h-8" />,
  "prestacion-hijo-cargo": <Users className="w-8 h-8" />,
  "pension-no-contributiva": <GraduationCap className="w-8 h-8" />,
  "ayudas-madres-solteras": <Heart className="w-8 h-8" />,
  "trabajastur": <Building className="w-8 h-8" />,
};

const gradientMap: { [key: string]: string } = {
  "baja-maternidad": "from-pink-500 to-rose-600",
  "cita-previa-seguridad-social": "from-blue-500 to-indigo-600",
  "ayudas-discapacitados": "from-green-500 to-emerald-600",
  "prestacion-desempleo": "from-purple-500 to-pink-600",
  "prestacion-hijo-cargo": "from-orange-500 to-amber-600",
  "pension-no-contributiva": "from-violet-500 to-purple-600",
  "ayudas-madres-solteras": "from-rose-500 to-pink-600",
  "trabajastur": "from-cyan-500 to-blue-600",
};

const imageMap: { [key: string]: string } = {
  "baja-maternidad": "/images/Blog/maternidad.png",
  "cita-previa-seguridad-social": "/images/Blog/cita-previa.png",
  "ayudas-discapacitados": "/images/Blog/ayudas-discapacidad.png",
};

export default function BlogSection() {
  const [sortedPosts, setSortedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtener los blogs más vistos
    const fetchMostViewed = async () => {
      try {
        const response = await fetch('/api/most-viewed?limit=20');
        const data = await response.json();
        
        if (data.blogs && data.blogs.length > 0) {
          // Crear un mapa de visualizaciones
          const viewsMap: { [key: string]: number } = {};
          data.blogs.forEach((blog: { blog_id: string; blog_type: string; count: number }) => {
            if (blog.blog_type === 'blog') {
              viewsMap[blog.blog_id] = blog.count;
            }
          });

          // Convertir blogPosts a BlogPost[] con iconos y gradientes
          const postsWithViews: BlogPost[] = blogPosts.map(post => ({
            ...post,
            icon: iconMap[post.id] || <FileText className="w-8 h-8" />,
            gradient: gradientMap[post.id] || "from-blue-500 to-indigo-600",
            image: imageMap[post.id],
            viewCount: viewsMap[post.id] || 0,
          }));

          // Ordenar por visualizaciones (más vistos primero)
          postsWithViews.sort((a, b) => {
            const aViews = (a as any).viewCount || 0;
            const bViews = (b as any).viewCount || 0;
            return bViews - aViews;
          });

          // Mostrar solo los 8 más vistos, o todos si no hay suficientes
          setSortedPosts(postsWithViews.slice(0, 8));
        } else {
          // Si no hay datos de visualizaciones, usar los blogs por defecto
          const defaultPosts: BlogPost[] = blogPosts.map(post => ({
            ...post,
            icon: iconMap[post.id] || <FileText className="w-8 h-8" />,
            gradient: gradientMap[post.id] || "from-blue-500 to-indigo-600",
            image: imageMap[post.id],
          }));
          setSortedPosts(defaultPosts);
        }
      } catch (error) {
        console.error('Error fetching most viewed blogs:', error);
        // En caso de error, usar los blogs por defecto
        const defaultPosts: BlogPost[] = blogPosts.map(post => ({
          ...post,
          icon: iconMap[post.id] || <FileText className="w-8 h-8" />,
          gradient: gradientMap[post.id] || "from-blue-500 to-indigo-600",
          image: imageMap[post.id],
        }));
        setSortedPosts(defaultPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchMostViewed();
  }, []);

  if (loading) {
    return (
      <section id="blogs" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Blogs
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="text-gray-500">Cargando...</div>
          </div>
        </div>
      </section>
    );
  }

  // Separar posts: el primero tiene imagen destacada, los demás van a la izquierda
  const featuredPost = sortedPosts[0];
  const leftColumnPosts = sortedPosts.slice(1, 4); // Próximos 3 posts
  const rightColumnPosts = sortedPosts.slice(4, 8); // Últimos 4 posts

  return (
    <section id="blogs" className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
            Blogs
          </h2>
        </div>

        {/* Layout de 3 columnas estilo NYT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Columna Izquierda - Artículos principales (texto) */}
          <div className="lg:col-span-3 space-y-8">
            {leftColumnPosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                <article className="border-b border-gray-200 pb-6 last:border-b-0">
                  {/* Categoría */}
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {post.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-3">
                    {post.description}
                  </p>
                  
                  {/* Meta información */}
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Columna Central - Artículo destacado con imagen grande */}
          <div className="lg:col-span-6">
            {featuredPost && (
              <Link href={`/blog/${featuredPost.id}`} className="block group">
                <article>
                  {/* Imagen destacada */}
                  <div className="mb-4">
                    {featuredPost.image ? (
                      <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-100">
                        <Image
                          src={featuredPost.image}
                          alt={featuredPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className={`w-full h-96 md:h-[500px] bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center`}>
                        <div className="text-white text-6xl">
                          {featuredPost.icon}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Categoría */}
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Título principal */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {featuredPost.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {featuredPost.description}
                  </p>

                  {/* Meta información */}
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{featuredPost.author || 'Equipo SEPE'}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} de lectura
                    </span>
                  </div>
                </article>
              </Link>
            )}
          </div>

          {/* Columna Derecha - Sidebar con artículos destacados */}
          <div className="lg:col-span-3">
            {/* Publicidad */}
            <div className="mb-8">
              <AdSidebar position="right" />
            </div>

            {/* Artículos destacados */}
            <div className="space-y-6">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                Más Leídos
              </h4>
              
              {rightColumnPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                  <article className="border-b border-gray-200 pb-6 last:border-b-0">
                    {/* Mini imagen o icono */}
                    <div className="mb-3">
                      {post.image ? (
                        <div className="relative w-full h-32 overflow-hidden bg-gray-100 rounded">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className={`w-full h-32 bg-gradient-to-br ${post.gradient} flex items-center justify-center rounded`}>
                          <div className="text-white text-3xl">
                            {post.icon}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Título */}
                    <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {post.title}
                    </h4>

                    {/* Meta información */}
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
