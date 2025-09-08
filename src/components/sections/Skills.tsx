import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { portfolioData } from '../../data/portfolioData';
import { SkillCard } from '../cards/SkillCard';
import { getSkillIcon } from '../icons/skillIcons';

export const Skills: React.FC = () => {
    return (
        <section id="skills" className="section bg-noise">
            <RevealOnScroll>
                <div className="container-wide">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-8">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.skills.map(skill => (
                            <SkillCard
                                key={skill.category}
                                title={skill.category}
                                items={skill.technologies}
                                icon={getSkillIcon(skill.category)}
                            />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};


