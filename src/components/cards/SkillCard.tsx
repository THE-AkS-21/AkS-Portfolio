import React from 'react';
import { TechChips } from '../common/TechChips';
import { Card } from '../common/Card'; // Import the reusable Card component
import { Icon } from '../icons/Icon';

interface SkillCardProps {
    title: string;
    items: string[];
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
    return (
        <Card>
            <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name={title} className="text-2xl" />
                <h3 className="text-xl font-bold text-center text-blue-300">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <TechChips technologies={items} variant="chip" />
            </div>
        </Card>
    );
};