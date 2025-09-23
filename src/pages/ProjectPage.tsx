import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { TechChips } from '../components/common/TechChips';
import ReactMarkdown from 'react-markdown';
import { Button } from '../components/common/Button';
import {ProjectGallery} from "../components/ProjectGallery.tsx";

// GitHub Icon SVG Component
const GitHubIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.43-1.32.78-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.94.44.38.83 1.12.83 2.27v3.36c0 .32.21.69.83.58A12 12 0 0012 .5z" />
    </svg>
);

export const ProjectPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = portfolioData.projects.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="btn btn-primary">Go Back Home</Link>
            </div>
        );
    }

    const hasGallery = project.gallery && project.gallery.length > 0;

    return (
        <div className="min-h-screen app-bg">
            <main className="py-20 md:py-28">
                {/* Header remains constrained for readability */}
                <div className="container-wide text-center mb-12">
                    <h1 className="gradient-title text-4xl md:text-6xl mb-4">{project.title}</h1>
                    <p className="max-w-3xl mx-auto text-lg" style={{ color: 'var(--muted)' }}>{project.description}</p>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        {project.liveDemo && (
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                <Button>Live Demo</Button>
                            </a>
                        )}
                        {project.sourceCode && (
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary">
                                    <span className="flex items-center gap-2">
                                        <GitHubIcon />
                                        GitHub
                                    </span>
                                </Button>
                            </a>
                        )}
                    </div>

                    <div className="mt-8 justify-center flex flex-wrap gap-2">
                        <TechChips technologies={project.technologies} />
                    </div>
                </div>

                {/* Gallery Section - Full Width */}
                {hasGallery && (
                    <div className="container-wide mb-12">
                        <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Gallery</h2>
                        <ProjectGallery images={project.gallery!} />
                    </div>
                )}

                {/* README Section - Full Width */}
                <div className="container-wide card p-6 md:p-10 overflow-hidden text-gray-400 bg-gray-800 rounded-md shadow-lg mb-12">
                    <article className="">
                        <ReactMarkdown>{project.readme}</ReactMarkdown>
                    </article>
                </div>

                <div className="container-wide text-center mt-12">
                    <Link to="/#projects" className="btn btn-secondary">← Back to Portfolio</Link>
                </div>
            </main>
        </div>
    );
};