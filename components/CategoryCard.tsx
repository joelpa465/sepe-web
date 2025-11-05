"use client";

import Link from "next/link";

interface CategoryCardProps {
  id: string;
  title: string;
  icon: string;
  items: string[];
  href: string;
  index?: number;
}

export default function CategoryCard({ id, title, icon, items, href, index = 0 }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-blue-600 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header con separador azul y título */}
      <div className="px-7 pt-5 pb-4">
        <div className="border-b-2 border-blue-600 mb-4"></div>
        <h3 className="text-2xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
          {title}
        </h3>
      </div>
      
      {/* Lista de items como enlaces */}
      <div className="px-7 pb-4 flex-1">
        <ul className="space-y-2.5">
          {items.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="w-2 h-2 rounded-full bg-black mt-2.5 mr-3 flex-shrink-0"></span>
              <Link 
                href={href}
                className="text-blue-600 hover:text-blue-800 hover:underline text-base leading-relaxed transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Separador gris claro */}
      <div className="px-7">
        <div className="border-t border-gray-200"></div>
      </div>
      
      {/* Botón "Más artículos" */}
      <div className="px-7 py-4">
        <Link 
          href={href}
          className="block w-full text-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-base"
        >
          + Más artículos
        </Link>
      </div>
    </div>
  );
}

