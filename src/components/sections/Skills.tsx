import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SkillCard } from '../cards/SkillCard';
import { getSkillIcon } from '../icons/skillIcons';
import { Section } from '../common/Section';

export const Skills: React.FC = () => {
    return (
        <Section id="skills" title="Skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.skills.map(skill => (
                    <SkillCard
                        key={skill.category}
                        title={skill.category}
                        items={skill.technologies}
                        icon={getSkillIcon(skill.category)}
                    />
                ))}
            </div>
        </Section>
    );
};