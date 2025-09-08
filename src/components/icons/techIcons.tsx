import React from 'react';

// Brand-like inline SVG icons (monotone; inherit currentColor)
const IconReact = () => (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="16" fill="currentColor"/>
        <ellipse cx="128" cy="128" rx="108" ry="40" stroke="currentColor" strokeWidth="12" fill="none"/>
        <ellipse cx="128" cy="128" rx="108" ry="40" transform="rotate(60 128 128)" stroke="currentColor" strokeWidth="12" fill="none"/>
        <ellipse cx="128" cy="128" rx="108" ry="40" transform="rotate(120 128 128)" stroke="currentColor" strokeWidth="12" fill="none"/>
    </svg>
);

const IconNode = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M8 12l4 2 4-2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconTS = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 8h8M12 8v8M9 16h6" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconJS = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 8v8m6-6a2 2 0 110 4h-2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconDocker = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14h16a3 3 0 01-3 3H7a3 3 0 01-3-3z" fill="currentColor"/>
        <path d="M6 10h3v3H6v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM10 6h3v3h-3V6z" fill="currentColor"/>
    </svg>
);

const IconMongo = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2s4 5 4 10-4 10-4 10-4-5-4-10 4-10 4-10z" fill="currentColor"/>
    </svg>
);

const IconPostgres = () => (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72 88c-8 24 0 56 16 72 24 24 40 0 40 0s16 24 40 0c16-16 24-48 16-72-8-24-40-40-56-16-16-24-48-8-56 16z" stroke="currentColor" strokeWidth="10" fill="none"/>
        <path d="M112 136c-8 0-8 16 0 16 8 0 8-16 0-16zm32 0c-8 0-8 16 0 16 8 0 8-16 0-16z" fill="currentColor"/>
        <path d="M92 168c16 16 56 16 72 0" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
    </svg>
);

// Spring Boot hex + leaf motif
const IconSpring = () => (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M128 20l88 48v120l-88 48-88-48V68l88-48z" stroke="currentColor" strokeWidth="12" fill="none"/>
        <path d="M156 106c-24-8-44 6-52 24 18 6 34 0 46-10-10 14-26 28-50 28 8 16 28 24 44 20 22-6 36-30 32-50-2-8-8-12-20-12z" fill="currentColor"/>
    </svg>
);

// ASP.NET minimal wordmark-like dot + NET box
const IconAspNet = () => (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="44" cy="128" r="16" fill="currentColor"/>
        <rect x="84" y="92" width="128" height="72" rx="8" stroke="currentColor" strokeWidth="12"/>
        <path d="M100 128h96" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
    </svg>
);

const IconGo = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 13h5a2 2 0 100-4H9" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconJava = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 18h8M6 15c2-1 10-1 12 0M10 6c0 2-3 2-3 4s6 2 6 4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconCSharp = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12a3 3 0 106 0" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconJWT = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const IconREST = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="12" r="1" fill="currentColor"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <circle cx="17" cy="12" r="1" fill="currentColor"/>
    </svg>
);

const IconDefault = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z" fill="currentColor"/>
    </svg>
);

export const getTechIcon = (name: string): React.ReactNode => {
    const key = name.toLowerCase();
    if (key.includes('react')) return <IconReact />;
    if (key.includes('spring')) return <IconSpring />;
    if (key.includes('asp.net') || key.includes('aspnet') || key.includes('dotnet') || key.includes('.net')) return <IconAspNet />;
    if (key.includes('typescript') || key === 'ts') return <IconTS />;
    if (key.includes('javascript')) return <IconJS />;
    if (key.includes('node')) return <IconNode />;
    if (key.includes('docker')) return <IconDocker />;
    if (key.includes('mongo')) return <IconMongo />;
    if (key.includes('postgres')) return <IconPostgres />;
    if (key.includes('go')) return <IconGo />;
    if (key.includes('java')) return <IconJava />;
    if (key.includes('c#') || key.includes('dotnet') || key.includes('asp.net')) return <IconCSharp />;
    if (key.includes('jwt')) return <IconJWT />;
    if (key.includes('rest')) return <IconREST />;
    return <IconDefault />;
};

export const getTechBrandColor = (name: string): string => {
    const key = name.toLowerCase();
    if (key.includes('react')) return '#61dafb';
    if (key.includes('spring')) return '#6db33f';
    if (key.includes('asp.net') || key.includes('aspnet') || key.includes('dotnet') || key.includes('.net')) return '#512bd4';
    if (key.includes('postgres')) return '#336791';
    if (key.includes('docker')) return '#2496ed';
    if (key.includes('node')) return '#43853d';
    if (key.includes('typescript') || key === 'ts') return '#3178c6';
    if (key.includes('javascript')) return '#f7df1e';
    if (key.includes('mongo')) return '#47a248';
    if (key.includes('go')) return '#00add8';
    if (key.includes('java')) return '#ea2d2e';
    if (key.includes('c#') || key.includes('csharp')) return '#239120';
    if (key.includes('jwt')) return '#000000';
    if (key.includes('rest')) return '#0ea5e9';
    return 'var(--primary)';
};


