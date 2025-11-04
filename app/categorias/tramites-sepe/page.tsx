import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trámites SEPE - Sellar Paro, TGSS, INSS, Vida Laboral",
  description: "Todos los trámites SEPE: sellar paro, TGSS, INSS, vida laboral, apuntarse al paro, certificados empresa. Guías paso a paso.",
  keywords: ["sellar paro", "trámites sepe", "tgss", "inss", "vida laboral", "apuntarse al paro", "certificado empresa"],
  alternates: {
    canonical: "/categorias/tramites-sepe",
  },
};

const tramites = [
  {
    id: "sellar-paro",
    title: "Sellar Paro",
    description: "Cómo renovar tu demanda de empleo (sellar el paro) de forma online o presencial. Obligatorio para cobrar prestaciones.",
    icon: "🔄",
    link: "/tutoriales/sellar-paro"
  },
  {
    id: "apuntarse-paro",
    title: "Apuntarse al Paro",
    description: "Guía completa para darte de alta como demandante de empleo y solicitar prestación por desempleo.",
    icon: "✅",
    link: "/tutoriales/apuntarse-paro"
  },
  {
    id: "tgss",
    title: "TGSS - Tesorería General Seguridad Social",
    description: "Trámites en TGSS: certificados, consulta de bases de cotización, vida laboral y más.",
    icon: "🏛️",
    link: "/tramites/tgss"
  },
  {
    id: "inss",
    title: "INSS - Instituto Nacional Seguridad Social",
    description: "Trámites INSS: pensiones, incapacidades, reconocimiento de grado de discapacidad.",
    icon: "📊",
    link: "/tramites/inss"
  },
  {
    id: "vida-laboral",
    title: "Vida Laboral",
    description: "Cómo obtener tu informe de vida laboral: certificado de años cotizados y bases de cotización.",
    icon: "📜",
    link: "/tramites/vida-laboral"
  },
  {
    id: "certificado-empresa",
    title: "Certificado de Empresa",
    description: "Obtener certificado de la empresa para justificar finiquito, despidos, bajas laborales.",
    icon: "📄",
    link: "/tramites/certificado-empresa"
  }
];

export default function TramitesSepePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">🏛️</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Trámites SEPE
              </h1>
              <p className="text-xl text-indigo-100">
                Guías completas para todos los trámites administrativos del SEPE y organismos relacionados
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
                <li className="text-gray-700">Trámites SEPE</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                El SEPE y organismos relacionados gestionan múltiples trámites importantes. 
                Aquí encontrarás tutoriales paso a paso para realizar cada uno de forma online o presencial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tramites.map((tramite) => (
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
      </main>
      
      <Footer />
    </div>
  );
}

