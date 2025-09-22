import React from 'react';
import { Icon, getIconColor } from '../icons/Icon';

// The 'variant' prop is no longer needed, so we remove it from the interface.
interface TechChipsProps {
    technologies: string[];
}

export const TechChips: React.FC<TechChipsProps> = ({ technologies }) => {
    if (!technologies || technologies.length === 0) return null;

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