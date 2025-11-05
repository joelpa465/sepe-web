import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Briefcase, 
  Baby, 
  Heart, 
  BarChart, 
  FileText, 
  Baby as BabyIcon,
  Phone,
  Lightbulb,
  DollarSign
} from "lucide-react";

export const metadata: Metadata = {
  title: "Prestaciones SEPE - Desempleo, Maternidad, Hijo a Cargo",
  description: "Todas las prestaciones SEPE: desempleo, maternidad, paternidad, hijo a cargo, prestaciones contributivas y no contributivas. Cómo solicitarlas y requisitos.",
  keywords: ["prestaciones sepe", "prestación desempleo", "baja maternidad", "prestación hijo a cargo", "prestación contributiva", "baja paternidad"],
  alternates: {
    canonical: "/categorias/prestaciones-sepe",
  },
};

const prestaciones = [
  {
    id: "prestacion-desempleo",
    title: "Prestación por Desempleo",
    description: "Ayuda económica temporal para trabajadores en situación de desempleo que cumplan los requisitos de cotización.",
    icon: Briefcase,
    gradient: "from-purple-500 to-purple-600",
    link: "/prestaciones/desempleo",
    cantidad: "Hasta 1.087,46€/mes"
  },
  {
    id: "hijo-a-cargo",
    title: "Prestación por Hijo a Cargo",
    description: "Ayuda económica mensual para familias con hijos a cargo hasta los 18 años (o más si están estudiando).",
    icon: Baby,
    gradient: "from-pink-500 to-pink-600",
    link: "/prestaciones/hijo-a-cargo",
    cantidad: "341€/año por hijo"
  },
  {
    id: "baja-maternidad",
    title: "Baja por Maternidad",
    description: "Prestación económica durante el periodo de descanso maternal tras el nacimiento o adopción de un hijo.",
    icon: Heart,
    gradient: "from-rose-500 to-rose-600",
    link: "/prestaciones/maternidad",
    cantidad: "100% de la base reguladora"
  },
  {
    id: "prestacion-contributiva",
    title: "Prestación Contributiva",
    description: "Prestación contributiva por desempleo basada en las cotizaciones realizadas durante el empleo.",
    icon: BarChart,
    gradient: "from-indigo-500 to-indigo-600",
    link: "/prestaciones/contributiva",
    cantidad: "Variable según cotización"
  },
  {
    id: "prestacion-no-contributiva",
    title: "Prestación No Contributiva",
    description: "Ayuda para desempleados que no reúnen requisitos para la prestación contributiva.",
    icon: FileText,
    gradient: "from-green-500 to-green-600",
    link: "/prestaciones/no-contributiva",
    cantidad: "80% IPREM = 497€/mes"
  },
  {
    id: "baja-paternidad",
    title: "Baja por Paternidad",
    description: "Permiso retribuido para progenitores durante 16 semanas tras el nacimiento o adopción.",
    icon: BabyIcon,
    gradient: "from-blue-500 to-blue-600",
    link: "/prestaciones/paternidad",
    cantidad: "100% de la base reguladora"
  }
];

export default function PrestacionesSepePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <FileText className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Prestaciones SEPE
              </h1>
              <p className="text-xl text-purple-100">
                Todas las prestaciones sociales y económicas que puedes solicitar
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
                <li className="text-gray-700">Prestaciones SEPE</li>
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
                    Las prestaciones SEPE son ayudas económicas destinadas a trabajadores en diferentes situaciones 
                    (desempleo, familia, maternidad, etc.). Aquí encontrarás toda la información sobre cada prestación.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {prestaciones.map((prestacion) => {
                    const Icon = prestacion.icon;
                    return (
                      <Link key={prestacion.id} href={prestacion.link} className="group">
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 h-full flex flex-col">
                          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${prestacion.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {prestacion.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">
                            {prestacion.description}
                          </p>
                          
                          {prestacion.cantidad && (
                            <div className="mb-4 flex items-center text-sm">
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold mr-2">
                                <DollarSign className="w-4 h-4" />
                              </span>
                              <span className="text-gray-700 font-semibold">{prestacion.cantidad}</span>
                            </div>
                          )}
                          
                          <div className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                            Ver Detalles
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-900 mb-2">¿Dudas sobre tu prestación?</h3>
                    <p className="text-purple-800 leading-relaxed">
                      Si tienes dudas sobre tus prestaciones, puedes llamar al SEPE al <strong>900 81 24 00</strong> 
                      o consultar nuestro tutorial de contacto.
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

