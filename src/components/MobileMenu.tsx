import React from 'react';

interface MobileMenuProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
    const linkClasses = `text-2xl font-semibold text-green-200 my-4 transform transition-transform duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`;

    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out glass ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-green-600 text-5xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a href="#home" onClick={() => setMenuOpen(false)} className={linkClasses}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className={linkClasses}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className={linkClasses}>Skills</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className={linkClasses}>Education</a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className={linkClasses}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className={linkClasses}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClasses}>Contact</a>
        </div>
    );
};
