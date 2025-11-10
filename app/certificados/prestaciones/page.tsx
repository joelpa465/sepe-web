import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileText,
  Download,
  ShieldCheck,
  Clock,
  CheckCircle,
  AlertCircle,
  Globe,
  Smartphone,
  Building,
  Mail,
  Info,
  ArrowLeft,
  FileCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificado de Prestaciones SEPE: Cómo Descargarlo Online 2024 | Web Cursos SEPE",
  description:
    "Guía completa para obtener el certificado de prestaciones SEPE online: prestación por desempleo, ayudas, subsidios. Descarga instantánea con certificado digital o Cl@ve.",
  keywords: [
    "certificado prestaciones sepe",
    "certificado desempleo",
    "certificado sepe online",
    "prestaciones sepe descargar",
    "certificado subsidio"
  ],
  alternates: {
    canonical: "/certificados/prestaciones"
  }
};

const tiposCertificados = [
  {
    title: "Prestación por Desempleo",
    description: "Acredita las prestaciones por desempleo recibidas, períodos y cuantías.",
    icon: FileCheck,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Subsidios y Ayudas",
    description: "Certifica subsidios, ayudas familiares y otras prestaciones no contributivas.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Situación de Alta en el SEPE",
    description: "Justifica tu situación como demandante de empleo o beneficiario activo.",
    icon: Building,
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Historial de Prestaciones",
    description: "Informe completo de todas las prestaciones recibidas a lo largo del tiempo.",
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
      "Entra en la sección 'Ciudadanos' > 'Certificados e Informes'.",
      "Selecciona el tipo de certificado que necesitas (prestación, subsidio, situación).",
      "Indica el período que deseas certificar (últimos 12 meses, últimos 24 meses, histórico).",
      "Descarga el certificado en formato PDF con código seguro de verificación (CSV)."
    ]
  },
  {
    title: "App Móvil SEPE",
    icon: Smartphone,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Descarga la aplicación oficial del SEPE desde App Store o Google Play.",
      "Inicia sesión con tu certificado digital o Cl@ve.",
      "Accede a la sección 'Mis Certificados' o 'Documentos'.",
      "Selecciona el certificado y descárgalo directamente en tu dispositivo.",
      "Puedes compartirlo por email o guardarlo en tu dispositivo."
    ]
  },
  {
    title: "Oficina de Empleo",
    icon: Building,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Solicita cita previa en tu oficina de empleo más cercana.",
      "Acude con tu DNI o NIE y la tarjeta de demanda de empleo.",
      "Solicita verbalmente o mediante formulario el certificado que necesitas.",
      "El certificado se puede entregar en el acto o remitirse a domicilio.",
      "En caso de urgencia, puedes solicitar un justificante provisional."
    ]
  }
];

const usos = [
  {
    title: "Trámites Bancarios",
    text: "Para solicitar préstamos, hipotecas o créditos, los bancos suelen exigir certificados de ingresos.",
    icon: FileCheck,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Ayudas y Subvenciones",
    text: "Muchas ayudas sociales o autonómicas requieren acreditar la situación de desempleo o prestaciones.",
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Renovación de Permisos",
    text: "Para renovar permisos de residencia o trabajo, algunas administraciones piden certificados del SEPE.",
    icon: Clock,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Justificación de Ingresos",
    text: "Para declaraciones de renta, solicitudes de vivienda social o ayudas familiares.",
    icon: Info,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Validez del certificado",
    text: "Los certificados suelen tener validez de 90 días. Descarga uno reciente antes de presentarlo.",
    icon: Clock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Código Seguro de Verificación",
    text: "Todos los certificados incluyen un CSV que permite verificar su autenticidad online.",
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Descarga instantánea",
    text: "Los certificados online se generan al momento y están disponibles de forma inmediata.",
    icon: Download,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Documentos históricos",
    text: "Puedes solicitar certificados de períodos pasados, aunque hayan finalizado las prestaciones.",
    icon: FileText,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Cuánto tarda en generarse el certificado online?",
    respuesta:
      "El certificado se genera de forma instantánea una vez completada la solicitud. Puedes descargarlo inmediatamente en formato PDF."
  },
  {
    pregunta: "¿Necesito certificado digital para obtenerlo?",
    respuesta:
      "Sí, necesitas certificado digital, DNIe o sistema Cl@ve para acceder a la sede electrónica del SEPE y descargar certificados."
  },
  {
    pregunta: "¿El certificado tiene validez limitada?",
    respuesta:
      "Sí, la mayoría de certificados tienen validez de 90 días desde su emisión. Consulta el plazo específico con la entidad que lo solicita."
  },
  {
    pregunta: "¿Puedo obtener un certificado de prestaciones ya finalizadas?",
    respuesta:
      "Sí, puedes solicitar certificados históricos de prestaciones que hayan finalizado, indicando el período que deseas certificar."
  },
  {
    pregunta: "¿Qué información incluye el certificado?",
    respuesta:
      "Incluye el tipo de prestación, período de percepción, cuantía mensual, fecha de inicio y fin, y situación actual del beneficiario."
  }
];

export default function CertificadoPrestacionesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-700 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/certificados-documentos"
                  className="flex items-center text-indigo-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Certificados
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Certificado de Prestaciones SEPE
                  </h1>
                  <div className="flex items-center gap-6 text-indigo-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-indigo-100">
                Aprende a descargar el certificado de prestaciones SEPE online: prestación por desempleo, subsidios,
                ayudas y situación laboral. Guía paso a paso con certificado digital o Cl@ve.
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
                <li className="text-gray-700">Certificado de Prestaciones</li>
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
                    El certificado de prestaciones SEPE acredita las prestaciones por desempleo, subsidios y ayudas
                    que has recibido o estás percibiendo. Es un documento oficial imprescindible para trámites
                    bancarios, solicitudes de ayudas, renovaciones de permisos o justificación de ingresos.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Puedes obtenerlo de forma instantánea a través de la sede electrónica del SEPE o la aplicación
                    móvil, siempre que tengas certificado digital, DNIe o sistema Cl@ve. A continuación te explicamos
                    los tipos de certificados disponibles y los pasos para descargarlos.
                  </p>
                </div>

                {/* Tipos de certificados */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de certificados disponibles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {tiposCertificados.map((tipo, index) => {
                      const Icon = tipo.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors"
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo obtener el certificado</h2>
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
                              <Icon className="w-6 h-6 text-indigo-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{canal.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {canal.pasos.map((paso, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-indigo-700 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{paso}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Usos frecuentes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Para qué se utiliza?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {usos.map((uso, index) => {
                      const Icon = uso.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors ${uso.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-indigo-700" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{uso.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{uso.text}</p>
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
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors ${recomendacion.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-indigo-700" />
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
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors"
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

