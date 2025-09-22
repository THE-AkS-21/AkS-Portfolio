import { Home } from './sections/Home';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

export const PortfolioLayout = () => {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
};