import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  MonitorSmartphone,
  Globe,
  Clock,
  CheckCircle,
  ShieldCheck,
  FileText,
  Download,
  Mail,
  Info,
  ArrowLeft,
  User,
  Building
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sede Electrónica SEPE: Guía Completa para Usar los Servicios Online 2024 | Web Cursos SEPE",
  description:
    "Guía completa para usar la Sede Electrónica del SEPE: consultar prestaciones, solicitar ayudas, citas previas y trámites online paso a paso.",
  keywords: [
    "sede electronica sepe",
    "sepe online",
    "sede sepe",
    "trámites sepe online",
    "prestaciones sepe online"
  ],
  alternates: {
    canonical: "/servicios-digitales/sede-electronica-sepe"
  }
};

const serviciosDisponibles = [
  {
    title: "Consulta de Prestaciones",
    description: "Consulta el estado de tus prestaciones, pagos y certificados.",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Demanda de Empleo",
    description: "Solicita o renueva tu demanda de empleo online.",
    icon: User,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Certificados e Informes",
    description: "Descarga certificados de prestaciones, situación laboral y documentos oficiales.",
    icon: Download,
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Citas Previas",
    description: "Solicita, consulta y anula citas previas en oficinas del SEPE.",
    icon: Clock,
    gradient: "from-purple-500 to-purple-600"
  }
];

const pasosAcceso = [
  {
    title: "Acceso a la Sede",
    icon: Globe,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Accede a sede.sepe.gob.es desde tu navegador.",
      "Haz clic en 'Ciudadanos' o 'Acceso Identificado'.",
      "Selecciona el método de identificación: certificado digital, DNIe, Cl@ve o usuario y contraseña.",
      "Introduce tus credenciales y accede a tu área personal."
    ]
  },
  {
    title: "Navegación en la Sede",
    icon: MonitorSmartphone,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Desde el menú principal, accede a la sección que necesitas (Prestaciones, Trámites, Certificados, etc.).",
      "Consulta el estado de tus trámites en tiempo real.",
      "Descarga documentos y certificados en formato PDF.",
      "Realiza solicitudes y envíos de documentación online."
    ]
  },
  {
    title: "Trámites Más Comunes",
    icon: FileText,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Consulta el estado de tu prestación por desempleo.",
      "Solicita certificados de prestaciones y situación laboral.",
      "Renueva tu demanda de empleo.",
      "Solicita o anula citas previas en oficinas.",
      "Descarga justificantes y documentos oficiales."
    ]
  }
];

const ventajas = [
  {
    title: "24 horas al día",
    text: "Accede a tus trámites en cualquier momento, sin horarios ni esperas.",
    icon: Clock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Sin desplazamientos",
    text: "Realiza la mayoría de trámites desde casa, sin acudir a la oficina.",
    icon: Globe,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Documentos instantáneos",
    text: "Descarga certificados y documentos de forma inmediata en formato PDF.",
    icon: Download,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Seguimiento en tiempo real",
    text: "Consulta el estado de tus trámites y solicitudes en tiempo real.",
    icon: Info,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Guarda tus documentos",
    text: "Descarga y guarda copias de todos los documentos y certificados que necesites.",
    icon: Download,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Actualiza tus datos",
    text: "Mantén actualizados tus datos de contacto (email, teléfono) para recibir notificaciones.",
    icon: User,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Revisa notificaciones",
    text: "Consulta regularmente el buzón de notificaciones para estar al día de tus trámites.",
    icon: Mail,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Problemas de acceso",
    text: "Si tienes problemas, verifica que tu certificado digital o Cl@ve esté correctamente instalado.",
    icon: ShieldCheck,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Qué métodos de identificación acepta la sede del SEPE?",
    respuesta:
      "Acepta certificado digital, DNIe, Cl@ve PIN, Cl@ve Permanente y usuario con contraseña (si te diste de alta previamente)."
  },
  {
    pregunta: "¿Puedo consultar mis prestaciones sin certificado digital?",
    respuesta:
      "Sí, puedes usar Cl@ve PIN o Cl@ve Permanente, que son más sencillos de obtener que el certificado digital."
  },
  {
    pregunta: "¿Los documentos descargados tienen validez legal?",
    respuesta:
      "Sí, los documentos descargados desde la sede electrónica tienen la misma validez que los obtenidos presencialmente."
  },
  {
    pregunta: "¿Puedo realizar todos los trámites online?",
    respuesta:
      "La mayoría de trámites pueden realizarse online, aunque algunos pueden requerir cita previa presencial."
  },
  {
    pregunta: "¿Qué hacer si no puedo acceder a la sede?",
    respuesta:
      "Verifica que tu certificado digital o Cl@ve esté correctamente instalado. Si el problema persiste, contacta con el SEPE."
  }
];

export default function SedeElectronicaSepePage() {
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
                  href="/categorias/servicios-digitales"
                  className="flex items-center text-indigo-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Servicios Digitales
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <MonitorSmartphone className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Sede Electrónica SEPE
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
                Guía completa para usar la Sede Electrónica del SEPE: consultar prestaciones, solicitar ayudas,
                gestionar citas previas y realizar trámites online sin desplazamientos.
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
                <li className="text-gray-700">Sede Electrónica SEPE</li>
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
                    La Sede Electrónica del SEPE (sede.sepe.gob.es) es el portal oficial que te permite realizar
                    la mayoría de trámites relacionados con el empleo y las prestaciones por desempleo desde casa,
                    sin necesidad de acudir presencialmente a las oficinas.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Desde la sede puedes consultar el estado de tus prestaciones, solicitar certificados, gestionar
                    tu demanda de empleo, solicitar citas previas y realizar muchos otros trámites de forma rápida
                    y segura. A continuación te explicamos cómo acceder y utilizar los servicios disponibles.
                  </p>
                </div>

                {/* Servicios disponibles */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Servicios disponibles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {serviciosDisponibles.map((servicio, index) => {
                      const Icon = servicio.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${servicio.gradient} text-white mr-4`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{servicio.title}</h3>
                              <p className="text-gray-600 text-sm">{servicio.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pasos de acceso */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo acceder y usar la sede</h2>
                  <div className="space-y-8">
                    {pasosAcceso.map((paso, index) => {
                      const Icon = paso.icon;
                      return (
                        <div
                          key={paso.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${paso.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-indigo-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{paso.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {paso.pasos.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-indigo-700 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventajas de usar la sede electrónica</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ventajas.map((ventaja, index) => {
                      const Icon = ventaja.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors ${ventaja.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-indigo-700" />
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

