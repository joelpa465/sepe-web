import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Link as LinkIcon, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "Renta Activa de Inserción - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la Renta Activa de Inserción: requisitos, cuantía, duración, cómo solicitarla. Ayuda para desempleados de larga duración con especiales dificultades de inserción laboral.",
  keywords: ["renta activa inserción", "renta activa", "rai", "ayuda desempleo larga duración"],
  alternates: {
    canonical: "/subsidios/renta-activa",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples todos los requisitos para acceder a la Renta Activa de Inserción.",
    details: [
      "Estar desempleado de larga duración (más de 12 meses)",
      "Tener especiales dificultades de inserción laboral",
      "Estar inscrito como demandante de empleo",
      "No tener ingresos superiores al límite establecido",
      "Participar en programas de inserción laboral"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE en vigor",
      "Vida laboral o informe de cotizaciones",
      "Justificante de inscripción como demandante de empleo",
      "Certificado de empadronamiento",
      "Documentación que acredite las dificultades de inserción",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Solicita la Renta Activa de Inserción.",
    details: [
      "Online: A través de la sede electrónica del SEPE",
      "Presencial: En la oficina del SEPE con cita previa",
      "Plazo: Durante el periodo de solicitud establecido",
      "Completa el formulario con todos los datos requeridos"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Participar en Programas de Inserción",
    description: "Es obligatorio participar en programas de inserción laboral.",
    details: [
      "Participar en programas de formación y orientación laboral",
      "Asistir a entrevistas de trabajo que te propongan",
      "Mantener la disponibilidad para trabajar",
      "Renovar la demanda de empleo regularmente"
    ],
    icon: CheckCircle
  }
];

const requisitos = [
  "Estar desempleado de larga duración (más de 12 meses sin empleo)",
  "Tener especiales dificultades de inserción laboral",
  "Estar inscrito como demandante de empleo en el SEPE",
  "No tener ingresos superiores al límite establecido",
  "Participar activamente en programas de inserción laboral",
  "Cumplir con los requisitos específicos establecidos por el SEPE"
];

export default function RentaActivaPage() {
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
                  href="/categorias/subsidios"
                  className="flex items-center text-indigo-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Subsidios
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <LinkIcon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Renta Activa de Inserción
                  </h1>
                  <div className="flex items-center gap-6 text-indigo-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>479€/mes</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-indigo-100">
                Ayuda para desempleados de larga duración con especiales dificultades de inserción laboral. 
                Requisitos, cuantía, duración y cómo solicitarla paso a paso.
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
                <li><Link href="/categorias/subsidios" className="text-blue-600 hover:text-blue-800">Subsidios</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Renta Activa de Inserción</li>
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
                {/* Introducción */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    La Renta Activa de Inserción (RAI) es una ayuda económica destinada a desempleados de larga 
                    duración que tienen especiales dificultades de inserción laboral y que participan activamente 
                    en programas de inserción laboral.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación tiene como objetivo proporcionar una protección económica mientras se participa 
                    en programas de formación y orientación laboral, facilitando la inserción en el mercado laboral.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-indigo-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dificultades de Inserción */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué se Considera Dificultades de Inserción?</h2>
                  
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <p className="text-gray-700 mb-4">
                      Se consideran especiales dificultades de inserción laboral:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Desempleo de larga duración:</strong> Más de 12 meses sin empleo</li>
                      <li>• <strong>Falta de formación:</strong> Falta de cualificación o formación adecuada</li>
                      <li>• <strong>Edad:</strong> Mayores de 45 años o menores de 30 años</li>
                      <li>• <strong>Discapacidad:</strong> Personas con discapacidad reconocida</li>
                      <li>• <strong>Víctimas de violencia:</strong> Víctimas de violencia de género o doméstica</li>
                      <li>• <strong>Otras circunstancias:</strong> Otras situaciones que dificulten la inserción laboral</li>
                    </ul>
                  </div>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-indigo-600" />
                        Cuantía (2024)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Cuantía mensual:</strong> 479€/mes</li>
                        <li>• <strong>Pago:</strong> Mensual, entre los días 1 y 10</li>
                        <li>• <strong>Compatibilidad:</strong> Con otros ingresos limitados</li>
                        <li>• <strong>Límite ingresos:</strong> No superar el límite establecido</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duración:</strong> Variable según el programa de inserción</li>
                        <li>• <strong>Renovación:</strong> Mensual de la demanda de empleo</li>
                        <li>• <strong>Condición:</strong> Participación activa en programas de inserción</li>
                        <li>• <strong>Límite:</strong> Mientras se cumplan los requisitos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Renta Activa de Inserción</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-indigo-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Participación activa:</strong> Es obligatorio participar en programas de inserción</li>
                            <li>• <strong>Formación:</strong> Aprovecha los programas de formación ofrecidos</li>
                            <li>• <strong>Renovación mensual:</strong> Renueva tu demanda de empleo cada mes</li>
                            <li>• <strong>Documentación:</strong> Reúne toda la documentación de dificultades de inserción</li>
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
                            <li>• <strong>Participación obligatoria:</strong> Debes participar en programas de inserción</li>
                            <li>• <strong>Renovación mensual:</strong> Si no renuevas, se suspenderá el pago</li>
                            <li>• <strong>Dificultades:</strong> Debes acreditar las dificultades de inserción</li>
                            <li>• <strong>Dudas:</strong> Llama al SEPE al 900 81 24 00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-indigo-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la Renta Activa de Inserción:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-indigo-100 mb-6">
                    Consulta otros subsidios o explora nuestras prestaciones
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/subsidios"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      Ver Todos los Subsidios
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

