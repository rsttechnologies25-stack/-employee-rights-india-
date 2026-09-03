import React from 'react';
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
const MicromanagementPage = lazy(() => import('./pages/MicromanagementPage'));
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
const ProfessionalTaxPage = lazy(() => import('./pages/ProfessionalTaxPage'));
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
const IncomeTaxCalculatorPage = lazy(() => import('./pages/IncomeTaxCalculatorPage'));
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
const ShamContractorScannerPage = lazy(() => import('./pages/ShamContractorScannerPage'));
const HRACalculatorPage = lazy(() => import('./pages/HRACalculatorPage'));
const MaternityTrackerPage = lazy(() => import('./pages/MaternityTrackerPage'));
const NightShiftAuditPage = lazy(() => import('./pages/NightShiftAuditPage'));
const BonusAnalyzerPage = lazy(() => import('./pages/BonusAnalyzerPage'));
const OfferRevocationPage = lazy(() => import('./pages/OfferRevocationPage'));
const BGVShieldPage = lazy(() => import('./pages/BGVShieldPage'));
const LayoffSurvivalKitPage = lazy(() => import('./pages/LayoffSurvivalKitPage'));
const EmploymentBondScannerPage = lazy(() => import('./pages/EmploymentBondScannerPage'));
const NoticeAdjustmentCalculatorPage = lazy(() => import('./pages/NoticeAdjustmentCalculatorPage'));
const POSHComplaintBuilderPage = lazy(() => import('./pages/POSHComplaintBuilderPage'));
const GigWorkerRightsPage = lazy(() => import('./pages/GigWorkerRightsPage'));
const LegalNoticeGeneratorPage = lazy(() => import('./pages/LegalNoticeGeneratorPage'));
const CTCDeductionScannerPage = lazy(() => import('./pages/CTCDeductionScannerPage'));

// New Guided Decision Tools
const AuthorityFinderPage = lazy(() => import('./pages/AuthorityFinderPage'));
const ProblemAssessmentWizardPage = lazy(() => import('./pages/ProblemAssessmentWizardPage'));
const EvidenceChecklistPage = lazy(() => import('./pages/EvidenceChecklistPage'));
const TimelineBuilderPage = lazy(() => import('./pages/TimelineBuilderPage'));

// New Dispute Guides
const AbscondingDisputePage = lazy(() => import('./pages/AbscondingDisputePage'));
const NoRecordDisputePage = lazy(() => import('./pages/NoRecordDisputePage'));
const HandoverAssetDisputePage = lazy(() => import('./pages/HandoverAssetDisputePage'));
const DataMisuseAllegationPage = lazy(() => import('./pages/DataMisuseAllegationPage'));
const TraineeRightsPage = lazy(() => import('./pages/TraineeRightsPage'));

// Trust & Governance Pages
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const EditorialPolicyPage = lazy(() => import('./pages/EditorialPolicyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const MaternityRightsPage = lazy(() => import('./pages/MaternityRightsPage'));
const POSHActPage = lazy(() => import('./pages/POSHActPage'));

const PIPGuidePage = lazy(() => import('./pages/PIPGuidePage'));
const ForcedResignationPage = lazy(() => import('./pages/ForcedResignationPage'));

const MoonlightingPage = lazy(() => import('./pages/MoonlightingPage'));
const DataPrivacyPage = lazy(() => import('./pages/DataPrivacyPage'));

const Form16RightsPage = lazy(() => import('./pages/Form16RightsPage'));
const ComplaintGuidePage = lazy(() => import('./pages/ComplaintGuidePage'));

// State Laws
const StateLawsIndexPage = lazy(() => import('./pages/StateLawsIndexPage'));
const StateLawDetailPage = lazy(() => import('./pages/StateLawDetailPage'));

// Tamil Nadu Hub
const TamilNaduHubPage = lazy(() => import('./pages/TamilNaduHubPage'));
const TNSectorDetailPage = lazy(() => import('./pages/TNSectorDetailPage'));
const TNMinimumWagesPage = lazy(() => import('./pages/TNMinimumWagesPage'));
const MinimumWagesPage = lazy(() => import('./pages/MinimumWagesPage'));

// What's New
const WhatsNewPage = lazy(() => import('./pages/WhatsNewPage'));

// New Labour Codes
const LabourCodesIndexPage = lazy(() => import('./pages/LabourCodesIndexPage'));
const WageCodePage = lazy(() => import('./pages/WageCodePage'));
const SocialSecurityCodePage = lazy(() => import('./pages/SocialSecurityCodePage'));
const OSHCodePage = lazy(() => import('./pages/OSHCodePage'));
const IRCodePage = lazy(() => import('./pages/IRCodePage'));

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
                    <ScrollToTop />
                    <Navbar />
                    <main className="flex-grow">
                        <Suspense fallback={
                            <div className="flex items-center justify-center min-h-[60vh] text-primary">
                                <div className="animate-pulse flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                    <span className="font-bold text-gray-500 dark:text-gray-400">Loading guidance...</span>
                                </div>
                            </div>
                        }>
                            <Routes>
                                {/* Core Home & Rights */}
                                <Route path="/" element={<Home />} />
                                <Route path="/pf-esi" element={<PFESIPage />} />
                                <Route path="/contracts" element={<ContractsPage />} />
                                <Route path="/notice-period" element={<NoticePage />} />
                                <Route path="/working-hours" element={<WorkingHoursPage />} />
                                <Route path="/micromanagement-weekend-work" element={<MicromanagementPage />} />
                                <Route path="/micromanagement" element={<MicromanagementPage />} />
                                <Route path="/leave-holidays" element={<LeavePage />} />
                                <Route path="/illegal-practices" element={<IllegalPracticesPage />} />
                                <Route path="/rights" element={<RightsIndexPage />} />
                                <Route path="/rights/:categoryId" element={<RightsDetailPage />} />

                                {/* Decision Wizards & Diagnostic Suite */}
                                <Route path="/tools/authority-finder" element={<AuthorityFinderPage />} />
                                <Route path="/tools/problem-wizard" element={<ProblemAssessmentWizardPage />} />
                                <Route path="/tools/evidence-checklist" element={<EvidenceChecklistPage />} />
                                <Route path="/tools/case-timeline-builder" element={<TimelineBuilderPage />} />

                                {/* Dispute Guides */}
                                <Route path="/disputes/absconding-allegation" element={<AbscondingDisputePage />} />
                                <Route path="/disputes/no-employment-record" element={<NoRecordDisputePage />} />
                                <Route path="/disputes/handover-asset-dispute" element={<HandoverAssetDisputePage />} />
                                <Route path="/disputes/data-misuse-allegation" element={<DataMisuseAllegationPage />} />
                                <Route path="/trainee-apprentice-rights" element={<TraineeRightsPage />} />

                                {/* Termination & Exits */}
                                <Route path="/termination/probation" element={<TerminationProbationPage />} />
                                <Route path="/termination/after-confirmation" element={<TerminationConfirmedPage />} />
                                <Route path="/termination/wrongful" element={<WrongfulTerminationPage />} />
                                <Route path="/full-final-settlement" element={<FFSettlementPage />} />
                                <Route path="/exit-process" element={<ExitProcessPage />} />
                                <Route path="/experience-letter" element={<ExperienceLetterPage />} />
                                <Route path="/relieving-letter" element={<RelievingLetterPage />} />
                                <Route path="/service-certificate" element={<ServiceCertificatePage />} />

                                {/* Salary & Benefits */}
                                <Route path="/salary-calculation" element={<SalaryCalculationPage />} />
                                <Route path="/pay-cycle" element={<PayCyclePage />} />
                                <Route path="/delayed-salary" element={<DelayedSalaryPage />} />
                                <Route path="/gratuity" element={<GratuityPage />} />

                                {/* Tools & Calculators */}
                                <Route path="/tools" element={<ToolsPage />} />
                                <Route path="/salary-calculator" element={<SalaryCalculatorPage />} />
                                <Route path="/professional-tax" element={<ProfessionalTaxPage />} />
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
                                <Route path="/tools/sham-contractor" element={<ShamContractorScannerPage />} />
                                <Route path="/tools/hra-calculator" element={<HRACalculatorPage />} />
                                <Route path="/tools/maternity-tracker" element={<MaternityTrackerPage />} />
                                <Route path="/tools/night-shift-audit" element={<NightShiftAuditPage />} />
                                <Route path="/tools/bonus-analyzer" element={<BonusAnalyzerPage />} />
                                <Route path="/tools/offer-revocation" element={<OfferRevocationPage />} />
                                <Route path="/tools/bgv-shield" element={<BGVShieldPage />} />
                                <Route path="/tools/layoff-survival" element={<LayoffSurvivalKitPage />} />
                                <Route path="/tools/employment-bond-scanner" element={<EmploymentBondScannerPage />} />
                                <Route path="/tools/notice-adjustment-calculator" element={<NoticeAdjustmentCalculatorPage />} />
                                <Route path="/tools/posh-complaint-builder" element={<POSHComplaintBuilderPage />} />
                                <Route path="/tools/gig-worker-rights" element={<GigWorkerRightsPage />} />
                                <Route path="/tools/legal-notice-generator" element={<LegalNoticeGeneratorPage />} />
                                <Route path="/tools/ctc-deduction-scanner" element={<CTCDeductionScannerPage />} />

                                {/* Harassment, Privacy & Performance */}
                                <Route path="/maternity-rights" element={<MaternityRightsPage />} />
                                <Route path="/posh-act" element={<POSHActPage />} />
                                <Route path="/pip-guide" element={<PIPGuidePage />} />
                                <Route path="/forced-resignation" element={<ForcedResignationPage />} />
                                <Route path="/moonlighting" element={<MoonlightingPage />} />
                                <Route path="/data-privacy" element={<DataPrivacyPage />} />
                                <Route path="/form-16-rights" element={<Form16RightsPage />} />
                                <Route path="/complaint-guide" element={<ComplaintGuidePage />} />

                                {/* Templates & FAQs */}
                                <Route path="/templates" element={<TemplatesPage />} />
                                <Route path="/faq" element={<FAQPage />} />

                                {/* Trust & Governance Suite */}
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                                <Route path="/terms" element={<TermsPage />} />
                                <Route path="/disclaimer" element={<DisclaimerPage />} />
                                <Route path="/editorial-policy" element={<EditorialPolicyPage />} />

                                {/* State Laws */}
                                <Route path="/state-labour-laws" element={<StateLawsIndexPage />} />
                                <Route path="/state-labour-laws/tamil-nadu" element={<Navigate to="/tamil-nadu" replace />} />
                                <Route path="/state-labour-laws/:stateSlug" element={<StateLawDetailPage />} />

                                {/* Tamil Nadu Mega-Hub */}
                                <Route path="/tamil-nadu" element={<TamilNaduHubPage />} />
                                <Route path="/tamil-nadu/:sectorId" element={<TNSectorDetailPage />} />
                                <Route path="/tamil-nadu-minimum-wages" element={<TNMinimumWagesPage />} />
                                <Route path="/minimum-wages" element={<MinimumWagesPage />} />

                                {/* What's New & 4 Labour Codes */}
                                <Route path="/whats-new" element={<WhatsNewPage />} />
                                <Route path="/new-labour-codes" element={<LabourCodesIndexPage />} />
                                <Route path="/new-labour-codes/wage-code" element={<WageCodePage />} />
                                <Route path="/new-labour-codes/social-security-code" element={<SocialSecurityCodePage />} />
                                <Route path="/new-labour-codes/osh-code" element={<OSHCodePage />} />
                                <Route path="/new-labour-codes/ir-code" element={<IRCodePage />} />

                                {/* 404 Fallback */}
                                <Route path="*" element={<NotFoundPage />} />
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
