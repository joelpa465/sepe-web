"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    // Solo mostrar si no hay consentimiento previo
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl mx-auto border-2 border-gray-200 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Te damos la bienvenida
          </h2>
          <h3 className="text-3xl font-bold text-gray-900">
            Este sitio solicita consentimiento para usar tus datos
          </h3>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Consent Options */}
          <div className="space-y-4">
            <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 mr-4 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <div className="flex items-start flex-1">
                <svg className="w-6 h-6 text-gray-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gray-700 leading-relaxed">
                  Publicidad y contenido personalizados, medición de publicidad y contenido, 
                  investigación de audiencia y desarrollo de servicios
                </span>
              </div>
            </label>

            <label className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer transition-colors">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 mr-4 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <div className="flex items-start flex-1">
                <svg className="w-6 h-6 text-gray-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700 leading-relaxed">
                  Almacenar la información en un dispositivo y/o acceder a ella
                </span>
              </div>
            </label>

            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center w-full p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 text-left transition-colors"
            >
              <svg 
                className={`w-6 h-6 text-gray-700 mr-3 flex-shrink-0 transition-transform ${showMore ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="text-gray-700 font-semibold">Más información</span>
            </button>
          </div>

          {/* Expanded Information */}
          {showMore && (
            <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                Utilizamos cookies, identificadores únicos u otros datos similares almacenados, 
                consultados o compartidos en tu dispositivo, con <strong>141 proveedores aprobados 
                por el TCF y 69 partners publicitarios</strong>, o utilizados específicamente por 
                este sitio o aplicación.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Algunos proveedores pueden procesar tus datos personales en función de un interés 
                legítimo. Puedes oponerte a este tratamiento de tus datos haciendo clic en{" "}
                <strong>"Gestionar opciones"</strong> más abajo. Consulta el enlace en el footer 
                o en el menú del sitio para gestionar tu privacidad y las opciones de cookies.
              </p>
              <div className="pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  Gestionar opciones
                </button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleReject}
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              No consentir
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Consentir
            </button>
          </div>

          {/* Manage Options Link */}
          <div className="text-center pt-2">
            <button className="text-blue-600 hover:text-blue-800 font-semibold underline">
              Gestionar opciones
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

