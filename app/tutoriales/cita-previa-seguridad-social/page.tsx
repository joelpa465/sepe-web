import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Building2, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Globe,
  Phone,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Solicitar Cita Previa Seguridad Social - Guía Paso a Paso 2024",
  description: "Tutorial completo para solicitar cita previa en la Seguridad Social (INSS). Guía paso a paso para pensiones, bajas, certificados y consultas.",
  keywords: ["cita previa seguridad social", "cita previa inss", "cita previa pensiones", "solicitar cita seguridad social"],
  alternates: {
    canonical: "/tutoriales/cita-previa-seguridad-social",
  },
  openGraph: {
    title: "Cómo Solicitar Cita Previa Seguridad Social - Guía Paso a Paso",
    description: "Aprende a solicitar tu cita previa en la Seguridad Social de forma sencilla con nuestra guía detallada.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Identificar si Necesitas Cita en INSS o TGSS",
    description: "Es fundamental distinguir entre el INSS (Instituto Nacional de la Seguridad Social) y la TGSS (Tesorería General).",
    details: [
      "INSS: Para prestaciones (pensiones, bajas, ayudas económicas)",
      "TGSS: Para cotizaciones y afiliación (la mayoría de trámites son online)",
      "Si necesitas cobrar dinero o consultar prestaciones → INSS",
      "Si necesitas información sobre cotizaciones o vida laboral → TGSS (online)"
    ],
    icon: Building2
  },
  {
    number: 2,
    title: "Preparar la Documentación Necesaria",
    description: "Reúne todos los documentos antes de solicitar la cita.",
    details: [
      "DNI o NIE en vigor",
      "Número de Afiliación a la Seguridad Social (NAF) - 12 dígitos",
      "Teléfono móvil operativo (obligatorio)",
      "Email válido (recomendado para recibir confirmación)",
      "Documentación específica según el trámite (certificados médicos, informes, etc.)"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Acceder al Portal de Cita Previa",
    description: "Visita la sede electrónica de la Seguridad Social.",
    details: [
      "Accede a sede.seg-social.gob.es",
      "Busca la sección 'Cita previa para prestaciones y otras gestiones (INSS)'",
      "Elige entre acceso con certificado digital/Cl@ve o sin certificado",
      "Si tienes certificado digital, el proceso será más rápido"
    ],
    icon: Globe
  },
  {
    number: 4,
    title: "Seleccionar el Trámite y el Centro",
    description: "Elige el motivo de tu cita y el CAISS (Centro de Atención e Información de la Seguridad Social) más cercano.",
    details: [
      "Selecciona el trámite específico (jubilación, baja, prestación, etc.)",
      "Introduce tu código postal para ver los centros cercanos",
      "Si no hay citas en tu centro, amplía la búsqueda a otros CAISS de tu provincia",
      "Los centros más céntricos suelen tener más demanda"
    ],
    icon: Building2
  },
  {
    number: 5,
    title: "Elegir Fecha y Hora",
    description: "Selecciona la fecha y hora disponible que mejor se adapte a tus necesidades.",
    details: [
      "El sistema mostrará un calendario con las fechas disponibles",
      "Las citas se liberan a primera hora de la mañana (8:00-9:00 AM)",
      "Si no hay citas, revisa en otro momento o amplía la búsqueda geográfica",
      "Selecciona la franja horaria que prefieras"
    ],
    icon: Clock
  },
  {
    number: 6,
    title: "Confirmar y Obtener el Número Localizador",
    description: "Revisa todos los datos y confirma tu cita.",
    details: [
      "Verifica que todos los datos personales sean correctos",
      "Confirma la fecha, hora y centro seleccionados",
      "Recibirás un número localizador (guárdalo, lo necesitarás para consultar o anular)",
      "Recibirás un SMS de confirmación con los detalles de la cita"
    ],
    icon: CheckCircle
  }
];

const tramitesInss = [
  "Pensiones (jubilación, viudedad, orfandad)",
  "Incapacidad permanente",
  "Prestaciones por desempleo",
  "Bajas médicas (incapacidad temporal)",
  "Ingreso Mínimo Vital (IMV)",
  "Prestaciones por nacimiento y cuidado del menor",
  "Prestaciones familiares",
  "Consultas sobre prestaciones"
];

export default function CitaPreviaSeguridadSocialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/cita-previa"
                  className="flex items-center text-green-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Citas Previas
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Solicitar Cita Previa Seguridad Social
                  </h1>
                  <div className="flex items-center gap-6 text-green-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Nivel: Medio</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-green-100">
                Guía completa para solicitar cita previa en el INSS (Instituto Nacional de la Seguridad Social). 
                Aprende a gestionar tus citas para pensiones, prestaciones, bajas y otros trámites.
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
                <li className="text-gray-700">Cita Previa Seguridad Social</li>
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
                    La Seguridad Social tiene dos entidades principales: el INSS (Instituto Nacional de la Seguridad Social), 
                    que gestiona las prestaciones económicas, y la TGSS (Tesorería General de la Seguridad Social), que gestiona 
                    cotizaciones y afiliación. Para solicitar cita previa, generalmente necesitarás el INSS si tu trámite está 
                    relacionado con prestaciones o pensiones.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este tutorial te guiará paso a paso para solicitar tu cita previa en el INSS de forma sencilla, 
                    ya sea online o por teléfono.
                  </p>
                </div>

                {/* Diferenciación INSS vs TGSS */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Importante: INSS vs TGSS
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h3 className="font-bold text-green-700 mb-2">INSS - Para Prestaciones</h3>
                      <p className="text-sm text-gray-700 mb-2">Requiere cita previa para:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {tramitesInss.slice(0, 4).map((tramite, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{tramite}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h3 className="font-bold text-blue-700 mb-2">TGSS - Para Cotizaciones</h3>
                      <p className="text-sm text-gray-700 mb-2">Mayormente online (sin cita):</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Vida laboral (100% online)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Número de afiliación</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Altas y bajas de autónomos</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Consulta de cotizaciones</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Requisitos y Documentación
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>DNI o NIE:</strong> Documento de identidad en vigor</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Número de Afiliación (NAF):</strong> 12 dígitos, puedes encontrarlo en nóminas, vida laboral o comunicaciones oficiales</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Teléfono móvil:</strong> Obligatorio, recibirás SMS de confirmación</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Email:</strong> Recomendado para recibir resguardo escrito de la cita</span>
                    </li>
                  </ul>
                </div>

                {/* Métodos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Métodos para Solicitar la Cita</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                          <Globe className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Online (Recomendado)</h3>
                          <p className="text-gray-600 text-sm">sede.seg-social.gob.es</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Disponible 24/7</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Más rápido y cómodo</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Con o sin certificado digital</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 transition-colors">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                          <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Por Teléfono</h3>
                          <p className="text-gray-600 text-sm">91 541 25 30</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Atención 24 horas (automático)</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Atención humana: horario de oficina</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">Para usuarios sin acceso a internet</span>
                        </li>
                      </ul>
                    </div>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-green-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos y Estrategias</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Primera hora:</strong> Las citas se liberan a las 8:00-9:00 AM</li>
                            <li>• <strong>Revisa regularmente:</strong> Las citas canceladas vuelven a estar disponibles</li>
                            <li>• <strong>Amplía búsqueda:</strong> Si no hay en tu centro, busca en otros CAISS cercanos</li>
                            <li>• <strong>Certificado digital:</strong> Acelera el proceso si tienes Cl@ve o certificado</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Problemas Comunes</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>"No hay citas":</strong> Revisa en otro momento o amplía la búsqueda</li>
                            <li>• <strong>Error en datos:</strong> Verifica DNI y NAF antes de confirmar</li>
                            <li>• <strong>No recibes SMS:</strong> Comprueba el número de teléfono</li>
                            <li>• <strong>Trámite incorrecto:</strong> Confirma si es INSS o TGSS antes de solicitar</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-green-100 mb-6">
                    Consulta nuestro blog completo sobre cita previa en la Seguridad Social o explora otros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/blog/cita-previa-seguridad-social"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                    >
                      Ver Guía Completa en Blog
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

