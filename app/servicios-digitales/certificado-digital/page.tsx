import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  ShieldCheck,
  Download,
  Clock,
  CheckCircle,
  Globe,
  Smartphone,
  Building,
  Mail,
  Info,
  ArrowLeft,
  FileText,
  Lock,
  KeyRound,
  User
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificado Digital FNMT: Cómo Obtenerlo e Instalarlo Paso a Paso 2024 | Web Cursos SEPE",
  description:
    "Guía completa para solicitar, descargar e instalar el certificado digital FNMT. Certificado digital para trámites online con validez legal.",
  keywords: [
    "certificado digital",
    "certificado digital fnmt",
    "certificado digital instalacion",
    "certificado digital solicitar",
    "certificado digital descargar"
  ],
  alternates: {
    canonical: "/servicios-digitales/certificado-digital"
  }
};

const tiposCertificado = [
  {
    title: "Certificado de Persona Física",
    description: "Para particulares. Permite firmar documentos y realizar trámites online con validez legal.",
    icon: User,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Certificado de Representante",
    description: "Para representantes legales de empresas. Permite actuar en nombre de la entidad.",
    icon: Building,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Certificado de Sello de Entidad",
    description: "Para empresas y entidades. Permite sellar documentos oficiales de la organización.",
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const pasosSolicitud = [
  {
    title: "Solicitud Online",
    icon: Globe,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Accede a la web de la FNMT (sede.fnmt.gob.es).",
      "Haz clic en 'Obtener Certificado Software' o 'Obtener Certificado en Navegador'.",
      "Introduce tu DNI/NIE y tu fecha de nacimiento.",
      "Indica un correo electrónico de contacto.",
      "Descarga e instala el software 'AutoFirma' si es necesario."
    ]
  },
  {
    title: "Acreditación Presencial",
    icon: Building,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Acude a una Oficina de Acreditación de Identidad (OACI) con tu DNI/NIE.",
      "Presenta el código de solicitud que recibiste por email.",
      "El funcionario verifica tu identidad y activa el certificado.",
      "Recibirás una confirmación por email cuando el certificado esté listo."
    ]
  },
  {
    title: "Descarga e Instalación",
    icon: Download,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Accede de nuevo a sede.fnmt.gob.es con tu DNI/NIE.",
      "Haz clic en 'Descargar Certificado'.",
      "Selecciona el certificado que deseas descargar.",
      "El certificado se instalará automáticamente en tu navegador.",
      "Verifica la instalación accediendo a un servicio que requiera certificado."
    ]
  }
];

const ventajas = [
  {
    title: "Validez legal",
    text: "Los documentos firmados con certificado digital tienen la misma validez que los firmados manualmente.",
    icon: ShieldCheck,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Firma electrónica",
    text: "Puedes firmar documentos PDF, contratos y trámites administrativos de forma segura.",
    icon: FileText,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Sin desplazamientos",
    text: "Realiza trámites con la Administración sin necesidad de acudir presencialmente.",
    icon: Globe,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Seguridad",
    text: "El certificado digital garantiza la autenticidad e integridad de los documentos firmados.",
    icon: Lock,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Copia de seguridad",
    text: "Haz una copia de seguridad de tu certificado digital y guárdala en un lugar seguro.",
    icon: Download,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Vigencia del certificado",
    text: "Los certificados tienen una vigencia limitada (generalmente 4 años). Renueva antes de que expire.",
    icon: Clock,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Exportar certificado",
    text: "Puedes exportar tu certificado a otros dispositivos o navegadores si lo necesitas.",
    icon: KeyRound,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Problemas de instalación",
    text: "Si tienes problemas, verifica que tu navegador esté actualizado y que no tengas bloqueadores.",
    icon: Info,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Cuánto tarda en obtenerse el certificado digital?",
    respuesta:
      "La solicitud online es inmediata. La acreditación presencial suele tardar unos minutos. Una vez acreditado, la descarga es instantánea."
  },
  {
    pregunta: "¿Dónde puedo acreditarme presencialmente?",
    respuesta:
      "Puedes acreditarte en cualquier Oficina de Acreditación de Identidad (OACI). Encuentra la más cercana en la web de la FNMT."
  },
  {
    pregunta: "¿El certificado digital es gratuito?",
    respuesta:
      "Sí, el certificado digital de persona física es gratuito. Solo necesitas acreditar tu identidad presencialmente."
  },
  {
    pregunta: "¿Puedo usar el certificado en varios dispositivos?",
    respuesta:
      "Sí, puedes exportar e importar el certificado en diferentes dispositivos y navegadores."
  },
  {
    pregunta: "¿Qué hacer si expira el certificado?",
    respuesta:
      "Debes renovarlo antes de que expire. El proceso es similar al de solicitud inicial, pero más rápido si ya tienes uno activo."
  }
];

export default function CertificadoDigitalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-emerald-700 to-teal-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/servicios-digitales"
                  className="flex items-center text-emerald-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Servicios Digitales
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Certificado Digital FNMT
                  </h1>
                  <div className="flex items-center gap-6 text-emerald-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-emerald-100">
                Guía completa para solicitar, descargar e instalar el certificado digital FNMT. Certificado digital
                para firmar documentos y realizar trámites online con validez legal.
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
                  <Link href="/categorias/servicios-digitales" className="text-blue-600 hover:text-blue-800">
                    Servicios Digitales
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Certificado Digital FNMT</li>
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
                    El certificado digital FNMT (Fábrica Nacional de Moneda y Timbre) es un documento electrónico
                    que te permite identificarte y firmar documentos de forma segura en internet. Tiene la misma
                    validez legal que una firma manuscrita y es imprescindible para muchos trámites con la
                    Administración.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    El proceso consta de tres fases: solicitud online, acreditación presencial de identidad y
                    descarga del certificado. A continuación te explicamos cada paso en detalle.
                  </p>
                </div>

                {/* Tipos de certificado */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de certificado digital</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {tiposCertificado.map((tipo, index) => {
                      const Icon = tipo.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors"
                        >
                          <div className="flex flex-col items-center mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${tipo.gradient} text-white mb-3`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 text-center">{tipo.title}</h3>
                            <p className="text-gray-600 text-sm text-center mt-2">{tipo.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pasos de solicitud */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo obtener el certificado digital</h2>
                  <div className="space-y-8">
                    {pasosSolicitud.map((paso, index) => {
                      const Icon = paso.icon;
                      return (
                        <div
                          key={paso.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${paso.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-emerald-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{paso.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {paso.pasos.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-emerald-700 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Ventajas */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventajas del certificado digital</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ventajas.map((ventaja, index) => {
                      const Icon = ventaja.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors ${ventaja.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-emerald-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{ventaja.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{ventaja.text}</p>
                        </div>
                      );
                    })}
                  </div>
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
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors ${recomendacion.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-emerald-700" />
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
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors"
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

