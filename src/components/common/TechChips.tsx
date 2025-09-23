import React from 'react';
import { Icon, getIconColor } from '../icons/Icon';

// The 'variant' prop is now properly handled.
interface TechChipsProps {
    technologies: string[];
    variant?: 'chip' | 'badge';
}

export const TechChips: React.FC<TechChipsProps> = ({ technologies, variant = 'chip' }) => {
    if (!technologies || technologies.length === 0) return null;

    // Logic for the small, icon-only badge variant
    if (variant === 'badge') {
        return (
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full border backdrop-blur-sm"
                        style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg-soft) 70%, transparent)' }}
                        title={tech}
                    >
                        <Icon name={tech} className="text-lg" />
                    </span>
                ))}
            </div>
        );
    }

    // Default "chip" variant with icon and text
    return (
        <div className="flex flex-wrap gap-2 justify-center">
            {technologies.map((tech) => {
                const brandColor = getIconColor(tech);
                return (
                    <span
                        key={tech}
                        className="chip hover:scale-105 active:scale-95 inline-flex items-center gap-1.5 relative overflow-hidden"
                        style={{
                            color: brandColor,
                            background: `color-mix(in srgb, ${brandColor} 14%, transparent)`
                        }}
                    >
                        <span className="absolute inset-0 animate-moving-stripes opacity-50"></span>
                        <Icon name={tech} className="relative z-10" />
                        <span className="relative z-10">{tech}</span>
                    </span>
                );
            })}
        </div>
    );
};