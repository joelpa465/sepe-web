import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fiscal - Modelo 600, 145, 036, IRPF, Certificado Penales, Declaración Renta",
  description: "Trámites fiscales: Modelo 600, 145, 036, certificado penales, IRPF 2024, declaración de la renta. Guías y tutoriales paso a paso.",
  keywords: ["modelo 600", "modelo 145", "modelo 036", "certificado penales", "irpf 2024", "declaracion renta", "trámites fiscales"],
  alternates: {
    canonical: "/categorias/fiscal",
  },
};

const tramitesFiscales = [
  {
    id: "certificado-penales",
    title: "Certificado de Penales",
    description: "Obtener certificado de antecedentes penales online. Solicitud, descarga y vigencia del documento.",
    icon: "🔐",
    link: "/fiscal/certificado-penales"
  },
  {
    id: "modelo-600",
    title: "Modelo 600",
    description: "Impuesto de Transmisiones Patrimoniales (ITP). Cuándo presentarlo y cómo rellenarlo correctamente.",
    icon: "📄",
    link: "/fiscal/modelo-600"
  },
  {
    id: "modelo-145",
    title: "Modelo 145",
    description: "Rentas del trabajo: retenciones IRPF. Solicitud, modificación y baja del modelo.",
    icon: "💼",
    link: "/fiscal/modelo-145"
  },
  {
    id: "modelo-036",
    title: "Modelo 036",
    description: "Alta, modificación y baja en el censo de empresarios, profesionales y retenedores de AEAT.",
    icon: "🏢",
    link: "/fiscal/modelo-036"
  },
  {
    id: "irpf-2024",
    title: "IRPF 2024",
    description: "Información completa sobre la declaración de IRPF 2024. Plazos, novedades y cómo presentarla.",
    icon: "📊",
    link: "/fiscal/irpf-2024"
  },
  {
    id: "declaracion-renta",
    title: "Declaración de la Renta",
    description: "Guía completa para realizar la declaración de la renta online. Paso a paso con ejemplos.",
    icon: "📝",
    link: "/fiscal/declaracion-renta"
  }
];

export default function FiscalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">🧮</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Trámites Fiscales
              </h1>
              <p className="text-xl text-amber-100">
                Modelos tributarios, certificados y declaraciones fiscales al día
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Trámites Fiscales</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Los trámites fiscales son obligatorios y deben realizarse en los plazos establecidos. 
                Aquí encontrarás guías paso a paso para cada modelo y certificado fiscal.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tramitesFiscales.map((tramite) => (
                <Link key={tramite.id} href={tramite.link}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full">
                    <div className="text-4xl mb-4">{tramite.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {tramite.title}
                    </h3>
                    <p className="text-gray-600">
                      {tramite.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                <h3 className="text-lg font-bold text-amber-900 mb-2">⚠️ Importante</h3>
                <p className="text-amber-800">
                  Los plazos fiscales son estrictos. Consulta siempre las fechas oficiales en la web de Hacienda 
                  y presenta tus declaraciones dentro del plazo establecido para evitar sanciones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

