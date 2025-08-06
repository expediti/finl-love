import { X, AlertTriangle, CheckCircle, Info, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HealthTool } from "@/data/tools";

interface ResultsModalProps {
  tool: HealthTool;
  score: number;
  answers: Record<string, string>;
  isOpen: boolean;
  onClose: () => void;
}

const ResultsModal = ({ tool, score, answers, isOpen, onClose }: ResultsModalProps) => {
  if (!isOpen) return null;

  // Calculate maximum possible score
  const maxScore = tool.questions.reduce((max, question) => {
    const maxOptionValue = Math.max(...question.options.map(opt => opt.value));
    return max + maxOptionValue;
  }, 0);

  const percentage = (score / maxScore) * 100;

  const getRiskLevel = (percentage: number) => {
    if (percentage <= 25) return { level: "Low", color: "success", icon: CheckCircle };
    if (percentage <= 50) return { level: "Mild", color: "warning", icon: Info };
    if (percentage <= 75) return { level: "Moderate", color: "warning", icon: AlertTriangle };
    return { level: "High", color: "destructive", icon: AlertTriangle };
  };

  const riskAssessment = getRiskLevel(percentage);
  const IconComponent = riskAssessment.icon;

  const getRecommendations = (toolId: string, riskLevel: string) => {
    const baseRecommendations = {
      "Low": [
        "Continue maintaining healthy habits",
        "Schedule regular check-ups with your healthcare provider",
        "Stay aware of any changes in your symptoms"
      ],
      "Mild": [
        "Monitor your symptoms closely",
        "Consider lifestyle modifications",
        "Discuss with your healthcare provider if symptoms persist"
      ],
      "Moderate": [
        "Schedule an appointment with your healthcare provider",
        "Track your symptoms daily",
        "Implement recommended lifestyle changes"
      ],
      "High": [
        "Seek medical attention promptly",
        "Contact your healthcare provider today",
        "Do not ignore these symptoms"
      ]
    };

    const toolSpecificRecommendations = {
      "heart-attack-checker": {
        "High": [
          "🚨 EMERGENCY: Call 911 immediately",
          "Do not drive yourself to the hospital",
          "Chew aspirin if not allergic and no contraindications"
        ]
      },
      "covid-checker": {
        "Moderate": [
          "Self-isolate to prevent spread",
          "Consider getting tested for COVID-19",
          "Monitor symptoms closely"
        ],
        "High": [
          "Get tested for COVID-19 immediately",
          "Self-isolate completely",
          "Seek medical attention if breathing becomes difficult"
        ]
      }
    };

    const specific = toolSpecificRecommendations[toolId as keyof typeof toolSpecificRecommendations];
    if (specific && specific[riskLevel as keyof typeof specific]) {
      return specific[riskLevel as keyof typeof specific];
    }

    return baseRecommendations[riskLevel as keyof typeof baseRecommendations] || baseRecommendations["Low"];
  };

  const recommendations = getRecommendations(tool.id, riskAssessment.level);

  const getResultMessage = (toolId: string, riskLevel: string) => {
    if (toolId === "heart-attack-checker" && riskLevel === "High") {
      return "Your symptoms may indicate a medical emergency. Please seek immediate medical attention.";
    }
    
    const messages = {
      "Low": "Your symptoms appear to be minimal. Continue monitoring your health.",
      "Mild": "You have some symptoms that warrant attention but are not immediately concerning.",
      "Moderate": "Your symptoms suggest you should consult with a healthcare provider.",
      "High": "Your symptoms are concerning and require medical evaluation."
    };
    
    return messages[riskLevel as keyof typeof messages] || messages["Low"];
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                riskAssessment.color === "success" ? "bg-success/10 text-success" :
                riskAssessment.color === "warning" ? "bg-warning/10 text-warning" :
                "bg-destructive/10 text-destructive"
              }`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Assessment Results</h2>
                <p className="text-muted-foreground">{tool.title}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Risk Level */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Risk Level</span>
              <Badge 
                variant="outline" 
                className={`${
                  riskAssessment.color === "success" ? "border-success text-success" :
                  riskAssessment.color === "warning" ? "border-warning text-warning" :
                  "border-destructive text-destructive"
                }`}
              >
                {riskAssessment.level} Risk
              </Badge>
            </div>
            <Progress 
              value={percentage} 
              className={`h-3 ${
                riskAssessment.color === "success" ? "[&>div]:bg-success" :
                riskAssessment.color === "warning" ? "[&>div]:bg-warning" :
                "[&>div]:bg-destructive"
              }`}
            />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Score: {score}/{maxScore}</span>
              <span>{Math.round(percentage)}%</span>
            </div>
          </div>

          {/* Result Message */}
          <div className="mb-6 p-4 rounded-lg bg-muted/50">
            <p className="text-center font-medium">
              {getResultMessage(tool.id, riskAssessment.level)}
            </p>
          </div>

          {/* Recommendations */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-primary" />
              Recommendations
            </h3>
            <div className="space-y-3">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-card border">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-6 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-warning mb-1">Important Disclaimer</p>
                <p className="text-muted-foreground">
                  This assessment is for informational purposes only and is not a substitute for professional medical advice. 
                  Always consult with a qualified healthcare provider for proper diagnosis and treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={onClose}>
              Close Results
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={() => window.print()}>
                Print Results
              </Button>
              <Button className="btn-medical">
                Find a Doctor
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultsModal;
