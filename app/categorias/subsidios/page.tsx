import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subsidios - Desempleo, Mayores 45, Insuficiencia Cotización, Mayores 52",
  description: "Todos los subsidios disponibles: por desempleo, mayores de 45 años, insuficiencia de cotización, mayores de 52, subsidio agrario. Requisitos y solicitud.",
  keywords: ["subsidio desempleo", "subsidio mayores 45", "insuficiencia cotizacion", "subsidio mayores 52", "subsidio agrario", "renta activa"],
  alternates: {
    canonical: "/categorias/subsidios",
  },
};

const subsidios = [
  {
    id: "subsidio-desempleo",
    title: "Subsidio por Desempleo",
    description: "Ayuda económica para desempleados que no reúnen requisitos para prestación contributiva.",
    icon: "💼",
    link: "/subsidios/desempleo",
    cantidad: "497€/mes"
  },
  {
    id: "subsidio-mayores-45",
    title: "Subsidio Mayores 45 Años",
    description: "Ayuda específica para desempleados mayores de 45 años con cargas familiares.",
    icon: "👨‍💼",
    link: "/subsidios/mayores-45",
    cantidad: "497€/mes"
  },
  {
    id: "insuficiencia-cotizacion",
    title: "Insuficiencia de Cotización",
    description: "Subsidio para quienes no alcanzan los períodos mínimos de cotización requeridos.",
    icon: "📉",
    link: "/subsidios/insuficiencia-cotizacion",
    cantidad: "497€/mes"
  },
  {
    id: "subsidio-mayores-52",
    title: "Subsidio Mayores 52 Años",
    description: "Ayuda especial hasta alcanzar edad de jubilación para mayores de 52 años.",
    icon: "👴",
    link: "/subsidios/mayores-52",
    cantidad: "497€/mes"
  },
  {
    id: "subsidio-agrario",
    title: "Subsidio Agrario",
    description: "Prestación específica para trabajadores agrarios por cuenta ajena en Andalucía y Extremadura.",
    icon: "🌾",
    link: "/subsidios/agrario",
    cantidad: "Variable"
  },
  {
    id: "renta-activa-insercion",
    title: "Renta Activa de Inserción",
    description: "Ayuda para desempleados de larga duración con especiales dificultades de inserción laboral.",
    icon: "🔗",
    link: "/subsidios/renta-activa",
    cantidad: "479€/mes"
  }
];

export default function SubsidiosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">💸</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Subsidios
              </h1>
              <p className="text-xl text-orange-100">
                Ayudas económicas para desempleados sin derecho a prestación contributiva
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
                <li className="text-gray-700">Subsidios</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Los subsidios son ayudas económicas destinadas a desempleados que no pueden acceder 
                a la prestación contributiva. Aquí encontrarás información detallada sobre cada subsidio.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {subsidios.map((subsidio) => (
                <div key={subsidio.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{subsidio.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {subsidio.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {subsidio.description}
                      </p>
                      
                      {subsidio.cantidad && (
                        <div className="mb-4 flex items-center text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-semibold mr-2">
                            💰
                          </span>
                          <span className="text-gray-700 font-semibold">{subsidio.cantidad}</span>
                        </div>
                      )}
                      
                      <Link
                        href={subsidio.link}
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
      </main>
      
      <Footer />
    </div>
  );
}

