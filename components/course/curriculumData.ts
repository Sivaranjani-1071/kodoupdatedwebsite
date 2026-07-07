import {
  Code2,
  BarChart3,
  ClipboardList,
  GitBranch,
  BrainCircuit,
  Database,
  Mic,
  type LucideIcon,
} from "lucide-react";

export interface CurriculumIntroChunk {
  text: string;
  bold: boolean;
}

export interface CurriculumModule {
  id: string;
  title: string;
  duration: string;
  icon: LucideIcon;
  intro: CurriculumIntroChunk[];
  points: string[];
  tags: string[];
}

const curriculumData: CurriculumModule[] = [
  {
    id: "programming-foundations",
    title: "Programming Foundations",
    duration: "8 weeks",
    icon: Code2,
    intro: [
      { text: "Establish a strong ", bold: false },
      { text: "Python programming foundation", bold: true },
      { text: " for your ", bold: false },
      { text: "data analytics career", bold: true },
      { text: " by mastering ", bold: false },
      { text: "essential coding skills", bold: true },
      { text: " and ", bold: false },
      { text: "core programming concepts", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Gain proficiency in Python syntax, data structures, and control flow statements.",
      "Write reusable code using functions, modules, and file-handling techniques.",
      "Confidently solve programming problems and apply Python library methods.",
      "Handle errors and exceptions effectively in your programs.",
      "Understand object-oriented programming (OOP) and make API calls for data handling.",
      "Grasp basic Statistics and Probability for data interpretation.",
    ],
    tags: [
      "Python Foundations",
      "Data Structures",
      "Control Flow",
      "Functions",
      "Modules",
      "File Handling",
      "Libraries",
      "Error Handling",
      "Object Oriented Programming",
      "API invocation",
      "JSON",
      "Statistics",
      "Probability",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics and Data Visualization",
    duration: "16 weeks",
    icon: BarChart3,
    intro: [
      { text: "Master ", bold: false },
      { text: "data analytics and visualization", bold: true },
      { text: " techniques to turn raw data into ", bold: false },
      { text: "actionable business insights", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Clean, transform, and analyze data using SQL and Excel.",
      "Build interactive dashboards using Power BI and Tableau.",
      "Apply statistical methods to uncover trends and patterns.",
      "Communicate insights effectively through data storytelling.",
      "Work with real-world datasets across multiple industries.",
    ],
    tags: [
      "SQL",
      "Excel",
      "Power BI",
      "Tableau",
      "Data Cleaning",
      "Data Storytelling",
      "Dashboards",
      "EDA",
    ],
  },
  {
    id: "industry-projects",
    title: "Industry Projects and Case Studies",
    duration: "8 weeks",
    icon: ClipboardList,
    intro: [
      { text: "Apply your skills to ", bold: false },
      { text: "real industry projects", bold: true },
      { text: " and ", bold: false },
      { text: "case studies", bold: true },
      { text: " curated from top product companies.", bold: false },
    ],
    points: [
      "Work on end-to-end projects mirroring real workplace problems.",
      "Collaborate in teams to simulate a product-based company environment.",
      "Build a portfolio that stands out to recruiters.",
      "Receive mentor feedback on code quality and approach.",
    ],
    tags: ["Capstone Projects", "Case Studies", "Portfolio", "Team Collaboration"],
  },
  {
    id: "dsa",
    title: "Data Structures and Algorithms",
    duration: "8 weeks",
    icon: GitBranch,
    intro: [
      { text: "Build a rock-solid foundation in ", bold: false },
      { text: "Data Structures and Algorithms", bold: true },
      { text: " to crack ", bold: false },
      { text: "top product-based company interviews", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Master arrays, linked lists, stacks, queues, trees, and graphs.",
      "Solve problems using recursion, dynamic programming, and greedy techniques.",
      "Analyze time and space complexity of algorithms.",
      "Practice on coding platforms with curated problem sets.",
    ],
    tags: [
      "Arrays",
      "Linked Lists",
      "Trees",
      "Graphs",
      "Dynamic Programming",
      "Recursion",
      "Complexity Analysis",
    ],
  },
  {
    id: "genai-ml",
    title: "GenAI, ML and MLOps",
    duration: "8 weeks",
    icon: BrainCircuit,
    intro: [
      { text: "Dive into ", bold: false },
      { text: "Machine Learning, Generative AI", bold: true },
      { text: " and ", bold: false },
      { text: "MLOps practices", bold: true },
      { text: " used in production systems.", bold: false },
    ],
    points: [
      "Build and evaluate supervised and unsupervised ML models.",
      "Work with LLMs, prompt engineering, and RAG pipelines.",
      "Deploy models using MLOps best practices and CI/CD.",
      "Monitor and maintain models in production environments.",
    ],
    tags: ["Machine Learning", "GenAI", "LLMs", "Prompt Engineering", "MLOps", "Deployment"],
  },
  {
    id: "big-data",
    title: "Big Data and Data Engineering",
    duration: "4 weeks",
    icon: Database,
    intro: [
      { text: "Learn to design and manage ", bold: false },
      { text: "scalable data pipelines", bold: true },
      { text: " using modern ", bold: false },
      { text: "Big Data tools", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Understand distributed computing concepts with Spark and Hadoop.",
      "Build ETL pipelines for large-scale data processing.",
      "Work with cloud data warehouses and lakehouses.",
      "Orchestrate workflows using modern scheduling tools.",
    ],
    tags: ["Spark", "Hadoop", "ETL", "Cloud Warehousing", "Workflow Orchestration"],
  },
  {
    id: "interview-blitz",
    title: "Interview Blitz",
    duration: "4 weeks",
    icon: Mic,
    intro: [
      { text: "Sharpen your ", bold: false },
      { text: "interview skills", bold: true },
      { text: " with mock interviews, resume reviews, and ", bold: false },
      { text: "placement preparation", bold: true },
      { text: ".", bold: false },
    ],
    points: [
      "Practice mock technical and HR interviews with experts.",
      "Get personalized resume and LinkedIn profile reviews.",
      "Learn negotiation strategies for your dream offer.",
      "Build confidence through repeated, realistic interview simulations.",
    ],
    tags: ["Mock Interviews", "Resume Building", "HR Rounds", "Negotiation"],
  },
];

export default curriculumData;
