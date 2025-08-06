import { useState } from "react";
import { X, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { HealthTool, Question, Option } from "@/data/tools";

interface QuizModalProps {
  tool: HealthTool;
  onClose: () => void;
  onComplete: (score: number, answers: Record<string, string>) => void;
}

const QuizModal = ({ tool, onClose, onComplete }: QuizModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>("");

  const progress = ((currentQuestion + 1) / tool.questions.length) * 100;
  const question = tool.questions[currentQuestion];
  const isLastQuestion = currentQuestion === tool.questions.length - 1;
  const canProceed = selectedOption !== "";

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!canProceed) return;
    
    const newAnswers = { ...answers, [question.id]: selectedOption };
    setAnswers(newAnswers);
    
    if (isLastQuestion) {
      // Calculate score
      const totalScore = tool.questions.reduce((score, q) => {
        const answerId = newAnswers[q.id];
        const option = q.options.find(opt => opt.id === answerId);
        return score + (option?.value || 0);
      }, 0);
      
      onComplete(totalScore, newAnswers);
    } else {
      setCurrentQuestion(prev => prev + 1);
      // Load previous answer for next question if going back
      const nextQuestionAnswer = answers[tool.questions[currentQuestion + 1]?.id];
      setSelectedOption(nextQuestionAnswer || "");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      const previousAnswer = answers[tool.questions[currentQuestion - 1].id];
      setSelectedOption(previousAnswer || "");
    }
  };

  const handleClose = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">{tool.title}</h2>
              <p className="text-muted-foreground">
                Question {currentQuestion + 1} of {tool.questions.length}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="w-8 h-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
            
            <div className="space-y-3">
              {question.options.map((option: Option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedOption === option.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border hover:border-primary/50 hover:bg-muted/50"
                  }`}
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === option.id
                        ? "border-primary bg-primary"
                        : "border-border"
                    }`}>
                      {selectedOption === option.id && (
                        <CheckCircle className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{option.text}</p>
                      {option.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <Badge variant="outline" className="text-sm">
              {currentQuestion + 1} / {tool.questions.length}
            </Badge>

            <Button
              onClick={handleNext}
              disabled={!canProceed}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center space-x-2"
            >
              <span>{isLastQuestion ? "Complete Assessment" : "Next"}</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuizModal;
