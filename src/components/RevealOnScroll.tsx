import React, { type ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealOnScrollProps {
    children: ReactNode;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};