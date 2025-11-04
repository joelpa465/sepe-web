import { 
  Calendar, 
  Map, 
  Briefcase, 
  DollarSign, 
  FileText, 
  GraduationCap, 
  Calculator, 
  Banknote,
  Building2,
  HelpCircle,
  Users,
  Heart,
  TrendingUp
} from "lucide-react";

interface PageIconProps {
  emoji: string;
  size?: number;
}

export default function PageIcon({ emoji, size = 48 }: PageIconProps) {
  const iconMap: { [key: string]: React.ReactNode } = {
    "📅": <Calendar size={size} />,
    "🗺️": <Map size={size} />,
    "💼": <Briefcase size={size} />,
    "💰": <DollarSign size={size} />,
    "📋": <FileText size={size} />,
    "🏛️": <Building2 size={size} />,
    "💸": <Banknote size={size} />,
    "👴": <Users size={size} />,
    "🎓": <GraduationCap size={size} />,
    "🧮": <Calculator size={size} />,
    "default": <HelpCircle size={size} />
  };

  return (
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
      {iconMap[emoji] || iconMap["default"]}
    </div>
  );
}

