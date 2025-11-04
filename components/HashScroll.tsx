"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    // Esperar a que el DOM esté completamente cargado
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1); // Remover el #
        const element = document.getElementById(hash);
        
        if (element) {
          // Calcular posición considerando el header sticky
          const headerHeight = 64; // Altura del header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    // Ejecutar después de un pequeño delay para asegurar que todo está renderizado
    const timer = setTimeout(handleHashScroll, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
