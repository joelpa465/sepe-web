"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Solo se carga si existe el ID de Google Tag Manager o Google Analytics
    const gtmId = process.env.NEXT_PUBLIC_GA_ID;
    
    if (!gtmId) {
      return;
    }

    // Cargar Google Tag Manager si el ID empieza con GTM-
    if (gtmId.startsWith("GTM-")) {
      // Cargar GTM script
      const script = document.createElement("script");
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);

      // Añadir noscript para GTM
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.appendChild(noscript);
    } 
    // Cargar Google Analytics si el ID empieza con G-
    else if (gtmId.startsWith("G-")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gtmId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", gtmId, {
        page_path: window.location.pathname,
      });

      (window as any).gtag = gtag;
    }
  }, []);

  useEffect(() => {
    // Trackea cambios de página para Analytics
    const gtmId = process.env.NEXT_PUBLIC_GA_ID;
    
    if (gtmId && gtmId.startsWith("G-") && (window as any).gtag) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      (window as any).gtag("config", gtmId, {
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
