import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './icons/Icon'; // Import the new Icon component

export const SocialButtons: React.FC = () => {
    const { socials } = portfolioData;

    return (
        <div className="flex items-center justify-center gap-4">
            {socials?.github && (
                <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 w-12 rounded-full border transition-all duration-300 hover:bg-white/20 hover:scale-110"
                    style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <Icon name="github" className="text-2xl" />
                </a>
            )}
            {socials?.linkedin && (
                <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 w-12 rounded-full border transition-all duration-300 hover:bg-white/20 hover:scale-110"
                    style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <Icon name="linkedin" className="text-2xl" />
                </a>
            )}
        </div>
    );
};