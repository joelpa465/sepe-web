import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad - SEPE",
  description: "Política de privacidad y protección de datos personales. Información sobre cómo recopilamos, utilizamos y protegemos tus datos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl text-blue-100">
              Tu privacidad es importante para nosotros
            </p>
          </div>
        </section>

        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Privacidad</li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <p className="text-sm text-gray-500 mb-8">
                  Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Información que Recopilamos</h2>
                <p className="text-gray-700 mb-4">
                  En SEPE utilizamos diversas tecnologías para mejorar tu experiencia y analizar el uso del sitio:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web</li>
                  <li><strong>Cookies analíticas:</strong> Para entender cómo los usuarios navegan por el sitio</li>
                  <li><strong>Cookies de publicidad:</strong> Para mostrar publicidad personalizada relevante</li>
                  <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Uso de Google AdSense</h2>
                <p className="text-gray-700 mb-4">
                  Este sitio utiliza Google AdSense para mostrar publicidad. Google y sus partners utilizan cookies para mostrar 
                  anuncios basados en tus visitas previas a este sitio y otros sitios web.
                </p>
                <p className="text-gray-700 mb-4">
                  Puedes configurar tus preferencias de cookies utilizando el botón "Gestionar opciones" en el banner de cookies 
                  o visitando <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">configuración de anuncios de Google</a>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Cookies de Terceros</h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos proveedores aprobados por el TCF (Transparency & Consent Framework) y partners publicitarios 
                  para gestionar la publicidad y el análisis. Puedes consultar la lista completa de proveedores en la sección 
                  "Gestionar opciones".
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Tus Derechos</h2>
                <p className="text-gray-700 mb-4">
                  De acuerdo con la normativa europea de protección de datos, tienes derecho a:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Oponerte al tratamiento de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                  <li>Portabilidad de tus datos</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Seguridad de los Datos</h2>
                <p className="text-gray-700 mb-8">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales 
                  contra acceso no autorizado, pérdida o destrucción.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Conservación de Datos</h2>
                <p className="text-gray-700 mb-8">
                  Conservaremos tus datos personales únicamente durante el tiempo necesario para cumplir con los propósitos 
                  para los que fueron recopilados, salvo que la ley exija un período de conservación más largo.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Contacto</h2>
                <p className="text-gray-700 mb-4">
                  Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, puedes contactarnos a través de:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-8">
                  <li>📧 Email: contacto@sepe.es</li>
                  <li>🌐 Web: <Link href="/contacto" className="text-blue-600 underline">Página de contacto</Link></li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <p className="text-blue-900">
                    <strong>Nota importante:</strong> Esta política puede actualizarse periódicamente. Te recomendamos revisarla 
                    regularmente para estar informado sobre cómo protegemos tu información.
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

