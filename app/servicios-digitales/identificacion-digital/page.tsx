import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  Cpu,
  ShieldCheck,
  KeyRound,
  Clock,
  CheckCircle,
  Lock,
  Smartphone,
  Globe,
  User,
  Mail,
  Info,
  ArrowLeft,
  FileText,
  Fingerprint
} from "lucide-react";

export const metadata: Metadata = {
  title: "Identificación Digital Segura: Guía Completa de Métodos y Seguridad 2024 | Web Cursos SEPE",
  description:
    "Guía completa sobre identificación digital: certificado digital, Cl@ve, DNIe y otros métodos. Cómo proteger tus credenciales y usar la identificación digital de forma segura.",
  keywords: [
    "identificacion digital",
    "certificado digital",
    "clave",
    "dnie",
    "seguridad digital"
  ],
  alternates: {
    canonical: "/servicios-digitales/identificacion-digital"
  }
};

const metodosIdentificacion = [
  {
    title: "Certificado Digital",
    description: "Certificado electrónico emitido por la FNMT. Permite firmar documentos con validez legal.",
    icon: ShieldCheck,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Cl@ve",
    description: "Sistema de identificación del Gobierno. Cl@ve PIN (temporal) o Cl@ve Permanente.",
    icon: KeyRound,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "DNI Electrónico",
    description: "DNIe con chip integrado. Permite identificarse y firmar documentos digitalmente.",
    icon: Fingerprint,
    gradient: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Biometría",
    description: "Reconocimiento facial, dactilar o de voz para identificación segura.",
    icon: User,
    gradient: "from-purple-500 to-purple-600"
  }
];

const medidasSeguridad = [
  {
    title: "Protege tus credenciales",
    icon: Lock,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Nunca compartas tus contraseñas o PINs con nadie.",
      "Usa contraseñas seguras y únicas para cada servicio.",
      "Guarda tus certificados digitales en dispositivos seguros.",
      "No uses redes Wi-Fi públicas para acceder a servicios sensibles."
    ]
  },
  {
    title: "Mantén tus dispositivos seguros",
    icon: ShieldCheck,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Mantén tu sistema operativo y aplicaciones actualizadas.",
      "Usa antivirus y firewall en tus dispositivos.",
      "Habilita el bloqueo de pantalla con contraseña o biometría.",
      "No instales aplicaciones de fuentes no confiables."
    ]
  },
  {
    title: "Verifica la autenticidad",
    icon: Globe,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Verifica siempre que estás en la web oficial antes de introducir credenciales.",
      "Comprueba que la URL comience con 'https://' y tenga el candado de seguridad.",
      "Desconfía de emails o mensajes que soliciten tus credenciales.",
      "Contacta directamente con el servicio si tienes dudas sobre la autenticidad."
    ]
  }
];

const ventajas = [
  {
    title: "Seguridad",
    text: "Los métodos de identificación digital ofrecen altos niveles de seguridad y protección de datos.",
    icon: ShieldCheck,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Comodidad",
    text: "Accede a servicios y trámites desde casa, sin necesidad de desplazamientos.",
    icon: Smartphone,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Validez legal",
    text: "Los documentos firmados digitalmente tienen la misma validez que los firmados manualmente.",
    icon: FileText,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Eficiencia",
    text: "Realiza trámites de forma rápida y eficiente, sin esperas ni colas.",
    icon: Clock,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Usa contraseñas seguras",
    text: "Crea contraseñas con al menos 12 caracteres, mayúsculas, minúsculas, números y símbolos.",
    icon: Lock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Activa la verificación en dos pasos",
    text: "Activa la verificación en dos pasos siempre que esté disponible para mayor seguridad.",
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Revisa tu actividad",
    text: "Revisa regularmente tu actividad en los servicios digitales para detectar accesos no autorizados.",
    icon: Info,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Mantén copias de seguridad",
    text: "Haz copias de seguridad de tus certificados digitales y guárdalas en lugares seguros.",
    icon: FileText,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Qué método de identificación digital es más seguro?",
    respuesta:
      "Todos los métodos oficiales (certificado digital, Cl@ve, DNIe) son seguros. El certificado digital ofrece el mayor nivel de seguridad para firmar documentos."
  },
  {
    pregunta: "¿Puedo usar varios métodos de identificación?",
    respuesta:
      "Sí, puedes usar varios métodos de identificación según el servicio. Por ejemplo, Cl@ve para consultas y certificado digital para firmar documentos."
  },
  {
    pregunta: "¿Qué hacer si pierdo o me roban mis credenciales?",
    respuesta:
      "Si pierdes o te roban tus credenciales, revócalas inmediatamente y solicita nuevas credenciales o certificados."
  },
  {
    pregunta: "¿Es seguro usar identificación digital en móviles?",
    respuesta:
      "Sí, siempre que uses aplicaciones oficiales y mantengas tu dispositivo seguro con contraseña y actualizaciones."
  },
  {
    pregunta: "¿Qué hacer si sospecho que alguien tiene acceso a mis credenciales?",
    respuesta:
      "Cambia inmediatamente tus contraseñas, revoca tus certificados si es necesario y contacta con el servicio afectado."
  }
];

export default function IdentificacionDigitalPage() {
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
                  href="/categorias/servicios-digitales"
                  className="flex items-center text-cyan-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Servicios Digitales
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Cpu className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Identificación Digital Segura
                  </h1>
                  <div className="flex items-center gap-6 text-cyan-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>9 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-cyan-100">
                Guía completa sobre identificación digital: métodos disponibles, seguridad, protección de credenciales
                y mejores prácticas para usar la identificación digital de forma segura.
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
                <li className="text-gray-700">Identificación Digital</li>
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
                    La identificación digital es el proceso que te permite demostrar tu identidad en internet de
                    forma segura para acceder a servicios y realizar trámites online. Existen varios métodos
                    oficiales de identificación digital, cada uno con sus propias características y niveles de
                    seguridad.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Es fundamental conocer los métodos disponibles, sus ventajas y cómo proteger tus credenciales
                    para usar la identificación digital de forma segura. A continuación te explicamos los métodos
                    principales y las mejores prácticas de seguridad.
                  </p>
                </div>

                {/* Métodos de identificación */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Métodos de identificación digital</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {metodosIdentificacion.map((metodo, index) => {
                      const Icon = metodo.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div
                              className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${metodo.gradient} text-white mr-4`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{metodo.title}</h3>
                              <p className="text-gray-600 text-sm">{metodo.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Medidas de seguridad */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Medidas de seguridad</h2>
                  <div className="space-y-8">
                    {medidasSeguridad.map((medida, index) => {
                      const Icon = medida.icon;
                      return (
                        <div
                          key={medida.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${medida.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-cyan-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{medida.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {medida.pasos.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-cyan-700 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventajas de la identificación digital</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ventajas.map((ventaja, index) => {
                      const Icon = ventaja.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-cyan-300 transition-colors ${ventaja.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-cyan-700" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recomendaciones de seguridad</h2>
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

