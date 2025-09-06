import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A fully responsive E-Commerce platform using Golang, Bootstrap and MongoDB, improving user experience by 40%. Optimized UI components with Bootstrap Material, reducing page load time by 35%.",
            technologies: ["React", "Golang", "Tailwind", "Docker", "MongoDB"],
            liveDemo: "#", // Add your live demo link here
            sourceCode: "#" // Add your source code link here
        },
        {
            title: "To-Do-List App",
            description: "A To-Do List web application using .NET MVC, improving task management efficiency by 40%. Implemented full CRUD functionality, reducing task update time by 30%. Integrated Entity Framework with SQL Server, optimizing data retrieval speed by 45%.",
            technologies: ["ASP.NET", "React", "Tailwind", "MongoDB"],
            liveDemo: "#",
            sourceCode: "#"
        },
        {
            title: "Portfolio",
            description: "Engineered a versatile portfolio template, providing a customizable foundation for crafting visually captivating and interactive portfolios. Achieved 100% responsiveness across 10+ device types.",
            technologies: ["React", "Tailwind"],
            liveDemo: "#",
            sourceCode: "#"
        }
    ],
    skills: [
        {
            category: "Frontend",
            technologies: ["React", "JavaScript", "TypeScript", "TailwindCSS", "HTML5", "CSS3"]
        },
        {
            category: "Backend",
            technologies: ["Golang", "C++", "Node.js", "Express", "AWS", "MongoDB"]
        }
    ],
    workExperience: [
        {
            role: "Frontend Development",
            company: "Garg Defence and Aerospace Pvt. Ltd.",
            period: "SEPT 2024 - NOV 2024",
            description: "Developed a high-performance, scalable, and responsive frontend for a company specializing in defense and aerospace solutions. Designed and implemented an intuitive, user-friendly interface that enhances user engagement while ensuring seamless navigation."
        },
        {
            role: "In-House Intern | Student ERP Portal",
            company: "Delhi Technological University",
            period: "JUL 2023 – AUG 2023",
            description: "Provided secure access for students to view academic records such as marks and personal details. Implemented a user-friendly interface for teachers to update marks and attendance records efficiently."
        }
    ],
    education: {
        degree: "B.Tech. in Mathematics & Computing",
        institution: "DELHI TECHNOLOGICAL UNIVERSITY",
        period: "2020-2024",
        coursework: ["Data Structures", "Algorithms", "Web Development", "Database Management"]
    }
};
