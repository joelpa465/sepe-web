"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSidebar from "@/components/AdSidebar";
import AdBanner from "@/components/AdBanner";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { searchContent } from "@/lib/data";
import { FileText, BookOpen, Calendar, Clock } from "lucide-react";

function BuscarContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<{ blogs: any[]; tutorials: any[] }>({ blogs: [], tutorials: [] });

  useEffect(() => {
    if (query) {
      const searchResults = searchContent(query);
      setResults(searchResults);
    } else {
      setResults({ blogs: [], tutorials: [] });
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const totalResults = results.blogs.length + results.tutorials.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Buscar
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Encuentra información sobre trámites, cursos y ayudas del SEPE
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Sidebar izquierdo - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <AdSidebar position="left" />
                </div>
              </div>

              {/* Contenido principal */}
              <div className="flex-1 max-w-4xl">
                {/* Barra de búsqueda */}
                <form onSubmit={handleSearch} className="mb-12">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar cursos, trámites, ayudas..."
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </form>

              {/* Resultados */}
              {query ? (
                <div>
                  {totalResults > 0 ? (
                    <>
                      <p className="text-gray-600 mb-8">
                        Se encontraron <strong>{totalResults}</strong> resultado{totalResults !== 1 ? "s" : ""} para "<strong>{query}</strong>"
                      </p>

                      {/* Resultados de Blogs */}
                      {results.blogs.length > 0 && (
                        <div className="mb-12">
                          <div className="flex items-center mb-6">
                            <FileText className="w-6 h-6 text-blue-600 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-900">
                              Artículos del Blog ({results.blogs.length})
                            </h2>
                          </div>
                          <div className="space-y-4">
                            {results.blogs.map((blog) => (
                              <Link key={blog.id} href={blog.href}>
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-300">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                          {blog.category}
                                        </span>
                                        <span className="text-sm text-gray-500 flex items-center">
                                          <Clock className="w-4 h-4 mr-1" />
                                          {blog.readTime}
                                        </span>
                                        <span className="text-sm text-gray-500 flex items-center">
                                          <Calendar className="w-4 h-4 mr-1" />
                                          {blog.date}
                                        </span>
                                      </div>
                                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                                        {blog.title}
                                      </h3>
                                      <p className="text-gray-600 mb-3 line-clamp-2">
                                        {blog.description}
                                      </p>
                                      <p className="text-sm text-gray-500">
                                        Por {blog.author} {blog.location ? `· ${blog.location}` : ""}
                                      </p>
                                    </div>
                                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Resultados de Tutoriales */}
                      {results.tutorials.length > 0 && (
                        <div>
                          <div className="flex items-center mb-6">
                            <BookOpen className="w-6 h-6 text-green-600 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-900">
                              Tutoriales ({results.tutorials.length})
                            </h2>
                          </div>
                          <div className="space-y-4">
                            {results.tutorials.map((tutorial) => (
                              <Link key={tutorial.id} href={tutorial.href}>
                                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-green-300">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                          {tutorial.category}
                                        </span>
                                        <span className="text-sm text-gray-500 flex items-center">
                                          <Clock className="w-4 h-4 mr-1" />
                                          {tutorial.duration}
                                        </span>
                                        <span className="text-sm text-gray-500 flex items-center">
                                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                          </svg>
                                          {tutorial.difficulty}
                                        </span>
                                      </div>
                                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                                        {tutorial.title}
                                      </h3>
                                      <p className="text-gray-600 line-clamp-2">
                                        {tutorial.description}
                                      </p>
                                    </div>
                                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-4">🔍</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        No se encontraron resultados
                      </h3>
                      <p className="text-gray-600 mb-8">
                        No encontramos ningún resultado para "<strong>{query}</strong>". Intenta buscar con otros términos o explorar nuestras categorías.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href="/blog"
                          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Ver Todos los Blogs
                        </Link>
                        <Link
                          href="/tutoriales"
                          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Ver Todos los Tutoriales
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Busca cursos, trámites y ayudas
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Escribe en el buscador para encontrar información sobre el SEPE
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    <Link href="/blog" className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">Ver Blogs</h4>
                      <p className="text-sm text-gray-600">Artículos y guías completas</p>
                    </Link>
                    <Link href="/tutoriales" className="p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                      <h4 className="font-bold text-gray-900 mb-2">Ver Tutoriales</h4>
                      <p className="text-sm text-gray-600">Guías paso a paso</p>
                    </Link>
                  </div>
                </div>
              )}
              </div>
              
              {/* Sidebar derecho - SOLO en desktop */}
              <div className="hidden xl:block w-80 flex-shrink-0">
                <div className="sticky top-24">
                  <AdSidebar position="right" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner publicitario horizontal */}
        {query && totalResults > 0 && (
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <AdBanner type="horizontal" />
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default function BuscarPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Cargando...</p>
          </div>
        </main>
        <Footer />
      </div>
    }>
      <BuscarContent />
    </Suspense>
  );
}
