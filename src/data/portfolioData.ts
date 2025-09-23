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

A modern, responsive Streamlit dashboard for Bombay Shaving Company to track and visualize order performance by SKU, category, and date range from a PostgreSQL data source.

## 🚀 Key Features

-   **Custom UI Components**: Includes a custom collapsible sidebar and a fixed navbar with a dynamic toolbar.
-   **Interactive Charts**: Uses Plotly and streamlit-lightweight-charts to create interactive visualizations of daily order trends.
-   **Dynamic Filtering**: Allows users to filter data by category, subcategory, SKU, and date range.
-   **Performance Optimized**: Implements strategic caching with \`@st.cache_data\` and \`@st.cache_resource\` to ensure fast query performance, even with large datasets.
-   **Data Export**: Features a one-click "Download CSV" option for offline analysis.
-   **Clean Architecture**: Built with a modular structure separating UI components, database queries, and utility functions.
`
        },
        {
            id: "ecommerce-product-management",
            title: "E-Commerce Product Management System",
            description: "Architected a scalable backend with RESTful APIs using ASP.NET Core and designed a PostgreSQL schema for optimal performance. Implemented JWT authentication, role-based access control, and automated deployment with Docker Compose.",
            technologies: ["ASP.NET Core 8", "PostgreSQL", "Docker", "JWT", "Swagger", "ReactJS"],
            sourceCode: "https://github.com/THE-AkS-21/E-Commerce_Product_Management_System",
            gallery: [
                "assets/gallery/ecommerce-1.png",
                "assets/gallery/ecommerce-2.png",
                "assets/gallery/ecommerce-3.png",
                "assets/gallery/ecommerce-4.png",
                "assets/gallery/ecommerce-5.png",
                "assets/gallery/ecommerce-6.png",
                "assets/gallery/ecommerce-7.png",
                "assets/gallery/ecommerce-8.png",
                "assets/gallery/ecommerce-9.png",
                "assets/gallery/ecommerce-10.png",
                "assets/gallery/ecommerce-11.png",
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

**Features**

**Frontend (React + TypeScript)**
- **Modern UI/UX**: Clean, responsive design with Material-UI components
- **Movie Discovery**: Browse and search through a curated collection of movies
- **Rating System**: 5-star rating system for movies
- **Review System**: Write and read detailed movie reviews
- **Trailer Integration**: Watch movie trailers directly in the app
- **Authentication**: Secure user login and registration
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live review updates and notifications

**Backend (Spring Boot + PostgreSQL)**
- **RESTful API**: Comprehensive REST API with proper HTTP status codes
- **JWT Authentication**: Secure token-based authentication
- **PostgreSQL Database**: Robust relational database with proper indexing
- **User Management**: Complete user registration, login, and profile management
- **Movie Management**: CRUD operations for movies with advanced filtering
- **Review System**: Full review and rating functionality
- **Database Migrations**: Flyway for database schema management
- **Security**: Spring Security with CORS configuration
- **Health Checks**: Actuator endpoints for monitoring

**DevOps & Infrastructure**
- **Docker Support**: Multi-container Docker setup
- **Docker Compose**: Complete orchestration with PostgreSQL and Redis
- **Database Migrations**: Automated schema management
- **Health Checks**: Container health monitoring
- **Nginx Reverse Proxy**: Production-ready reverse proxy configuration
- **Environment Configuration**: Flexible environment-based configuration

`
        },
        {
            id: "task-manager",
            title: "Task Manager",
            description: "Developed a full-stack application with a RESTful API backend in Golang, focusing on efficient CRUD operations and backend performance for task management.",
            technologies: ["Golang", "MongoDB", "ReactJS", "REST APIs"],
            sourceCode: "https://github.com/THE-AkS-21/Task-Manager",
            readme: `# 📝 Full-Stack Task Manager

A modern, full-stack task management application built with a **Go (Golang)** backend and a **React + TypeScript** frontend. This project features a robust RESTful API for all core task operations and a clean, responsive user interface built with Chakra UI.

---

## 📖 About The Project

This application provides a simple yet powerful interface for managing to-do items. It's designed with a clean separation between the frontend and backend, making it a great example of a modern, full-stack web application architecture. The backend is built in Go for performance and concurrency, while the frontend uses a modern React stack for a fast and interactive user experience.

## 🚀 Key Features

-   **Full CRUD Functionality**: Create, read, update, and delete tasks.
-   **Mark Tasks Complete/Incomplete**: Easily toggle the status of any task.
-   **Bulk Delete**: Clear all tasks with a single action.
-   **RESTful API**: A well-defined API for seamless communication between the client and server.
-   **Modern Frontend**: A responsive and accessible user interface built with React and Chakra UI.
-   **Efficient Data Fetching**: Utilizes TanStack Query for optimized data fetching and state management.

## 🛠️ Tech Stack

| Area      | Technology                                                                          |
| :-------- | :---------------------------------------------------------------------------------- |
| **Backend** | **Go (Golang)** with **Gorilla Mux** for routing |
| **Database**| **MongoDB** (with the official Go driver) |
| **Frontend**| **React 18** (with Vite), **TypeScript** |
| **UI Library**| **Chakra UI** |
| **Data Fetching**| **TanStack (React) Query**|

## 📊 API Endpoints

All API endpoints are prefixed with \`/api\`.

| Method   | Endpoint              | Description                    |
| :------- | :-------------------- | :----------------------------- |
| \`GET\`    | \`/task\`               | Get all tasks |
| \`POST\`   | \`/tasks\`              | Create a new task |
| \`PUT\`    | \`/tasks/{id}\`         | Mark a task as complete |
| \`PUT\`    | \`/undoTask/{id}\`      | Mark a task as not complete |
| \`DELETE\` | \`/deleteTask/{id}\`    | Delete a single task |
| \`DELETE\` | \`/deleteAllTasks\`    | Delete all tasks |
`
        },
        {
            id: "portfolio",
            title: "Personal Portfolio",
            description: "Designed and deployed a fully responsive personal portfolio website using ReactJS and Tailwind CSS, hosted on GitHub Pages for seamless deployment and accessibility.",
            technologies: ["ReactJS", "Tailwind CSS", "Github Pages"],
            sourceCode: "https://github.com/THE-AkS-21/Portfolio",
            liveDemo: "https://the-aks-21.github.io/Portfolio",
            readme: `
# Personal Developer Portfolio

A clean, modern, and fully responsive personal portfolio built with React, TypeScript, and Tailwind CSS. This project serves as a dynamic showcase of my skills, experience, and projects, featuring a futuristic UI, smooth animations, and a reusable, component-based architecture.
---

## 📖 About The Project

This portfolio was designed not just to display my work, but to be a piece of work in itself. It demonstrates modern frontend development practices, including a strong emphasis on the DRY (Don't Repeat Yourself) principle, a data-driven content strategy, and a futuristic user interface with engaging micro-interactions.

The entire site is a Single Page Application (SPA) powered by React Router, ensuring a seamless and fast user experience.

## 🚀 Key Features

-   **Futuristic UI/UX**: A clean, light-themed interface with smooth animations and a focus on readability.
-   **Fully Responsive Design**: Optimized for a seamless experience on desktops, tablets, and mobile devices.
-   **Data-Driven Content**: All portfolio information (projects, skills, experience) is managed from a single, centralized \`portfolioData.ts\` file, making updates effortless.
-   **Reusable Component Architecture**: Built on the DRY principle with reusable \`Section\`, \`Card\`, and \`Icon\` components for maximum maintainability.
-   **Project Detail Pages**: Users can click on any project card to navigate to a dedicated, full-width page with a detailed README and image gallery.
-   **Interactive Project Gallery**: A sleek, modern gallery on project pages to showcase multiple images.
-   **Centralized Icon System**: A single, scalable component manages all icons (tech, social, UI) and their brand colors.
-   **Contact Form Integration**: A functional contact form connected to EmailJS for receiving messages directly.
-   **Scroll-Reveal Animations**: Content gracefully animates into view as the user scrolls.

## 🛠️ Tech Stack

This project is built with a modern, professional tech stack:

-   **Framework**: React 18
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **Routing**: React Router DOM
-   **Markdown Rendering**: React Markdown
-   **Deployment**: GitHub Pages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`
        },
        {
            id: "path-finder",
            title: "Path Finder for Road Networks",
            description: "Improved pathfinding efficiency by 30% by implementing Dijkstra, A*, BFS, and DFS algorithms to optimize navigation systems for robotics and autonomous vehicles.",
            technologies: ["React.JS", "Graphs"],
            sourceCode: "https://github.com/THE-AkS-21/PathFinder",
            liveDemo: "https://the-aks-21.github.io/PathFinder",
            readme: `
## **Pathfinder App** ### **Overview** The Pathfinder App is an interactive visualization tool that helps users find the shortest or most efficient path from a start point to a destination in a grid-based maze. The application supports multiple pathfinding algorithms, allowing users to compare their performance in real time.  

### **Features** ✅ Interactive grid-based interface  
✅ Selectable start and end points  
✅ Obstacle placement for complex mazes  
✅ Real-time visualization of pathfinding algorithms  
✅ Multiple algorithm support: **Dijkstra, A* (A-star), BFS, DFS** ✅ Performance comparison and time analysis  

### **Tech Stack** - **Frontend:** React.js, TypeScript, Tailwind CSS  
- **Backend (optional, if applicable):** Node.js, Express.js  
- **Algorithms Implementation:** JavaScript/TypeScript  

---

## **Algorithms Used** ### **1. Dijkstra's Algorithm (Shortest Path in Weighted Graphs)** **Concept:** - Dijkstra's algorithm finds the shortest path from the start node to all other nodes in a graph with non-negative weights.  
- It uses a **priority queue** (or min-heap) to always expand the least costly node first.  

**Steps:** 1. Initialize all nodes with infinite distance, except the start node (0 distance).  
2. Use a priority queue to process the node with the smallest known distance.  
3. Update the distances of its neighbors if a shorter path is found.  
4. Repeat until the destination node is reached or all nodes are processed.  

**Best Use Case:** - When all edges have positive weights (e.g., roads with distances).  

---

### **2. A* (A-star) Algorithm (Heuristic-Based Shortest Path Search)** **Concept:** - A* improves upon Dijkstra’s algorithm by using a heuristic function \\( f(n) = g(n) + h(n) \\), where:  
  - \\( g(n) \\) is the cost from the start node to node \\( n \\).  
  - \\( h(n) \\) is the estimated cost from \\( n \\) to the goal (heuristic function, usually Manhattan distance in grids).  

**Steps:** 1. Initialize the start node with \\( f(n) = 0 + h(n) \\).  
2. Use a priority queue to expand the node with the lowest \\( f(n) \\) value.  
3. Update its neighbors' \\( g(n) \\) values if a better path is found.  
4. Repeat until the destination is reached.  

**Best Use Case:** - When a heuristic function can guide the search efficiently (e.g., real-world navigation systems).  

---

### **3. Breadth-First Search (BFS) (Unweighted Shortest Path)** **Concept:** - BFS is a graph traversal algorithm that explores all neighbors at the current depth before moving deeper.  
- It guarantees the shortest path in an **unweighted graph**.  

**Steps:** 1. Start from the source node and enqueue it.  
2. Dequeue a node and visit all its unvisited neighbors, marking them as visited.  
3. Continue until the destination is found or the queue is empty.  

**Best Use Case:** - When all moves have equal weight (e.g., a chessboard or a simple grid-based game).  

---

### **4. Depth-First Search (DFS) (Pathfinding Without Optimality Guarantee)** **Concept:** - DFS explores as far as possible along each branch before backtracking.  
- It does not guarantee the shortest path but is useful for exploring mazes.  

**Steps:** 1. Start from the source and mark it as visited.  
2. Recursively visit each unvisited neighbor.  
3. Backtrack if no more moves are available.  

**Best Use Case:** - When finding **any** path is more important than finding the shortest one (e.g., puzzle-solving, AI exploration).  

---

## **Performance Comparison** | Algorithm | Guarantees Shortest Path? | Suitable for Weighted Graphs? | Time Complexity   |
|-----------|-------------------------|---------------------------|-------------------------|
| Dijkstra  | ✅ Yes                  |          ✅ Yes            | \\( O((V + E) \\log V) \\) |
| A* (A-star) | ✅ Yes | ✅ Yes | \\( O((V + E) \\log V) \\) |
| BFS | ✅ Yes (only for unweighted) | ❌ No | \\( O(V + E) \\) |
| DFS | ❌ No | ❌ No | \\( O(V + E) \\) |

---

## **Possible Enhancements** 🔹 Allow users to draw custom mazes.  
🔹 Add more heuristic functions for A*.  
🔹 Optimize Dijkstra’s algorithm using a **Fibonacci heap**.  
🔹 Implement bi-directional search for faster pathfinding.  

---
`
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
            logo: "assets/KV.png"
        },
        {
            title: "Bachelor of Technology",
            degree: "B.TECH in Mathematics and Computing",
            institution: "Delhi Technological University",
            period: "2020-2024",
            coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Object-Oriented Programming"],
            location: "Delhi, India",
            logo: "assets/DTU.png"
        }
    ],
    resumeUrl: "/resume.pdf",
    socials: {
        github: "https://github.com/THE-AkS-21",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-535341203/"
    }
};