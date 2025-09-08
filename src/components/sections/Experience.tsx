import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { portfolioData } from '../../data/portfolioData';
import { ExperienceCard } from '../cards/ExperienceCard';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="section bg-noise">
            <RevealOnScroll>
                <div className="container-wide">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-8">Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.workExperience.map((exp, i) => (
                            <ExperienceCard key={i} experience={exp} />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};


