import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, Info, Heart, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { healthTools, HealthTool } from "@/data/tools";

const ToolPage = () => {
  const { toolSlug } = useParams();
  const navigate = useNavigate();
  const [tool, setTool] = useState<HealthTool | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Find tool by exact ID match
    const foundTool = healthTools.find(t => t.id === toolSlug);
    
    if (foundTool) {
      setTool(foundTool);
      // Update page title and meta description
      document.title = `${foundTool.title} - FitScan Health Assessment`;
      
      // Add meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${foundTool.description} Complete your ${foundTool.title} assessment in ${foundTool.estimatedTime}.`);
      }
    } else {
      console.log("Tool not found for slug:", toolSlug);
      navigate('/');
    }
  }, [toolSlug, navigate]);

  // ... rest of your existing ToolPage logic remains the same ...
  
  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading {toolSlug?.replace('-', ' ')} assessment...</p>
        </div>
      </div>
    );
  }

  // ... rest of your existing component logic ...
};

export default ToolPage;
