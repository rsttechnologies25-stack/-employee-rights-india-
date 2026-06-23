import { Moon, Briefcase, EyeOff, FileKey, AlertTriangle, Store } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { moonlightingFaqs } from '../data/privacyData';

const relatedLinks = [
    { title: 'Data Privacy at Work', subtitle: 'Employer monitoring rules', path: '/data-privacy' },
    { title: 'Contracts & Bonds', subtitle: 'Understanding your offer letter', path: '/contracts' },
    { title: 'PF & ESI Rules', subtitle: 'How UAN tracking works', path: '/pf-esi' },
];

export default function MoonlightingPage() {
    return (
        <div>
            <SEOHead path="/moonlighting" />
            <PageHero
                title="Moonlighting & Dual Employment"
                subtitle="Is it illegal to have a second job in India? Understand the risks, non-compete clauses, and how employers track dual employment."
                icon={Moon}
                gradient="purple"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Workplace Rules', path: '/working-hours' }, { label: 'Moonlighting', path: '/moonlighting' }]} />

                    <ContentSection title="Is Moonlighting Illegal?" icon={Briefcase} variant="warning">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">There is no overarching "Moonlighting Law" in India that makes dual employment broadly illegal for everyone. However, the legality completely depends on your employment contract.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">The "Exclusive Employment" Clause</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Almost all corporate and IT employment contracts contain a clause stating you must devote your "full time and attention" to the company. If you sign this, taking a second job is a <strong>breach of contract</strong>.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">The "Conflict of Interest" Clause</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">You are strictly prohibited from working for a competitor, starting a competing business, or using company resources (like your laptop) for personal gain.</p>
                                </div>
                            </div>

                            <CalloutBox type="danger" title="The Consequence">
                                If you breach these clauses, your employer has the legal right to terminate your employment immediately without notice.
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <ContentSection title="How Employers Catch Moonlighters" icon={EyeOff} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">Many employees mistakenly believe they won't get caught if they don't tell anyone. Here is how modern HR departments track dual employment:</p>
                            
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300 mt-4">
                                <li className="flex items-start gap-3 bg-white dark:bg-gray-950 p-4 rounded-lg border border-danger/20">
                                    <div className="w-8 h-8 rounded-full bg-danger/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <FileKey className="w-4 h-4 text-danger" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-gray-100">1. The UAN / PF Portal Anomaly</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">This is the #1 way employees are caught. Your Universal Account Number (UAN) is linked to your PAN and Aadhaar. If a second employer tries to deposit Provident Fund (PF) into your account while your primary employer is also depositing PF, it triggers a dual employment anomaly in the EPFO system.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 bg-white dark:bg-gray-950 p-4 rounded-lg border border-warning/20">
                                    <div className="w-8 h-8 rounded-full bg-warning/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <AlertTriangle className="w-4 h-4 text-warning" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-gray-100">2. Form 26AS & Tax Records</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">If your freelance client deducts TDS (Tax Deducted at Source) under Section 194J, it reflects on your PAN card via Form 26AS. Employers often run background checks or ask for Form 26AS during appraisals or onboarding.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 bg-white dark:bg-gray-950 p-4 rounded-lg border border-info/20">
                                    <div className="w-8 h-8 rounded-full bg-info/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Briefcase className="w-4 h-4 text-info" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-gray-100">3. Third-Party Background Checks</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Agencies use complex databases, tax records, and even social media scraping (LinkedIn updates) to flag secondary employment.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </ContentSection>

                    <ContentSection title="Running Your Own Business" icon={Store} variant="info">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">Does starting your own business count as moonlighting? Yes, under standard corporate contracts, running an active business falls under the same <strong>Exclusive Employment</strong> restrictions.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-info/20 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Active vs. Passive Involvement</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Making <em>passive financial investments</em> (like buying shares or being a silent partner) is generally allowed. However, actively managing the day-to-day operations of a business is considered a breach of your employment contract.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-success/20 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">The Safe Legal Route</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">The only legally safe way to run a side business is to fully disclose it to your HR department and obtain <strong>written approval</strong> stating that your business does not conflict with company interests or your working hours.</p>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={moonlightingFaqs} title="Moonlighting FAQs" />
                    <InternalLinks currentPath="/moonlighting" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
