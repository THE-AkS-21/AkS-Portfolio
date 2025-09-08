import React from 'react';
import { TechChips } from '../common/TechChips';

interface SkillCardProps {
    title: string;
    items: string[];
    icon?: React.ReactNode;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, items, icon }) => {
    return (
        <div className="card hover-lift p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
                {icon && <span className="text-2xl hover:scale-110 transition" style={{ color: 'var(--primary)' }} aria-hidden>{icon}</span>}
                <h3 className="text-xl font-bold text-center">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <TechChips technologies={items} variant="chip" />
            </div>
        </div>
    );
};


