import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import AnimatedStep from "@/components/AnimatedStep";
import BlogSection from "@/components/BlogSection";
import HashScroll from "@/components/HashScroll";
import Link from "next/link";

// Las 10 categorías principales del proyecto
const mainCategories = [
  {
    id: "cita-previa",
    title: "Cita Previa",
    icon: "📅",
    href: "/categorias/cita-previa",
    items: [
      "Cita previa INEM (SEPE)",
      "Anular cita previa INEM",
      "Cita previa Seguridad Social",
      "Cita previa Extranjería",
      "Cita previa Hacienda",
      "Cita previa DGT"
    ]
  },
  {
    id: "cursos-ccaa",
    title: "Cursos por CCAA",
    icon: "🗺️",
    href: "/categorias/cursos-ccaa",
    items: [
      "Cursos INEM Barcelona",
      "Cursos INEM Madrid",
      "Cursos INEM Sevilla",
      "Cursos INEM Málaga",
      "Cursos INEM Valencia",
      "Cursos INEM Bilbao"
    ]
  },
  {
    id: "cursos-sector",
    title: "Cursos por Sector",
    icon: "💼",
    href: "/categorias/cursos-sector",
    items: [
      "Cursos SEPE Barcelona",
      "Cursos SEPE Madrid",
      "Curso de SEO Avanzado",
      "Curso de Youtube",
      "Cursos de Marketing Digital",
      "Cursos de Programación"
    ]
  },
  {
    id: "ayudas-sepe",
    title: "Ayudas SEPE",
    icon: "💰",
    href: "/categorias/ayudas-sepe",
    items: [
      "Ingreso Mínimo Vital",
      "Ayudas para madres solteras",
      "Ayudas para personas con discapacidad",
      "Ayudas alquiler",
      "Ayuda familiar",
      "Ayudas para jóvenes"
    ]
  },
  {
    id: "prestaciones-sepe",
    title: "Prestaciones SEPE",
    icon: "📋",
    href: "/categorias/prestaciones-sepe",
    items: [
      "Prestación por hijo a cargo",
      "Prestación por desempleo",
      "Baja por maternidad",
      "Prestación contributiva",
      "Prestación no contributiva",
      "Baja por paternidad"
    ]
  },
  {
    id: "tramites-sepe",
    title: "Trámites SEPE",
    icon: "🏛️",
    href: "/categorias/tramites-sepe",
    items: [
      "TGSS (Tesorería General)",
      "Sellar paro",
      "Apuntarse al paro",
      "INSS",
      "Vida laboral",
      "Certificado empresa"
    ]
  },
  {
    id: "subsidios",
    title: "Subsidios",
    icon: "💸",
    href: "/categorias/subsidios",
    items: [
      "Subsidio por desempleo",
      "Mayores de 45 años",
      "Insuficiencia de cotización",
      "Mayores de 52 años",
      "Subsidio agrario",
      "Renta Activa de Inserción"
    ]
  },
  {
    id: "pensiones",
    title: "Pensiones",
    icon: "👴",
    href: "/categorias/pensiones",
    items: [
      "Pensión no contributiva",
      "Pensión de orfandad",
      "Pensión de viudedad",
      "Pensión máxima de jubilación",
      "Pensión de incapacidad",
      "Pensión alimenticia"
    ]
  },
  {
    id: "masters",
    title: "Másters",
    icon: "🎓",
    href: "/categorias/masters",
    items: [
      "Máster SEO",
      "Máster SEM",
      "Máster Marketing Digital",
      "Máster Inteligencia Artificial",
      "Máster Big Data",
      "Máster UX/UI"
    ]
  },
  {
    id: "fiscal",
    title: "Fiscal",
    icon: "🧮",
    href: "/categorias/fiscal",
    items: [
      "Certificado de penales",
      "Modelo 600",
      "Modelo 145",
      "Modelo 036",
      "IRPF 2024",
      "Declaración de la renta"
    ]
  },
  {
    id: "certificados-documentos",
    title: "Certificados y Documentos",
    icon: "📄",
    href: "/categorias/certificados-documentos",
    items: [
      "Vida laboral",
      "Certificado de empresa",
      "Certificado de prestaciones",
      "Certificado de cotizaciones",
      "Documentos necesarios SEPE",
      "Duplicados de documentos"
    ]
  },
  {
    id: "servicios-digitales",
    title: "Servicios Digitales",
    icon: "💻",
    href: "/categorias/servicios-digitales",
    items: [
      "Cl@ve PIN y Permanente",
      "Certificado Digital FNMT",
      "Sede Electrónica SEPE",
      "Tu Seguridad Social",
      "App móvil SEPE",
      "Identificación digital"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HashScroll />
      <Header />
      
      <main className="flex-grow">
        {/* Grid de 10 Categorías Principales - LO MÁS IMPORTANTE */}
        <section id="categorias" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b-4 border-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Explora todas las Categorías
              </h1>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                Todo lo que necesitas sobre el SEPE en un solo lugar
              </p>
            </div>
            
            {/* Layout con sidebars publicitarios */}
            <div className="flex gap-6">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-72 flex-shrink-0">
                <AdSidebar position="left" />
              </div>
              
              {/* Contenido principal - Responsive */}
              <div className="flex-1 max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mainCategories.map((category, index) => (
                    <CategoryCard
                      key={category.id}
                      {...category}
                      index={index}
                    />
                  ))}
                </div>
              </div>
              
              {/* Sidebar derecho - SOLO en desktop */}
              <div className="hidden xl:block w-72 flex-shrink-0">
                <AdSidebar position="right" />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section - Servicios Más Solicitados */}
        <BlogSection />
        
        {/* Banner publicitario horizontal */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <AdBanner type="horizontal" />
            </div>
          </div>
        </section>
        
        {/* Cómo Apuntarse - Quick Guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cómo Apuntarse al SEPE? - 4 Pasos Rápidos
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8 relative">
                <div className="relative">
                  <AnimatedStep
                    number={1}
                    title="Accede"
                    description="Visita sede.sepe.gob.es"
                    index={0}
                  />
                </div>
                
                <div className="relative">
                  <AnimatedStep
                    number={2}
                    title="Rellena"
                    description="Completa tus datos"
                    index={1}
                  />
                </div>
                
                <div className="relative">
                  <AnimatedStep
                    number={3}
                    title="Adjunta"
                    description="Sube documentos"
                    index={2}
                  />
                </div>
                
                <div className="relative">
                  <AnimatedStep
                    number={4}
                    title="Confirma"
                    description="Listo en minutos"
                    isLast={true}
                    index={3}
                  />
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/como-inscribirse" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Ver Tutorial Completo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Preguntas Frecuentes sobre el SEPE
                </h2>
                <p className="text-lg text-gray-600">
                  Resolvemos las dudas más comunes sobre cursos, trámites y ayudas del SEPE
                </p>
              </div>
              
              <div className="space-y-4">
                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Qué es el SEPE y qué servicios ofrece?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      El SEPE (Servicio Público de Empleo Estatal) es el organismo público español que gestiona las políticas de empleo, 
                      formación profesional, prestaciones por desempleo y ayudas relacionadas con el empleo. Ofrece cursos gratuitos, 
                      gestión del paro, subsidios y ayudas económicas, y formación para el empleo.
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Cómo me inscribo en el paro (demanda de empleo)?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Para inscribirte en el paro, debes:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                      <li>Acceder a la sede electrónica del SEPE (sede.sepe.gob.es)</li>
                      <li>Crear una cuenta o iniciar sesión con tu DNI/NIE</li>
                      <li>Completar el formulario de demanda de empleo</li>
                      <li>Adjuntar los documentos necesarios</li>
                      <li>Presentar tu demanda antes de 15 días desde el cese de actividad</li>
                    </ol>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Puedo hacer cursos SEPE si no estoy en el paro?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      Sí, los cursos SEPE están disponibles para múltiples perfiles: demandantes de empleo, trabajadores ocupados, 
                      autónomos y desempleados. Cada convocatoria especifica los requisitos de acceso. No es obligatorio estar 
                      inscrito como demandante de empleo para todos los cursos.
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Qué documentos necesito para solicitar prestaciones?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Los documentos básicos incluyen:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                      <li>DNI o NIE en vigor</li>
                      <li>Certificado de empresa o vida laboral</li>
                      <li>Justificante de inscripción como demandante de empleo</li>
                      <li>IBAN para cobro (nómina bancaria)</li>
                      <li>Último contrato de trabajo y finiquito</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Cuánto se cobra de paro en España?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      La prestación por desempleo se calcula en base a tus cotizaciones. Generalmente, se cobra el 70% de la base reguladora 
                      durante los primeros 6 meses y el 50% a partir del séptimo mes. El importe máximo mensual en 2024 es de 1.354,2 euros 
                      (máximo 600 días de prestación). La cantidad mínima es de 569,7 euros.
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Puedo cobrar el paro y estudiar a la vez?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      Sí, puedes compaginar el paro con estudios. Si estás cobrando prestación por desempleo, puedes cursar estudios de formación 
                      profesional o universitarios, pero debes comunicarlo al SEPE. La formación no incompatible con el empleo es compatible 
                      con la prestación, aunque debes seguir disponible para el mercado de trabajo.
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <summary className="px-6 py-5 font-semibold text-gray-900 cursor-pointer flex items-center justify-between hover:text-blue-600 transition-colors">
                    <span>¿Cómo renuevo mi demanda de empleo?</span>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      La demanda de empleo debe renovarse cada 3 meses. Puedes hacerlo a través de la sede electrónica del SEPE, 
                      por teléfono (901 11 99 99) o presencialmente. Es importante renovarla antes de que caduque para mantener 
                      activas tus prestaciones y seguir siendo demandante de empleo.
          </p>
        </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Comparativa CCAA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                  Comparativa entre Comunidades Autónomas
                </h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Cada CCAA tiene normativas específicas para cursos y ayudas
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Por Comunidad</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Barcelona: Mayor oferta cursos TIC</li>
                      <li>• Madrid: Marketing y gestión</li>
                      <li>• Andalucía: Programas rurales</li>
                      <li>• Valencia: Sector turístico</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Diferencias Clave</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Plazos de inscripción</li>
                      <li>• Requisitos de acceso</li>
                      <li>• Modalidades disponibles</li>
                      <li>• Ayudas regionales</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/categorias/cursos-ccaa" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Ver Cursos por CCAA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                ¿Listo para Empezar?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Explora las categorías y encuentra lo que necesitas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#categorias"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Ver Categorías
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
