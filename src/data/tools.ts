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
  question: string;
  type: "single" | "multiple" | "scale";
  options: Option[];
  weight?: number;
}

export interface Option {
  id: string;
  text: string;
  value: number;
  description?: string;
}

export const healthTools: HealthTool[] = [
  {
    id: "anemia-checker",
    title: "Anemia Symptom Checker",
    description: "Assess symptoms related to iron deficiency and various types of anemia through a comprehensive questionnaire.",
    category: "General",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "activity",
    questions: [
      {
        id: "fatigue",
        question: "How often do you experience unusual fatigue or weakness?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "always", text: "Almost always", value: 4 }
        ]
      },
      {
        id: "pale-skin",
        question: "Have you noticed pale skin, nails, or inner eyelids?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "slight", text: "Slightly pale", value: 2 },
          { id: "noticeable", text: "Noticeably pale", value: 3 },
          { id: "very", text: "Very pale", value: 4 }
        ]
      },
      {
        id: "shortness-breath",
        question: "Do you experience shortness of breath during normal activities?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "stairs", text: "Only when climbing stairs", value: 1 },
          { id: "walking", text: "When walking normally", value: 3 },
          { id: "rest", text: "Even at rest", value: 4 }
        ]
      },
      {
        id: "cold-hands",
        question: "How often do you have cold hands and feet?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "winter", text: "Only in cold weather", value: 1 },
          { id: "often", text: "Often, regardless of weather", value: 3 },
          { id: "always", text: "Almost always", value: 4 }
        ]
      },
      {
        id: "cravings",
        question: "Do you have unusual cravings for ice, starch, or cornstarch?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "occasionally", text: "Occasionally", value: 2 },
          { id: "frequently", text: "Frequently", value: 4 }
        ]
      },
      {
        id: "heavy-periods",
        question: "Do you experience heavy menstrual periods? (Skip if not applicable)",
        type: "single",
        options: [
          { id: "na", text: "Not applicable", value: 0 },
          { id: "normal", text: "Normal periods", value: 0 },
          { id: "heavy", text: "Heavy periods", value: 3 },
          { id: "very-heavy", text: "Very heavy periods", value: 4 }
        ]
      },
      {
        id: "restless-legs",
        question: "Do you experience restless leg syndrome or leg cramps?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 }
        ]
      },
      {
        id: "heart-rate",
        question: "Have you noticed a rapid or irregular heartbeat?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "exercise", text: "Only during exercise", value: 1 },
          { id: "sometimes", text: "Sometimes at rest", value: 3 },
          { id: "often", text: "Often at rest", value: 4 }
        ]
      }
    ]
  },
  {
    id: "diabetes-checker",
    title: "Diabetes Symptom Checker",
    description: "Evaluate early signs and symptoms that may indicate diabetes or prediabetes condition.",
    category: "General",
    difficulty: "Easy",
    estimatedTime: "4-6 min",
    icon: "activity",
    questions: [
      {
        id: "excessive-thirst",
        question: "How often do you experience excessive thirst?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "always", text: "Almost constantly", value: 4 }
        ]
      },
      {
        id: "frequent-urination",
        question: "Do you urinate more frequently than usual?",
        type: "single",
        options: [
          { id: "no", text: "No change", value: 0 },
          { id: "slight", text: "Slightly more", value: 1 },
          { id: "noticeable", text: "Noticeably more", value: 3 },
          { id: "very", text: "Much more frequently", value: 4 }
        ]
      },
      {
        id: "unexplained-weight",
        question: "Have you experienced unexplained weight loss recently?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "slight", text: "1-5 pounds", value: 2 },
          { id: "moderate", text: "6-15 pounds", value: 3 },
          { id: "significant", text: "More than 15 pounds", value: 4 }
        ]
      },
      {
        id: "fatigue",
        question: "How often do you feel unusually tired or fatigued?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "always", text: "Almost always", value: 4 }
        ]
      },
      {
        id: "blurred-vision",
        question: "Do you experience blurred vision?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "occasionally", text: "Occasionally", value: 2 },
          { id: "frequently", text: "Frequently", value: 3 },
          { id: "constant", text: "Almost constantly", value: 4 }
        ]
      },
      {
        id: "slow-healing",
        question: "Do cuts and wounds heal slower than usual?",
        type: "single",
        options: [
          { id: "no", text: "No, normal healing", value: 0 },
          { id: "slightly", text: "Slightly slower", value: 2 },
          { id: "much", text: "Much slower", value: 4 }
        ]
      },
      {
        id: "numbness",
        question: "Do you experience numbness or tingling in hands or feet?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 3 },
          { id: "often", text: "Often", value: 4 }
        ]
      },
      {
        id: "family-history",
        question: "Do you have a family history of diabetes?",
        type: "single",
        options: [
          { id: "no", text: "No family history", value: 0 },
          { id: "distant", text: "Distant relatives", value: 1 },
          { id: "close", text: "Close relatives (parents, siblings)", value: 3 }
        ]
      }
    ]
  },
  {
    id: "pcos-checker",
    title: "PCOS Symptom Checker",
    description: "Assess symptoms related to Polycystic Ovary Syndrome through targeted questions about reproductive health.",
    category: "Women's Health",
    difficulty: "Medium",
    estimatedTime: "5-7 min",
    icon: "heart",
    questions: [
      {
        id: "irregular-periods",
        question: "How would you describe your menstrual cycle?",
        type: "single",
        options: [
          { id: "regular", text: "Regular (21-35 days)", value: 0 },
          { id: "slightly-irregular", text: "Slightly irregular (35-40 days)", value: 2 },
          { id: "very-irregular", text: "Very irregular (40+ days)", value: 3 },
          { id: "absent", text: "Absent periods for 3+ months", value: 4 }
        ]
      },
      {
        id: "excess-hair",
        question: "Do you experience excess hair growth on face, chest, or back?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild excess hair", value: 2 },
          { id: "moderate", text: "Moderate excess hair", value: 3 },
          { id: "severe", text: "Significant excess hair", value: 4 }
        ]
      },
      {
        id: "weight-gain",
        question: "Have you experienced unexplained weight gain or difficulty losing weight?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "slight", text: "Slight weight gain", value: 1 },
          { id: "moderate", text: "Moderate weight gain", value: 3 },
          { id: "significant", text: "Significant weight gain", value: 4 }
        ]
      },
      {
        id: "acne",
        question: "Do you have persistent acne, especially around jawline and chin?",
        type: "single",
        options: [
          { id: "no", text: "No acne", value: 0 },
          { id: "mild", text: "Mild acne", value: 1 },
          { id: "moderate", text: "Moderate acne", value: 3 },
          { id: "severe", text: "Severe acne", value: 4 }
        ]
      },
      {
        id: "hair-loss",
        question: "Are you experiencing male-pattern hair loss or thinning?",
        type: "single",
        options: [
          { id: "no", text: "No hair loss", value: 0 },
          { id: "mild", text: "Mild thinning", value: 2 },
          { id: "moderate", text: "Moderate hair loss", value: 3 },
          { id: "severe", text: "Significant hair loss", value: 4 }
        ]
      },
      {
        id: "skin-changes",
        question: "Do you have dark patches of skin (acanthosis nigricans)?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild darkening", value: 2 },
          { id: "noticeable", text: "Noticeable dark patches", value: 3 }
        ]
      },
      {
        id: "fertility-issues",
        question: "Have you experienced difficulty getting pregnant?",
        type: "single",
        options: [
          { id: "na", text: "Not trying to conceive", value: 0 },
          { id: "no", text: "No issues", value: 0 },
          { id: "some", text: "Some difficulty", value: 3 },
          { id: "significant", text: "Significant difficulty", value: 4 }
        ]
      },
      {
        id: "mood-changes",
        question: "Do you experience mood swings, anxiety, or depression?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild mood changes", value: 1 },
          { id: "moderate", text: "Moderate mood swings", value: 2 },
          { id: "severe", text: "Severe mood changes", value: 3 }
        ]
      }
    ]
  },
  {
    id: "asthma-checker",
    title: "Asthma Symptom Checker",
    description: "Evaluate respiratory symptoms that may indicate asthma or breathing difficulties.",
    category: "Respiratory",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "activity",
    questions: [
      {
        id: "wheezing",
        question: "How often do you experience wheezing or whistling sounds when breathing?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "daily", text: "Daily", value: 4 }
        ]
      },
      {
        id: "shortness-breath",
        question: "Do you experience shortness of breath?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "exercise", text: "Only during intense exercise", value: 1 },
          { id: "mild-activity", text: "During mild physical activity", value: 3 },
          { id: "rest", text: "Even at rest", value: 4 }
        ]
      },
      {
        id: "chest-tightness",
        question: "How often do you feel chest tightness or pressure?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "daily", text: "Daily", value: 4 }
        ]
      },
      {
        id: "coughing",
        question: "Do you have a persistent cough, especially at night or early morning?",
        type: "single",
        options: [
          { id: "no", text: "No persistent cough", value: 0 },
          { id: "occasional", text: "Occasional cough", value: 1 },
          { id: "frequent", text: "Frequent cough", value: 3 },
          { id: "constant", text: "Almost constant cough", value: 4 }
        ]
      },
      {
        id: "triggers",
        question: "Do certain triggers worsen your breathing (allergens, smoke, cold air)?",
        type: "single",
        options: [
          { id: "no", text: "No specific triggers", value: 0 },
          { id: "few", text: "A few specific triggers", value: 2 },
          { id: "many", text: "Many different triggers", value: 3 },
          { id: "most", text: "Most environmental factors", value: 4 }
        ]
      },
      {
        id: "sleep-disruption",
        question: "Do breathing problems wake you up at night?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely (less than once a month)", value: 1 },
          { id: "sometimes", text: "Sometimes (1-3 times a month)", value: 2 },
          { id: "often", text: "Often (weekly)", value: 3 },
          { id: "nightly", text: "Almost nightly", value: 4 }
        ]
      },
      {
        id: "family-history",
        question: "Do you have a family history of asthma or allergies?",
        type: "single",
        options: [
          { id: "no", text: "No family history", value: 0 },
          { id: "distant", text: "Distant relatives", value: 1 },
          { id: "close", text: "Close relatives (parents, siblings)", value: 2 }
        ]
      },
      {
        id: "activity-limitation",
        question: "Do breathing problems limit your daily activities?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 3 },
          { id: "often", text: "Often", value: 4 }
        ]
      }
    ]
  },
  {
    id: "depression-checker",
    title: "Depression Symptom Checker",
    description: "Assess symptoms related to depression and mood disorders through validated screening questions.",
    category: "Mental Health",
    difficulty: "Medium",
    estimatedTime: "5-7 min",
    icon: "brain",
    questions: [
      {
        id: "mood",
        question: "Over the past 2 weeks, how often have you felt down, depressed, or hopeless?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "interest",
        question: "How often have you had little interest or pleasure in doing things?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "sleep",
        question: "How often have you had trouble falling asleep, staying asleep, or sleeping too much?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "energy",
        question: "How often have you felt tired or had little energy?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "appetite",
        question: "How often have you had poor appetite or overeating?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "self-worth",
        question: "How often have you felt bad about yourself or that you're a failure?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "concentration",
        question: "How often have you had trouble concentrating on things?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "psychomotor",
        question: "How often have you moved or spoken slowly, or been fidgety/restless?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      }
    ]
  },
  {
    id: "anxiety-checker",
    title: "Anxiety Symptom Checker",
    description: "Evaluate anxiety symptoms and their impact on daily life through comprehensive screening questions.",
    category: "Mental Health",
    difficulty: "Medium",
    estimatedTime: "4-6 min",
    icon: "brain",
    questions: [
      {
        id: "nervousness",
        question: "Over the past 2 weeks, how often have you felt nervous, anxious, or on edge?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "worry-control",
        question: "How often have you not been able to stop or control worrying?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "excessive-worry",
        question: "How often have you worried too much about different things?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "trouble-relaxing",
        question: "How often have you had trouble relaxing?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "restlessness",
        question: "How often have you been so restless that it's hard to sit still?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "irritability",
        question: "How often have you become easily annoyed or irritable?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "fear",
        question: "How often have you felt afraid as if something awful might happen?",
        type: "single",
        options: [
          { id: "not-at-all", text: "Not at all", value: 0 },
          { id: "several-days", text: "Several days", value: 1 },
          { id: "more-than-half", text: "More than half the days", value: 2 },
          { id: "nearly-every", text: "Nearly every day", value: 3 }
        ]
      },
      {
        id: "physical-symptoms",
        question: "Do you experience physical symptoms like rapid heartbeat, sweating, or trembling?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 }
        ]
      }
    ]
  },
  {
    id: "ibs-checker",
    title: "IBS Symptom Checker",
    description: "Assess symptoms related to Irritable Bowel Syndrome through digestive health questions.",
    category: "Digestive",
    difficulty: "Medium",
    estimatedTime: "5-7 min",
    icon: "activity",
    questions: [
      {
        id: "abdominal-pain",
        question: "How often do you experience abdominal pain or cramping?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely (less than once a month)", value: 1 },
          { id: "sometimes", text: "Sometimes (1-3 times a month)", value: 2 },
          { id: "often", text: "Often (weekly)", value: 3 },
          { id: "daily", text: "Daily or almost daily", value: 4 }
        ]
      },
      {
        id: "bowel-habits",
        question: "How would you describe changes in your bowel habits?",
        type: "single",
        options: [
          { id: "no-change", text: "No significant changes", value: 0 },
          { id: "occasional", text: "Occasional changes", value: 1 },
          { id: "frequent", text: "Frequent changes", value: 3 },
          { id: "constant", text: "Constant irregularity", value: 4 }
        ]
      },
      {
        id: "stool-consistency",
        question: "Do you experience changes in stool consistency (diarrhea/constipation)?",
        type: "single",
        options: [
          { id: "normal", text: "Generally normal", value: 0 },
          { id: "occasional", text: "Occasional changes", value: 1 },
          { id: "alternating", text: "Alternating between loose and hard", value: 3 },
          { id: "predominantly", text: "Predominantly loose or hard", value: 3 }
        ]
      },
      {
        id: "bloating",
        question: "How often do you experience bloating or abdominal distension?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "daily", text: "Daily", value: 4 }
        ]
      },
      {
        id: "gas",
        question: "Do you experience excessive gas or flatulence?",
        type: "single",
        options: [
          { id: "normal", text: "Normal amount", value: 0 },
          { id: "slightly", text: "Slightly more than normal", value: 1 },
          { id: "noticeably", text: "Noticeably more", value: 2 },
          { id: "excessive", text: "Excessive", value: 3 }
        ]
      },
      {
        id: "mucus",
        question: "Do you notice mucus in your stool?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 }
        ]
      },
      {
        id: "stress-relation",
        question: "Do symptoms worsen during times of stress?",
        type: "single",
        options: [
          { id: "no-relation", text: "No apparent relation", value: 0 },
          { id: "slight", text: "Slight connection", value: 1 },
          { id: "noticeable", text: "Noticeable worsening", value: 3 },
          { id: "strong", text: "Strong correlation", value: 4 }
        ]
      },
      {
        id: "food-triggers",
        question: "Do certain foods trigger your symptoms?",
        type: "single",
        options: [
          { id: "no", text: "No specific triggers", value: 0 },
          { id: "few", text: "A few specific foods", value: 2 },
          { id: "many", text: "Many different foods", value: 3 },
          { id: "most", text: "Most foods cause issues", value: 4 }
        ]
      }
    ]
  },
  {
    id: "covid-checker",
    title: "COVID-19 Symptom Checker",
    description: "Screen for COVID-19 symptoms and potential exposure risk factors.",
    category: "Respiratory",
    difficulty: "Easy",
    estimatedTime: "3-4 min",
    icon: "shield",
    questions: [
      {
        id: "fever",
        question: "Do you currently have a fever (temperature >100.4°F/38°C)?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "low-grade", text: "Low-grade fever (100.4-101°F)", value: 2 },
          { id: "moderate", text: "Moderate fever (101-103°F)", value: 3 },
          { id: "high", text: "High fever (>103°F)", value: 4 }
        ]
      },
      {
        id: "cough",
        question: "Do you have a new or worsening cough?",
        type: "single",
        options: [
          { id: "no", text: "No cough", value: 0 },
          { id: "mild", text: "Mild, occasional cough", value: 1 },
          { id: "persistent", text: "Persistent cough", value: 3 },
          { id: "severe", text: "Severe, continuous cough", value: 4 }
        ]
      },
      {
        id: "shortness-breath",
        question: "Are you experiencing shortness of breath or difficulty breathing?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild shortness of breath", value: 2 },
          { id: "moderate", text: "Moderate difficulty breathing", value: 3 },
          { id: "severe", text: "Severe breathing difficulties", value: 4 }
        ]
      },
      {
        id: "taste-smell",
        question: "Have you lost your sense of taste or smell?",
        type: "single",
        options: [
          { id: "no", text: "No change", value: 0 },
          { id: "partial", text: "Partial loss", value: 3 },
          { id: "complete", text: "Complete loss", value: 4 }
        ]
      },
      {
        id: "fatigue",
        question: "Are you experiencing unusual fatigue or tiredness?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild fatigue", value: 1 },
          { id: "moderate", text: "Moderate fatigue", value: 2 },
          { id: "severe", text: "Severe exhaustion", value: 3 }
        ]
      },
      {
        id: "body-aches",
        question: "Do you have body aches, muscle pain, or headache?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild aches", value: 1 },
          { id: "moderate", text: "Moderate aches", value: 2 },
          { id: "severe", text: "Severe aches", value: 3 }
        ]
      },
      {
        id: "sore-throat",
        question: "Do you have a sore throat?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild sore throat", value: 1 },
          { id: "moderate", text: "Moderate sore throat", value: 2 },
          { id: "severe", text: "Severe sore throat", value: 3 }
        ]
      },
      {
        id: "exposure",
        question: "Have you been in close contact with someone who tested positive for COVID-19?",
        type: "single",
        options: [
          { id: "no", text: "No known exposure", value: 0 },
          { id: "possible", text: "Possible exposure", value: 2 },
          { id: "likely", text: "Likely exposure", value: 3 },
          { id: "confirmed", text: "Confirmed close contact", value: 4 }
        ]
      }
    ]
  },
  {
    id: "food-poisoning-checker",
    title: "Food Poisoning Symptom Checker",
    description: "Evaluate symptoms that may indicate food poisoning or foodborne illness.",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "warning",
    questions: [
      {
        id: "nausea-vomiting",
        question: "Are you experiencing nausea or vomiting?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild-nausea", text: "Mild nausea only", value: 1 },
          { id: "vomiting-once", text: "Vomited once or twice", value: 3 },
          { id: "frequent-vomiting", text: "Frequent vomiting", value: 4 }
        ]
      },
      {
        id: "diarrhea",
        question: "Do you have diarrhea?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild, loose stools", value: 2 },
          { id: "moderate", text: "Moderate diarrhea", value: 3 },
          { id: "severe", text: "Severe, watery diarrhea", value: 4 }
        ]
      },
      {
        id: "abdominal-pain",
        question: "Are you experiencing abdominal pain or cramping?",
        type: "single",
        options: [
          { id: "no", text: "No pain", value: 0 },
          { id: "mild", text: "Mild discomfort", value: 1 },
          { id: "moderate", text: "Moderate pain", value: 2 },
          { id: "severe", text: "Severe cramping", value: 3 }
        ]
      },
      {
        id: "fever",
        question: "Do you have a fever?",
        type: "single",
        options: [
          { id: "no", text: "No fever", value: 0 },
          { id: "low", text: "Low-grade fever", value: 2 },
          { id: "moderate", text: "Moderate fever", value: 3 },
          { id: "high", text: "High fever", value: 4 }
        ]
      },
      {
        id: "onset-time",
        question: "When did symptoms start after eating?",
        type: "single",
        options: [
          { id: "na", text: "Not sure/not food related", value: 0 },
          { id: "within-hour", text: "Within 1 hour", value: 3 },
          { id: "1-6-hours", text: "1-6 hours", value: 4 },
          { id: "6-24-hours", text: "6-24 hours", value: 3 },
          { id: "1-3-days", text: "1-3 days", value: 2 }
        ]
      },
      {
        id: "dehydration",
        question: "Are you showing signs of dehydration (dizziness, dry mouth, reduced urination)?",
        type: "single",
        options: [
          { id: "no", text: "No signs", value: 0 },
          { id: "mild", text: "Mild signs", value: 2 },
          { id: "moderate", text: "Moderate signs", value: 3 },
          { id: "severe", text: "Severe dehydration", value: 4 }
        ]
      },
      {
        id: "others-affected",
        question: "Did others who ate the same food also get sick?",
        type: "single",
        options: [
          { id: "unknown", text: "Don't know", value: 0 },
          { id: "no", text: "No, just me", value: 1 },
          { id: "yes", text: "Yes, others are sick too", value: 3 }
        ]
      },
      {
        id: "blood-stool",
        question: "Have you noticed blood in your stool or vomit?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "trace", text: "Trace amounts", value: 3 },
          { id: "noticeable", text: "Noticeable blood", value: 4 }
        ]
      }
    ]
  },
  {
    id: "gastroenteritis-checker",
    title: "Gastroenteritis Symptom Checker",
    description: "Assess symptoms of stomach flu and gastroenteritis.",
    category: "Digestive",
    difficulty: "Easy",
    estimatedTime: "4-5 min",
    icon: "activity",
    questions: [
      {
        id: "diarrhea",
        question: "How severe is your diarrhea?",
        type: "single",
        options: [
          { id: "none", text: "No diarrhea", value: 0 },
          { id: "mild", text: "Mild, few loose stools", value: 2 },
          { id: "moderate", text: "Moderate, frequent loose stools", value: 3 },
          { id: "severe", text: "Severe, very frequent watery stools", value: 4 }
        ]
      },
      {
        id: "vomiting",
        question: "Are you experiencing vomiting?",
        type: "single",
        options: [
          { id: "no", text: "No vomiting", value: 0 },
          { id: "occasional", text: "Occasional vomiting", value: 2 },
          { id: "frequent", text: "Frequent vomiting", value: 3 },
          { id: "continuous", text: "Almost continuous vomiting", value: 4 }
        ]
      },
      {
        id: "abdominal-cramps",
        question: "How severe are your abdominal cramps?",
        type: "single",
        options: [
          { id: "none", text: "No cramps", value: 0 },
          { id: "mild", text: "Mild cramping", value: 1 },
          { id: "moderate", text: "Moderate cramping", value: 2 },
          { id: "severe", text: "Severe, intense cramps", value: 3 }
        ]
      },
      {
        id: "fever",
        question: "Do you have a fever?",
        type: "single",
        options: [
          { id: "no", text: "No fever", value: 0 },
          { id: "low", text: "Low-grade fever", value: 1 },
          { id: "moderate", text: "Moderate fever", value: 2 },
          { id: "high", text: "High fever", value: 3 }
        ]
      },
      {
        id: "dehydration",
        question: "Are you experiencing signs of dehydration?",
        type: "single",
        options: [
          { id: "no", text: "No signs", value: 0 },
          { id: "mild", text: "Mild thirst, slightly dry mouth", value: 1 },
          { id: "moderate", text: "Increased thirst, dry mouth", value: 3 },
          { id: "severe", text: "Severe thirst, dizziness, little urination", value: 4 }
        ]
      },
      {
        id: "appetite",
        question: "How is your appetite?",
        type: "single",
        options: [
          { id: "normal", text: "Normal appetite", value: 0 },
          { id: "reduced", text: "Reduced appetite", value: 1 },
          { id: "poor", text: "Poor appetite", value: 2 },
          { id: "none", text: "No appetite at all", value: 3 }
        ]
      },
      {
        id: "duration",
        question: "How long have you had symptoms?",
        type: "single",
        options: [
          { id: "hours", text: "Less than 24 hours", value: 1 },
          { id: "1-2-days", text: "1-2 days", value: 2 },
          { id: "3-5-days", text: "3-5 days", value: 3 },
          { id: "week-plus", text: "More than a week", value: 4 }
        ]
      },
      {
        id: "others-sick",
        question: "Are others in your household or close contacts sick with similar symptoms?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "one", text: "One other person", value: 2 },
          { id: "several", text: "Several people", value: 3 }
        ]
      }
    ]
  },
  {
    id: "heart-disease-checker",
    title: "Heart Disease Symptom Checker",
    description: "Assess symptoms and risk factors related to heart disease and cardiovascular health.",
    category: "Heart Health",
    difficulty: "Medium",
    estimatedTime: "6-8 min",
    icon: "heart",
    questions: [
      {
        id: "chest-pain",
        question: "Do you experience chest pain or discomfort?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "frequently", text: "Very frequently", value: 4 }
        ]
      },
      {
        id: "shortness-breath",
        question: "Do you experience shortness of breath?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "exercise", text: "Only during intense exercise", value: 1 },
          { id: "stairs", text: "When climbing stairs", value: 2 },
          { id: "walking", text: "When walking normally", value: 3 },
          { id: "rest", text: "Even at rest", value: 4 }
        ]
      },
      {
        id: "palpitations",
        question: "Do you experience heart palpitations or irregular heartbeat?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 }
        ]
      },
      {
        id: "fatigue",
        question: "Do you experience unusual fatigue or weakness?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "occasionally", text: "Occasionally", value: 1 },
          { id: "frequently", text: "Frequently", value: 2 },
          { id: "constantly", text: "Almost constantly", value: 3 }
        ]
      },
      {
        id: "swelling",
        question: "Do you have swelling in your legs, ankles, or feet?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "occasionally", text: "Occasionally", value: 2 },
          { id: "frequently", text: "Frequently", value: 3 },
          { id: "constantly", text: "Constant swelling", value: 4 }
        ]
      },
      {
        id: "family-history",
        question: "Do you have a family history of heart disease?",
        type: "single",
        options: [
          { id: "no", text: "No family history", value: 0 },
          { id: "distant", text: "Distant relatives", value: 1 },
          { id: "close", text: "Parents or siblings", value: 3 }
        ]
      },
      {
        id: "smoking",
        question: "Do you smoke or have you smoked in the past?",
        type: "single",
        options: [
          { id: "never", text: "Never smoked", value: 0 },
          { id: "former", text: "Former smoker (quit >5 years ago)", value: 1 },
          { id: "recent", text: "Recent former smoker (<5 years)", value: 2 },
          { id: "current", text: "Current smoker", value: 4 }
        ]
      },
      {
        id: "cholesterol",
        question: "Do you have high cholesterol?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "borderline", text: "Borderline high", value: 2 },
          { id: "high", text: "High cholesterol", value: 3 },
          { id: "unknown", text: "Don't know", value: 1 }
        ]
      }
    ]
  },
  {
    id: "heart-attack-checker",
    title: "Heart Attack Symptom Checker",
    description: "Emergency assessment for potential heart attack symptoms - seek immediate medical attention if concerned.",
    category: "Heart Health",
    difficulty: "Advanced",
    estimatedTime: "2-3 min",
    icon: "warning",
    questions: [
      {
        id: "chest-pressure",
        question: "Are you experiencing crushing chest pain or pressure?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild discomfort", value: 2 },
          { id: "moderate", text: "Moderate pressure", value: 3 },
          { id: "severe", text: "Severe crushing pain", value: 4 }
        ]
      },
      {
        id: "pain-radiation",
        question: "Does the pain spread to your arm, neck, jaw, or back?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "arm", text: "To left arm", value: 3 },
          { id: "multiple", text: "To multiple areas", value: 4 }
        ]
      },
      {
        id: "shortness-breath",
        question: "Are you having severe shortness of breath?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild", value: 1 },
          { id: "moderate", text: "Moderate", value: 2 },
          { id: "severe", text: "Severe", value: 4 }
        ]
      },
      {
        id: "sweating",
        question: "Are you sweating profusely or feeling clammy?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild sweating", value: 2 },
          { id: "profuse", text: "Profuse sweating", value: 3 }
        ]
      },
      {
        id: "nausea",
        question: "Are you experiencing nausea or vomiting?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "nausea", text: "Nausea only", value: 2 },
          { id: "vomiting", text: "Vomiting", value: 3 }
        ]
      },
      {
        id: "lightheadedness",
        question: "Are you feeling lightheaded or dizzy?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild dizziness", value: 1 },
          { id: "severe", text: "Severe lightheadedness", value: 3 }
        ]
      },
      {
        id: "symptom-onset",
        question: "How quickly did these symptoms come on?",
        type: "single",
        options: [
          { id: "gradual", text: "Gradually over hours/days", value: 1 },
          { id: "sudden", text: "Suddenly", value: 3 },
          { id: "rapid", text: "Very rapidly", value: 4 }
        ]
      }
    ]
  },
  {
    id: "arthritis-checker",
    title: "Arthritis Symptom Checker",
    description: "Assess joint pain and symptoms that may indicate arthritis or joint disorders.",
    category: "General",
    difficulty: "Medium",
    estimatedTime: "5-6 min",
    icon: "activity",
    questions: [
      {
        id: "joint-pain",
        question: "How severe is your joint pain?",
        type: "single",
        options: [
          { id: "none", text: "No joint pain", value: 0 },
          { id: "mild", text: "Mild pain", value: 1 },
          { id: "moderate", text: "Moderate pain", value: 2 },
          { id: "severe", text: "Severe pain", value: 3 }
        ]
      },
      {
        id: "morning-stiffness",
        question: "Do you experience morning stiffness in your joints?",
        type: "single",
        options: [
          { id: "no", text: "No stiffness", value: 0 },
          { id: "brief", text: "Brief stiffness (<30 min)", value: 1 },
          { id: "moderate", text: "Moderate stiffness (30-60 min)", value: 3 },
          { id: "prolonged", text: "Prolonged stiffness (>1 hour)", value: 4 }
        ]
      },
      {
        id: "swelling",
        question: "Do you have swelling in your joints?",
        type: "single",
        options: [
          { id: "no", text: "No swelling", value: 0 },
          { id: "mild", text: "Mild swelling", value: 2 },
          { id: "moderate", text: "Moderate swelling", value: 3 },
          { id: "severe", text: "Severe swelling", value: 4 }
        ]
      },
      {
        id: "affected-joints",
        question: "Which joints are affected?",
        type: "single",
        options: [
          { id: "none", text: "No specific joints", value: 0 },
          { id: "one", text: "One joint", value: 1 },
          { id: "few", text: "A few joints", value: 2 },
          { id: "many", text: "Many joints", value: 3 }
        ]
      },
      {
        id: "symmetry",
        question: "Are symptoms symmetrical (same joints on both sides)?",
        type: "single",
        options: [
          { id: "na", text: "Not applicable", value: 0 },
          { id: "no", text: "No, different sides", value: 1 },
          { id: "yes", text: "Yes, symmetrical", value: 3 }
        ]
      },
      {
        id: "activity-impact",
        question: "How do symptoms affect your daily activities?",
        type: "single",
        options: [
          { id: "none", text: "No impact", value: 0 },
          { id: "mild", text: "Mild limitation", value: 1 },
          { id: "moderate", text: "Moderate limitation", value: 2 },
          { id: "severe", text: "Severe limitation", value: 3 }
        ]
      },
      {
        id: "weather-sensitivity",
        question: "Do weather changes affect your symptoms?",
        type: "single",
        options: [
          { id: "no", text: "No effect", value: 0 },
          { id: "slight", text: "Slight effect", value: 1 },
          { id: "noticeable", text: "Noticeable effect", value: 2 },
          { id: "significant", text: "Significant effect", value: 3 }
        ]
      },
      {
        id: "family-history",
        question: "Do you have a family history of arthritis?",
        type: "single",
        options: [
          { id: "no", text: "No family history", value: 0 },
          { id: "distant", text: "Distant relatives", value: 1 },
          { id: "close", text: "Close relatives", value: 2 }
        ]
      }
    ]
  },
  {
    id: "dizziness-checker",
    title: "Dizziness Symptom Checker",
    description: "Evaluate dizziness, vertigo, and balance problems to identify potential causes.",
    category: "General",
    difficulty: "Medium",
    estimatedTime: "4-6 min",
    icon: "activity",
    questions: [
      {
        id: "dizziness-type",
        question: "What type of dizziness do you experience?",
        type: "single",
        options: [
          { id: "none", text: "No dizziness", value: 0 },
          { id: "lightheaded", text: "Lightheadedness/faintness", value: 2 },
          { id: "spinning", text: "Spinning sensation (vertigo)", value: 3 },
          { id: "unsteady", text: "Unsteadiness/imbalance", value: 2 }
        ]
      },
      {
        id: "frequency",
        question: "How often do you experience dizziness?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "rarely", text: "Rarely", value: 1 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "daily", text: "Daily", value: 4 }
        ]
      },
      {
        id: "triggers",
        question: "What triggers your dizziness?",
        type: "single",
        options: [
          { id: "none", text: "No specific triggers", value: 0 },
          { id: "position", text: "Changing positions", value: 3 },
          { id: "head-movement", text: "Head movements", value: 3 },
          { id: "standing", text: "Standing up", value: 2 }
        ]
      },
      {
        id: "duration",
        question: "How long do episodes typically last?",
        type: "single",
        options: [
          { id: "seconds", text: "Seconds", value: 2 },
          { id: "minutes", text: "Minutes", value: 3 },
          { id: "hours", text: "Hours", value: 3 },
          { id: "days", text: "Days", value: 4 }
        ]
      },
      {
        id: "hearing-symptoms",
        question: "Do you have hearing problems or ear symptoms?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "ringing", text: "Ringing in ears", value: 2 },
          { id: "hearing-loss", text: "Hearing loss", value: 3 },
          { id: "fullness", text: "Ear fullness", value: 2 }
        ]
      },
      {
        id: "nausea",
        question: "Do you experience nausea with dizziness?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "usually", text: "Usually", value: 3 },
          { id: "always", text: "Always", value: 3 }
        ]
      },
      {
        id: "headache",
        question: "Do you get headaches with dizziness?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "sometimes", text: "Sometimes", value: 1 },
          { id: "often", text: "Often", value: 2 },
          { id: "always", text: "Always", value: 3 }
        ]
      },
      {
        id: "medications",
        question: "Are you taking any medications that might cause dizziness?",
        type: "single",
        options: [
          { id: "no", text: "No medications", value: 0 },
          { id: "unsure", text: "Not sure", value: 1 },
          { id: "possible", text: "Possibly", value: 2 },
          { id: "yes", text: "Yes", value: 3 }
        ]
      }
    ]
  },
  {
    id: "uti-checker",
    title: "UTI Symptom Checker",
    description: "Assess symptoms that may indicate a urinary tract infection.",
    category: "General",
    difficulty: "Easy",
    estimatedTime: "3-5 min",
    icon: "activity",
    questions: [
      {
        id: "burning-urination",
        question: "Do you experience burning or pain during urination?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild burning", value: 2 },
          { id: "moderate", text: "Moderate burning", value: 3 },
          { id: "severe", text: "Severe burning", value: 4 }
        ]
      },
      {
        id: "frequent-urination",
        question: "Are you urinating more frequently than usual?",
        type: "single",
        options: [
          { id: "no", text: "No change", value: 0 },
          { id: "slightly", text: "Slightly more", value: 1 },
          { id: "noticeably", text: "Noticeably more", value: 3 },
          { id: "very", text: "Much more frequently", value: 4 }
        ]
      },
      {
        id: "urgency",
        question: "Do you feel a strong, sudden urge to urinate?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "sometimes", text: "Sometimes", value: 2 },
          { id: "often", text: "Often", value: 3 },
          { id: "constantly", text: "Almost constantly", value: 4 }
        ]
      },
      {
        id: "urine-appearance",
        question: "How does your urine look?",
        type: "single",
        options: [
          { id: "normal", text: "Normal (clear/light yellow)", value: 0 },
          { id: "cloudy", text: "Cloudy", value: 2 },
          { id: "dark", text: "Dark or strong-smelling", value: 3 },
          { id: "blood", text: "Pink/red (blood)", value: 4 }
        ]
      },
      {
        id: "pelvic-pain",
        question: "Do you have pelvic pain or pressure?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild discomfort", value: 1 },
          { id: "moderate", text: "Moderate pain", value: 2 },
          { id: "severe", text: "Severe pain", value: 3 }
        ]
      },
      {
        id: "fever",
        question: "Do you have a fever or chills?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "low-fever", text: "Low-grade fever", value: 2 },
          { id: "high-fever", text: "High fever", value: 4 },
          { id: "chills", text: "Chills without fever", value: 2 }
        ]
      },
      {
        id: "back-pain",
        question: "Do you have lower back or side pain?",
        type: "single",
        options: [
          { id: "no", text: "No", value: 0 },
          { id: "mild", text: "Mild pain", value: 1 },
          { id: "moderate", text: "Moderate pain", value: 3 },
          { id: "severe", text: "Severe pain", value: 4 }
        ]
      },
      {
        id: "previous-utis",
        question: "Have you had UTIs before?",
        type: "single",
        options: [
          { id: "never", text: "Never", value: 0 },
          { id: "once", text: "Once before", value: 1 },
          { id: "few", text: "A few times", value: 2 },
          { id: "frequent", text: "Frequently", value: 3 }
        ]
      }
    ]
  }
];

export const categories = [
  "All",
  "Heart Health",
  "Mental Health", 
  "Respiratory",
  "Digestive",
  "Women's Health",
  "General"
];