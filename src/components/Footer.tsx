import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon } from './icons/Icon'; // Import the centralized Icon component

export const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    return (
        <footer
            className="w-full py-6 border-t bg-white/80 backdrop-blur-md"
            style={{ borderColor: 'var(--border)' }}
        >
            <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm" style={{ color: 'var(--muted)' }}>
                    © {year} {portfolioData.name}. All rights reserved.
                </div>
                <div className="flex items-center gap-3">
                    {portfolioData.socials?.github && (
                        <a
                            href={portfolioData.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-10 w-10 rounded-full border transition hover:bg-black/10"
                            style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                            aria-label="GitHub"
                        >
                            <Icon name="github" className="text-xl" />
                        </a>
                    )}
                    {portfolioData.socials?.linkedin && (
                        <a
                            href={portfolioData.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-10 w-10 rounded-full border transition hover:bg-blue-500/10"
                            style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                            aria-label="LinkedIn"
                        >
                            <Icon name="linkedin" className="text-xl" />
                        </a>
                    )}
                </div>
            </div>
        </footer>
    );
};