import React from 'react';

const IconLang = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z" fill="currentColor"/>
    </svg>
);

const IconBackend = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6h18v12H3V6zm2 2v8h14V8H5zm2 2h10v2H7v-2z" fill="currentColor"/>
    </svg>
);

const IconDB = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3c-4.97 0-9 1.79-9 4v10c0 2.21 4.03 4 9 4s9-1.79 9-4V7c0-2.21-4.03-4-9-4zm0 2c3.87 0 7 .93 7 2s-3.13 2-7 2-7-.93-7-2 .13-2 7-2zm7 6c0 1.07-3.13 2-7 2s-7-.93-7-2" fill="currentColor"/>
    </svg>
);

const IconDevOps = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8a5 5 0 100 8 5 5 0 000-8zm10 0a5 5 0 100 8 5 5 0 000-8zm-10 2a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6z" fill="currentColor"/>
    </svg>
);

const IconFrontend = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v2H8V9z" fill="currentColor"/>
    </svg>
);

const IconCloud = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18h11a4 4 0 100-8 6 6 0 10-11 4h0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const IconDefault = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z" fill="currentColor"/>
    </svg>
);

export const getSkillIcon = (category: string): React.ReactNode => {
    const key = category.toLowerCase();
    if (key.includes('programming')) return <IconLang />;
    if (key.includes('back-end') || key.includes('backend')) return <IconBackend />;
    if (key.includes('database')) return <IconDB />;
    if (key.includes('devops') || key.includes('tools')) return <IconDevOps />;
    if (key.includes('front-end') || key.includes('frontend')) return <IconFrontend />;
    if (key.includes('cloud')) return <IconCloud />;
    return <IconDefault />;
};


