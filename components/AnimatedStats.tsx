"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  FileCheck, 
  Clock,
  Award,
  TrendingUp
} from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: "200+",
    label: "Cursos Gratuitos",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "50K+",
    label: "Usuarios Ayudados",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    value: "100%",
    label: "Certificados Oficiales",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "24/7",
    label: "Soporte Disponible",
    color: "from-orange-500 to-orange-600"
  }
];

function useOnScreen(ref: React.RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

interface AnimatedCounterProps {
  value: string;
  color: string;
}

function AnimatedCounter({ value, color }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (!isVisible) return;
    
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    if (isNaN(numericValue)) {
      setCount(value as any);
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  if (!value.match(/[0-9]/)) {
    return <span ref={ref} className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{value}</span>;
  }

  return (
    <span ref={ref} className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {count}{value.replace(/[0-9]/g, '')}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Por Qué Elegirnos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La plataforma más completa para gestionar tus trámites SEPE
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} color={stat.color} />
              <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

