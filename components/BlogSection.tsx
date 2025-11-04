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
import { useState } from "react";

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

const blogPosts: BlogPost[] = [
  {
    id: "baja-maternidad",
    title: "Guía Completa para Pedir la Baja por Maternidad en España",
    description: "Todo lo que necesitas saber sobre la baja por maternidad: requisitos, trámites, duración y cuantía. Una guía detallada para trabajadoras por cuenta ajena, autónomas y personas en situación de desempleo.",
    icon: <Baby className="w-8 h-8" />,
    gradient: "from-pink-500 to-rose-600",
    category: "Prestaciones",
    date: "16 OCT 2024",
    readTime: "10 min",
    author: "Equipo SEPE",
    location: "España",
    image: "/images/Blog/maternidad.png"
  },
  {
    id: "cita-previa-seguridad-social",
    title: "Cómo Solicitar Cita Previa en la Seguridad Social Paso a Paso",
    description: "Guía completa para obtener tu cita previa en la Seguridad Social de forma online y presencial. Incluye requisitos, documentos necesarios y soluciones a los problemas más comunes.",
    icon: <Calendar className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-600",
    category: "Trámites",
    date: "14 OCT 2024",
    readTime: "7 min",
    author: "Equipo SEPE",
    location: "España",
    image: "/images/Blog/cita-previa.png"
  },
  {
    id: "ayudas-discapacitados",
    title: "Ayudas y Prestaciones para Personas con Discapacidad en 2024",
    description: "Descubre todas las ayudas y beneficios disponibles para personas con discapacidad: prestaciones económicas, ayudas técnicas, beneficios fiscales y acceso a vivienda protegida.",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-600",
    category: "Ayudas",
    date: "12 OCT 2024",
    readTime: "8 min",
    author: "Equipo SEPE",
    location: "España"
  },
  {
    id: "prestacion-desempleo",
    title: "Prestación por Desempleo: Cómo Cobrar el Paro en 2024",
    description: "Todo sobre la prestación por desempleo: requisitos de cotización, cuantía, duración máxima, cómo solicitarla y renovarla. Incluye calculadora de prestación y casos especiales.",
    icon: <FileText className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-600",
    category: "Prestaciones",
    date: "10 OCT 2024",
    readTime: "10 min",
    author: "Equipo SEPE",
    location: "España"
  },
  {
    id: "prestacion-hijo-cargo",
    title: "Prestación por Hijo a Cargo: Requisitos y Cuantía 2024",
    description: "Información detallada sobre la prestación por hijo a cargo: requisitos, cuantía, cómo solicitarla y diferencias entre prestación contributiva y no contributiva.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-600",
    category: "Ayudas",
    date: "8 OCT 2024",
    readTime: "6 min",
    author: "Equipo SEPE",
    location: "España"
  },
  {
    id: "pension-no-contributiva",
    title: "Pensión No Contributiva: Requisitos y Cómo Solicitarla",
    description: "Guía completa sobre las pensiones no contributivas: quién puede solicitarla, requisitos económicos, cuantía actualizada y proceso de solicitud paso a paso.",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-violet-500 to-purple-600",
    category: "Pensiones",
    date: "6 OCT 2024",
    readTime: "9 min",
    author: "Equipo SEPE",
    location: "España"
  },
  {
    id: "ayudas-madres-solteras",
    title: "Ayudas para Madres Solteras y Familias Monoparentales 2024",
    description: "Prestaciones específicas para madres solteras y familias monoparentales: ayudas económicas, beneficios fiscales, acceso a vivienda y ayudas para la crianza.",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-rose-500 to-pink-600",
    category: "Ayudas",
    date: "4 OCT 2024",
    readTime: "7 min",
    author: "Equipo SEPE",
    location: "España"
  },
  {
    id: "trabajastur",
    title: "Trabajastur: Servicio de Empleo del Principado de Asturias",
    description: "Guía completa sobre Trabajastur: cursos gratuitos, ofertas de empleo, ayudas regionales y servicios disponibles para demandantes de empleo en Asturias.",
    icon: <Building className="w-8 h-8" />,
    gradient: "from-cyan-500 to-blue-600",
    category: "Regionales",
    date: "2 OCT 2024",
    readTime: "5 min",
    author: "Equipo SEPE",
    location: "Asturias"
  }
];

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
                    console.error("[BlogSection] Error loading image:", post.image);
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
              {blogPosts.map((post, index) => (
                <BlogPostItem key={post.id} post={post} index={index} total={blogPosts.length} />
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
