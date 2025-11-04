import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-sm mb-4">
              Tu guía completa sobre cursos SEPE. Encuentra formación profesional gratuita y aprende a gestionar tus trámites.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cursos" className="hover:text-white transition-colors">
                  Todos los Cursos
                </Link>
              </li>
              <li>
                <Link href="/tutoriales" className="hover:text-white transition-colors">
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link href="/como-inscribirse" className="hover:text-white transition-colors">
                  Cómo Inscribirse
                </Link>
              </li>
              <li>
                <Link href="/requisitos" className="hover:text-white transition-colors">
                  Requisitos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categorias/informatica" className="hover:text-white transition-colors">
                  Informática
                </Link>
              </li>
              <li>
                <Link href="/categorias/sanidad" className="hover:text-white transition-colors">
                  Sanidad
                </Link>
              </li>
              <li>
                <Link href="/categorias/marketing" className="hover:text-white transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/categorias/idiomas" className="hover:text-white transition-colors">
                  Idiomas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacta con Nosotros
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.sepe.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Web Oficial SEPE
                </a>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SEPE. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
            <Link href="/legal" className="hover:text-white transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

