import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Code, 
  Globe, 
  Smartphone, 
  Database,
  Lightbulb,
  Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos de Programación SEPE - Desarrollo Web y Apps Gratuito 2024",
  description: "Cursos gratuitos de Programación del SEPE: desarrollo web, aplicaciones móviles, bases de datos, lenguajes de programación y más. Certificación oficial.",
  keywords: ["curso programacion", "curso programacion sepe", "formación programacion gratis", "desarrollo web", "aplicaciones móviles", "lenguajes programacion"],
  alternates: {
    canonical: "/cursos-sector/programacion",
  },
};

const modulos = [
  {
    id: "web",
    title: "Desarrollo Web",
    description: "HTML, CSS, JavaScript, React, Node.js, APIs REST y desarrollo full-stack. Creación de aplicaciones web modernas.",
    icon: Globe,
    gradient: "from-blue-500 to-blue-600",
    horas: "80 horas"
  },
  {
    id: "movil",
    title: "Desarrollo Móvil",
    description: "Android, iOS, React Native, Flutter. Creación de aplicaciones móviles nativas y multiplataforma.",
    icon: Smartphone,
    gradient: "from-green-500 to-green-600",
    horas: "70 horas"
  },
  {
    id: "backend",
    title: "Backend y Bases de Datos",
    description: "Python, Java, PHP, MySQL, MongoDB, APIs, servidores y arquitectura de software.",
    icon: Database,
    gradient: "from-purple-500 to-purple-600",
    horas: "65 horas"
  },
  {
    id: "fundamentos",
    title: "Fundamentos de Programación",
    description: "Lógica de programación, algoritmos, estructuras de datos, POO y buenas prácticas de desarrollo.",
    icon: Code,
    gradient: "from-orange-500 to-orange-600",
    horas: "60 horas"
  },
  {
    id: "herramientas",
    title: "Herramientas y DevOps",
    description: "Git, GitHub, Docker, CI/CD, testing, despliegue y herramientas de desarrollo profesional.",
    icon: Zap,
    gradient: "from-indigo-500 to-indigo-600",
    horas: "40 horas"
  }
];

export default function CursoProgramacionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg">
                  <Code className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Cursos de Programación
              </h1>
              <p className="text-xl text-indigo-100">
                Formación profesional gratuita en programación, desarrollo web, aplicaciones móviles y tecnologías de software. Certificación oficial del SEPE.
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
                <li className="text-gray-700">Programación</li>
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
                    Los cursos de Programación del SEPE te preparan para convertirte en desarrollador profesional. 
                    Aprenderás los lenguajes más demandados, frameworks modernos y las mejores prácticas del desarrollo de software.
                  </p>
                  <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-lg">
                    <p className="text-indigo-800">
                      <strong>Duración:</strong> 315 horas | <strong>Modalidad:</strong> Online/Presencial | <strong>Certificación:</strong> Oficial
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {modulos.map((modulo) => {
                    const Icon = modulo.icon;
                    return (
                      <div key={modulo.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                        <div
                          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${modulo.gradient} text-white mb-4`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {modulo.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{modulo.description}</p>
                        <p className="text-sm text-blue-600 font-semibold">{modulo.horas}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué aprenderás?</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span>Desarrollo web frontend y backend con tecnologías modernas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span>Creación de aplicaciones móviles para Android e iOS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span>Gestión de bases de datos y APIs REST</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span>Fundamentos de programación y algoritmos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span>Herramientas de desarrollo y control de versiones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">✓</span>
                      <span>Buenas prácticas y metodologías ágiles</span>
                    </li>
                  </ul>
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
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-indigo-900 mb-2">Requisitos del curso</h3>
                    <p className="text-indigo-800 leading-relaxed">
                      Para acceder a los cursos de Programación es necesario tener conocimientos básicos de informática y lógica. 
                      No se requieren conocimientos previos de programación, aunque es útil. El curso está dirigido a personas 
                      interesadas en el desarrollo de software, cambio de carrera profesional o emprendedores tecnológicos.
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

