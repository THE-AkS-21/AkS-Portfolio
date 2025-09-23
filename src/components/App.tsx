import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { PortfolioLayout } from './PortfolioLayout';
import { ProjectPage } from '../pages/ProjectPage';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MobileMenu } from './MobileMenu';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col app-bg text-gray-200">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<PortfolioLayout />} />
                    <Route path="/project/:projectId" element={<ProjectPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;