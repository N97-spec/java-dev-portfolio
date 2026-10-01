export const profile = {
  name: "Neha Yarrapothu",
  first: "Neha",
  role: "Java Full Stack Developer",
  headline: ["Java", "Spring Boot", "SQL"],
  base: "Denton, TX",
  summary:
    "Java Full Stack Developer building and supporting enterprise applications across the full lifecycle — from requirements and development to testing, releases, and production support — with Java 11/17, Spring Boot, REST APIs, and SQL.",
  facts: [
    { label: "Based in", value: "Denton, TX" },
    { label: "Focus", value: "Java 11 / 17 · Spring Boot" },
    { label: "Education", value: "MS Computer Science & Engineering, UNT" },
  ],
  links: {
    email: "[your-email@example.com]",
    github: "[github.com/your-username]",
    linkedin: "[linkedin.com/in/your-username]",
  },
};

export const ticker = [
  "Java 11 / 17",
  "Spring Boot",
  "Spring MVC",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "Swagger / OpenAPI",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "MongoDB",
  "Kafka",
  "JUnit",
  "Mockito",
  "Maven",
  "Jenkins",
  "Docker",
  "CI/CD",
  "AWS",
  "Microservices",
  "Batch Processing",
  "GitHub Copilot",
];

export const skillGroups: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Java", "JavaScript", "SQL", "C"],
  },
  {
    group: "Core Java",
    items: ["Java 11/17", "OOP", "Collections", "Exception Handling", "Reusable Components"],
  },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "JDBC",
      "JSP",
      "Servlets",
      "Layered Architecture",
    ],
  },
  {
    group: "APIs",
    items: [
      "RESTful APIs",
      "API Design",
      "Validation",
      "Exception Handling",
      "Swagger / OpenAPI",
      "Postman",
      "JSON",
    ],
  },
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "JSP", "REST API Integration"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "SQL", "CRUD Operations"],
  },
  {
    group: "Messaging",
    items: ["Kafka", "Asynchronous Service Communication", "Event-Driven Processing"],
  },
  {
    group: "Batch Processing",
    items: ["Scheduled Processing", "High-Volume Processing", "Failure Handling", "Restart & Reprocessing"],
  },
  {
    group: "Build / DevOps",
    items: ["Maven", "Jenkins", "Docker", "CI/CD", "Build & Deployment Support", "AWS Tooling"],
  },
  {
    group: "Testing",
    items: ["JUnit", "Mockito", "Unit Testing", "API Testing", "Regression Testing"],
  },
  {
    group: "Architecture",
    items: [
      "Microservices",
      "Controller-Service-Repository Pattern",
      "Separation of Concerns",
      "Business Validation",
    ],
  },
  {
    group: "Version Control",
    items: ["Git", "GitHub", "Branching", "Code Reviews"],
  },
  {
    group: "Agile / Tools",
    items: [
      "Jira",
      "Agile / Scrum",
      "Sprint Planning",
      "Stand-ups",
      "Reviews",
      "Defect Tracking",
      "IntelliJ IDEA",
      "Eclipse",
      "VS Code",
      "Tomcat",
    ],
  },
  {
    group: "AI Tools",
    items: ["GitHub Copilot", "Microsoft Copilot", "ChatGPT"],
  },
];

export type Job = {
  company: string;
  location: string;
  role: string;
  span: string;
  current?: boolean;
  blurb: string;
  highlights: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "CedarWave Technologies",
    location: "Plano, TX",
    role: "Java Full Stack Developer",
    span: "Aug 2025 – Present",
    current: true,
    blurb:
      "Java and Spring Boot approval-processing service routing business requests through validation, review, decisions, and status updates.",
    highlights: [
      "Build REST APIs to submit approval requests, retrieve details, update decisions, and track processing status.",
      "Implement request and eligibility validations, workflow transitions, exception handling, and audit-friendly status updates.",
      "Maintain modular controller, service, and repository layers with reusable Java components for approval operations.",
      "Integrate PostgreSQL through Spring Data JPA and Hibernate; use SQL to verify data and investigate production issues.",
      "Document endpoints with Swagger/OpenAPI and Postman; test service logic and defect fixes with JUnit and Mockito.",
      "Support Maven builds, Git development, Jenkins pipelines, Docker deployments, QA validation, and post-release troubleshooting.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate", "PostgreSQL", "Swagger/OpenAPI", "JUnit", "Mockito", "Maven", "Jenkins", "Docker"],
  },
  {
    company: "BluePeak Software Solutions",
    location: "Irving, TX",
    role: "Java Developer",
    span: "Nov 2024 – Jul 2025",
    blurb:
      "Scheduled and high-volume batch-processing services for business operations outside user-driven request flows.",
    highlights: [
      "Built Java 17 and Spring Boot components to read work items, apply processing rules, update results, and record execution status.",
      "Validated incomplete records before downstream processing and supported restart and reprocessing of failed items.",
      "Used Spring Data JPA and Hibernate with PostgreSQL; wrote SQL to analyze failures and verify results.",
      "Added logging and exception handling for failed processing and REST endpoints for operational status visibility.",
      "Tested processing logic and errors with JUnit and Mockito; verified APIs using Postman and Swagger/OpenAPI.",
      "Worked with QA on normal, failure, and reprocessing scenarios; supported Maven, Git, Jenkins, and Docker releases.",
    ],
    stack: ["Java 17", "Spring Boot", "Batch Processing", "Spring Data JPA", "Hibernate", "PostgreSQL", "JUnit", "Mockito", "Maven", "Git", "Jenkins", "Docker"],
  },
  {
    company: "NorthBridge Technology Solutions",
    location: "Dallas, TX",
    role: "Java Full Stack Developer",
    span: "Oct 2021 – Jul 2024",
    blurb:
      "Web and mobile rental marketplace connecting borrowers and product owners across the reservation lifecycle.",
    highlights: [
      "Developed Java and Spring Boot functionality for registration, sign-in, product discovery, reservations, and rental status.",
      "Built REST APIs for borrower, owner, and administrative features, including listings and reservation decisions.",
      "Supported messaging between participants and payment-related workflows for charges and rental settlement.",
      "Maintained controller, service, and persistence layers using Spring Data JPA/Hibernate and database queries.",
      "Connected JavaScript/JSP interfaces to backend services and added validation and exception handling for account and reservation operations.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "Hibernate", "JavaScript", "JSP"],
  },
  {
    company: "Sagar Soft",
    location: "India",
    role: "Java Developer",
    span: "Dec 2019 – Sep 2021",
    blurb:
      "Online auction platform for authorized users to place time-bound bids on properties and other listed assets.",
    highlights: [
      "Built Java and Spring backend functionality for auction setup, participant access, bidding, and results.",
      "Developed REST endpoints for auction details and user actions with eligibility and bid validations.",
      "Supported time-based bidding behavior and processing to capture activity during active auctions.",
      "Used Hibernate/JPA and Oracle for auction, participant, bid, and result data, with SQL for verification and reporting support.",
      "Added exception handling and maintained Java/J2EE web components and JavaScript interfaces.",
    ],
    stack: ["Java", "Spring", "REST APIs", "Hibernate/JPA", "Oracle", "SQL", "JavaScript"],
  },
  {
    company: "Rajasri Infotech",
    location: "India",
    role: "Java Developer Intern → Software Developer (Full Time)",
    span: "Jan 2018 – Nov 2019",
    blurb:
      "Web-based enterprise operations platform for employee records, work requests, approvals, and administrative activity.",
    highlights: [
      "Started as a Java Developer Intern and transitioned into a full-time Software Developer role.",
      "Developed modules for employee records, work requests, approval status, and administrative activities.",
      "Built Core Java, Spring MVC, JSP, Servlet, JDBC, and MySQL components for application workflows.",
      "Implemented CRUD operations and administrative screens for reviewing records and updating status.",
      "Added client- and server-side validation and wrote MySQL queries for reporting and troubleshooting.",
    ],
    stack: ["Core Java", "Spring MVC", "JSP", "Servlets", "JDBC", "MySQL"],
  },
];

export type Project = {
  name: string;
  org: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Approval Processing Service",
    org: "CedarWave Technologies",
    summary:
      "Service routing business requests through validation, review, decisions, and status updates.",
    points: [
      "REST APIs for approval submission, request details, decisions, and processing status.",
      "Business validations, workflow transitions, and audit-friendly status changes with PostgreSQL persistence.",
      "JUnit and Mockito tests, Swagger/OpenAPI documentation, and production issue investigation.",
    ],
    tags: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "Swagger/OpenAPI", "JUnit"],
  },
  {
    name: "Batch Processing Services",
    org: "BluePeak Software Solutions",
    summary:
      "Scheduled and high-volume processing for business operations outside user-driven request flows.",
    points: [
      "Java 17 and Spring Boot components for work-item processing, validation, result updates, and execution tracking.",
      "Failure handling, restart and reprocessing support, and SQL-based verification of results.",
    ],
    tags: ["Java 17", "Spring Boot", "Batch Processing", "PostgreSQL", "SQL"],
  },
  {
    name: "Rental Marketplace",
    org: "NorthBridge Technology Solutions",
    summary:
      "Web and mobile marketplace connecting borrowers and owners across product discovery and reservations.",
    points: [
      "Backend APIs for user accounts, product listings, rental requests, and owner approval decisions.",
      "Administrative, messaging, and payment-related workflows connected to JavaScript/JSP interfaces.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Hibernate", "JavaScript", "JSP"],
  },
  {
    name: "Online Auction Platform",
    org: "Sagar Soft",
    summary:
      "Time-bound bidding platform for authorized users and listed properties or other assets.",
    points: [
      "Backend services for auction setup, participant access, bidding, and results processing.",
      "Bid and eligibility validations with Oracle persistence and SQL-based reporting support.",
    ],
    tags: ["Java", "Spring", "REST APIs", "Hibernate/JPA", "Oracle"],
  },
  {
    name: "Enterprise Operations Platform",
    org: "Rajasri Infotech",
    summary:
      "Web-based platform for employee records, work requests, approval status, and administration.",
    points: [
      "JSP forms, Servlet request handling, JDBC and MySQL persistence for operational workflows.",
      "Administrative screens for reviewing records and updating status with client- and server-side validation.",
    ],
    tags: ["Core Java", "Spring MVC", "JSP", "Servlets", "JDBC", "MySQL"],
  },
];

export const education = {
  degree: "Master of Science in Computer Science and Engineering",
  school: "University of North Texas",
  location: "Denton, TX",
};
