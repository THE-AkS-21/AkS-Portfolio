import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { TechChips } from '../common/TechChips';
import { Card } from '../common/Card';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { id, title, description, technologies } = project;

    return (
        <Link to={`/project/${id}`} className="block h-full">
            <Card>
                <h3 className="text-xl font-bold mb-2 text-center text-blue-300">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    <TechChips technologies={technologies} />
                </div>
            </Card>
        </Link>
    );
};