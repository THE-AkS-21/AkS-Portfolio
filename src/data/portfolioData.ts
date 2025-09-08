import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: "Ankit Kumar Singh",
    about: "Proficient in backend development using Java Spring Boot, ASP.NET Core 8, and Golang, delivering scalable RESTful APIs and microservices. Experienced in implementing JWT authentication, role-based access control (RBAC), and API documentation using Swagger (OpenAPI). Skilled in working with relational and NoSQL databases including PostgreSQL, MongoDB, MySQL, and SQL Server. Familiar with ReactJS, Tailwind CSS, and integrating responsive frontends for full-stack applications. Hands-on experience with Docker, Docker Compose, and Kubernetes, with exploratory work in AI agents and cloud-native deployments.",
    projects: [
        {
            title: "E-Commerce PRODUCT MANAGEMENT SYSTEM",
            description: "Architected and built a scalable backend with RESTful APIs using ASP.NET Core, designing the PostgreSQL schema for optimal query performance and data integrity. Implemented secure system integration points with JWT authentication and role-based access control, documenting all endpoints with Swagger (OpenAPI). Automated multi-service deployment with Docker Compose, ensuring a reliable and reproducible environment.",
            technologies: ["ASP.NET Core 8", "PostgreSQL", "Docker", "JWT", "REST APIs", "ReactJS"],
            sourceCode: "https://github.com/THE-AkS-21/E-Commerce_Product_Management_System"
        },
        {
            title: "MOVIE REVIEW APP",
            description: "Engineered a backend system with RESTful APIs using Java Spring Boot, demonstrating core principles of API security and backend service development for integration. Implemented core features for a React frontend, ensuring efficient data exchange and API compatibility.",
            technologies: ["Java Spring Boot", "MongoDB", "ReactJS", "REST APIs", "JWT"],
            sourceCode: "https://github.com/THE-AkS-21/Movie-Review"
        },
        {
            title: "TASK MANAGER",
            description: "Developed a full-stack application with a RESTful API backend in Golang, focusing on efficient CRUD operations and backend performance for task management.",
            technologies: ["Golang", "MongoDB", "ReactJS", "REST APIs"],
            sourceCode: "https://github.com/THE-AkS-21/Task-Manager"
        }
    ],
    skills: [
        {
            category: "Programming Languages",
            technologies: ["Java", "C#", "Golang", "C/C++", "TypeScript", "Node.js", "JavaScript", "Python"]
        },
        {
            category: "Back-End",
            technologies: ["RESTful & Private APIs", "Express.js", "Spring Boot", "ASP.NET Core", "Microservices", "JWT"]
        },
        {
            category: "Databases",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"]
        },
        {
            category: "DevOps & Tools",
            technologies: ["Docker", "Git", "Kubernetes", "Postman", "CI/CD", "Swagger"]
        },
        {
            category: "Front-End",
            technologies: ["React.js", "Next.js (Familiarity)", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            category: "Cloud & Others",
            technologies: ["AWS (Basics)", "System Architecture"]
        }
    ],
    workExperience: [
        {
            role: "SDE intern",
            company: "Bombay Shaving Company",
            period: "Jul 2025 – Sept 2025",
            description: "Designed and developed backend services focused on system integration and scalable data processing, ensuring reliable data flow between internal platforms. Built and maintained robust, backend-oriented features using C# ASP.NET Core, designing and querying PostgreSQL databases to support high-performance operations. Contributed to CI/CD pipelines and utilized Docker for containerization, improving system reliability and ensuring delivery of clean, maintainable code.",
            technologies: ["ASP.NET Core", "PostgreSQL", "Docker", "CI/CD"]
        },
        {
            role: "Frontend Development",
            company: "Garg Defence and Aerospace Pvt. Ltd.",
            period: "May 2024 – Jul 2024",
            description: "Collaborated with stakeholders to develop a responsive frontend application using ReactJS, demonstrating an understanding of frontend needs for effective API integration. Optimized frontend components for performance and seamless data interaction with backend services.",
            technologies: ["React", "Tailwind CSS", "REST APIs"]
        }
    ],
    education: [
        {
            title: "Schooling",
            degree: "Physics, Chemistry, and Mathematics",
            institution: "Kendriya Vidyalaya AGCR",
            period: "",
            coursework: []
        },
        {
            title: "Graduation",
            degree: "B.TECH in Mathematics and Computing",
            institution: "Delhi Technological University",
            period: "2020-2024",
            coursework: ["Data Structures", "Algorithms", "Operating System", "Database Management System", "Computer Networks"]
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/THE-AkS-21",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-2a7815206/"
    }
};