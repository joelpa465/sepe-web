import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Link from "next/link";
import { 
  XCircle, 
  Clock, 
  CheckCircle, 
  ArrowLeft,
  FileText,
  AlertCircle,
  Lightbulb,
  Calendar
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cómo Anular Cita Previa SEPE - Guía Paso a Paso 2024",
  description: "Tutorial completo para anular una cita previa en el SEPE. Pasos para cancelar tu cita online, documentación necesaria y consejos prácticos.",
  keywords: ["anular cita previa sepe", "cancelar cita sepe", "anular cita inem", "cancelar cita previa"],
  alternates: {
    canonical: "/tutoriales/anular-cita-sepe",
  },
  openGraph: {
    title: "Cómo Anular Cita Previa SEPE - Guía Paso a Paso",
    description: "Aprende a anular tu cita previa en el SEPE de forma sencilla con nuestra guía detallada.",
    type: "article",
  },
};

const steps = [
  {
    number: 1,
    title: "Acceder a la Sede Electrónica del SEPE",
    description: "Entra en el portal oficial del SEPE para gestionar tu cita.",
    details: [
      "Visita www.sepe.es o sede.sepe.gob.es",
      "Haz clic en 'Cita Previa' o 'Consultar/Anular Cita'",
      "Inicia sesión con tus credenciales (Cl@ve, certificado digital o DNI electrónico)"
    ],
    icon: FileText
  },
  {
    number: 2,
    title: "Localizar tu Cita",
    description: "Busca la cita que deseas anular en el sistema.",
    details: [
      "Introduce tu DNI/NIE",
      "Ingresa el número localizador que recibiste al confirmar la cita",
      "Si no tienes el número localizador, busca por fecha y oficina"
    ],
    icon: Calendar
  },
  {
    number: 3,
    title: "Seleccionar la Opción de Anulación",
    description: "Elige anular la cita desde el listado de tus citas pendientes.",
    details: [
      "Localiza la cita que quieres cancelar",
      "Haz clic en el botón 'Anular' o 'Cancelar'",
      "Confirma que deseas anular la cita"
    ],
    icon: XCircle
  },
  {
    number: 4,
    title: "Confirmar la Anulación",
    description: "Verifica que la anulación se haya realizado correctamente.",
    details: [
      "Revisa el mensaje de confirmación",
      "Recibirás un SMS o email confirmando la anulación",
      "La cita quedará liberada para otros usuarios",
      "Guarda el comprobante de anulación por si lo necesitas"
    ],
    icon: CheckCircle
  }
];

export default function AnularCitaSepePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/cita-previa"
                  className="flex items-center text-red-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Citas Previas
                </Link>
              </div>
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mr-4">
                  <XCircle className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cómo Anular Cita Previa SEPE
                  </h1>
                  <div className="flex items-center gap-6 text-red-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>5 min de lectura</span>
                    </div>
                    <span>•</span>
                    <span>Nivel: Fácil</span>
                  </div>
                </div>
              </div>
              <p className="text-xl text-red-100">
                Guía paso a paso para anular o cancelar una cita previa en el SEPE de forma sencilla. 
                Aprende cómo liberar tu cita para que otros usuarios puedan utilizarla.
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
                <li><Link href="/tutoriales" className="text-blue-600 hover:text-blue-800">Tutoriales</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li><Link href="/categorias/cita-previa" className="text-blue-600 hover:text-blue-800">Cita Previa</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Anular Cita SEPE</li>
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
                    Si necesitas anular una cita previa que ya has solicitado en el SEPE, es importante hacerlo 
                    con la mayor antelación posible. Esto permite que otros usuarios puedan aprovechar esa cita 
                    y libera recursos del sistema.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    El proceso de anulación es sencillo y se realiza completamente online a través de la sede 
                    electrónica del SEPE. Necesitarás tu DNI/NIE y el número localizador que recibiste al confirmar la cita.
                  </p>
                </div>

                {/* Requisitos */}
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
                    Documentación Necesaria
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>DNI o NIE:</strong> Documento de identidad con el que solicitaste la cita</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Número localizador:</strong> Código que recibiste por SMS o email al confirmar la cita</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Credenciales de acceso:</strong> Cl@ve, certificado digital o DNI electrónico</span>
                    </li>
                  </ul>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Proceso Paso a Paso</h2>
                  <div className="space-y-12">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {/* Connection line */}
                          {index < steps.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-red-200 -translate-y-12"></div>
                          )}
                          
                          <div className="flex gap-8">
                            {/* Step number */}
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-600 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            
                            {/* Step content */}
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

                {/* Banner publicitario */}
                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos Importantes</h2>
                  
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                    <div className="flex items-start">
                      <Lightbulb className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-3">Recomendaciones</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Anula con antelación:</strong> Si sabes que no podrás asistir, anula la cita lo antes posible para que otros usuarios puedan aprovecharla</li>
                          <li>• <strong>Guarda el número localizador:</strong> Es esencial para poder anular la cita. Si lo perdiste, contacta con el SEPE</li>
                          <li>• <strong>No olvides anular:</strong> Si no puedes asistir y no anulas, puede afectar a futuras solicitudes de cita</li>
                          <li>• <strong>Verifica la anulación:</strong> Asegúrate de recibir la confirmación de anulación por SMS o email</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qué hacer si no puedes anular */}
                <div className="bg-gray-50 rounded-xl p-6 mb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-orange-600" />
                    ¿No puedes anular online?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes problemas para anular la cita online o no encuentras el número localizador, 
                    puedes contactar con el SEPE por teléfono en el <strong>901 11 99 99</strong> y te ayudarán 
                    a cancelar la cita. Ten a mano tu DNI/NIE y la fecha y hora de la cita que deseas anular.
                  </p>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">¿Necesitas más información?</h3>
                  <p className="text-red-100 mb-6">
                    Consulta otros tutoriales relacionados con citas previas en el SEPE
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/tutoriales/cita-previa-inem"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Cómo Solicitar Cita Previa
                    </Link>
                    <Link
                      href="/categorias/cita-previa"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ver Todas las Citas Previas
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

