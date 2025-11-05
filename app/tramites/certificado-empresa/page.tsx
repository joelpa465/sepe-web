import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  FileCheck, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Phone,
  Building,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificado de Empresa - Cómo Obtenerlo para Finiquito y Despidos 2024 | Web Cursos SEPE",
  description: "Guía completa para obtener el certificado de empresa: cómo solicitarlo, qué contiene y cuándo lo necesitas. Para finiquitos, despidos y bajas laborales.",
  keywords: ["certificado empresa", "certificado finiquito", "certificado despido", "certificado baja laboral", "certificado empresa sepe"],
  alternates: {
    canonical: "/tramites/certificado-empresa",
  },
};

const casos = [
  {
    title: "Finiquito",
    description: "Necesario para justificar el cese laboral y solicitar prestaciones.",
    icon: FileText,
    detalles: [
      "Fecha de cese",
      "Causa del cese",
      "Periodos trabajados",
      "Bases de cotización"
    ]
  },
  {
    title: "Despido",
    description: "Para justificar un despido y solicitar prestación por desempleo.",
    icon: AlertCircle,
    detalles: [
      "Tipo de despido",
      "Fecha de despido",
      "Causa del despido",
      "Indemnización (si aplica)"
    ]
  },
  {
    title: "Baja Laboral",
    description: "Para justificar periodos de baja laboral o incapacidad temporal.",
    icon: FileText,
    detalles: [
      "Fechas de baja",
      "Tipo de baja",
      "Periodos de cotización",
      "Bases de cotización durante la baja"
    ]
  },
  {
    title: "Otros Trámites",
    description: "Para otros trámites administrativos que requieran justificación laboral.",
    icon: FileCheck,
    detalles: [
      "Solicitud de prestaciones",
      "Concursos públicos",
      "Trámites administrativos",
      "Justificación de periodos trabajados"
    ]
  }
];

const steps = [
  {
    number: 1,
    title: "Solicitar el Certificado a la Empresa",
    description: "La primera opción es solicitar el certificado directamente a tu empresa.",
    details: [
      "Contacta con el departamento de recursos humanos o administración",
      "Solicita el certificado de empresa por escrito",
      "Indica el motivo por el que lo necesitas",
      "Es obligación de la empresa facilitártelo"
    ],
    icon: Building
  },
  {
    number: 2,
    title: "Obtenerlo a través de la Seguridad Social",
    description: "Si la empresa no te lo facilita, puedes obtenerlo a través de TGSS.",
    details: [
      "Accede a sede.seg-social.gob.es",
      "Busca la sección 'Certificados de Empresa'",
      "Identifícate con certificado digital o Cl@ve",
      "Solicita el certificado de la empresa correspondiente"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Solicitar por Correo o Presencial",
    description: "También puedes solicitar el certificado por correo o presencialmente.",
    details: [
      "Envía una solicitud escrita a la TGSS",
      "O acude presencialmente a una oficina de la Seguridad Social",
      "Necesitarás tu DNI y número de Seguridad Social",
      "Indica el periodo y empresa para el que necesitas el certificado"
    ],
    icon: Mail
  }
];

export default function CertificadoEmpresaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-rose-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/tramites-sepe"
                  className="flex items-center text-pink-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Trámites SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileCheck className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Certificado de Empresa
                  </h1>
                  <div className="flex items-center gap-6 text-pink-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-pink-100">
                Guía completa para obtener el certificado de empresa: cómo solicitarlo, qué contiene y cuándo lo necesitas. 
                Para finiquitos, despidos, bajas laborales y otros trámites.
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
                <li className="text-gray-700">Certificado de Empresa</li>
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
                    El certificado de empresa es un documento oficial que acredita tu situación laboral en una 
                    empresa determinada. Es necesario para justificar finiquitos, despidos, bajas laborales y 
                    otros trámites administrativos.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este documento puede solicitarse directamente a la empresa o a través de la Seguridad Social 
                    si la empresa no te lo facilita.
                  </p>
                </div>

                {/* Cuándo se Necesita */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cuándo Necesitas el Certificado de Empresa?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {casos.map((caso, index) => {
                      const Icon = caso.icon;
                      return (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-300 transition-colors">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-pink-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{caso.title}</h3>
                              <p className="text-gray-600 text-sm">{caso.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {caso.detalles.map((detalle, idx) => (
                              <li key={idx} className="flex items-start text-gray-700 text-sm">
                                <CheckCircle className="w-4 h-4 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{detalle}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Qué Contiene */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué Contiene el Certificado de Empresa?</h2>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                    <p className="text-gray-700 mb-4">
                      El certificado de empresa generalmente incluye:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Datos del trabajador:</strong> Nombre, DNI, número de Seguridad Social</li>
                      <li>• <strong>Datos de la empresa:</strong> Nombre, CIF, dirección</li>
                      <li>• <strong>Periodo trabajado:</strong> Fechas de alta y baja</li>
                      <li>• <strong>Causa del cese:</strong> Tipo de finalización de la relación laboral</li>
                      <li>• <strong>Bases de cotización:</strong> Bases de cotización durante el periodo</li>
                      <li>• <strong>Régimen:</strong> Régimen de la Seguridad Social</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Obtener el Certificado de Empresa</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-pink-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-pink-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Solicita a la empresa primero:</strong> Es la forma más rápida</li>
                            <li>• <strong>Por escrito:</strong> Solicítalo por escrito para tener constancia</li>
                            <li>• <strong>Plazo:</strong> La empresa debe facilitártelo en un plazo razonable</li>
                            <li>• <strong>Conserva copias:</strong> Guarda copias del certificado</li>
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
                            <li>• <strong>Obligación empresarial:</strong> La empresa debe facilitártelo</li>
                            <li>• <strong>Si no te lo dan:</strong> Puedes obtenerlo a través de TGSS</li>
                            <li>• <strong>Plazo para solicitar:</strong> Solicítalo cuanto antes</li>
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
                    <Phone className="w-6 h-6 mr-2 text-pink-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre cómo obtener el certificado de empresa:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono TGSS:</strong> 901 50 20 50 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Portal Import@ss:</strong> importass.tgss.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-pink-600 to-rose-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-pink-100 mb-6">
                    Consulta otros trámites SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/tramites-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
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

