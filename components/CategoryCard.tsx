"use client";

import Link from "next/link";
import CategoryIcon from "./CategoryIcon";
import { 
  categoryColors, 
  categoryHoverColors, 
  categoryBorderHoverColors,
  categoryIconColors 
} from "./CategoryColors";

interface CategoryCardProps {
  id: string;
  title: string;
  icon: string;
  items: string[];
  href: string;
  index?: number;
}

export default function CategoryCard({ id, title, icon, items, href, index = 0 }: CategoryCardProps) {
  const gradient = categoryColors[id] || "from-blue-500 to-blue-600";
  const hoverColor = categoryHoverColors[id] || "group-hover:text-blue-600";
  const borderHover = categoryBorderHoverColors[id] || "hover:border-blue-200";
  const iconColor = categoryIconColors[id] || "text-blue-600";

  return (
    <div>
      <Link href={href} className="group block">
        <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-2 border-gray-100 ${borderHover} h-full flex flex-col transform hover:-translate-y-2 duration-300`}>
        {/* Icon and Title */}
        <div className="flex items-start mb-4">
          <div className={`mr-4 transform group-hover:scale-110 transition-transform bg-gradient-to-br ${gradient} p-3 rounded-xl text-white`}>
            <CategoryIcon name={icon} className="w-8 h-8" />
          </div>
          <h3 className={`text-xl font-bold text-gray-900 ${hoverColor} transition-colors flex-1 leading-tight`}>
            {title}
          </h3>
        </div>
        
        {/* Sub-items */}
        <ul className="space-y-2 flex-1">
          {items.slice(0, 4).map((item, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
              <svg className={`w-5 h-5 mr-2 ${iconColor} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
        
        {/* Arrow indicator */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-500">{items.length} temas</span>
          <div className={`flex items-center ${iconColor} font-semibold`}>
            <span className="text-sm mr-2">Ver más</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
}

