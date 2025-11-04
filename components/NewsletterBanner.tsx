"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, X } from "lucide-react";

export default function NewsletterBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya cerró el banner anteriormente
    const bannerClosed = localStorage.getItem("newsletter-banner-closed");
    const closedTimestamp = bannerClosed ? parseInt(bannerClosed) : 0;
    const now = Date.now();
    const daysSinceClosed = (now - closedTimestamp) / (1000 * 60 * 60 * 24);

    // Mostrar el banner si:
    // 1. No se ha cerrado antes, O
    // 2. Se cerró hace más de 7 días
    if (!bannerClosed || daysSinceClosed > 7) {
      // Mostrar el banner después de un pequeño delay para mejor UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // 2 segundos después de cargar la página

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    // Guardar en localStorage que el usuario cerró el banner
    localStorage.setItem("newsletter-banner-closed", Date.now().toString());
    
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Cerrar si se hace clic en el overlay (fondo oscuro)
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onClick={handleOverlayClick}
    >
      {/* Overlay oscuro de fondo */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal centrado */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-lg w-full transform transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Botón de cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Contenido del modal */}
        <div className="p-8 md:p-10">
          {/* Icono y título */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Mantente Informado
            </h2>
            <p className="text-lg text-gray-600">
              Suscríbete a nuestra newsletter gratuita
            </p>
          </div>

          {/* Beneficios */}
          <div className="mb-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span>Últimas noticias sobre cursos SEPE y formación profesional</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span>Información sobre nuevas ayudas y prestaciones</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span>Guías prácticas sobre trámites administrativos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">✓</span>
                <span>Consejos y actualizaciones sobre el SEPE</span>
              </li>
            </ul>
          </div>

          {/* Badge de gratuito */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6 text-center">
            <p className="text-blue-900 font-semibold text-sm">
              💰 100% Gratuita - Sin compromiso - Cancela cuando quieras
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/newsletter"
              onClick={handleClose}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-lg transition-all text-center transform hover:scale-105"
            >
              Suscribirme Ahora
            </Link>
            <button
              onClick={handleClose}
              className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Ahora No
            </button>
          </div>

          {/* Texto pequeño al final */}
          <p className="text-xs text-gray-500 text-center mt-6">
            Al suscribirte, aceptas nuestra{" "}
            <Link href="/privacidad" className="text-blue-600 underline hover:text-blue-800">
              política de privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
