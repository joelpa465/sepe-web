import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies - SEPE",
  description: "Información detallada sobre el uso de cookies en nuestro sitio web, tipos de cookies y cómo gestionarlas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Política de Cookies
            </h1>
            <p className="text-xl text-blue-100">
              Todo sobre el uso de cookies en nuestro sitio
            </p>
          </div>
        </section>

        <div className="bg-gray-50 py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-600 hover:text-blue-800">Inicio</Link></li>
                <li><span className="text-gray-400">/</span></li>
                <li className="text-gray-700">Cookies</li>
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

                <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Qué son las Cookies?</h2>
                <p className="text-gray-700 mb-8">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                  Estas cookies permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tipos de Cookies que Utilizamos</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">🍪 Cookies Técnicas (Necesarias)</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Propósito:</strong> Esenciales para el funcionamiento del sitio web. No se pueden desactivar.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Ejemplos:</strong> Recordar tus preferencias de cookies, sesión de usuario, seguridad.
                    </p>
                    <p className="text-gray-700">
                      <strong>Duración:</strong> Permanentes o de sesión
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Cookies Analíticas</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Propósito:</strong> Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Proveedores:</strong> Google Analytics y similares.
                    </p>
                    <p className="text-gray-700">
                      <strong>Duración:</strong> Máximo 2 años
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">📢 Cookies de Publicidad</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Propósito:</strong> Mostrar publicidad personalizada relevante para ti.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Proveedores:</strong> Google AdSense y partners publicitarios aprobados por TCF.
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Proveedores:</strong> 141 proveedores aprobados por TCF y 69 partners publicitarios.
                    </p>
                    <p className="text-gray-700">
                      <strong>Duración:</strong> Variable según el proveedor
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cómo Gestionar las Cookies</h2>
                <p className="text-gray-700 mb-4">
                  Puedes gestionar tus preferencias de cookies de las siguientes formas:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li><strong>Banner de cookies:</strong> Al entrar al sitio, se te mostrará un banner donde puedes aceptar o rechazar cookies</li>
                  <li><strong>Configuración del navegador:</strong> Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio</li>
                  <li><strong>Gestión de opciones:</strong> Haz clic en "Gestionar opciones" en el banner para personalizar tus preferencias</li>
                  <li><strong>Google AdSense:</strong> <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Configura tus preferencias de anuncios aquí</a></li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies de Terceros</h2>
                <p className="text-gray-700 mb-4">
                  Algunos proveedores externos también pueden establecer cookies en tu dispositivo. Estos incluyen:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Google AdSense</h4>
                    <p className="text-sm text-gray-700">
                      Publicidad personalizada basada en intereses
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Google Analytics</h4>
                    <p className="text-sm text-gray-700">
                      Análisis de tráfico y comportamiento de usuarios
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <p className="text-yellow-900">
                    <strong>⚠️ Importante:</strong> Si desactivas las cookies, algunas funciones del sitio pueden no funcionar correctamente.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas Más Información?</h3>
                  <p className="text-gray-700 mb-4">
                    Si tienes preguntas sobre nuestra política de cookies, contacta con nosotros:
                  </p>
                  <Link href="/contacto" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Contactar
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

