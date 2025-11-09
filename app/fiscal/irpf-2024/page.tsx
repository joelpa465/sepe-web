import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  PiggyBank,
  Calculator,
  FileText,
  Coins,
  ShieldCheck,
  Home,
  Briefcase,
  Clock,
  Info,
  AlertTriangle,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Declaración de la Renta 2025: Guía IRPF Completa | Web Cursos SEPE",
  description:
    "Resumen de novedades IRPF 2025: tramos y tipos, mínimos personales, deducciones estatales y autonómicas, calendario, borrador, casillas clave y consejos para optimizar la declaración.",
  keywords: [
    "irpf 2025",
    "declaración renta 2025",
    "novedades irpf",
    "borrador renta",
    "plazos renta",
    "deducciones irpf"
  ],
  alternates: {
    canonical: "/fiscal/irpf-2024"
  }
};

const novedades = [
  {
    title: "Tramos y tipos",
    description: "Actualización de los tramos estatales y autonómicos, con especial atención a los ajustes en rentas medias.",
    icon: Coins
  },
  {
    title: "Mínimos personales",
    description: "Incremento del mínimo personal y familiar para contribuyentes con descendientes o ascendientes dependientes.",
    icon: ShieldCheck
  },
  {
    title: "Deducción vivienda y alquiler",
    description: "Requisitos específicos para viviendas adquiridas antes de 2013 y deducciones autonómicas compatibles.",
    icon: Home
  },
  {
    title: "Planes de pensiones y formación",
    description: "Límites de aportación deducible y novedades en deducciones por gastos de educación o suscripciones a medios digitales.",
    icon: Briefcase
  }
];

const pasos = [
  {
    number: 1,
    title: "Reunir certificados",
    description: "Descarga certificados de retenciones, vida laboral, rendimientos bancarios y justificantes de deducciones.",
    icon: FileText
  },
  {
    number: 2,
    title: "Acceder a Renta WEB",
    description: "Identifícate con Cl@ve, certificado o número de referencia para revisar tus datos fiscales y generar el borrador.",
    icon: Calculator
  },
  {
    number: 3,
    title: "Comprobar deducciones",
    description: "Añade deducciones autonómicas, gastos de vivienda, aportaciones y deducciones familiares no precargadas.",
    icon: PiggyBank
  },
  {
    number: 4,
    title: "Presentar o fraccionar",
    description: "Envía la declaración antes del cierre del plazo y, si sale a pagar, fracciona en dos plazos o domicilia el pago.",
    icon: Clock
  }
];

const documentacion = [
  "Certificados de retenciones de trabajo, pensiones o prestaciones.",
  "Certificados bancarios de intereses y saldos.",
  "Recibos del IBI, referencias catastrales y contratos de alquiler.",
  "Justificantes de deducciones (guardería, libros de texto, donativos, cuotas sindicales).",
  "Aportaciones a planes de pensiones, mutualidades o sistemas alternativos."
];

const consejos = [
  {
    title: "Comprueba las comunidades",
    text: "Cada autonomía mantiene sus propias deducciones y mínimos. Revisa las instrucciones autonómicas antes de confirmar el borrador.",
    icon: Info,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Revisa los datos personales",
    text: "Actualiza domicilio fiscal, situación familiar y discapacidad. Un dato erróneo puede alterar mínimos y deducciones.",
    icon: ShieldCheck,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Casilla 505",
    text: "Anota la casilla 505 de la última declaración presentada: te servirá para obtener el número de referencia del borrador.",
    icon: FileText,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Borrador no vinculante",
    text: "Hasta que lo confirmes, puedes modificarlo cuantas veces quieras. Guarda una copia de la versión final presentada.",
    icon: AlertTriangle,
    color: "bg-rose-50 border-rose-200"
  }
];

export default function IRPF2025Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/fiscal"
                  className="flex items-center text-slate-200 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Fiscal
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <Calculator className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">IRPF 2025: Declaración de la Renta</h1>
                  <div className="flex items-center gap-6 text-slate-200">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-slate-200">
                Conoce las novedades de la campaña IRPF 2025, los plazos, tramos actualizados, deducciones y pasos para presentar la
                declaración desde Renta WEB sin cometer errores.
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
                  <Link href="/categorias/fiscal" className="text-blue-600 hover:text-blue-800">
                    Fiscal
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">IRPF 2025</li>
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
                    La campaña de la renta 2025 incorpora ajustes en tramos de IRPF, mínimos personales y familiares, así como nuevas
                    deducciones estatales y autonómicas. Preparar con antelación certificados y recibos te permitirá presentar la declaración
                    sin sorpresas y aprovechar todas las ventajas fiscales disponibles.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Repasamos los aspectos clave para contribuyentes trabajadores, autónomos, pensionistas y aquellos con inversiones, y te
                    guiamos paso a paso por el proceso en Renta WEB.
                  </p>
                </div>

                {/* Novedades */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Novedades destacadas</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {novedades.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-slate-400 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-slate-700" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pasos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Pasos para presentar la renta</h2>
                  <div className="space-y-12">
                    {pasos.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < pasos.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-slate-200 -translate-y-12"></div>
                          )}
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            <div className="flex-grow pb-12">
                              <span className="text-sm font-semibold text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
                                Paso {step.number}
                              </span>
                              <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-3">{step.title}</h3>
                              <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="my-8">
                  <AdBanner type="horizontal" />
                </div>

                {/* Documentación */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentación imprescindible</h2>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      Reúne toda la información antes de acceder a Renta WEB para agilizar la cumplimentación:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      {documentacion.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos para optimizar la declaración</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {consejos.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`${item.color} border rounded-xl p-5 flex items-start gap-3`}>
                          <Icon className="w-6 h-6 text-slate-800 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Plazos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Calendario de campaña</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>• <strong>Inicio:</strong> abril 2025, con apertura de Renta WEB y descarga de datos fiscales.</p>
                    <p>• <strong>Atención telefónica:</strong> disponible desde mayo mediante el plan "Le Llamamos" previa solicitud.</p>
                    <p>• <strong>Atención presencial:</strong> junio, con cita previa en oficinas de la AEAT y comunidades colaboradoras.</p>
                    <p>• <strong>Fin de campaña:</strong> 30 de junio de 2025 (si el último día es inhábil, se traslada al siguiente hábil).</p>
                  </div>
                </div>

                {/* Preguntas frecuentes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
                  <div className="space-y-6">
                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Cuándo conviene presentar la renta conjunta?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Aconséjala en familias con un único perceptor o cuando uno de los cónyuges tenga rentas muy bajas. Compara siempre el resultado individual
                        y el conjunto antes de confirmar.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Qué ocurre si se me pasa el plazo?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Presenta cuanto antes fuera de plazo. Si la declaración resulta a ingresar, se aplicará recargo según el retraso. Si es a devolver, la
                        sanción es menor, pero se recomienda regularizar voluntariamente.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Puedo modificar la declaración después de presentarla?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí. Si el error perjudica a Hacienda, presenta una declaración complementaria. Si te perjudica a ti, solicita rectificación desde Renta WEB
                        o mediante escrito en la sede electrónica.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Cómo declarar inversiones y criptomonedas?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Debes informar en el apartado de ganancias y pérdidas patrimoniales, aportando justificantes de compras, ventas y comisiones. Para
                        criptomonedas declara tanto permutas como ventas a euros.
                      </div>
                    </details>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Sigue al día con tus obligaciones fiscales</h3>
                  <p className="text-slate-200 mb-6">
                    Consulta más recursos sobre modelos y certificados para completar la campaña sin contratiempos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/fiscal/modelo-036"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      Alta y modificaciones censales
                    </Link>
                    <Link
                      href="/fiscal/modelo-145"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Ajustar retenciones en nómina
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

        {/* Banner final */}
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

function ChevronIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}
