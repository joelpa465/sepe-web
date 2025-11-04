"use client";

import { ADS_ENABLED } from "@/lib/config";

interface AdSidebarProps {
  position: "left" | "right";
}

export default function AdSidebar({ position }: AdSidebarProps) {
  // Si los anuncios están deshabilitados, no renderizar nada pero mantener el espacio reservado
  if (!ADS_ENABLED) {
    return (
      <aside className={`w-full ${position === "left" ? "lg:mr-8" : "lg:ml-8"} hidden xl:block`}>
        {/* Espacio reservado - invisible pero mantiene el layout */}
        <div className="sticky top-24" style={{ minHeight: "600px" }}></div>
      </aside>
    );
  }

  return (
    <aside className={`w-full ${position === "left" ? "lg:mr-8" : "lg:ml-8"}`}>
      <div className="sticky top-24 space-y-6">
        {/* Banner publicitario vertical 1 */}
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <div className="text-center py-12 px-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Advertisement</p>
            <div className="w-48 h-32 mx-auto mt-3 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">300x250</span>
            </div>
          </div>
        </div>

        {/* Banner publicitario vertical 2 */}
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <div className="text-center py-12 px-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Advertisement</p>
            <div className="w-48 h-64 mx-auto mt-3 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">300x600</span>
            </div>
          </div>
        </div>

        {/* Banner publicitario vertical 3 */}
        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
          <div className="text-center py-12 px-4">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-purple-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Advertisement</p>
            <div className="w-48 h-32 mx-auto mt-3 bg-white border border-gray-300 rounded flex items-center justify-center">
              <span className="text-xs text-gray-400">300x250</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

