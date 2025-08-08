import { Clock, ArrowRight, Heart, Brain, Activity, Lungs, Stomach, Shield, Thermometer, Bone, Zap, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  estimatedTime: string;
  icon: string;
  onStartTool: (toolId: string) => void;
}

const ToolCard = ({
  id,
  title,
  description,
  category,
  difficulty,
  estimatedTime,
  icon,
  onStartTool,
}: ToolCardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Button clicked for tool:", id);
    onStartTool(id);
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Easy":
        return "bg-green-100 text-green-700 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getIconComponent = (toolId: string, category: string) => {
    // First check by specific tool ID
    switch (toolId) {
      case "heart-disease-checker":
      case "heart-attack-checker":
        return <Heart className="w-6 h-6 text-red-500" />;
      case "anxiety-checker":
      case "depression-checker":
        return <Brain className="w-6 h-6 text-purple-500" />;
      case "diabetes-checker":
        return <Activity className="w-6 h-6 text-blue-500" />;
      case "asthma-checker":
        return <Lungs className="w-6 h-6 text-cyan-500" />;
      case "ibs-checker":
      case "food-poisoning-checker":
      case "gastroenteritis-checker":
        return <Stomach className="w-6 h-6 text-orange-500" />;
      case "covid-checker":
        return <Shield className="w-6 h-6 text-red-600" />;
      case "anemia-checker":
        return <Droplets className="w-6 h-6 text-red-400" />;
      case "pcos-checker":
        return <Heart className="w-6 h-6 text-pink-500" />;
      case "arthritis-checker":
        return <Bone className="w-6 h-6 text-yellow-600" />;
      case "dizziness-checker":
        return <Zap className="w-6 h-6 text-purple-400" />;
      case "uti-checker":
        return <Droplets className="w-6 h-6 text-blue-400" />;
      default:
        // Fallback to category-based icons
        switch (category) {
          case "Heart Health":
            return <Heart className="w-6 h-6 text-red-500" />;
          case "Mental Health":
            return <Brain className="w-6 h-6 text-purple-500" />;
          case "Respiratory":
            return <Lungs className="w-6 h-6 text-cyan-500" />;
          case "Digestive":
            return <Stomach className="w-6 h-6 text-orange-500" />;
          case "Metabolic Health":
            return <Activity className="w-6 h-6 text-blue-500" />;
          case "Infectious Disease":
            return <Shield className="w-6 h-6 text-red-600" />;
          case "Women's Health":
            return <Heart className="w-6 h-6 text-pink-500" />;
          case "Neurological":
            return <Zap className="w-6 h-6 text-purple-400" />;
          default:
            return <Activity className="w-6 h-6 text-gray-500" />;
        }
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-card hover:bg-card/80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border border-primary/10">
            {getIconComponent(id, category)}
          </div>
          <Badge variant="outline" className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            {estimatedTime}
          </div>
        </div>
        
        <Button 
          onClick={handleClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-md transition-all duration-300"
          type="button"
        >
          Start Assessment
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
