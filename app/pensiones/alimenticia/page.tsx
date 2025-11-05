import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  UsersRound, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  Scale
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pensión Alimenticia - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la pensión alimenticia: requisitos, cálculo, cuantía variable, cómo solicitarla en divorcios y separaciones.",
  keywords: ["pension alimenticia", "pension alimentos", "divorcio", "separacion", "pension compensatoria"],
  alternates: {
    canonical: "/pensiones/alimenticia",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples los requisitos para solicitar o recibir una pensión alimenticia.",
    details: [
      "Tener hijos menores de edad o mayores con necesidades especiales",
      "Estar en proceso de divorcio, separación o ya divorciado/separado",
      "Demostrar la necesidad de la pensión alimenticia",
      "El otro progenitor debe tener capacidad económica para pagarla"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Calcular la Cuantía",
    description: "La cuantía se calcula según varios factores.",
    details: [
      "Necesidades del hijo o hijos",
      "Capacidad económica del progenitor obligado",
      "Número de hijos",
      "Situación económica de ambos progenitores",
      "Gastos extraordinarios y necesidades especiales"
    ],
    icon: Scale
  },
  {
    number: 3,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE de ambos progenitores",
      "Libro de familia o certificado de nacimiento de los hijos",
      "Sentencia de divorcio o separación (si aplica)",
      "Justificantes de ingresos y gastos",
      "Documentación de gastos extraordinarios",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Solicita la pensión alimenticia.",
    details: [
      "Puede solicitarse en el proceso de divorcio o separación",
      "Puede solicitarse después del divorcio mediante modificación de medidas",
      "Se puede acordar de mutuo acuerdo o mediante sentencia judicial",
      "Es recomendable contar con asesoramiento legal"
    ],
    icon: FileText
  }
];

const factores = [
  "Necesidades reales del hijo o hijos (alimentación, vestido, educación, etc.)",
  "Capacidad económica del progenitor obligado al pago",
  "Número de hijos y su edad",
  "Situación económica del progenitor custodio",
  "Gastos extraordinarios (médicos, educativos, etc.)",
  "Régimen de visitas y custodia"
];

export default function PensionAlimenticiaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-yellow-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/pensiones"
                  className="flex items-center text-amber-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Pensiones
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <UsersRound className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Pensión Alimenticia
                  </h1>
                  <div className="flex items-center gap-6 text-amber-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Cuantía variable</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-amber-100">
                Guía completa sobre la pensión alimenticia: requisitos, cálculo, cuantía variable, 
                cómo solicitarla en divorcios y separaciones.
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
                <li className="text-gray-700">Pensión Alimenticia</li>
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
                    La pensión alimenticia es una prestación económica que tiene como objetivo garantizar 
                    el sustento de los hijos menores de edad o mayores con necesidades especiales, así como 
                    del cónyuge en algunos casos, tras un divorcio o separación.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La cuantía de la pensión alimenticia es variable y se determina en función de las necesidades 
                    de los hijos y la capacidad económica de ambos progenitores.
                  </p>
                </div>

                {/* Qué incluye */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-amber-600" />
                    ¿Qué Incluye la Pensión Alimenticia?
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Alimentación:</strong> Gastos de comida y nutrición</li>
                    <li>• <strong>Vestido:</strong> Ropa y calzado</li>
                    <li>• <strong>Educación:</strong> Matrícula, material escolar, actividades extraescolares</li>
                    <li>• <strong>Vivienda:</strong> Parte proporcional de gastos de vivienda</li>
                    <li>• <strong>Gastos médicos:</strong> Gastos sanitarios y farmacéuticos ordinarios</li>
                    <li>• <strong>Gastos extraordinarios:</strong> Se reparten al 50% entre ambos progenitores</li>
                  </ul>
                </div>

                {/* Factores de cálculo */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-amber-600" />
                    Factores para el Cálculo de la Cuantía
                  </h2>
                  <ul className="space-y-2">
                    {factores.map((factor, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Pensión Alimenticia</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-amber-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
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

                {/* Modificación */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Modificación de la Pensión Alimenticia</h2>
                  
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
                    <p className="text-gray-700 mb-4">
                      La pensión alimenticia puede modificarse cuando cambien las circunstancias:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Cambio de ingresos:</strong> Aumento o disminución de ingresos de cualquiera de los progenitores</li>
                      <li>• <strong>Cambio de necesidades:</strong> Cambio en las necesidades de los hijos</li>
                      <li>• <strong>Cambio de custodia:</strong> Modificación del régimen de custodia</li>
                      <li>• <strong>Mayoría de edad:</strong> Cuando los hijos alcanzan la mayoría de edad (si aplica)</li>
                    </ul>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Asesoramiento legal:</strong> Es recomendable contar con un abogado</li>
                            <li>• <strong>Documentación:</strong> Reúne todos los justificantes de ingresos y gastos</li>
                            <li>• <strong>Acuerdo:</strong> Intenta llegar a un acuerdo de mutuo acuerdo</li>
                            <li>• <strong>Modificación:</strong> Puede modificarse cuando cambien las circunstancias</li>
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
                            <li>• <strong>Obligación:</strong> Es una obligación legal mientras los hijos sean menores</li>
                            <li>• <strong>Impago:</strong> El impago puede acarrear consecuencias legales</li>
                            <li>• <strong>Dudas:</strong> Consulta con un abogado especializado en derecho de familia</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-amber-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la pensión alimenticia:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Asesoramiento legal:</strong> Consulta con un abogado especializado</li>
                    <li>• <strong>Colegio de Abogados:</strong> Puedes encontrar abogados en tu colegio profesional</li>
                    <li>• <strong>Servicios sociales:</strong> Consulta en servicios sociales de tu ayuntamiento</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-amber-600 to-yellow-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-amber-100 mb-6">
                    Consulta otros tipos de pensiones o explora nuestras guías
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/pensiones"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      Ver Todas las Pensiones
                    </Link>
                    <Link
                      href="/categorias/ayudas-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Ayudas SEPE
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

