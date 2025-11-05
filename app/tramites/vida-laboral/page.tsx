import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  ScrollText, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Phone,
  Computer,
  Download
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vida Laboral - Cómo Obtener el Informe de Vida Laboral 2024 | Web Cursos SEPE",
  description: "Guía completa para obtener tu informe de vida laboral: certificado de años cotizados y bases de cotización. Pasos online y presencial.",
  keywords: ["vida laboral", "informe vida laboral", "certificado cotizaciones", "historial laboral", "años cotizados"],
  alternates: {
    canonical: "/tramites/vida-laboral",
  },
};

const steps = [
  {
    number: 1,
    title: "Acceder a la Sede Electrónica de la Seguridad Social",
    description: "Ve a la web oficial de la Seguridad Social para obtener tu vida laboral.",
    details: [
      "Accede a sede.seg-social.gob.es",
      "Busca la sección 'Vida Laboral' o 'Informe de Vida Laboral'",
      "Identifícate con certificado digital, DNI electrónico o Cl@ve",
      "Si no tienes identificación digital, puedes usar el sistema sin certificado"
    ],
    icon: Computer
  },
  {
    number: 2,
    title: "Seleccionar Consulta de Vida Laboral",
    description: "Una vez dentro, selecciona la opción de consulta de vida laboral.",
    details: [
      "Selecciona 'Informe de Vida Laboral' o 'Consulta de Vida Laboral'",
      "Verifica que tus datos personales sean correctos",
      "El sistema mostrará automáticamente tu historial laboral completo"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Descargar o Imprimir el Informe",
    description: "Una vez visualizado, puedes descargar o imprimir el informe.",
    details: [
      "Revisa toda la información del informe",
      "Descarga el PDF del informe de vida laboral",
      "Imprime el informe si lo necesitas en papel",
      "El informe es válido para presentar en cualquier organismo"
    ],
    icon: Download
  }
];

const requisitos = [
  "Tener número de Seguridad Social (NAF)",
  "Disponer de DNI o NIE en vigor",
  "No es necesario estar dado de alta en la Seguridad Social",
  "El informe se puede obtener en cualquier momento",
  "Es gratuito y se puede obtener las veces que necesites"
];

export default function VidaLaboralPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/tramites-sepe"
                  className="flex items-center text-teal-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Trámites SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <ScrollText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Vida Laboral
                  </h1>
                  <div className="flex items-center gap-6 text-teal-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-teal-100">
                Guía completa para obtener tu informe de vida laboral: certificado completo de años cotizados 
                y bases de cotización. Puedes obtenerlo online de forma gratuita e instantánea.
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
                <li className="text-gray-700">Vida Laboral</li>
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
                    El informe de vida laboral es un documento oficial que contiene todo tu historial laboral 
                    y de cotización a la Seguridad Social. Incluye todos los periodos trabajados, las empresas 
                    donde has trabajado y las bases de cotización.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este documento es necesario para solicitar prestaciones, calcular pensiones, presentar 
                    en concursos públicos y otros trámites administrativos. Puedes obtenerlo online de forma 
                    gratuita e instantánea.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-teal-600" />
                    Requisitos para Obtener la Vida Laboral
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Información del Informe */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué Contiene el Informe de Vida Laboral?</h2>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                    <p className="text-gray-700 mb-4">
                      El informe de vida laboral incluye:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Datos personales:</strong> Nombre, DNI, número de Seguridad Social</li>
                      <li>• <strong>Historial laboral completo:</strong> Todos los periodos trabajados desde el inicio</li>
                      <li>• <strong>Empresas:</strong> Nombre de las empresas donde has trabajado</li>
                      <li>• <strong>Fechas:</strong> Fechas de alta y baja en cada empresa</li>
                      <li>• <strong>Bases de cotización:</strong> Bases de cotización mensuales</li>
                      <li>• <strong>Régimen:</strong> Régimen de la Seguridad Social (General, Autónomos, etc.)</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Obtener la Vida Laboral Online</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-teal-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-teal-600 bg-teal-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Online es más rápido:</strong> Puedes obtenerlo en minutos</li>
                            <li>• <strong>Gratuito:</strong> No tiene coste alguno</li>
                            <li>• <strong>Válido:</strong> El informe es válido para cualquier trámite</li>
                            <li>• <strong>Actualizado:</strong> Se actualiza automáticamente</li>
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
                            <li>• <strong>No confundir:</strong> La vida laboral se obtiene en TGSS, no en INSS</li>
                            <li>• <strong>Sin cita:</strong> No necesitas cita previa para obtenerla online</li>
                            <li>• <strong>Descarga:</strong> Guarda el PDF para futuras consultas</li>
                            <li>• <strong>Dudas:</strong> Consulta la web oficial o llama al 901 50 20 50</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-teal-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre cómo obtener tu vida laboral:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono:</strong> 901 50 20 50 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Portal Import@ss:</strong> importass.tgss.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-teal-600 to-cyan-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-teal-100 mb-6">
                    Consulta otros trámites SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/tramites-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
                    >
                      Ver Todos los Trámites
                    </Link>
                    <Link
                      href="/tramites/tgss"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Más Trámites TGSS
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

