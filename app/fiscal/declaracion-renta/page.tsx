import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  CalendarDays,
  Laptop,
  Phone,
  FileSignature,
  PiggyBank,
  ClipboardList,
  Headset,
  Banknote,
  Clock,
  AlertTriangle,
  Info,
  ArrowLeft
} from "lucide-react";

export const metadata: Metadata = {
  title: "Declaración de la Renta 2025: Fechas, Canales y Requisitos | Web Cursos SEPE",
  description:
    "Guía rápida de la campaña de la renta 2025: calendario oficial, cómo obtener el borrador, canales telemáticos, telefónicos y presenciales, documentación necesaria y consejos para evitar errores.",
  keywords: [
    "declaracion renta 2025",
    "campaña renta",
    "plazos renta",
    "borrador renta",
    "presentar renta presencial",
    "plan le llamamos"
  ],
  alternates: {
    canonical: "/fiscal/declaracion-renta"
  }
};

const calendario = [
  {
    hito: "Abril",
    descripcion: "Inicio de campaña, acceso a datos fiscales y presentación online mediante Renta WEB.",
    icon: CalendarDays
  },
  {
    hito: "Mayo",
    descripcion: "Comienza el plan telefónico \"Le Llamamos\" y se abre la petición de cita para ayuda personalizada.",
    icon: Phone
  },
  {
    hito: "Junio",
    descripcion: "Arranca la atención presencial en oficinas de la Agencia Tributaria y comunidades colaboradoras.",
    icon: Headset
  },
  {
    hito: "30 de junio",
    descripcion: "Fecha límite para presentar declaraciones y domiciliar pagos en la primera fracción (70%).",
    icon: Clock
  }
];

const canales = [
  {
    title: "Presentación online",
    description: "Accede a Renta WEB desde sede.agenciatributaria.gob.es con Cl@ve, certificado digital o referencia.",
    icon: Laptop,
    puntos: [
      "Permite modificar y confirmar el borrador en cualquier momento de la campaña.",
      "Genera justificante con Código Seguro de Verificación.",
      "Posibilidad de domiciliar el pago o solicitar devolución íntegra."
    ]
  },
  {
    title: "Plan telefónico 'Le Llamamos'",
    description: "Solicita cita y un agente te llamará para confeccionar y presentar la declaración.",
    icon: Phone,
    puntos: [
      "Es imprescindible aportar la documentación durante la llamada.",
      "Disponible con cita previa seleccionando día y franja horaria.",
      "Ideal para contribuyentes con declaración sencilla pero dudas puntuales."
    ]
  },
  {
    title: "Atención presencial",
    description: "Concertando cita, la AEAT o tu comunidad autónoma te ayudará a presentar la renta en oficina.",
    icon: FileSignature,
    puntos: [
      "Recuerda llevar DNI original, referencia catastral, datos bancarios y justificantes.",
      "Puedes autorizar a otra persona mediante apoderamiento o formulario 143.",
      "Las plazas son limitadas: solicita cita desde finales de mayo."
    ]
  }
];

const documentacion = [
  "DNI/NIE de todos los miembros de la unidad familiar y número IBAN.",
  "Referencias catastrales y recibos del IBI de las viviendas.",
  "Certificados de retenciones, prestaciones, intereses y dividendos.",
  "Justificantes de deducciones estatales y autonómicas (guardería, alquiler, donativos, familia numerosa).",
  "Aportaciones a planes de pensiones, mutualidades, amortización de vivienda y cuotas sindicales.",
  "Documentación sobre criptomonedas, fondos de inversión o venta de inmuebles."
];

const consejos = [
  {
    title: "Actualiza datos personales",
    text: "Revisa estado civil, descendientes y domicilio fiscal antes de confirmar el borrador.",
    icon: ClipboardList,
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Borrador no definitivo",
    text: "El borrador puede omitirte deducciones autonómicas o gastos deducibles. Compruébalo antes de enviar.",
    icon: Info,
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Fraccionamiento de pago",
    text: "Si la declaración sale a ingresar, domicilia el 60% inicial y paga el 40% restante hasta noviembre.",
    icon: PiggyBank,
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Evita sanciones",
    text: "Presenta aunque no puedas pagar. Podrás solicitar aplazamiento y evitar recargos por presentación extemporánea.",
    icon: AlertTriangle,
    color: "bg-rose-50 border-rose-200"
  }
];

export default function DeclaracionRentaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollProgressBar />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-6">
                <Link
                  href="/categorias/fiscal"
                  className="flex items-center text-teal-100 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Volver a Fiscal
                </Link>
              </div>

              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm text-white shadow-lg mr-4">
                  <CalendarDays className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-2">Declaración de la Renta 2025</h1>
                  <div className="flex items-center gap-6 text-teal-100">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>8 min de lectura</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-teal-100">
                Repasamos el calendario oficial, los canales disponibles y la documentación necesaria para preparar la campaña de la renta 2025
                sin imprevistos.
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
                <li className="text-gray-700">Declaración de la Renta</li>
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
                {/* Calendario */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Calendario oficial de la campaña</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {calendario.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-teal-300 transition-colors"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-teal-700" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{item.hito}</h3>
                              <p className="text-gray-600 text-sm">{item.descripcion}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Canales */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Canales disponibles</h2>
                  <div className="space-y-8">
                    {canales.map((canal, index) => {
                      const Icon = canal.icon;
                      return (
                        <div key={index} className="rounded-2xl border border-gray-200 bg-white p-6">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mr-4">
                              <Icon className="w-6 h-6 text-teal-700" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{canal.title}</h3>
                              <p className="text-gray-600 text-sm">{canal.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2 text-gray-700">
                            {canal.puntos.map((punto, idx) => (
                              <li key={idx}>• {punto}</li>
                            ))}
                          </ul>
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
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Documentación necesaria</h3>
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      Antes de solicitar cita o acceder a Renta WEB, ten preparados los siguientes documentos:
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Consejos para una declaración sin errores</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {consejos.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className={`${item.color} border rounded-xl p-5 flex items-start gap-3`}>
                          <Icon className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
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
                        ¿Quién está obligado a presentar la renta 2025?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Deben declarar quienes superen los límites de rendimientos del trabajo (generalmente 22.000 € con un pagador, 15.000 € con varios),
                        quienes perciban rendimientos de capital y ganancias patrimoniales superiores a 1.600 €, y quienes soliciten devoluciones o deducciones específicas.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                        ¿Cómo conseguir el número de referencia del borrador?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Introduce tu DNI/NIE, fecha de validez y la casilla 505 de la última declaración presentada. Si no la tienes, puedes utilizar Cl@ve o certificado digital.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify_between">
                        ¿Qué pasa si necesito corregir un error después de presentar?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Si el error beneficia a Hacienda, presenta declaración complementaria. Si te favorece a ti, solicita la rectificación desde Renta WEB indicando el motivo y aportando justificantes.
                      </div>
                    </details>

                    <details className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                      <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items_center justify-between">
                        ¿Puedo presentar la renta conjunta si mis ingresos son muy bajos?
                        <ChevronIcon />
                      </summary>
                      <div className="px-6 pb-5 text-gray-700">
                        Sí, pero conviene comparar resultados. La tributación conjunta puede ser ventajosa para familias con un único perceptor o rentas muy reducidas.
                      </div>
                    </details>
                  </div>
                </div>

                {/* CTA Final */}
                <div className="bg-gradient-to-r from-teal-700 to-teal-900 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">¿Necesitas ayuda adicional?</h3>
                  <p className="text-teal-100 mb-6">
                    Consulta nuestras guías sobre modelos y certificados para completar tu campaña fiscal con éxito.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/fiscal/modelo-145"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors"
                    >
                      Ajustar datos al pagador
                    </Link>
                    <Link
                      href="/fiscal/irpf-2024"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                    >
                      Novedades IRPF 2025
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
