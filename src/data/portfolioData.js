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
    title: "Senior Software Engineer",
    company: "Capgemini Technology Services India Ltd.",
    period: "Jun 2023 – Jun 2024",
    location: "India",
    bullets: [
      "Designed and owned a high-throughput distributed platform using Spring Boot, Node.js, and React.js to aggregate real-time financial data from multiple sources, enabling low-latency dashboards used by 1,000+ global analysts.",
      "Architected and led an event-driven microservices platform using Docker, Kubernetes, Apache Kafka, and RabbitMQ, implementing parallel processing and fault-tolerant workflows to automate settlement reconciliation, reducing processing time to under 40 minutes per batch.",
      "Designed and scaled 100+ RESTful and GraphQL APIs secured with OAuth2, enabling seamless integration between internal banking systems and external providers, handling 300,000+ API calls daily with high availability and resilience.",
      "Implemented unified observability by centralizing application and infrastructure metrics via CloudWatch and integrating Prometheus and Grafana dashboards, reducing incident resolution time to under 15 minutes and improving system reliability.",
      "Led CI/CD and release engineering strategy using Git, Docker, Kubernetes, and automated testing frameworks, enabling zero-downtime deployments, rollback strategies, and highly reliable release cycles.",
      "Designed and optimized large-scale search infrastructure using Elasticsearch within Spring Boot services, indexing over 6 million trade records and enabling low-latency queries supporting 70,000+ searches with sub-second response times.",
      "Integrated LLM-based systems using OpenAI APIs and RAG pipelines to build context-aware trade summarization and intelligent reporting systems, reducing manual effort by 40% and accelerating decision-making workflows.",
      "Mentored engineers and led engineering best practices, conducting design reviews, improving code quality, and authoring architecture and API documentation to enhance maintainability and cross-team collaboration.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Capgemini Technology Services India Ltd.",
    period: "Mar 2022 – Jun 2023",
    location: "India",
    bullets: [
      "Designed and delivered scalable frontend architecture using Angular (10+) and TypeScript for healthcare workflows, improving usability, accessibility, and reliability of clinician-facing applications handling critical data.",
      "Built and owned secure backend services and APIs using Node.js and Express, enabling concurrent access to healthcare data systems and external integrations, handling 10,000+ requests with high availability and stability.",
      "Implemented automated data workflows and AI-driven summarization systems using cron jobs and OpenAI APIs, enabling efficient processing of large-scale datasets and improving reporting accuracy across operational systems.",
      "Developed high-performance UI components using React.js and Redux, applying lazy loading, memoization, and performance optimization techniques to significantly improve page load times and user interaction.",
      "Led frontend modernization and design standardization initiative by migrating legacy CSS systems to Tailwind CSS, improving scalability, consistency, and maintainability across 5+ applications.",
      "Optimized backend performance and database efficiency through indexing, caching, and query optimization strategies, reducing infrastructure costs by 20% while improving response times.",
      "Established cloud-native deployment pipelines using Docker and Terraform, enabling automated infrastructure provisioning, reliable deployments, and improved system uptime while maintaining compliance with enterprise standards.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Zensar Technologies",
    period: "Aug 2020 – Mar 2022",
    location: "India",
    bullets: [
      "Refactored and optimized backend services and data models using Node.js and MongoDB for financial transaction systems, improving data consistency, throughput, and synchronization across distributed systems.",
      "Enhanced system scalability and performance for a financial reporting platform handling 200,000+ daily transactions, implementing caching strategies, optimized queries, and robust error handling.",
      "Migrated legacy frontend systems from AngularJS to Angular (6+), improving responsiveness, maintainability, and usability for 5,000+ users across reporting and portfolio applications.",
      "Designed and implemented API testing frameworks using Postman, integrating automated testing into CI pipelines to improve release quality and reduce deployment defects.",
      "Automated operational workflows using Python and Bash scripting for log management, audit reporting, and monitoring, reducing manual effort by 60+ hours per month.",
      "Designed scalable data pipelines using Apache Kafka for real-time batch processing, improving data availability and analytics performance.",
      "Contributed to Agile development processes, including sprint planning, backlog refinement, and retrospectives, improving delivery efficiency and team collaboration.",
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
  { value: "4.5+", label: "Years Experience" },
  { value: "3.96", label: "GPA at ASU" },
  { value: "20%", label: "Reduction in Production Issues" },
  { value: "50%", label: "Workflow Reduction" },
];
