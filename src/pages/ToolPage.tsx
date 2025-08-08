import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, Info, Heart, Printer, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    const slug = toolSlug || window.location.pathname.substring(1);
    console.log("Looking for tool with slug:", slug);
    console.log("Available tools:", healthTools.map(t => t.id));
    
    const foundTool = healthTools.find(t => t.id === slug);
    
    if (foundTool) {
      setTool(foundTool);
      setStartTime(new Date());
      document.title = `${foundTool.title} - FitScan Health Assessment`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${foundTool.description} Complete your ${foundTool.title} assessment in ${foundTool.estimatedTime}.`);
      }
    } else {
      console.log("Tool not found, redirecting to home");
      navigate('/');
    }
  }, [toolSlug, navigate]);

  const handleAnswerChange = (value: string) => {
    if (!tool) return;
    
    const questionId = tool.questions[currentQuestion].id;
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (!tool) return;
    
    if (currentQuestion < tool.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    if (!tool) return;
    
    let totalScore = 0;
    tool.questions.forEach(question => {
      const answer = answers[question.id];
      const option = question.options.find(opt => opt.text === answer);
      if (option) {
        totalScore += option.score;
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
    setStartTime(new Date());
  };

  const getRiskLevel = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return { level: "High", color: "text-red-600", bgColor: "bg-red-100", printColor: "high-risk" };
    if (percentage >= 40) return { level: "Medium", color: "text-yellow-600", bgColor: "bg-yellow-100", printColor: "medium-risk" };
    return { level: "Low", color: "text-green-600", bgColor: "bg-green-100", printColor: "low-risk" };
  };

  const getRecommendations = (riskLevel: string) => {
    switch (riskLevel) {
      case "High":
        return [
          "Consult with a healthcare professional immediately",
          "Monitor symptoms closely",
          "Consider urgent medical attention if symptoms worsen",
          "Follow up with your doctor within 24-48 hours"
        ];
      case "Medium":
        return [
          "Schedule an appointment with your healthcare provider",
          "Monitor symptoms for any changes",
          "Maintain a healthy lifestyle",
          "Follow up in 1-2 weeks if symptoms persist"
        ];
      case "Low":
        return [
          "Continue maintaining a healthy lifestyle",
          "Monitor for any symptom changes",
          "Regular health check-ups as recommended",
          "Practice preventive care measures"
        ];
      default:
        return [];
    }
  };

  const handlePrint = () => {
    // Add print-ready class to body
    document.body.classList.add('print-mode');
    
    // Hide non-printable elements
    const nonPrintElements = document.querySelectorAll('.no-print');
    nonPrintElements.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });
    
    // Trigger print
    window.print();
    
    // Restore after print
    setTimeout(() => {
      document.body.classList.remove('print-mode');
      nonPrintElements.forEach(el => {
        (el as HTMLElement).style.display = '';
      });
    }, 100);
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-lg">Loading assessment...</p>
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              className="mt-4"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / tool.questions.length) * 100;
  const currentQ = tool.questions[currentQuestion];
  const selectedAnswer = answers[currentQ?.id];
  const maxScore = tool.questions.reduce((acc, q) => acc + Math.max(...q.options.map(o => o.score)), 0);
  const riskData = getRiskLevel(score, maxScore);

  return (
    <div className="min-h-screen bg-background">
      {/* Print Header - Only visible when printing */}
      <div className="print-header print-only">
        <div className="print-logo-section">
          <div className="print-logo">
            <div className="logo-icon">🏥</div>
            <div className="logo-text">
              <h1>FitScan</h1>
              <p>Health Assessment Platform</p>
            </div>
          </div>
          <div className="print-date">
            {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
          </div>
        </div>
        <div className="print-title">
          <h2>{tool.title} - Assessment Report</h2>
          <div className="print-url">Generated from: {window.location.href}</div>
        </div>
      </div>

      <div className="no-print">
        <Navigation />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 no-print">
          <Button 
            onClick={() => navigate('/')} 
            variant="ghost" 
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tools
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{tool.title}</h1>
              <p className="text-muted-foreground">{tool.description}</p>
            </div>
            <Badge variant="secondary" className="text-sm">
              {tool.estimatedTime}
            </Badge>
          </div>
        </div>

        {!showResults ? (
          <Card className="no-print">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  Question {currentQuestion + 1} of {tool.questions.length}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="w-full" />
            </CardHeader>
            
            <CardContent className="space-y-6">
              <h2 className="text-xl font-semibold">{currentQ.text}</h2>
              
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerChange}>
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.text} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`} 
                        className="flex-1 cursor-pointer p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
              
              <div className="flex justify-between pt-6">
                <Button 
                  onClick={handlePrevious} 
                  disabled={currentQuestion === 0}
                  variant="outline"
                >
                  Previous
                </Button>
                
                <Button 
                  onClick={handleNext} 
                  disabled={!selectedAnswer}
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentQuestion === tool.questions.length - 1 ? 'Get Results' : 'Next'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Results Header */}
            <div className="print-section">
              <Card className="print-card">
                <CardHeader className="text-center print-header-section">
                  <CardTitle className="text-2xl mb-2 print-title">Assessment Results</CardTitle>
                  <p className="text-muted-foreground print-subtitle">
                    Based on your answers, here's your health assessment
                  </p>
                </CardHeader>
              </Card>
            </div>

            {/* Risk Level Card */}
            <div className="print-section">
              <Card className="print-card">
                <CardContent className="p-6 print-content">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${riskData.bgColor} ${riskData.color} text-lg font-semibold mb-4 print-risk-badge ${riskData.printColor}`}>
                      {riskData.level === "High" && <AlertTriangle className="w-5 h-5 mr-2" />}
                      {riskData.level === "Medium" && <Info className="w-5 h-5 mr-2" />}
                      {riskData.level === "Low" && <CheckCircle className="w-5 h-5 mr-2" />}
                      {riskData.level} Risk Level
                    </div>
                    <p className="text-3xl font-bold mb-2 print-score">{score}/{maxScore}</p>
                    <p className="text-muted-foreground print-score-label">Risk Score</p>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3 mb-6 print-progress-container">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 print-progress-bar ${
                        riskData.level === "High" ? "bg-red-500 print-progress-high" :
                        riskData.level === "Medium" ? "bg-yellow-500 print-progress-medium" : "bg-green-500 print-progress-low"
                      }`}
                      style={{ width: `${(score / maxScore) * 100}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <div className="print-section">
              <Card className="print-card">
                <CardHeader>
                  <CardTitle className="flex items-center print-recommendations-title">
                    <Heart className="w-5 h-5 mr-2 text-red-500" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="print-content">
                  <ul className="space-y-3 print-recommendations-list">
                    {getRecommendations(riskData.level).map((rec, index) => (
                      <li key={index} className="flex items-start print-recommendation-item">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 print-bullet"></div>
                        <span className="print-recommendation-text">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 no-print">
              <Button onClick={resetQuiz} variant="outline" className="flex-1">
                Retake Assessment
              </Button>
              <Button onClick={handlePrint} variant="outline" className="flex-1">
                <Printer className="w-4 h-4 mr-2" />
                Print Results
              </Button>
              <Button onClick={() => navigate('/')} className="flex-1">
                <Home className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="print-section">
              <Card className="bg-muted/30 print-card print-disclaimer">
                <CardContent className="p-4 print-content">
                  <p className="text-sm text-muted-foreground text-center print-disclaimer-text">
                    <strong>Disclaimer:</strong> This assessment is for informational purposes only and should not replace professional medical advice. 
                    Always consult with a qualified healthcare provider for proper diagnosis and treatment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Print Footer */}
            <div className="print-footer print-only">
              <div className="print-footer-content">
                <div className="footer-left">
                  <p>© 2025 FitScan Health Assessment Platform</p>
                  <p>Visit us at: {window.location.origin}</p>
                </div>
                <div className="footer-right">
                  <p>Generated on: {new Date().toLocaleString()}</p>
                  <p>Page 1 of 1</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToolPage;
