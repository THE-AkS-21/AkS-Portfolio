import React, { type ReactNode } from 'react';

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`min-h-screen flex items-center justify-center py-20 ${className}`}>
            {children}
        </section>
    );
};