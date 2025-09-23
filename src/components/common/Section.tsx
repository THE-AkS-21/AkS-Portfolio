import React, { type ReactNode } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
interface SectionProps {
    id: string;
    title: string;
    children: ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
    return (
        <section
            id={id}
            className={`min-h-screen flex items-center justify-center py-20 bg-cover bg-center bg-no-repeat ${className}`}
            style={{ backgroundImage: `url(/assets/background.png)` }}
        >
            <RevealOnScroll>
                <div className="container-wide">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-12 text-center">{title}</h2>
                    {children}
                </div>
            </RevealOnScroll>
        </section>
    );
};