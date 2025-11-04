import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { Building2, GraduationCap, FileText, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Información Oficial del SEPE",
  description: "Información oficial sobre el SEPE, Servicio Público de Empleo Estatal. Qué es, qué servicios ofrece, cursos certificados y más.",
  keywords: ["información oficial sepe", "qué es sepe", "servicio público empleo", "sepe trámites oficial"],
  alternates: {
    canonical: "/informacion-oficial",
  },
};

export default function InformacionOficialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Información Oficial del SEPE
              </h1>
              <p className="text-xl text-blue-100">
                Todo lo que necesitas saber sobre el SEPE de forma oficial
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
                <li className="text-gray-700">Información Oficial</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Qué es el SEPE */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-8">
                {/* Sidebar izquierdo - SOLO en desktop */}
                <div className="hidden xl:block w-80 flex-shrink-0">
                  <AdSidebar position="left" />
                </div>
                
                <div className="flex-1">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Imagen placeholder */}
                    <div className="order-2 md:order-1">
                      <ImagePlaceholder
                        height="400px"
                        gradient="from-blue-500 via-indigo-600 to-purple-600"
                        icon={<Building2 className="w-24 h-24" />}
                        label="SEPE"
                      />
                    </div>
                    
                    {/* Contenido */}
                    <div className="order-1 md:order-2">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-6">
                        <Building2 className="w-5 h-5 mr-2" />
                        Información Oficial
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        ¿Qué es el SEPE?
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        El <strong className="text-blue-600">Servicio Público de Empleo Estatal (SEPE)</strong> es el organismo público 
                        español que gestiona las políticas de empleo, prestaciones por desempleo, formación profesional 
                        y todas las ayudas relacionadas con el empleo.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        En Web Cursos SEPE encontrarás <strong>toda la información actualizada</strong> sobre cursos gratuitos, 
                        cómo inscribirte en el paro, renovar prestaciones, solicitar ayudas y realizar cualquier trámite 
                        administrativo relacionado con el empleo.
                      </p>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                          <span>Cursos certificados</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                          <span>Información oficial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sidebar derecho - SOLO en desktop */}
                <div className="hidden xl:block w-80 flex-shrink-0">
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

        {/* Servicios del SEPE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Servicios que Ofrece el SEPE
                </h2>
                <p className="text-lg text-gray-600">
                  Todos los servicios públicos disponibles para ciudadanos y empresas
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Formación Profesional
                      </h3>
                      <p className="text-gray-700">
                        Cursos gratuitos de formación profesional para el empleo con certificación oficial.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-green-600 p-3 rounded-lg mr-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Prestaciones y Ayudas
                      </h3>
                      <p className="text-gray-700">
                        Gestión de prestaciones por desempleo, ayudas económicas y subsidios.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-purple-600 p-3 rounded-lg mr-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Colocación Laboral
                      </h3>
                      <p className="text-gray-700">
                        Servicios de intermediación laboral y programas de empleo.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="bg-orange-600 p-3 rounded-lg mr-4">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Trámites Administrativos
                      </h3>
                      <p className="text-gray-700">
                        Gestión de demandas de empleo, renovaciones y certificaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enlaces Oficiales */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Enlaces Oficiales
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="space-y-6">
                  <a 
                    href="https://www.sepe.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="flex items-center">
                      <Building2 className="w-8 h-8 text-blue-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600">
                          Web Oficial del SEPE
                        </h3>
                        <p className="text-sm text-gray-600">www.sepe.es</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://sede.sepe.gob.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <div className="flex items-center">
                      <FileText className="w-8 h-8 text-green-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-green-600">
                          Sede Electrónica del SEPE
                        </h3>
                        <p className="text-sm text-gray-600">sede.sepe.gob.es</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  
                  <a 
                    href="https://www.sepe.es/contenidos/que_es_el_sepe/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors group"
                  >
                    <div className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-purple-600 mr-4" />
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-purple-600">
                          Información Institucional
                        </h3>
                        <p className="text-sm text-gray-600">Documentación oficial del SEPE</p>
                      </div>
                    </div>
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
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

