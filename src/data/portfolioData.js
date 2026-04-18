export const personalInfo = {
  name: "Shreya Shere",
  tagline: "GHC '25",
  role: "Software Engineer",
  email: "sshere2@asu.edu",
  phone: "(602) 804-3692",
  linkedin: "linkedin.com/in/shreya-shere",
  github: "github.com/Shreyaa-Shere",
  linkedinUrl: "https://linkedin.com/in/shreya-shere",
  githubUrl: "https://github.com/Shreyaa-Shere",
  bio1: "Senior Software Engineer with 4.5+ years of experience designing and scaling distributed systems, real-time data platforms, and AI-driven applications across finance and healthcare domains.",
  bio2: "Expertise in high-throughput microservices and event-driven architectures using Java, Spring Boot, Kafka, Kubernetes, and AWS — with hands-on experience integrating LLM-based solutions and RAG pipelines.",
  bioLong: "I'm a Senior Software Engineer with 4.5+ years of experience designing and scaling distributed systems, real-time data platforms, and AI-driven applications across finance and healthcare domains. I specialize in building high-throughput microservices and event-driven architectures using Java, Spring Boot, Kafka, Kubernetes, and AWS.",
  bioLong2: "I'm currently pursuing my Master's in Software Engineering at Arizona State University (GPA: 3.96). I'm actively seeking full-time SWE roles where I can own end-to-end systems from architecture and development to deployment, with a focus on scalability, performance, and reliability.",
};

export const education = [
  {
    degree: "M.S. in Software Engineering",
    school: "Arizona State University",
    period: "2024 – 2026",
    gpa: "3.96",
  },
  {
    degree: "B.E. in Information Technology",
    school: "University of Pune",
    period: "2018 – 2022",
    gpa: "8.68",
  },
];

export const expertise = [
  {
    icon: "Server",
    title: "Backend Development & APIs",
    desc: "Building scalable backend systems and RESTful APIs with a focus on reliability and performance",
  },
  {
    icon: "Code2",
    title: "Full-Stack Development",
    desc: "Delivering end-to-end web applications — from responsive frontends to production-ready server-side logic",
  },
  {
    icon: "GitMerge",
    title: "System Design & Engineering",
    desc: "Designing maintainable software systems with clean architecture, CI/CD pipelines, and Agile practices",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    category: "Frontend",
    items: ["Angular (10+)", "React.js", "Next.js", "Redux", "Bootstrap 5", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Spring Boot", "Django", "J2EE", "Express"],
  },
  {
    category: "Cloud & Platforms",
    items: ["AWS (CloudFront, S3, Lambda, API Gateway, Amplify)", "GCP (Firebase, Cloud Functions, Storage)"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Firebase Realtime DB"],
  },
  {
    category: "Streaming & Messaging",
    items: ["Apache Kafka", "RabbitMQ"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git", "Postman", "JIRA", "Figma"],
  },
  {
    category: "Testing",
    items: ["Jest", "Cypress", "Enzyme", "Lighthouse", "JUnit", "Mockito"],
  },
  {
    category: "AI & Generative AI",
    items: ["OpenAI APIs", "GPT", "RAG Pipelines", "Prompt Engineering", "Claude API", "Claude Code", "Anthropic SDK"],
  },
];

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "Capgemini Technology Services India Ltd.",
    period: "Jun 2023 – Jun 2024",
    location: "India",
    bullets: [
      "Designed and owned a high-throughput distributed platform using Spring Boot, Node.js, and React.js to aggregate real-time financial data from multiple sources, enabling low-latency dashboards used by 1,000+ global analysts.",
      "Architected an event-driven microservices platform using Docker, Kubernetes, Apache Kafka, and RabbitMQ, implementing parallel processing and fault-tolerant workflows to automate settlement reconciliation, reducing processing time to under 40 minutes per batch.",
      "Designed and scaled 100+ RESTful and GraphQL APIs secured with OAuth2, handling 300,000+ API calls daily with high availability and resilience.",
      "Implemented unified observability by centralizing metrics via CloudWatch and integrating Prometheus and Grafana dashboards, reducing incident resolution time to under 15 minutes.",
      "Designed and optimized large-scale search infrastructure using Elasticsearch, indexing 6M+ trade records and enabling 70,000+ sub-second queries.",
      "Integrated LLM-based systems using OpenAI APIs and RAG pipelines to build context-aware trade summarization tools, reducing manual effort by 40%.",
      "Led CI/CD and release engineering strategy using Git, Docker, and Kubernetes, enabling zero-downtime deployments and rollback strategies.",
      "Mentored engineers and led design reviews, improving code quality and authoring architecture and API documentation.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Capgemini Technology Services India Ltd.",
    period: "Mar 2022 – Jun 2023",
    location: "India",
    bullets: [
      "Designed and delivered scalable frontend architecture using Angular (10+) and TypeScript for healthcare workflows, improving usability and reliability of clinician-facing applications.",
      "Built and owned secure backend services and APIs using Node.js and Express, handling 10,000+ concurrent requests with high availability.",
      "Implemented AI-driven summarization systems using cron jobs and OpenAI APIs, enabling efficient processing of large-scale datasets.",
      "Developed high-performance UI components using React.js and Redux, applying lazy loading and memoization to significantly improve page load times.",
      "Led frontend modernization by migrating legacy CSS systems to Tailwind CSS, improving scalability and maintainability across 5+ applications.",
      "Optimized backend performance through indexing, caching, and query optimization, reducing infrastructure costs by 20%.",
      "Established cloud-native deployment pipelines using Docker and Terraform, enabling automated infrastructure provisioning and reliable deployments.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Zensar Technologies",
    period: "Aug 2020 – Mar 2022",
    location: "India",
    bullets: [
      "Refactored and optimized backend services and data models using Node.js and MongoDB for financial transaction systems, improving data consistency and throughput across distributed systems.",
      "Enhanced scalability and performance for a financial reporting platform handling 200,000+ daily transactions via caching strategies and query optimization.",
      "Migrated legacy frontend systems from AngularJS to Angular (6+), improving responsiveness and usability for 5,000+ users.",
      "Designed and implemented API testing frameworks using Postman, integrating automated testing into CI pipelines to reduce deployment defects.",
      "Automated operational workflows using Python and Bash scripting for log management and audit reporting, reducing manual effort by 60+ hours per month.",
      "Designed scalable data pipelines using Apache Kafka for real-time batch processing, improving data availability and analytics performance.",
    ],
  },
];

export const projects = [
  {
    title: "Receipt Genie",
    subtitle: "AI Receipt Dashboard & Budgeting App",
    description: "Streamlit-based receipt management system with OCR and OpenAI API integration. Features 95% OCR accuracy, smart budget alerts, and comprehensive PDF/Excel export capabilities.",
    tags: ["AI", "OCR", "OpenAI", "Streamlit", "FinTech"],
    highlights: ["95% OCR accuracy", "Budget tracking", "Multi-format export"],
    github: "https://github.com/Shreyaa-Shere",
  },
  {
    title: "LegalEase",
    subtitle: "AI-Powered Contract Analyzer",
    description: "Django REST Framework and React-based contract analysis platform with OpenAI GPT integration. Features automated text extraction from PDF/DOCX files, intelligent clause detection, AI-powered risk assessment, and asynchronous processing with Celery for real-time analysis.",
    tags: ["AI", "Django", "React", "OpenAI", "PostgreSQL", "Celery", "Redis", "JWT Auth"],
    highlights: ["AI-powered risk analysis", "Automated clause detection", "Real-time processing", "Secure authentication"],
    github: "https://github.com/Shreyaa-Shere",
  },
  {
    title: "AI Infra Research Dashboard",
    subtitle: "Full-Stack Internal Research Tool",
    description: "Full-stack platform for researching and tracking AI infrastructure — hardware products, companies, datacenters, research notes, metrics, and ingested source documents. Features JWT auth with RBAC, markdown research notes with draft/review/publish workflow, time-series metrics with CSV export, and a Celery-powered ingestion pipeline with PostgreSQL full-text search.",
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Celery", "Docker", "TanStack Query"],
    highlights: ["JWT auth + RBAC roles", "Full-text search with snippets", "Celery ingestion pipeline", "Redis caching + audit log"],
    github: "https://github.com/Shreyaa-Shere/ai-infra-research-dashboard",
  },
];

export const leadership = [
  {
    icon: "Users",
    title: "Ladies Representative",
    org: "University of Pune",
    period: "2020 – 2022",
    description: "Organized 6+ events including workshops and seminars. Improved student-faculty coordination and created a supportive environment for women in technology.",
    highlights: ["6+ events organized", "Enhanced communication", "Mentored peers"],
  },
  {
    icon: "Code2",
    title: "Coordinator, CodeChef Club",
    org: "University of Pune",
    period: "2019 – 2021",
    description: "Led coding sessions and competitive programming workshops. Boosted club participation by 30% and helped students prepare for technical interviews.",
    highlights: ["30% participation increase", "Weekly coding sessions", "Interview prep"],
  },
];

export const values = [
  { icon: "Trophy", title: "Excellence", desc: "Striving for the highest standards in everything I do" },
  { icon: "Users", title: "Collaboration", desc: "Building strong teams through effective communication" },
  { icon: "Heart", title: "Empathy", desc: "Creating inclusive environments for all community members" },
];

export const stats = [
  { value: "4.5+", label: "Years Experience" },
  { value: "3.96", label: "GPA at ASU" },
  { value: "20%", label: "Reduction in Production Issues" },
  { value: "50%", label: "Workflow Reduction" },
];
