import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X, AlertTriangle, CheckCircle, Info, Heart } from "lucide-react";
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
    // Convert slug back to tool ID format
    const toolId = toolSlug?.replace(/-/g, '-').toLowerCase();
    const foundTool = healthTools.find(t => 
      t.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-') === toolSlug ||
      t.id === toolId
    );
    
    if (foundTool) {
      setTool(foundTool);
    } else {
      navigate('/');
    }
  }, [toolSlug, navigate]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  const handleAnswerChange = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < tool.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = tool.questions[parseInt(questionIndex)];
      const selectedOption = question.options.find(opt => opt.text === answer);
      if (selectedOption) {
        totalScore += selectedOption.value;
      }
    });
    setScore(totalScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setShowResults(false);
  };

  // Results calculation
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

    return baseRecommendations[riskLevel as keyof typeof baseRecommendations] || baseRecommendations["Low"];
  };

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

  if (showResults) {
    const recommendations = getRecommendations(tool.id, riskAssessment.level);

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>

          <Card className="w-full">
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
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                <Button variant="outline" onClick={resetQuiz} className="w-full sm:w-auto">
                  Retake Assessment
                </Button>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" onClick={() => window.print()} className="w-full sm:w-auto">
                    Print Results
                  </Button>
                  <Button className="btn-medical w-full sm:w-auto">
                    Find a Doctor
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Button>

        <Card className="w-full">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{tool.title}</h1>
              <p className="text-muted-foreground mb-4">{tool.description}</p>
              
              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Question {currentQuestion + 1} of {tool.questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / tool.questions.length) * 100)}%</span>
                </div>
                <Progress value={((currentQuestion + 1) / tool.questions.length) * 100} />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-6">
                {tool.questions[currentQuestion].question}
              </h3>
              
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {tool.questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option.text} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer text-sm leading-relaxed"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                className="btn-medical"
              >
                {currentQuestion === tool.questions.length - 1 ? 'Complete Assessment' : 'Next'}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ToolPage;