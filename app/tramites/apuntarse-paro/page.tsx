import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  CheckCircle, 
  Clock, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  Computer,
  Building,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Apuntarse al Paro - Darse de Alta como Demandante de Empleo 2024 | Web Cursos SEPE",
  description: "Guía completa para darte de alta como demandante de empleo y solicitar prestación por desempleo. Pasos, requisitos y documentación necesaria.",
  keywords: ["apuntarse al paro", "darse de alta paro", "demandante empleo", "inscribirse paro", "alta demandante empleo"],
  alternates: {
    canonical: "/tramites/apuntarse-paro",
  },
};

const steps = [
  {
    number: 1,
    title: "Preparar la Documentación Necesaria",
    description: "Reúne todos los documentos antes de darte de alta.",
    details: [
      "DNI o NIE en vigor",
      "Número de Seguridad Social (NAF)",
      "Certificado de empresa o finiquito",
      "Última nómina (si la tienes)",
      "Teléfono móvil y email"
    ],
    icon: FileText
  },
  {
    number: 2,
    title: "Acceder a la Sede Electrónica del SEPE",
    description: "Ve a la web oficial del SEPE para darte de alta online.",
    details: [
      "Accede a sede.sepe.gob.es",
      "Selecciona 'Alta como Demandante de Empleo'",
      "Identifícate con certificado digital, DNI electrónico o Cl@ve",
      "Si no tienes identificación digital, puedes usar el sistema sin certificado"
    ],
    icon: Computer
  },
  {
    number: 3,
    title: "Completar el Formulario de Alta",
    description: "Rellena todos los datos del formulario de alta.",
    details: [
      "Datos personales (nombre, DNI, dirección)",
      "Datos de contacto (teléfono, email)",
      "Datos profesionales y experiencia laboral",
      "Perfil profesional y preferencias laborales",
      "Disponibilidad para trabajar"
    ],
    icon: User
  },
  {
    number: 4,
    title: "Solicitar la Prestación por Desempleo",
    description: "Si cumples requisitos, solicita la prestación por desempleo.",
    details: [
      "Completa la solicitud de prestación por desempleo",
      "Adjunta la documentación necesaria",
      "Indica tu cuenta bancaria para el cobro",
      "Confirma todos los datos antes de enviar"
    ],
    icon: CheckCircle
  },
  {
    number: 5,
    title: "Confirmar el Alta y Guardar el Justificante",
    description: "Una vez completado, confirma el alta y guarda el justificante.",
    details: [
      "Revisa toda la información antes de confirmar",
      "Confirma el alta como demandante de empleo",
      "Guarda el número de demanda de empleo",
      "Recibirás confirmación por correo electrónico o SMS"
    ],
    icon: CheckCircle
  }
];

const requisitos = [
  "Tener más de 16 años",
  "Estar en situación legal para trabajar en España",
  "Estar en situación de desempleo",
  "No tener trabajo por cuenta ajena o propia",
  "Disponer de DNI o NIE en vigor",
  "Tener número de Seguridad Social (NAF)"
];

export default function ApuntarseParoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/tramites-sepe"
                  className="flex items-center text-green-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Trámites SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Apuntarse al Paro
                  </h1>
                  <div className="flex items-center gap-6 text-green-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>12 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-green-100">
                Guía completa para darte de alta como demandante de empleo y solicitar prestación por desempleo. 
                Pasos detallados, requisitos y documentación necesaria.
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
                <li className="text-gray-700">Apuntarse al Paro</li>
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
                    Darse de alta como demandante de empleo en el SEPE es el primer paso para acceder a las 
                    prestaciones por desempleo y buscar trabajo a través de los servicios públicos de empleo.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este trámite puede realizarse online (más rápido y cómodo) o presencialmente en tu oficina 
                    del SEPE. Te explicamos paso a paso cómo hacerlo.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-green-600" />
                    Requisitos para Darse de Alta
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

                {/* Plazo */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Plazo para Darse de Alta</h2>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <p className="text-gray-700 mb-4">
                      Es importante darse de alta en el plazo establecido:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Plazo máximo:</strong> 15 días desde el cese de actividad</li>
                      <li>• <strong>Importante:</strong> Si te das de alta después del plazo, puedes perder días de prestación</li>
                      <li>• <strong>Recomendación:</strong> Darte de alta cuanto antes para no perder días</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso Paso a Paso</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-green-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
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
                            <li>• <strong>Plazo de 15 días:</strong> Darte de alta cuanto antes</li>
                            <li>• <strong>Documentación completa:</strong> Reúne todos los documentos antes</li>
                            <li>• <strong>Online es más rápido:</strong> El proceso online es más rápido y cómodo</li>
                            <li>• <strong>Guarda el número:</strong> Consérvalo para futuras renovaciones</li>
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
                            <li>• <strong>No esperes:</strong> Darte de alta después del plazo puede costarte días</li>
                            <li>• <strong>Documentación:</strong> Asegúrate de tener toda la documentación</li>
                            <li>• <strong>Datos correctos:</strong> Verifica que todos los datos sean correctos</li>
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
                    <Phone className="w-6 h-6 mr-2 text-green-600" />
                    Información de Contacto
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes dudas sobre cómo apuntarte al paro:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-green-100 mb-6">
                    Consulta otros trámites SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/tramites-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                    >
                      Ver Todos los Trámites
                    </Link>
                    <Link
                      href="/prestaciones/desempleo"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Prestación por Desempleo
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

