import React from 'react';
import type { WorkExperience } from '../../types';
import { TechChips } from '../common/TechChips';
import { Card } from '../common/Card'; // Import the reusable Card component

interface ExperienceCardProps {
    experience: WorkExperience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const { role, company, period, description, technologies } = experience;
    return (
        <Card>
            <h4 className="font-semibold text-lg mb-1 text-blue-300">{role} for {company}</h4>
            <p className="text-sm text-gray-500 mb-3">{period}</p>
            <p className="text-gray-400">{description}</p>
            {technologies && technologies.length > 0 && (
                <div className="mt-4">
                    <TechChips technologies={technologies} variant="badge" />
                </div>
            )}
        </Card>
    );
};