import React from 'react';
import type { WorkExperience } from '../../types';
import { TechChips } from '../common/TechChips';

interface ExperienceCardProps {
    experience: WorkExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const { role, company, period, description, technologies } = experience;
    return (
        <div className="card hover-lift p-6">
            <h4 className="font-semibold text-lg mb-1">{role} for {company}</h4>
            <p className="text-sm text-gray-400 mb-3">{period}</p>
            <p className="text-gray-300">{description}</p>
            {technologies && technologies.length > 0 && (
                <div className="mt-4">
                    <TechChips technologies={technologies} variant="badge" />
                </div>
            )}
        </div>
    );
};


