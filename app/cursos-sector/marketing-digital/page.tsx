import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Megaphone, 
  Target, 
  BarChart, 
  Smartphone,
  Lightbulb,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos de Marketing Digital SEPE - Formación Gratuita 2024",
  description: "Cursos gratuitos de Marketing Digital del SEPE: redes sociales, publicidad online, email marketing, analytics, estrategias digitales y más. Certificación oficial.",
  keywords: ["curso marketing digital", "curso marketing digital sepe", "formación marketing digital gratis", "redes sociales", "publicidad online", "email marketing"],
  alternates: {
    canonical: "/cursos-sector/marketing-digital",
  },
};

const modulos = [
  {
    id: "redes-sociales",
    title: "Redes Sociales",
    description: "Facebook, Instagram, Twitter, LinkedIn, TikTok. Estrategias de contenido, community management y publicidad en redes sociales.",
    icon: Smartphone,
    gradient: "from-pink-500 to-pink-600",
    horas: "60 horas"
  },
  {
    id: "publicidad",
    title: "Publicidad Online",
    description: "Google Ads, Facebook Ads, Instagram Ads, remarketing, display advertising y estrategias de pago por clic.",
    icon: Megaphone,
    gradient: "from-blue-500 to-blue-600",
    horas: "50 horas"
  },
  {
    id: "email",
    title: "Email Marketing",
    description: "Campañas de email, automatización, segmentación, newsletters, métricas y optimización de conversiones.",
    icon: Target,
    gradient: "from-purple-500 to-purple-600",
    horas: "35 horas"
  },
  {
    id: "analytics",
    title: "Analytics y Métricas",
    description: "Google Analytics, Facebook Insights, medición de ROI, KPI, dashboards y análisis de datos digitales.",
    icon: BarChart,
    gradient: "from-green-500 to-green-600",
    horas: "40 horas"
  },
  {
    id: "estrategias",
    title: "Estrategias Digitales",
    description: "Planificación de campañas, buyer personas, customer journey, inbound marketing y marketing automation.",
    icon: TrendingUp,
    gradient: "from-orange-500 to-orange-600",
    horas: "45 horas"
  }
];

export default function CursoMarketingDigitalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <Megaphone className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Cursos de Marketing Digital
              </h1>
              <p className="text-xl text-purple-100">
                Formación profesional gratuita en marketing digital, redes sociales, publicidad online y estrategias digitales. Certificación oficial del SEPE.
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
                <li className="text-gray-700">Marketing Digital</li>
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
                    Los cursos de Marketing Digital del SEPE te preparan para dominar todas las áreas del marketing online. 
                    Aprenderás a gestionar redes sociales, crear campañas publicitarias, analizar datos y desarrollar estrategias digitales efectivas.
                  </p>
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
                    <p className="text-purple-800">
                      <strong>Duración:</strong> 230 horas | <strong>Modalidad:</strong> Online/Presencial | <strong>Certificación:</strong> Oficial
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

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Gestión profesional de redes sociales y community management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Creación y gestión de campañas publicitarias online</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Email marketing y automatización de marketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Análisis de datos y métricas con Google Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Desarrollo de estrategias digitales integrales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Inbound marketing y generación de leads</span>
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
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-900 mb-2">Requisitos del curso</h3>
                    <p className="text-purple-800 leading-relaxed">
                      Para acceder a los cursos de Marketing Digital es necesario tener conocimientos básicos de informática y uso de internet. 
                      No se requieren conocimientos previos, aunque es útil tener experiencia en redes sociales. El curso está dirigido a 
                      profesionales del marketing, emprendedores, autónomos y cualquier persona interesada en el marketing digital.
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

