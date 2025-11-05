import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  BarChart, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  DollarSign,
  Calendar,
  Phone,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prestación Contributiva por Desempleo - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la prestación contributiva por desempleo: requisitos de cotización, cuantía variable, duración y cómo solicitarla.",
  keywords: ["prestación contributiva", "prestación contributiva desempleo", "prestación por cotización", "paro contributivo"],
  alternates: {
    canonical: "/prestaciones/contributiva",
  },
  openGraph: {
    title: "Prestación Contributiva por Desempleo - Guía Completa 2024",
    description: "Aprende todo sobre la prestación contributiva: requisitos, cuantía variable y cómo solicitarla.",
    type: "article",
  },
};

export default function PrestacionContributivaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/prestaciones-sepe"
                  className="flex items-center text-indigo-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Prestaciones SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <BarChart className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Prestación Contributiva por Desempleo
                  </h1>
                  <div className="flex items-center gap-6 text-indigo-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Variable según cotización</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-indigo-100">
                Guía completa sobre la prestación contributiva por desempleo: requisitos de cotización, 
                cuantía variable según tus cotizaciones, duración y cómo solicitarla.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm max-w-4xl mx-auto">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li><Link href="/categorias/prestaciones-sepe" className="text-blue-600 hover:text-blue-800">Prestaciones SEPE</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Prestación Contributiva</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                {/* Introducción */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    La prestación contributiva por desempleo es la prestación económica que se otorga a trabajadores 
                    que han perdido su empleo de forma involuntaria y que han cotizado durante un período mínimo establecido. 
                    Se denomina "contributiva" porque se financia con las cotizaciones que el trabajador y la empresa 
                    han realizado durante el período de trabajo.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La cuantía de esta prestación es variable y depende de la base de cotización que hayas tenido durante 
                    los últimos 180 días trabajados. Cuanto mayor sea tu base de cotización, mayor será la cuantía de la prestación.
                  </p>
                </div>

                {/* Diferenciación */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-indigo-600" />
                    Contributiva vs No Contributiva
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h3 className="font-bold text-indigo-700 mb-2">Prestación Contributiva</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Requiere cotización previa</li>
                        <li>• Cuantía variable (según cotización)</li>
                        <li>• Mínimo 360 días cotizados</li>
                        <li>• Hasta 1.087,46€/mes</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h3 className="font-bold text-purple-700 mb-2">Prestación No Contributiva</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Para quienes no tienen cotización suficiente</li>
                        <li>• Cuantía fija (80% IPREM)</li>
                        <li>• Requisitos económicos</li>
                        <li>• 497€/mes aproximadamente</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-indigo-600" />
                    Requisitos para la Prestación Contributiva
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Cotización mínima:</strong> Haber cotizado al menos 360 días en los últimos 6 años</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Cese involuntario:</strong> Estar en situación legal de desempleo</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Inscripción:</strong> Estar inscrito como demandante de empleo</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Edad:</strong> No tener la edad de jubilación</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Disponibilidad:</strong> Estar disponible para trabajar</span>
                    </li>
                  </ul>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-indigo-600" />
                        Cuantía Variable
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Base reguladora:</strong> Media de las bases de cotización de los últimos 180 días</li>
                        <li>• <strong>Primeros 6 meses:</strong> 70% de la base reguladora</li>
                        <li>• <strong>A partir del 7º mes:</strong> 50% de la base reguladora</li>
                        <li>• <strong>Máximo:</strong> 1.087,46€/mes (2024)</li>
                        <li>• <strong>Mínimo:</strong> 569,7€/mes (con hijos: 757,8€)</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Cálculo:</strong> 1 día de prestación por cada 3 días cotizados</li>
                        <li>• <strong>Mínimo:</strong> 4 meses (360 días cotizados)</li>
                        <li>• <strong>Máximo:</strong> 24 meses (2.160 días cotizados)</li>
                        <li>• <strong>Límite absoluto:</strong> 720 días (2 años)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Cómo se calcula */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo se Calcula la Cuantía</h2>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                      La cuantía de la prestación contributiva se calcula en base a tu base reguladora, que es la media 
                      de las bases de cotización por contingencias profesionales de los últimos 180 días trabajados.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-indigo-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Ejemplo de Cálculo:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Base de cotización media: 1.500€/mes</li>
                          <li>• Primeros 6 meses: 1.500€ × 70% = 1.050€/mes</li>
                          <li>• A partir del 7º mes: 1.500€ × 50% = 750€/mes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Consulta tu vida laboral:</strong> Verifica tus días cotizados</li>
                            <li>• <strong>Base de cotización:</strong> Cuanto mayor, mayor será la prestación</li>
                            <li>• <strong>Solicitud temprana:</strong> Presenta la solicitud en los primeros 15 días</li>
                            <li>• <strong>Renueva tu demanda:</strong> Mantén activa tu inscripción</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Atención</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>No renuncies:</strong> Solo válido para cese involuntario</li>
                            <li>• <strong>Busca trabajo:</strong> Debes estar disponible y buscar activamente</li>
                            <li>• <strong>Renueva demanda:</strong> Cada 3 meses para mantener el derecho</li>
                            <li>• <strong>Dudas:</strong> Llama al SEPE al 900 81 24 00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enlaces relacionados */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Prestaciones Relacionadas</h3>
                  <p className="text-gray-700 mb-4">
                    Si no cumples los requisitos para la prestación contributiva, puedes consultar:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/prestaciones/no-contributiva"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Ver Prestación No Contributiva
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                    <Link
                      href="/prestaciones/desempleo"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Ver Prestación por Desempleo
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-indigo-100 mb-6">
                    Consulta otras prestaciones SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/prestaciones-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      Ver Todas las Prestaciones
                    </Link>
                    <Link
                      href="/tutoriales"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Tutoriales
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Sidebar derecho - SOLO en desktop */}
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
      </main>
      
      <Footer />
    </div>
  );
}

