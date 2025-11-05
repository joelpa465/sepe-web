"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [advertising, setAdvertising] = useState(true);

  useEffect(() => {
    // Solo mostrar si no hay consentimiento previo
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-analytics", "true");
    localStorage.setItem("cookie-advertising", "true");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("cookie-analytics", "false");
    localStorage.setItem("cookie-advertising", "false");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    localStorage.setItem("cookie-consent", "customized");
    localStorage.setItem("cookie-analytics", analytics.toString());
    localStorage.setItem("cookie-advertising", advertising.toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Banner principal - Fijo en la parte inferior */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Contenido izquierdo */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Valoramos tu privacidad
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Usamos cookies para mejorar su experiencia de navegación, mostrarle anuncios o contenidos 
                personalizados y analizar nuestro tráfico. Al hacer clic en "Aceptar todo" usted da su 
                consentimiento a nuestro uso de las cookies.
              </p>
            </div>

            {/* Botones derecho */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowCustomize(!showCustomize)}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                Personalizar
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${showCustomize ? 'rotate-180' : ''}`} 
                />
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
              >
                Rechazar todo
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
              >
                Aceptar todo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Panel de personalización - Se expande desde el banner */}
      {showCustomize && (
        <div className="fixed bottom-20 left-0 right-0 z-40 bg-white border-t-2 border-gray-900 shadow-2xl max-h-[60vh] overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Personalizar cookies
            </h4>
            
            <div className="space-y-6">
              {/* Opción 1: Cookies esenciales */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Cookies esenciales
                    </h5>
                    <p className="text-sm text-gray-600">
                      Estas cookies son necesarias para el funcionamiento del sitio web y no se pueden 
                      desactivar en nuestros sistemas.
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className="text-sm text-gray-500 font-medium">Siempre activo</span>
                  </div>
                </div>
              </div>

              {/* Opción 2: Cookies de análisis */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Cookies de análisis
                    </h5>
                    <p className="text-sm text-gray-600">
                      Nos permiten conocer cómo los visitantes interactúan con nuestro sitio web, 
                      ayudándonos a mejorar la experiencia del usuario.
                    </p>
                  </div>
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analytics}
                        onChange={(e) => setAnalytics(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Opción 3: Cookies de publicidad */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Cookies de publicidad
                    </h5>
                    <p className="text-sm text-gray-600">
                      Se utilizan para mostrar anuncios relevantes y personalizados según tus intereses.
                    </p>
                  </div>
                  <div className="ml-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={advertising}
                        onChange={(e) => setAdvertising(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => setShowCustomize(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleCustomize}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
                >
                  Guardar preferencias
                </button>
              </div>

              {/* Enlaces adicionales */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href="/cookies" className="text-blue-600 hover:text-blue-800 underline">
                    Más información sobre cookies
                  </a>
                  <a href="/privacidad" className="text-blue-600 hover:text-blue-800 underline">
                    Política de privacidad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay oscuro cuando se muestra el panel de personalización */}
      {showCustomize && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setShowCustomize(false)}
        />
      )}
    </>
  );
}
