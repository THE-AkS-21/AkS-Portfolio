import React, { useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 glass">
            <div className="container-wide">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-gray-600">
                        the<span className="text-blue-600">.AkS</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-blue-500 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-blue-500 hover:text-white transition-colors">About</a>
                        <a href="#skills" className="text-blue-500 hover:text-white transition-colors">Skills</a>
                        <a href="#education" className="text-blue-500 hover:text-white transition-colors">Education</a>
                        <a href="#experience" className="text-blue-500 hover:text-white transition-colors">Experience</a>
                        <a href="#projects" className="text-blue-500 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-blue-500 hover:text-white transition-colors">Contact</a>
                        <ThemeToggle />
                    </div>
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-green-400"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>
                </div>
            </div>
        </nav>
    );
};