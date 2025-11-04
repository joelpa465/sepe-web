import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = getCourseById(id);
  
  if (!course) {
    return {
      title: "Curso no encontrado",
      description: "El curso solicitado no está disponible.",
    };
  }
  
  return {
    title: course.title,
    description: course.fullDescription,
    keywords: [course.category.toLowerCase(), ...course.tags],
    openGraph: {
      title: course.title,
      description: course.fullDescription,
      type: "article",
      publishedTime: "2024-01-01",
    },
    alternates: {
      canonical: `/cursos/${id}`,
    },
  };
}

// Función para obtener datos del curso (en producción vendría de una API o base de datos)
function getCourseById(id: string) {
  const courses: Record<string, any> = {
    "1": {
      title: "Certificado Profesional en Marketing Digital",
      fullDescription: "Curso completo de marketing digital que te permitirá dominar las estrategias más efectivas para promocionar productos y servicios online. Aprende SEO, publicidad en redes sociales, email marketing, análisis de datos y mucho más. Certificación oficial incluida.",
      category: "Marketing",
      duration: "300 horas",
      modality: "Online",
      level: "Intermedio",
      startDate: "Próximamente",
      tags: ["marketing digital", "seo", "redes sociales", "email marketing", "analítica"],
      objectives: [
        "Aprender estrategias de marketing digital efectivas",
        "Dominar herramientas de SEO y SEM",
        "Crear campañas en redes sociales",
        "Analizar datos y métricas de marketing",
        "Desarrollar estrategias de email marketing"
      ],
      content: [
        "Fundamentos del Marketing Digital",
        "SEO y Posicionamiento Web",
        "Publicidad en Redes Sociales",
        "Email Marketing y Automatización",
        "Analítica Web y KPIs",
        "Content Marketing",
        "E-commerce y Conversión"
      ]
    },
    "2": {
      title: "Auxiliar de Enfermería",
      fullDescription: "Formación completa en atención sanitaria que te prepara para trabajar como auxiliar de enfermería en centros sanitarios. Aprende técnicas de enfermería, cuidados al paciente, primeros auxilios y protocolos sanitarios.",
      category: "Sanidad",
      duration: "450 horas",
      modality: "Presencial",
      level: "Básico",
      startDate: "Próximamente",
      tags: ["enfermería", "sanidad", "atención sanitaria", "cuidados", "salud"],
      objectives: [
        "Aplicar técnicas básicas de enfermería",
        "Proporcionar cuidados al paciente",
        "Conocer protocolos sanitarios",
        "Manejar material sanitario",
        "Aplicar primeros auxilios"
      ],
      content: [
        "Fundamentos de la Enfermería",
        "Anatomía y Fisiología Humana",
        "Cuidados Básicos del Paciente",
        "Técnicas de Enfermería",
        "Protocolos Sanitarios",
        "Primeros Auxilios",
        "Formación Práctica en Centros"
      ]
    }
  };
  
  return courses[id];
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = getCourseById(id);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Curso no encontrado</h1>
            <p className="text-gray-600 mb-8">El curso solicitado no está disponible.</p>
            <Link href="/cursos" className="text-blue-600 hover:text-blue-800 font-semibold">
              Volver a Cursos
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
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li><Link href="/cursos" className="text-blue-600 hover:text-blue-800">Cursos</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">{course.title}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Course Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {course.category}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {course.modality}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                {course.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {course.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Duración</p>
                  <p className="text-lg font-semibold text-gray-900">{course.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Modalidad</p>
                  <p className="text-lg font-semibold text-gray-900">{course.modality}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Nivel</p>
                  <p className="text-lg font-semibold text-gray-900">{course.level}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Inicio</p>
                  <p className="text-lg font-semibold text-gray-900">{course.startDate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl grid md:grid-cols-2 gap-12">
              {/* Objetivos */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Objetivos del Curso</h2>
                <ul className="space-y-3">
                  {course.objectives.map((objective: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contenido */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenido del Curso</h2>
                <ul className="space-y-3">
                  {course.content.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">¿Interesado en este curso?</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Aprende todo lo que necesitas saber para inscribirte y comenzar tu formación
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/como-inscribirse"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Ver Cómo Inscribirse
                  </Link>
                  <Link
                    href="/cursos"
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Ver Otros Cursos
                  </Link>
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

