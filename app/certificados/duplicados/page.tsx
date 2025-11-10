import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileText,
  Printer,
  Download,
  Clock,
  CheckCircle,
  Mail,
  Building,
  Globe,
  Smartphone,
  AlertCircle,
  Info,
  ArrowLeft,
  FileCheck,
  Copy
} from "lucide-react";

export const metadata: Metadata = {
  title: "Duplicados y Justificantes SEPE: Cómo Solicitarlos Online 2024 | Web Cursos SEPE",
  description:
    "Guía para obtener duplicados de resoluciones, justificantes de cita, certificados y documentos oficiales del SEPE. Solicitud online y presencial.",
  keywords: [
    "duplicados sepe",
    "justificantes sepe",
    "duplicado resolución sepe",
    "justificante cita sepe",
    "documentos duplicados"
  ],
  alternates: {
    canonical: "/certificados/duplicados"
  }
};

const tiposDuplicados = [
  {
    title: "Resoluciones de Prestaciones",
    description: "Duplicados de resoluciones de concesión, denegación o extinción de prestaciones.",
    icon: FileCheck,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Justificantes de Cita",
    description: "Duplicados de justificantes de cita previa para oficinas del SEPE.",
    icon: Clock,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Certificados Perdidos",
    description: "Duplicados de certificados de prestaciones, situación laboral o documentos oficiales.",
    icon: Copy,
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Documentos de Trámites",
    description: "Duplicados de solicitudes, comunicaciones o documentos presentados en trámites.",
    icon: FileText,
    gradient: "from-purple-500 to-purple-600"
  }
];

const canales = [
  {
    title: "Sede Electrónica SEPE",
    icon: Globe,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Accede a sede.sepe.gob.es e identifícate con certificado digital, DNIe o Cl@ve.",
      "Entra en la sección 'Ciudadanos' > 'Mi Carpeta' o 'Mis Trámites'.",
      "Busca el documento que necesitas duplicar en tu historial de trámites.",
      "Haz clic en 'Descargar' o 'Obtener duplicado' si está disponible.",
      "Si no aparece, accede a 'Solicitud de Documentos' y completa el formulario."
    ]
  },
  {
    title: "Oficina de Empleo",
    icon: Building,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Solicita cita previa en tu oficina de empleo más cercana.",
      "Acude con tu DNI o NIE y la tarjeta de demanda de empleo.",
      "Indica el tipo de documento que necesitas duplicar y, si es posible, la fecha.",
      "Rellena el formulario de solicitud de duplicado.",
      "El duplicado se puede entregar en el acto o remitirse a domicilio en 5-10 días hábiles."
    ]
  },
  {
    title: "Teléfono de Atención",
    icon: Mail,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Llama al 901 11 99 99 (línea gratuita) de lunes a viernes de 9:00 a 14:00.",
      "Identifícate con tus datos personales y número de DNI o NIE.",
      "Indica el tipo de documento que necesitas duplicar.",
      "El operador te informará sobre el procedimiento y plazos.",
      "En algunos casos, podrán enviártelo por correo electrónico o postal."
    ]
  }
];

const documentacion = [
  "DNI, NIE o pasaporte en vigor.",
  "Tarjeta de demanda de empleo (si es posible).",
  "Datos del documento original: tipo, fecha aproximada, número de expediente (si lo conoces).",
  "Justificante de pago de tasas (si aplica).",
  "Autorización y copia del DNI si actúa un representante."
];

const recomendaciones = [
  {
    title: "Plazos de entrega",
    text: "Los duplicados online son instantáneos. Los presenciales pueden tardar entre 5 y 10 días hábiles.",
    icon: Clock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Conserva los originales",
    text: "Guarda siempre copias digitales de tus documentos importantes para evitar solicitar duplicados.",
    icon: Download,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Validez de los duplicados",
    text: "Los duplicados tienen la misma validez que los originales y pueden utilizarse en trámites oficiales.",
    icon: FileCheck,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Gratuito en la mayoría de casos",
    text: "La mayoría de duplicados son gratuitos, excepto algunos certificados específicos que pueden tener tasa.",
    icon: Info,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Cuánto tarda en llegar un duplicado?",
    respuesta:
      "Los duplicados descargados online son instantáneos. Los solicitados en oficina pueden tardar entre 5 y 10 días hábiles en entregarse."
  },
  {
    pregunta: "¿Tengo que pagar por un duplicado?",
    respuesta:
      "La mayoría de duplicados son gratuitos. Solo algunos certificados específicos pueden tener tasa. Consulta en tu oficina o en la sede electrónica."
  },
  {
    pregunta: "¿Puedo solicitar un duplicado de un documento antiguo?",
    respuesta:
      "Sí, puedes solicitar duplicados de documentos antiguos siempre que figuren en tu historial. Los documentos muy antiguos pueden no estar disponibles digitalmente."
  },
  {
    pregunta: "¿El duplicado tiene la misma validez que el original?",
    respuesta:
      "Sí, los duplicados oficiales expedidos por el SEPE tienen la misma validez legal que los documentos originales."
  },
  {
    pregunta: "¿Puedo solicitar un duplicado si perdí el documento hace tiempo?",
    respuesta:
      "Sí, siempre que el documento haya sido expedido por el SEPE y figure en tu historial. No hay límite de tiempo para solicitar duplicados."
  }
];

export default function DuplicadosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-cyan-700 to-teal-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/certificados-documentos"
                  className="flex items-center text-cyan-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Certificados
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Printer className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Duplicados y Justificantes SEPE
                  </h1>
                  <div className="flex items-center gap-6 text-cyan-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>7 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-cyan-100">
                Guía completa para solicitar duplicados de resoluciones, justificantes de cita, certificados y
                documentos oficiales del SEPE. Solicitud online, presencial y por teléfono.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm max-w-4xl mx-auto">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/categorias/certificados-documentos" className="text-blue-600 hover:text-blue-800">
                    Certificados y Documentos
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Duplicados y Justificantes</li>
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
                    Si has perdido o necesitas un duplicado de algún documento oficial del SEPE (resoluciones,
                    justificantes de cita, certificados, etc.), puedes solicitarlo de forma sencilla a través de
                    varios canales. Los duplicados tienen la misma validez legal que los documentos originales y
                    pueden utilizarse en cualquier trámite oficial.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    La mayoría de duplicados son gratuitos y pueden obtenerse de forma instantánea si están disponibles
                    en la sede electrónica, o en un plazo de 5-10 días hábiles si se solicitan en oficina. A
                    continuación te explicamos los tipos de duplicados disponibles y cómo solicitarlos.
                  </p>
                </div>

                {/* Tipos de duplicados */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de duplicados disponibles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tiposDuplicados.map((tipo, index) => {
                      const Icon = tipo.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${tipo.gradient} text-white mr-4`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{tipo.title}</h3>
                              <p className="text-gray-600 text-sm">{tipo.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Canales */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo solicitar un duplicado</h2>
                  <div className="space-y-8">
                    {canales.map((canal, index) => {
                      const Icon = canal.icon;
                      return (
                        <div
                          key={canal.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${canal.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-cyan-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{canal.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {canal.pasos.map((paso, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-cyan-700 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{paso}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Documentación necesaria */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentación necesaria</h2>
                  <ul className="space-y-4 text-gray-700 bg-gray-50 rounded-xl p-6">
                    {documentacion.map((doc, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-cyan-700 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recomendaciones */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recomendaciones importantes</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {recomendaciones.map((recomendacion, index) => {
                      const Icon = recomendacion.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors ${recomendacion.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-cyan-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{recomendacion.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{recomendacion.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* FAQ */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors"
                      >
                        <summary className="flex items-center justify-between cursor-pointer">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.pregunta}</h3>
                          <div className="flex-shrink-0">
                            <ArrowLeft className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                          </div>
                        </summary>
                        <p className="mt-4 text-gray-600 leading-relaxed">{faq.respuesta}</p>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Ad Banner */}
                <div className="mt-12">
                  <AdBanner />
                </div>
              </div>

              {/* Sidebar derecha */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="right" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

