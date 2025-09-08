import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const storageKey = 'aks-theme';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(() => {
        const stored = (localStorage.getItem(storageKey) as Theme | null) || null;
        const initial: Theme = stored ?? 'dark';
        setTheme(initial);
        document.documentElement.setAttribute('data-theme', initial);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(storageKey, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return { theme, toggleTheme };
};


