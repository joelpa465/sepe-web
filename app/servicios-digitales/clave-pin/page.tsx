import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  KeyRound,
  Smartphone,
  Clock,
  CheckCircle,
  ShieldCheck,
  Globe,
  Mail,
  Info,
  ArrowLeft,
  Lock,
  User,
  SmartphoneIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cl@ve PIN y Permanente: Cómo Activar y Usar tu Identificación Digital 2024 | Web Cursos SEPE",
  description:
    "Guía completa para activar Cl@ve PIN y Cl@ve Permanente: identificación digital para trámites con la Administración. Pasos, requisitos y solución de problemas.",
  keywords: [
    "clave pin",
    "clave permanente",
    "identificacion digital",
    "clave administracion",
    "clave activacion"
  ],
  alternates: {
    canonical: "/servicios-digitales/clave-pin"
  }
};

const tiposClave = [
  {
    title: "Cl@ve PIN",
    description: "PIN temporal válido por 24 horas. Ideal para trámites puntuales sin necesidad de recordar contraseña.",
    icon: Clock,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Cl@ve Permanente",
    description: "Contraseña permanente que puedes usar siempre. Requiere activación previa con DNI/NIE y móvil.",
    icon: Lock,
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    title: "Cl@ve Firma",
    description: "Sistema de firma electrónica que permite firmar documentos con validez legal equivalente a la firma manuscrita.",
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const pasosActivacion = [
  {
    title: "Preparación",
    icon: User,
    color: "from-blue-50 to-indigo-50",
    pasos: [
      "Asegúrate de tener tu DNI o NIE en vigor.",
      "Necesitas un teléfono móvil con cobertura (para recibir SMS).",
      "Accede a la página oficial de Cl@ve (clave.gob.es).",
      "Haz clic en 'Darse de alta en Cl@ve' o 'Activar Cl@ve Permanente'."
    ]
  },
  {
    title: "Verificación de Identidad",
    icon: ShieldCheck,
    color: "from-slate-50 to-gray-50",
    pasos: [
      "Introduce tu DNI o NIE y tu fecha de nacimiento.",
      "Indica tu número de teléfono móvil (debe estar a tu nombre).",
      "Recibirás un SMS con un código de verificación.",
      "Introduce el código recibido para verificar tu identidad."
    ]
  },
  {
    title: "Configuración de Credenciales",
    icon: Lock,
    color: "from-amber-50 to-orange-50",
    pasos: [
      "Crea una contraseña segura para Cl@ve Permanente (mínimo 8 caracteres, mayúsculas, minúsculas y números).",
      "Confirma la contraseña.",
      "Guarda las credenciales en un lugar seguro.",
      "Completa el proceso de activación."
    ]
  }
];

const ventajas = [
  {
    title: "Acceso desde cualquier dispositivo",
    text: "Puedes usar Cl@ve desde tu ordenador, tablet o móvil, sin necesidad de instalar software adicional.",
    icon: Smartphone,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Sin certificado digital",
    text: "No necesitas certificado digital ni lector de DNI electrónico para la mayoría de trámites.",
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Rápido y sencillo",
    text: "El proceso de activación es rápido y solo necesitas tu DNI/NIE y tu móvil.",
    icon: Clock,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Seguro y oficial",
    text: "Es un sistema oficial del Gobierno de España con altos niveles de seguridad.",
    icon: Lock,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const recomendaciones = [
  {
    title: "Guarda tus credenciales",
    text: "Almacena tu usuario y contraseña de Cl@ve Permanente en un gestor de contraseñas seguro.",
    icon: Lock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Actualiza tu móvil",
    text: "Si cambias de número de teléfono, actualízalo en Cl@ve para seguir recibiendo códigos de verificación.",
    icon: Smartphone,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Cl@ve PIN vs Permanente",
    text: "Usa Cl@ve PIN para trámites puntuales. Activa Cl@ve Permanente si vas a usar servicios digitales con frecuencia.",
    icon: Info,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Problemas de acceso",
    text: "Si olvidas tu contraseña, puedes recuperarla desde clave.gob.es usando tu DNI/NIE y móvil.",
    icon: ShieldCheck,
    color: "bg-indigo-50 border-indigo-200"
  }
];

const faqs = [
  {
    pregunta: "¿Cuánto tiempo tarda la activación de Cl@ve?",
    respuesta:
      "La activación de Cl@ve PIN es inmediata. Para Cl@ve Permanente, el proceso completo tarda entre 5 y 10 minutos si tienes todos los datos a mano."
  },
  {
    pregunta: "¿Necesito certificado digital para usar Cl@ve?",
    respuesta:
      "No, Cl@ve es una alternativa al certificado digital. Solo necesitas tu DNI/NIE y un teléfono móvil para activarlo."
  },
  {
    pregunta: "¿Puedo usar Cl@ve en todos los trámites?",
    respuesta:
      "Cl@ve es válido para la mayoría de trámites con la Administración, aunque algunos trámites muy específicos pueden requerir certificado digital."
  },
  {
    pregunta: "¿Qué hacer si no recibo el SMS de verificación?",
    respuesta:
      "Verifica que el número de teléfono esté correcto y que tengas cobertura. Si el problema persiste, contacta con el soporte de Cl@ve."
  },
  {
    pregunta: "¿Cl@ve PIN y Cl@ve Permanente son compatibles?",
    respuesta:
      "Sí, puedes usar ambos sistemas. Cl@ve PIN es temporal (24 horas) y Cl@ve Permanente es para uso continuado."
  }
];

export default function ClavePinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/servicios-digitales"
                  className="flex items-center text-blue-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Servicios Digitales
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <KeyRound className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                    Cl@ve PIN y Permanente
                  </h1>
                  <div className="flex items-center gap-6 text-blue-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>9 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-blue-100">
                Guía completa para activar y usar Cl@ve PIN y Cl@ve Permanente: identificación digital oficial
                para realizar trámites con la Administración sin certificado digital.
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
                <li className="text-gray-700">Cl@ve PIN y Permanente</li>
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
                    Cl@ve es el sistema de identificación digital del Gobierno de España que te permite acceder a
                    los servicios online de la Administración sin necesidad de certificado digital. Es rápido, seguro
                    y fácil de usar, ideal para realizar trámites desde casa.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Existen dos modalidades principales: Cl@ve PIN (temporal, válido 24 horas) y Cl@ve Permanente
                    (contraseña permanente). Ambas se activan con tu DNI/NIE y un teléfono móvil. A continuación
                    te explicamos cómo activarlas y utilizarlas.
                  </p>
                </div>

                {/* Tipos de Cl@ve */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Cl@ve disponibles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {tiposClave.map((tipo, index) => {
                      const Icon = tipo.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
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

                {/* Pasos de activación */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Cómo activar Cl@ve Permanente</h2>
                  <div className="space-y-8">
                    {pasosActivacion.map((paso, index) => {
                      const Icon = paso.icon;
                      return (
                        <div
                          key={paso.title}
                          className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${paso.color} p-6`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-white/70 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{paso.title}</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            {paso.pasos.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-blue-700 mr-2 flex-shrink-0 mt-0.5" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ventajas de usar Cl@ve</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {ventajas.map((ventaja, index) => {
                      const Icon = ventaja.icon;
                      return (
                        <div
                          key={index}
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors ${ventaja.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-700" />
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
                          className={`bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors ${recomendacion.color}`}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-blue-700" />
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
                        className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors"
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

