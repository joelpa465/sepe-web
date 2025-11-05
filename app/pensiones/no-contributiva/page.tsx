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
  Calendar,
  Phone,
  DollarSign,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pensión No Contributiva - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la pensión no contributiva: requisitos, cuantía (5.639€/año), cómo solicitarla para mayores de 65 años sin recursos.",
  keywords: ["pension no contributiva", "pension mayores 65", "pension sin cotizacion", "pension asistencial"],
  alternates: {
    canonical: "/pensiones/no-contributiva",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples todos los requisitos para acceder a la pensión no contributiva.",
    details: [
      "Tener 65 años o más",
      "Residir legalmente en España al menos 10 años",
      "No tener derecho a pensión contributiva",
      "No superar los límites de ingresos establecidos"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE en vigor",
      "Certificado de empadronamiento",
      "Justificante de ingresos y patrimonio",
      "Documentación de la unidad familiar",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Solicita la pensión no contributiva.",
    details: [
      "Online: A través de la sede electrónica de la Seguridad Social",
      "Presencial: En el INSS o servicios sociales",
      "Plazo: En cualquier momento cumpliendo los requisitos",
      "Completa el formulario con todos los datos requeridos"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Esperar la Resolución",
    description: "El INSS revisará tu solicitud y te notificará la resolución.",
    details: [
      "Plazo de resolución: Aproximadamente 90 días",
      "Recibirás la notificación por correo postal o electrónico",
      "Puedes consultar el estado en la sede electrónica",
      "Se verificará tu situación económica y de residencia"
    ],
    icon: Clock
  }
];

const requisitos = [
  "Tener 65 años o más de edad",
  "Residir legalmente en España al menos 10 años, de los cuales 2 deben ser inmediatamente anteriores a la solicitud",
  "No tener derecho a pensión contributiva de la Seguridad Social",
  "No superar los límites de ingresos establecidos anualmente",
  "No superar los límites de patrimonio establecidos",
  "Carecer de recursos económicos suficientes"
];

export default function PensionNoContributivaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/pensiones"
                  className="flex items-center text-teal-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Pensiones
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Pensión No Contributiva
                  </h1>
                  <div className="flex items-center gap-6 text-teal-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>5.639€/año</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-teal-100">
                Guía completa sobre la pensión no contributiva: requisitos, cuantía, cómo solicitarla 
                para mayores de 65 años sin recursos suficientes y sin derecho a pensión contributiva.
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
                <li className="text-gray-700">Pensión No Contributiva</li>
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
                    La pensión no contributiva es una prestación económica destinada a personas mayores de 65 años 
                    que carecen de recursos económicos suficientes y que no tienen derecho a una pensión contributiva 
                    de la Seguridad Social.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta pensión no requiere haber cotizado a la Seguridad Social, pero sí cumplir con requisitos 
                    de edad, residencia y carencia de recursos económicos.
                  </p>
                </div>

                {/* Cuantía */}
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-100 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-teal-600" />
                    Cuantía de la Pensión (2024)
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Cuantía anual:</strong> 5.639€/año</li>
                    <li>• <strong>Cuantía mensual:</strong> 469,92€/mes (12 pagas)</li>
                    <li>• <strong>Pago:</strong> 12 pagas mensuales</li>
                    <li>• <strong>Revalorización:</strong> Se actualiza anualmente según el IPC</li>
                  </ul>
                </div>

                {/* Requisitos */}
                <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-teal-600" />
                    Requisitos para Tener Derecho
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

                {/* Límites de Ingresos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Límites de Ingresos y Patrimonio</h2>
                  
                  <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-100">
                    <p className="text-gray-700 mb-4">
                      Para acceder a la pensión no contributiva, los ingresos y el patrimonio no deben superar 
                      los límites establecidos anualmente:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Ingresos personales:</strong> No superar el límite establecido anualmente</li>
                      <li>• <strong>Ingresos familiares:</strong> Se tienen en cuenta los ingresos de la unidad familiar</li>
                      <li>• <strong>Patrimonio:</strong> No superar los límites de patrimonio establecidos</li>
                      <li>• <strong>Revisión:</strong> Los límites se revisan anualmente</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Pensión No Contributiva</h2>
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
                    <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border border-teal-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Documentación:</strong> Reúne todos los justificantes de ingresos</li>
                            <li>• <strong>Patrimonio:</strong> Declara todos tus bienes y patrimonio</li>
                            <li>• <strong>Residencia:</strong> Asegúrate de cumplir el requisito de residencia</li>
                            <li>• <strong>Asesoramiento:</strong> Consulta en servicios sociales de tu ayuntamiento</li>
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
                            <li>• <strong>Límites:</strong> Respeta los límites de ingresos y patrimonio</li>
                            <li>• <strong>Revisión:</strong> Los límites se revisan anualmente</li>
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
                    <Phone className="w-6 h-6 mr-2 text-teal-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la pensión no contributiva:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono INSS:</strong> 901 50 20 50</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Servicios Sociales:</strong> Consulta en tu ayuntamiento</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-teal-600 to-green-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-teal-100 mb-6">
                    Consulta otros tipos de pensiones o explora nuestras guías
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/pensiones"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
                    >
                      Ver Todas las Pensiones
                    </Link>
                    <Link
                      href="/pensiones/alimenticia"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Pensión Alimenticia
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

