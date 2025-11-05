import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Baby, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  Heart,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayudas para Madres Solteras - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre ayudas y prestaciones para madres solteras: ayudas económicas, bonificaciones, prestaciones familiares y cómo solicitarlas.",
  keywords: ["ayudas madres solteras", "madre soltera", "ayudas monoparentales", "prestaciones familiares", "ayudas económicas"],
  alternates: {
    canonical: "/ayudas/madres-solteras",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para acceder a las ayudas para madres solteras.",
    details: [
      "Ser madre soltera o monoparental con custodia de menores",
      "Tener ingresos inferiores a los límites establecidos",
      "Estar empadronada en España",
      "Tener hijos menores de 18 años (o mayores con discapacidad)"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Identificar las Ayudas Disponibles",
    description: "Existen diferentes tipos de ayudas según tu situación.",
    details: [
      "Ingreso Mínimo Vital (con complemento por hijo a cargo)",
      "Prestación por hijo a cargo",
      "Ayudas autonómicas y locales específicas",
      "Bonificaciones fiscales y descuentos",
      "Ayudas para la vivienda y alquiler"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE de la madre y los hijos",
      "Libro de familia o certificado de nacimiento",
      "Certificado de empadronamiento",
      "Justificantes de ingresos",
      "Certificado de convivencia",
      "Resolución judicial de custodia (si aplica)"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Solicitar las Ayudas",
    description: "Presenta las solicitudes según corresponda.",
    details: [
      "IMV: En la Sede Electrónica de la Seguridad Social",
      "Prestación por hijo a cargo: En el INSS",
      "Ayudas autonómicas: En la Comunidad Autónoma correspondiente",
      "Ayudas locales: En el Ayuntamiento",
      "Puedes solicitar varias ayudas simultáneamente"
    ],
    icon: FileText
  }
];

const requisitos = [
  "Ser madre soltera o monoparental con custodia de menores",
  "Tener hijos menores de 18 años (o mayores con discapacidad)",
  "Ingresos inferiores a los límites establecidos",
  "Estar empadronada en España",
  "No tener la edad de jubilación",
  "Cumplir con los requisitos específicos de cada ayuda"
];

export default function AyudasMadresSolterasPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/ayudas-sepe"
                  className="flex items-center text-pink-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Ayudas SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Baby className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Ayudas para Madres Solteras
                  </h1>
                  <div className="flex items-center gap-6 text-pink-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-pink-100">
                Prestaciones específicas para madres solteras o monoparentales: ayudas económicas, bonificaciones 
                y apoyo familiar para garantizar el bienestar de las familias monoparentales.
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
                <li className="text-gray-700">Ayudas para Madres Solteras</li>
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
                    Las madres solteras o familias monoparentales tienen acceso a diversas ayudas y prestaciones 
                    específicas diseñadas para apoyar su situación y garantizar el bienestar de sus hijos.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Estas ayudas incluyen prestaciones económicas, bonificaciones fiscales, ayudas para la vivienda 
                    y otros apoyos tanto a nivel estatal como autonómico y local.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-pink-600" />
                    Requisitos Generales
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tipos de Ayudas */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Ayudas Disponibles</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-pink-600" />
                        Ayudas Económicas
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ingreso Mínimo Vital (con complemento)</li>
                        <li>• Prestación por hijo a cargo</li>
                        <li>• Ayudas autonómicas específicas</li>
                        <li>• Complemento de renta familiar</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="w-6 h-6 mr-2 text-blue-600" />
                        Otras Ayudas
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Bonificaciones fiscales (IRPF)</li>
                        <li>• Ayudas para alquiler y vivienda</li>
                        <li>• Descuentos en servicios públicos</li>
                        <li>• Ayudas para guardería y educación</li>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-pink-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Consulta todas las ayudas:</strong> Puedes solicitar varias simultáneamente</li>
                            <li>• <strong>Ayudas autonómicas:</strong> Varían según tu Comunidad Autónoma</li>
                            <li>• <strong>Documentación:</strong> Mantén toda la documentación actualizada</li>
                            <li>• <strong>Asesoramiento:</strong> Consulta con servicios sociales de tu Ayuntamiento</li>
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
                            <li>• <strong>Comunicación de cambios:</strong> Informa cualquier cambio en tu situación</li>
                            <li>• <strong>Revisión periódica:</strong> Las ayudas se revisan anualmente</li>
                            <li>• <strong>Compatibilidad:</strong> Algunas ayudas son compatibles entre sí</li>
                            <li>• <strong>Plazos:</strong> Respeta los plazos de solicitud</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-pink-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre las ayudas para madres solteras:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Servicios Sociales:</strong> Consulta en tu Ayuntamiento</li>
                    <li>• <strong>INSS:</strong> 900 20 22 22 (gratuito)</li>
                    <li>• <strong>SEPE:</strong> 900 81 24 00 (gratuito)</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-pink-600 to-rose-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-pink-100 mb-6">
                    Consulta otras ayudas SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/ayudas-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
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

