import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Másters - SEO, SEM, Marketing Digital, IA, Big Data, UX/UI",
  description: "Másters online y presenciales: SEO, SEM, Marketing Digital, Inteligencia Artificial, Big Data, UX/UI Design. Formación especializada con certificación.",
  keywords: ["masters seo", "master sem", "master marketing digital", "master inteligencia artificial", "master big data", "master ux ui"],
  alternates: {
    canonical: "/categorias/masters",
  },
};

const masters = [
  {
    id: "master-seo",
    title: "Máster SEO",
    description: "Formación completa en posicionamiento web y optimización para motores de búsqueda. Herramientas, técnicas avanzadas y certificación.",
    icon: "🔍",
    link: "/masters/seo",
    duracion: "600 horas",
    modalidad: "Online"
  },
  {
    id: "master-sem",
    title: "Máster SEM",
    description: "Publicidad en buscadores: Google Ads, Microsoft Advertising, optimización de campañas PPC y remarketing.",
    icon: "📢",
    link: "/masters/sem",
    duracion: "450 horas",
    modalidad: "Online"
  },
  {
    id: "master-marketing-digital",
    title: "Máster Marketing Digital",
    description: "Formación integral en marketing digital: estrategias, redes sociales, email marketing, analytics y e-commerce.",
    icon: "💼",
    link: "/masters/marketing-digital",
    duracion: "800 horas",
    modalidad: "Mixto"
  },
  {
    id: "master-ia",
    title: "Máster Inteligencia Artificial",
    description: "Formación en IA: machine learning, deep learning, procesamiento de lenguaje natural y aplicaciones prácticas.",
    icon: "🤖",
    link: "/masters/inteligencia-artificial",
    duracion: "1000 horas",
    modalidad: "Presencial"
  },
  {
    id: "master-big-data",
    title: "Máster Big Data",
    description: "Análisis masivo de datos: Hadoop, Spark, Python, R, business intelligence y data science.",
    icon: "📊",
    link: "/masters/big-data",
    duracion: "900 horas",
    modalidad: "Mixto"
  },
  {
    id: "master-ux-ui",
    title: "Máster UX/UI Design",
    description: "Diseño de experiencia de usuario: investigación, prototipado, diseño visual, Figma, Adobe XD y mucho más.",
    icon: "🎨",
    link: "/masters/ux-ui",
    duracion: "750 horas",
    modalidad: "Online"
  }
];

export default function MastersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-5xl mb-4">🎓</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Másters Profesionales
              </h1>
              <p className="text-xl text-cyan-100">
                Formación especializada de alto nivel con certificación profesional
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
                <li className="text-gray-700">Másters</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-8">
              <p className="text-lg text-gray-700">
                Másters especializados en las áreas más demandadas del mercado laboral. 
                Formación completa con certificación y prácticas en empresas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {masters.map((master) => (
                <div key={master.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{master.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {master.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {master.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {master.duracion && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                            ⏱️ {master.duracion}
                          </span>
                        )}
                        {master.modalidad && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            📍 {master.modalidad}
                          </span>
                        )}
                      </div>
                      
                      <Link
                        href={master.link}
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

