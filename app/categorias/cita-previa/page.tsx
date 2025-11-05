import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Calendar, 
  XCircle, 
  Building2, 
  Globe, 
  FileText, 
  Car,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cita Previa - SEPE, Seguridad Social, Hacienda y Más",
  description: "Cita previa online: INEM (SEPE), Seguridad Social, Extranjería, Hacienda y más. Guías paso a paso para solicitar y anular citas previas en 2024.",
  keywords: ["cita previa inem", "cita previa sepe", "cita previa seguridad social", "anular cita previa sepe", "cita previa extranjeria"],
  alternates: {
    canonical: "/categorias/cita-previa",
  },
};

const citas = [
  {
    id: "cita-previa-inem",
    title: "Cita Previa INEM (SEPE)",
    description: "Cómo solicitar cita previa en el SEPE para renovar paro, consultar prestaciones o realizar otros trámites. Tutorial paso a paso.",
    icon: Calendar,
    gradient: "from-blue-500 to-blue-600",
    link: "/tutoriales/cita-previa-inem"
  },
  {
    id: "anular-cita-sepe",
    title: "Anular Cita Previa INEM",
    description: "Guía para anular una cita previa ya concertada en el SEPE. Pasos y requisitos para cancelar tu cita.",
    icon: XCircle,
    gradient: "from-red-500 to-red-600",
    link: "/tutoriales/anular-cita-sepe"
  },
  {
    id: "cita-previa-seguridad-social",
    title: "Cita Previa Seguridad Social",
    description: "Solicitar cita previa en la Seguridad Social para pensiones, bajas, certificados o consultas. Proceso completo.",
    icon: Building2,
    gradient: "from-green-500 to-green-600",
    link: "/tutoriales/cita-previa-seguridad-social"
  },
  {
    id: "cita-previa-extranjeria",
    title: "Cita Previa Extranjería",
    description: "Cómo pedir cita en Extranjería para renovar NIE, visados, residencia y otros trámites de inmigración.",
    icon: Globe,
    gradient: "from-purple-500 to-purple-600",
    link: "/tutoriales/cita-previa-extranjeria"
  },
  {
    id: "cita-previa-hacienda",
    title: "Cita Previa Hacienda",
    description: "Solicitar cita previa en Hacienda para consultas fiscales, declaraciones o certificados tributarios.",
    icon: FileText,
    gradient: "from-orange-500 to-orange-600",
    link: "/tutoriales/cita-previa-hacienda"
  },
  {
    id: "cita-previa-dgt",
    title: "Cita Previa DGT",
    description: "Cita previa en la DGT para renovar carnet, cambiarlo, modificaciones de vehículo o consultas de tráfico.",
    icon: Car,
    gradient: "from-indigo-500 to-indigo-600",
    link: "/tutoriales/cita-previa-dgt"
  }
];

export default function CitaPreviaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <Calendar className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Citas Previas
              </h1>
              <p className="text-xl text-blue-100">
                Solicita y gestiona tus citas previas en SEPE, Seguridad Social, Hacienda y más organismos oficiales
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
                <li className="text-gray-700">Citas Previas</li>
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
              <div className="flex-1">
                <div className="max-w-4xl mx-auto mb-8">
                  <p className="text-lg text-gray-700">
                    Las citas previas son obligatorias para realizar trámites en la mayoría de organismos oficiales. 
                    Aquí encontrarás guías completas para solicitar, confirmar y anular tus citas en los principales servicios públicos.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {citas.map((cita) => {
                    const Icon = cita.icon;
                    return (
                      <Link key={cita.id} href={cita.link} className="group">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 h-full flex flex-col">
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${cita.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {cita.title}
                          </h3>
                          <p className="text-gray-600 flex-1">
                            {cita.description}
                          </p>
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
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Consejo Importante</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Las citas previas suelen tener alta demanda. Te recomendamos revisar la disponibilidad 
                      regularmente y no esperar al último momento para solicitar tu cita.
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

