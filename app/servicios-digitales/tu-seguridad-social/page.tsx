import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  Globe,
  FileText,
  Clock,
  CheckCircle,
  ShieldCheck,
  Download,
  User,
  Building,
  Mail,
  Info,
  ArrowLeft,
  Heart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tu Seguridad Social: Guía Completa para Acceder y Usar el Portal 2024 | Web Cursos SEPE",
  description:
    "Guía completa para usar Tu Seguridad Social: consultar vida laboral, pensiones, prestaciones y trámites sanitarios online paso a paso.",
  keywords: [
    "tu seguridad social",
    "portal seguridad social",
    "vida laboral online",
    "pensiones seguridad social",
    "seguridad social online"
  ],
  alternates: {
    canonical: "/servicios-digitales/tu-seguridad-social"
  }
};

const serviciosDisponibles = [
  {
    title: "Vida Laboral",
    description: "Consulta tu historial laboral completo y descarga informes de vida laboral.",
    icon: FileText,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Pensiones",
    description: "Consulta el estado de tus pensiones, solicitudes y pagos.",
    icon: Heart,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Prestaciones",
    description: "Gestiona tus prestaciones por desempleo, incapacidad y otras ayudas.",
    icon: Download,
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Trámites Sanitarios",
    description: "Gestiona tu tarjeta sanitaria, citas médicas y documentación sanitaria.",
    icon: ShieldCheck,
    gradient: "from-purple-500 to-purple-600"
  }
];

const pasosAcceso = [
  {
    title: "Acceso al Portal",
    icon: Globe,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Accede a tu.seg-social.gob.es desde tu navegador.",
      "Haz clic en 'Acceso con Certificado Digital' o 'Acceso con Cl@ve'.",
      "Selecciona tu método de identificación (certificado digital, DNIe o Cl@ve).",
      "Introduce tus credenciales y accede a tu área personal."
    ]
  },
  {
    title: "Navegación y Servicios",
    icon: FileText,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Desde el menú principal, accede a la sección que necesitas (Vida Laboral, Pensiones, Prestaciones, etc.).",
      "Consulta información en tiempo real sobre tu situación.",
      "Descarga documentos e informes en formato PDF.",
      "Realiza solicitudes y gestiona tus trámites online."
    ]
  },
  {
    title: "Trámites Más Comunes",
    icon: Building,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Consulta y descarga tu informe de vida laboral.",
      "Consulta el estado de tus pensiones y solicitudes.",
      "Gestiona tus prestaciones por desempleo e incapacidad.",
      "Actualiza tus datos personales y de contacto.",
      "Consulta tu historial de cotizaciones."
    ]
  }
];

const ventajas = [
  {
    title: "Información centralizada",
    text: "Accede a toda tu información de la Seguridad Social en un solo lugar.",
    icon: FileText,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Documentos oficiales",
    text: "Descarga documentos oficiales con validez legal desde casa.",
    icon: Download,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Seguimiento en tiempo real",
    text: "Consulta el estado de tus trámites y solicitudes en tiempo real.",
    icon: Clock,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Sin desplazamientos",
    text: "Realiza la mayoría de trámites sin acudir presencialmente a las oficinas.",
    icon: Globe,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Guarda tus documentos",
    text: "Descarga y guarda copias de todos los documentos importantes (vida laboral, informes, etc.).",
    icon: Download,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Actualiza tus datos",
    text: "Mantén actualizados tus datos de contacto para recibir notificaciones importantes.",
    icon: User,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Consulta regularmente",
    text: "Revisa regularmente tu información para estar al día de tu situación.",
    icon: Info,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Protege tus credenciales",
    text: "Mantén seguras tus credenciales de acceso y no las compartas con nadie.",
    icon: ShieldCheck,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Qué métodos de identificación acepta Tu Seguridad Social?",
    respuesta:
      "Acepta certificado digital, DNIe, Cl@ve PIN y Cl@ve Permanente. También puedes usar usuario y contraseña si te diste de alta previamente."
  },
  {
    pregunta: "¿Puedo consultar mi vida laboral sin certificado digital?",
    respuesta:
      "Sí, puedes usar Cl@ve PIN o Cl@ve Permanente, que son más sencillos de obtener que el certificado digital."
  },
  {
    pregunta: "¿Los documentos descargados tienen validez legal?",
    respuesta:
      "Sí, los documentos descargados desde Tu Seguridad Social tienen la misma validez que los obtenidos presencialmente."
  },
  {
    pregunta: "¿Puedo realizar todos los trámites online?",
    respuesta:
      "La mayoría de trámites pueden realizarse online, aunque algunos pueden requerir cita previa presencial."
  },
  {
    pregunta: "¿Qué hacer si no puedo acceder al portal?",
    respuesta:
      "Verifica que tu certificado digital o Cl@ve esté correctamente instalado. Si el problema persiste, contacta con la Seguridad Social."
  }
];

export default function TuSeguridadSocialPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-700 to-pink-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/servicios-digitales"
                  className="flex items-center text-purple-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Servicios Digitales
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Tu Seguridad Social
                  </h1>
                  <div className="flex items-center gap-6 text-purple-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-purple-100">
                Guía completa para usar Tu Seguridad Social: consultar vida laboral, pensiones, prestaciones y
                trámites sanitarios online desde casa.
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
                <li className="text-gray-700">Tu Seguridad Social</li>
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
                    Tu Seguridad Social (tu.seg-social.gob.es) es el portal oficial de la Seguridad Social que te
                    permite acceder a toda tu información personal y realizar trámites relacionados con pensiones,
                    prestaciones, vida laboral y servicios sanitarios desde casa.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Desde este portal puedes consultar tu vida laboral, gestionar tus pensiones, consultar el estado
                    de tus prestaciones y realizar muchos otros trámites de forma rápida y segura. A continuación
                    te explicamos cómo acceder y utilizar los servicios disponibles.
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
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors"
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo acceder y usar el portal</h2>
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
                              <Icon className="w-6 h-6 text-purple-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{paso.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {paso.pasos.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-purple-700 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventajas de usar Tu Seguridad Social</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ventajas.map((ventaja, index) => {
                      const Icon = ventaja.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors ${ventaja.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-purple-700" />
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
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors ${recomendacion.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-purple-700" />
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
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors"
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

