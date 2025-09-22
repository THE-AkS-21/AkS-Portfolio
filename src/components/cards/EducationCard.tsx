import React from 'react';
import type { Education } from '../../types';

// Generic Location Icon
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

interface EducationCardProps {
    education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
    const { degree, institution, period, coursework, location, logo } = education;

    // Don't render the card if essential info is missing
    if (!degree || !institution) {
        return null;
    }

    const hasCoursework = Array.isArray(coursework) && coursework.length > 0;

    return (
        <div className="card hover-lift p-6 flex items-start gap-5">
            {/* Conditionally render the provided logo */}
            {logo && (
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-md flex items-center justify-center overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
                    <img src={logo} alt={`${institution} logo`} className="w-full h-full object-contain p-1" />
                </div>
            )}
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-300" style={{ color: 'var(--text)' }}>{institution}</h3>
                <p className="font-semibold text-gray-200" style={{color: 'var(--text)'}}>{degree}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mt-1" style={{ color: 'var(--muted)' }}>
                    {period && (
                        <span>{period}</span>
                    )}
                    {location && (
                        <span className="flex items-center gap-1.5">
                            <LocationIcon /> {location}
                        </span>
                    )}
                </div>

                {hasCoursework && (
                    <div className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
                        <p>
                            <span className="font-semibold">Relevant Coursework:</span> {coursework.join(', ')}.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};