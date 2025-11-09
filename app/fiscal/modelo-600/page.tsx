import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileSignature,
  Stamp,
  Home,
  Building,
  PenSquare,
  Clock,
  CheckCircle,
  FileText,
  BookOpen,
  AlertTriangle,
  Calculator,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modelo 600: Guía Completa 2024 para Liquidar el ITP y AJD | Web Cursos SEPE",
  description:
    "Aprende a cumplimentar y presentar el Modelo 600: qué impuestos cubre, documentación necesaria, plazos, presentación telemática y presencial, y consejos para evitar errores.",
  keywords: [
    "modelo 600",
    "modelo 600 itp",
    "modelo 600 ajd",
    "presentar modelo 600",
    "impuesto transmisiones patrimoniales",
    "actos juridicos documentados"
  ],
  alternates: {
    canonical: "/fiscal/modelo-600"
  }
};

const operaciones = [
  {
    title: "Compra de Viviendas y Garajes",
    description: "Transmisiones de inmuebles entre particulares están sujetas al ITP y se liquidan con el Modelo 600.",
    icon: Home
  },
  {
    title: "Préstamos y Reconocimientos de Deuda",
    description: "Los préstamos entre particulares y algunas ampliaciones de capital se declaran mediante este formulario.",
    icon: FileText
  },
  {
    title: "Constitución de Sociedades y Fianzas",
    description: "Determinados actos societarios tributan por Actos Jurídicos Documentados (AJD).",
    icon: Building
  },
  {
    title: "Documentos Notariales y Mercantiles",
    description: "Escrituras, actas y testimonios con cuota fija o variable requieren autoliquidación con el Modelo 600.",
    icon: Stamp
  }
];

const pasos = [
  {
    number: 1,
    title: "Preparar la documentación",
    description:
      "Reúne escrituras, contratos, DNI/NIE, justificante de pago, referencias catastrales y calculadora de impuestos según tu comunidad autónoma.",
    icon: BookOpen
  },
  {
    number: 2,
    title: "Rellenar el formulario",
    description:
      "Completa los datos del sujeto pasivo, transmitente, descripción del bien o acto y la base imponible. Revisa los tipos aplicables (ITP, AJD o combinados).",
    icon: PenSquare
  },
  {
    number: 3,
    title: "Pagar el impuesto",
    description:
      "Realiza el ingreso en una entidad colaboradora o genera el NRC correspondiente. El justificante de pago debe adjuntarse al Modelo 600.",
    icon: Calculator
  },
  {
    number: 4,
    title: "Presentar el Modelo",
    description:
      "Entrega telemática (plataforma de la comunidad autónoma) o presencial en oficinas de Hacienda autonómica o registro habilitado, aportando toda la documentación.",
    icon: FileSignature
  }
];

const documentacion = [
  "Modelo 600 cumplimentado y firmado.",
  "DNI/NIE del sujeto pasivo y transmitente (original y copia).",
  "Escritura pública o contrato privado que origine el hecho imponible.",
  "Justificante de pago o NRC.",
  "Autoliquidación complementaria si procede (por ejemplo, por errores previos).",
  "Referencia catastral del inmueble (si aplica)."
];

const consejos = [
  {
    title: "Plazos estrictos",
    text: "El plazo general es de 30 días hábiles desde la firma de la escritura o contrato. No apures: las sanciones se aplican rápidamente.",
    icon: Clock,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Cálculo autonómico",
    text: "Cada comunidad fija tipos y bonificaciones. Consulta simuladores autonómicos para evitar liquidaciones incorrectas.",
    icon: Calculator,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Consérvalo todo",
    text: "Guarda justificantes, resguardos telemáticos y copias compulsadas durante al menos 4 años ante posibles comprobaciones.",
    icon: FileText,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Errores habituales",
    text: "Olvidar identificar al sujeto pasivo correcto o no incluir anexos (por ejemplo, planos o licencias) genera requerimientos.",
    icon: AlertTriangle,
    color: "bg-rose-50 border-rose-200"
  }
];

export default function Modelo600Page() {
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
                  href="/categorias/fiscal"
                  className="flex items-center text-indigo-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Fiscal
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileSignature className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Modelo 600: Cómo Presentarlo en 2024</h1>
                  <div className="flex items-center gap-6 text-indigo-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>10 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-indigo-100">
                Descubre cuándo debes presentar el Modelo 600, cómo calcular el impuesto, qué documentación necesita y los canales
                disponibles para liquidar el ITP y AJD en tu comunidad autónoma.
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
                <li className="text-gray-700">Modelo 600</li>
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
                    El Modelo 600 es la autoliquidación fundamental para los impuestos de Transmisiones Patrimoniales (ITP) y Actos Jurídicos
                    Documentados (AJD). Cada comunidad autónoma regula tipos y bonificaciones, pero el formulario estatal es común. Saber
                    qué casillas completar y dónde presentarlo evita recargos y requerimientos posteriores.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A continuación encontrarás una guía completa y actualizada con los supuestos más habituales, documentación imprescindible
                    y un paso a paso para la presentación telemática o presencial.
                  </p>
                </div>

                {/* Operaciones */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué operaciones tributan con el Modelo 600?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {operaciones.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-indigo-700" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Pasos para cumplimentarlo correctamente</h2>
                  <div className="space-y-12">
                    {pasos.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < pasos.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-indigo-200 -translate-y-12"></div>
                          )}
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-700 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            <div className="flex-grow pb-12">
                              <span className="text-sm font-semibold text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentación necesaria</h2>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      Asegúrate de disponer de todos los documentos antes de iniciar la autoliquidación para evitar desplazamientos adicionales:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      {documentacion.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Presentación telemática y presencial */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Presentación telemática vs presencial</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Telemática</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Acceso con certificado digital, DNIe o Cl@ve.</li>
                        <li>• Plataforma tributaria de tu comunidad (ej. Madrid, Cataluña, Andalucía...).</li>
                        <li>• Permite adjuntar documentación escaneada y pagar online.</li>
                        <li>• Obtienes justificante inmediato con CSV.</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl border border-gray-200 p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Presencial</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Registro de Hacienda autonómica o oficinas liquidadoras.</li>
                        <li>• Presenta original y copia de toda la documentación.</li>
                        <li>• Necesitarás justificante bancario del pago.</li>
                        <li>• El resguardo se sella y entrega al momento.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Consejos */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos prácticos</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {consejos.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`${item.color} border rounded-xl p-5 flex items-start gap-3`}>
                          <Icon className="w-6 h-6 text-indigo-700 flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Preguntas frecuentes */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
                  <div className="space-y-6">
                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Quién debe presentar el Modelo 600?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        El sujeto pasivo del impuesto. En la mayoría de compraventas de segunda mano es el comprador; en préstamos,
                        el prestatario; y en AJD normalmente quien solicite la escritura o documento notarial.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Qué ocurre si presento el Modelo 600 fuera de plazo?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Se aplicarán recargos por presentación extemporánea y posibles intereses de demora. Si aún no has sido
                        requerido, puedes acogerte a la regularización voluntaria con recargo reducido.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Es necesario presentar el Modelo 600 si el acto está exento?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí. La mayoría de exenciones requieren autoliquidación a cero para dejar constancia. Adjunta la
                        documentación que justifique la exención (por ejemplo, compra de VPO o discapacidad).
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Puedo solicitar devolución si me equivoqué en la autoliquidación?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí. Debes presentar una solicitud de rectificación ante la comunidad autónoma aportando la autoliquidación
                        original, el justificante de pago y la documentación que acredite el error en la base o tipo aplicado.
                      </div>
                    </details>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-indigo-700 to-purple-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">Continúa con tus trámites fiscales</h3>
                  <p className="text-indigo-100 mb-6">
                    Explora otras guías fiscales o solicita el certificado que necesitas para cerrar tu operación.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/fiscal/certificado-penales"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      Ver Certificado de Penales
                    </Link>
                    <Link
                      href="/tutoriales/cita-previa-hacienda"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Pedir cita en Hacienda
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
