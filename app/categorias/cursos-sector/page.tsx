import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos por Sector - SEO, Youtube, Marketing Digital, Programación",
  description: "Cursos SEPE por sector profesional: SEO, Youtube, Marketing Digital, Programación, Diseño Web y más. Formación especializada gratuita.",
  keywords: ["curso seo avanzado", "curso youtube", "cursos sepe barcelona", "cursos sepe madrid", "curso marketing digital", "curso programacion"],
  alternates: {
    canonical: "/categorias/cursos-sector",
  },
};

const sectores = [
  { id: "seo-avanzado", nombre: "SEO Avanzado", icon: "🔍", cursos: 28, descripcion: "Posicionamiento web y marketing online" },
  { id: "youtube", nombre: "Youtube y Redes Sociales", icon: "📺", cursos: 18, descripcion: "Creación de contenido y monetización" },
  { id: "programacion", nombre: "Programación", icon: "💻", cursos: 32, descripcion: "Desarrollo web y aplicaciones" },
  { id: "marketing-digital", nombre: "Marketing Digital", icon: "📊", cursos: 25, descripcion: "Estrategias digitales y publicidad" },
  { id: "barcelona", nombre: "Cursos SEPE Barcelona", icon: "🏙️", cursos: 45, descripcion: "Formación profesional en Barcelona" },
  { id: "madrid", nombre: "Cursos SEPE Madrid", icon: "🏛️", cursos: 52, descripcion: "Formación profesional en Madrid" }
];

export default function CursosSectorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">💼</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Cursos por Sector
              </h1>
              <p className="text-xl text-green-100">
                Formación profesional especializada por sector: elige tu área y encuentra tu curso ideal
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
                <li className="text-gray-700">Cursos por Sector</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Formación profesional especializada en los sectores más demandados del mercado laboral. 
                Selecciona tu sector y encuentra el curso perfecto para tu carrera.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectores.map((sector) => (
                <Link key={sector.id} href={`/cursos-sector/${sector.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200 h-full">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{sector.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                          {sector.nombre}
                        </h3>
                        <p className="text-sm text-blue-600 font-semibold">{sector.cursos} cursos</p>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {sector.descripcion}
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

