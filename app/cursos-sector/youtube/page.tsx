import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Video, 
  Users, 
  TrendingUp, 
  DollarSign,
  Lightbulb,
  Camera
} from "lucide-react";

export const metadata: Metadata = {
  title: "Curso de Youtube SEPE - Creación de Contenido y Monetización Gratuito 2024",
  description: "Curso gratuito de Youtube del SEPE: creación de contenido, edición de video, monetización, SEO de videos, estrategias de crecimiento y más. Certificación oficial.",
  keywords: ["curso youtube", "curso youtube sepe", "formación youtube gratis", "curso creación contenido", "monetización youtube", "edición video"],
  alternates: {
    canonical: "/cursos-sector/youtube",
  },
};

const modulos = [
  {
    id: "creacion",
    title: "Creación de Contenido",
    description: "Ideas para videos, planificación de contenido, guiones, storytelling y técnicas de grabación profesional.",
    icon: Camera,
    gradient: "from-red-500 to-red-600",
    horas: "50 horas"
  },
  {
    id: "edicion",
    title: "Edición de Video",
    description: "Herramientas de edición, postproducción, efectos, música, transiciones y optimización para YouTube.",
    icon: Video,
    gradient: "from-purple-500 to-purple-600",
    horas: "45 horas"
  },
  {
    id: "seo",
    title: "SEO y Optimización",
    description: "Optimización de títulos, descripciones, tags, thumbnails, cards y estrategias para aumentar las visualizaciones.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-blue-600",
    horas: "30 horas"
  },
  {
    id: "monetizacion",
    title: "Monetización",
    description: "Programa de Partners de YouTube, AdSense, patrocinios, merchandising, membresías y otras fuentes de ingresos.",
    icon: DollarSign,
    gradient: "from-green-500 to-green-600",
    horas: "25 horas"
  },
  {
    id: "crecimiento",
    title: "Crecimiento y Audiencia",
    description: "Estrategias para aumentar suscriptores, engagement, comunidad, colaboraciones y análisis de métricas.",
    icon: Users,
    gradient: "from-orange-500 to-orange-600",
    horas: "35 horas"
  }
];

export default function CursoYoutubePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <Video className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Curso de Youtube
              </h1>
              <p className="text-xl text-red-100">
                Formación profesional gratuita en creación de contenido para YouTube, edición de video y monetización. Certificación oficial del SEPE.
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
                <li className="text-gray-700">Youtube</li>
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
                    El curso de Youtube del SEPE te enseña todo lo necesario para crear, editar y monetizar contenido en la plataforma. 
                    Aprenderás técnicas profesionales de producción de video, estrategias de crecimiento y formas de generar ingresos.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                    <p className="text-red-800">
                      <strong>Duración:</strong> 185 horas | <strong>Modalidad:</strong> Online/Presencial | <strong>Certificación:</strong> Oficial
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

                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Creación y planificación de contenido para YouTube</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Edición profesional de video con herramientas gratuitas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Optimización SEO para videos y aumento de visualizaciones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Estrategias de monetización y generación de ingresos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Crecimiento de audiencia y construcción de comunidad</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✓</span>
                      <span>Análisis de métricas y optimización de rendimiento</span>
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
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-2">Requisitos del curso</h3>
                    <p className="text-red-800 leading-relaxed">
                      Para acceder al curso de Youtube es recomendable tener conocimientos básicos de informática y uso de internet. 
                      No se requiere experiencia previa en edición de video, aunque es útil. El curso está dirigido a creadores de contenido, 
                      emprendedores, profesionales del marketing y cualquier persona interesada en YouTube como plataforma de negocio.
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

