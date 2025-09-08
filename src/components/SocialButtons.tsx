import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const SocialButtons: React.FC = () => {
    const { socials, resumeUrl } = portfolioData;
    return (
        <div className="flex items-center justify-center gap-3">
            {resumeUrl && (
                <a
                    href={resumeUrl}
                    download
                    className="btn btn-primary"
                    aria-label="Download Resume"
                    title="Download Resume"
                >
                    Download Resume
                </a>
            )}
            {socials?.github && (
                <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border transition"
                    style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.43-1.32.78-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.44.38.83 1.12.83 2.27v3.36c0 .32.21.69.83.58A12 12 0 0012 .5z" />
                    </svg>
                </a>
            )}
            {socials?.linkedin && (
                <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border transition"
                    style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3V9zm7 0h3.6v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4V15c0-1.4 0-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3v6H10V9z" />
                    </svg>
                </a>
            )}
        </div>
    );
};


