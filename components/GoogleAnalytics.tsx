"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // ID de Google Analytics
    const gaId = "G-BKCNGX9D46";
    
    // Cargar el script de gtag.js
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script1);

    // Inicializar dataLayer y gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);

    (window as any).gtag = gtag;
  }, []);

  useEffect(() => {
    // Trackea cambios de página para Analytics
    if ((window as any).gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      (window as any).gtag("config", "G-BKCNGX9D46", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
