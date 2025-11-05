import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  Smartphone,
  Globe,
  User,
  AlertCircle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Solicitar Cita Previa INEM (SEPE) - Guía Paso a Paso 2024",
  description: "Tutorial completo para solicitar cita previa en el SEPE online y por teléfono. Guía paso a paso con requisitos, documentación necesaria y solución de problemas comunes.",
  keywords: ["cita previa inem", "cita previa sepe", "solicitar cita sepe", "cita previa online sepe", "anular cita sepe"],
  alternates: {
    canonical: "/tutoriales/cita-previa-inem",
  },
  openGraph: {
    title: "Cómo Solicitar Cita Previa INEM (SEPE) - Guía Paso a Paso",
    description: "Aprende a solicitar tu cita previa en el SEPE de forma fácil con nuestra guía detallada paso a paso.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Preparar la Documentación Necesaria",
    description: "Antes de solicitar la cita, asegúrate de tener toda la documentación requerida lista.",
    details: [
      "DNI o NIE en vigor",
      "Número de Seguridad Social (NAF) - 12 dígitos",
      "Teléfono móvil operativo (recibirás SMS de confirmación)",
      "Email válido (opcional pero recomendado)",
      "Documentación específica según el trámite que vayas a realizar"
    ],
    icon: FileText
  },
  {
    number: 2,
    title: "Acceder a la Sede Electrónica del SEPE",
    description: "Visita el portal oficial del SEPE para solicitar tu cita previa online.",
    details: [
      "Accede a www.sepe.es o directamente a sede.sepe.gob.es",
      "Haz clic en 'Cita Previa' o 'Solicitar Cita'",
      "Si no tienes cuenta, deberás registrarte con tu DNI/NIE",
      "Si ya tienes cuenta, inicia sesión con Cl@ve, certificado digital o DNI electrónico"
    ],
    icon: Globe
  },
  {
    number: 3,
    title: "Seleccionar el Tipo de Trámite",
    description: "Elige el motivo específico de tu cita previa.",
    details: [
      "Renovación de demanda de empleo",
      "Consulta de prestaciones",
      "Solicitud de prestaciones",
      "Modificación de datos personales",
      "Otros trámites administrativos"
    ],
    icon: CheckCircle
  },
  {
    number: 4,
    title: "Elegir la Oficina y Fecha",
    description: "Selecciona la oficina más cercana y una fecha disponible.",
    details: [
      "El sistema mostrará las oficinas disponibles según tu código postal",
      "Puedes buscar por provincia o código postal",
      "Selecciona la fecha y hora que mejor te convenga",
      "Si no hay citas disponibles, revisa en otro momento o amplía la búsqueda a otras oficinas cercanas"
    ],
    icon: Calendar
  },
  {
    number: 5,
    title: "Confirmar los Datos y Obtener el Número Localizador",
    description: "Revisa toda la información y confirma tu cita.",
    details: [
      "Verifica que todos los datos personales sean correctos",
      "Revisa la fecha, hora y oficina seleccionadas",
      "Confirma la solicitud",
      "Anota el número localizador que recibirás (lo necesitarás para consultar o anular la cita)",
      "Recibirás un SMS de confirmación con los detalles de la cita"
    ],
    icon: Smartphone
  }
];

const requisitos = [
  {
    title: "Documentos Obligatorios",
    items: [
      "DNI o NIE en vigor",
      "Número de Seguridad Social (NAF)",
      "Teléfono móvil operativo"
    ]
  },
  {
    title: "Documentos Recomendados",
    items: [
      "Email para recibir confirmación por escrito",
      "Documentación específica del trámite a realizar",
      "Certificado de demandante de empleo (si aplica)"
    ]
  }
];

const metodos = [
  {
    title: "Online (Recomendado)",
    description: "A través de la sede electrónica del SEPE",
    ventajas: [
      "Disponible 24 horas al día",
      "Más rápido y cómodo",
      "Confirmación inmediata",
      "Posibilidad de anular o modificar fácilmente"
    ],
    icon: Globe
  },
  {
    title: "Por Teléfono",
    description: "Llamando al 901 11 99 99",
    ventajas: [
      "Atención personalizada",
      "Útil si no tienes acceso a internet",
      "Asistencia en caso de dudas"
    ],
    icon: Smartphone
  }
];

export default function CitaPreviaInemPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/cita-previa"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Citas Previas
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Solicitar Cita Previa INEM (SEPE)
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Nivel: Fácil</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-blue-100">
                Guía completa paso a paso para solicitar tu cita previa en el SEPE de forma online o por teléfono. 
                Incluye requisitos, documentación necesaria y consejos prácticos.
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
                <li className="text-gray-700">Cita Previa INEM</li>
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
                    La cita previa en el SEPE (Servicio Público de Empleo Estatal) es necesaria para realizar 
                    diversos trámites como renovar tu demanda de empleo, consultar prestaciones, solicitar ayudas 
                    o realizar modificaciones en tus datos personales.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este tutorial te guiará paso a paso para solicitar tu cita previa de forma sencilla y rápida, 
                    ya sea por internet o por teléfono.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Requisitos y Documentación
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {requisitos.map((req, index) => (
                      <div key={index}>
                        <h3 className="font-semibold text-gray-900 mb-2">{req.title}</h3>
                        <ul className="space-y-2">
                          {req.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Métodos de Solicitud */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Métodos para Solicitar Cita Previa</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {metodos.map((metodo, index) => {
                      const Icon = metodo.icon;
                      return (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{metodo.title}</h3>
                              <p className="text-gray-600 text-sm">{metodo.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {metodo.ventajas.map((ventaja, idx) => (
                              <li key={idx} className="flex items-start text-gray-700">
                                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{ventaja}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
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

                {/* Consejos y Problemas Comunes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos y Problemas Comunes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Las citas se liberan a primera hora de la mañana (8:00-9:00 AM)</li>
                            <li>• Revisa regularmente, las citas canceladas vuelven a estar disponibles</li>
                            <li>• Si no hay citas en tu oficina, busca en oficinas cercanas</li>
                            <li>• Guarda el número localizador en un lugar seguro</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Problemas Comunes</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• "No hay citas disponibles": Revisa en otro momento o amplía la búsqueda</li>
                            <li>• Error al confirmar: Verifica que todos los datos sean correctos</li>
                            <li>• No recibes SMS: Comprueba el número de teléfono introducido</li>
                            <li>• Duda sobre el trámite: Consulta la web oficial o llama al 901 11 99 99</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anular Cita */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">¿Cómo Anular una Cita?</h3>
                  <p className="text-gray-700 mb-4">
                    Si necesitas anular tu cita previa, puedes hacerlo desde la misma sede electrónica del SEPE. 
                    Necesitarás tu DNI/NIE y el número localizador que recibiste al confirmar la cita.
                  </p>
                  <Link
                    href="/tutoriales/anular-cita-sepe"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Ver guía para anular cita previa SEPE
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Link>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más ayuda?</h3>
                  <p className="text-blue-100 mb-6">
                    Consulta otros tutoriales o contacta directamente con el SEPE
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/tutoriales"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Ver Más Tutoriales
                    </Link>
                    <Link
                      href="/categorias/cita-previa"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Todas las Citas Previas
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

