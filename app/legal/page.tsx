import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal - SEPE",
  description: "Aviso legal, términos y condiciones de uso del sitio web.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Aviso Legal
            </h1>
            <p className="text-xl text-blue-100">
              Términos y condiciones de uso
            </p>
          </div>
        </section>

        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Aviso Legal</li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <p className="text-sm text-gray-500 mb-8">
                  Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Datos Identificativos</h2>
                <p className="text-gray-700 mb-8">
                  En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información 
                  y de Comercio Electrónico, se informa que el sitio web es de carácter informativo.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Propósito del Sitio Web</h2>
                <p className="text-gray-700 mb-4">
                  Este sitio web tiene un <strong>carácter exclusivamente informativo</strong> y no tiene ningún vínculo oficial 
                  con el SEPE (Servicio Público de Empleo Estatal). Proporcionamos:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li>Información sobre trámites del SEPE</li>
                  <li>Guías y tutoriales sobre cursos y ayudas</li>
                  <li>Enlaces a recursos oficiales del SEPE</li>
                  <li>Noticias y actualizaciones relacionadas</li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
                  <p className="text-red-900 font-semibold">
                    ⚠️ IMPORTANTE: Este sitio NO es oficial del SEPE. Para trámites oficiales, consulta siempre la web oficial: 
                    <a href="https://www.sepe.es" target="_blank" rel="noopener noreferrer" className="underline ml-1">www.sepe.es</a>
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Contenido y Exactitud</h2>
                <p className="text-gray-700 mb-4">
                  Aunque nos esforzamos por mantener la información actualizada y precisa:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li>No garantizamos la exactitud, integridad o actualidad de la información</li>
                  <li>La información puede contener errores técnicos o tipográficos</li>
                  <li>Nos reservamos el derecho a modificar el contenido sin previo aviso</li>
                  <li>Los usuarios deben verificar la información con fuentes oficiales</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Uso del Sitio Web</h2>
                <p className="text-gray-700 mb-8">
                  Al acceder y usar este sitio web, aceptas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li>Usar el sitio de manera legal y responsable</li>
                  <li>No realizar actividades que puedan dañar o interferir con el funcionamiento del sitio</li>
                  <li>No copiar, modificar o distribuir el contenido sin autorización</li>
                  <li>Asumir la responsabilidad de verificar la información oficial</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Enlaces Externos</h2>
                <p className="text-gray-700 mb-8">
                  Este sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido de estos 
                  sitios y no asumimos responsabilidad por su contenido, políticas de privacidad o prácticas.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Propiedad Intelectual</h2>
                <p className="text-gray-700 mb-8">
                  Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes y software, 
                  es propiedad del sitio o sus proveedores de contenido y está protegido por leyes de propiedad intelectual.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitación de Responsabilidad</h2>
                <p className="text-gray-700 mb-4">
                  Este sitio web se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos responsables de:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li>Daños derivados del uso o imposibilidad de usar el sitio</li>
                  <li>Pérdidas financieras o de datos resultantes del uso del sitio</li>
                  <li>Decisiones tomadas basándose en la información del sitio</li>
                  <li>Errores u omisiones en el contenido</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Publicidad</h2>
                <p className="text-gray-700 mb-4">
                  Este sitio puede mostrar publicidad de terceros, incluido Google AdSense. Esta publicidad se muestra 
                  automáticamente en función de tu historial de navegación y preferencias.
                </p>
                <p className="text-gray-700 mb-8">
                  Google y sus partners utilizan cookies para mostrar anuncios personalizados. Puedes configurar tus 
                  preferencias visitando <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">configuración de anuncios de Google</a>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Modificaciones</h2>
                <p className="text-gray-700 mb-8">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán 
                  en vigor inmediatamente después de su publicación en el sitio. Es tu responsabilidad revisar periódicamente 
                  este aviso legal.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Ley Aplicable y Jurisdicción</h2>
                <p className="text-gray-700 mb-8">
                  Este aviso legal se rige por la legislación española. Cualquier disputa relacionada con el uso de este 
                  sitio web estará sujeta a la jurisdicción de los tribunales españoles.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Contacto</h2>
                <p className="text-gray-700 mb-4">
                  Para cualquier consulta sobre este aviso legal, puedes contactarnos a través de:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-8">
                  <li>📧 Email: contacto@sepe.es</li>
                  <li>🌐 <Link href="/contacto" className="text-blue-600 underline">Formulario de contacto</Link></li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-blue-900">
                    <strong>Nota:</strong> Este aviso legal puede ser actualizado. Te recomendamos revisarlo periódicamente.
                  </p>
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

