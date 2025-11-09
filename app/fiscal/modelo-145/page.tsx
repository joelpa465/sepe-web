import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileSpreadsheet,
  Users,
  Home,
  Baby,
  ShieldCheck,
  Briefcase,
  Clock,
  PenSquare,
  Calculator,
  FileText,
  AlertTriangle,
  Info,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modelo 145 IRPF 2024: Cómo Rellenarlo y Entregarlo a tu Empresa | Web Cursos SEPE",
  description:
    "Guía completa del Modelo 145: datos que debes comunicar a tu empresa, mínimos personales y familiares, plazos de entrega, situaciones especiales y errores frecuentes.",
  keywords: [
    "modelo 145",
    "modelo 145 irpf",
    "comunicación datos al pagador",
    "retenciones nómina",
    "modelo 145 descargar",
    "retención IRPF empresa"
  ],
  alternates: {
    canonical: "/fiscal/modelo-145"
  }
};

const bloques = [
  {
    title: "Datos personales y situación familiar",
    description: "Indica tu estado civil, existencia de discapacidad y si tienes hijos o ascendientes a cargo.",
    icon: Users
  },
  {
    title: "Mínimo por descendientes y ascendientes",
    description: "Se reflejan los hijos menores de 25 años, personas con discapacidad o mayores de 65 que conviven contigo.",
    icon: Baby
  },
  {
    title: "Pagos de vivienda habitual",
    description: "Deducción por adquisición de vivienda antes del 2013 y alquileres con derecho a reducción estatal o autonómica.",
    icon: Home
  },
  {
    title: "Pensiones compensatorias y anualidades",
    description: "Permite minorar retenciones cuando pagas pensiones a favor del cónyuge o anualidades por alimentos a hijos.",
    icon: ShieldCheck
  }
];

const pasos = [
  {
    number: 1,
    title: "Descargar el Modelo 145",
    description: "Accede a la web de la Agencia Tributaria (sede.agenciatributaria.gob.es) o solicita a tu empresa una copia actualizada.",
    icon: FileSpreadsheet
  },
  {
    number: 2,
    title: "Cumplimentar los apartados",
    description: "Introduce tus datos personales, situación familiar, descendientes, ascendientes, pensiones, vivienda y observaciones.",
    icon: PenSquare
  },
  {
    number: 3,
    title: "Firmar y enviar al pagador",
    description: "Entrega el modelo firmado a Recursos Humanos o mediante la plataforma interna. Conserva una copia sellada o un justificante electrónico.",
    icon: FileText
  },
  {
    number: 4,
    title: "Actualizar cuando cambien los datos",
    description: "Comunica variaciones (nacimientos, discapacidad, matrimonio, alquiler...) en el plazo de 10 días desde que se produzcan.",
    icon: Calculator
  }
];

const documentacion = [
  "Modelo 145 cumplimentado y firmado.",
  "DNI/NIE del trabajador y, si procede, del cónyuge o hijos mayores de 14 años.",
  "Libro de familia o certificado de nacimiento para descendientes.",
  "Resolución de discapacidad o tarjeta acreditativa.",
  "Contrato de alquiler o escritura de vivienda y justificante de pagos si aplicas deducción.",
  "Sentencias o convenios reguladores en caso de pensiones compensatorias o anualidades."
];

const consejos = [
  {
    title: "Revisa los mínimos familiares",
    text: "Un error en descendientes o ascendientes puede incrementar tu retención mensual y afectar a la devolución anual.",
    icon: Baby,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Plazo de comunicación",
    text: "Tienes 10 días para informar a la empresa cuando cambie cualquier dato relevante. Si no lo haces, responderás de las diferencias.",
    icon: Clock,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Cambio de empresa",
    text: "Si cambias de trabajo, entrega el modelo en el nuevo empleo para que ajusten desde la primera nómina.",
    icon: Briefcase,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Ajustes en vivienda",
    text: "Solo pueden comunicarse pagos de hipoteca o alquiler con derecho a deducción según normativa estatal o autonómica vigente.",
    icon: Home,
    color: "bg-rose-50 border-rose-200"
  }
];

export default function Modelo145Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-sky-700 to-cyan-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/fiscal"
                  className="flex items-center text-sky-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Fiscal
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Modelo 145: Comunicación de datos al pagador</h1>
                  <div className="flex items-center gap-6 text-sky-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-sky-100">
                Aprende cómo rellenar el Modelo 145 y qué información debes facilitar a tu empresa para que calcule correctamente
                la retención del IRPF en tu nómina. Incluye supuestos especiales, documentación y preguntas frecuentes.
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
                <li className="text-gray-700">Modelo 145</li>
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
                    El Modelo 145 es obligatorio para que tu empresa conozca tu situación familiar y personal y así calcule la retención
                    del IRPF en la nómina. No se presenta ante Hacienda, sino que se entrega a tu pagador. Cada vez que cambie alguno de
                    los datos declarados debes comunicarlo por escrito para evitar desfases en la retención.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Esta guía te ayuda a interpretar cada apartado del formulario, a identificar qué documentación debes aportar y te
                    ofrece consejos para completar el modelo sin errores.
                  </p>
                </div>

                {/* Bloques */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Información que debes comunicar</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {bloques.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-sky-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-sky-700" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Pasos para completar el Modelo 145</h2>
                  <div className="space-y-12">
                    {pasos.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < pasos.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-sky-200 -translate-y-12"></div>
                          )}
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-sky-700 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            <div className="flex-grow pb-12">
                              <span className="text-sm font-semibold text-sky-700 bg-sky-100 px-3 py-1 rounded-full">
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentación que conviene adjuntar</h2>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      Aporta copias para que la empresa pueda justificar la reducción aplicada ante una comprobación de la Agencia Tributaria:
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos prácticos para evitar errores</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {consejos.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`${item.color} border rounded-xl p-5 flex items-start gap-3`}>
                          <Icon className="w-6 h-6 text-sky-700 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recordatorios */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Recordatorios clave</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      • <strong>Empleados públicos y pensionistas:</strong> también deben comunicar sus datos al órgano pagador para ajustar la retención.
                    </p>
                    <p>
                      • <strong>Contratos temporales:</strong> si no entregas el modelo, te aplicarán el tipo mínimo general (15%) salvo que la normativa establezca otro tipo.
                    </p>
                    <p>
                      • <strong>Guardia y custodia compartida:</strong> la reducción por descendientes se reparte al 50% salvo acuerdo distinto debidamente documentado.
                    </p>
                  </div>
                </div>

                {/* Preguntas frecuentes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
                  <div className="space-y-6">
                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Qué ocurre si no presento el Modelo 145?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        La empresa aplicará la retención general sin considerar tus circunstancias personales. Si se practica una retención inferior
                        por no comunicar datos, Hacienda puede exigirte las diferencias con recargo.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Debo presentarlo cada año?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        No es necesario si tus datos no cambian. Sin embargo, se recomienda revisarlo al inicio de cada ejercicio para comprobar posibles
                        deducciones o nuevas circunstancias (hijos, discapacidad, alquiler, etc.).
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify_between">
                        ¿Qué pasa si tengo varias empresas en el mismo año?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Debes entregar el Modelo 145 a cada pagador, indicando la situación en cada momento. El cómputo de descendientes o ascendientes se comunica
                        íntegramente a todos los pagadores.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify_between">
                        ¿Puedo modificarlo si cometí un error?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí. Entrega un nuevo Modelo 145 con los datos correctos indicando la fecha de actualización. La empresa ajustará tus retenciones a partir
                        del mes siguiente.
                      </div>
                    </details>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-sky-700 to-cyan-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Sigue mejorando tu planificación fiscal</h3>
                  <p className="text-sky-100 mb-6">
                    Consulta otras guías y modelos para optimizar tus retenciones y declaraciones anuales.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/fiscal/modelo-600"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-sky-700 font-semibold rounded-lg hover:bg-sky-50 transition-colors"
                    >
                      Ver Modelo 600
                    </Link>
                    <Link
                      href="/fiscal/certificado-penales"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Certificado de penales
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

        {/* Banner publicitario final */}
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
