import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { blogPosts, tutorials } from "@/lib/data";
import { 
  Calendar, 
  Baby, 
  Heart, 
  FileText, 
  DollarSign, 
  GraduationCap,
  Building,
  Users,
  Clock,
  CheckCircle,
  ScrollText,
  RefreshCw,
  Lock,
  BarChart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Artículos y Guías sobre SEPE, Prestaciones y Ayudas | Web Cursos SEPE",
  description: "Todos nuestros artículos y guías sobre SEPE: prestaciones, ayudas, trámites, pensiones, subsidios y tutoriales paso a paso. Información actualizada y completa.",
  keywords: ["blog sepe", "artículos sepe", "guías sepe", "tutoriales sepe", "prestaciones", "ayudas"],
  alternates: {
    canonical: "/blog",
  },
};

// Mapear iconos para los artículos
const iconMap: { [key: string]: any } = {
  "baja-maternidad": Baby,
  "cita-previa-seguridad-social": Calendar,
  "ayudas-discapacitados": Heart,
  "prestacion-desempleo": FileText,
  "prestacion-hijo-cargo": Users,
  "pension-no-contributiva": GraduationCap,
  "ayudas-madres-solteras": Heart,
  "trabajastur": Building,
};

const tutorialIconMap: { [key: string]: any } = {
  "1": FileText,
  "2": ScrollText,
  "3": RefreshCw,
  "4": Lock,
  "5": BarChart,
  "6": FileText,
  "cita-previa-inem": Calendar,
  "anular-cita-sepe": RefreshCw,
  "cita-previa-seguridad-social": Calendar,
  "cita-previa-extranjeria": FileText,
  "cita-previa-hacienda": FileText,
  "cita-previa-dgt": FileText,
};

// Combinar y ordenar todos los artículos
// Los blogs primero, luego tutoriales
const allArticles = [
  ...blogPosts.map(post => ({
    ...post,
    source: "blog" as const,
    displayDate: post.date,
    icon: iconMap[post.id] || FileText,
    gradient: "from-blue-500 to-indigo-600"
  })),
  ...tutorials.map(tutorial => ({
    ...tutorial,
    source: "tutorial" as const,
    displayDate: "Tutorial",
    readTime: tutorial.duration,
    icon: tutorialIconMap[tutorial.id] || FileText,
    gradient: "from-green-500 to-emerald-600"
  }))
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Blog
              </h1>
              <p className="text-xl text-blue-100">
                Artículos y guías completas sobre SEPE, prestaciones, ayudas, trámites y mucho más
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Blog</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                {/* Lista de artículos */}
                <div className="space-y-0">
                  {allArticles.map((article, index) => {
                    const Icon = article.icon;
                    return (
                      <div key={`${article.source}-${article.id}`}>
                        <Link href={article.href} className="block group">
                          <article className="flex gap-6 py-8 hover:bg-gray-50 transition-colors">
                            {/* Icono */}
                            <div className="flex-shrink-0">
                              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gradient-to-br ${article.gradient} flex items-center justify-center text-white shadow-md`}>
                                <Icon className="w-8 h-8 md:w-10 md:h-10" />
                              </div>
                            </div>

                            {/* Contenido */}
                            <div className="flex-1 min-w-0">
                              {/* Badge de tipo */}
                              <div className="mb-2 flex items-center gap-2">
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                  article.source === "blog" 
                                    ? "bg-blue-100 text-blue-800" 
                                    : "bg-green-100 text-green-800"
                                }`}>
                                  {article.source === "blog" ? "Artículo" : "Tutorial"}
                                </span>
                                <span className="text-xs font-normal text-gray-400 uppercase tracking-wider">
                                  {article.category}
                                </span>
                              </div>

                              {/* Título */}
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                                {article.title}
                              </h3>

                              {/* Meta información */}
                              <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                                {article.source === "blog" && article.author && (
                                  <span>{article.author}</span>
                                )}
                                {article.displayDate && (
                                  <span>{article.displayDate}</span>
                                )}
                                {article.readTime && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {article.readTime}
                                  </span>
                                )}
                                {article.source === "tutorial" && "difficulty" in article && (
                                  <span className="flex items-center gap-1">
                                    <CheckCircle className="w-4 h-4" />
                                    {article.difficulty}
                                  </span>
                                )}
                              </div>

                              {/* Descripción */}
                              <p className="text-base text-gray-700 leading-relaxed line-clamp-2">
                                {article.description}
                              </p>
                            </div>
                          </article>
                        </Link>
                        
                        {/* Separador (excepto en el último) */}
                        {index < allArticles.length - 1 && (
                          <div className="border-t border-gray-200"></div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Banner publicitario */}
                <div className="mt-12">
                  <AdBanner type="horizontal" />
                </div>
              </div>
              
              {/* Sidebar derecho */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="right" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
