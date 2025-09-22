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
            readme: `
# Movie Review Application

A full-stack movie review application built with React, Spring Boot, and PostgreSQL. Users can discover movies, write reviews, rate movies, and watch trailers in a modern, responsive interface.

## 🎬 Features

### Frontend (React + TypeScript)
- **Modern UI/UX**: Clean, responsive design with Material-UI components
- **Movie Discovery**: Browse and search through a curated collection of movies
- **Rating System**: 5-star rating system for movies
- **Review System**: Write and read detailed movie reviews
- **Trailer Integration**: Watch movie trailers directly in the app
- **Authentication**: Secure user login and registration
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live review updates and notifications

### Backend (Spring Boot + PostgreSQL)
- **RESTful API**: Comprehensive REST API with proper HTTP status codes
- **JWT Authentication**: Secure token-based authentication
- **PostgreSQL Database**: Robust relational database with proper indexing
- **User Management**: Complete user registration, login, and profile management
- **Movie Management**: CRUD operations for movies with advanced filtering
- **Review System**: Full review and rating functionality
- **Database Migrations**: Flyway for database schema management
- **Security**: Spring Security with CORS configuration
- **Health Checks**: Actuator endpoints for monitoring

### DevOps & Infrastructure
- **Docker Support**: Multi-container Docker setup
- **Docker Compose**: Complete orchestration with PostgreSQL and Redis
- **Database Migrations**: Automated schema management
- **Health Checks**: Container health monitoring
- **Nginx Reverse Proxy**: Production-ready reverse proxy configuration
- **Environment Configuration**: Flexible environment-based configuration

## 🏗️ Architecture

\`\`\`
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Spring Boot    │    │   PostgreSQL    │
│   (Port 3000)   │◄──►│   API Server    │◄──►│   (Port 5432)   │
│                 │    │   (Port 8080)   │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx Proxy   │    │     Redis       │    │   Flyway DB     │
│   (Port 80/443) │    │   (Port 6379)   │    │   Migrations    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
\`\`\`

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local development)
- Java 17+ (for local development)
- PostgreSQL 15+ (for local development)

### Using Docker Compose (Recommended)

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd Movie-Review
   \`\`\`

2. **Start all services**
   \`\`\`bash
   docker-compose up -d
   \`\`\`

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080/api/v1
   - Database: localhost:5432

4. **Stop all services**
   \`\`\`bash
   docker-compose down
   \`\`\`

### Local Development

#### Backend Setup

1. **Navigate to server directory**
   \`\`\`bash
   cd server/movies
   \`\`\`

2. **Start PostgreSQL database**
   \`\`\`bash
   docker run --name movie-review-postgres -e POSTGRES_DB=movie_review_db -e POSTGRES_USER=movieuser -e POSTGRES_PASSWORD=moviepass -p 5432:5432 -d postgres:15-alpine
   \`\`\`

3. **Run the application**
   \`\`\`bash
   ./mvnw spring-boot:run
   \`\`\`

#### Frontend Setup

1. **Navigate to client directory**
   \`\`\`bash
   cd client
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm start
   \`\`\`

## 📁 Project Structure

\`\`\`
Movie-Review/
├── client/                     # React frontend
│   ├── public/                # Static assets
│   ├── src/                   # Source code
│   │   ├── components/        # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API services
│   │   ├── contexts/         # React contexts
│   │   ├── hooks/            # Custom hooks
│   │   ├── types/            # TypeScript types
│   │   └── theme.ts          # Material-UI theme
│   ├── Dockerfile            # Client Docker configuration
│   └── nginx.conf            # Nginx configuration
├── server/                    # Spring Boot backend
│   ├── movies/               # Main application
│   │   ├── src/main/java/    # Java source code
│   │   │   └── com/theAkS/movies/
│   │   │       ├── auth/     # Authentication
│   │   │       ├── config/   # Configuration
│   │   │       ├── movie/    # Movie entities
│   │   │       ├── review/   # Review entities
│   │   │       └── user/     # User entities
│   │   ├── src/main/resources/
│   │   │   ├── db/migration/ # Database migrations
│   │   │   └── application.properties
│   │   └── pom.xml           # Maven dependencies
│   └── Dockerfile            # Server Docker configuration
├── docker-compose.yml        # Multi-container orchestration
├── .gitignore               # Git ignore rules
├── .dockerignore            # Docker ignore rules
└── README.md                # This file
\`\`\`

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Material-UI v5** - Component library
- **React Router v6** - Client-side routing
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **Yup** - Form validation

### Backend
- **Spring Boot 3.4** - Application framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Data access layer
- **PostgreSQL** - Primary database
- **JWT** - Token-based authentication
- **Flyway** - Database migrations
- **Maven** - Dependency management

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy
- **Redis** - Caching (optional)

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
\`\`\`env
DB_USERNAME=movieuser
DB_PASSWORD=moviepass
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
\`\`\`

#### Frontend (.env)
\`\`\`env
REACT_APP_API_BASE_URL=http://localhost:8080/api/v1
REACT_APP_APP_NAME=Movie Reviews
REACT_APP_APP_VERSION=1.0.0
\`\`\`

### Database Configuration

The application uses PostgreSQL with the following default settings:
- **Database**: movie_review_db
- **Username**: movieuser
- **Password**: moviepass
- **Port**: 5432

## 📊 API Endpoints

### Authentication
- \`POST /api/v1/auth/login\` - User login
- \`POST /api/v1/auth/register\` - User registration
- \`POST /api/v1/auth/refresh\` - Refresh token
- \`POST /api/v1/auth/logout\` - User logout
- \`GET /api/v1/auth/verify\` - Verify token
- \`GET /api/v1/auth/me\` - Get current user

### Movies
- \`GET /api/v1/movies\` - Get all movies
- \`GET /api/v1/movies/{id}\` - Get movie by ID
- \`GET /api/v1/movies/search\` - Search movies
- \`GET /api/v1/movies/genre/{genre}\` - Get movies by genre
- \`GET /api/v1/movies/featured\` - Get featured movies

### Reviews
- \`GET /api/v1/reviews\` - Get all reviews
- \`POST /api/v1/reviews\` - Create review
- \`GET /api/v1/reviews/movie/{movieId}\` - Get reviews for movie
- \`PUT /api/v1/reviews/{id}\` - Update review
- \`DELETE /api/v1/reviews/{id}\` - Delete review

## 🐳 Docker Commands

### Build and run all services
\`\`\`bash
docker-compose up --build
\`\`\`

### Run in background
\`\`\`bash
docker-compose up -d
\`\`\`

### View logs
\`\`\`bash
docker-compose logs -f [service-name]
\`\`\`

### Stop all services
\`\`\`bash
docker-compose down
\`\`\`

### Stop and remove volumes
\`\`\`bash
docker-compose down -v
\`\`\`

### Rebuild specific service
\`\`\`bash
docker-compose up --build [service-name]
\`\`\`

## 🧪 Testing

### Backend Tests
\`\`\`bash
cd server/movies
./mvnw test
\`\`\`

### Frontend Tests
\`\`\`bash
cd client
npm test
\`\`\`

### Integration Tests
\`\`\`bash
docker-compose -f docker-compose.test.yml up --build
\`\`\`

## 📈 Monitoring

### Health Checks
- **Frontend**: http://localhost:3000/health
- **Backend**: http://localhost:8080/api/v1/actuator/health
- **Database**: Check container logs

### Metrics
- **Backend Metrics**: http://localhost:8080/api/v1/actuator/metrics
- **Application Info**: http://localhost:8080/api/v1/actuator/info

## 🚀 Deployment

### Production Deployment

1. **Update environment variables**
   \`\`\`bash
   cp .env.example .env.production
   # Edit .env.production with production values
   \`\`\`

2. **Build production images**
   \`\`\`bash
   docker-compose -f docker-compose.prod.yml build
   \`\`\`

3. **Deploy to production**
   \`\`\`bash
   docker-compose -f docker-compose.prod.yml up -d
   \`\`\`

### Environment-specific configurations

- **Development**: \`docker-compose.yml\`
- **Testing**: \`docker-compose.test.yml\`
- **Production**: \`docker-compose.prod.yml\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🙏 Acknowledgments

- Material-UI for the amazing component library
- Spring Boot team for the excellent framework
- PostgreSQL community for the robust database
- Docker team for containerization tools
- All contributors and users of this project

---

**Happy Movie Reviewing! 🎬✨**
`
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
        linkedin: "https://www.linkedin.com/in/ankit-kumar-singh-535341203/"
    }
};