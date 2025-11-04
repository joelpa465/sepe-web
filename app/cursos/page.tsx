import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";

export const metadata: Metadata = {
  title: "Todos los Cursos SEPE",
  description: "Descubre el catálogo completo de cursos SEPE: más de 200 cursos gratuitos de formación profesional en informática, sanidad, marketing, idiomas y más. Certificación oficial incluida.",
  keywords: ["cursos sepe gratuitos", "catálogo cursos sepe", "formación profesional", "cursos certificados", "sepe inscripciones"],
  openGraph: {
    title: "Todos los Cursos SEPE - Catálogo Completo",
    description: "Más de 200 cursos gratuitos de formación profesional con certificación oficial.",
  },
  alternates: {
    canonical: "/cursos",
  },
};

// Datos de ejemplo de cursos
const allCourses = [
  {
    id: "1",
    title: "Certificado Profesional en Marketing Digital",
    description: "Aprende las estrategias más efectivas de marketing digital: SEO, publicidad en redes sociales, email marketing y análisis de datos.",
    category: "Marketing",
    duration: "300 horas",
    modality: "Online"
  },
  {
    id: "2",
    title: "Auxiliar de Enfermería",
    description: "Formación completa en atención sanitaria, técnicas de enfermería y cuidados al paciente en centros sanitarios.",
    category: "Sanidad",
    duration: "450 horas",
    modality: "Presencial"
  },
  {
    id: "3",
    title: "Desarrollo Web Full Stack",
    description: "Domina las tecnologías frontend y backend: HTML, CSS, JavaScript, React, Node.js y bases de datos.",
    category: "Informática",
    duration: "600 horas",
    modality: "Online"
  },
  {
    id: "4",
    title: "Gestión Administrativa",
    description: "Aprende técnicas avanzadas de gestión administrativa, contabilidad básica y manejo de software empresarial.",
    category: "Administración",
    duration: "400 horas",
    modality: "Mixto"
  },
  {
    id: "5",
    title: "Inglés Profesional B2",
    description: "Curso intensivo de inglés profesional para mejorar tu nivel y obtener la certificación B2.",
    category: "Idiomas",
    duration: "200 horas",
    modality: "Online"
  },
  {
    id: "6",
    title: "Atención al Cliente y Servicios",
    description: "Formación en técnicas de atención al cliente, resolución de conflictos y comunicación efectiva.",
    category: "Turismo",
    duration: "180 horas",
    modality: "Presencial"
  },
  {
    id: "7",
    title: "Programación en Python",
    description: "Aprende Python desde cero: programación orientada a objetos, frameworks web y ciencia de datos.",
    category: "Informática",
    duration: "500 horas",
    modality: "Online"
  },
  {
    id: "8",
    title: "Nutrición y Dietética",
    description: "Especialización en nutrición clínica, dietética y planificación de dietas saludables.",
    category: "Sanidad",
    duration: "350 horas",
    modality: "Mixto"
  }
];

export default function CursosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Catálogo de Cursos SEPE
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Explora más de 200 cursos gratuitos de formación profesional con certificación oficial
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="bg-gray-50 py-8 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">
                Todos los Cursos
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Informática
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Sanidad
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Marketing
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Idiomas
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Administración
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-100">
                Turismo
              </button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1">
                <div className="mb-8">
                  <p className="text-gray-600">
                    Mostrando <span className="font-semibold text-gray-900">{allCourses.length} cursos</span> disponibles
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      {...course}
                    />
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Cargar Más Cursos
                  </button>
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
      </main>
      
      <Footer />
    </div>
  );
}

