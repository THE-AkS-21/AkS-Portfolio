import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative inline-flex items-center h-8 w-16 rounded-full border transition px-1"
            style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
            <span className="absolute left-2 text-yellow-300">☀️</span>
            <span className="absolute right-2">🌙</span>
            <span
                className={`h-6 w-6 rounded-full transition-transform duration-300`}
                style={{ background: 'var(--primary)', transform: theme === 'dark' ? 'translateX(32px)' : 'translateX(0px)' }}
            />
        </button>
    );
};


