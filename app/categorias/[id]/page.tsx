import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const category = getCategoryById(id);
  
  if (!category) {
    return {
      title: "Categoría no encontrada",
    };
  }
  
  return {
    title: `Cursos de ${category.name} SEPE`,
    description: category.description,
    keywords: [category.keyword, "cursos sepe", "formación profesional"],
    openGraph: {
      title: `Cursos de ${category.name} SEPE`,
      description: category.description,
    },
    alternates: {
      canonical: `/categorias/${id}`,
    },
  };
}

function getCategoryById(id: string) {
  const categories: Record<string, any> = {
    "informatica": {
      name: "Informática y Tecnología",
      description: "Descubre todos los cursos de informática y tecnología SEPE: programación, diseño web, ofimática y más. Formación profesional certificada.",
      icon: "💻",
      keyword: "cursos informática sepe",
      courses: [
        {
          id: "3",
          title: "Desarrollo Web Full Stack",
          description: "Domina las tecnologías frontend y backend: HTML, CSS, JavaScript, React, Node.js y bases de datos.",
          category: "Informática",
          duration: "600 horas",
          modality: "Online"
        },
        {
          id: "7",
          title: "Programación en Python",
          description: "Aprende Python desde cero: programación orientada a objetos, frameworks web y ciencia de datos.",
          category: "Informática",
          duration: "500 horas",
          modality: "Online"
        },
      ]
    },
    "sanidad": {
      name: "Sanidad y Salud",
      description: "Cursos de sanidad y salud SEPE: auxiliar de enfermería, nutrición, atención sanitaria. Formación profesional en el sector salud.",
      icon: "🏥",
      keyword: "cursos sanidad sepe",
      courses: [
        {
          id: "2",
          title: "Auxiliar de Enfermería",
          description: "Formación completa en atención sanitaria, técnicas de enfermería y cuidados al paciente en centros sanitarios.",
          category: "Sanidad",
          duration: "450 horas",
          modality: "Presencial"
        },
        {
          id: "8",
          title: "Nutrición y Dietética",
          description: "Especialización en nutrición clínica, dietética y planificación de dietas saludables.",
          category: "Sanidad",
          duration: "350 horas",
          modality: "Mixto"
        },
      ]
    },
    "marketing": {
      name: "Marketing y Comercio",
      description: "Cursos de marketing digital SEPE: estrategias de marketing, publicidad, redes sociales. Certificación profesional en marketing.",
      icon: "📊",
      keyword: "cursos marketing sepe",
      courses: [
        {
          id: "1",
          title: "Certificado Profesional en Marketing Digital",
          description: "Aprende las estrategias más efectivas de marketing digital: SEO, publicidad en redes sociales, email marketing y análisis de datos.",
          category: "Marketing",
          duration: "300 horas",
          modality: "Online"
        },
      ]
    },
    "idiomas": {
      name: "Idiomas",
      description: "Cursos de idiomas SEPE: inglés, francés, alemán y más. Formación profesional en idiomas para mejorar tus oportunidades laborales.",
      icon: "🌍",
      keyword: "cursos idiomas sepe",
      courses: [
        {
          id: "5",
          title: "Inglés Profesional B2",
          description: "Curso intensivo de inglés profesional para mejorar tu nivel y obtener la certificación B2.",
          category: "Idiomas",
          duration: "200 horas",
          modality: "Online"
        },
      ]
    },
    "administracion": {
      name: "Administración y Gestión",
      description: "Cursos de administración y gestión SEPE: gestión administrativa, contabilidad, recursos humanos. Formación profesional en administración.",
      icon: "📋",
      keyword: "cursos administración sepe",
      courses: [
        {
          id: "4",
          title: "Gestión Administrativa",
          description: "Aprende técnicas avanzadas de gestión administrativa, contabilidad básica y manejo de software empresarial.",
          category: "Administración",
          duration: "400 horas",
          modality: "Mixto"
        },
      ]
    },
    "turismo": {
      name: "Turismo y Hostelería",
      description: "Cursos de turismo y hostelería SEPE: atención al cliente, recepción hotelera, cocina. Certificación profesional en turismo.",
      icon: "🏨",
      keyword: "cursos turismo sepe",
      courses: [
        {
          id: "6",
          title: "Atención al Cliente y Servicios",
          description: "Formación en técnicas de atención al cliente, resolución de conflictos y comunicación efectiva.",
          category: "Turismo",
          duration: "180 horas",
          modality: "Presencial"
        },
      ]
    },
  };
  
  return categories[id];
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const category = getCategoryById(id);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Categoría no encontrada</h1>
            <Link href="/categorias" className="text-blue-600 hover:text-blue-800 font-semibold">
              Volver a Categorías
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Cursos de {category.name}
              </h1>
              <p className="text-xl text-blue-100">
                {category.description}
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
                <li><Link href="/cursos" className="text-blue-600 hover:text-blue-800">Cursos</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">{category.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Courses */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-gray-600">
                Mostrando <span className="font-semibold text-gray-900">{category.courses.length} cursos</span> de {category.name}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.courses.map((course: any) => (
                <CourseCard
                  key={course.id}
                  {...course}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Explora otras categorías o consulta el catálogo completo de cursos
              </p>
              <Link
                href="/cursos"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ver Todos los Cursos
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

