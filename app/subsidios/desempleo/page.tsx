import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Briefcase, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Subsidio por Desempleo - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre el subsidio por desempleo: requisitos, cuantía, duración, cómo solicitarlo y renovarlo. Para desempleados sin derecho a prestación contributiva.",
  keywords: ["subsidio desempleo", "subsidio paro", "subsidio sepe", "subsidio por desempleo", "ayuda desempleo"],
  alternates: {
    canonical: "/subsidios/desempleo",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para acceder al subsidio por desempleo.",
    details: [
      "Haber agotado la prestación contributiva o no tener derecho a ella",
      "Estar inscrito como demandante de empleo",
      "No tener ingresos superiores al 75% del SMI",
      "No tener derecho a pensión de jubilación",
      "Haber cotizado al menos 3 meses (90 días) en los últimos 6 años"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios antes de solicitar.",
    details: [
      "DNI o NIE en vigor",
      "Certificado de empresa o vida laboral",
      "Justificante de inscripción como demandante de empleo",
      "IBAN para el cobro",
      "Certificado de empadronamiento (si aplica)"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Solicita el subsidio online o presencialmente.",
    details: [
      "Online: A través de la sede electrónica del SEPE (recomendado)",
      "Presencial: En la oficina del SEPE con cita previa",
      "Plazo: Máximo 15 días desde que se agota la prestación o desde el cese",
      "Si pasas el plazo, puedes perder días de subsidio"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Esperar la Resolución",
    description: "El SEPE revisará tu solicitud y te notificará la resolución.",
    details: [
      "Plazo de resolución: Aproximadamente 15-30 días",
      "Recibirás la notificación por correo postal o electrónico",
      "Puedes consultar el estado en la sede electrónica",
      "Si falta documentación, te pedirán que la aportes"
    ],
    icon: Clock
  },
  {
    number: 5,
    title: "Renovar la Demanda de Empleo",
    description: "Debes renovar tu demanda de empleo mensualmente.",
    details: [
      "Renueva tu demanda cada mes en el SEPE",
      "Puedes hacerlo online en sede.sepe.gob.es",
      "Es obligatorio para mantener el derecho al subsidio",
      "Si no renuevas, se suspenderá el pago"
    ],
    icon: CheckCircle
  }
];

const requisitos = [
  "Haber agotado la prestación contributiva por desempleo o no tener derecho a ella",
  "Estar inscrito como demandante de empleo en el SEPE",
  "No tener ingresos superiores al 75% del Salario Mínimo Interprofesional (SMI)",
  "No tener la edad de jubilación",
  "Haber cotizado al menos 3 meses (90 días) en los últimos 6 años",
  "No haber agotado el derecho a subsidios anteriormente"
];

export default function SubsidioDesempleoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/subsidios"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Subsidios
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Subsidio por Desempleo
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>497€/mes</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-blue-100">
                Ayuda económica para desempleados que no reúnen requisitos para la prestación contributiva. 
                Requisitos, cuantía, duración y cómo solicitarlo paso a paso.
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
                <li className="text-gray-700">Subsidio por Desempleo</li>
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
                    El subsidio por desempleo es una ayuda económica que proporciona el SEPE a trabajadores 
                    que han agotado la prestación contributiva o no tienen derecho a ella, pero cumplen con 
                    los requisitos mínimos de cotización.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación tiene como objetivo proporcionar una protección económica temporal 
                    mientras el trabajador busca un nuevo empleo, garantizando un nivel mínimo de ingresos 
                    para aquellos que no pueden acceder a la prestación contributiva.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
                        Cuantía (2024)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Cuantía mensual:</strong> 497€/mes</li>
                        <li>• <strong>Con hijos a cargo:</strong> 497€/mes (mismo importe)</li>
                        <li>• <strong>Pago:</strong> Mensual, entre los días 1 y 10</li>
                        <li>• <strong>Compatibilidad:</strong> Con otros ingresos limitados</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-green-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duración:</strong> 6 meses (180 días)</li>
                        <li>• <strong>Renovación:</strong> Mensual de la demanda de empleo</li>
                        <li>• <strong>Extensión:</strong> No se puede extender más allá de 6 meses</li>
                        <li>• <strong>Límite:</strong> Máximo 6 meses por ciclo de prestaciones</li>
                      </ul>
                    </div>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
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

                {/* Diferencia con Prestación Contributiva */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Diferencia con la Prestación Contributiva</h2>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Prestación Contributiva</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Requiere más días de cotización (360 días)</li>
                          <li>• Cuantía: 70% de la base reguladora (máx. 1.087€/mes)</li>
                          <li>• Duración: Hasta 24 meses según cotización</li>
                          <li>• Renovación: Cada 3 meses</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Subsidio por Desempleo</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Requiere menos días de cotización (90 días)</li>
                          <li>• Cuantía: 497€/mes (fija)</li>
                          <li>• Duración: 6 meses máximo</li>
                          <li>• Renovación: Mensual</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Plazo de 15 días:</strong> Solicita el subsidio cuanto antes</li>
                            <li>• <strong>Renueva mensualmente:</strong> Es obligatorio para mantener el derecho</li>
                            <li>• <strong>Documentación completa:</strong> Reúne todos los documentos antes</li>
                            <li>• <strong>Consulta online:</strong> Puedes ver el estado en la sede electrónica</li>
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
                            <li>• <strong>Renovación mensual:</strong> Debes renovar cada mes</li>
                            <li>• <strong>Mantente disponible:</strong> Debes buscar trabajo activamente</li>
                            <li>• <strong>Límite de ingresos:</strong> No superar el 75% del SMI</li>
                            <li>• <strong>Dudas:</strong> Llama al SEPE al 900 81 24 00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-blue-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre el subsidio por desempleo:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-blue-100 mb-6">
                    Consulta otros subsidios o explora nuestras prestaciones
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/subsidios"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Ver Todos los Subsidios
                    </Link>
                    <Link
                      href="/prestaciones/desempleo"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Prestación Contributiva
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

