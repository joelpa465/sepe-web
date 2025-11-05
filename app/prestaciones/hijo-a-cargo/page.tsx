import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  DollarSign,
  Calendar,
  Phone,
  Baby
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prestación por Hijo a Cargo - Guía Completa 2024 | Web Cursos SEPE",
  description: "Guía completa sobre la prestación por hijo a cargo: requisitos, cuantía (341€/año), cómo solicitarla y diferencias entre contributiva y no contributiva.",
  keywords: ["prestación hijo a cargo", "ayuda hijo a cargo", "prestación familiar", "prestación sepe hijo"],
  alternates: {
    canonical: "/prestaciones/hijo-a-cargo",
  },
  openGraph: {
    title: "Prestación por Hijo a Cargo - Guía Completa 2024",
    description: "Aprende todo sobre la prestación por hijo a cargo: requisitos, cuantía y cómo solicitarla.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba que cumples todos los requisitos para tener derecho a la prestación.",
    details: [
      "Tener hijos menores de 18 años a cargo",
      "O hijos mayores de 18 años que estén estudiando (hasta 25 años)",
      "O hijos con discapacidad igual o superior al 33%",
      "Cumplir los requisitos económicos (renta familiar)"
    ],
    icon: Users
  },
  {
    number: 2,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios antes de solicitar.",
    details: [
      "DNI o NIE del solicitante",
      "Libro de familia o certificado de nacimiento de los hijos",
      "Certificado de empadronamiento (actualizado)",
      "Certificado de ingresos o declaración de la renta",
      "Documentación de estudios (si el hijo es mayor de 18 años)",
      "Certificado de discapacidad (si aplica)"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Calcular los Ingresos Familiares",
    description: "Verifica que los ingresos familiares no superen los límites establecidos.",
    details: [
      "Suma todos los ingresos de la unidad familiar",
      "Comprueba los límites según el número de hijos",
      "Tiene en cuenta: salarios, pensiones, prestaciones, etc.",
      "Consulta los límites actualizados en la web del SEPE"
    ],
    icon: DollarSign
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Puedes solicitar la prestación online o presencialmente.",
    details: [
      "Online: A través de la sede electrónica del SEPE",
      "Presencial: En la oficina del SEPE con cita previa",
      "Puedes solicitar desde el 1 de enero hasta el 31 de diciembre",
      "La solicitud es anual y debe renovarse cada año"
    ],
    icon: CheckCircle
  },
  {
    number: 5,
    title: "Esperar la Resolución",
    description: "El SEPE revisará tu solicitud y te notificará la resolución.",
    details: [
      "Plazo de resolución: Aproximadamente 3-6 meses",
      "Recibirás la notificación por correo postal",
      "Puedes consultar el estado en la sede electrónica",
      "Si es favorable, recibirás el pago de forma anual"
    ],
    icon: Clock
  }
];

const requisitos = [
  "Tener hijos menores de 18 años a cargo",
  "O hijos mayores de 18 años que estén estudiando (hasta 25 años como máximo)",
  "O hijos con discapacidad igual o superior al 33%",
  "Los ingresos familiares no deben superar los límites establecidos",
  "Residir en España",
  "No percibir otras prestaciones familiares incompatibles"
];

export default function PrestacionHijoACargoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/prestaciones-sepe"
                  className="flex items-center text-pink-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Prestaciones SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Baby className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Prestación por Hijo a Cargo
                  </h1>
                  <div className="flex items-center gap-6 text-pink-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>341€/año por hijo</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-pink-100">
                Guía completa sobre la prestación por hijo a cargo: requisitos, cuantía, cómo solicitarla, 
                diferencias entre modalidad contributiva y no contributiva, y todo lo que necesitas saber.
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
                <li className="text-gray-700">Prestación por Hijo a Cargo</li>
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
                    La prestación por hijo a cargo es una ayuda económica que proporciona el SEPE a familias 
                    con hijos menores de 18 años o mayores de 18 años que estén estudiando. Esta prestación 
                    busca ayudar a las familias con menores recursos económicos.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Existen dos modalidades: la prestación contributiva (para trabajadores que cotizan) y la 
                    prestación no contributiva (para familias sin recursos suficientes). La cuantía es de 341€ 
                    anuales por cada hijo a cargo.
                  </p>
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

                {/* Cuantía y Modalidades */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cuantía y Modalidades</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <DollarSign className="w-6 h-6 mr-2 text-pink-600" />
                        Cuantía
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Por hijo:</strong> 341€ anuales</li>
                        <li>• <strong>Pago único:</strong> Se paga una vez al año</li>
                        <li>• <strong>Límite por familia:</strong> Según número de hijos</li>
                        <li>• <strong>Actualización:</strong> Se revisa anualmente</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Users className="w-6 h-6 mr-2 text-blue-600" />
                        Modalidades
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Contributiva:</strong> Para trabajadores que cotizan</li>
                        <li>• <strong>No contributiva:</strong> Para familias sin recursos</li>
                        <li>• <strong>Misma cuantía:</strong> 341€ en ambas modalidades</li>
                        <li>• <strong>Requisitos diferentes:</strong> Según la modalidad</li>
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
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-pink-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
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

                {/* Banner publicitario */}
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
                            <li>• <strong>Solicitud anual:</strong> Debes solicitarla cada año</li>
                            <li>• <strong>Plazo:</strong> Del 1 de enero al 31 de diciembre</li>
                            <li>• <strong>Documentación actualizada:</strong> Asegúrate de tener todos los documentos</li>
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
                            <li>• <strong>Límites de renta:</strong> Verifica que no superas los límites</li>
                            <li>• <strong>Hijos mayores de 18:</strong> Deben estar estudiando</li>
                            <li>• <strong>Renovación:</strong> Es necesario renovar cada año</li>
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
                    <Phone className="w-6 h-6 mr-2 text-pink-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la prestación por hijo a cargo:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-pink-100 mb-6">
                    Consulta otras prestaciones SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/prestaciones-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors"
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

