import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Globe, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  User,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Solicitar Cita Previa Extranjería - Guía Paso a Paso 2024",
  description: "Tutorial completo para solicitar cita previa en Extranjería para renovar NIE, visados, residencia y otros trámites de inmigración.",
  keywords: ["cita previa extranjeria", "cita previa nie", "renovar nie", "cita previa inmigracion", "cita extranjeria"],
  alternates: {
    canonical: "/tutoriales/cita-previa-extranjeria",
  },
  openGraph: {
    title: "Cómo Solicitar Cita Previa Extranjería - Guía Paso a Paso",
    description: "Aprende a solicitar tu cita previa en Extranjería para trámites de inmigración de forma sencilla.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Identificar el Trámite que Necesitas",
    description: "Extranjería gestiona múltiples trámites. Identifica cuál es el tuyo antes de solicitar la cita.",
    details: [
      "Renovación de NIE (Número de Identidad de Extranjero)",
      "Solicitud inicial de NIE",
      "Renovación de tarjeta de residencia",
      "Solicitud de visado de trabajo, estudios o reagrupación familiar",
      "Autorización de residencia",
      "Certificados de registro de ciudadano de la UE"
    ],
    icon: FileText
  },
  {
    number: 2,
    title: "Preparar la Documentación Necesaria",
    description: "Cada trámite requiere documentación específica. Tenla lista antes de solicitar la cita.",
    details: [
      "Pasaporte o documento de identidad en vigor",
      "NIE actual (si lo tienes) o documento que acredite tu identidad",
      "Certificado de empadronamiento (actualizado, no más de 3 meses)",
      "Documentación específica según el trámite (contrato de trabajo, matrícula, etc.)",
      "Fotografías tamaño carnet (en algunos casos)",
      "Justificante de pago de tasas (si aplica)"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Acceder al Sistema de Cita Previa",
    description: "Visita el portal oficial de Extranjería para solicitar tu cita.",
    details: [
      "Accede a sede.administracionespublicas.gob.es",
      "Selecciona 'Extranjería' como organismo",
      "Elige tu provincia y la oficina de Extranjería correspondiente",
      "Selecciona el tipo de trámite que vas a realizar"
    ],
    icon: Globe
  },
  {
    number: 4,
    title: "Completar el Formulario de Solicitud",
    description: "Rellena todos los datos solicitados de forma precisa.",
    details: [
      "Introduce tu NIE (si lo tienes) o datos del pasaporte",
      "Proporciona tu número de teléfono móvil (obligatorio)",
      "Indica tu email (recomendado para recibir confirmación)",
      "Selecciona el motivo específico de la cita",
      "Verifica que todos los datos sean correctos antes de continuar"
    ],
    icon: User
  },
  {
    number: 5,
    title: "Elegir Fecha y Hora Disponible",
    description: "Selecciona la fecha y hora que mejor se adapte a tus necesidades.",
    details: [
      "El sistema mostrará un calendario con las fechas disponibles",
      "Las citas se liberan a primera hora (8:00-9:00 AM)",
      "Si no hay citas, revisa en otro momento o amplía la búsqueda a otras oficinas",
      "Selecciona la franja horaria que prefieras",
      "Ten en cuenta que algunas oficinas tienen más demanda que otras"
    ],
    icon: Clock
  },
  {
    number: 6,
    title: "Confirmar y Obtener el Número Localizador",
    description: "Revisa todos los datos y confirma tu cita.",
    details: [
      "Verifica que todos los datos personales sean correctos",
      "Confirma la fecha, hora y oficina seleccionadas",
      "Anota el número localizador que recibirás",
      "Recibirás un SMS de confirmación con los detalles",
      "Guarda el localizador en un lugar seguro"
    ],
    icon: CheckCircle
  }
];

const tramites = [
  "Renovación de NIE",
  "Solicitud inicial de NIE",
  "Renovación de tarjeta de residencia temporal",
  "Renovación de tarjeta de residencia permanente",
  "Solicitud de autorización de residencia",
  "Visado de trabajo",
  "Visado de estudios",
  "Reagrupación familiar",
  "Certificado de registro de ciudadano de la UE"
];

export default function CitaPreviaExtranjeriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/cita-previa"
                  className="flex items-center text-purple-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Citas Previas
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Solicitar Cita Previa Extranjería
                  </h1>
                  <div className="flex items-center gap-6 text-purple-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Nivel: Medio</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-purple-100">
                Guía completa para solicitar cita previa en Extranjería para renovar NIE, visados, 
                residencia y otros trámites de inmigración. Proceso paso a paso con todos los detalles.
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
                <li><Link href="/tutoriales" className="text-blue-600 hover:text-blue-800">Tutoriales</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li><Link href="/categorias/cita-previa" className="text-blue-600 hover:text-blue-800">Cita Previa</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Cita Previa Extranjería</li>
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
                    La Oficina de Extranjería gestiona todos los trámites relacionados con la residencia, 
                    nacionalidad y documentación de ciudadanos extranjeros en España. Solicitar una cita 
                    previa es obligatorio para la mayoría de estos trámites, por lo que es importante 
                    conocer el proceso correctamente.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este tutorial te guiará paso a paso para solicitar tu cita previa en Extranjería, 
                    ya sea para renovar tu NIE, solicitar visados o realizar cualquier otro trámite de inmigración.
                  </p>
                </div>

                {/* Trámites disponibles */}
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-purple-600" />
                    Trámites Disponibles en Extranjería
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tramites.map((tramite, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{tramite}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-purple-600" />
                    Documentación General Necesaria
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Pasaporte o documento de identidad:</strong> Debe estar en vigor y con validez suficiente</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>NIE actual:</strong> Si lo tienes, deberás presentarlo</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Certificado de empadronamiento:</strong> Actualizado (no más de 3 meses de antigüedad)</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Teléfono móvil:</strong> Obligatorio para recibir confirmación</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Documentación específica:</strong> Según el trámite que vayas a realizar</span>
                    </li>
                  </ul>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso Paso a Paso</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {/* Connection line */}
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-purple-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
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

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos y Recomendaciones</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Primera hora:</strong> Las citas se liberan a las 8:00-9:00 AM</li>
                            <li>• <strong>Revisa regularmente:</strong> Las citas canceladas vuelven a estar disponibles</li>
                            <li>• <strong>Empadronamiento actualizado:</strong> Asegúrate de tenerlo vigente</li>
                            <li>• <strong>Documentación completa:</strong> Revisa los requisitos específicos de tu trámite</li>
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
                            <li>• <strong>Validez del pasaporte:</strong> Debe tener validez suficiente</li>
                            <li>• <strong>Plazos:</strong> Renueva tu NIE antes de que expire</li>
                            <li>• <strong>No hay citas:</strong> Revisa en otro momento o amplía la búsqueda</li>
                            <li>• <strong>Dudas:</strong> Consulta la web oficial o contacta por teléfono</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-purple-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre tu trámite o necesitas información adicional, puedes contactar con Extranjería:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono:</strong> 060 (Información Administrativa General)</li>
                    <li>• <strong>Web oficial:</strong> sede.administracionespublicas.gob.es</li>
                    <li>• <strong>Horario:</strong> Consulta el horario específico de tu oficina de Extranjería</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-purple-100 mb-6">
                    Consulta otros tutoriales relacionados con citas previas o trámites administrativos
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/cita-previa"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Ver Todas las Citas Previas
                    </Link>
                    <Link
                      href="/tutoriales"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Más Tutoriales
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

