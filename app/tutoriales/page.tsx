import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  FileText, 
  ScrollText, 
  RefreshCw, 
  Lock, 
  BarChart, 
  FileCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tutoriales SEPE - Guías Paso a Paso",
  description: "Tutoriales detallados para gestionar tu formación en SEPE: cómo inscribirte en cursos, certificados profesionales, renovación del paro y más. Guías paso a paso con capturas.",
  keywords: ["tutoriales sepe", "inscripción sepe", "certificados profesionales", "renovación paro", "guías sepe"],
  openGraph: {
    title: "Tutoriales SEPE - Guías Paso a Paso para Trámites",
    description: "Aprende a gestionar tu formación en SEPE con nuestros tutoriales detallados paso a paso.",
  },
  alternates: {
    canonical: "/tutoriales",
  },
};

const tutorials = [
  {
    id: "1",
    title: "Cómo Inscribirse en un Curso SEPE Online",
    description: "Guía paso a paso para inscribirte en cursos de formación profesional a través de la sede electrónica del SEPE.",
    icon: FileText,
    gradient: "from-blue-500 to-indigo-600",
    category: "Inscripción",
    duration: "10 min",
    difficulty: "Fácil",
  },
  {
    id: "2",
    title: "Descargar Certificados Profesionales",
    description: "Aprende a descargar tus certificados profesionales una vez finalizado el curso SEPE.",
    icon: ScrollText,
    gradient: "from-green-500 to-emerald-600",
    category: "Certificados",
    duration: "5 min",
    difficulty: "Fácil",
  },
  {
    id: "3",
    title: "Renovar la Demanda de Empleo",
    description: "Tutorial completo para renovar tu demanda de empleo de forma online y no perder las prestaciones.",
    icon: RefreshCw,
    gradient: "from-purple-500 to-pink-600",
    category: "Prestaciones",
    duration: "8 min",
    difficulty: "Fácil",
  },
  {
    id: "4",
    title: "Acceder a la Sede Electrónica del SEPE",
    description: "Guía para crear tu cuenta y acceder a todos los servicios online del SEPE.",
    icon: Lock,
    gradient: "from-orange-500 to-red-600",
    category: "Acceso",
    duration: "12 min",
    difficulty: "Medio",
  },
  {
    id: "5",
    title: "Consultar tu Historial Formativo",
    description: "Cómo acceder y consultar todos los cursos que has realizado en el SEPE.",
    icon: BarChart,
    gradient: "from-cyan-500 to-blue-600",
    category: "Consulta",
    duration: "5 min",
    difficulty: "Fácil",
  },
  {
    id: "6",
    title: "Solicitar Certificado de Prestaciones",
    description: "Aprende a solicitar tu certificado de prestaciones por desempleo de forma online.",
    icon: FileCheck,
    gradient: "from-violet-500 to-purple-600",
    category: "Certificados",
    duration: "7 min",
    difficulty: "Fácil",
  },
];

export default function TutorialesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Tutoriales SEPE
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Guías paso a paso para gestionar todos tus trámites en SEPE de forma fácil y rápida
            </p>
          </div>
        </section>

        {/* Featured Tutorial */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="flex justify-center mb-4">
                        <FileText className="w-16 h-16" />
                      </div>
                      <span className="text-sm font-medium opacity-90">Tutorial Destacado</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                      Inscripción
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Cómo Inscribirse en un Curso SEPE Online
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Guía paso a paso para inscribirte en cursos de formación profesional a través de la sede electrónica del SEPE. Aprende a acceder, buscar cursos y completar tu inscripción.
                    </p>
                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        10 min
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        Fácil
                      </div>
                    </div>
                    <Link
                      href="/como-inscribirse"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Leer Tutorial Completo
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Tutorials */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Todos los Tutoriales</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tutorials.map((tutorial) => {
                    const Icon = tutorial.icon;
                    return (
                    <div key={tutorial.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
                      <div className="mb-4">
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${tutorial.gradient} flex items-center justify-center text-white shadow-md`}>
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                        {tutorial.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {tutorial.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {tutorial.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          {tutorial.difficulty}
                        </div>
                      </div>
                      <Link
                        href={`/tutoriales/${tutorial.id}`}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Leer Tutorial
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    );
                  })}
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Preguntas Frecuentes
              </h2>
              
              <div className="space-y-4">
                <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    ¿Necesito estar inscrito como demandante de empleo para hacer cursos SEPE?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    No necesariamente. Los cursos SEPE están disponibles para demandantes de empleo, trabajadores ocupados y autónomos, dependiendo de cada convocatoria.
                  </p>
                </details>
                
                <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    ¿Cómo recibo mi certificado al finalizar el curso?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Una vez completado el curso, podrás descargar tu certificado profesional desde la sede electrónica del SEPE. Consulta nuestro tutorial para ver el proceso paso a paso.
                  </p>
                </details>
                
                <details className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    ¿Cuánto tiempo tardan en confirmar la inscripción?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Generalmente, recibirás la confirmación de inscripción en un plazo de 5-10 días laborables. Te notificarán por email o SMS al teléfono registrado.
                  </p>
                </details>
              </div>
              
              <div className="text-center mt-12">
                <Link
                  href="/preguntas-frecuentes"
                  className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Ver Más Preguntas Frecuentes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

