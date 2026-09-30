export const profile = {
  name: "Neha Yarrapothu",
  first: "Neha",
  role: "Java Full Stack Developer",
  headline: ["Java", "Spring Boot", "SQL"],
  base: "Denton, TX",
  summary:
    "Java Full Stack Developer building and supporting enterprise web applications across the full lifecycle — requirements through deployment — with Java 11/17, Spring Boot, REST APIs, Hibernate/JPA, and relational databases.",
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
      "Internal operations portal used to manage customer orders, service requests, and day-to-day processing activities.",
    highlights: [
      "Build backend features with Java 17 and Spring Boot — REST APIs, service-layer logic, validations, and database integrations.",
      "Design and enhance REST APIs for order and service workflows while keeping controller, service, and repository responsibilities clear.",
      "Integrate backend services with PostgreSQL using Spring Data JPA and Hibernate; write SQL for data checks and production issue analysis.",
      "Maintain JSP-based pages and enhance HTML5, CSS3, Bootstrap, and JavaScript interfaces connected to backend REST services.",
      "Document and test endpoints with Swagger/OpenAPI and Postman; create and update JUnit and Mockito tests as business rules change.",
      "Support Jenkins and Docker build and deployment activities and coordinate fixes with QA and business teams across releases.",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "JSP", "Bootstrap", "JUnit", "Mockito", "Maven", "Jenkins", "Docker"],
  },
  {
    company: "BluePeak Software Solutions",
    location: "Irving, TX",
    role: "Java Developer",
    span: "Nov 2024 – Jul 2025",
    blurb:
      "Web-based case management application used by operations teams to review requests, update case details, and track work through different stages.",
    highlights: [
      "Developed Java 17 and Spring Boot components for case creation, status updates, search, and supporting business rules.",
      "Built and maintained REST endpoints for case-management workflows and connected them with JSP and JavaScript screens.",
      "Used Spring Data JPA and Hibernate for persistence with PostgreSQL; wrote SQL queries to investigate data issues.",
      "Implemented validation and clearer exception handling for user and API error messages, plus reusable service-layer components.",
      "Created JUnit and Mockito unit tests and verified API behavior with Postman during development and defect fixes.",
      "Supported Jenkins and Docker in the build and deployment process and worked Agile with Jira defect tracking.",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "JSP", "JavaScript", "JUnit", "Mockito", "Git", "Maven", "Jenkins", "Docker"],
  },
  {
    company: "NorthBridge Technology Solutions",
    location: "Dallas, TX",
    role: "Java Full Stack Developer",
    span: "Oct 2021 – Jul 2024",
    blurb:
      "Customer account and service management platform used by internal teams to manage customer profiles, service requests, and account activity.",
    highlights: [
      "Developed backend services using Java 11/17 and Spring Boot for customer, account, and service-request workflows.",
      "Built and enhanced REST APIs and connected them to JavaScript-based web interfaces and reusable JSP pages and forms.",
      "Used Spring Data JPA, Hibernate/JPA mappings, and PostgreSQL; wrote SQL to troubleshoot data issues and improve slow-running operations.",
      "Added unit tests with JUnit and Mockito and verified API behavior with Postman before changes moved into QA.",
      "Supported production support by reproducing reported problems, identifying root causes, and coordinating application fixes.",
      "Used Jira for sprint work and defects; supported builds and deployments with Maven, Git, Jenkins, and Docker.",
    ],
    stack: ["Java 11/17", "Spring Boot", "Hibernate", "PostgreSQL", "JavaScript", "JSP", "JUnit", "Mockito", "Jira", "Maven", "Git", "Jenkins", "Docker"],
  },
  {
    company: "Sagar Soft",
    location: "India",
    role: "Java Developer",
    span: "Dec 2019 – Sep 2021",
    blurb:
      "Java-based banking application handling customer account information and day-to-day transaction workflows.",
    highlights: [
      "Developed Spring Boot services and REST endpoints for account lookup and transaction processing.",
      "Implemented business validations and exception handling for consistent API behavior.",
      "Used Hibernate/JPA and Oracle for database operations and wrote SQL for data checks and issue analysis.",
      "Worked with Kafka for asynchronous communication between services where workflows did not need to run synchronously.",
      "Created JUnit tests for backend functionality and tested REST endpoints using Postman.",
      "Used Maven, Git, Jenkins, and Jira as part of the development and release process.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate/JPA", "Oracle", "Kafka", "JUnit", "Postman", "Maven", "Git", "Jenkins"],
  },
  {
    company: "Rajasri Infotech",
    location: "India",
    role: "Java Developer Intern → Software Developer",
    span: "Jan 2018 – Nov 2019",
    blurb:
      "Java web applications supporting inventory and employee/leave management workflows.",
    highlights: [
      "Started as a Java Developer Intern and transitioned into a full-time Software Developer role.",
      "Built Java classes and web components using Core Java, JSP, Servlets, JDBC, and Spring MVC.",
      "Implemented CRUD operations with JDBC and MySQL and added input validation for inventory, employee, and leave forms.",
      "Created and maintained HTML, CSS, Bootstrap, and JavaScript interface components.",
      "Wrote MySQL queries for inserts, updates, searches, and data retrieval; deployed changes to Tomcat.",
      "Applied OOP, collections, exception handling, SQL, and SDLC practices with code reviews alongside senior developers.",
    ],
    stack: ["Core Java", "JSP", "Servlets", "Spring MVC", "JDBC", "MySQL", "Bootstrap", "Maven", "Git", "Tomcat"],
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
    name: "UCO Approval SVC",
    org: "CedarWave Technologies",
    summary:
      "Approval-focused service within the application ecosystem, handling request processing and business-rule validation.",
    points: [
      "REST endpoints with clear controller, service, and repository separation, persisted through Spring Data JPA and Hibernate.",
      "Handled validation, exception scenarios, and database checks against PostgreSQL during development and production support.",
      "Verified API behavior with Postman and Swagger/OpenAPI with JUnit and Mockito coverage.",
    ],
    tags: ["Spring Boot", "JPA", "PostgreSQL", "Swagger", "JUnit"],
  },
  {
    name: "UCO Batch Processor",
    org: "CedarWave Technologies",
    summary:
      "Batch-oriented backend processing for recurring or high-volume application work outside normal user-driven request flows.",
    points: [
      "Implemented Java and Spring Boot components for processing logic, validations, database interactions, and reliable data handling.",
      "Investigated failed or inconsistent processing by reviewing application behavior and database records, then coordinated fixes.",
    ],
    tags: ["Spring Boot", "Batch Processing", "SQL", "Jenkins", "Docker"],
  },
  {
    name: "Operations Portal",
    org: "CedarWave Technologies",
    summary:
      "Internal portal for managing customer orders, service requests, and daily processing activities.",
    points: [
      "Backend REST services in Java 17 and Spring Boot with service-layer validations and reusable Java components.",
      "JSP pages, Bootstrap, and JavaScript interfaces wired to REST services, handling responses and validation messages.",
    ],
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "JSP", "Bootstrap"],
  },
  {
    name: "Case Management System",
    org: "BluePeak Software Solutions",
    summary:
      "Case management for operations teams to review requests, update details, and track work through stages.",
    points: [
      "Java 17 and Spring Boot components for case creation, status updates, search, and supporting business rules.",
      "Reusable service-layer components kept case-processing logic organized and maintainable across modules.",
    ],
    tags: ["Spring Boot", "REST", "PostgreSQL", "JUnit", "Jira"],
  },
  {
    name: "Customer Account & Service Platform",
    org: "NorthBridge Technology Solutions",
    summary:
      "Platform for internal teams to manage customer profiles, service requests, and account activity.",
    points: [
      "Spring Boot services and REST APIs for customer, account, and service-request workflows, with Hibernate/JPA persistence.",
      "Enhanced existing modules against business requirements while preserving compatibility with established workflows.",
    ],
    tags: ["Java 11/17", "Spring Boot", "Hibernate", "PostgreSQL", "JavaScript"],
  },
  {
    name: "Banking Accounts & Transactions",
    org: "Sagar Soft",
    summary:
      "Banking application covering customer account information and day-to-day transaction workflows.",
    points: [
      "Spring Boot services and REST endpoints for account lookup and transaction processing with consistent validation and exception handling.",
      "Kafka-based asynchronous service communication, with troubleshooting of message-processing issues.",
    ],
    tags: ["Spring Boot", "Oracle", "Kafka", "Hibernate", "JUnit"],
  },
  {
    name: "Slendit",
    org: "E-commerce Rental Platform",
    summary:
      "Rental platform connecting borrowers with product owners across the full reservation lifecycle, from account access through booking and payment.",
    points: [
      "Borrower workflows for registration, sign-in, product selection, and reservations, plus owner listing and request approval.",
      "Administrative features for managing users and products, configuring settings, and supporting scheduled batch operations.",
      "REST backend in a microservices environment using Kafka, Splunk, and AWS-related tooling for debugging and releases.",
    ],
    tags: ["Java", "Spring", "Microservices", "Kafka", "REST", "Splunk", "AWS"],
  },
  {
    name: "Inventory & Leave Management",
    org: "Rajasri Infotech",
    summary:
      "Java web applications for inventory records and employee/leave management workflows.",
    points: [
      "JSP forms with Servlet request handling and JDBC persistence for end-to-end application workflows.",
      "Employee records, leave requests, approval status, and product and stock information with client- and server-side validation.",
    ],
    tags: ["Core Java", "JSP", "Servlets", "JDBC", "MySQL", "Tomcat"],
  },
];

export const education = {
  degree: "Master of Science in Computer Science and Engineering",
  school: "University of North Texas",
  location: "Denton, TX",
};
