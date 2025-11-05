import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Home, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayudas al Alquiler - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre ayudas al alquiler: programas de ayuda, bonificaciones, subsidios y cómo solicitarlas.",
  keywords: ["ayudas alquiler", "ayuda vivienda", "subsidio alquiler", "bonificación alquiler", "ayudas vivienda"],
  alternates: {
    canonical: "/ayudas/alquiler",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para acceder a las ayudas al alquiler.",
    details: [
      "Tener un contrato de alquiler vigente",
      "Ingresos inferiores a los límites establecidos",
      "No ser propietario de otra vivienda",
      "Estar empadronado en el municipio"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Identificar el Programa de Ayuda",
    description: "Existen diferentes programas según tu situación y Comunidad Autónoma.",
    details: [
      "Programas estatales (Plan Estatal de Vivienda)",
      "Programas autonómicos específicos",
      "Programas locales (Ayuntamientos)",
      "Ayudas del IMV complementarias"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "Contrato de alquiler vigente",
      "DNI o NIE de todos los miembros de la unidad familiar",
      "Justificantes de ingresos (nóminas, prestaciones, etc.)",
      "Certificado de empadronamiento",
      "Certificado de ingresos de la unidad familiar",
      "Justificante de pago del alquiler"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Solicita la ayuda según corresponda a tu situación.",
    details: [
      "Programas estatales: En la Sede Electrónica de la Seguridad Social",
      "Programas autonómicos: En la Comunidad Autónoma correspondiente",
      "Programas locales: En el Ayuntamiento",
      "Puedes solicitar en varios programas si cumples requisitos"
    ],
    icon: FileText
  }
];

const requisitos = [
  "Tener un contrato de alquiler vigente",
  "Ingresos inferiores a los límites establecidos (varían por programa)",
  "No ser propietario de otra vivienda (salvo excepciones)",
  "Estar empadronado en el municipio donde se alquila",
  "La vivienda debe ser la residencia habitual",
  "No tener deudas con Hacienda o Seguridad Social"
];

export default function AyudasAlquilerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/ayudas-sepe"
                  className="flex items-center text-orange-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Ayudas SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Home className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Ayudas al Alquiler
                  </h1>
                  <div className="flex items-center gap-6 text-orange-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-orange-100">
                Programas de ayuda al alquiler: bonificaciones, subsidios y ayudas para pagar la vivienda en alquiler, 
                disponibles tanto a nivel estatal como autonómico y local.
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
                <li className="text-gray-700">Ayudas al Alquiler</li>
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
                    Las ayudas al alquiler son programas diseñados para facilitar el acceso y mantenimiento de una 
                    vivienda en alquiler a personas y familias con ingresos limitados.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Estas ayudas están disponibles a través de diferentes programas estatales, autonómicos y locales, 
                    cada uno con sus propios requisitos y condiciones.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
                    Requisitos Generales
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tipos de Ayudas */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Ayudas Disponibles</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-orange-600" />
                        Ayudas Directas
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Subsidios mensuales para el pago del alquiler</li>
                        <li>• Bonificaciones en el alquiler</li>
                        <li>• Ayudas puntuales para depósitos y fianzas</li>
                        <li>• Complemento de alquiler del IMV</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Home className="w-6 h-6 mr-2 text-blue-600" />
                        Programas Especiales
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Vivienda protegida en alquiler</li>
                        <li>• Programas para jóvenes</li>
                        <li>• Programas para mayores</li>
                        <li>• Programas para personas con discapacidad</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cuantía */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantías (Orientativas)</h2>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                    <p className="text-gray-700 mb-4">
                      Las cuantías varían según el programa y la Comunidad Autónoma. Generalmente:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Hasta el 40% del alquiler:</strong> En programas estatales</li>
                      <li>• <strong>Máximo 200-400€/mes:</strong> Dependiendo del programa</li>
                      <li>• <strong>Límites de ingresos:</strong> Varían según la unidad familiar</li>
                      <li>• <strong>Duración:</strong> Generalmente renovable anualmente</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar las Ayudas</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-orange-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mr-3">
                                  Paso {step.number}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {step.title}
                              </h3>
                              <p className="text-lg text-gray-700 mb-4">
                                {step.description}
                              </p>
                              
                              {step.details && (
                                <ul className="space-y-2 bg-gray-50 rounded-lg p-4">
                                  {step.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-gray-700">
                                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Consulta varios programas:</strong> Puedes solicitar en varios simultáneamente</li>
                            <li>• <strong>Información local:</strong> Consulta en tu Ayuntamiento y Comunidad Autónoma</li>
                            <li>• <strong>Documentación actualizada:</strong> Mantén todos los documentos al día</li>
                            <li>• <strong>Plazos:</strong> Respeta los plazos de solicitud y renovación</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Atención</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Cambios de situación:</strong> Comunica cualquier cambio en tus ingresos</li>
                            <li>• <strong>Renovación:</strong> Muchas ayudas requieren renovación anual</li>
                            <li>• <strong>Compatibilidad:</strong> Algunas ayudas son compatibles entre sí</li>
                            <li>• <strong>Requisitos:</strong> Varían según Comunidad Autónoma y programa</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-orange-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre las ayudas al alquiler:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Servicios Sociales:</strong> Consulta en tu Ayuntamiento</li>
                    <li>• <strong>Comunidad Autónoma:</strong> Consulta en la Consejería de Vivienda</li>
                    <li>• <strong>INSS:</strong> 900 20 22 22 (gratuito) - Para complemento IMV</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-orange-600 to-red-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-orange-100 mb-6">
                    Consulta otras ayudas SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/ayudas-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      Ver Todas las Ayudas
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

