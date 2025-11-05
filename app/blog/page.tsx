import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import Image from "next/image";
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

// Mapear nombres de iconos (strings) para los artículos
const iconMap: { [key: string]: string } = {
  "baja-maternidad": "Baby",
  "cita-previa-seguridad-social": "Calendar",
  "ayudas-discapacitados": "Heart",
  "prestacion-desempleo": "FileText",
  "prestacion-hijo-cargo": "Users",
  "pension-no-contributiva": "GraduationCap",
  "ayudas-madres-solteras": "Heart",
  "trabajastur": "Building",
};

const tutorialIconMap: { [key: string]: string } = {
  "1": "FileText",
  "2": "ScrollText",
  "3": "RefreshCw",
  "4": "Lock",
  "5": "BarChart",
  "6": "FileText",
  "cita-previa-inem": "Calendar",
  "anular-cita-sepe": "RefreshCw",
  "cita-previa-seguridad-social": "Calendar",
  "cita-previa-extranjeria": "FileText",
  "cita-previa-hacienda": "FileText",
  "cita-previa-dgt": "FileText",
};

// Función helper para obtener el componente de icono
function getIconComponent(iconName: string) {
  const icons: { [key: string]: any } = {
    Baby,
    Calendar,
    Heart,
    FileText,
    Users,
    GraduationCap,
    Building,
    ScrollText,
    RefreshCw,
    Lock,
    BarChart,
  };
  return icons[iconName] || FileText;
}

const imageMap: { [key: string]: string } = {
  "baja-maternidad": "/images/Blog/maternidad.png",
  "cita-previa-seguridad-social": "/images/Blog/cita-previa.png",
  "ayudas-discapacitados": "/images/Blog/ayudas-discapacidad.png",
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

// Combinar y ordenar todos los artículos
// Los blogs primero, luego tutoriales
const allArticles = [
  ...blogPosts.map(post => ({
    ...post,
    source: "blog" as const,
    displayDate: post.date,
    iconName: iconMap[post.id] || "FileText",
    gradient: gradientMap[post.id] || "from-blue-500 to-indigo-600",
    image: imageMap[post.id] as string | undefined,
  })),
  ...tutorials.map(tutorial => ({
    ...tutorial,
    source: "tutorial" as const,
    displayDate: "Tutorial",
    readTime: tutorial.duration,
    iconName: tutorialIconMap[tutorial.id] || "FileText",
    gradient: "from-green-500 to-emerald-600",
    image: undefined as string | undefined,
  }))
];

export default function BlogPage() {
  // Separar artículos: primero con imagen destacada, luego en columnas
  const featuredArticle = allArticles.find(a => a.image) || allArticles[0];
  const leftColumnArticles = allArticles.filter(a => a.id !== featuredArticle.id).slice(0, 5);
  const rightColumnArticles = allArticles.filter(a => a.id !== featuredArticle.id && !leftColumnArticles.find(l => l.id === a.id)).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
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

        {/* Content - Layout estilo NYT */}
        <section className="py-8 border-b border-gray-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Columna Izquierda - Artículos principales (texto) */}
              <div className="lg:col-span-3 space-y-6">
                {leftColumnArticles.map((article) => {
                  const Icon = getIconComponent((article as any).iconName);
                  return (
                    <Link key={`${article.source}-${article.id}`} href={article.href} className="block group">
                      <article className="border-b border-gray-200 pb-6 last:border-b-0">
                        {/* Categoría */}
                        <div className="mb-2">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {article.category}
                          </span>
                        </div>
                        
                        {/* Título */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                          {article.title}
                        </h3>
                        
                        {/* Descripción */}
                        <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-2">
                          {article.description}
                        </p>
                        
                        {/* Meta información */}
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          {article.source === "blog" && article.author && (
                            <>
                              <span>{article.author}</span>
                              <span>•</span>
                            </>
                          )}
                          <span>{article.displayDate}</span>
                          {article.readTime && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime}
                              </span>
                            </>
                          )}
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>

              {/* Columna Central - Artículo destacado con imagen grande */}
              <div className="lg:col-span-6">
                {featuredArticle && (
                  <Link href={featuredArticle.href} className="block group">
                    <article>
                      {/* Imagen destacada */}
                      <div className="mb-4">
                        {featuredArticle.image ? (
                          <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-100">
                            <Image
                              src={featuredArticle.image}
                              alt={featuredArticle.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className={`w-full h-96 md:h-[500px] bg-gradient-to-br ${(featuredArticle as any).gradient} flex items-center justify-center`}>
                            <div className="text-white">
                              {(() => {
                                const Icon = getIconComponent((featuredArticle as any).iconName);
                                return <Icon className="w-24 h-24" />;
                              })()}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Categoría */}
                      <div className="mb-2">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {featuredArticle.category}
                        </span>
                      </div>

                      {/* Título principal */}
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        {featuredArticle.title}
                      </h2>

                      {/* Descripción */}
                      <p className="text-base text-gray-700 leading-relaxed mb-4">
                        {featuredArticle.description}
                      </p>

                      {/* Meta información */}
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        {featuredArticle.source === "blog" && (featuredArticle as any).author && (
                          <>
                            <span>{(featuredArticle as any).author}</span>
                            <span>•</span>
                          </>
                        )}
                        <span>{featuredArticle.displayDate}</span>
                        {featuredArticle.readTime && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {featuredArticle.readTime} de lectura
                            </span>
                          </>
                        )}
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
                  
                  {rightColumnArticles.map((article) => {
                    const Icon = getIconComponent((article as any).iconName);
                    return (
                      <Link key={`${article.source}-${article.id}`} href={article.href} className="block group">
                        <article className="border-b border-gray-200 pb-6 last:border-b-0">
                          {/* Mini imagen o icono */}
                          <div className="mb-3">
                            {article.image ? (
                              <div className="relative w-full h-32 overflow-hidden bg-gray-100 rounded">
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ) : (
                              <div className={`w-full h-32 bg-gradient-to-br ${(article as any).gradient} flex items-center justify-center rounded`}>
                                <div className="text-white">
                                  <Icon className="w-12 h-12" />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Título */}
                          <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                            {article.title}
                          </h4>

                          {/* Meta información */}
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{article.displayDate}</span>
                            {article.readTime && (
                              <>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {article.readTime}
                                </span>
                              </>
                            )}
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Más artículos - Grid de 2 columnas */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Columna izquierda - más artículos */}
              <div className="lg:col-span-9">
                <h3 className="text-xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  Más Artículos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {allArticles.filter(a => 
                    a.id !== featuredArticle.id && 
                    !leftColumnArticles.find(l => l.id === a.id) &&
                    !rightColumnArticles.find(r => r.id === a.id)
                  ).map((article) => {
                    const Icon = getIconComponent((article as any).iconName);
                    return (
                      <Link key={`${article.source}-${article.id}`} href={article.href} className="block group">
                        <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                          {/* Imagen */}
                          <div className="h-48 overflow-hidden bg-gray-100">
                            {article.image ? (
                              <div className="relative w-full h-full">
                                <Image
                                  src={article.image}
                                  alt={article.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ) : (
                              <div className={`w-full h-full bg-gradient-to-br ${(article as any).gradient} flex items-center justify-center`}>
                                <div className="text-white">
                                  <Icon className="w-16 h-16" />
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Contenido */}
                          <div className="p-4">
                            <div className="mb-2">
                              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {article.category}
                              </span>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                              {article.title}
                            </h4>
                            <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                              {article.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{article.displayDate}</span>
                              {article.readTime && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {article.readTime}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar derecho - Publicidad */}
              <div className="lg:col-span-3">
                <div className="sticky top-24">
                  <AdSidebar position="right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner publicitario */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AdBanner type="horizontal" />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
