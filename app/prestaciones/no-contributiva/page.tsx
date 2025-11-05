import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  AlertCircle,
  Lightbulb,
  DollarSign,
  Calendar,
  Phone,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prestación No Contributiva por Desempleo - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la prestación no contributiva por desempleo: requisitos económicos, cuantía fija (497€/mes), duración y cómo solicitarla.",
  keywords: ["prestación no contributiva", "subsidio desempleo", "prestación no contributiva sepe", "ayuda desempleo"],
  alternates: {
    canonical: "/prestaciones/no-contributiva",
  },
  openGraph: {
    title: "Prestación No Contributiva por Desempleo - Guía Completa 2024",
    description: "Aprende todo sobre la prestación no contributiva: requisitos económicos, cuantía fija y cómo solicitarla.",
    type: "article",
  },
};

export default function PrestacionNoContributivaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/prestaciones-sepe"
                  className="flex items-center text-green-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Prestaciones SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Prestación No Contributiva por Desempleo
                  </h1>
                  <div className="flex items-center gap-6 text-green-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>497€/mes (80% IPREM)</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-green-100">
                Guía completa sobre la prestación no contributiva por desempleo: requisitos económicos, 
                cuantía fija (497€/mes), duración y cómo solicitarla cuando no tienes cotización suficiente.
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
                <li className="text-gray-700">Prestación No Contributiva</li>
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
                    La prestación no contributiva por desempleo, también conocida como "subsidio por desempleo", 
                    es una ayuda económica destinada a trabajadores que se encuentran en situación de desempleo 
                    pero que no reúnen los requisitos de cotización necesarios para acceder a la prestación contributiva.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación se caracteriza por tener una cuantía fija (80% del IPREM, aproximadamente 497€/mes) 
                    y está destinada a personas que se encuentran en situación de necesidad económica y que han agotado 
                    o no tienen derecho a la prestación contributiva.
                  </p>
                </div>

                {/* Diferenciación */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Contributiva vs No Contributiva
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h3 className="font-bold text-indigo-700 mb-2">Prestación Contributiva</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Requiere 360 días cotizados</li>
                        <li>• Cuantía variable (hasta 1.087€)</li>
                        <li>• Basada en cotizaciones</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h3 className="font-bold text-green-700 mb-2">Prestación No Contributiva</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• No requiere cotización suficiente</li>
                        <li>• Cuantía fija (497€/mes)</li>
                        <li>• Requisitos económicos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Requisitos para la Prestación No Contributiva
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Situación de desempleo:</strong> Estar en situación legal de desempleo</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Inscripción:</strong> Estar inscrito como demandante de empleo</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Requisitos económicos:</strong> No superar los límites de ingresos establecidos</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>No tener derecho contributivo:</strong> Haber agotado o no tener derecho a la prestación contributiva</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Edad:</strong> Tener entre 16 y 65 años (edad de jubilación)</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Disponibilidad:</strong> Estar disponible para trabajar</span>
                    </li>
                  </ul>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                        Cuantía Fija
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Base:</strong> 80% del IPREM</li>
                        <li>• <strong>Cuantía 2024:</strong> 497€/mes aproximadamente</li>
                        <li>• <strong>Pago mensual:</strong> Entre los días 1 y 10</li>
                        <li>• <strong>No variable:</strong> La cuantía es fija, no depende de cotizaciones</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duración variable:</strong> Depende de la modalidad específica</li>
                        <li>• <strong>Subsidio ordinario:</strong> Hasta 6 meses (renovable)</li>
                        <li>• <strong>Mayores de 45 años:</strong> Hasta 24 meses</li>
                        <li>• <strong>Mayores de 52 años:</strong> Hasta la edad de jubilación</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Modalidades */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Modalidades del Subsidio</h2>
                  <div className="space-y-4">
                    <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Subsidio Ordinario</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Para desempleados que han agotado la prestación contributiva</li>
                        <li>• Duración: 6 meses (renovable hasta 24 meses)</li>
                        <li>• Requisitos económicos y de edad</li>
                      </ul>
                    </div>
                    <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Subsidio para Mayores de 45 años</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Para desempleados mayores de 45 años sin cotización suficiente</li>
                        <li>• Duración: Hasta 24 meses</li>
                        <li>• Requisitos económicos específicos</li>
                      </ul>
                    </div>
                    <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Subsidio para Mayores de 52 años</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Para desempleados mayores de 52 años</li>
                        <li>• Duración: Hasta la edad de jubilación</li>
                        <li>• Requisitos económicos y de cotización mínima</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Verifica requisitos económicos:</strong> Asegúrate de cumplirlos</li>
                            <li>• <strong>Documentación completa:</strong> Reúne todos los documentos</li>
                            <li>• <strong>Solicitud temprana:</strong> Presenta la solicitud cuanto antes</li>
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
                            <li>• <strong>Límites de renta:</strong> No superes los límites establecidos</li>
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
                    Si cumples los requisitos de cotización, puedes optar a:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/prestaciones/contributiva"
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
                    >
                      Ver Prestación Contributiva
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                    <Link
                      href="/prestaciones/desempleo"
                      className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
                    >
                      Ver Prestación por Desempleo
                      <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                    </Link>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-green-100 mb-6">
                    Consulta otras prestaciones SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/prestaciones-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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

