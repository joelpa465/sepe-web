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
  DollarSign,
  Calendar,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prestación por Desempleo - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la prestación por desempleo: requisitos, cuantía, duración, cómo solicitarla y renovarla. Todo lo que necesitas saber sobre el paro en España.",
  keywords: ["prestación desempleo", "cobrar paro", "prestación sepe", "prestación por desempleo", "cómo solicitar paro"],
  alternates: {
    canonical: "/prestaciones/desempleo",
  },
  openGraph: {
    title: "Prestación por Desempleo - Guía Completa 2024",
    description: "Aprende todo sobre la prestación por desempleo: requisitos, cuantía, duración y cómo solicitarla.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Cumplir los Requisitos de Cotización",
    description: "Para tener derecho a la prestación por desempleo, debes haber cotizado un mínimo de tiempo.",
    details: [
      "Haber cotizado al menos 360 días en los últimos 6 años",
      "Los días de cotización deben ser de los últimos 6 años anteriores al cese",
      "No haber agotado el derecho a la prestación anteriormente",
      "Estar en situación legal de desempleo (cese involuntario)"
    ],
    icon: Briefcase
  },
  {
    number: 2,
    title: "Inscribirse como Demandante de Empleo",
    description: "Es obligatorio estar inscrito en el SEPE antes de solicitar la prestación.",
    details: [
      "Inscríbete en el SEPE en un plazo máximo de 15 días desde el cese",
      "Puedes hacerlo online en sede.sepe.gob.es",
      "O presencialmente en la oficina del SEPE",
      "Necesitarás tu DNI/NIE y el certificado de empresa"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Preparar la Documentación Necesaria",
    description: "Reúne todos los documentos antes de presentar la solicitud.",
    details: [
      "DNI o NIE en vigor",
      "Certificado de empresa o vida laboral",
      "Justificante de inscripción como demandante de empleo",
      "IBAN para el cobro (nómina bancaria o certificado)",
      "Último contrato de trabajo y finiquito",
      "Documentación de la empresa (si aplica)"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Puedes solicitar la prestación online o presencialmente.",
    details: [
      "Online: A través de la sede electrónica del SEPE (recomendado)",
      "Presencial: En la oficina del SEPE con cita previa",
      "Plazo: Máximo 15 días desde el cese de actividad",
      "Si pasas el plazo, puedes perder días de prestación"
    ],
    icon: CheckCircle
  },
  {
    number: 5,
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
    number: 6,
    title: "Cobrar la Prestación",
    description: "Una vez aprobada, comenzarás a cobrar mensualmente.",
    details: [
      "El pago se realiza mensualmente",
      "Se cobra entre los días 1 y 10 de cada mes",
      "El primer pago puede tardar un poco más",
      "Debes mantenerte inscrito como demandante de empleo"
    ],
    icon: DollarSign
  }
];

const requisitos = [
  "Haber cotizado al menos 360 días en los últimos 6 años",
  "Estar en situación legal de desempleo (cese involuntario)",
  "Estar inscrito como demandante de empleo",
  "No tener la edad de jubilación",
  "No tener ingresos superiores al 75% del salario mínimo interprofesional",
  "No haber agotado el derecho a la prestación"
];

export default function PrestacionDesempleoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/prestaciones-sepe"
                  className="flex items-center text-purple-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Prestaciones SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Prestación por Desempleo
                  </h1>
                  <div className="flex items-center gap-6 text-purple-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Hasta 1.087,46€/mes</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-purple-100">
                Guía completa sobre la prestación por desempleo: requisitos, cuantía, duración máxima, 
                cómo solicitarla y renovarla. Todo lo que necesitas saber para cobrar el paro en España.
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
                <li><Link href="/categorias/prestaciones-sepe" className="text-blue-600 hover:text-blue-800">Prestaciones SEPE</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Prestación por Desempleo</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                {/* Introducción */}
                <div className="mb-12">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    La prestación por desempleo, también conocida como "el paro", es una ayuda económica 
                    que proporciona el SEPE a trabajadores que han perdido su empleo de forma involuntaria 
                    y que han cotizado durante un período mínimo establecido.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación tiene como objetivo proporcionar una protección económica temporal 
                    mientras el trabajador busca un nuevo empleo, garantizando un nivel mínimo de ingresos.
                  </p>
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

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-purple-600" />
                        Cuantía
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Primeros 6 meses:</strong> 70% de la base reguladora</li>
                        <li>• <strong>A partir del 7º mes:</strong> 50% de la base reguladora</li>
                        <li>• <strong>Máximo:</strong> 1.087,46€/mes (2024)</li>
                        <li>• <strong>Mínimo:</strong> 569,7€/mes (con hijos a cargo: 757,8€)</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Mínimo:</strong> 4 meses (con 360 días cotizados)</li>
                        <li>• <strong>Máximo:</strong> 24 meses (con 2.160 días cotizados)</li>
                        <li>• <strong>Cálculo:</strong> 1 día de prestación por cada 3 días cotizados</li>
                        <li>• <strong>Límite:</strong> Máximo 720 días (2 años)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Prestación</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {/* Connection line */}
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-purple-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
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

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Plazo de 15 días:</strong> Solicita la prestación cuanto antes</li>
                            <li>• <strong>Renueva tu demanda:</strong> Cada 3 meses para mantener el derecho</li>
                            <li>• <strong>Documentación completa:</strong> Reúne todos los documentos antes de solicitar</li>
                            <li>• <strong>Consulta online:</strong> Puedes ver el estado de tu solicitud en la sede electrónica</li>
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
                            <li>• <strong>No renuncies al trabajo:</strong> Solo válido para cese involuntario</li>
                            <li>• <strong>Mantente disponible:</strong> Debes buscar trabajo activamente</li>
                            <li>• <strong>Renueva tu demanda:</strong> Si no renuevas, se suspende la prestación</li>
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
                    <Phone className="w-6 h-6 mr-2 text-purple-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre tu prestación por desempleo:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-purple-100 mb-6">
                    Consulta otras prestaciones SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/prestaciones-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Ver Todas las Prestaciones
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
              
              {/* Sidebar derecho - SOLO en desktop */}
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

