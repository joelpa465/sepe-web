import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  RefreshCw, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar,
  Phone,
  Computer,
  Building
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Sellar el Paro - Renovar Demanda de Empleo 2024 | Web Cursos SEPE",
  description: "Guía completa para sellar el paro: cómo renovar tu demanda de empleo online o presencial. Pasos, requisitos y documentación necesaria.",
  keywords: ["sellar paro", "renovar demanda empleo", "sello paro", "renovar desempleo", "sellar paro online"],
  alternates: {
    canonical: "/tramites/sellar-paro",
  },
};

const steps = [
  {
    number: 1,
    title: "Acceder a la Sede Electrónica del SEPE",
    description: "Para renovar tu demanda de empleo online, debes acceder a la sede electrónica del SEPE.",
    details: [
      "Entra en sede.sepe.gob.es",
      "Identifícate con certificado digital, DNI electrónico o Cl@ve",
      "Si no tienes identificación digital, puedes usar el sistema sin certificado",
      "Necesitarás tu DNI/NIE y tu número de demanda de empleo"
    ],
    icon: Computer
  },
  {
    number: 2,
    title: "Seleccionar Renovación de Demanda",
    description: "Una vez dentro, busca la opción de renovación de demanda de empleo.",
    details: [
      "Busca en el menú la sección 'Demanda de Empleo'",
      "Selecciona 'Renovar Demanda de Empleo'",
      "Verifica que tus datos personales estén correctos",
      "Confirma tu disponibilidad para trabajar"
    ],
    icon: FileText
  },
  {
    number: 3,
    title: "Completar el Formulario de Renovación",
    description: "Rellena todos los campos del formulario de renovación.",
    details: [
      "Confirma tu situación laboral actual",
      "Indica tu disponibilidad para trabajar",
      "Actualiza tu perfil profesional si ha cambiado",
      "Revisa y confirma todos los datos antes de enviar"
    ],
    icon: CheckCircle
  },
  {
    number: 4,
    title: "Confirmar la Renovación",
    description: "Una vez completado el formulario, confirma la renovación.",
    details: [
      "Revisa toda la información antes de confirmar",
      "Confirma la renovación de tu demanda",
      "Guarda el justificante de renovación",
      "Recibirás confirmación por correo electrónico o SMS"
    ],
    icon: CheckCircle
  },
  {
    number: 5,
    title: "Renovación Presencial (Alternativa)",
    description: "Si prefieres renovar presencialmente, acude a tu oficina del SEPE.",
    details: [
      "Solicita cita previa en sede.sepe.gob.es",
      "Acude a la oficina con tu DNI/NIE",
      "Presenta tu tarjeta de demanda de empleo si la tienes",
      "El personal te ayudará a renovar tu demanda"
    ],
    icon: Building
  }
];

const requisitos = [
  "Estar inscrito como demandante de empleo en el SEPE",
  "Tener tu número de demanda de empleo",
  "Estar en situación legal para trabajar en España",
  "Disponer de DNI o NIE en vigor",
  "No haber encontrado empleo desde la última renovación",
  "Mantener la disponibilidad para trabajar"
];

export default function SellarParoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/tramites-sepe"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Trámites SEPE
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Sellar el Paro
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xl text-blue-100">
                Guía completa para renovar tu demanda de empleo (sellar el paro) de forma online o presencial. 
                Es obligatorio para continuar cobrando las prestaciones por desempleo.
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
                <li className="text-gray-700">Sellar Paro</li>
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
                    Sellar el paro, también conocido como renovar la demanda de empleo, es un trámite obligatorio 
                    que debes realizar periódicamente para mantener activa tu condición de demandante de empleo y 
                    continuar cobrando las prestaciones por desempleo.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Este trámite puede realizarse de forma online (más rápido y cómodo) o presencialmente en tu 
                    oficina del SEPE. Te explicamos paso a paso cómo hacerlo.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                    Requisitos para Renovar
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

                {/* Frecuencia */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Cuándo debo Sellar el Paro?</h2>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-gray-700 mb-4">
                      La renovación de la demanda de empleo debe realizarse periódicamente:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Cada 3 meses:</strong> Si estás cobrando prestación contributiva</li>
                      <li>• <strong>Cada mes:</strong> Si estás cobrando subsidio por desempleo</li>
                      <li>• <strong>Plazo:</strong> Debes renovar dentro del mes correspondiente</li>
                      <li>• <strong>Importante:</strong> Si no renuevas, se suspenderá el pago de la prestación</li>
                    </ul>
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo Sellar el Paro Online</h2>
                  <div className="space-y-12">
                    {steps.slice(0, 4).map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < 3 && (
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

                {/* Renovación Presencial */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Renovación Presencial</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    {steps.slice(4).map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg">
                              <Icon className="w-6 h-6" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-700 mb-3">
                              {step.description}
                            </p>
                            <ul className="space-y-2">
                              {step.details?.map((detail, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
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
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-start">
                        <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-3">Consejos Útiles</h3>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• <strong>Renueva online:</strong> Es más rápido y cómodo</li>
                            <li>• <strong>No esperes al último día:</strong> Renueva con antelación</li>
                            <li>• <strong>Guarda el justificante:</strong> Consérvalo como comprobante</li>
                            <li>• <strong>Actualiza tu perfil:</strong> Mantén tu perfil profesional actualizado</li>
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
                            <li>• <strong>Plazo obligatorio:</strong> No olvides renovar dentro del plazo</li>
                            <li>• <strong>Suspensión de pago:</strong> Si no renuevas, se suspenderá el pago</li>
                            <li>• <strong>Disponibilidad:</strong> Debes mantenerte disponible para trabajar</li>
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
                    Si tienes dudas sobre cómo sellar el paro:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                    <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                    <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                  </ul>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-blue-100 mb-6">
                    Consulta otros trámites SEPE o explora nuestros tutoriales
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/categorias/tramites-sepe"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Ver Todos los Trámites
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

