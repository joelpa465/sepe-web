"use client";

interface AdBannerProps {
  type?: "horizontal" | "vertical";
  className?: string;
}

export default function AdBanner({ type = "horizontal", className = "" }: AdBannerProps) {
  return (
    <div className={className}>
      {/* Label de "Advertisement" */}
      <div className="text-xs text-gray-500 mb-2">Advertisement</div>
      
      {/* Espacio reservado para anuncios de Google AdSense */}
      <div className={`w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center ${type === "horizontal" ? "h-32 md:h-40" : "h-64"}`}>
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 rounded bg-blue-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <p className="text-xs text-gray-500">Publicidad</p>
        </div>
      </div>
    </div>
  );
}

