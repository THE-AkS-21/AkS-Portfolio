import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { EducationCard } from '../cards/EducationCard';
import { Section } from '../common/Section';

export const Education: React.FC = () => {
    // Return null if there is no education data to show
    if (!portfolioData.education || portfolioData.education.length === 0) {
        return null;
    }

    return (
        <Section id="education" title="Education">
            <div className="space-y-8 max-w-4xl mx-auto">
                {portfolioData.education.map((ed, i) => (
                    <EducationCard key={i} education={ed} />
                ))}
            </div>
        </Section>
    );
};