import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { portfolioData } from '../../data/portfolioData';
import { EducationCard } from '../cards/EducationCard';
import Background from "../../assets/background.png";

export const Education: React.FC = () => {
    return (
        <section id="education" className="section bg-noise" style={{ backgroundImage: `url(${Background})`,
            backgroundSize: 'cover', // Stretches the image to cover the whole section
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
        }}>
            <RevealOnScroll>
                <div className="container-wide">
                    <h2 className="gradient-title text-3xl md:text-4xl mb-8">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.education.map((ed, i) => (
                            <EducationCard key={i} education={ed} />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};


