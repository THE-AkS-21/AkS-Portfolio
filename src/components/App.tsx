import { Routes, Route } from 'react-router-dom';
import { PortfolioLayout } from './PortfolioLayout'; // We'll create this next
import { ProjectPage } from '../pages/ProjectPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<PortfolioLayout />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
    );
}

export default App;