import { PersonalInfo, Experience, Project, Education, Certification, SkillCategory, ResumeProfile, ResumeType } from '../types/portfolio';

const asset = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export const personalInfo: PersonalInfo = {
  name: "Tejas Khandekar",
  title: "Full Stack Developer & Data Analyst",
  roles: [
    "Full Stack Developer",
    "Data Analyst",
    "React.js & Flask Specialist",
    "Python & SQL Engineer",
    "Power BI & Analytics Specialist"
  ],
  email: "tejaskhandekar693@gmail.com",
  phone: "+91 77208 99829",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/tejas-khandekar",
  github: "https://github.com/tejas1828",
  status: "Available immediately for a full-time, on-site role in Pune",
  bio: "Highly motivated Full Stack Developer and recent B.Tech graduate with hands-on internship experience building responsive, user-friendly web applications and robust backend APIs. Proficient in React.js, Django, Node.js, and relational databases like MySQL and PostgreSQL.",
  aboutLong: [
    "I am a passionate Full Stack Developer and Data Analyst with a strong academic foundation in Computer Science & Engineering (CGPA 8.20 from Sanjay Ghodawat University) and extensive hands-on experience through 4 distinct professional internships.",
    "On the engineering side, my core expertise spans crafting seamless, responsive user interfaces using HTML5, CSS3, JavaScript, Bootstrap, React.js, and Tailwind CSS, as well as building robust backend APIs using Python, Flask, Django, and Node.js with MySQL and PostgreSQL.",
    "On the analytics side, I specialize in translating complex datasets into actionable business intelligence using Power BI, SQL, Python (Pandas, NumPy, PySpark), and statistical modeling to empower data-driven decisions."
  ],
  resumeUrl: asset("/Tejas_Khandekar_FullStack_Resume.pdf"),
  fullStackResumeUrl: asset("/Tejas_Khandekar_FullStack_Resume.pdf"),
  dataAnalystResumeUrl: asset("/Tejas_Khandekar_DataAnalyst_Resume.pdf"),
  profileImage: asset("/profile.jpg")
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 92 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Bootstrap 5", level: 88 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Django & DRF", level: 88 },
      { name: "REST APIs & JWT", level: 92 },
      { name: "Flask & Node.js", level: 78 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Query Optimization", level: 82 }
    ]
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Postman & API Testing", level: 90 },
      { name: "GitHub Actions (CI/CD)", level: 78 },
      { name: "Agile / Scrum Methodologies", level: 85 }
    ]
  },
  {
    category: "Data & Analytics",
    skills: [
      { name: "Pandas & NumPy", level: 88 },
      { name: "Power BI & Dashboards", level: 85 },
      { name: "PySpark", level: 78 },
      { name: "Advanced Excel", level: 88 }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "exp-da-1",
    title: "Data Analyst Intern",
    company: "QSpiders",
    location: "Pune, Maharashtra",
    duration: "Jan 2026 – Present",
    description: [
      "Designed and maintained Power BI dashboards to visualize KPIs and business performance trends, enabling data-driven decision-making across teams.",
      "Applied statistical and analytical thinking to identify trends, patterns, and opportunities – translating complex data into clear, actionable recommendations for stakeholders.",
      "Collaborated closely with cross-functional team leads to integrate KPIs into structured reports, demonstrating effective project management, teamwork, and communication skills.",
      "Solved data quality problems through cleaning, transformation, and ETL processes using Python (Pandas, NumPy) and SQL, ensuring accuracy and integrity.",
      "Applied Generative AI tools to streamline reporting workflows and stay current with emerging technologies in data analytics."
    ],
    technologies: ["Power BI", "SQL", "Python", "Pandas", "NumPy", "ETL", "Generative AI"]
  },
  {
    id: "exp-1",
    title: "Python & Data Science Intern",
    company: "ITRoots",
    location: "Remote",
    duration: "Jul 2026 – Present",
    description: [
      "Architected and developed modular REST API endpoints using FastAPI with strict Pydantic validation, JWT authentication, and structured JSON responses.",
      "Integrated React.js client interfaces with FastAPI backends via Axios, ensuring seamless asynchronous state management and resilient error handling.",
      "Engineered automated Python data processing pipelines utilizing Pandas, NumPy, and PySpark for high-throughput dataset transformations."
    ],
    technologies: ["FastAPI", "React.js", "Python", "Pandas", "PySpark", "JWT", "Axios"]
  },
  {
    id: "exp-2",
    title: "Python Full Stack Developer Intern",
    company: "QSpiders",
    location: "Kolhapur, Maharashtra",
    duration: "Jan 2026 – Jun 2026",
    description: [
      "Engineered the 'Explore Kolhapur' Tourism Web App featuring a responsive Bootstrap 5 UI, interactive destination maps, dynamic image galleries, and user reviews.",
      "Developed secure Django REST Framework services with JWT-authenticated endpoints handling CRUD operations and complex database relations.",
      "Collaborated within cross-functional teams adopting Git branch-based pull request workflows and code review standards."
    ],
    technologies: ["Django REST Framework", "React.js", "Bootstrap 5", "MySQL", "JWT", "Git"]
  },
  {
    id: "exp-3",
    title: "Power BI & Data Intern",
    company: "SkillInfytech IT Solutions Pvt. Ltd.",
    location: "Remote",
    duration: "Mar 2026 – Apr 2026",
    description: [
      "Executed end-to-end data lifecycle processes including automated extraction, deduplication, and transformation using Python and SQL.",
      "Engineered interactive, stakeholder-ready Power BI reporting dashboards that surfaced critical operational and performance metrics."
    ],
    technologies: ["Power BI", "Python", "SQL", "Data Modeling", "Excel"]
  },
  {
    id: "exp-4",
    title: "Full Stack Developer Intern",
    company: "Future Interns",
    location: "Remote",
    duration: "Jun 2025 – Jul 2025",
    description: [
      "Built performant, multi-page web applications using React.js and Node.js/Express.js, ensuring pixel-perfect responsive layouts across all viewports.",
      "Engineered robust REST API integrations between client and server layers with standardized HTTP status codes and payload validations.",
      "Accelerated application performance by 30–40% through code-splitting, image lazy loading, and targeted API response caching."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "Performance Tuning"]
  }
];

export const projects: Project[] = [
  {
    "id": "proj-1",
  "title": "Financial Risk Analyzer",
  "subtitle": "Final Year Capstone Project",
  "description": "Full-stack risk assessment platform featuring a React.js dashboard and FastAPI/MySQL backend to compute real-time portfolio risk metrics, volatility, and credit scores.",
  "technologies": ["React.js", "FastAPI", "Python", "MySQL", "JWT", "Pandas", "Flask"],
  "category": "Full Stack",
  "featured": false,
  "highlights": [
    "Full-stack architecture with React.js UI, FastAPI REST APIs, and MySQL database",
    "Real-time quantitative risk engine built with Python, Pandas, and NumPy",
    "Secure JWT authentication and parameterized SQL queries to protect against vulnerabilities",
    "Interactive visualizations with real-time risk threshold alerting"
  ],
    liveUrl: "https://financial-risk-analyzer.netlify.app",
    githubUrl: "https://github.com/Nerli-Ishan-25/FinWise-Complete-v2-mark-2"
  },
  {
    id: "proj-2",
    title: "Explore Kolhapur — City Tourism Web App",
    subtitle: "Full-Stack City Exploration & Tourism Platform",
    description: "Comprehensive tourism discovery web application featuring verified destination listings, interactive location maps, high-resolution media galleries, and traveler reviews with moderation.",
    technologies: ["HTML", "CSS","JavaScript","Bootstrap 5"],
    category: "Full Stack",
    featured: false,
    highlights: [
      "JWT-authenticated Django REST endpoints for user authentication and reviews",
      "Category-based filtering, keyword search, and paginated response handling",
      "Interactive map coordinates and responsive mobile-first UI"
    ],
    liveUrl: "https://tejas1828.github.io/Explore-Kolhapur-City-Tourism-Web-App/",
    githubUrl: "https://github.com/tejas1828/Explore-Kolhapur-City-Tourism-Web-App"
  },
 {
  "id": "proj-3",
  "title": "SNAPEAT",
  "subtitle": "Smart Food Delivery Application",
  "description": "Snapeat is a smart and user-friendly food delivery application designed to connect users with their favorite nearby restaurants, featuring customized food ordering, secure payments, real-time tracking, and dedicated management panels for restaurants and delivery partners.",
  "technologies": ["HTML", "CSS", "JAVASCRIPT"],
  "category": "Full Stack",
  "featured": false,
  "highlights": [
    "Easy login, advanced search filters, order history, and reviews for a smooth ordering experience",
    "Dedicated panels for restaurants and delivery partners to manage menus, orders, and deliveries efficiently",
    "Designed to deliver delicious meals with speed, safety, and convenience"
  ],
  "liveUrl": "https://tejas1828.github.io/FUTURE_FS_02/",
  "githubUrl": "https://github.com/tejas1828/FUTURE_FS_02"
},
  {
    id: "proj-4",
    title: "Personal Portfolio & Developer Showcase",
    subtitle: "Interactive Modern Web Portfolio",
    description: "Modern, responsive single-page web portfolio built with React.js, TypeScript, and Tailwind CSS. Features dark/light mode, smooth scrollspy, filterable showcases, and resume downloads.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    category: "Web Apps",
    featured: false,
    highlights: [
      "Persistent dark/light theme switching with smooth transitions",
      "Clean modular component architecture with TypeScript strict type safety",
      "Interactive copy-to-clipboard and responsive mobile navigation"
    ],
    liveUrl: "https://tejas1828.github.io/portfolio/", 
    githubUrl: "https://github.com/tejas1828/portfolio"
  },
  {
    id: "proj-da-1",
    title: "Sales Analysis Dashboard",
    subtitle: "Power BI & SQL Business Intelligence Dashboard",
    description: "Built an interactive Power BI sales dashboard applying ETL processes and SQL to track KPIs, visualize multi-regional performance trends, and support data-driven decision-making for stakeholders.",
    technologies: ["Power BI", "ETL", "SQL", "Data Visualization", "Excel", "DAX"],
    category: "Data & Analytics",
    featured: false,
    highlights: [
      "Tracked key business KPIs, sales volume trends, and regional performance distributions",
      "Applied ETL processes and complex SQL queries to clean and transform transaction datasets",
      "Communicated strategic insights to stakeholders through interactive reports and dashboards"
    ],
    liveUrl: "https://tejas1828.github.io/Sales-Analysis-Dashboard/",
    githubUrl: "https://tejas1828.github.io/Sales-Analysis-Dashboard/"
  },
  {
    id: "proj-da-2",
    title: "Financial Analytics Dashboard",
    subtitle: "Revenue, Expenses & Profit Margin Performance",
    description: "Developed a financial performance dashboard analyzing revenue, expenses, and profit metrics – enabling better financial reporting and improved insight delivery to management.",
    technologies: ["Power BI", "Data Analysis", "Excel", "Financial Modeling", "DAX"],
    category: "Data & Analytics",
    featured: false,
    highlights: [
      "Consolidated financial data streams into dynamic revenue, expense, and profit margin metrics",
      "Implemented variance tracking and profitability breakdowns across business units",
      "Streamlined management reporting workflows with automated visual summaries"
    ],
    liveUrl: "https://tejas1828.github.io/Financial-Analysis/",
    githubUrl: "https://tejas1828.github.io/Financial-Analysis/"
  },
  {
    id: "proj-da-3",
    title: "HR Analytics Dashboard",
    subtitle: "Workforce Attrition & Demographic Insights",
    description: "Created an HR analytics dashboard to track employee attrition rates and workforce KPIs, improving human resources decision-making through accurate, timely visual reports demonstrating analytical thinking.",
    technologies: ["Power BI", "Data Analysis", "DAX", "HR Metrics", "Excel"],
    category: "Data & Analytics",
    featured: false,
    highlights: [
      "Analyzed employee attrition patterns across departments, age groups, and tenure brackets",
      "Designed visual KPI cards monitoring retention rates, turnover, and workforce satisfaction",
      "Empowered HR leadership with actionable data to optimize talent retention strategies"
    ],
    liveUrl: "https://tejas1828.github.io/HR-Analysis-Dashboard/",
    githubUrl: "https://tejas1828.github.io/HR-Analysis-Dashboard/"
  },
  {
    id: "proj-da-4",
    title: "Diwali Sales Exploratory Data Analysis (EDA)",
    subtitle: "Retail Customer Purchasing Behavior & Statistical Modeling",
    description: "Performed exploratory data analysis and statistical modeling on a Diwali sales dataset using Python (Pandas, Matplotlib, Seaborn) to identify customer purchasing behaviour, seasonal trends, and actionable business insights.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Statistical Modeling", "EDA"],
    category: "Data & Analytics",
    featured: true,
    highlights: [
      "Executed end-to-end data cleaning, missing value imputation, and exploratory data analysis",
      "Identified top-spending customer demographics, regional preferences, and product categories",
      "Formulated data-driven inventory and festive promotional recommendations for retail teams"
    ],
    liveUrl: "https://github.com/tejas1828/Diwali-Sales-Analysis",
    githubUrl: "https://github.com/tejas1828/Diwali-Sales-Analysis"
  }
];

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sanjay Ghodawat University",
    location: "Kolhapur, Maharashtra",
    duration: "Jun 2022 – May 2026",
    score: "8.20 / 10",
    scoreLabel: "CGPA",
    achievements: [
      "Consistently achieved outstanding academic distinction throughout coursework",
      "Specialized in Full Stack Web Architecture, Database Systems, and Data Science",
      "Completed four industry internships during academic tenure"
    ]
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC 12th Science)",
    institution: "Nehru Vidya Mandir",
    location: "Kotoli, Maharashtra",
    duration: "2020 – 2022",
    score: "77.33%",
    scoreLabel: "Percentage",
    achievements: [
      "Major focus on Mathematics, Physics, and Chemistry",
      "Strong foundational problem-solving and algorithmic thinking"
    ]
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (SSC 10th)",
    institution: "Nehru Vidya Mandir",
    location: "Kotoli, Maharashtra",
    duration: "2019 – 2020",
    score: "92.80%",
    scoreLabel: "Percentage",
    achievements: [
      "Graduated with Distinction (Top 5% of graduating class)",
      "Excellence in Mathematics and Science"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "SQL (Basic) Certified",
    issuer: "HackerRank",
    date: "Mar 2026",
    credentialUrl: asset("/certificates/sql-basic-certificate.pdf"),
    badge: "Database"
  },
  {
    id: "cert-2",
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "Jan 2026",
    credentialUrl: asset("/certificates/python-essentials-1.pdf"),
    badge: "Programming"
  },
  {
    id: "cert-3",
    name: "Data Analytics with Python",
    issuer: "NPTEL",
    date: "May 2025",
    credentialUrl: asset("/certificates/data-analytics-with-python.pdf"),
    badge: "Analytics"
  },
  {
    id: "cert-4",
    name: "Human Computer Interaction",
    issuer: "NPTEL (Score: 90% Elite + Gold)",
    date: "Apr 2026",
    credentialUrl: asset("/certificates/human-computer-interaction.pdf"),
    badge: "UI / UX"
  },
  {
    id: "cert-5",
    name: "Deep Learning - IIT Ropar",
    issuer: "NPTEL (IIT Ropar)",
    date: "Oct 2025",
    credentialUrl: asset("/certificates/deep-learning-iit-ropar.pdf"),
    badge: "AI / Deep Learning"
  },
  {
    id: "cert-6",
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "Jan 2026",
    credentialUrl: asset("/certificates/data-analytics-job-simulation.pdf"),
    badge: "Industry Simulation"
  },
  {
    id: "cert-7",
    name: "Data Visualisation: Empowering Business",
    issuer: "Tata (Forage)",
    date: "Jan 2026",
    credentialUrl: asset("/certificates/data-visualisation-tata.pdf"),
    badge: "Data Visualization"
  },
  {
    id: "cert-8",
    name: "Power BI Intern Certificate",
    issuer: "SkillInfyTech IT Solutions Pvt. Ltd.",
    date: "Apr 2026",
    credentialUrl: asset("/certificates/power-bi-internship.pdf"),
    badge: "BI & Dashboards"
  },
  {
    id: "cert-9",
    name: "Agile Scrum in Practice",
    issuer: "OnWingspan",
    date: "Nov 2025",
    credentialUrl: asset("/certificates/agile-scrum-in-practice.pdf"),
    badge: "Agile"
  },
  {
    id: "cert-10",
    name: "Project Management with Agile",
    issuer: "OnWingspan",
    date: "Nov 2025",
    credentialUrl: asset("/certificates/project-management-with-agile.pdf"),
    badge: "Management"
  },
  {
    id: "cert-11",
    name: "Agile Development with Java EE",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    credentialUrl: asset("/certificates/agile-development-javaee.pdf"),
    badge: "Engineering"
  },
  {
    id: "cert-12",
    name: "Build Your Own Generative AI Model",
    issuer: "NxtWave",
    date: "Aug 2024",
    credentialUrl: asset("/certificates/generative-ai-nxtwave.pdf"),
    badge: "Generative AI"
  },
  {
    id: "cert-13",
    name: "Introduction to Machine Learning",
    issuer: "Skillected",
    date: "Jun 2025",
    credentialUrl: "https://skillected.com/",
    badge: "AI / ML"
  },
  {
    id: "cert-14",
    name: "Full Stack Web Development Internship Certificate",
    issuer: "Future Interns",
    date: "Jul 2025",
    credentialUrl: asset("/certificates/future-interns-certificate.pdf"),
    badge: "Full Stack"
  }
];

export const resumeProfiles: Record<ResumeType, ResumeProfile> = {
  fullstack: {
    id: "fullstack",
    roleTitle: "Full Stack Developer",
    badge: "Web Applications & APIs",
    headline: "React.js • Flask • Python • SQL",
    summary:
      "Highly motivated Full Stack Developer and recent B.Tech graduate with hands-on internship experience building responsive, user-friendly web applications and robust backend APIs. Proficient in React.js, Django, Node.js, and relational databases like MySQL and PostgreSQL. Adept at using Bootstrap and modern styling frameworks to craft seamless UIs. A strong collaborator eager to contribute to team-driven development environments. Available immediately for a full-time, on-site role in Pune.",
    pdfUrl: asset("/Tejas_Khandekar_FullStack_Resume.pdf"),
    pdfFilename: "Tejas_Khandekar_FullStack_Resume.pdf",
    highlights: [
      "Built responsive, user-friendly web applications and robust backend APIs",
      "Proficient in React.js, Flask, Django, Node.js, and relational databases (MySQL, PostgreSQL)",
      "Optimized application performance by 30–40% through code-splitting, lazy loading, and caching",
      "Available immediately for a full-time, on-site role in Pune"
    ],
    keySkills: [
      {
        category: "Frontend",
        skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js", "Tailwind CSS"]
      },
      {
        category: "Backend",
        skills: ["Python", "Flask", "Node.js (Basic)", "Django (Basic)", "REST APIs"]
      },
      {
        category: "Databases & Data Processing",
        skills: ["MySQL", "PostgreSQL", "SQL query writing & optimisation", "Pandas", "NumPy", "ETL pipeline design"]
      },
      {
        category: "Tools & DevOps",
        skills: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "GitHub Actions (CI/CD basics)", "npm", "venv/pip"]
      },
      {
        category: "Other & Soft Skills",
        skills: ["Power BI", "Advanced Excel", "Agile/Scrum", "Problem Solving", "UI/UX Thinking", "Written & Verbal Communication"]
      }
    ],
    experienceIds: ["exp-2", "exp-4", "exp-1", "exp-3"],
    projectIds: ["proj-1", "proj-2", "proj-3", "proj-4"],
    certificationIds: ["cert-2", "cert-3", "cert-1", "cert-6", "cert-7", "cert-13", "cert-9", "cert-14"]
  },
  analyst: {
    id: "analyst",
    roleTitle: "Data Analyst",
    badge: "BI & Statistical Modeling",
    headline: "SQL • Python • Power BI • Statistical Modeling • ETL Processes",
    summary:
      "Detail-oriented data analyst with hands-on experience in statistical analysis, data mining, and business intelligence reporting. Proficient in SQL, Python, Power BI, Tableau, and Advanced Excel, with working knowledge of PySpark and Hive for large-scale data processing. Skilled in applying statistical modeling techniques including hypothesis testing, regression, t-tests, chi-square tests, and KNN to extract actionable insights. Strong communicator and project manager, experienced in collaborating with cross-functional stakeholders to translate raw data into business-ready reports.",
    pdfUrl: asset("/Tejas_Khandekar_DataAnalyst_Resume.pdf"),
    pdfFilename: "Tejas_Khandekar_DataAnalyst_Resume.pdf",
    highlights: [
      "Designed and deployed interactive Power BI dashboards tracking executive KPIs and performance trends",
      "Automated ETL pipelines using Python (Pandas, NumPy) and complex SQL queries",
      "Applied statistical modeling: Hypothesis testing, Regression, KNN, t-tests, and Chi-square analysis",
      "Deloitte & Tata corporate data simulation certified"
    ],
    keySkills: [
      {
        category: "Databases & Big Data",
        skills: ["SQL (MySQL)", "Hive (familiar)", "PySpark (familiar)", "ETL Processes", "Data Mining"]
      },
      {
        category: "BI & Visualization",
        skills: ["Power BI", "Tableau (familiar)", "Advanced Excel", "Power Query", "KPI Dashboards"]
      },
      {
        category: "Statistical Modeling & Python",
        skills: ["Python (Pandas, NumPy, Matplotlib)", "Hypothesis Testing", "Regression", "KNN", "Chi-square", "EDA"]
      },
      {
        category: "Project & Stakeholder Management",
        skills: ["Project Management", "Stakeholder Reporting", "Generative AI", "Agile Methodology", "Git/GitHub"]
      }
    ],
    experienceIds: ["exp-da-1", "exp-3", "exp-1"],
    projectIds: ["proj-da-1", "proj-da-4", "proj-da-2", "proj-da-3"],
    certificationIds: ["cert-1", "cert-8", "cert-6", "cert-7", "cert-3", "cert-2", "cert-12", "cert-13"]
  }
};
