"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  // Temas trending para "Hoy interesa"
  const trendingTopics = [
    "Baja por maternidad",
    "Cita previa SEPE",
    "Ayudas desempleo",
    "Prestaciones",
    "Cursos gratuitos",
    "Subsidios",
    "Más"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      {/* Barra superior oscura - "Hoy interesa" */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Izquierda - "Hoy interesa" */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <span className="font-medium whitespace-nowrap">Hoy interesa</span>
              <div className="flex items-center space-x-2 text-xs">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center whitespace-nowrap">
                    {index > 0 && <span className="mx-1">•</span>}
                    <Link 
                      href={`/buscar?q=${encodeURIComponent(topic)}`}
                      className="hover:text-blue-200 transition-colors"
                    >
                      {topic}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Derecha - Newsletter, Search, User, Suscríbete */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Link 
                href="/newsletter" 
                className="text-sm hover:text-blue-200 transition-colors whitespace-nowrap"
              >
                NEWSLETTERS
              </Link>
              <button
                onClick={toggleSearchBar}
                className="hover:text-blue-200 transition-colors"
                aria-label="Buscar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <Link
                href="/suscripcion"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-1.5 text-sm uppercase transition-colors whitespace-nowrap"
              >
                SUSCRÍBETE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sección del Logo - Fondo blanco */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <Logo />
          </div>
        </div>
      </div>

      {/* Barra de navegación principal - Fondo gris claro */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center h-12 overflow-x-auto">
            <div className="flex items-center space-x-1 text-sm text-gray-700">
              <Link 
                href="/" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Inicio
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/cursos" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Cursos
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/blog" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Blog
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/categorias/prestaciones-sepe" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Prestaciones
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/categorias/ayudas-sepe" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Ayudas
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/categorias/tramites-sepe" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Trámites
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/categorias/cita-previa" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Cita Previa
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/categorias/subsidios" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Subsidios
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/categorias/pensiones" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Pensiones
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/informacion-oficial" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Información
              </Link>
              <span className="text-gray-400">/</span>
              <Link 
                href="/contacto" 
                className="uppercase font-medium hover:text-blue-600 transition-colors whitespace-nowrap px-2"
              >
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Barra de búsqueda expandible */}
      {searchBarVisible && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <form onSubmit={handleSearch} className="flex items-center max-w-2xl mx-auto">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar cursos, trámites, ayudas..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
