import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import { TechChips } from '../common/TechChips';
import { Card } from '../common/Card';

// Error 1 Fix: Define the interface for the component's props.
interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    // Error 2 Fix: Only destructure the props you are actually using in this component.
    const { id, title, description, technologies } = project;

    return (
        <Link to={`/project/${id}`} className="block h-full">
            <Card>
                <h3 className="text-xl font-bold mb-2 text-center text-blue-300">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                    {/* Error 3 Fix: The 'variant' prop was removed in our last refactor of TechChips. */}
                    <TechChips technologies={technologies} />
                </div>
            </Card>
        </Link>
    );
};