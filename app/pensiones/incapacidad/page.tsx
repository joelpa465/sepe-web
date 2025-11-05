import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Activity, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  Stethoscope
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pensión de Incapacidad Permanente - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la pensión de incapacidad permanente: requisitos, grados, cuantía variable, y cómo solicitarla.",
  keywords: ["pension incapacidad", "pension incapacidad permanente", "pension invalidez", "pension discapacidad"],
  alternates: {
    canonical: "/pensiones/incapacidad",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para acceder a la pensión de incapacidad permanente.",
    details: [
      "Tener una reducción anatómica o funcional grave",
      "Haber recibido el tratamiento médico oportuno",
      "Haber cotizado a la Seguridad Social (salvo accidente)",
      "Cumplir con los períodos mínimos de cotización"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación Médica",
    description: "Reúne toda la documentación médica necesaria.",
    details: [
      "Informes médicos y pruebas diagnósticas",
      "Historial clínico completo",
      "Informes de médicos especialistas",
      "Documentación de accidentes o enfermedades profesionales"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Preparar la Documentación Laboral",
    description: "Reúne la documentación laboral y de cotizaciones.",
    details: [
      "DNI o NIE en vigor",
      "Vida laboral completa",
      "Certificados de empresa",
      "Justificante de cotizaciones",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Solicita la pensión de incapacidad permanente.",
    details: [
      "Online: A través de la sede electrónica de la Seguridad Social",
      "Presencial: En el INSS con cita previa",
      "Incluye toda la documentación médica y laboral",
      "El INSS realizará una evaluación médica"
    ],
    icon: FileText
  },
  {
    number: 5,
    title: "Evaluación y Resolución",
    description: "El INSS evaluará tu caso y emitirá una resolución.",
    details: [
      "Se realizará una evaluación médica por el Equipo de Valoración",
      "Plazo de resolución: Variable según la complejidad",
      "Recibirás la notificación por correo postal o electrónico",
      "Puedes recurrir si no estás de acuerdo con la resolución"
    ],
    icon: Clock
  }
];

const grados = [
  {
    grado: "Incapacidad Permanente Parcial",
    descripcion: "Reducción no inferior al 33% en el rendimiento para la profesión habitual, pero puede continuar desempeñándola.",
    porcentaje: "Indemnización única"
  },
  {
    grado: "Incapacidad Permanente Total",
    descripcion: "Inhabilita para la profesión habitual, pero permite dedicarse a otra actividad laboral diferente.",
    porcentaje: "55% de la base reguladora"
  },
  {
    grado: "Incapacidad Permanente Absoluta",
    descripcion: "Impide para el desempeño de cualquier profesión u oficio.",
    porcentaje: "100% de la base reguladora"
  },
  {
    grado: "Gran Invalidez",
    descripcion: "Además de incapacidad permanente absoluta, necesita asistencia de otra persona para actos esenciales de la vida.",
    porcentaje: "100% + complemento para asistencia"
  }
];

const requisitos = [
  "Tener una reducción anatómica o funcional grave y definitiva",
  "Haber recibido el tratamiento médico oportuno",
  "Haber cotizado a la Seguridad Social (salvo en accidentes o enfermedades profesionales)",
  "Cumplir con los períodos mínimos de cotización según el caso",
  "La incapacidad debe ser permanente y definitiva"
];

export default function PensionIncapacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/pensiones"
                  className="flex items-center text-purple-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Pensiones
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Activity className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Pensión de Incapacidad Permanente
                  </h1>
                  <div className="flex items-center gap-6 text-purple-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>15 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Variable según grado</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-purple-100">
                Guía completa sobre la pensión de incapacidad permanente: requisitos, grados, cuantía 
                variable según el grado, y cómo solicitarla paso a paso.
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
                <li><Link href="/categorias/pensiones" className="text-blue-600 hover:text-blue-800">Pensiones</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Pensión de Incapacidad</li>
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
                    La pensión de incapacidad permanente es una prestación económica destinada a trabajadores 
                    que, tras haber recibido el tratamiento médico oportuno, presentan reducciones anatómicas 
                    o funcionales graves y definitivas que disminuyen o anulan su capacidad laboral.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La cuantía de la pensión varía según el grado de incapacidad reconocido, desde una 
                    indemnización única hasta el 100% de la base reguladora más complementos.
                  </p>
                </div>

                {/* Grados de Incapacidad */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Grados de Incapacidad Permanente</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {grados.map((grado, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{grado.grado}</h3>
                        <p className="text-gray-700 mb-3">{grado.descripcion}</p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm">
                          {grado.porcentaje}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requisitos */}
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-purple-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Pensión de Incapacidad</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-purple-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
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

                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Documentación médica:</strong> Reúne todos los informes médicos</li>
                            <li>• <strong>Historial completo:</strong> Incluye todo el historial clínico</li>
                            <li>• <strong>Especialistas:</strong> Informes de médicos especialistas son importantes</li>
                            <li>• <strong>Asesoramiento:</strong> Consulta con un abogado especializado si es necesario</li>
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
                            <li>• <strong>Evaluación médica:</strong> El INSS realizará su propia evaluación</li>
                            <li>• <strong>Revisión:</strong> La pensión puede ser revisada</li>
                            <li>• <strong>Recursos:</strong> Puedes recurrir si no estás de acuerdo</li>
                            <li>• <strong>Dudas:</strong> Llama al INSS al 901 50 20 50</li>
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
                    Si tienes dudas sobre la pensión de incapacidad permanente:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono INSS:</strong> 901 50 20 50</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-purple-100 mb-6">
                    Consulta otros tipos de pensiones o explora nuestras guías
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/pensiones"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Ver Todas las Pensiones
                    </Link>
                    <Link
                      href="/pensiones/no-contributiva"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Pensión No Contributiva
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

