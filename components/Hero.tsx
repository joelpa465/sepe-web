import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            SEPE
            <span className="block text-blue-200">Tu Guía de Trámites y Ayudas</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            Citas previas, cursos, ayudas, prestaciones, subsidios y todos los trámites del SEPE. 
            Todo lo que necesitas en un solo lugar con tutoriales paso a paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#categorias"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explorar Categorías
            </a>
            <Link
              href="/tutoriales"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver Tutoriales
            </Link>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
