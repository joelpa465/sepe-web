import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Heart, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayudas para Personas con Discapacidad - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre ayudas y prestaciones para personas con discapacidad: económicas, fiscales, laborales y cómo solicitarlas.",
  keywords: ["ayudas discapacidad", "prestaciones discapacidad", "certificado discapacidad", "ayudas económicas discapacidad"],
  alternates: {
    canonical: "/ayudas/discapacidad",
  },
};

export default function AyudasDiscapacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/ayudas-sepe"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Ayudas SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Ayudas para Personas con Discapacidad
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>15 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-blue-100">
                Ayudas y prestaciones para personas con discapacidad igual o superior al 33%: económicas, fiscales, 
                laborales y de integración social.
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
                <li><Link href="/categorias/ayudas-sepe" className="text-blue-600 hover:text-blue-800">Ayudas SEPE</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Ayudas para Personas con Discapacidad</li>
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
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Las personas con discapacidad reconocida igual o superior al 33% tienen derecho a diversas ayudas 
                    y prestaciones diseñadas para mejorar su calidad de vida, autonomía e integración social.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Para información más detallada, consulta nuestro artículo completo en el blog:
                  </p>
                  <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                    <Link 
                      href="/blog/ayudas-discapacitados"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-lg flex items-center"
                    >
                      Ver Guía Completa de Ayudas para Personas con Discapacidad
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Tipos de Ayudas */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Ayudas Disponibles</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
                        Ayudas Económicas
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Pensión de invalidez (contributiva y no contributiva)</li>
                        <li>• Prestaciones por incapacidad permanente</li>
                        <li>• Prestación por hijo a cargo con discapacidad</li>
                        <li>• Complemento por gran invalidez</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Home className="w-6 h-6 mr-2 text-green-600" />
                        Ayudas para Vivienda
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Subvenciones para adaptación de vivienda</li>
                        <li>• Ayudas para eliminación de barreras</li>
                        <li>• Programas de vivienda adaptada</li>
                        <li>• Ayudas para alquiler</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FileText className="w-6 h-6 mr-2 text-purple-600" />
                        Ayudas Fiscales
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Deducciones en el IRPF</li>
                        <li>• Exención de impuestos de vehículos</li>
                        <li>• IVA superreducido (4%)</li>
                        <li>• Bonificaciones en impuestos locales</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-orange-600" />
                        Otras Ayudas
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ayudas para movilidad y transporte</li>
                        <li>• Subvenciones para formación y empleo</li>
                        <li>• Ayudas para productos de asistencia</li>
                        <li>• Tarjeta de estacionamiento reservado</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Requisitos Principales
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Tener un certificado de discapacidad con grado igual o superior al 33%</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Residir legalmente en España</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cumplir con los requisitos específicos de cada ayuda</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Para ayudas económicas: cumplir requisitos de ingresos y cotización según corresponda</span>
                    </li>
                  </ul>
                </div>

                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Cómo Obtener el Certificado */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Obtener el Certificado de Discapacidad</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      El certificado de discapacidad es el documento oficial que acredita el grado de discapacidad. 
                      Se solicita en los Centros de Valoración y Orientación de Personas con Discapacidad de tu 
                      Comunidad Autónoma.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Dónde:</strong> Consejería de Bienestar Social de tu Comunidad Autónoma</li>
                      <li>• <strong>Documentación:</strong> Informes médicos, historial clínico, DNI/NIE</li>
                      <li>• <strong>Proceso:</strong> Evaluación por equipo multidisciplinar</li>
                      <li>• <strong>Plazo:</strong> Variable según la Comunidad Autónoma</li>
                    </ul>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-blue-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre las ayudas para personas con discapacidad:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Centros de Valoración:</strong> Consulta en tu Comunidad Autónoma</li>
                    <li>• <strong>INSS:</strong> 900 20 22 22 (gratuito)</li>
                    <li>• <strong>CERMI:</strong> Organización de referencia para personas con discapacidad</li>
                    <li>• <strong>ONCE:</strong> Para personas con discapacidad visual</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-blue-100 mb-6">
                    Consulta nuestro artículo completo o explora otras ayudas
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/blog/ayudas-discapacitados"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Ver Artículo Completo
                    </Link>
                    <Link
                      href="/categorias/ayudas-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Otras Ayudas
                    </Link>
                  </div>
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
      </main>
      
      <Footer />
    </div>
  );
}

