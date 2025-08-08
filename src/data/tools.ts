export interface HealthTool {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  estimatedTime: string;
  icon: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  score: number;
}

export const categories = [
  "All",
  "Heart Health",
  "Mental Health", 
  "Metabolic Health",
  "Respiratory",
  "Digestive",
  "General Health"
];

export const healthTools: HealthTool[] = [
  {
    id: "diabetes-checker",
    title: "Diabetes Risk Assessment",
    description: "Evaluate your risk factors for developing diabetes based on lifestyle and symptoms",
    category: "Metabolic Health",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "🩺",
    questions: [
      {
        id: "age",
        text: "What is your age group?",
        options: [
          { text: "Under 30", score: 0 },
          { text: "30-44", score: 1 },
          { text: "45-64", score: 2 },
          { text: "65 and above", score: 3 }
        ]
      },
      {
        id: "weight",
        text: "How would you describe your weight status?",
        options: [
          { text: "Normal weight", score: 0 },
          { text: "Slightly overweight", score: 1 },
          { text: "Overweight", score: 2 },
          { text: "Obese", score: 3 }
        ]
      },
      {
        id: "family_history",
        text: "Do you have a family history of diabetes?",
        options: [
          { text: "No family history", score: 0 },
          { text: "Distant relatives with diabetes", score: 1 },
          { text: "Parents or siblings with diabetes", score: 3 }
        ]
      },
      {
        id: "symptoms",
        text: "Have you experienced increased thirst and frequent urination?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Very frequently", score: 3 }
        ]
      },
      {
        id: "lifestyle",
        text: "How often do you exercise?",
        options: [
          { text: "Daily", score: 0 },
          { text: "Several times a week", score: 1 },
          { text: "Once a week", score: 2 },
          { text: "Rarely or never", score: 3 }
        ]
      }
    ]
  },
  {
    id: "anemia-checker",
    title: "Anemia Symptom Checker",
    description: "Check if your symptoms might indicate anemia and understand when to seek medical care",
    category: "General Health",
    difficulty: "Easy",
    estimatedTime: "3-4 min",
    icon: "🩸",
    questions: [
      {
        id: "fatigue",
        text: "How often do you feel unusually tired or weak?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost constantly", score: 3 }
        ]
      },
      {
        id: "skin_color",
        text: "Have you noticed pale skin, nail beds, or inner eyelids?",
        options: [
          { text: "No, normal color", score: 0 },
          { text: "Slightly pale", score: 1 },
          { text: "Noticeably pale", score: 2 },
          { text: "Very pale", score: 3 }
        ]
      },
      {
        id: "breathing",
        text: "Do you experience shortness of breath during normal activities?",
        options: [
          { text: "Never", score: 0 },
          { text: "Only during intense exercise", score: 0 },
          { text: "During moderate activity", score: 2 },
          { text: "Even at rest", score: 3 }
        ]
      },
      {
        id: "heart_rate",
        text: "Have you noticed your heart beating faster than usual?",
        options: [
          { text: "No changes", score: 0 },
          { text: "Occasionally faster", score: 1 },
          { text: "Frequently rapid", score: 2 },
          { text: "Constantly rapid", score: 3 }
        ]
      }
    ]
  },
  {
    id: "heart-disease-checker",
    title: "Heart Disease Risk Assessment",
    description: "Evaluate your cardiovascular health and risk factors for heart disease",
    category: "Heart Health",
    difficulty: "Medium",
    estimatedTime: "5-7 min",
    icon: "❤️",
    questions: [
      {
        id: "chest_pain",
        text: "Do you experience chest pain or discomfort?",
        options: [
          { text: "Never", score: 0 },
          { text: "Rarely, during intense exercise", score: 1 },
          { text: "Sometimes during moderate activity", score: 2 },
          { text: "Frequently, even at rest", score: 3 }
        ]
      },
      {
        id: "blood_pressure",
        text: "What is your typical blood pressure reading?",
        options: [
          { text: "Normal (less than 120/80)", score: 0 },
          { text: "Elevated (120-129/less than 80)", score: 1 },
          { text: "Stage 1 High (130-139/80-89)", score: 2 },
          { text: "Stage 2 High (140/90 or higher)", score: 3 }
        ]
      },
      {
        id: "cholesterol",
        text: "Do you know your cholesterol levels?",
        options: [
          { text: "Normal levels (less than 200 mg/dL)", score: 0 },
          { text: "Borderline high (200-239 mg/dL)", score: 1 },
          { text: "High (240 mg/dL or above)", score: 2 },
          { text: "Don't know my levels", score: 1 }
        ]
      },
      {
        id: "smoking",
        text: "Do you smoke or have you smoked in the past?",
        options: [
          { text: "Never smoked", score: 0 },
          { text: "Former smoker (quit over 5 years ago)", score: 1 },
          { text: "Former smoker (quit within 5 years)", score: 2 },
          { text: "Current smoker", score: 3 }
        ]
      }
    ]
  },
  {
    id: "anxiety-checker",
    title: "Anxiety Assessment",
    description: "Evaluate symptoms of anxiety and understand when professional help might be beneficial",
    category: "Mental Health",
    difficulty: "Easy",
    estimatedTime: "4-6 min",
    icon: "🧠",
    questions: [
      {
        id: "worry",
        text: "How often do you feel nervous, anxious, or on edge?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "control",
        text: "How often do you have trouble stopping or controlling worrying?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "restless",
        text: "How often do you feel restless, so that it's hard to sit still?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "physical_symptoms",
        text: "Do you experience physical symptoms like rapid heartbeat, sweating, or trembling?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost always", score: 3 }
        ]
      }
    ]
  },
  {
    id: "asthma-checker",
    title: "Asthma Symptom Checker",
    description: "Assess respiratory symptoms that might indicate asthma or breathing difficulties",
    category: "Respiratory",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "🫁",
    questions: [
      {
        id: "wheezing",
        text: "Do you experience wheezing or whistling sounds when breathing?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Daily", score: 3 }
        ]
      },
      {
        id: "coughing",
        text: "How often do you have a persistent cough, especially at night?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Several times a week", score: 2 },
          { text: "Daily or nightly", score: 3 }
        ]
      },
      {
        id: "triggers",
        text: "Do certain triggers (allergens, exercise, cold air) worsen your breathing?",
        options: [
          { text: "No triggers identified", score: 0 },
          { text: "Mild reaction to some triggers", score: 1 },
          { text: "Moderate reaction to triggers", score: 2 },
          { text: "Severe reaction to multiple triggers", score: 3 }
        ]
      }
    ]
  }
];
