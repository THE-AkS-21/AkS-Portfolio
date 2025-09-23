import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={`/AkS-Portfolio/${href}`} className="text-blue-500 hover:text-gray-500 transition-colors">
        {children}
    </a>
);


export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 glass">
            <div className="container-wide">
                <div className="flex justify-between items-center h-16">
                    {/* Use the Link component for a proper SPA navigation to home */}
                    <Link to="/AkS-Portfolio/" className="font-mono text-xl font-bold text-gray-600">
                        the<span className="text-blue-600">.AkS</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#education">Education</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
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