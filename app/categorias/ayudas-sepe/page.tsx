import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  DollarSign,
  Users,
  Heart,
  Home,
  Baby,
  GraduationCap,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ayudas SEPE - Ingreso Mínimo Vital, Ayudas Alquiler, Discapacidad",
  description: "Todas las ayudas SEPE disponibles: Ingreso Mínimo Vital, ayudas alquiler, madres solteras, discapacidad, ayuda familiar. Requisitos y cómo solicitarlas.",
  keywords: ["ayudas sepe", "ingreso mínimo vital", "ayudas alquiler", "ayudas madres solteras", "ayudas discapacidad", "ayuda familiar"],
  alternates: {
    canonical: "/categorias/ayudas-sepe",
  },
};

const ayudas = [
  {
    id: "ingreso-minimo-vital",
    title: "Ingreso Mínimo Vital",
    description: "Ayuda económica para garantizar un ingreso mínimo mensual a hogares en situación de vulnerabilidad económica.",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-600",
    link: "/ayudas/ingreso-minimo-vital",
    requisitos: ["Ingresos inferiores a límite", "Situación de vulnerabilidad", "No percibir otras prestaciones"]
  },
  {
    id: "ayudas-madres-solteras",
    title: "Ayudas para Madres Solteras",
    description: "Prestaciones específicas para madres solteras o monoparentales: ayudas económicas, bonificaciones y apoyo familiar.",
    icon: Baby,
    gradient: "from-pink-500 to-rose-600",
    link: "/ayudas/madres-solteras",
    requisitos: ["Ser madre soltera", "Sin ingresos o ingresos bajos", "Custodia de menores"]
  },
  {
    id: "ayudas-discapacidad",
    title: "Ayudas para Personas con Discapacidad",
    description: "Ayudas y prestaciones para personas con discapacidad igual o superior al 33%: económicas, fiscales y laborales.",
    icon: Heart,
    gradient: "from-blue-500 to-indigo-600",
    link: "/ayudas/discapacidad",
    requisitos: ["Certificado de discapacidad", "Grado mínimo 33%", "Documentación oficial"]
  },
  {
    id: "ayudas-alquiler",
    title: "Ayudas al Alquiler",
    description: "Programas de ayuda al alquiler: bonificaciones, subsidios y ayudas para pagar la vivienda en alquiler.",
    icon: Home,
    gradient: "from-orange-500 to-red-600",
    link: "/ayudas/alquiler",
    requisitos: ["Contrato de alquiler", "Ingresos dentro del límite", "Gastos de vivienda"]
  },
  {
    id: "ayuda-familiar",
    title: "Ayuda Familiar",
    description: "Ayudas para familias: complemento de renta familiar, ayudas por hijo y otras prestaciones familiares.",
    icon: Users,
    gradient: "from-purple-500 to-pink-600",
    link: "/ayudas/familiar",
    requisitos: ["Hijos a cargo", "Ingresos familiares", "Certificado de convivencia"]
  },
  {
    id: "ayudas-jovenes",
    title: "Ayudas para Jóvenes",
    description: "Programas específicos de ayuda para jóvenes: formación, empleo, vivienda y emancipación.",
    icon: GraduationCap,
    gradient: "from-cyan-500 to-blue-600",
    link: "/ayudas/jovenes",
    requisitos: ["Edad entre 18-35 años", "Sin ingresos o bajos", "Acceso a formación/empleo"]
  }
];

export default function AyudasSepePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Ayudas SEPE
              </h1>
              <p className="text-xl text-green-100">
                Todas las ayudas y prestaciones económicas disponibles del SEPE y organismos públicos
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
                <li className="text-gray-700">Ayudas SEPE</li>
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
                    El SEPE ofrece diversas ayudas económicas para diferentes situaciones de necesidad. 
                    Aquí encontrarás toda la información sobre requisitos, cuantías y cómo solicitarlas.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {ayudas.map((ayuda) => {
                    const Icon = ayuda.icon;
                    return (
                      <Link
                        key={ayuda.id}
                        href={ayuda.link}
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex flex-col">
                          {/* Icono con gradiente */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${ayuda.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            {ayuda.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {ayuda.description}
                          </p>
                          
                          {ayuda.requisitos && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-900 mb-2">Requisitos principales:</h4>
                              <ul className="space-y-1">
                                {ayuda.requisitos.map((req, idx) => (
                                  <li key={idx} className="flex items-start text-sm text-gray-600">
                                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors mt-auto">
                            Ver Detalles
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
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-green-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Información Actualizada 2024
                </h3>
                <p className="text-green-800">
                  Todas las ayudas están actualizadas con las normativas vigentes en 2024. 
                  Las cuantías y requisitos pueden variar según tu situación particular y tu Comunidad Autónoma.
                </p>
              </div>
              
              {/* Información de contacto */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-green-600" />
                  ¿Dudas sobre tu ayuda?
                </h3>
                <p className="text-gray-700 mb-4">
                  Si necesitas información personalizada sobre cualquier ayuda:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                  <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
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

