import React from 'react';
import { getTechBrandColor, getTechIcon } from '../icons/techIcons';

interface TechChipsProps {
    technologies: string[];
    variant?: 'chip' | 'badge';
}

export const TechChips: React.FC<TechChipsProps> = ({ technologies, variant = 'chip' }) => {
    if (!technologies || technologies.length === 0) return null;

    if (variant === 'badge') {
        return (
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full border backdrop-blur-sm"
                        style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg-soft) 70%, transparent)' }}
                        title={tech}
                    >
                        <span className="text-[16px]" style={{ color: getTechBrandColor(tech) }}>
                            {getTechIcon(tech)}
                        </span>
                    </span>
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => {
                const brand = getTechBrandColor(tech) as string;
                return (
                    <span
                        key={i}
                        className="chip hover:scale-105 active:scale-95 inline-flex items-center gap-1 relative overflow-hidden"
                        title={tech}
                        style={{
                            color: brand,
                            background: `color-mix(in srgb, ${brand} 14%, transparent)`
                        }}
                    >
                        <span className="absolute inset-0 animate-moving-stripes opacity-50"></span>
                        <span style={{ color: brand }}>{getTechIcon(tech)}</span>
                        <span>{tech}</span>
                    </span>
                );
            })}
        </div>
    );
};


