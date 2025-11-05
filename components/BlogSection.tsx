"use client";

import { 
  Calendar, 
  Baby, 
  Heart, 
  FileText, 
  DollarSign, 
  GraduationCap,
  Building,
  Users
} from "lucide-react";
import Link from "next/link";
import AdSidebar from "./AdSidebar";
import { useState, useEffect } from "react";
import { blogPosts } from "@/lib/data";

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

// Componente individual para cada post con manejo de errores de imagen
function BlogPostItem({ post, index, total }: { post: BlogPost; index: number; total: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div>
      <Link href={`/blog/${post.id}`} className="block group">
        <article className="flex gap-6 py-8 hover:bg-gray-50 transition-colors">
          {/* Imagen */}
          <div className="flex-shrink-0">
            {post.image && !imageError ? (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={() => {
                    setImageError(true);
                  }}
                />
              </div>
            ) : (
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-lg bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white shadow-md`}>
                {post.icon}
              </div>
            )}
          </div>

          {/* Contenido */}
          <div className="flex-1 min-w-0">
            {/* Categoría */}
            <div className="mb-2">
              <span className="text-xs font-normal text-gray-400 uppercase tracking-wider" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {post.category}
              </span>
            </div>

            {/* Título */}
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              {post.title}
            </h3>

            {/* Autor y Fecha */}
            <div className="mb-3">
              <p className="text-sm text-gray-400 font-normal" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                {post.author || 'Equipo SEPE'} | {post.location || 'España'} | {post.date}
              </p>
            </div>

            {/* Descripción */}
            <p className="text-base text-gray-700 leading-relaxed line-clamp-3" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              {post.description}
            </p>
          </div>
        </article>
      </Link>
      
      {/* Separador (excepto en el último) */}
      {index < total - 1 && (
        <div className="border-t border-gray-200"></div>
      )}
    </div>
  );
}

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

  return (
    <section id="blogs" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Blogs
          </h2>
        </div>

        {/* Layout: Contenido principal + Sidebar */}
        <div className="flex gap-8">
          {/* Contenido principal - Lista vertical */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-0">
              {sortedPosts.map((post, index) => (
                <BlogPostItem key={post.id} post={post} index={index} total={sortedPosts.length} />
              ))}
            </div>
          </div>

          {/* Sidebar derecho - Publicidad (solo en desktop) */}
          <div className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <AdSidebar position="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
