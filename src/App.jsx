import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const PFESIPage = lazy(() => import('./pages/PFESIPage'));
const ContractsPage = lazy(() => import('./pages/ContractsPage'));
const NoticePage = lazy(() => import('./pages/NoticePage'));
const WorkingHoursPage = lazy(() => import('./pages/WorkingHoursPage'));
const LeavePage = lazy(() => import('./pages/LeavePage'));
const IllegalPracticesPage = lazy(() => import('./pages/IllegalPracticesPage'));
const RightsIndexPage = lazy(() => import('./pages/RightsIndexPage'));
const RightsDetailPage = lazy(() => import('./pages/RightsDetailPage'));
const TerminationProbationPage = lazy(() => import('./pages/TerminationProbationPage'));
const TerminationConfirmedPage = lazy(() => import('./pages/TerminationConfirmedPage'));
const WrongfulTerminationPage = lazy(() => import('./pages/WrongfulTerminationPage'));
const FFSettlementPage = lazy(() => import('./pages/FFSettlementPage'));
const ExitProcessPage = lazy(() => import('./pages/ExitProcessPage'));
const ExperienceLetterPage = lazy(() => import('./pages/ExperienceLetterPage'));
const RelievingLetterPage = lazy(() => import('./pages/RelievingLetterPage'));
const ServiceCertificatePage = lazy(() => import('./pages/ServiceCertificatePage'));
const SalaryCalculationPage = lazy(() => import('./pages/SalaryCalculationPage'));
const PayCyclePage = lazy(() => import('./pages/PayCyclePage'));
const DelayedSalaryPage = lazy(() => import('./pages/DelayedSalaryPage'));
const GratuityPage = lazy(() => import('./pages/GratuityPage'));
const ToolsPage = lazy(() => import('./pages/ToolsPage'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const NoticeBuyoutCalculatorPage = lazy(() => import('./pages/NoticeBuyoutCalculatorPage'));
const LeaveEncashmentCalculatorPage = lazy(() => import('./pages/LeaveEncashmentCalculatorPage'));
const FFCalculatorPage = lazy(() => import('./pages/FFCalculatorPage'));
const SalaryProrationCalculatorPage = lazy(() => import('./pages/SalaryProrationCalculatorPage'));
const SalaryCalculatorPage = lazy(() => import('./pages/SalaryCalculatorPage'));
const PFCheckerPage = lazy(() => import('./pages/PFCheckerPage'));
const MaternityRightsPage = lazy(() => import('./pages/MaternityRightsPage'));
const POSHActPage = lazy(() => import('./pages/POSHActPage'));
const PIPGuidePage = lazy(() => import('./pages/PIPGuidePage'));
const ForcedResignationPage = lazy(() => import('./pages/ForcedResignationPage'));
const MoonlightingPage = lazy(() => import('./pages/MoonlightingPage'));
const DataPrivacyPage = lazy(() => import('./pages/DataPrivacyPage'));
const Form16RightsPage = lazy(() => import('./pages/Form16RightsPage'));
const IncomeTaxCalculatorPage = lazy(() => import('./pages/IncomeTaxCalculatorPage'));

// New Programmatic SEO Module
const StateLawsIndexPage = lazy(() => import('./pages/StateLawsIndexPage'));
const StateLawDetailPage = lazy(() => import('./pages/StateLawDetailPage'));

// New Labour Codes Module
const LabourCodesIndexPage = lazy(() => import('./pages/LabourCodesIndexPage'));
const WageCodePage = lazy(() => import('./pages/WageCodePage'));
const SocialSecurityCodePage = lazy(() => import('./pages/SocialSecurityCodePage'));
const OSHCodePage = lazy(() => import('./pages/OSHCodePage'));
const IRCodePage = lazy(() => import('./pages/IRCodePage'));

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary">
                <Navbar />
                <main className="flex-grow">
                    <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh] text-primary"><div className="animate-pulse flex flex-col items-center gap-4"><div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div><span className="font-bold text-gray-500">Loading...</span></div></div>}>
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

                        {/* State Laws */}
                        <Route path="/state-labour-laws" element={<StateLawsIndexPage />} />
                        <Route path="/state-labour-laws/:stateSlug" element={<StateLawDetailPage />} />

                        {/* New Labour Codes */}
                        <Route path="/new-labour-codes" element={<LabourCodesIndexPage />} />
                        <Route path="/new-labour-codes/wage-code" element={<WageCodePage />} />
                        <Route path="/new-labour-codes/social-security-code" element={<SocialSecurityCodePage />} />
                        <Route path="/new-labour-codes/osh-code" element={<OSHCodePage />} />
                        <Route path="/new-labour-codes/ir-code" element={<IRCodePage />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
