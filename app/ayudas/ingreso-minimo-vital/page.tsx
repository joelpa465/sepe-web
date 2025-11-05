import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  Users,
  Home
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ingreso Mínimo Vital - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre el Ingreso Mínimo Vital (IMV): requisitos, cuantía, cómo solicitarlo paso a paso y toda la información necesaria.",
  keywords: ["ingreso mínimo vital", "imv", "ayuda económica", "prestación sepe", "vulnerabilidad económica"],
  alternates: {
    canonical: "/ayudas/ingreso-minimo-vital",
  },
  openGraph: {
    title: "Ingreso Mínimo Vital - Guía Completa 2024",
    description: "Aprende todo sobre el Ingreso Mínimo Vital: requisitos, cuantía y cómo solicitarlo.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos de Elegibilidad",
    description: "El IMV está dirigido a personas o unidades de convivencia en situación de vulnerabilidad económica.",
    details: [
      "Ser mayor de 23 años o menor de 65 años (o menor de 30 si eres víctima de violencia de género)",
      "Vivir en España de forma legal y efectiva durante al menos 1 año",
      "Formar parte de una unidad de convivencia con ingresos inferiores al umbral establecido",
      "No tener derecho a otras prestaciones de la Seguridad Social que superen el límite"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Calcular los Ingresos de la Unidad de Convivencia",
    description: "Se evalúan los ingresos de todos los miembros de la unidad familiar.",
    details: [
      "Suma de todos los ingresos del hogar (salarios, pensiones, ayudas, etc.)",
      "Se consideran los ingresos de los últimos 12 meses",
      "Se aplican límites según la composición de la unidad familiar",
      "Se tienen en cuenta los activos patrimoniales (vivienda, ahorros, etc.)"
    ],
    icon: DollarSign
  },
  {
    number: 3,
    title: "Preparar la Documentación Necesaria",
    description: "Reúne todos los documentos antes de presentar la solicitud.",
    details: [
      "DNI o NIE de todos los miembros de la unidad de convivencia",
      "Certificado de empadronamiento",
      "Justificantes de ingresos (nóminas, pensiones, etc.)",
      "Documentación de gastos (alquiler, hipoteca, suministros)",
      "Certificado de convivencia si aplica",
      "Documentación específica según tu situación (víctima de violencia, discapacidad, etc.)"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Puedes solicitar el IMV online o presencialmente.",
    details: [
      "Online: A través de la Sede Electrónica de la Seguridad Social (recomendado)",
      "Presencial: En el INSS con cita previa",
      "También puedes solicitar por teléfono llamando al 900 20 22 22",
      "La solicitud es única para toda la unidad de convivencia"
    ],
    icon: FileText
  },
  {
    number: 5,
    title: "Esperar la Resolución",
    description: "El INSS revisará tu solicitud y te notificará la resolución.",
    details: [
      "Plazo de resolución: Máximo 90 días desde la solicitud",
      "Recibirás la notificación por correo postal o electrónico",
      "Puedes consultar el estado en la sede electrónica",
      "Si falta documentación, te pedirán que la aportes en 10 días"
    ],
    icon: Clock
  }
];

const requisitos = [
  "Tener entre 23 y 64 años de edad (o menor de 30 si eres víctima de violencia de género)",
  "Vivir en España de forma legal y efectiva durante al menos 1 año",
  "Formar parte de una unidad de convivencia con ingresos inferiores al umbral del IMV",
  "No tener derecho a otras prestaciones de la Seguridad Social que superen el límite",
  "No tener patrimonio suficiente (vivienda habitual excluida hasta cierto límite)",
  "Haber presentado la declaración de la renta si es obligatorio"
];

export default function IngresoMinimoVitalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/ayudas-sepe"
                  className="flex items-center text-green-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Ayudas SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Ingreso Mínimo Vital
                  </h1>
                  <div className="flex items-center gap-6 text-green-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>15 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Hasta 1.234€/mes</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-green-100">
                El Ingreso Mínimo Vital es una prestación económica que garantiza un nivel mínimo de ingresos 
                a personas o unidades de convivencia en situación de vulnerabilidad económica.
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
                <li><Link href="/categorias/ayudas-sepe" className="text-blue-600 hover:text-blue-800">Ayudas SEPE</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Ingreso Mínimo Vital</li>
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
                    El Ingreso Mínimo Vital (IMV) es una prestación económica de la Seguridad Social que tiene 
                    como objetivo garantizar un nivel mínimo de ingresos a las personas o unidades de convivencia 
                    que se encuentran en situación de vulnerabilidad económica.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta prestación se complementa con otras ayudas y está diseñada para combatir la pobreza y 
                    la exclusión social, proporcionando una red de seguridad económica para las familias más vulnerables.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Requisitos para Tener Derecho
                  </h2>
                  <ul className="space-y-2">
                    {requisitos.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cuantía y Duración */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Duración</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                        Cuantía (2024)
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Persona sola:</strong> 565,38€/mes</li>
                        <li>• <strong>Pareja:</strong> 848,07€/mes</li>
                        <li>• <strong>Con 1 hijo:</strong> 1.030,76€/mes</li>
                        <li>• <strong>Con 2 hijos:</strong> 1.213,45€/mes</li>
                        <li>• <strong>Con 3+ hijos:</strong> +182,69€ por cada hijo adicional</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                        Duración
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Duración:</strong> Indefinida mientras se cumplan requisitos</li>
                        <li>• <strong>Revisión:</strong> Anual o cuando cambie la situación</li>
                        <li>• <strong>Renovación:</strong> Automática si se mantienen los requisitos</li>
                        <li>• <strong>Compatibilidad:</strong> Con otras ayudas y prestaciones</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar el IMV</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {/* Connection line */}
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-green-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
                            <div className="flex-grow pb-12">
                              <div className="flex items-center mb-2">
                                <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mr-3">
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
                                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
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
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Documentación completa:</strong> Reúne todos los documentos antes de solicitar</li>
                            <li>• <strong>Solicitud online:</strong> Es más rápida y eficiente que la presencial</li>
                            <li>• <strong>Comunicación de cambios:</strong> Informa de cualquier cambio en tu situación</li>
                            <li>• <strong>Revisión anual:</strong> Se revisa automáticamente cada año</li>
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
                            <li>• <strong>Unidad de convivencia:</strong> Se evalúa el conjunto del hogar</li>
                            <li>• <strong>Ingresos:</strong> Se consideran todos los ingresos del hogar</li>
                            <li>• <strong>Patrimonio:</strong> Se valora también el patrimonio disponible</li>
                            <li>• <strong>Cambios:</strong> Comunica cualquier cambio en tu situación familiar</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-green-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre el Ingreso Mínimo Vital:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono IMV:</strong> 900 20 22 22 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-green-100 mb-6">
                    Consulta otras ayudas SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/ayudas-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                    >
                      Ver Todas las Ayudas
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

