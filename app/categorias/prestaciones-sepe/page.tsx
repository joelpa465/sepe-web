import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

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
    icon: "💼",
    link: "/prestaciones/desempleo",
    cantidad: "Hasta 1.087,46€/mes"
  },
  {
    id: "hijo-a-cargo",
    title: "Prestación por Hijo a Cargo",
    description: "Ayuda económica mensual para familias con hijos a cargo hasta los 18 años (o más si están estudiando).",
    icon: "👶",
    link: "/prestaciones/hijo-a-cargo",
    cantidad: "341€/año por hijo"
  },
  {
    id: "baja-maternidad",
    title: "Baja por Maternidad",
    description: "Prestación económica durante el periodo de descanso maternal tras el nacimiento o adopción de un hijo.",
    icon: "🤱",
    link: "/prestaciones/maternidad",
    cantidad: "100% de la base reguladora"
  },
  {
    id: "prestacion-contributiva",
    title: "Prestación Contributiva",
    description: "Prestación contributiva por desempleo basada en las cotizaciones realizadas durante el empleo.",
    icon: "📊",
    link: "/prestaciones/contributiva",
    cantidad: "Variable según cotización"
  },
  {
    id: "prestacion-no-contributiva",
    title: "Prestación No Contributiva",
    description: "Ayuda para desempleados que no reúnen requisitos para la prestación contributiva.",
    icon: "📋",
    link: "/prestaciones/no-contributiva",
    cantidad: "80% IPREM = 497€/mes"
  },
  {
    id: "baja-paternidad",
    title: "Baja por Paternidad",
    description: "Permiso retribuido para progenitores durante 16 semanas tras el nacimiento o adopción.",
    icon: "👨‍🍼",
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
              <div className="text-5xl mb-4">📋</div>
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
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Las prestaciones SEPE son ayudas económicas destinadas a trabajadores en diferentes situaciones 
                (desempleo, familia, maternidad, etc.). Aquí encontrarás toda la información sobre cada prestación.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {prestaciones.map((prestacion) => (
                <div key={prestacion.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{prestacion.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {prestacion.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {prestacion.description}
                      </p>
                      
                      {prestacion.cantidad && (
                        <div className="mb-4 flex items-center text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold mr-2">
                            💰
                          </span>
                          <span className="text-gray-700 font-semibold">{prestacion.cantidad}</span>
                        </div>
                      )}
                      
                      <Link
                        href={prestacion.link}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Ver Detalles
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
                <h3 className="text-lg font-bold text-purple-900 mb-2">📞 ¿Dudas sobre tu prestación?</h3>
                <p className="text-purple-800">
                  Si tienes dudas sobre tus prestaciones, puedes llamar al SEPE al <strong>900 81 24 00</strong> 
                  o consultar nuestro tutorial de contacto.
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

