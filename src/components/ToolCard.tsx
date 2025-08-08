import { Clock, ArrowRight } from "lucide-react";
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

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-card hover:bg-card/80">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 rounded bg-primary/80" />
          </div>
          <Badge variant="outline" className={getDifficultyColor(difficulty)}>
            {difficulty}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
