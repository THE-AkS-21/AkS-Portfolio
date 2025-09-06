import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const baseClasses = "py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5";
    const primaryClasses = "bg-green-400 text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]";
    const secondaryClasses = "border border-green-400/50 text-green-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-grey/10";

    return (
        <button className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`} {...props}>
            {children}
        </button>
    );
};