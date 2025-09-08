import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import logo from '/src/assets/AKS_logo.png';
import { Button } from '../common/Button';
import { portfolioData } from '../../data/portfolioData';
import { SocialButtons } from '../SocialButtons';

export const Home: React.FC = () => {
    return (
        <section id="home" className="section hero-gradient bg-noise bg-grid">
            <RevealOnScroll>
                <div className="container-wide z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-2 text-center md:text-left">
                            <h1 className="gradient-title text-5xl md:text-6xl mb-4 leading-tight animate-fade-in-up">
                                Hi, I'm {portfolioData.name}
                            </h1>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '240ms' }}>
                                <a href="#projects">
                                    <Button>View Projects</Button>
                                </a>
                                <a href="#contact">
                                    <Button variant="secondary">Contact Me</Button>
                                </a>
                            </div>
                            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: '360ms' }}>
                                <SocialButtons />
                            </div>
                        </div>
                        <div className="order-1 md:order-1 flex md:justify-start justify-center">
                            <div className="h-44 w-44 md:h-80 md:w-80 rounded-full overflow-hidden mb-6 animate-float shadow-[0_10px_40px_rgba(0,0,0,0.35)] border" style={{ borderColor: 'var(--border)' }}>
                                <img src={logo} alt={portfolioData.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
