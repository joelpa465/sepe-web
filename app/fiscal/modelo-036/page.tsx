import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileCheck,
  Building,
  UserPlus,
  Globe,
  Briefcase,
  Clock,
  ClipboardList,
  FileText,
  Calculator,
  ShieldCheck,
  AlertCircle,
  Info,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Modelo 036 y 037: Alta en Hacienda y Censo de Empresarios 2024 | Web Cursos SEPE",
  description:
    "Guía completa para presentar el Modelo 036 (y su versión simplificada Modelo 037): quién debe presentarlo, pasos online y presenciales, documentación, plazos y errores frecuentes.",
  keywords: [
    "modelo 036",
    "modelo 037",
    "alta hacienda",
    "censo empresarios profesionales",
    "modelo 036 online",
    "autónomos alta censal"
  ],
  alternates: {
    canonical: "/fiscal/modelo-036"
  }
};

const destinatarios = [
  {
    title: "Autónomos y profesionales",
    description: "Alta censal antes de iniciar actividad, comunicar epígrafes IAE y obligaciones de IVA e IRPF.",
    icon: UserPlus
  },
  {
    title: "Sociedades y comunidades de bienes",
    description: "Comunican el inicio de actividad, representantes, socios y periodicidad de impuestos.",
    icon: Building
  },
  {
    title: "No residentes y operadores intracomunitarios",
    description: "Obtención de NIF, ROI (VIES) y obligaciones especiales en operaciones exteriores.",
    icon: Globe
  },
  {
    title: "Modificaciones y bajas censales",
    description: "Comunica cambios de domicilio, actividades añadidas o cese de la actividad empresarial.",
    icon: ClipboardList
  }
];

const pasos = [
  {
    number: 1,
    title: "Reunir documentación",
    description: "NIF, escritura y poderes (sociedades), contrato de alquiler o título de local, certificados digitales necesarios.",
    icon: FileText
  },
  {
    number: 2,
    title: "Cumplimentar el modelo",
    description: "Selecciona la página correspondiente según seas persona física o jurídica, epígrafes IAE, IVA, retenciones y obligaciones contables.",
    icon: ClipboardList
  },
  {
    number: 3,
    title: "Presentar online o presencial",
    description: "En la Sede de la Agencia Tributaria con certificado/Cl@ve (formularios 036/037) o en Administraciones de Hacienda con cita previa.",
    icon: FileCheck
  },
  {
    number: 4,
    title: "Descargar justificante",
    description: "Guarda el PDF con Código Seguro de Verificación (CSV) o solicita copia sellada si lo presentas en papel.",
    icon: ShieldCheck
  }
];

const documentacion = [
  "DNI/NIE y, en su caso, tarjeta de residencia." ,
  "Escritura de constitución e inscripción en el Registro Mercantil (sociedades).",
  "Contrato de arrendamiento, escritura del local o autorización del titular.",
  "Certificado digital (personas jurídicas) o Cl@ve PIN para presentación telemática.",
  "Justificante de inscripción en la Seguridad Social (si ya dispones de alta en RETA)."
];

const consejos = [
  {
    title: "Modelo 036 vs 037",
    text: "El 037 es la versión simplificada para autónomos residentes sin representantes ni operaciones en el extranjero. Si no cumples requisitos, usa el 036.",
    icon: Info,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Plazos de modificación",
    text: "Comunica cualquier cambio (actividades, obligaciones, domicilio) en un máximo de 30 días desde que se produzca.",
    icon: Clock,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Epígrafes IAE correctos",
    text: "Revisa el epígrafe aplicable a tu actividad. Una clasificación errónea puede generar requerimientos y sanciones.",
    icon: Calculator,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Bajas censales",
    text: "No olvides presentar el modelo cuando ceses tu actividad para evitar que Hacienda siga reclamando declaraciones.",
    icon: AlertCircle,
    color: "bg-rose-50 border-rose-200"
  }
];

export default function Modelo036Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-700 to-violet-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/fiscal"
                  className="flex items-center text-purple-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Fiscal
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <FileCheck className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Modelo 036 / 037: Alta y Modificación en Hacienda</h1>
                  <div className="flex items-center gap-6 text-purple-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>9 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-purple-100">
                Aprende cuándo y cómo presentar el Modelo 036 o el 037: altas de autónomos y sociedades, modificaciones censales,
                presentación online, documentación necesaria y errores más habituales.
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
                <li className="text-gray-700">Modelo 036</li>
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
                    El Modelo 036 (y su versión simplificada, el Modelo 037) es la comunicación censal más importante para cualquier negocio.
                    Permite darse de alta, modificar datos o tramitar la baja ante la Agencia Tributaria y determina qué impuestos debes presentar.
                    Sin él, no podrás facturar legalmente ni deducir gastos relacionados con tu actividad.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A continuación te explicamos qué apartados debes rellenar según tu situación, cómo presentarlo online o presencialmente
                    y qué documentación conviene preparar para agilizar la tramitación.
                  </p>
                </div>

                {/* Destinatarios */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Quién debe presentar el Modelo 036?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {destinatarios.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-purple-700" />
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Pasos para completar y presentar el Modelo 036/037</h2>
                  <div className="space-y-12">
                    {pasos.map((step, index) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.number} className="relative">
                          {index < pasos.length - 1 && (
                            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-purple-200 -translate-y-12"></div>
                          )}
                          <div className="flex gap-8">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-700 text-white shadow-lg">
                                <Icon className="w-8 h-8" />
                              </div>
                            </div>
                            <div className="flex-grow pb-12">
                              <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
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
                      Prepara estos documentos para evitar requerimientos y agilizar la presentación:
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos prácticos</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {consejos.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`${item.color} border rounded-xl p-5 flex items-start gap-3`}>
                          <Icon className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
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
                        ¿Puedo presentar el Modelo 036 sin certificado digital?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí, siempre que cumplas los requisitos del Modelo 037 (versión simplificada) o lo presentes en papel mediante cita previa.
                        Sin embargo, la Agencia Tributaria recomienda la vía telemática por su inmediatez y porque genera justificante con CSV.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Cuándo debo solicitar el ROI para operaciones intracomunitarias?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Antes de realizar la primera operación intracomunitaria. Marca la casilla correspondiente en el Modelo 036 y aporta información
                        adicional si Hacienda la solicita. El alta en el ROI permite operar sin IVA dentro de la UE.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Es obligatorio presentar bajas censales cuando dejo de trabajar?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí. Debes comunicar el cese para que Hacienda cierre tus obligaciones fiscales. De lo contrario, seguirá reclamando declaraciones
                        periódicas y podría sancionarte por no presentarlas.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Qué ocurre si me equivoco en el Modelo 036?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Puedes presentar un nuevo modelo marcando la casilla de modificación. Hacienda mantendrá la última comunicación. Si el error afecta a
                        obligaciones ya generadas, puede que debas regularizar declaraciones presentadas.
                      </div>
                    </details>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-purple-700 to-violet-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">¿Necesitas más guías fiscales?</h3>
                  <p className="text-purple-100 mb-6">
                    Consulta nuestros tutoriales sobre retenciones y certificados para mantener tu negocio al día con Hacienda.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/fiscal/modelo-145"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
                    >
                      Ver Modelo 145
                    </Link>
                    <Link
                      href="/fiscal/modelo-600"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Conoce el Modelo 600
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
