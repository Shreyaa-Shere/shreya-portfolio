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
  bio1: "Senior Software Engineer with 3+ years of experience designing and scaling distributed systems, real-time data platforms, and AI-driven applications across finance and healthcare domains.",
  bio2: "Expertise in high-throughput microservices and event-driven architectures using Java, Spring Boot, Kafka, Kubernetes, and AWS — with hands-on experience integrating LLM-based solutions and RAG pipelines.",
  bioLong: "I'm a Senior Software Engineer with 3+ years of experience designing and scaling distributed systems, real-time data platforms, and AI-driven applications across finance and healthcare domains. I specialize in building high-throughput microservices and event-driven architectures using Java, Spring Boot, Kafka, Kubernetes, and AWS.",
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
    items: ["Angular (10+)", "React.js", "Next.js", "Redux", "Bootstrap 5", "jQuery", "HTML5", "CSS3", "Tailwind CSS"],
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
    title: "Frontend Engineer",
    company: "Aligned Rewards",
    period: "Jan 2026 – May 2026",
    location: "Remote (US)",
    bullets: [
      "Developed responsive React workflows for AI-assisted goal creation with dynamic rendering and state management.",
      "Integrated REST APIs for draft management, ensuring reliable data persistence and workflow consistency.",
    ],
    techTags: ["React.js", "REST APIs", "Agile/Scrum"],
  },
  {
    title: "Senior Software Engineer",
    company: "Capgemini",
    period: "Jun 2023 – Jun 2024",
    location: "Bangalore",
    bullets: [
      "Designed and scaled 100+ RESTful and GraphQL APIs secured with OAuth2, handling 300,000+ API calls daily with high availability and resilience.",
      "Integrated LLM-based systems using OpenAI APIs and RAG pipelines for context-aware trade summarization, reducing manual effort by 40%.",
    ],
    techTags: ["Spring Boot", "Kafka", "Kubernetes", "Docker", "AWS", "Elasticsearch", "OpenAI", "Node.js"],
  },
  {
    title: "Software Engineer",
    company: "Capgemini",
    period: "Mar 2022 – Jun 2023",
    location: "Bangalore",
    bullets: [
      "Built and owned secure backend APIs using Node.js and Express for healthcare data systems, handling 10,000+ concurrent requests with high availability.",
      "Optimized backend performance through indexing, caching, and query optimization, reducing infrastructure costs by 20%.",
    ],
    techTags: ["Angular", "React.js", "TypeScript", "Node.js", "Docker", "Terraform", "OpenAI", "Tailwind CSS"],
  },
];

export const projects = [
  {
    title: "Receipt Genie",
    subtitle: "AI Receipt Dashboard & Budgeting App",
    description: "Built with Python and Streamlit, Receipt Genie persists all receipt data in a SQLite database via SQLAlchemy ORM, with secure bcrypt authentication and drag-and-drop image uploads. Plotly-powered dashboards surface monthly spending trends, top vendors, and category breakdowns in real time.",
    tags: ["AI", "OCR", "OpenAI", "Streamlit", "FinTech"],
    highlights: ["GPT-4o Vision extracts store, items & prices with 95% accuracy", "SHA-256 duplicate detection prevents redundant API calls", "Real-time budget alerts with color-coded guardrails", "One-click PDF, Excel & CSV export"],
    github: "https://github.com/Shreyaa-Shere/Receipt_Genie",
    demoUrl: "https://youtu.be/wfGUgp56TVM?si=AQUrKiung3FzLO16",
    mindMapUrl: "/receipt-genie-mindmap.png",
    image: "/receipt-genie-cover.png",
  },
  {
    title: "LegalEase",
    subtitle: "AI-Powered Contract Analyzer",
    description: "A decoupled full-stack SPA built with React 19 + Vite on the frontend and Django REST Framework on the backend, backed by PostgreSQL for structured contract storage. A Redis-powered Celery async queue offloads heavy document parsing and AI API calls to background workers, keeping the UI fully responsive. GitHub Actions runs automated pytest suites against a live PostgreSQL instance on every push, ensuring backend reliability.",
    tags: ["AI", "Django", "React", "OpenAI", "PostgreSQL", "Celery", "Redis", "JWT Auth"],
    highlights: ["OpenAI GPT-4o-mini generates executive summaries & risk assessments", "Custom regex engine detects legal clauses with deterministic accuracy", "Real-time UI polling reflects live background processing status", "JWT authentication with per-user data isolation"],
    github: "https://github.com/Shreyaa-Shere/legalease-ai-contract-analyzer",
    demoUrl: "https://youtu.be/Z5W1-lvKiyI",
    mindMapUrl: "/legalease-mindmap.png",
    image: "/legalease-cover.png",
  },
  {
    title: "AI Infra Research Dashboard",
    subtitle: "Full-Stack Internal Research Tool",
    description: "Full-stack platform for researching and tracking AI infrastructure — hardware products, companies, datacenters, research notes, metrics, and ingested source documents. Features JWT auth with RBAC, markdown research notes with draft/review/publish workflow, time-series metrics with CSV export, and a Celery-powered ingestion pipeline with PostgreSQL full-text search.",
    tags: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Claude Code", "Redis", "Celery", "Docker"],
    highlights: ["JWT auth + RBAC roles", "Full-text search with snippets", "Celery ingestion pipeline", "Redis caching + audit log"],
    github: "https://github.com/Shreyaa-Shere/ai-infra-research-dashboard",
    liveUrl: "https://dashboard.shreyashere.dev/login",
    demoUrl: "https://youtu.be/91kBTVuMGjM",
    mindMapUrl: "/ai-infra-mindmap.png",
    image: "/ai-infra-cover.png",
  },
];

export const recommendations = [
  {
    name: "Ashish Kumar",
    title: "Site Reliability Engineer | DevOps Engineer | Kubernetes(CKA) | Docker | Terraform | CI/CD | Jenkins | Azure | Prometheus | Grafana | 4xMicrosoft Certified",
    date: "October 31, 2025",
    relationship: "Worked with Shreya at Capgemini on different teams",
    linkedin: "https://www.linkedin.com/in/ashish-kumar",
    paragraphs: [
      "I had the opportunity to work with Shreya at Capgemini, and what truly stood out to me was her ability to take initiative and deliver results with remarkable consistency. She quickly became the go-to person for handling complex modules and ensuring project milestones were met smoothly.",
      "Shreya has a unique ability to bridge technical depth with clear communication — whether it's breaking down requirements for teammates or explaining technical concepts to non-technical stakeholders, she always ensures everyone is on the same page. Her professionalism and calm demeanor made collaboration effortless, even during high-pressure deliverables.",
      "She also brought an inspiring level of ownership and curiosity to her work. Shreya was never satisfied with \"just getting things done\" — she constantly looked for better ways to optimize systems, improve workflows, and adopt new technologies.",
      "Her leadership qualities, adaptability, and passion for learning will no doubt make her a valuable asset to any team she joins. Working with her was an enriching experience, and I look forward to seeing all the great things she'll accomplish in the future.",
    ],
  },
  {
    name: "Rajatabha Chakraborty",
    title: "Reliance Foundation Scholar 2025-26 | MS in ECE, IIIT Hyderabad (Centre for VLSI and Embedded Systems Technology)",
    date: "July 5, 2025",
    relationship: "Worked with Shreya at Capgemini on the same team",
    linkedin: "https://www.linkedin.com/in/rajatabha-chakraborty",
    paragraphs: [
      "I had the pleasure of working with Shreya at Capgemini, where we were part of the same development team. She consistently impressed me with her strong problem-solving skills, attention to detail, and ability to deliver high-quality code under tight deadlines.",
      "What really stood out about Shreya was her eagerness to learn and her collaborative nature. She was always willing to help teammates, take ownership of complex tasks, and suggest innovative solutions to technical challenges. Her contributions were key to the success of several projects we worked on together.",
      "Now, as she continues her academic journey at Arizona State University, I have no doubt she will bring the same drive, curiosity, and excellence to everything she does. Any team would be lucky to have her!",
    ],
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
  { value: "3+", label: "Years Experience" },
  { value: "3.96", label: "GPA at ASU" },
  { value: "20%", label: "Reduction in Production Issues" },
  { value: "50%", label: "Workflow Reduction" },
];
