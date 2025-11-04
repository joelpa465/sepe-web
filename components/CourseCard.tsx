import Link from "next/link";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  duration?: string;
  modality?: string;
}

export default function CourseCard({ 
  id, 
  title, 
  description, 
  category, 
  duration, 
  modality 
}: CourseCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-200">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {category}
        </span>
        {modality && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {modality}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>
      
      {duration && (
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>
      )}
      
      <Link
        href={`/cursos/${id}`}
        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
      >
        Ver Detalles
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}

