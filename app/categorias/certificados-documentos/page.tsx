import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import {
  FileText,
  ClipboardCheck,
  ScrollText,
  Building,
  Printer,
  Lightbulb,
  FileSpreadsheet
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certificados y Documentos Oficiales - Guías SEPE",
  description:
    "Accede a guías para obtener la vida laboral, certificado de empresa, prestaciones, cotizaciones y otros documentos oficiales sin errores.",
  keywords: [
    "vida laboral",
    "certificado empresa",
    "certificado prestaciones",
    "certificado cotizaciones",
    "documentos sepe",
    "duplicados oficiales"
  ],
  alternates: {
    canonical: "/categorias/certificados-documentos"
  }
};

const certificados = [
  {
    id: "vida-laboral",
    title: "Vida Laboral Online",
    description:
      "Obtén tu informe de vida laboral al instante por internet, teléfono o SMS y descubre cómo interpretarlo.",
    icon: ClipboardCheck,
    gradient: "from-blue-500 to-blue-600",
    link: "/tramites/vida-laboral"
  },
  {
    id: "certificado-empresa",
    title: "Certificado de Empresa",
    description:
      "Solicita el certificado de empresa para trámites con el SEPE, finiquitos y prestación por desempleo.",
    icon: Building,
    gradient: "from-emerald-500 to-emerald-600",
    link: "/tramites/certificado-empresa"
  },
  {
    id: "certificado-prestaciones",
    title: "Certificado de Prestaciones SEPE",
    description:
      "Descarga los certificados oficiales del SEPE para acreditar prestaciones cobradas o en curso.",
    icon: FileText,
    gradient: "from-indigo-500 to-indigo-600",
    link: "/certificados/prestaciones"
  },
  {
    id: "certificado-cotizaciones",
    title: "Certificado de Cotizaciones",
    description:
      "Solicita el certificado de bases y periodos cotizados a la Seguridad Social para trámites y oposiciones.",
    icon: ScrollText,
    gradient: "from-orange-500 to-orange-600",
    link: "/tramites/inss"
  },
  {
    id: "documentos-necesarios",
    title: "Documentos Necesarios SEPE",
    description:
      "Lista de documentos imprescindibles para altas, subsidios, prestaciones y trámites habituales del SEPE.",
    icon: FileSpreadsheet,
    gradient: "from-purple-500 to-purple-600",
    link: "/requisitos"
  },
  {
    id: "duplicados-documentos",
    title: "Duplicados y Justificantes",
    description:
      "Cómo obtener duplicados de resoluciones, justificantes de cita y otros documentos oficiales perdidos.",
    icon: Printer,
    gradient: "from-cyan-500 to-cyan-600",
    link: "/certificados/duplicados"
  }
];

export default function CertificadosDocumentosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <FileText className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Certificados y Documentos Oficiales
              </h1>
              <p className="text-xl text-slate-100">
                Guías paso a paso para descargar, solicitar o duplicar los certificados imprescindibles en tus trámites laborales y
                con la Seguridad Social.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Certificados y Documentos</li>
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
              <div className="flex-1">
                <div className="max-w-4xl mx-auto mb-10">
                  <p className="text-lg text-gray-700">
                    Estos certificados son solicitados habitualmente para prestaciones, oposiciones, contratos o ayudas. Aquí encontrarás
                    manuales claros para conseguirlos online y recomendaciones por si necesitas presentarte en oficina.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificados.map((certificado) => {
                    const Icon = certificado.icon;
                    return (
                      <Link key={certificado.id} href={certificado.link} className="group">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 h-full flex flex-col">
                          <div
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${certificado.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}
                          >
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {certificado.title}
                          </h3>
                          <p className="text-gray-600 flex-1">{certificado.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar derecho */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="right" />
              </div>
            </div>
          </div>
        </section>

        {/* Banner publicitario */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AdBanner type="horizontal" />
            </div>
          </div>
        </section>

        {/* Consejo */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Comprueba la validez</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Muchos certificados tienen validez limitada. Descarga la versión más reciente antes de presentarla y guarda siempre
                      una copia con el Código Seguro de Verificación (CSV) por si necesitas verificarla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
