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
  Phone,
  Computer,
  ScrollText,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "TGSS - Tesorería General Seguridad Social - Trámites y Certificados 2024 | Web Cursos SEPE",
  description: "Guía completa sobre trámites en TGSS: certificados, consulta de bases de cotización, vida laboral, informes y más.",
  keywords: ["tgss", "tesorería seguridad social", "certificados tgss", "bases cotización", "vida laboral"],
  alternates: {
    canonical: "/tramites/tgss",
  },
};

const tramites = [
  {
    title: "Informe de Vida Laboral",
    description: "Certificado completo de tu historial laboral y cotizaciones.",
    icon: ScrollText,
    detalles: [
      "Acceso online gratuito e instantáneo",
      "Incluye todos los periodos de cotización",
      "Válido para presentar en cualquier organismo"
    ]
  },
  {
    title: "Consulta de Bases de Cotización",
    description: "Consulta las bases de cotización de tus últimos años.",
    icon: DollarSign,
    detalles: [
      "Ver bases de cotización mensuales",
      "Consultar años anteriores",
      "Descargar certificados de cotización"
    ]
  },
  {
    title: "Certificados de Empresa",
    description: "Obtener certificados de empresas donde has trabajado.",
    icon: FileText,
    detalles: [
      "Certificado de cotizaciones",
      "Certificado de vida laboral por empresa",
      "Justificantes de periodos trabajados"
    ]
  },
  {
    title: "Número de Afiliación (NAF)",
    description: "Consultar o solicitar duplicado del número de afiliación.",
    icon: FileText,
    detalles: [
      "Consulta tu número de afiliación",
      "Solicitar duplicado si lo has perdido",
      "Certificado de número de afiliación"
    ]
  }
];

export default function TGSSPage() {
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
                  href="/categorias/tramites-sepe"
                  className="flex items-center text-purple-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Trámites SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    TGSS - Tesorería General Seguridad Social
                  </h1>
                  <div className="flex items-center gap-6 text-purple-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-purple-100">
                Guía completa sobre los trámites en TGSS: certificados, consulta de bases de cotización, 
                vida laboral, informes y más. Todo lo que necesitas saber sobre la Tesorería General de la Seguridad Social.
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
                <li className="text-gray-700">TGSS</li>
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
                    La Tesorería General de la Seguridad Social (TGSS) es el organismo encargado de gestionar 
                    los recursos económicos, la afiliación y la cotización en la Seguridad Social.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A través de la TGSS puedes realizar diversos trámites online como consultar tu vida laboral, 
                    obtener certificados de cotización, consultar bases de cotización y más.
                  </p>
                </div>

                {/* Diferencia TGSS vs INSS */}
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-purple-600" />
                    Diferencia entre TGSS e INSS
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">TGSS (Tesorería)</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Gestiona recursos económicos</li>
                        <li>• Afiliación y cotización</li>
                        <li>• Certificados de cotización</li>
                        <li>• Vida laboral</li>
                        <li>• <strong>Mayormente online</strong></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">INSS (Prestaciones)</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Gestiona prestaciones</li>
                        <li>• Pensiones y ayudas</li>
                        <li>• Incapacidades</li>
                        <li>• Reconocimiento de derechos</li>
                        <li>• Requiere cita previa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Trámites Disponibles */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Trámites Disponibles en TGSS</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {tramites.map((tramite, index) => {
                      const Icon = tramite.icon;
                      return (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{tramite.title}</h3>
                              <p className="text-gray-600 text-sm">{tramite.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {tramite.detalles.map((detalle, idx) => (
                              <li key={idx} className="flex items-start text-gray-700 text-sm">
                                <CheckCircle className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Acceder a TGSS</h2>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-start mb-4">
                      <Computer className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Acceso Online</h3>
                        <p className="text-gray-700 mb-4">
                          La mayoría de trámites de TGSS se realizan online a través de:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Portal Import@ss:</strong> importass.tgss.es</li>
                          <li>• <strong>Sede Electrónica:</strong> sede.seg-social.gob.es</li>
                          <li>• <strong>Identificación:</strong> Certificado digital, DNI electrónico o Cl@ve</li>
                          <li>• <strong>Sin certificado:</strong> Algunos trámites pueden hacerse sin identificación digital</li>
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
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Mayormente online:</strong> La mayoría de trámites son online</li>
                            <li>• <strong>Sin cita previa:</strong> No necesitas cita para trámites TGSS</li>
                            <li>• <strong>Certificado digital:</strong> Facilita mucho los trámites</li>
                            <li>• <strong>Descarga certificados:</strong> Guarda los certificados que necesites</li>
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
                            <li>• <strong>No confundir:</strong> TGSS es diferente de INSS</li>
                            <li>• <strong>Vida laboral:</strong> Se obtiene en TGSS, no en INSS</li>
                            <li>• <strong>Certificados:</strong> Son gratuitos y se pueden descargar</li>
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
                    <Phone className="w-6 h-6 mr-2 text-purple-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre trámites en TGSS:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono:</strong> 901 50 20 50 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Portal Import@ss:</strong> importass.tgss.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-purple-100 mb-6">
                    Consulta otros trámites SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/tramites-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Ver Todos los Trámites
                    </Link>
                    <Link
                      href="/tramites/vida-laboral"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Vida Laboral
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

