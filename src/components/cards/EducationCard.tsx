import React from 'react';
import type { Education } from '../../types';

interface EducationCardProps {
    education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
    const { title, degree, institution, period, coursework } = education;
    return (
        <div className="card hover-lift p-6">
            <h3 className="text-xl font-bold mb-2 text-center">{title ?? '🏫 Education'}</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <strong>{degree}</strong> - {institution} ({period})
                </li>
                <li>
                    Relevant Coursework: {Array.isArray(coursework) ? coursework.join(', ') : coursework}.
                </li>
            </ul>
        </div>
    );
};


