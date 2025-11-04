import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos por CCAA - Barcelona, Madrid, Sevilla, Málaga, Valencia, Bilbao",
  description: "Cursos SEPE por Comunidad Autónoma: Barcelona, Madrid, Sevilla, Málaga, Valencia, Bilbao. Formación profesional gratuita en tu región.",
  keywords: ["cursos inem barcelona", "cursos inem madrid", "cursos inem sevilla", "cursos inem malaga", "cursos inem valencia", "cursos inem bilbao"],
  alternates: {
    canonical: "/categorias/cursos-ccaa",
  },
};

const ciudades = [
  { id: "barcelona", nombre: "Barcelona", icon: "🏙️", cursos: 45 },
  { id: "madrid", nombre: "Madrid", icon: "🏛️", cursos: 52 },
  { id: "sevilla", nombre: "Sevilla", icon: "🎭", cursos: 38 },
  { id: "malaga", nombre: "Málaga", icon: "🌴", cursos: 32 },
  { id: "valencia", nombre: "Valencia", icon: "🍊", cursos: 28 },
  { id: "bilbao", nombre: "Bilbao", icon: "⚡", cursos: 24 }
];

export default function CursosCcaaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">🗺️</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Cursos por CCAA
              </h1>
              <p className="text-xl text-blue-100">
                Encuentra los cursos de formación profesional disponibles en tu Comunidad Autónoma
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
                <li className="text-gray-700">Cursos por CCAA</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Los cursos SEPE varían según tu Comunidad Autónoma. Selecciona tu provincia para ver 
                los cursos disponibles en tu zona.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ciudades.map((ciudad) => (
                <Link key={ciudad.id} href={`/cursos-ccaa/${ciudad.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full">
                    <div className="text-5xl mb-4">{ciudad.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {ciudad.nombre}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {ciudad.cursos} cursos disponibles
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Ver Cursos
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
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

