import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: "Ankit Kumar Singh",
    aboutHome: "A creative Full-Stack Developer with a passion for building robust and scalable web applications. I turn complex problems into elegant solutions.",
    aboutPage: "Hello! I'm Ankit, a full-stack developer based in Delhi, India. My journey into technology began with a deep curiosity for how things work, which led me to pursue a B.TECH in Mathematics and Computing. Today, I specialize in building high-performance backend systems using Java Spring Boot, ASP.NET Core, and Golang, and creating engaging user experiences with React and Tailwind CSS. I thrive on the challenges of system integration, API design, and creating secure, scalable microservices. Beyond coding, I'm passionate about exploring new technologies and continuously learning in this ever-evolving field.",

    projects: [
        {
            id: "analytical-dashboard",
            title: "Analytical Dashboard",
            description: "Engineered a full-stack analytics dashboard using Python and Streamlit to provide real-time visualization of order performance metrics from a PostgreSQL database, featuring a custom, mobile-responsive UI with interactive Plotly charts.",
            technologies: ["Python", "Streamlit", "Pandas", "SQLAlchemy", "Plotly", "PostgreSQL"],
            sourceCode: "https://github.com/THE-AkS-21/streamlit_dashboard",
            readme: `
# Analytical Dashboard

Engineered a full-stack analytics dashboard using Python and Streamlit to provide real-time visualization of order performance metrics (by SKU, category, date) from a PostgreSQL database.
`
        },
        {
            id: "ecommerce-product-management",
            title: "E-Commerce Product Management System",
            description: "Architected a scalable backend with RESTful APIs using ASP.NET Core and designed a PostgreSQL schema for optimal performance. Implemented JWT authentication, role-based access control, and automated deployment with Docker Compose.",
            technologies: ["ASP.NET Core 8", "PostgreSQL", "Docker", "JWT", "Swagger", "ReactJS"],
            sourceCode: "https://github.com/THE-AkS-21/E-Commerce_Product_Management_System",
            gallery: [
                "/src/assets/gallery/ecommerce-1.png",
                "/src/assets/gallery/ecommerce-2.png",
                "/src/assets/gallery/ecommerce-3.png",
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
            title: "Movie Review App",
            description: "Engineered a backend system with RESTful APIs using Java Spring Boot, demonstrating core principles of API security and backend service development. Implemented features for a React frontend, ensuring efficient data exchange.",
            technologies: ["Java Spring Boot", "MongoDB", "ReactJS", "REST APIs", "JWT"],
            sourceCode: "https://github.com/THE-AkS-21/Movie-Review",
            readme: `
# Movie Review Application
A full-stack movie review application built with React, Spring Boot, and PostgreSQL. Users can discover movies, write reviews, rate movies, and watch trailers in a modern, responsive interface.
`
        },
        {
            id: "task-manager",
            title: "Task Manager",
            description: "Developed a full-stack application with a RESTful API backend in Golang, focusing on efficient CRUD operations and backend performance for task management.",
            technologies: ["Golang", "MongoDB", "ReactJS", "REST APIs"],
            sourceCode: "https://github.com/THE-AkS-21/Task-Manager",
            readme: ``
        },
        {
            id: "portfolio",
            title: "Personal Portfolio",
            description: "Designed and deployed a fully responsive personal portfolio website using ReactJS and Tailwind CSS, hosted on GitHub Pages for seamless deployment and accessibility.",
            technologies: ["ReactJS", "Tailwind CSS", "Github Pages"],
            sourceCode: "https://github.com/THE-AkS-21/Portfolio",
            liveDemo: "https://the-aks-21.github.io/Portfolio",
            readme: ``
        },
        {
            id: "path-finder",
            title: "Path Finder for Road Networks",
            description: "Improved pathfinding efficiency by 30% by implementing Dijkstra, A*, BFS, and DFS algorithms to optimize navigation systems for robotics and autonomous vehicles.",
            technologies: ["React.JS", "Graphs"],
            sourceCode: "https://github.com/THE-AkS-21/PathFinder",
            liveDemo: "https://the-aks-21.github.io/PathFinder",
            readme: ``
        },
    ],
    skills: [
        {
            category: "Programming Languages",
            technologies: ["Java", "C#", "Golang", "C/C++", "TypeScript", "Node.js", "JavaScript", "Python", "SQL"]
        },
        {
            category: "Back-End Development",
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
            category: "Front-End Development",
            technologies: ["React.js", "Next.js (Familiarity)", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            category: "Cloud & Other",
            technologies: ["AWS (Basics)", "System Architecture"]
        }
    ],
    workExperience: [
        {
            role: "Software Engineer Intern",
            company: "Bombay Shaving Company",
            period: "Jul 2025 – Sept 2025",
            description: "Engineered scalable backend services using C# and ASP.NET Core for critical system integrations. Developed an internal data analytics dashboard using Python and Streamlit to visualize real-time operational metrics, and contributed to CI/CD pipelines with Docker.",
            technologies: ["C#", "ASP.NET Core", "Python", "Streamlit", "PostgreSQL", "Docker", "CI/CD"]
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
            coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming"],
            location: "Delhi, India",
            logo: "/src/assets/DTU.png"
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/THE-AkS-21",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-535341203/"
    }
};