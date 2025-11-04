"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Buscar el elemento article dentro del contenido principal
      const article = document.querySelector('article');
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      
      // Obtener información precisa del artículo
      const articleHeight = article.scrollHeight || rect.height;
      
      // Calcular la posición del artículo relativa al documento
      // Usamos offsetTop que es más preciso para elementos en el flujo normal
      const articleTop = article.offsetTop;
      const articleBottom = articleTop + articleHeight;
      
      // Calcular el progreso basado en la posición del scroll dentro del artículo
      // El progreso refleja exactamente cuánto del artículo ha sido visto
      
      // Punto donde el artículo comienza a contarse (cuando el top entra en el viewport)
      // Consideramos el header de 64px
      const headerHeight = 64;
      const scrollStart = articleTop - windowHeight + headerHeight;
      
      // Punto donde el artículo termina completamente
      // Cuando el bottom del artículo sale del viewport (bottom del viewport = bottom del artículo)
      const scrollEnd = articleBottom - headerHeight;
      
      // Distancia total que se puede scrollear para leer todo el artículo
      const totalScrollable = scrollEnd - scrollStart;
      
      let progress = 0;
      
      if (totalScrollable <= 0) {
        // Caso especial: el artículo es muy pequeño
        progress = 100;
      } else if (scrollY < scrollStart) {
        // Aún no se ha llegado al inicio del artículo
        progress = 0;
      } else if (scrollY > scrollEnd) {
        // Ya se ha pasado completamente el artículo
        progress = 100;
      } else {
        // Estamos dentro del rango del artículo
        // Calculamos el progreso exacto: qué parte del artículo se ha visto
        const scrolled = scrollY - scrollStart;
        progress = (scrolled / totalScrollable) * 100;
        
        // Asegurarnos de que el progreso esté entre 0 y 100 con precisión
        progress = Math.max(0, Math.min(100, Math.round(progress * 100) / 100));
      }

      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    // Usar requestAnimationFrame para mejor rendimiento
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Llamar una vez para establecer el valor inicial

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-40">
      <div 
        className="h-full bg-blue-600 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
