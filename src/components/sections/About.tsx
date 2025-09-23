import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Section } from '../common/Section';

export const About: React.FC = () => {
    return (
        <Section id="about" title="ABOUT ME">
            <div className="card p-8 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
                <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0 rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: 'var(--primary)'}}>
                    <img src="/assets/hero2.png" alt={portfolioData.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-lg" style={{ color: 'var(--muted)' }}>
                        {portfolioData.aboutPage}
                    </p>
                </div>
            </div>
        </Section>
    );
};