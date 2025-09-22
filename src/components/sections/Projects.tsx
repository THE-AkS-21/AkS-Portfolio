import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCard } from '../cards/ProjectCard';
import { Section } from '../common/Section';

export const Projects: React.FC = () => {
    // Return null if there are no projects to show
    if (!portfolioData.projects || portfolioData.projects.length === 0) {
        return null;
    }

    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioData.projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </div>
        </Section>
    );
};