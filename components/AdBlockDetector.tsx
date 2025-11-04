"use client";

import { useState, useEffect, useRef } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function AdBlockDetector() {
  const [isDetected, setIsDetected] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const checkIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Función para verificar si hay adblocker activo
  const checkAdBlock = (): boolean => {
    // Crear un elemento de prueba que los adblockers suelen bloquear
    const testAd = document.createElement("div");
    testAd.innerHTML = "&nbsp;";
    testAd.className = "adsbox";
    testAd.style.position = "absolute";
    testAd.style.left = "-9999px";
    testAd.style.height = "1px";
    testAd.style.width = "1px";
    testAd.id = "adblock-test-element";
    
    // Limpiar elemento anterior si existe
    const existing = document.getElementById("adblock-test-element");
    if (existing) {
      existing.remove();
    }
    
    document.body.appendChild(testAd);

    // Verificar si el elemento fue bloqueado
    const computedStyle = window.getComputedStyle(testAd);
    const isBlocked = 
      testAd.offsetHeight === 0 || 
      testAd.offsetParent === null ||
      computedStyle.display === "none" ||
      computedStyle.visibility === "hidden" ||
      computedStyle.opacity === "0";

    // También verificar si el script de AdSense fue bloqueado
    const adsbygoogleBlocked = typeof window.adsbygoogle === "undefined";
    
    // Limpiar el elemento de prueba
    if (document.body.contains(testAd)) {
      document.body.removeChild(testAd);
    }

    return isBlocked || adsbygoogleBlocked;
  };

  // Función manual para verificar
  const handleCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      if (!checkAdBlock()) {
        // Adblocker desactivado
        setIsDetected(false);
        setIsChecking(false);
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current);
          checkIntervalRef.current = null;
        }
      } else {
        setIsChecking(false);
      }
    }, 500);
  };

  useEffect(() => {
    // Prevenir scroll cuando el modal está visible
    if (isDetected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDetected]);

  useEffect(() => {
    // Verificación inicial después de que la página cargue
    const initialCheck = setTimeout(() => {
      if (checkAdBlock()) {
        setIsDetected(true);
        
        // Iniciar verificación periódica
        if (checkIntervalRef.current) {
          clearInterval(checkIntervalRef.current);
        }

        checkIntervalRef.current = setInterval(() => {
          setIsChecking(true);
          
          // Pequeño delay para asegurar que el adblocker se ha actualizado
          setTimeout(() => {
            if (!checkAdBlock()) {
              // Adblocker desactivado
              setIsDetected(false);
              setIsChecking(false);
              if (checkIntervalRef.current) {
                clearInterval(checkIntervalRef.current);
                checkIntervalRef.current = null;
              }
            } else {
              setIsChecking(false);
            }
          }, 500);
        }, 2000); // Verificar cada 2 segundos
      }
    }, 2000);

    return () => {
      clearTimeout(initialCheck);
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };
  }, []);

  if (!isDetected) return null;

  return (
    <>
      {/* Overlay que bloquea toda la interacción */}
      <div
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
        style={{ cursor: "not-allowed" }}
        onClick={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />
      
      {/* Modal centrado - NO se puede cerrar */}
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Contenido del modal */}
          <div className="p-8 md:p-10">
            {/* Icono y título */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Bloqueador de Anuncios Detectado
              </h2>
              <p className="text-lg text-red-600 font-semibold">
                El acceso al sitio está bloqueado
              </p>
            </div>

            {/* Mensaje */}
            <div className="mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <p className="text-red-900 font-semibold mb-2">
                  ⚠️ Acceso Restringido
                </p>
                <p className="text-red-800 text-sm">
                  Hemos detectado que estás usando un bloqueador de anuncios. Para acceder a este sitio web, necesitas desactivar el bloqueador de anuncios.
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Los anuncios nos permiten mantener este sitio web <strong>completamente gratuito</strong> y seguir proporcionando contenido de calidad sobre cursos SEPE, ayudas, prestaciones y trámites.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
                <p className="text-blue-900 text-sm font-semibold mb-3">
                  📋 Pasos para desactivar el bloqueador de anuncios:
                </p>
                <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
                  <li>Busca el icono del bloqueador en la barra de herramientas de tu navegador (uBlock Origin, AdBlock Plus, etc.)</li>
                  <li>Haz clic en el icono del bloqueador</li>
                  <li>Selecciona <strong>"Desactivar en esta página"</strong> o <strong>"Pausar"</strong></li>
                  <li>O agrega este sitio a la <strong>lista de excepciones/whitelist</strong></li>
                  <li>Recarga la página para continuar</li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="text-yellow-900 text-sm">
                  <strong>💡 Consejo:</strong> Una vez desactives el bloqueador, esta página se actualizará automáticamente y podrás acceder al contenido.
                </p>
              </div>
            </div>

            {/* Botón de verificación */}
            <div className="flex flex-col items-center gap-4">
              <button
                onClick={handleCheck}
                disabled={isChecking}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 min-w-[200px]"
              >
                {isChecking ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-5 h-5" />
                    Ya Desactivé el Bloqueador
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                El sistema verificará automáticamente cada 2 segundos
              </p>
            </div>

            {/* Información adicional */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                Al desactivar el bloqueador de anuncios, nos ayudas a mantener este servicio gratuito 
                y a seguir creando contenido útil sobre el SEPE. Gracias por tu comprensión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
