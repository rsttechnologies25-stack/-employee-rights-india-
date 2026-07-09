import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';

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
const MinimumWageCheckerPage = lazy(() => import('./pages/MinimumWageCheckerPage'));
const OvertimeTrackerPage = lazy(() => import('./pages/OvertimeTrackerPage'));
const GrievanceGeneratorPage = lazy(() => import('./pages/GrievanceGeneratorPage'));
const ClauseAnalyzerPage = lazy(() => import('./pages/ClauseAnalyzerPage'));
const LabourDirectoryPage = lazy(() => import('./pages/LabourDirectoryPage'));
const SeveranceCalculatorPage = lazy(() => import('./pages/SeveranceCalculatorPage'));
const PFAnalyzerPage = lazy(() => import('./pages/PFAnalyzerPage'));
const PIPDefensePage = lazy(() => import('./pages/PIPDefensePage'));
const GratuityCalculatorPage = lazy(() => import('./pages/GratuityCalculatorPage'));
const ExitScannerPage = lazy(() => import('./pages/ExitScannerPage'));
const LegalMapPage = lazy(() => import('./pages/LegalMapPage'));
const MaternityRightsPage = lazy(() => import('./pages/MaternityRightsPage'));
const POSHActPage = lazy(() => import('./pages/POSHActPage'));
const PIPGuidePage = lazy(() => import('./pages/PIPGuidePage'));
const ForcedResignationPage = lazy(() => import('./pages/ForcedResignationPage'));
const MoonlightingPage = lazy(() => import('./pages/MoonlightingPage'));
const DataPrivacyPage = lazy(() => import('./pages/DataPrivacyPage'));
const Form16RightsPage = lazy(() => import('./pages/Form16RightsPage'));
const IncomeTaxCalculatorPage = lazy(() => import('./pages/IncomeTaxCalculatorPage'));
const ComplaintGuidePage = lazy(() => import('./pages/ComplaintGuidePage'));

// New Programmatic SEO Module
const StateLawsIndexPage = lazy(() => import('./pages/StateLawsIndexPage'));
const StateLawDetailPage = lazy(() => import('./pages/StateLawDetailPage'));

// Tamil Nadu Mega-Hub
const TamilNaduHubPage = lazy(() => import('./pages/TamilNaduHubPage'));
const TNSectorDetailPage = lazy(() => import('./pages/TNSectorDetailPage'));
const TNMinimumWagesPage = lazy(() => import('./pages/TNMinimumWagesPage'));
const MinimumWagesPage = lazy(() => import('./pages/MinimumWagesPage'));

// New Labour Codes Module
const LabourCodesIndexPage = lazy(() => import('./pages/LabourCodesIndexPage'));
const WageCodePage = lazy(() => import('./pages/WageCodePage'));
const SocialSecurityCodePage = lazy(() => import('./pages/SocialSecurityCodePage'));
const OSHCodePage = lazy(() => import('./pages/OSHCodePage'));
const IRCodePage = lazy(() => import('./pages/IRCodePage'));
const WhatsNewPage = lazy(() => import('./pages/WhatsNewPage'));

function App() {
    return (
        <ThemeProvider>
            <Router>
                <ScrollToTop />
                <div className="min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary bg-white dark:bg-gray-950 transition-colors duration-300">
                    <Navbar />
                <main className="flex-grow">
                    <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh] text-primary"><div className="animate-pulse flex flex-col items-center gap-4"><div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div><span className="font-bold text-gray-500 dark:text-gray-400">Loading...</span></div></div>}>
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
                        <Route path="/tools/minimum-wage-checker" element={<MinimumWageCheckerPage />} />
                        <Route path="/tools/overtime-tracker" element={<OvertimeTrackerPage />} />
                        <Route path="/tools/grievance-generator" element={<GrievanceGeneratorPage />} />
                        <Route path="/tools/clause-analyzer" element={<ClauseAnalyzerPage />} />
                        <Route path="/tools/labour-directory" element={<LabourDirectoryPage />} />
                        <Route path="/tools/severance-calculator" element={<SeveranceCalculatorPage />} />
                        <Route path="/tools/pf-analyzer" element={<PFAnalyzerPage />} />
                        <Route path="/tools/pip-defense" element={<PIPDefensePage />} />
                        <Route path="/tools/gratuity-calculator" element={<GratuityCalculatorPage />} />
                        <Route path="/tools/exit-scanner" element={<ExitScannerPage />} />
                        <Route path="/legal-map" element={<LegalMapPage />} />

                        <Route path="/maternity-rights" element={<MaternityRightsPage />} />
                        <Route path="/posh-act" element={<POSHActPage />} />
                        
                        <Route path="/pip-guide" element={<PIPGuidePage />} />
                        <Route path="/forced-resignation" element={<ForcedResignationPage />} />
                        
                        <Route path="/moonlighting" element={<MoonlightingPage />} />
                        <Route path="/data-privacy" element={<DataPrivacyPage />} />
                        
                        <Route path="/form-16-rights" element={<Form16RightsPage />} />
                        <Route path="/complaint-guide" element={<ComplaintGuidePage />} />

                        {/* Templates */}
                        <Route path="/templates" element={<TemplatesPage />} />

                        {/* Master FAQ */}
                        <Route path="/faq" element={<FAQPage />} />

                        {/* State Laws */}
                        <Route path="/state-labour-laws" element={<StateLawsIndexPage />} />
                        <Route path="/state-labour-laws/tamil-nadu" element={<Navigate to="/tamil-nadu" replace />} />
                        <Route path="/state-labour-laws/:stateSlug" element={<StateLawDetailPage />} />

                        {/* Tamil Nadu Mega-Hub */}
                        <Route path="/tamil-nadu" element={<TamilNaduHubPage />} />
                        <Route path="/tamil-nadu/:sectorId" element={<TNSectorDetailPage />} />
                        <Route path="/tamil-nadu-minimum-wages" element={<TNMinimumWagesPage />} />
                        <Route path="/minimum-wages" element={<MinimumWagesPage />} />

                        {/* What's New */}
                        <Route path="/whats-new" element={<WhatsNewPage />} />

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
                <Chatbot />
            </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
