import cvPdf from '../assets/Dilsha Jayasekara.CV.pdf';
import rabbitEcommerceImg from '../assets/rabbit-ecommerce.png';
import playnexImg from '../assets/playnex.png';
import sportivoImg from '../assets/sportivo.png';
import kelaniyaImg from '../assets/Kelaniya.png';
import tccImg from '../assets/images.jpg';
import bookfairImg from '../assets/bookfair.png';

export const heroData = {
  greeting: "WELCOME TO MY PORTFOLIO",
  firstName: "Dilsha",
  lastName: "Jayasekara",
  roles: ["BUILDING DIGITAL EXPERIENCES"],
  description: "I am a passionate software engineer with a knack for building scalable web applications. I love combining modern aesthetics with robust backends to create delightful user experiences.",
  primaryCtaText: "View My Work",
  primaryCtaLink: "#projects",
  secondaryCtaText: "Download CV",
  secondaryCtaLink: cvPdf,
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Dilsha0412", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dilsha-jayasekara-493127335/", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://x.com/dilsha0412", icon: "FaTwitter" },
  ]
};

export const aboutData = {
  title: "About Me",
  subtitle: "Who am I?",
  paragraphs: [
    "I am an undergraduate Software Engineering student at the University of Kelaniya with a strong passion for becoming a Full Stack Developer. I enjoy building modern, responsive, and user-friendly web applications using technologies such as React, Node.js, and Tailwind CSS.",
    "I am particularly interested in both frontend and backend development, and I continuously work on improving my skills by developing real-world projects and exploring new technologies. I am motivated, detail-oriented, and always eager to learn and adapt in the fast-evolving tech industry.",
    "My goal is to create impactful digital solutions that solve real-world problems while delivering great user experiences."
  ],
  stats: [
    { value: "4+", label: "Projects Completed" }
  ]
};

export const educationData = {
  title: "EDUCATION",
  education: [
    {
      id: 1,
      degree: "BSc (Hons) in Software Engineering",
      institution: "University of Kelaniya",
      date: "2024 - Present",
      icon: "UOK", // Placeholder for icon selection
      image: kelaniyaImg,
      details: [
        "Current GPA: 3.61/4.0",
        "Key Domains: Data Science, Net-Centric Web Applications, Health Informatics"
      ]
    },
    {
      id: 2,
      degree: "G.C.E. Advanced Level in Physical Science",
      institution: "Telijjawila Central College, Matara",
      date: "Completed",
      icon: "TCC",
      image: tccImg,
      details: [
        "Z-score: 1.5045"
      ]
    }
  ]
};

export const skillsData = {
  subtitle: "These are the technologies and tools I work with to bring ideas to life.",
  categories: [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: "SiReact", color: "#61DAFB" },
        { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38BDF8" },
        { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
        { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", icon: "SiNodedotjs", color: "#68A063" },
        { name: "Express.js", icon: "FaExpress", color: "#ffffff" },
        { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
        { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
        { name: "Python", icon: "SiPython", color: "#F7C948" },
        { name: "Java", icon: "FaJava", color: "#f89820" },
      ]
    },
    {
      name: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
        { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
        { name: "Git", icon: "SiGit", color: "#F05032" },
        { name: "GitHub", icon: "SiGithub", color: "#ffffff" },
        { name: "Figma", icon: "SiFigma", color: "#F24E1E" },
        { name: "VS Code", icon: "SiVisualstudiocode", color: "#007ACC" },
      ]
    }
  ]
};

export const projectsData = {
  title: "Featured Projects",
  categories: ["All", "Full Stack", "Frontend"],
  projects: [
    {
      id: 1,
      title: "ELIX - Clothing E-Commerce Store",
      category: "Full Stack",
      description: "A premium full-stack clothing e-commerce web application built with the MERN stack. Designed for browsing modern collections, managing inventory, and securing user purchases with a seamless interface.",
      image: rabbitEcommerceImg,
      tech: ["React", "Tailwind", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Dilsha0412/Rabbit-Ecommerce.git",
      liveUrl: "https://elix-frontend.vercel.app/"
    },
    {
      id: 2,
      title: "Colombo Book Fair Stall Reservation System",
      category: "Full Stack",
      description: "A collaborative full-stack group project designed to automate stall bookings at the Colombo International Book Fair. Features an interactive floor plan mapper, real-time reservation systems, and automated booking receipts.",
      image: bookfairImg,
      tech: ["React", "Java", "MySQL", "Node.js"],
      githubUrl: "https://github.com/Dilsha0412/sa-project",
      //liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "PlayNex - Microservices Gaming Platform",
      category: "Full Stack",
      description: "A high-performance gaming platform engineered with a MERN stack and a microservices architecture. It features highly decoupled and scalable services for game catalogs, user authentication, and transaction processing, presented through a sleek cyber-gaming dashboard.",
      image: playnexImg,
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Microservices"],
      githubUrl: "https://github.com/Dilsha0412/playnex-microservices",
      //liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Sportivo Website",
      category: "Frontend",
      description: "A modern sports website featuring an energetic UI and dynamic design, highlighting sports gear and athletic achievements.",
      image: sportivoImg,
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Dilsha0412/Sportivo-Website",
      //liveUrl: "https://example.com"
    },

  ]
};

export const contactData = {
  title: "Get In Touch",
  subtitle: "Have a project in mind or just want to say hi? I'd love to hear from you.",
  email: "dilshajayasekara2024@gmail.com",
  phone: "+94 77 522 7202",
  location: "Matara, Sri Lanka",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Dilsha0412", icon: "FaGithub" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dilsha-jayasekara-493127335/", icon: "FaLinkedin" },
    { name: "Twitter", url: "https://x.com/dilsha0412", icon: "FaTwitter" },
  ]
};

export const footerData = {
  year: new Date().getFullYear(),
  name: "Dilsha Jayasekara",
  links: [
    { name: "Home", url: "#" },
    { name: "About", url: "#about" },
    { name: "Projects", url: "#projects" },
  ]
};

export const blogData = {
  title: "Blog",
  articles: [
    {
      id: 1,
      date: "2 hours ago",
      readTime: "6 min read",
      title: "How AI Is Changing Software Engineering in 2026 (And What Students Must Do)",
      description: "An exploration of how Artificial Intelligence is reshaping the software development lifecycle, from automated code generation to intelligent debugging, and what current students should focus on to stay relevant.",
      tags: ["AI", "Software Engineering", "Future Trends", "Education"],
      link: "https://medium.com/@dilshajayasekara/how-ai-is-changing-software-engineering-in-2026-and-what-students-must-do-b49e42c703ab"
    },
    {
      id: 2,
      date: "May 20, 2026",
      readTime: "5 min read",
      title: "How to Structure a Scalable React Project: 2026 Guide",
      description: "A comprehensive guide on structuring React projects for maximum scalability and maintainability, covering modern directory layouts, state management separation, and robust module design.",
      tags: ["React", "Architecture", "Scalability", "Web Development"],
      link: "https://medium.com/@dilshajayasekara/how-to-structure-a-scalable-react-project-2026-guide-ffb00df1b7c5"
    },
    {
      id: 3,
      date: "May 7, 2026",
      readTime: "5 min read",
      title: "JWT Authentication Done Right: The Ultimate Guide to Mistakes and Best Practices",
      description: "A comprehensive guide on implementing JWT authentication correctly, highlighting common mistakes and outlining best practices for secure applications.",
      tags: ["JWT", "Authentication", "Security", "Best Practices"],
      link: "https://medium.com/@dilshajayasekara/jwt-authentication-done-right-the-ultimate-guide-to-mistakes-and-best-practices-9fd28dc713d7"
    },
    {
      id: 4,
      date: "Jun 23, 2025",
      readTime: "2 min read",
      title: "Building My First Simple OS in Assembly: Dill OS",
      description: "Creating an operating system is one of the most exciting challenges for a systems programmer. As a passion project, I built a tiny but fully functional OS named Dill OS, written entirely in x86 assembly. It runs on real hardware (via BIOS) and can be tested using emulators like QEMU.",
      tags: ["Assembly", "Operating System", "x86", "QEMU"],
      link: "https://medium.com/@dilshajayasekara/%EF%B8%8F-building-my-first-simple-os-in-assembly-dill-os-c18d64d50505"
    }
  ]
};
