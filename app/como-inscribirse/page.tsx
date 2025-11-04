import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Inscribirse en Cursos SEPE - Guía Paso a Paso",
  description: "Guía completa para inscribirte en cursos SEPE paso a paso. Aprende a buscar cursos, cumplir requisitos, inscribirte online y obtener certificados profesionales gratis.",
  keywords: ["inscribirse en cursos sepe", "como inscribirse sepe", "sede electronica sepe", "cursos gratis sepe", "inscripción online sepe"],
  openGraph: {
    title: "Cómo Inscribirse en Cursos SEPE - Guía Paso a Paso Completa",
    description: "Aprende a inscribirte en cursos SEPE de forma fácil con nuestra guía detallada paso a paso.",
  },
  alternates: {
    canonical: "/como-inscribirse",
  },
};

const steps = [
  {
    number: 1,
    title: "Accede a la Sede Electrónica del SEPE",
    description: "Visita www.sepe.es y haz clic en 'Sede Electrónica' o entra directamente en sede.sepe.gob.es",
    details: [
      "Si es tu primera vez, necesitarás registrarte con tu DNI/NIE",
      "Tendrás que validar tu identidad con clave permanente, certificado digital o mediante SMS",
      "Anota tus credenciales de acceso para futuras sesiones"
    ]
  },
  {
    number: 2,
    title: "Busca los Cursos Disponibles",
    description: "En el menú principal, accede a 'Formación' y selecciona 'Ofertas de formación para el empleo'",
    details: [
      "Puedes filtrar por categoría, modalidad (online/presencial), duración o provincia",
      "Revisa la fecha de inicio y los requisitos de cada curso",
      "Guarda tus cursos favoritos para más tarde"
    ]
  },
  {
    number: 3,
    title: "Revisa los Requisitos",
    description: "Asegúrate de cumplir todos los requisitos específicos del curso que quieres hacer",
    details: [
      "Nivel educativo requerido (ESO, Bachillerato, FP, etc.)",
      "Estado laboral: demandante de empleo, trabajador ocupado o autónomo",
      "Documentación necesaria (DNI, Certificado de demandante de empleo, etc.)"
    ]
  },
  {
    number: 4,
    title: "Completa la Solicitud de Inscripción",
    description: "Haz clic en 'Inscribirse' y completa todos los datos solicitados en el formulario",
    details: [
      "Datos personales: nombre, apellidos, DNI/NIE, teléfono, email",
      "Datos académicos y profesionales relevantes para el curso",
      "Adjunta los documentos requeridos en formato PDF o imagen"
    ]
  },
  {
    number: 5,
    title: "Confirma y Envía tu Solicitud",
    description: "Revisa toda la información y confirma tu inscripción",
    details: [
      "Verifica que todos los datos sean correctos antes de enviar",
      "Recibirás un justificante de inscripción por email",
      "Guarda este justificante por si necesitas consultarlo más tarde"
    ]
  },
  {
    number: 6,
    title: "Espera la Confirmación",
    description: "En 5-10 días laborables recibirás la confirmación de tu plaza",
    details: [
      "Te notificarán por email o SMS al teléfono registrado",
      "Si has sido aceptado, te indicarán la fecha de inicio y la modalidad",
      "Si hay lista de espera, también serás informado de tu posición"
    ]
  }
];

export default function ComoInscribirsePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Cómo Inscribirte en Cursos SEPE
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Guía paso a paso para inscribirte en formación profesional gratuita del SEPE de forma fácil y rápida
              </p>
              <div className="flex items-center gap-4 text-blue-100">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10 min de lectura</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Nivel: Fácil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  Importante
                </h2>
                <p className="text-blue-800">
                  La inscripción en cursos SEPE es completamente gratuita. No necesitas pagar nada para acceder a la formación profesional. 
                  Solo necesitas cumplir los requisitos específicos de cada curso y tener tu documentación en regla.
                </p>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Los cursos SEPE son una excelente oportunidad para mejorar tus habilidades profesionales y aumentar 
                  tus posibilidades de encontrar empleo. Con esta guía, aprenderás en solo 6 pasos cómo inscribirte 
                  en cualquier curso que te interese.
                </p>
                <p className="text-gray-700">
                  Todos los trámites se realizan de forma online a través de la sede electrónica del SEPE, 
                  por lo que necesitarás tener conexión a internet y tus credenciales de acceso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Pasos para Inscribirte
              </h2>
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Connection line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 -translate-y-12"></div>
                    )}
                    
                    <div className="flex gap-8">
                      {/* Step number */}
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold">
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Step content */}
                      <div className="flex-grow pb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-700 mb-4">
                          {step.description}
                        </p>
                        
                        {step.details && (
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Consejos Útiles
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                        💡
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 mb-2">Revisa las Fechas</h3>
                      <p className="text-gray-600 text-sm">
                        Los cursos tienen plazas limitadas, así que revisa regularmente las nuevas convocatorias para no perderte ninguna oportunidad.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                        📄
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 mb-2">Documentación Lista</h3>
                      <p className="text-gray-600 text-sm">
                        Ten preparados todos los documentos necesarios en formato digital (PDF preferiblemente) antes de empezar la inscripción.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                        ✅
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 mb-2">Valida tus Credenciales</h3>
                      <p className="text-gray-600 text-sm">
                        Asegúrate de tener actualizadas tus credenciales de acceso a la sede electrónica del SEPE.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
                        📞
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-gray-900 mb-2">Solicita Ayuda</h3>
                      <p className="text-gray-600 text-sm">
                        Si tienes dudas, contacta con el SEPE por teléfono (900 81 24 00) o consulta nuestra sección de ayuda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">¿Tienes Preguntas?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Si necesitas más ayuda o tienes dudas sobre el proceso de inscripción, consulta nuestros otros tutoriales o contáctanos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/tutoriales"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Ver Más Tutoriales
                </Link>
                <Link
                  href="/cursos"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explorar Cursos
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

