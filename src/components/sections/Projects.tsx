import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { portfolioData } from '../../data/portfolioData';
import { ProjectCard } from '../cards/ProjectCard';

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="section bg-noise">
            <RevealOnScroll>
                <div className="container-wide">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-8">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.projects.map((project, i) => (
                            <div key={i} className="card hover-lift p-6">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};