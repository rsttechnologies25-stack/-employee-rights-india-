import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Existing pages
import Home from './pages/Home';
import PFESIPage from './pages/PFESIPage';
import ContractsPage from './pages/ContractsPage';
import NoticePage from './pages/NoticePage';
import WorkingHoursPage from './pages/WorkingHoursPage';
import LeavePage from './pages/LeavePage';
import IllegalPracticesPage from './pages/IllegalPracticesPage';
import RightsIndexPage from './pages/RightsIndexPage';
import RightsDetailPage from './pages/RightsDetailPage';

// New Termination Module
import TerminationProbationPage from './pages/TerminationProbationPage';
import TerminationConfirmedPage from './pages/TerminationConfirmedPage';
import WrongfulTerminationPage from './pages/WrongfulTerminationPage';

// New F&F & Exit Module
import FFSettlementPage from './pages/FFSettlementPage';
import ExitProcessPage from './pages/ExitProcessPage';

// New Letters Module
import ExperienceLetterPage from './pages/ExperienceLetterPage';
import RelievingLetterPage from './pages/RelievingLetterPage';
import ServiceCertificatePage from './pages/ServiceCertificatePage';

// New Salary Module
import SalaryCalculationPage from './pages/SalaryCalculationPage';
import PayCyclePage from './pages/PayCyclePage';
import DelayedSalaryPage from './pages/DelayedSalaryPage';

// New Gratuity Module
import GratuityPage from './pages/GratuityPage';

// New Tools & Templates
import ToolsPage from './pages/ToolsPage';
import TemplatesPage from './pages/TemplatesPage';
import FAQPage from './pages/FAQPage';
import NoticeBuyoutCalculatorPage from './pages/NoticeBuyoutCalculatorPage';
import LeaveEncashmentCalculatorPage from './pages/LeaveEncashmentCalculatorPage';
import FFCalculatorPage from './pages/FFCalculatorPage';
import SalaryProrationCalculatorPage from './pages/SalaryProrationCalculatorPage';
import SalaryCalculatorPage from './pages/SalaryCalculatorPage';
import PFCheckerPage from './pages/PFCheckerPage';
import MaternityRightsPage from './pages/MaternityRightsPage';
import POSHActPage from './pages/POSHActPage';
import PIPGuidePage from './pages/PIPGuidePage';
import ForcedResignationPage from './pages/ForcedResignationPage';
import MoonlightingPage from './pages/MoonlightingPage';
import DataPrivacyPage from './pages/DataPrivacyPage';
import Form16RightsPage from './pages/Form16RightsPage';
import IncomeTaxCalculatorPage from './pages/IncomeTaxCalculatorPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        {/* Existing Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/pf-esi" element={<PFESIPage />} />
                        <Route path="/contracts" element={<ContractsPage />} />
                        <Route path="/notice-period" element={<NoticePage />} />
                        <Route path="/working-hours" element={<WorkingHoursPage />} />
                        <Route path="/leave-holidays" element={<LeavePage />} />
                        <Route path="/illegal-practices" element={<IllegalPracticesPage />} />
                        <Route path="/rights" element={<RightsIndexPage />} />
                        <Route path="/rights/:categoryId" element={<RightsDetailPage />} />

                        {/* Termination Module */}
                        <Route path="/termination/probation" element={<TerminationProbationPage />} />
                        <Route path="/termination/after-confirmation" element={<TerminationConfirmedPage />} />
                        <Route path="/termination/wrongful" element={<WrongfulTerminationPage />} />

                        {/* F&F & Exit Module */}
                        <Route path="/full-final-settlement" element={<FFSettlementPage />} />
                        <Route path="/exit-process" element={<ExitProcessPage />} />

                        {/* Letters Module */}
                        <Route path="/experience-letter" element={<ExperienceLetterPage />} />
                        <Route path="/relieving-letter" element={<RelievingLetterPage />} />
                        <Route path="/service-certificate" element={<ServiceCertificatePage />} />

                        {/* Salary Module */}
                        <Route path="/salary-calculation" element={<SalaryCalculationPage />} />
                        <Route path="/pay-cycle" element={<PayCyclePage />} />
                        <Route path="/delayed-salary" element={<DelayedSalaryPage />} />

                        {/* Gratuity */}
                        <Route path="/gratuity" element={<GratuityPage />} />

                        {/* Tools & Calculators */}
                        <Route path="/tools" element={<ToolsPage />} />
                        <Route path="/salary-calculator" element={<SalaryCalculatorPage />} />
                        <Route path="/pf-checker" element={<PFCheckerPage />} />
                        <Route path="/tools/notice-buyout-calculator" element={<NoticeBuyoutCalculatorPage />} />
                        <Route path="/tools/leave-encashment-calculator" element={<LeaveEncashmentCalculatorPage />} />
                        <Route path="/tools/ff-calculator" element={<FFCalculatorPage />} />
                        <Route path="/tools/salary-proration-calculator" element={<SalaryProrationCalculatorPage />} />
                        <Route path="/tools/income-tax-calculator" element={<IncomeTaxCalculatorPage />} />

                        <Route path="/maternity-rights" element={<MaternityRightsPage />} />
                        <Route path="/posh-act" element={<POSHActPage />} />
                        
                        <Route path="/pip-guide" element={<PIPGuidePage />} />
                        <Route path="/forced-resignation" element={<ForcedResignationPage />} />
                        
                        <Route path="/moonlighting" element={<MoonlightingPage />} />
                        <Route path="/data-privacy" element={<DataPrivacyPage />} />
                        
                        <Route path="/form-16-rights" element={<Form16RightsPage />} />

                        {/* Templates */}
                        <Route path="/templates" element={<TemplatesPage />} />

                        {/* Master FAQ */}
                        <Route path="/faq" element={<FAQPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
