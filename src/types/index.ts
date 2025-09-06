export interface Project {
    title: string;
    description: string;
    technologies: string[];
    liveDemo?: string;
    sourceCode?: string;
}

export interface Skill {
    category: string;
    technologies: string[];
}

export interface WorkExperience {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    coursework: string[];
}

export interface PortfolioData {
    projects: Project[];
    skills: Skill[];
    workExperience: WorkExperience[];
    education: Education;
}
