import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    name: "Ankit Kumar Singh",
    aboutHome: "A creative Full-Stack Developer passionate about building robust, scalable web applications and turning complex problems into elegant, efficient solutions.",
    aboutPage: "Hello! I'm Ankit, a full-stack developer based in Delhi, India. My journey into technology began with a deep curiosity for how things work, which led me to pursue a B.TECH in Mathematics and Computing. Today, I specialize in architecting high-performance backend systems using Java Spring Boot, ASP.NET Core, and Golang, while also creating engaging user experiences with React and Tailwind CSS. I thrive on the challenges of system integration, API design, and building secure, scalable microservices. Beyond coding, I'm passionate about exploring emerging technologies and contributing to the open-source community.",

    projects: [
        {
            id: "analytical-dashboard",
            title: "Analytical Dashboard",
            description: "Engineered a full-stack analytics dashboard using Python and Streamlit to provide real-time visualization of order performance metrics from a PostgreSQL database, featuring a custom, mobile-responsive UI with interactive Plotly charts.",
            technologies: ["Python", "Streamlit", "Pandas", "SQLAlchemy", "Plotly", "PostgreSQL"],
            sourceCode: "https://github.com/THE-AkS-21/streamlit_dashboard",
            readme: `
# 📊 Streamlit Analytics Dashboard

A modern, responsive Streamlit dashboard designed for Bombay Shaving Company to track and visualize order performance by SKU, category, and date range from a PostgreSQL data source.

## 🚀 Key Features

-   **Custom UI Components**: Includes a custom collapsible sidebar and a fixed navbar with a dynamic toolbar.
-   **Interactive Charts**: Leverages Plotly and streamlit-lightweight-charts for dynamic visualizations of daily order trends.
-   **Dynamic Filtering**: Allows for granular data analysis with filters for category, subcategory, SKU, and date ranges.
-   **Performance Optimized**: Implements strategic caching with \`@st.cache_data\` and \`@st.cache_resource\` to ensure fast query performance, even with large datasets.
-   **Data Export**: Features a one-click "Download CSV" option for offline analysis.
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

A robust Product Management System built with **ASP.NET Core 8** for the backend and **React 18 + Vite** for the frontend, using **PostgreSQL** as the database. This system enables administrators and business users to efficiently manage product listings, categories, and inventory.

## 🚀 Key Features

-   Clean, maintainable **ASP.NET Core 8 backend** with direct PostgreSQL access.
-   Fully responsive **React 18 frontend** styled with **Tailwind CSS**.
-   Comprehensive product management including **search, filtering**, and full **CRUD operations**.
-   Secure, stateless **RESTful APIs** with JWT authentication.
-   **Dockerized** for consistent and reliable full-stack deployment.
`
        },
        {
            id: "movie-review-app",
            title: "Movie Review App",
            description: "Engineered a full-stack movie review application with a Java Spring Boot backend and a React frontend. The application features a robust RESTful API, secure JWT authentication, and a responsive user interface.",
            technologies: ["Java Spring Boot", "MongoDB", "ReactJS", "REST APIs", "JWT"],
            sourceCode: "https://github.com/THE-AkS-21/Movie-Review",
            readme: `
# Movie Review Application

A full-stack movie review application built with React, Spring Boot, and PostgreSQL. Users can discover movies, write reviews, rate movies, and watch trailers in a modern, responsive interface.

## Features
-   **Modern UI/UX**: Clean, responsive design with Material-UI components.
-   **Secure JWT Authentication**: Token-based authentication for protecting user actions.
-   **Comprehensive RESTful API**: A well-defined API for managing users, movies, and reviews.
-   **Dockerized with Nginx**: Ready for production deployment with a multi-container Docker setup and an Nginx reverse proxy.
`
        },
        {
            id: "task-manager",
            title: "Task Manager",
            description: "Developed a lightweight, full-stack application with a RESTful API backend in Golang, focusing on efficient CRUD operations and high performance for task management.",
            technologies: ["Golang", "MongoDB", "ReactJS", "REST APIs"],
            sourceCode: "https://github.com/THE-AkS-21/Task-Manager",
            readme: `
# 📝 Full-Stack Task Manager

A modern, full-stack task management application built with a **Go (Golang)** backend and a **React + TypeScript** frontend. This project features a robust RESTful API for all core task operations and a clean, responsive user interface built with Chakra UI.

## 🚀 Key Features

-   **Full CRUD Functionality**: Create, read, update, and delete tasks.
-   **Efficient Backend**: Built with Go for high performance and concurrency.
-   **Modern Frontend**: A responsive and accessible UI using React and Chakra UI.
`
        },
        {
            id: "path-finder",
            title: "Pathfinding Algorithm Visualizer",
            description: "An interactive web app that visualizes classic pathfinding algorithms like Dijkstra and A*, and demonstrates maze-generation algorithms such as Recursive Division.",
            technologies: ["React.JS", "TypeScript", "Tailwind CSS", "Graphs"],
            sourceCode: "https://github.com/THE-AkS-21/PathFinder",
            liveDemo: "https://the-aks-21.github.io/PathFinder",
            readme: `
# 🌐 Pathfinder App

An interactive visualization tool that helps users find the shortest path in a grid-based maze. The application supports multiple pathfinding and maze-generation algorithms, allowing users to compare their performance in real-time.

### Pathfinding Algorithms Visualized
-   Dijkstra's Algorithm
-   A* Search
-   Breadth-First Search (BFS)
-   Depth-First Search (DFS)
`
        },
    ],
    skills: [
        {
            category: "Programming Languages",
            technologies: ["Java", "C#", "Golang", "TypeScript", "JavaScript", "Python", "SQL"]
        },
        {
            category: "Back-End Development",
            technologies: ["Spring Boot", "ASP.NET Core", "Node.js", "Express.js", "Microservices", "REST APIs", "JWT"]
        },
        {
            category: "Front-End Development",
            technologies: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            category: "Databases",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Database Design"]
        },
        {
            category: "DevOps & Tools",
            technologies: ["Docker", "Git", "Kubernetes", "Postman", "CI/CD", "Swagger", "GitHub Actions"]
        },
        {
            category: "Cloud & Other",
            technologies: ["AWS", "System Architecture", "Agile Methodologies"]
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
            title: "Bachelor of Technology",
            degree: "B.TECH in Mathematics and Computing",
            institution: "Delhi Technological University",
            period: "2020 - 2024",
            coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming"],
            location: "Delhi, India",
            logo: "/src/assets/DTU.png"
        },
        {
            title: "Secondary School",
            degree: "Physics, Chemistry, and Mathematics",
            institution: "Kendriya Vidyalaya AGCR",
            period: "2018 - 2020",
            coursework: [],
            location: "Delhi, India",
            logo: "/src/assets/KV.png"
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/THE-AkS-21",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-535341203/"
    }
};