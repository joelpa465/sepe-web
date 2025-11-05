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
  Calendar,
  Phone,
  DollarSign,
  Calculator
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pensión Máxima de Jubilación 2024 - Guía Completa | Web Cursos SEPE",
  description: "Guía completa sobre la pensión máxima de jubilación en 2024: requisitos, cuantía máxima (3.175,49€/mes), cómo calcular tu pensión, y cómo solicitarla.",
  keywords: ["pension maxima jubilacion", "pension maxima 2024", "pension jubilacion", "calcular pension jubilacion"],
  alternates: {
    canonical: "/pensiones/jubilacion-maxima",
  },
};

const steps = [
  {
    number: 1,
    title: "Verificar los Requisitos",
    description: "Comprueba si cumples todos los requisitos para acceder a la pensión máxima.",
    details: [
      "Tener la edad legal de jubilación (65-67 años según año de nacimiento)",
      "Haber cotizado al menos 38,5 años para la pensión máxima",
      "Tener cotizaciones suficientes en los últimos años",
      "Estar en situación de alta o asimilada al alta en la Seguridad Social"
    ],
    icon: CheckCircle
  },
  {
    number: 2,
    title: "Calcular tu Base Reguladora",
    description: "La base reguladora se calcula con las cotizaciones de los últimos años.",
    details: [
      "Se tienen en cuenta las bases de cotización de los últimos 25 años",
      "Se aplican coeficientes de actualización según el IPC",
      "Se divide entre el número de meses cotizados",
      "Se aplica un porcentaje según años cotizados"
    ],
    icon: Calculator
  },
  {
    number: 3,
    title: "Preparar la Documentación",
    description: "Reúne todos los documentos necesarios.",
    details: [
      "DNI o NIE en vigor",
      "Vida laboral completa",
      "Certificado de empresa de los últimos trabajos",
      "Justificante de cotizaciones",
      "Documentación de períodos de alta",
      "IBAN para el cobro"
    ],
    icon: FileText
  },
  {
    number: 4,
    title: "Presentar la Solicitud",
    description: "Solicita la pensión de jubilación.",
    details: [
      "Online: A través de la sede electrónica de la Seguridad Social",
      "Presencial: En el INSS con cita previa",
      "Plazo: 3 meses antes de cumplir la edad de jubilación",
      "Puedes solicitar una estimación previa de tu pensión"
    ],
    icon: FileText
  }
];

const requisitos = [
  "Tener la edad legal de jubilación (variable según año de nacimiento)",
  "Haber cotizado al menos 38,5 años para acceder a la pensión máxima",
  "Tener cotizaciones suficientes en los últimos años de vida laboral",
  "Estar en situación de alta o asimilada al alta en la Seguridad Social",
  "No tener otra pensión de jubilación reconocida"
];

export default function PensionJubilacionMaximaPage() {
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
                  href="/categorias/pensiones"
                  className="flex items-center text-red-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Pensiones
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Pensión Máxima de Jubilación 2024
                  </h1>
                  <div className="flex items-center gap-6 text-red-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>15 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Hasta 3.175,49€/mes</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-red-100">
                Guía completa sobre la pensión máxima de jubilación en 2024: requisitos, cuantía máxima, 
                cómo calcular tu pensión y cómo solicitarla paso a paso.
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
                <li className="text-gray-700">Pensión Máxima de Jubilación</li>
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
                    La pensión máxima de jubilación es la cuantía más alta que puede recibir un pensionista 
                    en España. En 2024, la pensión máxima de jubilación se establece en 3.175,49€ mensuales 
                    (14 pagas), lo que equivale a 44.456,86€ anuales.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Para acceder a la pensión máxima, es necesario cumplir con requisitos específicos de 
                    cotización y edad, además de tener una base reguladora elevada.
                  </p>
                </div>

                {/* Cuantía Máxima */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-red-600" />
                    Cuantía Máxima 2024
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Pensión máxima mensual:</strong> 3.175,49€/mes</li>
                    <li>• <strong>Pensión máxima anual:</strong> 44.456,86€/año (14 pagas)</li>
                    <li>• <strong>Aumento respecto 2023:</strong> Revalorización según IPC</li>
                    <li>• <strong>Límite base reguladora:</strong> 4.720,50€/mes</li>
                  </ul>
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

                {/* Cálculo */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo se Calcula la Pensión</h2>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-gray-700 mb-4">
                      El cálculo de la pensión de jubilación se realiza en varios pasos:
                    </p>
                    <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                      <li><strong>Base Reguladora:</strong> Se calcula con las bases de cotización de los últimos 25 años (300 meses), aplicando coeficientes de actualización según el IPC.</li>
                      <li><strong>Porcentaje:</strong> Se aplica un porcentaje según los años cotizados:
                        <ul className="ml-6 mt-2 space-y-1">
                          <li>• 15 años cotizados: 50% de la base reguladora</li>
                          <li>• A partir de 15 años: 2,27% por cada año adicional entre el 16 y el 25</li>
                          <li>• A partir de 25 años: 2% por cada año adicional</li>
                          <li>• Máximo: 100% con 38,5 años cotizados</li>
                        </ul>
                      </li>
                      <li><strong>Coeficientes reductores:</strong> Si te jubilas antes de la edad legal, se aplican coeficientes reductores que disminuyen la pensión.</li>
                      <li><strong>Límite máximo:</strong> La pensión no puede superar los 3.175,49€/mes en 2024.</li>
                    </ol>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Solicitar la Pensión de Jubilación</h2>
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
                            <li>• <strong>Planifica con antelación:</strong> Solicita tu pensión 3 meses antes</li>
                            <li>• <strong>Consulta tu vida laboral:</strong> Verifica todas tus cotizaciones</li>
                            <li>• <strong>Calcula tu pensión:</strong> Usa el simulador de la Seguridad Social</li>
                            <li>• <strong>Revisa tu base reguladora:</strong> Asegúrate de que sea correcta</li>
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
                            <li>• <strong>Edad de jubilación:</strong> Varía según año de nacimiento</li>
                            <li>• <strong>Años cotizados:</strong> Necesitas 38,5 años para el máximo</li>
                            <li>• <strong>Coeficientes reductores:</strong> Reducen la pensión si te jubilas antes</li>
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
                    <Phone className="w-6 h-6 mr-2 text-red-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre la pensión de jubilación:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono INSS:</strong> 901 50 20 50</li>
                    <li>• <strong>Web oficial:</strong> sede.seg-social.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                    <li>• <strong>Simulador:</strong> Disponible en la sede electrónica</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-red-600 to-orange-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-red-100 mb-6">
                    Consulta otros tipos de pensiones o explora nuestras guías
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/pensiones"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Ver Todas las Pensiones
                    </Link>
                    <Link
                      href="/pensiones/viudedad"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Pensión de Viudedad
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

