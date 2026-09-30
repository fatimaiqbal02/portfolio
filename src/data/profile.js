// ============================================================
//  PROFILE DATA 
// ============================================================

export const profile = {
  name: "Fatima Iqbal Mirza",
  title: "Software Engineer",
  location: "Lahore, Pakistan",
  phones: ["0300-9403133"],
  email: "fatimaiqbalmirza002@gmail.com",
  // Path to your resume file placed inside the /public folder
  resumeFile: "/resume/Fatima's CV.pdf",
  summary:
    "Software engineer with hands on experience building responsive web and mobile applications using React, Next.js, TypeScript, JavaScript, React Native and the MERN stack. I build dynamic, responsive, user-friendly and visually consistent interfaces, love learning new technologies, and enjoy collaborating with people who share my enthusiasm for innovation.",
  highlights: [
    "Responsive web & mobile development",
    "Strong problem solver & quick learner",
    "Passionate about clean, maintainable code",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/fatimaiqbal02" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/fatima-iqbal-1b47a5269/" },
    { label: "LeetCode", url: "https://leetcode.com/Fatima_Iqbal/" },
  ],
};

// ============================================================
//  SKILLS
// ============================================================

export const skills = [
  {
    category: "Frontend",
    items: [
      "React.js", "Next.js", "React Native", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "Redux", "React Query", "Context API",
    ],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Bootstrap", "ShadCN/UI", "Figma", "Canva"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Socket.io", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Microsoft SQL Server", "Stored Procedures", "Indexes"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C#", "C++", "C", "Python", "Java"],
  },
  {
    category: "Tools & Testing",
    items: ["Git", "GitHub", "Postman", "Jira", "SonarQube", "Selenium", "OWASP ZAP"],
  },
];

// ============================================================
//  EDUCATION
// ============================================================

export const education = [
  {
    school: "COMSATS University Islamabad, Lahore Campus",
    degree: "Bachelors in Software Engineering",
    period: "Feb 2021 - Feb 2025",
    detail: [
      "Cumulative GPA: 3.56/4.00",
      "Campus Bronze Medalist",
    ],
  },
  {
    school: "Punjab Group of Colleges",
    degree: "Intermediate - FSc Pre-Medical",
    period: "2018 - 2020",
    detail: [
      "Grade: A+",
      "Marks: 986/1100",
      "Awarded a 90% scholarship based on matriculation exam excellence",
    ],
  },
  {
    school: "Unique Group of Institutions",
    degree: "Matriculation",
    period: "2016 - 2018",
    detail: [
      "Grade: A+",
      "Marks: 1053/1100",
      "Earned monthly class-level scholarships (Rs. 1500-2000) for top monthly test performance",
      "Received position-based class scholarships twice",
    ],
  },
];

// ============================================================
//  ACHIEVEMENTS  (badge cards — icon + title + subtitle)
// ============================================================

export const achievements = [
  {
    icon: "🥉",
    title: "Campus Bronze Medalist",
    subtitle: "COMSATS University · BSSE",
  },
  {
    icon: "🎓",
    title: "90% Merit Scholarship",
    subtitle: "Intermediate (FSc) — for matriculation exam excellence",
  },
  {
    icon: "🏆",
    title: "Position-Based Scholarships",
    subtitle: "Matriculation — awarded twice for class position",
  },
  {
    icon: "💸",
    title: "Monthly Merit Scholarships",
    subtitle: "Matriculation — Rs. 1500-2000 for top monthly test results",
  },
  {
    icon: "🦈",
    title: "Pull Shark",
    subtitle: "GitHub Achievement — earned twice (x2)",
  },
  {
    icon: "🤠",
    title: "Quickdraw",
    subtitle: "GitHub Achievement",
  },
  {
    icon: "🎯",
    title: "YOLO",
    subtitle: "GitHub Achievement",
  },
];

// ============================================================
//  EXPERIENCE
// ============================================================

export const experience = [
  {
    role: "Software Engineer (MERN Stack)",
    company: "Lyrics Meaning Website",
    location: "Lahore, Pk",
    period: "Dec 2024 - July 2025",
    points: [
      "Architected and developed a production-ready full-stack music platform using Next.js, TypeScript, MongoDB and Mongoose.",
      "Implemented secure authentication and authorization using JWT, bcrypt, Next.js Middleware and protected API routes.",
      "Engineered scalable RESTful APIs for user management, song retrieval, search, ratings, comments and interactions.",
      "Built advanced SEO infrastructure including XML sitemaps for all pages.",
      "Delivered a fully responsive, accessible UI and managed production deployments via FTP with the QA team.",
    ],
  },
  {
    role: "Freelance Software Engineer (Self-Employed)",
    company: "Freelancing",
    location: "Remote",
    period: "Jan 2025 – Present",
    points: [
      "Built responsive web applications using React and JavaScript, developing and integrating frontend components with RESTful APIs and backend services.",
      "Developed and maintained websites using React, Java script, NextJs adhering to modern design principles and responsive web practices.",
      "Stayed updated on industry trends and best practices through continuous learning.",
      "Utilized skills in React, Javascript, Nextjs, Typescript, Redux, Tailwind CSS, ShadCN/UI, CSS, Api testing and integration.",
    ],
  },
];

// ============================================================
//  PROJECTS
// ============================================================

export const projects = [
  {
    title: "Travigo — Tour and Travel System ",
    description:
      "A tour and travel web application made with MERN stack using reactjs for frontend and nodejs, expressjs, mongodb for backend. It helps to book the tours for fictional tour company. It enables users to browse, search, and book tours with secure authentication.",
    technologies: ["React.js", "JavaScript", "MongoDB", "Nodejs", "JWT", "REST APIs", "Express.js"],
    image: "/projects/mern-travel-app.png",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/mern-travel-app",
  },
  {
    title: "Lyrics Hub — Song Lyrics & Meaning Platform",
    description:
      "A production-ready full-stack music platform built with Next.js and TypeScript where users discover songs and explore the meaning behind their lyrics. It features secure JWT-based authentication with protected middleware routes, ratings and comments, keyword-driven search with dynamic routing, and an SEO layer with dynamic metadata generation and XML sitemaps. Server-side rendering keeps pages fast and search-engine friendly across all devices.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "REST APIs", "SEO"],
    image: "/projects/lyrics-hub.png",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/nextjs-lyrics-hub",
  },
  {
    title: "Chatter Hub — Real-Time Chat Application",
    description:
      "A real-time chat application enabling multiple users to communicate instantly over WebSocket connections. Powered by Node.js and Socket.io, it supports bi-directional event-based messaging, live broadcasting to all participants, dynamic tracking of active users, and a clean, responsive interface designed for a minimalistic user experience.",
    technologies: ["Node.js", "Socket.io", "JavaScript", "HTML5", "CSS3", "WebSockets"],
    image: "/projects/chat-application.png",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/nodejs-chatter-hub",
  },
  {
    title: "Doctor Assistant — Healthcare Web & Mobile App",
    description:
      "A cross-platform healthcare application (final year project) that helps patients find doctors, book appointments, manage medical histories and hold secure consultations. On the practitioner side it streamlines clinical workflows by automating tasks such as generating medical records through voice recognition. The system spans a web frontend, a mobile client and a backend API working together as one connected platform.",
    technologies: ["React Native", "React.js", "Django", "PostgreSQL", "Ngrok", "WebRTC"],
    image: "/projects/doctor-assistant.jpeg",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/doctor-assistant",
  },
  {
    title: "NewsSphere — News Application ",
    description:
      "A responsive React.js news application that delivers the latest headlines across multiple categories using the NewsAPI. It features infinite scrolling, category-based navigation, loading indicators, and a clean, modern interface. Users can read article summaries and seamlessly navigate to the original news source for the complete story.",
    technologies: ["React.js", "CSS3", "JavaScript", "Bootstrap 5", "NewsAPI" , "Responsive Design"],
    image: "/projects/news-sphere.png",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/react-news-app",
  },
  {
    title: "GymFit — Gym Landing Page",
    description:
      "A polished, fully responsive landing page for a fictional gym brand. It combines a clean modern layout with smooth scroll animations and an interactive video slider to create an engaging first impression. Built from scratch with semantic HTML, CSS and vanilla JavaScript, it demonstrates strong attention to visual detail and cross-device responsiveness.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/projects/gymfit-landing-page.png",
    video: "",
    liveUrl: "https://gymfit-landing-page.netlify.app/",
    codeUrl: "https://github.com/fatimaiqbal02/gymfit-landing-page",
  },
  {
    title: "CNN Website Clone",
    description:
      "A responsive clone of the CNN homepage that faithfully replicates the look, feel and layout of the original news site. Built with HTML, CSS and JavaScript, it adapts seamlessly across screen sizes using media queries and Flexbox, and layers in dynamic, interactive behavior with clean, maintainable code.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Flexbox", "Media Queries"],
    image: "/projects/cnn-clone.png",
    video: "",
    liveUrl: "https://cnn-website-clone.tiiny.site/",
    codeUrl: "https://github.com/fatimaiqbal02/cnn-website-clone",
  },
  {
    title: "MERN Events App — Event Management System",
    description:
      "A comprehensive full-stack event management system built on the MERN stack, split into User and Admin modules. Users can browse events, view venue details, leave reviews and book specific time slots with dynamic per-guest pricing and automatic double-booking prevention. Admins get a dedicated panel with full CRUD control over users, events, timeslots, reviews and bookings. Security is handled with JWT authentication, bcrypt password hashing and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/mern-events-app",
  },
  {
    title: "Node.js Practice Codes",
    description:
      "A structured collection of Node.js practice work covering core modules and common APIs (File System, HTTP, Events), Express.js routing and middleware, JWT-based authentication and authorization, asynchronous programming with Promises and async/await, and MongoDB integration. Organized into clear modules that document a deep, hands-on exploration of backend development.",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/nodejs-practice-codes",
  },
  {
    title: "React.js Practice Codes",
    description:
      "A curated record of React learning built through hands-on code challenges and exercises. It covers React fundamentals, state management, component composition and hooks, with each module neatly organized and well-commented. The repository reflects a disciplined approach to mastering dynamic, interactive user interfaces.",
    technologies: ["React.js", "JavaScript", "Hooks", "Component Architecture"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/reactjs-practice-codes",
  },
  {
    title: "CSS Snippets",
    description:
      "A personally crafted collection of reusable CSS snippets that add captivating visual elements to web projects — including gradient buttons, landing page styles, parallax effects and navigation bars. Each design is built with attention to detail and demonstrates practical, production-ready styling techniques.",
    technologies: ["CSS3", "HTML5", "Animations", "UI Design"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/css-snippets",
  },
  {
    title: "JavaScript Practice Codes",
    description:
      "A comprehensive set of JavaScript practice implementations spanning variables and data types, functions, arrays and objects, loops, the Math library, JSON handling, and DOM manipulation with events and timers. Neatly organized and well-documented, it captures a thorough, hands-on journey through core JavaScript concepts.",
    technologies: ["JavaScript", "DOM", "JSON", "HTML5"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/javascript",
  },
  {
    title: "CSS Practice Codes",
    description:
      "An in-depth collection of CSS practice work covering selectors, size units, media queries, the box model, layouts, transitions and animations, CSS Grid, Flexbox and positioning. It also includes small styled projects such as a gym website and a food website, showcasing well-organized, responsive styling across many topics.",
    technologies: ["CSS3", "HTML5", "Flexbox", "CSS Grid", "Responsive Design"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/css-practice",
  },
  {
    title: "DSA Practice — Data Structures & Algorithms",
    description:
      "A well-structured collection of Data Structures and Algorithms implemented in C during the BSSE program. It covers arrays, linked lists, stacks, queues, trees, heaps and graphs, alongside searching algorithms (binary and linear search) and sorting algorithms (bubble, quick, merge, insertion and selection sort). The code is neat, organized and built to reinforce strong problem-solving fundamentals.",
    technologies: ["C", "Data Structures", "Algorithms", "Problem Solving"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/dsa-practice",
  },
  {
    title: "Operating Systems Practice",
    description:
      "A deep, hands-on collection of Operating System programming in C, covering inter-process communication through shared memory, anonymous and named pipes, and sockets (single and multi server/client). It also implements the fork() and exec() system calls, System V semaphores, the Dining Philosophers problem using semaphores and Pthreads, multithreading, and little-endian/big-endian concepts — all written in a clean, well-organized manner.",
    technologies: ["C", "Pthreads", "Semaphores", "Sockets", "IPC", "Linux"],
    image: "",
    video: "",
    liveUrl: "",
    codeUrl: "https://github.com/fatimaiqbal02/operating-systems",
  },
];
