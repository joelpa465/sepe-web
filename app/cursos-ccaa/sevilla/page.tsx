import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  GraduationCap, 
  BookOpen, 
  Laptop, 
  Briefcase,
  Lightbulb,
  Building
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos SEPE Sevilla - Formación Profesional Gratuita 2024",
  description: "Cursos gratuitos del SEPE en Sevilla: informática, marketing digital, sanidad, idiomas y más. Formación profesional con certificación oficial en Andalucía.",
  keywords: ["cursos inem sevilla", "cursos sepe sevilla", "formación profesional sevilla", "cursos gratuitos andalucía", "cursos sepe andalucía"],
  alternates: {
    canonical: "/cursos-ccaa/sevilla",
  },
};

const cursos = [
  {
    id: "informatica",
    title: "Cursos de Informática y Tecnología",
    description: "Programación, diseño web, administración de sistemas y más. Certificaciones oficiales en tecnología.",
    icon: Laptop,
    gradient: "from-blue-500 to-blue-600",
    cantidad: "10 cursos disponibles"
  },
  {
    id: "marketing",
    title: "Marketing Digital y Comunicación",
    description: "SEO, SEM, redes sociales, content marketing y estrategias digitales. Especialízate en marketing online.",
    icon: Briefcase,
    gradient: "from-purple-500 to-purple-600",
    cantidad: "7 cursos disponibles"
  },
  {
    id: "sanidad",
    title: "Cursos de Sanidad y Salud",
    description: "Auxiliar de enfermería, atención sociosanitaria, primeros auxilios y cuidados especializados.",
    icon: BookOpen,
    gradient: "from-green-500 to-green-600",
    cantidad: "9 cursos disponibles"
  },
  {
    id: "idiomas",
    title: "Idiomas y Lenguas Extranjeras",
    description: "Inglés, francés, alemán, chino y más. Certificaciones oficiales de idiomas para el empleo.",
    icon: GraduationCap,
    gradient: "from-orange-500 to-orange-600",
    cantidad: "5 cursos disponibles"
  },
  {
    id: "gestion",
    title: "Gestión y Administración",
    description: "Contabilidad, administración de empresas, recursos humanos y gestión empresarial.",
    icon: Building,
    gradient: "from-indigo-500 to-indigo-600",
    cantidad: "7 cursos disponibles"
  }
];

export default function CursosSevillaPage() {
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
                Cursos SEPE Sevilla
              </h1>
              <p className="text-xl text-blue-100">
                Formación profesional gratuita con certificación oficial en Sevilla y toda Andalucía. Más de 38 cursos disponibles.
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
                  <Link href="/categorias/cursos-ccaa" className="text-blue-600 hover:text-blue-800">
                    Cursos por CCAA
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li className="text-gray-700">Sevilla</li>
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
                    Sevilla ofrece una amplia variedad de cursos de formación profesional gratuitos del SEPE. 
                    Los cursos están adaptados a las necesidades del mercado laboral andaluz y cuentan con certificación oficial.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                    <p className="text-blue-800">
                      <strong>Oficina SEPE Sevilla:</strong> Av. de la Borbolla, s/n, 41013 Sevilla. Teléfono: 901 11 99 99
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {cursos.map((curso) => {
                    const Icon = curso.icon;
                    return (
                      <div key={curso.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${curso.gradient} text-white mb-4`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {curso.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{curso.description}</p>
                        <p className="text-sm text-blue-600 font-semibold">{curso.cantidad}</p>
                      </div>
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
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Cómo inscribirse en Sevilla</h3>
                    <p className="text-blue-800 leading-relaxed">
                      Puedes inscribirte online a través de la sede electrónica del SEPE o presencialmente en la oficina de Sevilla. 
                      Los cursos suelen tener plazas limitadas, por lo que se recomienda inscribirse con anticipación.
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

