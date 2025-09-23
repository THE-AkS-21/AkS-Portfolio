import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className={`text-2xl font-semibold text-green-200 my-4`}>
        {children}
    </a>
);


export const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
    const closeMenu = () => setMenuOpen(false);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out glass ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
        >
            <button
                onClick={closeMenu}
                className="absolute top-6 right-6 text-green-600 text-5xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Use Link for the home button and MobileNavLink for sections */}
            <Link to="/" onClick={closeMenu} className="text-2xl font-semibold text-green-200 my-4">Home</Link>
            <MobileNavLink href="#about" onClick={closeMenu}>About</MobileNavLink>
            <MobileNavLink href="#skills" onClick={closeMenu}>Skills</MobileNavLink>
            <MobileNavLink href="#education" onClick={closeMenu}>Education</MobileNavLink>
            <MobileNavLink href="#experience" onClick={closeMenu}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={closeMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={closeMenu}>Contact</MobileNavLink>
        </div>
    );
};