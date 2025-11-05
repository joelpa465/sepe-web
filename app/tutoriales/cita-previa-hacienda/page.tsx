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
  User,
  Phone,
  Globe
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Solicitar Cita Previa Hacienda - Guía Paso a Paso 2024",
  description: "Tutorial completo para solicitar cita previa en Hacienda para consultas fiscales, declaraciones de la renta, certificados tributarios y otros trámites.",
  keywords: ["cita previa hacienda", "cita previa agencia tributaria", "cita hacienda", "cita previa renta"],
  alternates: {
    canonical: "/tutoriales/cita-previa-hacienda",
  },
  openGraph: {
    title: "Cómo Solicitar Cita Previa Hacienda - Guía Paso a Paso",
    description: "Aprende a solicitar tu cita previa en Hacienda para trámites fiscales de forma sencilla.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Identificar el Trámite que Necesitas",
    description: "Hacienda gestiona múltiples trámites fiscales. Identifica cuál es el tuyo.",
    details: [
      "Consultas sobre la declaración de la renta",
      "Solicitud de certificados tributarios",
      "Consultas sobre impuestos (IRPF, IVA, etc.)",
      "Gestión de devoluciones",
      "Solicitud de aplazamientos o fraccionamientos",
      "Consultas sobre obligaciones fiscales",
      "Presentación de documentos adicionales"
    ],
    icon: FileText
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios antes de solicitar la cita.",
    details: [
      "DNI o NIE en vigor",
      "Número de identificación fiscal (NIF)",
      "Certificado digital o Cl@ve (si tienes, facilita el proceso)",
      "Documentación específica según el trámite",
      "Últimas declaraciones de la renta (si aplica)",
      "Justificantes de pagos o ingresos (si aplica)"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Acceder al Portal de Cita Previa",
    description: "Visita el portal oficial de la Agencia Tributaria.",
    details: [
      "Accede a sede.agenciatributaria.gob.es",
      "Haz clic en 'Cita previa' o busca en el menú principal",
      "Selecciona tu provincia y la oficina de Hacienda más cercana",
      "Elige el tipo de trámite que vas a realizar"
    ],
    icon: Globe
  },
  {
    number: 4,
    title: "Completar el Formulario",
    description: "Rellena todos los datos solicitados de forma precisa.",
    details: [
      "Introduce tu DNI o NIE",
      "Proporciona tu número de teléfono móvil (obligatorio)",
      "Indica tu email (recomendado para recibir confirmación)",
      "Selecciona el motivo específico de la cita",
      "Si tienes certificado digital, el proceso será más rápido"
    ],
    icon: User
  },
  {
    number: 5,
    title: "Elegir Fecha y Hora",
    description: "Selecciona la fecha y hora disponible que mejor se adapte a ti.",
    details: [
      "El sistema mostrará un calendario con las fechas disponibles",
      "Las citas se liberan a primera hora (8:00-9:00 AM)",
      "Si no hay citas, revisa en otro momento",
      "Ten en cuenta que cerca de la campaña de renta hay más demanda"
    ],
    icon: Clock
  },
  {
    number: 6,
    title: "Confirmar y Obtener el Localizador",
    description: "Revisa todos los datos y confirma tu cita.",
    details: [
      "Verifica que todos los datos sean correctos",
      "Confirma la fecha, hora y oficina",
      "Anota el número localizador que recibirás",
      "Recibirás un SMS de confirmación",
      "Guarda el localizador en un lugar seguro"
    ],
    icon: CheckCircle
  }
];

const tramites = [
  "Consultas sobre declaración de la renta",
  "Solicitud de certificados tributarios",
  "Consultas sobre IRPF",
  "Consultas sobre IVA",
  "Gestión de devoluciones",
  "Aplazamientos y fraccionamientos",
  "Consultas sobre obligaciones fiscales",
  "Presentación de documentos"
];

export default function CitaPreviaHaciendaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/cita-previa"
                  className="flex items-center text-orange-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Citas Previas
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Solicitar Cita Previa Hacienda
                  </h1>
                  <div className="flex items-center gap-6 text-orange-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Nivel: Medio</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-orange-100">
                Guía completa para solicitar cita previa en la Agencia Tributaria (Hacienda) para 
                consultas fiscales, declaraciones de la renta, certificados tributarios y otros trámites.
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
                <li className="text-gray-700">Cita Previa Hacienda</li>
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
                    La Agencia Tributaria (Hacienda) gestiona todos los trámites relacionados con impuestos, 
                    declaraciones fiscales y obligaciones tributarias. Muchos trámites pueden realizarse online, 
                    pero para consultas específicas o presentación de documentos, es necesario solicitar una cita previa.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este tutorial te guiará paso a paso para solicitar tu cita previa en Hacienda de forma sencilla.
                  </p>
                </div>

                {/* Trámites disponibles */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
                    Trámites Disponibles
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tramites.map((tramite, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{tramite}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
                    Documentación Necesaria
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>DNI o NIE:</strong> Documento de identidad en vigor</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>NIF:</strong> Número de identificación fiscal</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Teléfono móvil:</strong> Obligatorio para recibir confirmación</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Documentación específica:</strong> Según el trámite (declaraciones, certificados, etc.)</span>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-orange-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
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

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Trámites online:</strong> Muchos trámites pueden hacerse online sin cita</li>
                            <li>• <strong>Certificado digital:</strong> Facilita mucho los trámites con Hacienda</li>
                            <li>• <strong>Campaña de renta:</strong> Hay más demanda en primavera</li>
                            <li>• <strong>Revisa antes:</strong> Consulta si tu trámite puede hacerse online</li>
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
                            <li>• <strong>Documentación completa:</strong> Lleva todos los documentos necesarios</li>
                            <li>• <strong>Puntualidad:</strong> Llega con tiempo a tu cita</li>
                            <li>• <strong>No hay citas:</strong> Revisa en otro momento</li>
                            <li>• <strong>Dudas:</strong> Consulta la web oficial de la AEAT</li>
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
                    Si tienes dudas sobre tu trámite o necesitas información adicional:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono:</strong> 91 554 87 70 (Atención al Contribuyente)</li>
                    <li>• <strong>Web oficial:</strong> sede.agenciatributaria.gob.es</li>
                    <li>• <strong>Horario:</strong> Consulta el horario específico de tu oficina</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-orange-100 mb-6">
                    Consulta otros tutoriales relacionados con citas previas o trámites administrativos
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/cita-previa"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
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

