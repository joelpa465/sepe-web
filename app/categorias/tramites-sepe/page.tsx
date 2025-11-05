import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  RefreshCw,
  CheckCircle,
  Building2,
  FileText,
  ScrollText,
  FileCheck,
  Phone
} from "lucide-react";

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
    icon: RefreshCw,
    gradient: "from-blue-500 to-cyan-600",
    link: "/tramites/sellar-paro"
  },
  {
    id: "apuntarse-paro",
    title: "Apuntarse al Paro",
    description: "Guía completa para darte de alta como demandante de empleo y solicitar prestación por desempleo.",
    icon: CheckCircle,
    gradient: "from-green-500 to-emerald-600",
    link: "/tramites/apuntarse-paro"
  },
  {
    id: "tgss",
    title: "TGSS - Tesorería General Seguridad Social",
    description: "Trámites en TGSS: certificados, consulta de bases de cotización, vida laboral y más.",
    icon: Building2,
    gradient: "from-purple-500 to-indigo-600",
    link: "/tramites/tgss"
  },
  {
    id: "inss",
    title: "INSS - Instituto Nacional Seguridad Social",
    description: "Trámites INSS: pensiones, incapacidades, reconocimiento de grado de discapacidad.",
    icon: FileText,
    gradient: "from-orange-500 to-red-600",
    link: "/tramites/inss"
  },
  {
    id: "vida-laboral",
    title: "Vida Laboral",
    description: "Cómo obtener tu informe de vida laboral: certificado de años cotizados y bases de cotización.",
    icon: ScrollText,
    gradient: "from-teal-500 to-cyan-600",
    link: "/tramites/vida-laboral"
  },
  {
    id: "certificado-empresa",
    title: "Certificado de Empresa",
    description: "Obtener certificado de la empresa para justificar finiquito, despidos, bajas laborales.",
    icon: FileCheck,
    gradient: "from-pink-500 to-rose-600",
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mb-4">
                <Building2 className="w-8 h-8" />
              </div>
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
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                <div className="mb-8">
                  <p className="text-lg text-gray-700">
                    El SEPE y organismos relacionados gestionan múltiples trámites importantes. 
                    Aquí encontrarás tutoriales paso a paso para realizar cada uno de forma online o presencial.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tramites.map((tramite) => {
                    const Icon = tramite.icon;
                    return (
                      <Link
                        key={tramite.id}
                        href={tramite.link}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 h-full group"
                      >
                        <div className="flex flex-col h-full">
                          {/* Icono con gradiente */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${tramite.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                            {tramite.title}
                          </h3>
                          <p className="text-gray-600 flex-grow">
                            {tramite.description}
                          </p>
                          
                          <div className="mt-4 inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                            Ver Guía
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
              
              {/* Sidebar derecho - SOLO en desktop */}
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

        {/* Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Información Actualizada 2024
                </h3>
                <p className="text-indigo-800">
                  Todas las guías están actualizadas con los procedimientos vigentes en 2024. 
                  Los trámites pueden realizarse online o presencialmente según corresponda.
                </p>
              </div>
              
              {/* Información de contacto */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-indigo-600" />
                  ¿Dudas sobre algún trámite?
                </h3>
                <p className="text-gray-700 mb-4">
                  Si necesitas información personalizada sobre cualquier trámite:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                  <li>• <strong>Web oficial SEPE:</strong> sede.sepe.gob.es</li>
                  <li>• <strong>Web oficial Seguridad Social:</strong> sede.seg-social.gob.es</li>
                  <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

