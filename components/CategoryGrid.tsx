import Link from "next/link";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}

const categories: Category[] = [
  {
    id: "informatica",
    name: "Informática y Tecnología",
    description: "Cursos de programación, ofimática, diseño web y software",
    icon: "💻",
    count: 45
  },
  {
    id: "sanidad",
    name: "Sanidad y Salud",
    description: "Cursos de atención sanitaria, auxiliar clínica, prevención",
    icon: "🏥",
    count: 32
  },
  {
    id: "marketing",
    name: "Marketing y Comercio",
    description: "Marketing digital, ventas, e-commerce y publicidad",
    icon: "📊",
    count: 28
  },
  {
    id: "idiomas",
    name: "Idiomas",
    description: "Inglés, francés, alemán y otros idiomas para el empleo",
    icon: "🌍",
    count: 15
  },
  {
    id: "administracion",
    name: "Administración y Gestión",
    description: "Gestión administrativa, contabilidad, recursos humanos",
    icon: "📋",
    count: 38
  },
  {
    id: "turismo",
    name: "Turismo y Hostelería",
    description: "Atención al cliente, cocina, recepción hotelera",
    icon: "🏨",
    count: 22
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explorar por Categoría
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encuentra el curso perfecto para tu carrera profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categorias/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-200 hover:border-blue-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {category.count} cursos disponibles
                  </span>
                  <svg className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

