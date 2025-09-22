import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ExperienceCard } from '../cards/ExperienceCard';
import { Section } from '../common/Section';

export const Experience: React.FC = () => {
    // Return null if there is no work experience to show
    if (!portfolioData.workExperience || portfolioData.workExperience.length === 0) {
        return null;
    }

    return (
        <Section id="experience" title="Work Experience">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {portfolioData.workExperience.map((exp, i) => (
                    <ExperienceCard key={i} experience={exp} />
                ))}
            </div>
        </Section>
    );
};