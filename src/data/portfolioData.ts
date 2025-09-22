import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: "Ankit Kumar Singh",
    // A short, impactful intro for the Home section
    aboutHome: "A creative Backend Developer with a passion for building robust and scalable web applications. I turn complex problems into elegant solutions.",

    // A more detailed narrative for the About Me section
    aboutPage: "Hello! I'm Ankit, a backend developer based in Delhi, India. My journey into technology began with a deep curiosity for how things work, which led me to pursue a B.TECH in Mathematics and Computing. Today, I specialize in building high-performance backend systems using a variety of technologies including Java Spring Boot, ASP.NET Core, and Golang. I thrive on the challenges of system integration, API design, and creating secure, scalable microservices. Beyond coding, I'm passionate about exploring new technologies, contributing to open-source projects, and continuously learning in this ever-evolving field.",

    projects: [
        {
            id: "ecommerce-product-management",
            title: "E-Commerce PRODUCT MANAGEMENT SYSTEM",
            description: "A comprehensive e-commerce backend designed to manage a large inventory of products with a focus on high performance and scalability. This project features a complete RESTful API for product management, user authentication, and order processing. The system is containerized with Docker for easy deployment and scalability, and it includes a secure JWT-based authentication system with role-based access control to protect sensitive endpoints.",
            technologies: ["ASP.NET Core 8", "PostgreSQL", "Docker", "JWT", "Swagger", "REST APIs", "ReactJS"],
            sourceCode: "https://github.com/THE-AkS-21/E-Commerce_Product_Management_System",
            gallery: [
                "/src/assets/gallery/ecommerce-1.png",
                "/src/assets/gallery/ecommerce-2.png",
                "/src/assets/gallery/ecommerce-3.png",
                "/src/assets/gallery/ecommerce-4.png",
                "/src/assets/gallery/ecommerce-5.png",
                "/src/assets/gallery/ecommerce-6.png",
                "/src/assets/gallery/ecommerce-7.png",
                "/src/assets/gallery/ecommerce-8.png",
                "/src/assets/gallery/ecommerce-9.png",
                "/src/assets/gallery/ecommerce-10.png",
                "/src/assets/gallery/ecommerce-11.png"
            ],
            readme: `
# 🛒 E-Commerce Product Management System
                
A robust **Product Management System** built using **ASP.NET Core 8** for the backend and **React 18 + Vite + Tailwind CSS** for the frontend, with **PostgreSQL** as the database. This system allows admins and business users to manage product listings, categories, inventory, etc, efficiently.
                
---
                
## 📖 About
                
This project aims to provide a clean, scalable, and modular architecture for product management within an e-commerce environment. The system offers APIs for product CRUD operations, search, filtering, and frontend features for listing and managing products visually.
                
---
                
## 🚀 Key Features
                
✅ Clean, maintainable **ASP.NET Core 8 backend** with direct PostgreSQL access (no ORM)  
✅ Fully responsive **React 18 frontend** styled with **Tailwind CSS** ✅ **Product search** by name  
✅ **Filter products** by category  
✅ View **product details** ✅ Add, update, and delete products from the admin panel  
✅ Clean, stateless **RESTful APIs** ✅ **Dockerized full-stack deployment** ✅ Modern frontend built with **Vite** for blazing-fast development
                
---
                
## 🛠️ Tech Stack
                
- **Backend:** ASP.NET Core 8 Web API, Npgsql, C#
- **Frontend:** React 18, Vite, Tailwind CSS
- **Database:** PostgreSQL
- **Containerization:** Docker
- **API Testing:** Postman
`
        },
        {
            id: "movie-review-app",
            title: "MOVIE REVIEW APP",
            description: "A full-stack web application that allows users to browse, search, and review movies. The backend, built with Java Spring Boot, provides a robust API for managing movie data, user reviews, and ratings. The application features a clean and intuitive user interface built with React, and it uses MongoDB for flexible and efficient data storage.",
            technologies: ["Java Spring Boot", "MongoDB", "ReactJS", "REST APIs", "JWT"],
            sourceCode: "https://github.com/THE-AkS-21/Movie-Review",
            gallery: [],
            readme: ``
        },
        {
            id: "task-manager",
            title: "TASK MANAGER",
            description: "A lightweight and efficient task management application built with a Golang backend. This project focuses on providing fast and reliable CRUD operations for managing tasks and to-do lists. The simple and clean frontend is built with React, and the application uses MongoDB for data persistence.",
            technologies: ["Golang", "MongoDB", "ReactJS", "REST APIs"],
            sourceCode: "https://github.com/THE-AkS-21/Task-Manager",
            gallery: [],
            readme: ``
        }
    ],
    skills: [
        {
            category: "Programming Languages",
            technologies: ["Java", "C#", "Golang", "C/C++", "TypeScript", "Node.js", "JavaScript", "Python", "SQL"]
        },
        {
            category: "Back-End Development",
            technologies: ["RESTful & Private APIs", "Express.js", "Spring Boot", "ASP.NET Core", "Microservices", "JWT", "System Design"]
        },
        {
            category: "Databases",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Database Design", "Query Optimization"]
        },
        {
            category: "DevOps & Tools",
            technologies: ["Docker", "Git", "Kubernetes", "Postman", "CI/CD", "Swagger", "GitHub Actions"]
        },
        {
            category: "Front-End Development",
            technologies: ["React.js", "Next.js (Familiarity)", "Tailwind CSS", "HTML", "CSS", "JavaScript"]
        },
        {
            category: "Cloud & Other",
            technologies: ["AWS (EC2, S3, RDS)", "System Architecture", "Agile Methodologies"]
        }
    ],
    workExperience: [
        {
            role: "SDE Intern",
            company: "Bombay Shaving Company",
            period: "Jul 2025 – Sept 2025",
            description: "As a backend engineering intern, I was responsible for designing and implementing new features for the company's core e-commerce platform. I worked extensively with C# and ASP.NET Core to build and maintain RESTful APIs, and I designed and optimized PostgreSQL database schemas to ensure high performance and data integrity. I also played a key role in the company's DevOps processes, using Docker and CI/CD pipelines to automate deployments and improve system reliability.",
            technologies: ["C#", "ASP.NET Core", "React.js", "PostgreSQL", "Docker", "CI/CD", "Agile"]
        },
        {
            role: "Frontend Developer",
            company: "Garg Defence and Aerospace Pvt. Ltd.",
            period: "May 2024 – Jul 2024",
            description: "In this role, I focused on building a responsive and user-friendly frontend for an internal data visualization tool. I collaborated closely with stakeholders to gather requirements and translate them into technical specifications. Using React and Tailwind CSS, I developed a modern and intuitive user interface that allowed for seamless interaction with complex datasets.",
            technologies: ["React", "Tailwind CSS", "JavaScript", "REST APIs", "Figma"]
        }
    ],
    education: [
        {
            title: "Secondary School",
            degree: "Physics, Chemistry, and Mathematics",
            institution: "Kendriya Vidyalaya AGCR",
            period: "2018-2020",
            coursework: [],
            location: "Delhi, India",
            logo: "/src/assets/KV.png"
        },
        {
            title: "Bachelor of Technology",
            degree: "B.TECH in Mathematics and Computing",
            institution: "Delhi Technological University",
            period: "2020-2024",
            coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming", "Software Engineering"],
            location: "Delhi, India",
            logo: "/src/assets/DTU.png"
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/THE-AkS-21",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-2a7815206/"
    }
};