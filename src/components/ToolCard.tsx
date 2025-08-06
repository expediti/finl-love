import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Activity, 
  Stethoscope, 
  AlertTriangle,
  Shield,
  Thermometer,
  Zap,
  Eye,
  Clock
} from "lucide-react";

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  estimatedTime: string;
  icon?: string;
  onStartTool: (toolId: string) => void;
}

const iconMap = {
  heart: Heart,
  brain: Brain,
  activity: Activity,
  stethoscope: Stethoscope,
  warning: AlertTriangle,
  shield: Shield,
  thermometer: Thermometer,
  zap: Zap,
  eye: Eye,
  clock: Clock,
};

const ToolCard = ({ 
  id, 
  title, 
  description, 
  category, 
  difficulty, 
  estimatedTime, 
  icon = "activity",
  onStartTool 
}: ToolCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Activity;

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "heart health": return "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800";
      case "mental health": return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800";
      case "respiratory": return "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800";
      case "digestive": return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800";
      case "women's health": return "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950 dark:text-pink-300 dark:border-pink-800";
      case "general": return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800";
      default: return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-800";
    }
  };

  return (
    <div 
      className="card-tool group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onStartTool(id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
          isHovered 
            ? "bg-primary text-primary-foreground shadow-lg" 
            : "bg-primary/10 text-primary"
        }`}>
          <IconComponent className="w-6 h-6" />
        </div>
        
        <Badge 
          variant="outline" 
          className={`text-xs ${getCategoryColor(category)}`}
        >
          {category}
        </Badge>
      </div>

      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <Badge className={`text-xs ${getDifficultyColor(difficulty)}`}>
          {difficulty}
        </Badge>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="w-3 h-3 mr-1" />
          {estimatedTime}
        </div>
      </div>

      <Button 
        className="w-full btn-medical group-hover:shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
          onStartTool(id);
        }}
      >
        Start Assessment
      </Button>
    </div>
  );
};

export default ToolCard;