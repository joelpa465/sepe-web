import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-4 group">
      {/* Icono: Libro abierto con monitor dentro */}
      <div className="flex-shrink-0">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:opacity-90 transition-opacity"
        >
          {/* Libro abierto - Página izquierda (vista desde arriba) */}
          <path
            d="M12 16C12 14.8954 12.8954 14 14 14H20C21.1046 14 22 14.8954 22 16V52C22 53.1046 21.1046 54 20 54H14C12.8954 54 12 53.1046 12 52V16Z"
            stroke="#1A3B7A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Libro abierto - Página derecha (vista desde arriba) */}
          <path
            d="M22 16C22 14.8954 22.8954 14 24 14H30C31.1046 14 32 14.8954 32 16V52C32 53.1046 31.1046 54 30 54H24C22.8954 54 22 53.1046 22 52V16Z"
            stroke="#1A3B7A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Línea del lomo del libro (centro) */}
          <line
            x1="22"
            y1="14"
            x2="22"
            y2="54"
            stroke="#1A3B7A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Líneas de las páginas del libro (efecto de páginas abiertas) */}
          <path
            d="M14 20L20 20"
            stroke="#1A3B7A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M14 26L20 26"
            stroke="#1A3B7A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M24 20L30 20"
            stroke="#1A3B7A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M24 26L30 26"
            stroke="#1A3B7A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          
          {/* Monitor dentro del libro - Pantalla */}
          <rect
            x="18"
            y="28"
            width="16"
            height="12"
            rx="1.5"
            stroke="#1A3B7A"
            strokeWidth="2"
            fill="none"
          />
          {/* Monitor - Pantalla interior (efecto de pantalla encendida) */}
          <rect
            x="20"
            y="30"
            width="12"
            height="8"
            rx="0.5"
            fill="#1A3B7A"
            opacity="0.2"
          />
          {/* Monitor - Base/Soporte */}
          <path
            d="M22 40L26 44L30 40"
            stroke="#1A3B7A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Monitor - Soporte vertical */}
          <line
            x1="26"
            y1="44"
            x2="26"
            y2="47"
            stroke="#1A3B7A"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Monitor - Base inferior */}
          <rect
            x="23"
            y="47"
            width="6"
            height="2"
            rx="1"
            fill="#1A3B7A"
          />
        </svg>
      </div>

      {/* Texto: "Web Cursos" y "SEPE" */}
      <div className="flex flex-col justify-center">
        <span
          className="text-2xl font-semibold leading-tight tracking-tight"
          style={{
            color: "#1A3B7A",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Web Cursos
        </span>
        <span
          className="text-xl font-bold leading-tight tracking-wide"
          style={{
            color: "#1A3B7A",
            fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          SEPE
        </span>
      </div>
    </Link>
  );
}

