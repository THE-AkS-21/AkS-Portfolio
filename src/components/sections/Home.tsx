import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import logo from '/src/assets/AKS_logo.png';
import { Button } from '../common/Button';

export const Home: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-3 justify-center ">
                    <div className="h-80 w-80 rounded-full object-cover flex mx-auto">
                        <img src={logo} alt="Ankit Kumar Singh" />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Ankit Kumar Singh
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm an engineer passionate about problem-solving and innovation.
                        With a background in computer science and extensive experience in software and web development,
                        I'm dedicated to delivering top-notch work. I'm committed to continuous professional
                        growth and development, always seeking new opportunities to expand my skills and knowledge.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects">
                            <Button>View Projects</Button>
                        </a>
                        <a href="#contact">
                            <Button variant="secondary">Contact Me</Button>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
