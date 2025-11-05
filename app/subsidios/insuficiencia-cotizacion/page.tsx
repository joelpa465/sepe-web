import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  TrendingDown, 
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
  title: "Subsidio por Insuficiencia de Cotización - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre el subsidio por insuficiencia de cotización: requisitos, cuantía, duración, cómo solicitarlo. Para quienes no alcanzan los períodos mínimos de cotización.",
  keywords: ["insuficiencia cotización", "subsidio insuficiencia", "subsidio sepe", "subsidio cotización insuficiente"],
  alternates: {
    canonical: "/subsidios/insuficiencia-cotizacion",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para acceder al subsidio.",
    details: [
      "No alcanzar los períodos mínimos de cotización para prestación contributiva",
      "Haber cotizado menos de 360 días en los últimos 6 años",
      "Estar inscrito como demandante de empleo",
      "No tener ingresos superiores al 75% del SMI",
      "Haber cotizado al menos 3 meses (90 días) en los últimos 6 años"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE en vigor",
      "Vida laboral o informe de cotizaciones",
      "Justificante de inscripción como demandante de empleo",
      "Certificado de empresa",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Solicita el subsidio online o presencialmente.",
    details: [
      "Online: A través de la sede electrónica del SEPE",
      "Presencial: En la oficina del SEPE con cita previa",
      "Plazo: Máximo 15 días desde el cese de actividad",
      "Completa el formulario indicando la insuficiencia de cotización"
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
      "El SEPE verificará tus periodos de cotización"
    ],
    icon: Clock
  }
];

const requisitos = [
  "No alcanzar los períodos mínimos de cotización para prestación contributiva (menos de 360 días)",
  "Haber cotizado al menos 3 meses (90 días) en los últimos 6 años",
  "Estar inscrito como demandante de empleo en el SEPE",
  "No tener ingresos superiores al 75% del Salario Mínimo Interprofesional",
  "No tener la edad de jubilación",
  "Estar en situación legal de desempleo (cese involuntario)"
];

export default function InsuficienciaCotizacionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/subsidios"
                  className="flex items-center text-red-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Subsidios
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <TrendingDown className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Subsidio por Insuficiencia de Cotización
                  </h1>
                  <div className="flex items-center gap-6 text-red-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>497€/mes</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-red-100">
                Subsidio para quienes no alcanzan los períodos mínimos de cotización requeridos para la 
                prestación contributiva. Requisitos, cuantía, duración y cómo solicitarlo.
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
                <li className="text-gray-700">Insuficiencia de Cotización</li>
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
                    El subsidio por insuficiencia de cotización es una ayuda económica destinada a trabajadores 
                    que no alcanzan los períodos mínimos de cotización requeridos para acceder a la prestación 
                    contributiva por desempleo, pero han cotizado al menos 3 meses.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación tiene como objetivo proporcionar una protección económica a aquellos trabajadores 
                    que, por diversas circunstancias, no han podido acumular suficientes días de cotización para 
                    acceder a la prestación contributiva.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-red-600" />
                        Cuantía (2024)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Cuantía mensual:</strong> 497€/mes</li>
                        <li>• <strong>Pago:</strong> Mensual, entre los días 1 y 10</li>
                        <li>• <strong>Compatibilidad:</strong> Con otros ingresos limitados</li>
                        <li>• <strong>Límite ingresos:</strong> No superar el 75% del SMI</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-red-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Vida laboral:</strong> Consulta tu vida laboral para verificar tus cotizaciones</li>
                            <li>• <strong>Plazo de 15 días:</strong> Solicita el subsidio cuanto antes</li>
                            <li>• <strong>Renovación mensual:</strong> Es obligatorio renovar cada mes</li>
                            <li>• <strong>Documentación:</strong> Reúne toda la documentación laboral</li>
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
                            <li>• <strong>Mínimo 90 días:</strong> Debes haber cotizado al menos 3 meses</li>
                            <li>• <strong>Renovación mensual:</strong> Si no renuevas, se suspenderá el pago</li>
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
                    <Phone className="w-6 h-6 mr-2 text-red-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre el subsidio por insuficiencia de cotización:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-red-600 to-orange-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-red-100 mb-6">
                    Consulta otros subsidios o explora nuestras prestaciones
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/subsidios"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
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

