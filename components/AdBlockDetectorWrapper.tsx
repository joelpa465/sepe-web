"use client";

import { ADS_ENABLED } from "@/lib/config";
import dynamic from "next/dynamic";

// Importación dinámica - solo se carga cuando se renderiza
const AdBlockDetector = dynamic(
  () => import("@/components/AdBlockDetector"),
  { ssr: false }
);

export default function AdBlockDetectorWrapper() {
  // Si los anuncios no están habilitados, no renderizar nada
  if (!ADS_ENABLED) {
    return null;
  }

  // Solo renderizar si los anuncios están habilitados
  return <AdBlockDetector />;
}
