import { 
  Calendar, 
  Map, 
  Briefcase, 
  DollarSign, 
  FileText, 
  Receipt, 
  GraduationCap, 
  Calculator, 
  Banknote,
  Building2,
  HelpCircle
} from "lucide-react";

interface CategoryIconProps {
  name: string;
  className?: string;
}

export default function CategoryIcon({ name, className = "w-8 h-8" }: CategoryIconProps) {
  const iconMap: { [key: string]: React.ReactNode } = {
    "📅": <Calendar className={className} />,
    "🗺️": <Map className={className} />,
    "💼": <Briefcase className={className} />,
    "💰": <DollarSign className={className} />,
    "📋": <FileText className={className} />,
    "🏛️": <Building2 className={className} />,
    "💸": <Banknote className={className} />,
    "👴": <GraduationCap className={className} />,
    "🎓": <GraduationCap className={className} />,
    "🧮": <Calculator className={className} />,
    "default": <HelpCircle className={className} />
  };

  return iconMap[name] || iconMap["default"];
}

