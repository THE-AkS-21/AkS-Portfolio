import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import logo from '/src/assets/AKS_logo.png';
import { SocialButtons } from '../SocialButtons';
import Background from '../../assets/background.png';
import {Button} from "../common/Button.tsx";

export const Home: React.FC = () => {
    return (
        <section id="home" className="section" style={{ backgroundImage: `url(${Background})`,
            backgroundSize: 'cover', // Stretches the image to cover the whole section
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat' // Prevents the image from repeating
        }}>
            <div className="container-wide z-10 text-center">
                <div className="order-1 md:order-1 flex justify-center w-full">
                    <div className="h-44 w-44 md:h-80 md:w-80 rounded-full overflow-hidden mb-6 animate-float shadow-[0_10px_40px_rgba(0,0,0,0.35)] border" style={{ borderColor: 'var(--border)' }}>
                        <img src={logo} alt={portfolioData.name} className="w-full h-full object-cover" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-6xl mb-4 leading-tight text-gray-600 font-bold">
                    Hi, I'm {portfolioData.name}
                </h1>
                {/* Added text-gray-200 for a softer, readable color */}
                <p className="text-xl md:text-2xl mb-8 text-gray-600">{portfolioData.aboutHome}</p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    <a href="#projects">
                        <Button>View My Work</Button>
                    </a>
                    <a href="#contact">
                        <Button variant="secondary">Get In Touch</Button>
                    </a>
                </div>
                <div className="mt-8">
                    <SocialButtons />
                </div>
            </div>
        </section>
    );
};