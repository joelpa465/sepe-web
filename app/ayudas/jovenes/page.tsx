import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  GraduationCap, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  Briefcase,
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayudas para Jóvenes - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre ayudas para jóvenes: formación, empleo, vivienda, emancipación y cómo solicitarlas.",
  keywords: ["ayudas jóvenes", "ayudas formación", "ayudas empleo jóvenes", "ayudas vivienda jóvenes", "emancipación jóvenes"],
  alternates: {
    canonical: "/ayudas/jovenes",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para acceder a las ayudas para jóvenes.",
    details: [
      "Tener entre 18 y 35 años (varía según el programa)",
      "No tener ingresos o tener ingresos bajos",
      "Estar empadronado en España",
      "Cumplir con los requisitos específicos de cada programa"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Identificar el Tipo de Ayuda",
    description: "Existen diferentes tipos de ayudas según tus necesidades.",
    details: [
      "Ayudas para formación y estudios",
      "Ayudas para el empleo y prácticas",
      "Ayudas para la vivienda y emancipación",
      "Ayudas para el emprendimiento"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE",
      "Certificado de empadronamiento",
      "Justificantes de ingresos",
      "Certificado de estudios o situación laboral",
      "Documentación específica según el programa"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Solicita la ayuda según corresponda.",
    details: [
      "Programas estatales: En organismos estatales correspondientes",
      "Programas autonómicos: En la Comunidad Autónoma",
      "Programas locales: En el Ayuntamiento",
      "Programas formativos: En centros de formación o universidades"
    ],
    icon: FileText
  }
];

const requisitos = [
  "Tener entre 18 y 35 años (los límites varían según el programa)",
  "No tener ingresos o tener ingresos inferiores a los límites establecidos",
  "Estar empadronado en España",
  "No tener la edad de jubilación",
  "Cumplir con los requisitos específicos de cada programa",
  "Estar en situación de desempleo o formación (según el programa)"
];

export default function AyudasJovenesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/ayudas-sepe"
                  className="flex items-center text-cyan-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Ayudas SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Ayudas para Jóvenes
                  </h1>
                  <div className="flex items-center gap-6 text-cyan-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-cyan-100">
                Programas específicos de ayuda para jóvenes: formación, empleo, vivienda y emancipación 
                diseñados para facilitar el acceso de los jóvenes al mercado laboral y a la vivienda.
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
                <li className="text-gray-700">Ayudas para Jóvenes</li>
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
                    Los jóvenes tienen acceso a diversos programas de ayuda diseñados para facilitar su formación, 
                    acceso al empleo, emancipación y acceso a la vivienda.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Estos programas están disponibles tanto a nivel estatal como autonómico y local, y están 
                    dirigidos a jóvenes en situación de desempleo, formación o con dificultades para acceder 
                    a la vivienda.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-cyan-600" />
                    Requisitos Generales
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tipos de Ayudas */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Ayudas Disponibles</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="w-6 h-6 mr-2 text-cyan-600" />
                        Formación y Estudios
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Becas para formación profesional</li>
                        <li>• Ayudas para estudios universitarios</li>
                        <li>• Programas de formación dual</li>
                        <li>• Ayudas para cursos y certificaciones</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Briefcase className="w-6 h-6 mr-2 text-green-600" />
                        Empleo
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ayudas para prácticas profesionales</li>
                        <li>• Programas de primer empleo</li>
                        <li>• Bonificaciones a la contratación</li>
                        <li>• Ayudas para el emprendimiento</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Home className="w-6 h-6 mr-2 text-orange-600" />
                        Vivienda
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ayudas para alquiler juvenil</li>
                        <li>• Programas de vivienda joven</li>
                        <li>• Ayudas para emancipación</li>
                        <li>• Ayudas para depósitos y fianzas</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-purple-600" />
                        Otras Ayudas
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ayudas para transporte</li>
                        <li>• Ayudas para material formativo</li>
                        <li>• Complementos salariales</li>
                        <li>• Ayudas autonómicas específicas</li>
                      </ul>
                    </div>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-cyan-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-cyan-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Consulta varios programas:</strong> Puedes solicitar en varios simultáneamente</li>
                            <li>• <strong>Información actualizada:</strong> Los programas cambian frecuentemente</li>
                            <li>• <strong>Formación continua:</strong> Prioriza programas formativos</li>
                            <li>• <strong>Asesoramiento:</strong> Consulta en servicios de empleo y juventud</li>
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
                            <li>• <strong>Edad límite:</strong> Muchos programas tienen límite de edad</li>
                            <li>• <strong>Plazos:</strong> Respeta los plazos de solicitud</li>
                            <li>• <strong>Documentación:</strong> Mantén toda la documentación actualizada</li>
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
                    <Phone className="w-6 h-6 mr-2 text-cyan-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre las ayudas para jóvenes:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Servicios de Empleo:</strong> Consulta en tu Comunidad Autónoma</li>
                    <li>• <strong>Instituto de la Juventud:</strong> INJUVE</li>
                    <li>• <strong>Servicios de Juventud:</strong> Consulta en tu Ayuntamiento</li>
                    <li>• <strong>SEPE:</strong> 900 81 24 00 (gratuito)</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-cyan-600 to-blue-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-cyan-100 mb-6">
                    Consulta otras ayudas SEPE o explora nuestros tutoriales y cursos
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/ayudas-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
                    >
                      Ver Todas las Ayudas
                    </Link>
                    <Link
                      href="/cursos"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Cursos
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

