import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { portfolioData } from '../../data/portfolioData';

export const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent text-center">
                        ABOUT ME
                    </h2>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <p className="text-gray-500 mb-6">
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {portfolioData.skills.map(skill => (
                                <div key={skill.category} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skill.technologies.map((tech, key) => (
                                            <span
                                                key={key}
                                                className="bg-blue-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4 text-center">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-500 space-y-2">
                                <li>
                                    <strong>{portfolioData.education.degree}</strong> - {portfolioData.education.institution} ({portfolioData.education.period})
                                </li>
                                <li>
                                    Relevant Coursework: {portfolioData.education.coursework.join(', ')}.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4 text-center">💼 Work Experience</h3>
                            <div className="space-y-4 text-gray-500">
                                {portfolioData.workExperience.map((exp, i) => (
                                    <div key={i}>
                                        <h4 className="font-semibold">{exp.role} for {exp.company} ({exp.period})</h4>
                                        <p>{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
