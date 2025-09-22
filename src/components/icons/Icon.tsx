import React from 'react';

// --- SVG Icon Components ---
// This is now the single location for all icon definitions in your app.

// Social & General
const IconGitHub = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.43-1.32.78-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.44.38.83 1.12.83 2.27v3.36c0 .32.21.69.83.58A12 12 0 0012 .5z" /></svg> );
const IconLinkedIn = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.6v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4V15c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6H10V9z" /></svg> );
const IconDefault = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z" fill="currentColor"/></svg> );


// Languages
const IconJava = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 18h8M6 15c2-1 10-1 12 0M10 6c0 2-3 2-3 4s6 2 6 4" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconCSharp = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 12a3 3 0 106 0" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconGo = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M8 13h5a2 2 0 100-4H9" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconTypeScript = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8h8M12 8v8M9 16h6" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconJavaScript = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 8v8m6-6a2 2 0 110 4h-2" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconPython = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11v-2a2 2 0 10-4 0v2h4zm-4 4v2a2 2 0 104 0v-2h-4z" fill="currentColor"/></svg> );
const IconSQL = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16v12H4V6zm2 2v8h12V8H6z" fill="currentColor"/><path d="M8 10h8v2H8v-2zm0 4h5v2H8v-2z" fill="currentColor"/></svg> );
const IconHTML = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h16l-2 18-6 2-6-2L4 3z" fill="currentColor"/></svg> );
const IconCSS = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 3h16l-2 18-6 2-6-2L4 3z" fill="currentColor"/><path d="M12 19l4-1 1-10H7l.5 5h5l-.5 2-2 .5-2-.5-.2-2H7l.2 4 4.8 1.5z" fill="white"/></svg> );

// Frameworks & Libraries
const IconReact = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="16" fill="currentColor"/><ellipse cx="128" cy="128" rx="108" ry="40" stroke="currentColor" strokeWidth="12" fill="none"/><ellipse cx="128" cy="128" rx="108" ry="40" transform="rotate(60 128 128)" stroke="currentColor" strokeWidth="12" fill="none"/><ellipse cx="128" cy="128" rx="108" ry="40" transform="rotate(120 128 128)" stroke="currentColor" strokeWidth="12" fill="none"/></svg> );
const IconSpring = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M128 20l88 48v120l-88 48-88-48V68l88-48z" stroke="currentColor" strokeWidth="12" fill="none"/><path d="M156 106c-24-8-44 6-52 24 18 6 34 0 46-10-10 14-26 28-50 28 8 16 28 24 44 20 22-6 36-30 32-50-2-8-8-12-20-12z" fill="currentColor"/></svg> );
const IconAspNet = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="44" cy="128" r="16" fill="currentColor"/><rect x="84" y="92" width="128" height="72" rx="8" stroke="currentColor" strokeWidth="12"/><path d="M100 128h96" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/></svg> );
const IconNode = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 12l4 2 4-2" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconNext = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8z"/></svg> );
const IconTailwind = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.6c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-6h8v2H8v-2zm0-4h8v2H8v-2z"/></svg> );
const IconExpress = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"/></svg> );

// Databases
const IconPostgres = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72 88c-8 24 0 56 16 72 24 24 40 0 40 0s16 24 40 0c16-16 24-48 16-72-8-24-40-40-56-16-16-24-48-8-56 16z" stroke="currentColor" strokeWidth="10" fill="none"/><path d="M112 136c-8 0-8 16 0 16 8 0 8-16 0-16zm32 0c-8 0-8 16 0 16 8 0 8-16 0-16z" fill="currentColor"/><path d="M92 168c16 16 56 16 72 0" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/></svg> );
const IconMongo = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2s4 5 4 10-4 10-4 10-4-5-4-10 4-10 4-10z" fill="currentColor"/></svg> );
const IconMySQL = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-12h2v8h-2v-8z"/></svg> );

// Tools & Platforms
const IconDocker = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14h16a3 3 0 01-3 3H7a3 3 0 01-3-3z" fill="currentColor"/><path d="M6 10h3v3H6v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM10 6h3v3h-3V6z" fill="currentColor"/></svg> );
const IconGit = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 12.5c0-5.2-4.3-9.5-9.5-9.5s-9.5 4.3-9.5 9.5 4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5zm-17 0c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5zm4-1h6v2H8v-2zm2-4h2v8h-2V7.5z"/></svg> );
const IconKubernetes = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l9 4-9 4-9-4 9-4zm0 18l-9-4 9-4 9 4-9 4zm0-9l-9-4 9-4 9 4-9 4z"/></svg> );
const IconPostman = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-12h2v8h-2v-8z"/></svg> );
const IconSwagger = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-1-12h2v8h-2v-8z"/></svg> );
const IconJWT = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="currentColor" strokeWidth="1.5"/></svg> );
const IconAWS = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2v-8z"/></svg> );

// Category Icons (These were missing)
const IconLang = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z" fill="currentColor"/></svg> );
const IconBackend = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18v12H3V6zm2 2v8h14V8H5zm2 2h10v2H7v-2z" fill="currentColor"/></svg> );
const IconDatabase = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 .93 7 2s-3.13 2-7 2-7-.93-7-2 .13-2 7-2zm7 6c0 1.07-3.13 2-7 2s-7-.93-7-2" fill="currentColor"/></svg> );
const IconDevOps = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8a5 5 0 100 8 5 5 0 000-8zm10 0a5 5 0 100 8 5 5 0 000-8zm-10 2a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6z" fill="currentColor"/></svg> );
const IconFrontend = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v2H8V9z" fill="currentColor"/></svg> );
const IconCloud = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h11a4 4 0 100-8 6 6 0 10-11 4h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

// --- The Data Map ---
const ICONS: Record<string, { component: React.ReactNode; color: string; keywords: string[] }> = {
    // Social & General
    DEFAULT: { component: <IconDefault />, color: 'var(--primary)', keywords: [] },
    GITHUB: { component: <IconGitHub />, color: 'var(--text)', keywords: ['github'] },
    LINKEDIN: { component: <IconLinkedIn />, color: '#0A66C2', keywords: ['linkedin'] },

    // Languages
    JAVA: { component: <IconJava />, color: '#ea2d2e', keywords: ['java'] },
    CSHARP: { component: <IconCSharp />, color: '#239120', keywords: ['c#'] },
    GO: { component: <IconGo />, color: '#00add8', keywords: ['golang', 'go'] },
    TYPESCRIPT: { component: <IconTypeScript />, color: '#3178c6', keywords: ['typescript'] },
    JAVASCRIPT: { component: <IconJavaScript />, color: '#f7df1e', keywords: ['javascript'] },
    PYTHON: { component: <IconPython />, color: '#3776ab', keywords: ['python'] },
    SQL: { component: <IconSQL />, color: '#4479a1', keywords: ['sql'] },
    HTML: { component: <IconHTML />, color: '#e34f26', keywords: ['html'] },
    CSS: { component: <IconCSS />, color: '#1572b6', keywords: ['css'] },

    // Frameworks & Libraries
    REACT: { component: <IconReact />, color: '#61dafb', keywords: ['react'] },
    SPRING: { component: <IconSpring />, color: '#6db33f', keywords: ['spring boot'] },
    ASPNET: { component: <IconAspNet />, color: '#512bd4', keywords: ['asp.net', 'aspnet', '.net'] },
    NODE: { component: <IconNode />, color: '#43853d', keywords: ['node.js'] },
    NEXT: { component: <IconNext />, color: 'var(--text)', keywords: ['next.js'] },
    TAILWIND: { component: <IconTailwind />, color: '#06b6d4', keywords: ['tailwind'] },
    EXPRESS: { component: <IconExpress />, color: 'var(--text)', keywords: ['express.js'] },

    // Databases
    POSTGRES: { component: <IconPostgres />, color: '#336791', keywords: ['postgres'] },
    MONGO: { component: <IconMongo />, color: '#47a248', keywords: ['mongo'] },
    MYSQL: { component: <IconMySQL />, color: '#4479a1', keywords: ['mysql'] },

    // Tools, Platforms & Concepts
    DOCKER: { component: <IconDocker />, color: '#2496ed', keywords: ['docker'] },
    GIT: { component: <IconGit />, color: '#f05032', keywords: ['git'] },
    KUBERNETES: { component: <IconKubernetes />, color: '#326ce5', keywords: ['kubernetes'] },
    POSTMAN: { component: <IconPostman />, color: '#ff6c37', keywords: ['postman'] },
    SWAGGER: { component: <IconSwagger />, color: '#85ea2d', keywords: ['swagger'] },
    JWT: { component: <IconJWT />, color: '#000000', keywords: ['jwt'] },
    AWS: { component: <IconAWS />, color: '#232f3e', keywords: ['aws'] },
    REST: { component: <IconDefault />, color: '#0ea5e9', keywords: ['rest'] },

    // Skill Categories
    LANGUAGE: { component: <IconLang />, color: 'var(--primary)', keywords: ['programming languages'] },
    BACKEND: { component: <IconBackend />, color: 'var(--primary)', keywords: ['back-end'] },
    DATABASE: { component: <IconDatabase />, color: 'var(--primary)', keywords: ['database'] },
    DEVOPS: { component: <IconDevOps />, color: 'var(--primary)', keywords: ['devops'] },
    FRONTEND: { component: <IconFrontend />, color: 'var(--primary)', keywords: ['front-end'] },
    CLOUD: { component: <IconCloud />, color: 'var(--primary)', keywords: ['cloud'] },
};


const findIconConfig = (name: string) => {
    const searchName = name.toLowerCase();
    for (const key in ICONS) {
        if (ICONS[key].keywords.some(keyword => searchName.includes(keyword))) {
            return ICONS[key];
        }
    }
    return ICONS.DEFAULT;
};

// --- The Reusable Icon Component ---
interface IconProps {
    name: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
    const { component, color } = findIconConfig(name);
    return (
        <span className={className} style={{ color }}>
            {component}
        </span>
    );
};

export const getIconColor = (name: string): string => {
    return findIconConfig(name).color;
};