import { ReactNode } from "react";

interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  className?: string;
  gradient?: string;
  icon?: ReactNode;
  label?: string;
}

export default function ImagePlaceholder({ 
  width = "100%", 
  height = "300px",
  className = "",
  gradient = "from-blue-400 via-purple-500 to-pink-500",
  icon,
  label
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ width, height }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        {icon && (
          <div className="text-white mb-3 opacity-90">
            {icon}
          </div>
        )}
        {label && (
          <span className="text-white text-sm font-medium opacity-75">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

