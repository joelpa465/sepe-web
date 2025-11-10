import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Building, 
  GraduationCap, 
  MapPin, 
  BookOpen,
  Lightbulb,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos SEPE Madrid - Formación Profesional por Sector 2024",
  description: "Cursos gratuitos del SEPE en Madrid por sector: informática, marketing, sanidad, idiomas y más. Formación profesional con certificación oficial en la Comunidad de Madrid.",
  keywords: ["cursos sepe madrid", "cursos inem madrid", "formación profesional madrid", "cursos gratuitos madrid", "cursos sepe comunidad madrid"],
  alternates: {
    canonical: "/cursos-sector/madrid",
  },
};

const sectores = [
  {
    id: "tecnologia",
    title: "Tecnología e Informática",
    description: "Programación, desarrollo web, aplicaciones móviles, sistemas y más. Cursos especializados en tecnología.",
    icon: BookOpen,
    gradient: "from-blue-500 to-blue-600",
    cantidad: "18 cursos disponibles"
  },
  {
    id: "marketing",
    title: "Marketing Digital",
    description: "SEO, redes sociales, publicidad online, email marketing y estrategias digitales. Especialízate en marketing.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-purple-600",
    cantidad: "15 cursos disponibles"
  },
  {
    id: "sanidad",
    title: "Sanidad y Salud",
    description: "Auxiliar de enfermería, atención sociosanitaria, primeros auxilios y cuidados especializados.",
    icon: GraduationCap,
    gradient: "from-green-500 to-green-600",
    cantidad: "12 cursos disponibles"
  },
  {
    id: "idiomas",
    title: "Idiomas",
    description: "Inglés, francés, alemán, chino y más. Certificaciones oficiales de idiomas para el empleo.",
    icon: MapPin,
    gradient: "from-orange-500 to-orange-600",
    cantidad: "7 cursos disponibles"
  }
];

export default function CursosSectorMadridPage() {
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
                  <Building className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Cursos SEPE Madrid
              </h1>
              <p className="text-xl text-blue-100">
                Formación profesional gratuita por sector en Madrid. Cursos especializados en tecnología, marketing, sanidad e idiomas con certificación oficial.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <Link href="/categorias/cursos-sector" className="text-blue-600 hover:text-blue-800">
                    Cursos por Sector
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Madrid</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>

              {/* Contenido principal */}
              <div className="flex-1">
                <div className="max-w-4xl mx-auto mb-10">
                  <p className="text-lg text-gray-700 mb-6">
                    Madrid ofrece una de las mayores ofertas de cursos de formación profesional del SEPE organizados por sector. 
                    Encuentra cursos especializados en tecnología, marketing digital, sanidad, idiomas y más sectores profesionales.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-blue-800">
                      <strong>Oficina SEPE Madrid:</strong> C/ Pío Baroja, 6, 28009 Madrid. Teléfono: 901 11 99 99
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {sectores.map((sector) => {
                    const Icon = sector.icon;
                    return (
                      <Link key={sector.id} href={`/cursos-ccaa/madrid`}>
                        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                          <div
                            className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${sector.gradient} text-white mb-4`}
                          >
                            <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {sector.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{sector.description}</p>
                          <p className="text-sm text-blue-600 font-semibold">{sector.cantidad}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar derecho */}
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

        {/* Consejo */}
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
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Cursos por sector en Madrid</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Los cursos del SEPE en Madrid están organizados por sectores profesionales para facilitar la búsqueda. 
                      Puedes filtrar por sector de interés y encontrar el curso perfecto para tu desarrollo profesional. 
                      También puedes ver todos los cursos disponibles en Madrid en nuestra sección de cursos por CCAA.
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

