import { useState } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './Footer';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } text-gray-200 app-bg`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

export default App;
