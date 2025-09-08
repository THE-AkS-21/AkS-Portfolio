import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { portfolioData } from '../../data/portfolioData';
// About section now focuses on a brief intro; skills/education/experience moved to their own sections

export const About: React.FC = () => {
    return (
        <section id="about" className="section bg-noise">
            <RevealOnScroll>
                <div className="container-wide">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-8">ABOUT ME</h2>

                    <div className="card hover-lift p-6">
                        <p className="text-gray-300">
                            {portfolioData.about}
                        </p>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
