import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  AlertCircle, 
  Home, 
  Search,
  ArrowLeft,
  FileQuestion
} from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada - 404 | Web Cursos SEPE",
  description: "La página que buscas no existe o ha sido movida. Explora nuestras categorías, cursos y tutoriales sobre el SEPE.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white flex items-center justify-center py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icono 404 */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 mb-6">
                <FileQuestion className="w-12 h-12" />
              </div>
              <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-4">
                404
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Página no encontrada
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
              </p>
            </div>

            {/* Mensaje de ayuda */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8 text-left">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">¿Qué puedes hacer?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Verifica que la URL sea correcta</li>
                    <li>• Utiliza el buscador para encontrar lo que necesitas</li>
                    <li>• Explora nuestras categorías principales</li>
                    <li>• Visita nuestra página de inicio</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Botones de navegación */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
              >
                <Home className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Link>
              <Link
                href="/buscar"
                className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </Link>
            </div>

            {/* Enlaces rápidos */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Páginas populares:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/categorias/prestaciones-sepe"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Prestaciones
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/categorias/cita-previa"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Citas Previas
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/tutoriales"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Tutoriales
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/cursos"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Cursos
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  href="/contacto"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

