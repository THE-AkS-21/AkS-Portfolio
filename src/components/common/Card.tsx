import React, { type ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`card hover-lift p-6 h-full ${className}`}>
            {children}
        </div>
    );
};