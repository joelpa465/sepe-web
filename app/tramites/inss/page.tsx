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
  Phone,
  Building,
  Heart,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "INSS - Instituto Nacional Seguridad Social - Trámites y Prestaciones 2024 | Web Cursos SEPE",
  description: "Guía completa sobre trámites en INSS: pensiones, incapacidades, reconocimiento de grado de discapacidad y más.",
  keywords: ["inss", "instituto seguridad social", "pensiones inss", "incapacidades", "discapacidad"],
  alternates: {
    canonical: "/tramites/inss",
  },
};

const tramites = [
  {
    title: "Pensiones",
    description: "Solicitud y gestión de pensiones de jubilación, viudedad, orfandad.",
    icon: User,
    detalles: [
      "Pensión de jubilación",
      "Pensión de viudedad",
      "Pensión de orfandad",
      "Pensión en favor de familiares"
    ]
  },
  {
    title: "Incapacidades",
    description: "Solicitud y gestión de incapacidades temporales y permanentes.",
    icon: Heart,
    detalles: [
      "Incapacidad temporal (IT)",
      "Incapacidad permanente (IP)",
      "Revisión de incapacidades",
      "Gran invalidez"
    ]
  },
  {
    title: "Prestaciones",
    description: "Solicitud de prestaciones económicas y ayudas.",
    icon: FileText,
    detalles: [
      "Prestación por desempleo",
      "Prestación por maternidad/paternidad",
      "Ingreso Mínimo Vital (IMV)",
      "Prestaciones familiares"
    ]
  },
  {
    title: "Reconocimiento de Discapacidad",
    description: "Trámites relacionados con el reconocimiento de discapacidad.",
    icon: Heart,
    detalles: [
      "Reconocimiento de grado de discapacidad",
      "Prestaciones por discapacidad",
      "Complementos por gran invalidez"
    ]
  }
];

export default function INSSPage() {
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
                  href="/categorias/tramites-sepe"
                  className="flex items-center text-orange-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Trámites SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    INSS - Instituto Nacional Seguridad Social
                  </h1>
                  <div className="flex items-center gap-6 text-orange-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-orange-100">
                Guía completa sobre los trámites en INSS: pensiones, incapacidades, reconocimiento de grado de discapacidad 
                y más. Todo lo que necesitas saber sobre el Instituto Nacional de la Seguridad Social.
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
                <li><Link href="/categorias/tramites-sepe" className="text-blue-600 hover:text-blue-800">Trámites SEPE</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">INSS</li>
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
                    El Instituto Nacional de la Seguridad Social (INSS) es el organismo encargado de gestionar 
                    y administrar las prestaciones económicas del sistema de Seguridad Social.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A través del INSS puedes solicitar y gestionar pensiones, incapacidades, prestaciones económicas 
                    y otros trámites relacionados con tus derechos en la Seguridad Social.
                  </p>
                </div>

                {/* Diferencia TGSS vs INSS */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
                    Diferencia entre INSS y TGSS
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">INSS (Prestaciones)</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Gestiona prestaciones económicas</li>
                        <li>• Pensiones y ayudas</li>
                        <li>• Incapacidades</li>
                        <li>• Reconocimiento de derechos</li>
                        <li>• <strong>Requiere cita previa</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">TGSS (Tesorería)</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Gestiona recursos económicos</li>
                        <li>• Afiliación y cotización</li>
                        <li>• Certificados de cotización</li>
                        <li>• Vida laboral</li>
                        <li>• Mayormente online</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Trámites Disponibles */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Trámites Disponibles en INSS</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {tramites.map((tramite, index) => {
                      const Icon = tramite.icon;
                      return (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{tramite.title}</h3>
                              <p className="text-gray-600 text-sm">{tramite.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {tramite.detalles.map((detalle, idx) => (
                              <li key={idx} className="flex items-start text-gray-700 text-sm">
                                <CheckCircle className="w-4 h-4 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{detalle}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cómo Acceder */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Acceder a INSS</h2>
                  
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                    <div className="flex items-start mb-4">
                      <Building className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Cita Previa</h3>
                        <p className="text-gray-700 mb-4">
                          Para la mayoría de trámites en INSS necesitas cita previa:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Sede Electrónica:</strong> sede.seg-social.gob.es</li>
                          <li>• <strong>Sección:</strong> Cita previa para prestaciones (INSS)</li>
                          <li>• <strong>Teléfono:</strong> 91 541 25 30 o 901 10 65 70</li>
                          <li>• <strong>Algunos trámites:</strong> Pueden hacerse online sin cita</li>
                        </ul>
                      </div>
                    </div>
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
                            <li>• <strong>Cita previa:</strong> Solicítala con antelación</li>
                            <li>• <strong>Documentación:</strong> Reúne toda la documentación necesaria</li>
                            <li>• <strong>Online:</strong> Algunos trámites pueden hacerse online</li>
                            <li>• <strong>Consulta estado:</strong> Puedes consultar el estado de tu solicitud online</li>
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
                            <li>• <strong>No confundir:</strong> INSS es diferente de TGSS</li>
                            <li>• <strong>Prestaciones:</strong> INSS gestiona el cobro de prestaciones</li>
                            <li>• <strong>Plazos:</strong> Respeta los plazos de solicitud</li>
                            <li>• <strong>Dudas:</strong> Consulta la web oficial o llama al 901 10 65 70</li>
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
                    Si tienes dudas sobre trámites en INSS:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono:</strong> 901 10 65 70 o 91 541 25 30</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Cita previa:</strong> A través de la sede electrónica</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-orange-600 to-red-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-orange-100 mb-6">
                    Consulta otros trámites SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/tramites-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                    >
                      Ver Todos los Trámites
                    </Link>
                    <Link
                      href="/tutoriales/cita-previa-seguridad-social"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Cita Previa INSS
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

