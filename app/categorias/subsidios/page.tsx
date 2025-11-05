import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import Link from "next/link";
import { 
  Briefcase,
  User,
  TrendingDown,
  Users,
  Sprout,
  Link as LinkIcon,
  DollarSign,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Subsidios - Desempleo, Mayores 45, Insuficiencia Cotización, Mayores 52",
  description: "Todos los subsidios disponibles: por desempleo, mayores de 45 años, insuficiencia de cotización, mayores de 52, subsidio agrario. Requisitos y solicitud.",
  keywords: ["subsidio desempleo", "subsidio mayores 45", "insuficiencia cotizacion", "subsidio mayores 52", "subsidio agrario", "renta activa"],
  alternates: {
    canonical: "/categorias/subsidios",
  },
};

const subsidios = [
  {
    id: "subsidio-desempleo",
    title: "Subsidio por Desempleo",
    description: "Ayuda económica para desempleados que no reúnen requisitos para prestación contributiva.",
    icon: Briefcase,
    gradient: "from-blue-500 to-indigo-600",
    link: "/subsidios/desempleo",
    cantidad: "497€/mes"
  },
  {
    id: "subsidio-mayores-45",
    title: "Subsidio Mayores 45 Años",
    description: "Ayuda específica para desempleados mayores de 45 años con cargas familiares.",
    icon: User,
    gradient: "from-purple-500 to-pink-600",
    link: "/subsidios/mayores-45",
    cantidad: "497€/mes"
  },
  {
    id: "insuficiencia-cotizacion",
    title: "Insuficiencia de Cotización",
    description: "Subsidio para quienes no alcanzan los períodos mínimos de cotización requeridos.",
    icon: TrendingDown,
    gradient: "from-red-500 to-orange-600",
    link: "/subsidios/insuficiencia-cotizacion",
    cantidad: "497€/mes"
  },
  {
    id: "subsidio-mayores-52",
    title: "Subsidio Mayores 52 Años",
    description: "Ayuda especial hasta alcanzar edad de jubilación para mayores de 52 años.",
    icon: Users,
    gradient: "from-teal-500 to-cyan-600",
    link: "/subsidios/mayores-52",
    cantidad: "497€/mes"
  },
  {
    id: "subsidio-agrario",
    title: "Subsidio Agrario",
    description: "Prestación específica para trabajadores agrarios por cuenta ajena en Andalucía y Extremadura.",
    icon: Sprout,
    gradient: "from-green-500 to-emerald-600",
    link: "/subsidios/agrario",
    cantidad: "Variable"
  },
  {
    id: "renta-activa-insercion",
    title: "Renta Activa de Inserción",
    description: "Ayuda para desempleados de larga duración con especiales dificultades de inserción laboral.",
    icon: LinkIcon,
    gradient: "from-indigo-500 to-purple-600",
    link: "/subsidios/renta-activa",
    cantidad: "479€/mes"
  }
];

export default function SubsidiosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mb-4">
                <DollarSign className="w-8 h-8" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Subsidios
              </h1>
              <p className="text-xl text-orange-100">
                Ayudas económicas para desempleados sin derecho a prestación contributiva
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
                <li className="text-gray-700">Subsidios</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                <div className="mb-8">
                  <p className="text-lg text-gray-700">
                    Los subsidios son ayudas económicas destinadas a desempleados que no pueden acceder 
                    a la prestación contributiva. Aquí encontrarás información detallada sobre cada subsidio.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {subsidios.map((subsidio) => {
                    const Icon = subsidio.icon;
                    return (
                      <Link
                        key={subsidio.id}
                        href={subsidio.link}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 group"
                      >
                        <div className="flex flex-col">
                          {/* Icono con gradiente */}
                          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${subsidio.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                            {subsidio.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {subsidio.description}
                          </p>
                          
                          {subsidio.cantidad && (
                            <div className="mb-4 flex items-center text-sm">
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 font-semibold mr-2">
                                <DollarSign className="w-4 h-4 mr-1" />
                              </span>
                              <span className="text-gray-700 font-semibold">{subsidio.cantidad}</span>
                            </div>
                          )}
                          
                          <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors mt-auto">
                            Ver Detalles
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </Link>
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

        {/* Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-orange-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Información Actualizada 2024
                </h3>
                <p className="text-orange-800">
                  Todos los subsidios están actualizados con las normativas vigentes en 2024. 
                  Las cuantías y requisitos pueden variar según tu situación particular.
                </p>
              </div>
              
              {/* Información de contacto */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-orange-600" />
                  ¿Dudas sobre tu subsidio?
                </h3>
                <p className="text-gray-700 mb-4">
                  Si necesitas información personalizada sobre cualquier subsidio:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Teléfono SEPE:</strong> 900 81 24 00 (gratuito)</li>
                  <li>• <strong>Web oficial:</strong> sede.sepe.gob.es</li>
                  <li>• <strong>Horario:</strong> De lunes a viernes de 9:00 a 19:00</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

