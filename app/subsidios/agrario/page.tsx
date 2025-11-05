import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Sprout, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Subsidio Agrario - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre el subsidio agrario: requisitos, cuantía, duración, cómo solicitarlo. Prestación específica para trabajadores agrarios en Andalucía y Extremadura.",
  keywords: ["subsidio agrario", "subsidio agrario andalucía", "subsidio agrario extremadura", "subsidio campo"],
  alternates: {
    canonical: "/subsidios/agrario",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples todos los requisitos para acceder al subsidio agrario.",
    details: [
      "Ser trabajador agrario por cuenta ajena",
      "Trabajar en Andalucía o Extremadura",
      "Haber trabajado en campañas agrarias",
      "Estar inscrito como demandante de empleo",
      "No tener ingresos superiores al límite establecido"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE en vigor",
      "Certificados de trabajos agrarios realizados",
      "Contratos de trabajo agrario",
      "Justificante de inscripción como demandante de empleo",
      "Certificado de empadronamiento",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Solicita el subsidio en tu Comunidad Autónoma.",
    details: [
      "Andalucía: A través de los servicios de la Junta de Andalucía",
      "Extremadura: A través de los servicios de la Junta de Extremadura",
      "Plazo: Durante el periodo de solicitud establecido",
      "Completa el formulario con todos los datos laborales agrarios"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Esperar la Resolución",
    description: "La administración revisará tu solicitud y te notificará la resolución.",
    details: [
      "Plazo de resolución: Variable según la Comunidad Autónoma",
      "Recibirás la notificación por correo postal o electrónico",
      "Puedes consultar el estado en la sede electrónica correspondiente",
      "Se verificará tu historial laboral agrario"
    ],
    icon: Clock
  }
];

const requisitos = [
  "Ser trabajador agrario por cuenta ajena",
  "Trabajar en Andalucía o Extremadura",
  "Haber trabajado en campañas agrarias durante el periodo de referencia",
  "Estar inscrito como demandante de empleo",
  "No tener ingresos superiores al límite establecido",
  "Cumplir con los requisitos específicos de cada Comunidad Autónoma"
];

export default function SubsidioAgrarioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/subsidios"
                  className="flex items-center text-green-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Subsidios
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Sprout className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Subsidio Agrario
                  </h1>
                  <div className="flex items-center gap-6 text-green-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Cuantía variable</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-green-100">
                Prestación específica para trabajadores agrarios por cuenta ajena en Andalucía y Extremadura. 
                Requisitos, cuantía, duración y cómo solicitarlo.
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
                <li className="text-gray-700">Subsidio Agrario</li>
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
                    El subsidio agrario es una prestación específica destinada a trabajadores agrarios por cuenta 
                    ajena que trabajan en campañas agrarias en las Comunidades Autónomas de Andalucía y Extremadura.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación tiene como objetivo proporcionar una protección económica a los trabajadores 
                    del campo durante los periodos de inactividad entre campañas agrarias, reconociendo la 
                    estacionalidad del trabajo agrícola.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Comunidades Autónomas */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comunidades Autónomas</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-6 h-6 mr-2 text-green-600" />
                        Andalucía
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Gestión:</strong> Junta de Andalucía</li>
                        <li>• <strong>Requisitos:</strong> Específicos de Andalucía</li>
                        <li>• <strong>Periodo:</strong> Campañas agrarias</li>
                        <li>• <strong>Información:</strong> Consulta en servicios de empleo de Andalucía</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                        Extremadura
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Gestión:</strong> Junta de Extremadura</li>
                        <li>• <strong>Requisitos:</strong> Específicos de Extremadura</li>
                        <li>• <strong>Periodo:</strong> Campañas agrarias</li>
                        <li>• <strong>Información:</strong> Consulta en servicios de empleo de Extremadura</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <p className="text-gray-700 mb-4">
                      La cuantía y duración del subsidio agrario varían según:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Cuantía:</strong> Variable según días trabajados y Comunidad Autónoma</li>
                      <li>• <strong>Duración:</strong> Variable según el periodo de inactividad entre campañas</li>
                      <li>• <strong>Pago:</strong> Mensual o según periodo establecido</li>
                      <li>• <strong>Límite:</strong> Según normativa de cada Comunidad Autónoma</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar el Subsidio</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-green-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
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

                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Documentación:</strong> Guarda todos los contratos y certificados de trabajo agrario</li>
                            <li>• <strong>Periodo de solicitud:</strong> Respeta los plazos establecidos por tu Comunidad</li>
                            <li>• <strong>Información:</strong> Consulta en servicios de empleo de tu Comunidad</li>
                            <li>• <strong>Renovación:</strong> Renueva tu demanda de empleo regularmente</li>
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
                            <li>• <strong>Solo Andalucía y Extremadura:</strong> Este subsidio es específico de estas comunidades</li>
                            <li>• <strong>Requisitos variables:</strong> Los requisitos pueden variar según la Comunidad</li>
                            <li>• <strong>Periodos específicos:</strong> Relacionado con campañas agrarias</li>
                            <li>• <strong>Dudas:</strong> Consulta en servicios de empleo de tu Comunidad</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-green-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre el subsidio agrario:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Andalucía:</strong> Consulta en servicios de empleo de la Junta de Andalucía</li>
                    <li>• <strong>Extremadura:</strong> Consulta en servicios de empleo de la Junta de Extremadura</li>
                    <li>• <strong>SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-green-100 mb-6">
                    Consulta otros subsidios o explora nuestras prestaciones
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/subsidios"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
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

