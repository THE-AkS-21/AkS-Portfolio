import React from 'react';

// --- All SVG Icon Components ---
const IconReact = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="16" fill="currentColor"/><ellipse cx="128" cy="128" rx="108" ry="40" stroke="currentColor" strokeWidth="12" fill="none"/><ellipse cx="128" cy="128" rx="108" ry="40" transform="rotate(60 128 128)" stroke="currentColor" strokeWidth="12" fill="none"/><ellipse cx="128" cy="128" rx="108" ry="40" transform="rotate(120 128 128)" stroke="currentColor" strokeWidth="12" fill="none"/></svg> );
const IconSpring = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M128 20l88 48v120l-88 48-88-48V68l88-48z" stroke="currentColor" strokeWidth="12" fill="none"/><path d="M156 106c-24-8-44 6-52 24 18 6 34 0 46-10-10 14-26 28-50 28 8 16 28 24 44 20 22-6 36-30 32-50-2-8-8-12-20-12z" fill="currentColor"/></svg> );
const IconAspNet = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="44" cy="128" r="16" fill="currentColor"/><rect x="84" y="92" width="128" height="72" rx="8" stroke="currentColor" strokeWidth="12"/><path d="M100 128h96" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/></svg> );
const IconPostgres = () => ( <svg width="1em" height="1em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72 88c-8 24 0 56 16 72 24 24 40 0 40 0s16 24 40 0c16-16 24-48 16-72-8-24-40-40-56-16-16-24-48-8-56 16z" stroke="currentColor" strokeWidth="10" fill="none"/><path d="M112 136c-8 0-8 16 0 16 8 0 8-16 0-16zm32 0c-8 0-8 16 0 16 8 0 8-16 0-16z" fill="currentColor"/><path d="M92 168c16 16 56 16 72 0" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/></svg> );
const IconDocker = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14h16a3 3 0 01-3 3H7a3 3 0 01-3-3z" fill="currentColor"/><path d="M6 10h3v3H6v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM10 6h3v3h-3V6z" fill="currentColor"/></svg> );
const IconLang = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z" fill="currentColor"/></svg> );
const IconBackend = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18v12H3V6zm2 2v8h14V8H5zm2 2h10v2H7v-2z" fill="currentColor"/></svg> );
const IconDatabase = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 .93 7 2s-3.13 2-7 2-7-.93-7-2 .13-2 7-2zm7 6c0 1.07-3.13 2-7 2s-7-.93-7-2" fill="currentColor"/></svg> );
const IconDevOps = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8a5 5 0 100 8 5 5 0 000-8zm10 0a5 5 0 100 8 5 5 0 000-8zm-10 2a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6z" fill="currentColor"/></svg> );
const IconFrontend = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v2H8V9z" fill="currentColor"/></svg> );
const IconCloud = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h11a4 4 0 100-8 6 6 0 10-11 4h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const IconGitHub = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.43-1.32.78-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.44.38.83 1.12.83 2.27v3.36c0 .32.21.69.83.58A12 12 0 0012 .5z" /></svg> );
const IconLinkedIn = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.6v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4V15c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6H10V9z" /></svg> );
const IconDefault = () => ( <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z" fill="currentColor"/></svg> );

// --- The Data Map ---
const ICONS: Record<string, { component: React.ReactNode; color: string; keywords: string[] }> = {
    // Social & General
    DEFAULT: { component: <IconDefault />, color: 'var(--primary)', keywords: [] },
    GITHUB: { component: <IconGitHub />, color: 'var(--text)', keywords: ['github'] },
    LINKEDIN: { component: <IconLinkedIn />, color: '#0A66C2', keywords: ['linkedin'] },

    // Technologies
    REACT: { component: <IconReact />, color: '#61dafb', keywords: ['react'] },
    SPRING: { component: <IconSpring />, color: '#6db33f', keywords: ['spring boot'] },
    ASPNET: { component: <IconAspNet />, color: '#512bd4', keywords: ['asp.net', 'aspnet', '.net'] },
    POSTGRES: { component: <IconPostgres />, color: '#336791', keywords: ['postgres'] },
    DOCKER: { component: <IconDocker />, color: '#2496ed', keywords: ['docker'] },
    // ... Add future technologies here

    // Skill Categories
    LANGUAGE: { component: <IconLang />, color: 'var(--primary)', keywords: ['programming languages'] },
    BACKEND: { component: <IconBackend />, color: 'var(--primary)', keywords: ['back-end development'] },
    DATABASE: { component: <IconDatabase />, color: 'var(--primary)', keywords: ['databases'] },
    DEVOPS: { component: <IconDevOps />, color: 'var(--primary)', keywords: ['devops & tools'] },
    FRONTEND: { component: <IconFrontend />, color: 'var(--primary)', keywords: ['front-end development'] },
    CLOUD: { component: <IconCloud />, color: 'var(--primary)', keywords: ['cloud & other'] },
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