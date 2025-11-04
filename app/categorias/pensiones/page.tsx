import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pensiones - Jubilación, Viudedad, Orfandad, Incapacidad, No Contributiva",
  description: "Todas las pensiones: jubilación máxima, viudedad, orfandad, incapacidad, pensión alimenticia, pensión no contributiva. Requisitos y solicitud.",
  keywords: ["pensiones", "pension jubilacion", "pension viudedad", "pension orfandad", "pension incapacidad", "pension maxima"],
  alternates: {
    canonical: "/categorias/pensiones",
  },
};

const pensiones = [
  {
    id: "pension-maxima",
    title: "Pensión Máxima de Jubilación",
    description: "Pensión máxima por jubilación en 2024. Requisitos y cómo calcular tu pensión de jubilación.",
    icon: "👴",
    link: "/pensiones/jubilacion-maxima",
    cantidad: "Hasta 3.175,49€/mes"
  },
  {
    id: "pension-viudedad",
    title: "Pensión de Viudedad",
    description: "Pensión para viudos/as tras el fallecimiento del cónyuge. Requisitos y solicitud.",
    icon: "💔",
    link: "/pensiones/viudedad",
    cantidad: "60% base reguladora"
  },
  {
    id: "pension-orfandad",
    title: "Pensión de Orfandad",
    description: "Pensión para menores de 21 años huérfanos de padre o madre fallecidos por accidente o enfermedad.",
    icon: "👦",
    link: "/pensiones/orfandad",
    cantidad: "20% base reguladora"
  },
  {
    id: "pension-incapacidad",
    title: "Pensión de Incapacidad",
    description: "Pensión por incapacidad permanente: requisitos, grados y cómo solicitarla.",
    icon: "♿",
    link: "/pensiones/incapacidad",
    cantidad: "Variable según grado"
  },
  {
    id: "pension-no-contributiva",
    title: "Pensión No Contributiva",
    description: "Pensión para mayores de 65 años sin recursos suficientes y sin derecho a pensión contributiva.",
    icon: "📋",
    link: "/pensiones/no-contributiva",
    cantidad: "5.639€/año"
  },
  {
    id: "pension-alimenticia",
    title: "Pensión Alimenticia",
    description: "Indemnizaciones alimenticias en divorcios y separaciones. Cálculo y solicitud.",
    icon: "👨‍👩‍👧‍👦",
    link: "/pensiones/alimenticia",
    cantidad: "Variable"
  }
];

export default function PensionesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">👴</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Pensiones
              </h1>
              <p className="text-xl text-red-100">
                Información sobre todas las pensiones: jubilación, viudedad, orfandad y más
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
                <li className="text-gray-700">Pensiones</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Las pensiones son prestaciones económicas que se conceden a quienes reúnen ciertos requisitos. 
                Aquí encontrarás información detallada sobre cada tipo de pensión.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pensiones.map((pension) => (
                <div key={pension.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{pension.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {pension.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {pension.description}
                      </p>
                      
                      {pension.cantidad && (
                        <div className="mb-4 flex items-center text-sm">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 font-semibold mr-2">
                            💰
                          </span>
                          <span className="text-gray-700 font-semibold">{pension.cantidad}</span>
                        </div>
                      )}
                      
                      <Link
                        href={pension.link}
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

