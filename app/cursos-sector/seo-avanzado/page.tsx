import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Search, 
  TrendingUp, 
  BarChart, 
  Globe,
  Lightbulb,
  Target
} from "lucide-react";

export const metadata: Metadata = {
  title: "Curso de SEO Avanzado SEPE - Posicionamiento Web Gratuito 2024",
  description: "Curso gratuito de SEO Avanzado del SEPE: técnicas de posicionamiento web, optimización on-page, link building, SEO técnico y más. Certificación oficial.",
  keywords: ["curso seo avanzado", "curso seo sepe", "formación seo gratis", "curso posicionamiento web", "seo técnico", "link building"],
  alternates: {
    canonical: "/cursos-sector/seo-avanzado",
  },
};

const modulos = [
  {
    id: "fundamentos",
    title: "Fundamentos de SEO",
    description: "Introducción al SEO, motores de búsqueda, algoritmos y factores de ranking. Bases sólidas para el posicionamiento web.",
    icon: Search,
    gradient: "from-blue-500 to-blue-600",
    horas: "40 horas"
  },
  {
    id: "on-page",
    title: "SEO On-Page",
    description: "Optimización de contenido, meta tags, estructura de URLs, imágenes, velocidad de carga y experiencia de usuario.",
    icon: Target,
    gradient: "from-green-500 to-green-600",
    horas: "50 horas"
  },
  {
    id: "off-page",
    title: "SEO Off-Page y Link Building",
    description: "Estrategias de construcción de enlaces, outreach, guest posting, relaciones públicas y autoridad de dominio.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-purple-600",
    horas: "45 horas"
  },
  {
    id: "tecnico",
    title: "SEO Técnico",
    description: "Crawling, indexación, sitemaps, robots.txt, estructura de datos, Core Web Vitals y rendimiento web.",
    icon: BarChart,
    gradient: "from-orange-500 to-orange-600",
    horas: "35 horas"
  },
  {
    id: "local",
    title: "SEO Local",
    description: "Optimización para búsquedas locales, Google My Business, citas locales, reseñas y geolocalización.",
    icon: Globe,
    gradient: "from-indigo-500 to-indigo-600",
    horas: "30 horas"
  }
];

export default function CursoSeoAvanzadoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <Search className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Curso de SEO Avanzado
              </h1>
              <p className="text-xl text-blue-100">
                Formación profesional gratuita en posicionamiento web y optimización para motores de búsqueda. Certificación oficial del SEPE.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/categorias/cursos-sector" className="text-blue-600 hover:text-blue-800">
                    Cursos por Sector
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">SEO Avanzado</li>
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
              <div className="flex-1">
                <div className="max-w-4xl mx-auto mb-10">
                  <p className="text-lg text-gray-700 mb-6">
                    El curso de SEO Avanzado del SEPE te prepara para dominar las técnicas de posicionamiento web más efectivas. 
                    Aprenderás a optimizar sitios web para motores de búsqueda, aumentar el tráfico orgánico y mejorar la visibilidad online.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-blue-800">
                      <strong>Duración:</strong> 200 horas | <strong>Modalidad:</strong> Online/Presencial | <strong>Certificación:</strong> Oficial
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {modulos.map((modulo) => {
                    const Icon = modulo.icon;
                    return (
                      <div key={modulo.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${modulo.gradient} text-white mb-4`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {modulo.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{modulo.description}</p>
                        <p className="text-sm text-blue-600 font-semibold">{modulo.horas}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Optimización on-page y off-page</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Estrategias de link building y outreach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>SEO técnico y rendimiento web</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>SEO local y Google My Business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Análisis de datos y herramientas SEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Estrategias de contenido y keyword research</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar derecho */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="right" />
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

        {/* Consejo */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Requisitos del curso</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Para acceder al curso de SEO Avanzado es necesario tener conocimientos básicos de informática y navegación web. 
                      No se requieren conocimientos previos de programación, aunque son recomendables. El curso está dirigido a 
                      profesionales del marketing digital, emprendedores y cualquier persona interesada en el posicionamiento web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

