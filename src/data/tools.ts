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
  "General Health",
  "Women's Health",
  "Neurological",
  "Infectious Disease"
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
    id: "pcos-checker",
    title: "PCOS Symptom Assessment",
    description: "Evaluate symptoms that might indicate Polycystic Ovary Syndrome (PCOS)",
    category: "Women's Health",
    difficulty: "Medium",
    estimatedTime: "5-7 min",
    icon: "🌸",
    questions: [
      {
        id: "menstrual_cycle",
        text: "How would you describe your menstrual cycles?",
        options: [
          { text: "Regular (every 21-35 days)", score: 0 },
          { text: "Slightly irregular", score: 1 },
          { text: "Very irregular or infrequent", score: 2 },
          { text: "Absent for months", score: 3 }
        ]
      },
      {
        id: "weight_gain",
        text: "Have you experienced unexplained weight gain or difficulty losing weight?",
        options: [
          { text: "No weight issues", score: 0 },
          { text: "Slight weight gain", score: 1 },
          { text: "Significant weight gain", score: 2 },
          { text: "Severe weight gain with difficulty losing", score: 3 }
        ]
      },
      {
        id: "hair_growth",
        text: "Do you have excessive hair growth on face, chest, or other areas?",
        options: [
          { text: "No unusual hair growth", score: 0 },
          { text: "Slight increase in hair growth", score: 1 },
          { text: "Noticeable excess hair growth", score: 2 },
          { text: "Significant excess hair growth", score: 3 }
        ]
      },
      {
        id: "acne",
        text: "Do you experience persistent acne or skin problems?",
        options: [
          { text: "No skin problems", score: 0 },
          { text: "Occasional acne", score: 1 },
          { text: "Frequent acne outbreaks", score: 2 },
          { text: "Severe, persistent acne", score: 3 }
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
    id: "heart-attack-checker",
    title: "Heart Attack Risk Checker",
    description: "Assess symptoms and risk factors that might indicate heart attack risk",
    category: "Heart Health",
    difficulty: "Advanced",
    estimatedTime: "4-6 min",
    icon: "💔",
    questions: [
      {
        id: "chest_pressure",
        text: "Do you feel pressure, tightness, or crushing pain in your chest?",
        options: [
          { text: "No chest discomfort", score: 0 },
          { text: "Mild discomfort occasionally", score: 1 },
          { text: "Moderate pressure or pain", score: 2 },
          { text: "Severe crushing pain", score: 3 }
        ]
      },
      {
        id: "arm_pain",
        text: "Do you have pain radiating to your arm, neck, jaw, or back?",
        options: [
          { text: "No radiating pain", score: 0 },
          { text: "Mild discomfort in one area", score: 1 },
          { text: "Moderate pain in multiple areas", score: 2 },
          { text: "Severe pain radiating widely", score: 3 }
        ]
      },
      {
        id: "breathing_difficulty",
        text: "Are you experiencing shortness of breath?",
        options: [
          { text: "Normal breathing", score: 0 },
          { text: "Slightly winded", score: 1 },
          { text: "Difficulty breathing", score: 2 },
          { text: "Severe breathing problems", score: 3 }
        ]
      },
      {
        id: "other_symptoms",
        text: "Do you have nausea, lightheadedness, or cold sweats?",
        options: [
          { text: "No additional symptoms", score: 0 },
          { text: "One mild symptom", score: 1 },
          { text: "Multiple symptoms", score: 2 },
          { text: "Severe multiple symptoms", score: 3 }
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
    id: "depression-checker",
    title: "Depression Assessment",
    description: "Evaluate symptoms of depression and understand when to seek professional help",
    category: "Mental Health",
    difficulty: "Easy",
    estimatedTime: "5-7 min",
    icon: "😔",
    questions: [
      {
        id: "mood",
        text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "interest",
        text: "How often have you had little interest or pleasure in doing things?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "sleep",
        text: "How has your sleep been affected?",
        options: [
          { text: "Normal sleep patterns", score: 0 },
          { text: "Slight changes in sleep", score: 1 },
          { text: "Significant sleep problems", score: 2 },
          { text: "Severe sleep disturbances", score: 3 }
        ]
      },
      {
        id: "energy",
        text: "How often do you feel tired or have little energy?",
        options: [
          { text: "Not at all", score: 0 },
          { text: "Several days", score: 1 },
          { text: "More than half the days", score: 2 },
          { text: "Nearly every day", score: 3 }
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
  },
  {
    id: "ibs-checker",
    title: "IBS Symptom Assessment",
    description: "Evaluate digestive symptoms that might indicate Irritable Bowel Syndrome",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "4-6 min",
    icon: "🍽️",
    questions: [
      {
        id: "abdominal_pain",
        text: "How often do you experience abdominal pain or cramping?",
        options: [
          { text: "Never", score: 0 },
          { text: "Occasionally", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Daily", score: 3 }
        ]
      },
      {
        id: "bowel_changes",
        text: "Have you noticed changes in your bowel movements?",
        options: [
          { text: "Normal, consistent patterns", score: 0 },
          { text: "Occasional changes", score: 1 },
          { text: "Frequent changes (diarrhea/constipation)", score: 2 },
          { text: "Severe, unpredictable changes", score: 3 }
        ]
      },
      {
        id: "bloating",
        text: "Do you experience bloating or gas?",
        options: [
          { text: "Rarely", score: 0 },
          { text: "Sometimes after meals", score: 1 },
          { text: "Frequently", score: 2 },
          { text: "Almost constantly", score: 3 }
        ]
      },
      {
        id: "food_triggers",
        text: "Do certain foods trigger your symptoms?",
        options: [
          { text: "No food triggers identified", score: 0 },
          { text: "One or two foods cause mild symptoms", score: 1 },
          { text: "Multiple foods cause symptoms", score: 2 },
          { text: "Many foods cause severe symptoms", score: 3 }
        ]
      }
    ]
  },
  {
    id: "covid-checker",
    title: "COVID-19 Symptom Checker",
    description: "Assess symptoms that might indicate COVID-19 infection",
    category: "Infectious Disease",
    difficulty: "Easy",
    estimatedTime: "3-4 min",
    icon: "🦠",
    questions: [
      {
        id: "fever",
        text: "Do you have a fever (temperature above 100.4°F/38°C)?",
        options: [
          { text: "No fever", score: 0 },
          { text: "Low-grade fever", score: 1 },
          { text: "Moderate fever", score: 2 },
          { text: "High fever", score: 3 }
        ]
      },
      {
        id: "respiratory_symptoms",
        text: "Do you have a cough, shortness of breath, or difficulty breathing?",
        options: [
          { text: "No respiratory symptoms", score: 0 },
          { text: "Mild cough", score: 1 },
          { text: "Persistent cough or mild breathing difficulty", score: 2 },
          { text: "Severe cough or significant breathing problems", score: 3 }
        ]
      },
      {
        id: "loss_of_senses",
        text: "Have you lost your sense of taste or smell?",
        options: [
          { text: "Normal taste and smell", score: 0 },
          { text: "Slight reduction in taste/smell", score: 1 },
          { text: "Significant loss of taste/smell", score: 2 },
          { text: "Complete loss of taste/smell", score: 3 }
        ]
      },
      {
        id: "other_symptoms",
        text: "Do you have fatigue, body aches, headache, or sore throat?",
        options: [
          { text: "No additional symptoms", score: 0 },
          { text: "One mild symptom", score: 1 },
          { text: "Multiple symptoms", score: 2 },
          { text: "Severe multiple symptoms", score: 3 }
        ]
      }
    ]
  },
  {
    id: "food-poisoning-checker",
    title: "Food Poisoning Assessment",
    description: "Evaluate symptoms that might indicate food poisoning or foodborne illness",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "🤢",
    questions: [
      {
        id: "nausea_vomiting",
        text: "Are you experiencing nausea or vomiting?",
        options: [
          { text: "No nausea or vomiting", score: 0 },
          { text: "Mild nausea", score: 1 },
          { text: "Moderate nausea with some vomiting", score: 2 },
          { text: "Severe nausea with frequent vomiting", score: 3 }
        ]
      },
      {
        id: "diarrhea",
        text: "Do you have diarrhea?",
        options: [
          { text: "Normal bowel movements", score: 0 },
          { text: "Loose stools", score: 1 },
          { text: "Frequent diarrhea", score: 2 },
          { text: "Severe, watery diarrhea", score: 3 }
        ]
      },
      {
        id: "stomach_pain",
        text: "How severe is your stomach pain or cramping?",
        options: [
          { text: "No pain", score: 0 },
          { text: "Mild discomfort", score: 1 },
          { text: "Moderate pain", score: 2 },
          { text: "Severe cramping pain", score: 3 }
        ]
      },
      {
        id: "recent_food",
        text: "Have you eaten potentially contaminated food in the last 72 hours?",
        options: [
          { text: "No suspicious foods", score: 0 },
          { text: "Possibly risky food", score: 1 },
          { text: "Definitely ate questionable food", score: 2 },
          { text: "Ate food that was clearly spoiled/contaminated", score: 3 }
        ]
      }
    ]
  },
  {
    id: "gastroenteritis-checker",
    title: "Gastroenteritis Assessment",
    description: "Check symptoms of stomach flu or gastroenteritis",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "4-5 min",
    icon: "🤮",
    questions: [
      {
        id: "onset",
        text: "How quickly did your symptoms start?",
        options: [
          { text: "Gradual onset over days", score: 0 },
          { text: "Moderate onset over hours", score: 1 },
          { text: "Rapid onset within hours", score: 2 },
          { text: "Very sudden onset", score: 3 }
        ]
      },
      {
        id: "vomiting_frequency",
        text: "How often are you vomiting?",
        options: [
          { text: "Not vomiting", score: 0 },
          { text: "Once or twice", score: 1 },
          { text: "Several times a day", score: 2 },
          { text: "Almost constantly", score: 3 }
        ]
      },
      {
        id: "dehydration",
        text: "Do you have signs of dehydration (dry mouth, dizziness, dark urine)?",
        options: [
          { text: "No dehydration signs", score: 0 },
          { text: "Mild signs", score: 1 },
          { text: "Moderate dehydration", score: 2 },
          { text: "Severe dehydration signs", score: 3 }
        ]
      }
    ]
  },
  {
    id: "arthritis-checker",
    title: "Arthritis Symptom Checker",
    description: "Assess joint pain and stiffness that might indicate arthritis",
    category: "General Health",
    difficulty: "Easy",
    estimatedTime: "4-6 min",
    icon: "🦴",
    questions: [
      {
        id: "joint_pain",
        text: "Do you experience joint pain?",
        options: [
          { text: "No joint pain", score: 0 },
          { text: "Occasional mild pain", score: 1 },
          { text: "Regular moderate pain", score: 2 },
          { text: "Severe, constant pain", score: 3 }
        ]
      },
      {
        id: "stiffness",
        text: "Do you have joint stiffness, especially in the morning?",
        options: [
          { text: "No stiffness", score: 0 },
          { text: "Brief morning stiffness", score: 1 },
          { text: "Stiffness lasting over 30 minutes", score: 2 },
          { text: "Prolonged stiffness throughout day", score: 3 }
        ]
      },
      {
        id: "swelling",
        text: "Are your joints swollen or tender?",
        options: [
          { text: "No swelling", score: 0 },
          { text: "Slight swelling", score: 1 },
          { text: "Noticeable swelling", score: 2 },
          { text: "Significant swelling and tenderness", score: 3 }
        ]
      },
      {
        id: "movement_difficulty",
        text: "Do you have difficulty moving affected joints?",
        options: [
          { text: "Full range of motion", score: 0 },
          { text: "Slightly limited movement", score: 1 },
          { text: "Moderately limited movement", score: 2 },
          { text: "Severely limited movement", score: 3 }
        ]
      }
    ]
  },
  {
    id: "dizziness-checker",
    title: "Dizziness Assessment",
    description: "Evaluate dizziness symptoms and potential underlying causes",
    category: "Neurological",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "💫",
    questions: [
      {
        id: "dizziness_type",
        text: "What type of dizziness do you experience?",
        options: [
          { text: "No dizziness", score: 0 },
          { text: "Lightheadedness", score: 1 },
          { text: "Spinning sensation (vertigo)", score: 2 },
          { text: "Severe vertigo with nausea", score: 3 }
        ]
      },
      {
        id: "triggers",
        text: "What triggers your dizziness?",
        options: [
          { text: "No specific triggers", score: 0 },
          { text: "Standing up quickly", score: 1 },
          { text: "Head movements", score: 2 },
          { text: "Multiple triggers or constant", score: 3 }
        ]
      },
      {
        id: "balance",
        text: "Do you have trouble with balance or walking?",
        options: [
          { text: "Normal balance", score: 0 },
          { text: "Slight unsteadiness", score: 1 },
          { text: "Noticeable balance problems", score: 2 },
          { text: "Severe balance issues, need support", score: 3 }
        ]
      }
    ]
  },
  {
    id: "uti-checker",
    title: "UTI Symptom Checker",
    description: "Assess symptoms that might indicate a urinary tract infection",
    category: "General Health",
    difficulty: "Easy",
    estimatedTime: "3-4 min",
    icon: "🚿",
    questions: [
      {
        id: "urination_pain",
        text: "Do you experience pain or burning during urination?",
        options: [
          { text: "No pain during urination", score: 0 },
          { text: "Mild discomfort", score: 1 },
          { text: "Moderate burning sensation", score: 2 },
          { text: "Severe pain during urination", score: 3 }
        ]
      },
      {
        id: "frequency",
        text: "How often do you need to urinate?",
        options: [
          { text: "Normal frequency", score: 0 },
          { text: "Slightly more often", score: 1 },
          { text: "Much more frequently", score: 2 },
          { text: "Constantly feeling the need to urinate", score: 3 }
        ]
      },
      {
        id: "urine_appearance",
        text: "How does your urine look?",
        options: [
          { text: "Normal, clear to pale yellow", score: 0 },
          { text: "Slightly cloudy", score: 1 },
          { text: "Cloudy or strong-smelling", score: 2 },
          { text: "Cloudy with blood or very strong odor", score: 3 }
        ]
      },
      {
        id: "pelvic_pain",
        text: "Do you have pelvic pain or pressure?",
        options: [
          { text: "No pelvic pain", score: 0 },
          { text: "Mild discomfort", score: 1 },
          { text: "Moderate pelvic pain", score: 2 },
          { text: "Severe pelvic pain or pressure", score: 3 }
        ]
      }
    ]
  }
];
