import { useState } from 'react';
import { LoadingScreen } from './LoadingScreen';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <div
                className={`min-h-screen transition-opacity duration-700 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } bg-white text-gray-500`}
            >
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </>
    );
}

export default App;
