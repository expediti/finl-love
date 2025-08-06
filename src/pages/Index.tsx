import { useState, useEffect } from "react";
import { Search, Filter, Stethoscope, Users, Award, ChevronRight, Heart, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ToolCard from "@/components/ToolCard";
import QuizModal from "@/components/QuizModal";
import ResultsModal from "@/components/ResultsModal";
import { healthTools, categories, HealthTool } from "@/data/tools";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState<HealthTool | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  // Featured Diabetes Checker State
  const [diabetesSymptoms, setDiabetesSymptoms] = useState<string[]>([]);
  const [showDiabetesResults, setShowDiabetesResults] = useState(false);

  const filteredTools = healthTools.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStartTool = (toolId: string) => {
    const tool = healthTools.find(t => t.id === toolId);
    if (tool) {
      // Convert tool title to URL slug
      const slug = tool.title.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      window.open(`/${slug}`, '_blank');
    }
  };

  const handleQuizComplete = (score: number, answers: Record<string, string>) => {
    setQuizScore(score);
    setQuizAnswers(answers);
    setShowQuiz(false);
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSelectedTool(null);
    setQuizScore(0);
    setQuizAnswers({});
  };

  // Featured Diabetes Checker Functions
  const diabetesSymptomOptions = [
    { id: 'excessive-thirst', text: 'Excessive thirst', weight: 3 },
    { id: 'frequent-urination', text: 'Frequent urination', weight: 3 },
    { id: 'unexplained-weight-loss', text: 'Unexplained weight loss', weight: 3 },
    { id: 'fatigue', text: 'Unusual fatigue or tiredness', weight: 2 },
    { id: 'blurred-vision', text: 'Blurred vision', weight: 2 },
    { id: 'slow-healing', text: 'Slow healing wounds', weight: 2 },
    { id: 'numbness', text: 'Numbness in hands or feet', weight: 2 },
    { id: 'family-history', text: 'Family history of diabetes', weight: 2 }
  ];

  const handleDiabetesSymptomToggle = (symptomId: string) => {
    setDiabetesSymptoms(prev => 
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const calculateDiabetesRisk = () => {
    const totalWeight = diabetesSymptoms.reduce((sum, symptomId) => {
      const symptom = diabetesSymptomOptions.find(s => s.id === symptomId);
      return sum + (symptom?.weight || 0);
    }, 0);

    if (totalWeight >= 8) return { level: 'High', color: 'text-red-600', bgColor: 'bg-red-50 border-red-200' };
    if (totalWeight >= 4) return { level: 'Medium', color: 'text-yellow-600', bgColor: 'bg-yellow-50 border-yellow-200' };
    return { level: 'Low', color: 'text-green-600', bgColor: 'bg-green-50 border-green-200' };
  };

  const handleDiabetesAssessment = () => {
    if (diabetesSymptoms.length === 0) return;
    setShowDiabetesResults(true);
  };

  const handleStartFullDiabetesAssessment = () => {
    const diabetesTool = healthTools.find(t => t.id === 'diabetes-checker');
    if (diabetesTool) {
      setSelectedTool(diabetesTool);
      setShowQuiz(true);
    }
  };

  const stats = [
    { icon: Stethoscope, label: "Health Tools", value: "15+" },
    { icon: Users, label: "Users Helped", value: "10K+" },
    { icon: Award, label: "Accuracy Rate", value: "95%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center slide-up">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Diabetes Symptom Checker */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Quick Diabetes Risk Assessment
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check your symptoms in under 2 minutes. Early detection can make all the difference.
            </p>
          </div>

          <Card className="p-8 bg-white shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Select any symptoms you're experiencing:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {diabetesSymptomOptions.map(symptom => (
                <label key={symptom.id} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={diabetesSymptoms.includes(symptom.id)}
                    onChange={() => handleDiabetesSymptomToggle(symptom.id)}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">{symptom.text}</span>
                </label>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDiabetesAssessment}
                disabled={diabetesSymptoms.length === 0}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get Quick Assessment
              </Button>
              <Button 
                onClick={handleStartFullDiabetesAssessment}
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Take Full Assessment
              </Button>
            </div>

            {showDiabetesResults && diabetesSymptoms.length > 0 && (
              <div className={`mt-8 p-6 rounded-lg border-2 ${calculateDiabetesRisk().bgColor}`}>
                <div className="flex items-center mb-4">
                  <AlertTriangle className={`w-6 h-6 mr-3 ${calculateDiabetesRisk().color}`} />
                  <h4 className={`text-xl font-semibold ${calculateDiabetesRisk().color}`}>
                    Risk Level: {calculateDiabetesRisk().level}
                  </h4>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Based on your selected symptoms, your diabetes risk appears to be <strong>{calculateDiabetesRisk().level.toLowerCase()}</strong>.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    ⚠️ Important Disclaimer:
                  </p>
                  <p className="text-sm text-gray-600">
                    This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
                    {calculateDiabetesRisk().level !== 'Low' && " Please consult with a healthcare professional for proper evaluation and testing."}
                  </p>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button 
                    onClick={handleStartFullDiabetesAssessment}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Take Comprehensive Assessment
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Health Assessment Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive collection of symptom checkers and health assessments
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search health tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <div key={tool.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ToolCard
                  {...tool}
                  onStartTool={handleStartTool}
                />
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No tools found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Control of Your Health Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of users who trust FitScan for their health assessments
          </p>
          <Button size="lg" className="btn-hero">
            Get Started Now
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Modals */}
      {selectedTool && showQuiz && (
        <QuizModal
          tool={selectedTool}
          onComplete={handleQuizComplete}
          onClose={() => {
            setShowQuiz(false);
            setSelectedTool(null);
          }}
        />
      )}

      {selectedTool && showResults && (
        <ResultsModal
          tool={selectedTool}
          score={quizScore}
          answers={quizAnswers}
          onClose={handleCloseResults}
        />
      )}
    </div>
  );
};

export default Index;
