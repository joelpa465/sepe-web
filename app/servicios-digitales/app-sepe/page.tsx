import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  Smartphone,
  Download,
  Clock,
  CheckCircle,
  ShieldCheck,
  FileText,
  Bell,
  User,
  Globe,
  Mail,
  Info,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "App Móvil SEPE: Cómo Descargarla y Usarla Paso a Paso 2024 | Web Cursos SEPE",
  description:
    "Guía completa para descargar, instalar y usar la app móvil oficial del SEPE: consultar prestaciones, citas y notificaciones desde el móvil.",
  keywords: [
    "app sepe",
    "app movil sepe",
    "sepe movil",
    "aplicacion sepe",
    "app oficial sepe"
  ],
  alternates: {
    canonical: "/servicios-digitales/app-sepe"
  }
};

const funcionesApp = [
  {
    title: "Consulta de Prestaciones",
    description: "Consulta el estado de tus prestaciones y pagos en tiempo real.",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Gestión de Citas",
    description: "Solicita, consulta y anula citas previas en oficinas del SEPE.",
    icon: Clock,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Notificaciones",
    description: "Recibe notificaciones push sobre tus trámites y citas.",
    icon: Bell,
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Certificados",
    description: "Descarga certificados y documentos oficiales directamente en tu móvil.",
    icon: Download,
    gradient: "from-purple-500 to-purple-600"
  }
];

const pasosInstalacion = [
  {
    title: "Descarga de la App",
    icon: Download,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Abre App Store (iOS) o Google Play Store (Android) en tu móvil.",
      "Busca 'SEPE' en la tienda de aplicaciones.",
      "Verifica que sea la app oficial del Servicio Público de Empleo Estatal.",
      "Haz clic en 'Instalar' y espera a que se complete la descarga."
    ]
  },
  {
    title: "Configuración Inicial",
    icon: ShieldCheck,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Abre la app y acepta los términos y condiciones.",
      "Selecciona tu método de identificación (certificado digital, DNIe o Cl@ve).",
      "Inicia sesión con tus credenciales.",
      "Configura las notificaciones push si deseas recibirlas."
    ]
  },
  {
    title: "Uso de la App",
    icon: Smartphone,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Accede a la sección 'Mis Prestaciones' para consultar el estado.",
      "Usa 'Mis Citas' para gestionar citas previas.",
      "Descarga certificados desde 'Mis Documentos'.",
      "Consulta notificaciones en 'Bandeja de Entrada'.",
      "Actualiza tus datos personales desde 'Mi Perfil'."
    ]
  }
];

const ventajas = [
  {
    title: "Acceso desde cualquier lugar",
    text: "Consulta tus trámites y prestaciones desde cualquier lugar, sin necesidad de ordenador.",
    icon: Globe,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Notificaciones instantáneas",
    text: "Recibe notificaciones push sobre cambios en tus trámites y citas.",
    icon: Bell,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Fácil de usar",
    text: "Interfaz intuitiva y sencilla diseñada para uso móvil.",
    icon: Smartphone,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Segura y oficial",
    text: "App oficial del SEPE con altos niveles de seguridad y protección de datos.",
    icon: ShieldCheck,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Mantén la app actualizada",
    text: "Actualiza la app regularmente para tener acceso a las últimas funcionalidades y correcciones de seguridad.",
    icon: Download,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Activa las notificaciones",
    text: "Activa las notificaciones push para estar al día de tus trámites y citas.",
    icon: Bell,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Protege tu dispositivo",
    text: "Mantén tu dispositivo seguro con contraseña o reconocimiento facial/dactilar.",
    icon: ShieldCheck,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Consulta regularmente",
    text: "Revisa regularmente la app para estar al día de tus trámites y notificaciones.",
    icon: Info,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿La app es gratuita?",
    respuesta:
      "Sí, la app oficial del SEPE es completamente gratuita y está disponible para iOS y Android."
  },
  {
    pregunta: "¿Necesito certificado digital para usar la app?",
    respuesta:
      "Puedes usar certificado digital, DNIe o Cl@ve para identificarte en la app. Cl@ve es la opción más sencilla para móviles."
  },
  {
    pregunta: "¿Puedo hacer todos los trámites desde la app?",
    respuesta:
      "La mayoría de trámites pueden realizarse desde la app, aunque algunos pueden requerir acceso desde la sede electrónica."
  },
  {
    pregunta: "¿Las notificaciones son seguras?",
    respuesta:
      "Sí, las notificaciones push son seguras y solo contienen información general. Nunca se envían datos sensibles por notificaciones."
  },
  {
    pregunta: "¿Qué hacer si la app no funciona correctamente?",
    respuesta:
      "Verifica que tengas la última versión de la app instalada. Si el problema persiste, desinstala y vuelve a instalar la app."
  }
];

export default function AppSepePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-700 to-red-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/servicios-digitales"
                  className="flex items-center text-orange-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Servicios Digitales
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Smartphone className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    App Móvil SEPE
                  </h1>
                  <div className="flex items-center gap-6 text-orange-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>7 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-orange-100">
                Guía completa para descargar, instalar y usar la app móvil oficial del SEPE: consultar prestaciones,
                gestionar citas y recibir notificaciones desde tu móvil.
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
                <li className="text-gray-700">App Móvil SEPE</li>
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
                    La app móvil oficial del SEPE te permite gestionar tus trámites y consultar información sobre
                    tus prestaciones, citas y documentos desde tu móvil o tablet. Es gratuita, segura y fácil de
                    usar, y está disponible para dispositivos iOS y Android.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Con la app puedes consultar el estado de tus prestaciones, gestionar citas previas, descargar
                    certificados y recibir notificaciones push sobre tus trámites. A continuación te explicamos
                    cómo descargarla, instalarla y usarla.
                  </p>
                </div>

                {/* Funciones de la app */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Funciones principales</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {funcionesApp.map((funcion, index) => {
                      const Icon = funcion.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${funcion.gradient} text-white mr-4`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{funcion.title}</h3>
                              <p className="text-gray-600 text-sm">{funcion.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pasos de instalación */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo descargar e instalar la app</h2>
                  <div className="space-y-8">
                    {pasosInstalacion.map((paso, index) => {
                      const Icon = paso.icon;
                      return (
                        <div
                          key={paso.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${paso.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-orange-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{paso.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {paso.pasos.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-orange-700 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventajas de usar la app</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ventajas.map((ventaja, index) => {
                      const Icon = ventaja.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors ${ventaja.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-orange-700" />
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
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors ${recomendacion.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-orange-700" />
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
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-colors"
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

