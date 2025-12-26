import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PFESIPage from './pages/PFESIPage';
import ContractsPage from './pages/ContractsPage';
import NoticePage from './pages/NoticePage';
import WorkingHoursPage from './pages/WorkingHoursPage';
import IllegalPracticesPage from './pages/IllegalPracticesPage';
import RightsIndexPage from './pages/RightsIndexPage';
import RightsDetailPage from './pages/RightsDetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pf-esi" element={<PFESIPage />} />
                        <Route path="/contracts" element={<ContractsPage />} />
                        <Route path="/notice-period" element={<NoticePage />} />
                        <Route path="/working-hours" element={<WorkingHoursPage />} />
                        <Route path="/illegal-practices" element={<IllegalPracticesPage />} />
                        <Route path="/rights" element={<RightsIndexPage />} />
                        <Route path="/rights/:categoryId" element={<RightsDetailPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
