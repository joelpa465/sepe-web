import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Heart, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  DollarSign,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pensión de Viudedad - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la pensión de viudedad: requisitos, cuantía (60% base reguladora), cómo solicitarla, y casos especiales.",
  keywords: ["pension viudedad", "pension viudedad 2024", "pension supervivencia", "pension fallecimiento conyuge"],
  alternates: {
    canonical: "/pensiones/viudedad",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples todos los requisitos para acceder a la pensión de viudedad.",
    details: [
      "Haber estado casado o en situación asimilada con el fallecido",
      "El fallecido debe haber cotizado a la Seguridad Social",
      "No tener ingresos superiores al límite establecido (si aplica)",
      "Cumplir con los requisitos de convivencia"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE del viudo/a",
      "Certificado de defunción",
      "Libro de familia o certificado de matrimonio",
      "Documentación del fallecido (DNI, vida laboral)",
      "Justificante de convivencia",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Presentar la Solicitud",
    description: "Solicita la pensión de viudedad.",
    details: [
      "Online: A través de la sede electrónica de la Seguridad Social",
      "Presencial: En el INSS con cita previa",
      "Plazo: 90 días desde el fallecimiento (sin penalización)",
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
      "Si es aprobada, comenzarás a cobrar retroactivamente desde el fallecimiento"
    ],
    icon: Clock
  }
];

const requisitos = [
  "Haber estado casado o en situación asimilada (pareja de hecho) con el fallecido",
  "El fallecido debe haber cotizado a la Seguridad Social",
  "No tener ingresos superiores al límite establecido (si el fallecido no tenía derecho a pensión contributiva)",
  "Cumplir con los requisitos de convivencia y dependencia económica",
  "No estar separado legalmente o divorciado sin derecho a pensión compensatoria"
];

export default function PensionViudedadPage() {
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
                  href="/categorias/pensiones"
                  className="flex items-center text-pink-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Pensiones
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Pensión de Viudedad
                  </h1>
                  <div className="flex items-center gap-6 text-pink-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>60% base reguladora</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-pink-100">
                Guía completa sobre la pensión de viudedad: requisitos, cuantía, cómo solicitarla 
                y casos especiales tras el fallecimiento del cónyuge.
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
                <li className="text-gray-700">Pensión de Viudedad</li>
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
                    La pensión de viudedad es una prestación económica destinada al cónyuge superviviente 
                    tras el fallecimiento de su esposo o esposa. Esta pensión tiene como objetivo proporcionar 
                    una protección económica al viudo o viuda.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La cuantía de la pensión de viudedad es generalmente el 60% de la base reguladora que 
                    correspondería al fallecido, aunque puede variar según las circunstancias.
                  </p>
                </div>

                {/* Cuantía */}
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-pink-600" />
                    Cuantía de la Pensión
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Porcentaje base:</strong> 60% de la base reguladora del fallecido</li>
                    <li>• <strong>Pensión mínima:</strong> 8.467,40€/año (si hay hijos a cargo)</li>
                    <li>• <strong>Pensión máxima:</strong> Límite establecido según normativa</li>
                    <li>• <strong>Pago:</strong> 14 pagas anuales</li>
                  </ul>
                </div>

                {/* Requisitos */}
                <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-pink-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Pensión de Viudedad</h2>
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

                {/* Casos especiales */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Casos Especiales</h2>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                    <ul className="space-y-3 text-gray-700">
                      <li>• <strong>Parejas de hecho:</strong> Pueden tener derecho si cumplen los requisitos establecidos</li>
                      <li>• <strong>Hijos a cargo:</strong> Puede aumentar la cuantía de la pensión</li>
                      <li>• <strong>Pensión de jubilación:</strong> La pensión de viudedad es compatible con otras pensiones</li>
                      <li>• <strong>Nuevo matrimonio:</strong> Generalmente se pierde el derecho a la pensión de viudedad</li>
                    </ul>
                  </div>
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
                            <li>• <strong>Plazo:</strong> Solicita dentro de los 90 días sin penalización</li>
                            <li>• <strong>Documentación:</strong> Reúne todos los documentos necesarios</li>
                            <li>• <strong>Asesoramiento:</strong> Consulta con el INSS para dudas</li>
                            <li>• <strong>Retroactividad:</strong> Se cobra desde el fallecimiento</li>
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
                            <li>• <strong>Nuevo matrimonio:</strong> Generalmente se pierde el derecho</li>
                            <li>• <strong>Ingresos:</strong> Pueden afectar la cuantía si no hay derecho contributivo</li>
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
                    <Phone className="w-6 h-6 mr-2 text-pink-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la pensión de viudedad:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono INSS:</strong> 901 50 20 50</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-pink-600 to-rose-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-pink-100 mb-6">
                    Consulta otros tipos de pensiones o explora nuestras guías
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/pensiones"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
                    >
                      Ver Todas las Pensiones
                    </Link>
                    <Link
                      href="/pensiones/orfandad"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Pensión de Orfandad
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

