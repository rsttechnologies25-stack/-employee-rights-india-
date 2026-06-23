import { Ban, HandHeart, Scale, FileText, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { forcedResignationFaqs } from '../data/performanceData';

const relatedLinks = [
    { title: 'Wrongful Termination', subtitle: 'What makes a firing illegal?', path: '/termination/wrongful' },
    { title: 'PIP Guide', subtitle: 'Rights during performance plans', path: '/pip-guide' },
    { title: 'Full & Final Settlement', subtitle: 'Your exit dues', path: '/full-final-settlement' },
];

export default function ForcedResignationPage() {
    return (
        <div>
            <SEOHead path="/forced-resignation" />
            <PageHero
                title="Forced Resignation & Constructive Dismissal"
                subtitle="Is your HR pressuring you to quit? Understand why this is illegal and how to protect your career and your financial rights."
                icon={Ban}
                gradient="danger"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Termination & Exit', path: '/termination/wrongful' }, { label: 'Forced Resignation', path: '/forced-resignation' }]} />

                    <ContentSection title="Is Forced Resignation Legal?" icon={Scale} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">No. Forced resignation is illegal under Indian labor law.</p>
                            <p className="text-gray-700 dark:text-gray-300">A resignation is legally defined as a <strong>voluntary</strong> act by an employee choosing to end their employment. If an employer uses threats, coercion, extreme pressure, or creates an unbearable work environment to force you to sign a resignation letter, it ceases to be voluntary.</p>
                            
                            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-danger/20 shadow-sm mt-4">
                                <h4 className="font-bold text-danger mb-2">Constructive Dismissal</h4>
                                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                    In the eyes of the law (and the Labour Court), forcing an employee to resign is treated exactly the same as firing them illegally. This legal concept is known as <strong>"Constructive Dismissal"</strong>.
                                </p>
                            </div>
                        </div>
                    </ContentSection>

                    <ContentSection title="Why do employers ask you to resign?" icon={AlertTriangle} variant="warning">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">HR departments often aggressively push for a resignation rather than issuing a termination letter because:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">1. Avoiding Severance Pay</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Under the Industrial Disputes Act, terminating a "workman" requires paying retrenchment compensation (15 days pay per year of service). Resignations waive this requirement.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">2. Legal Protection</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">If you resign, it is extremely difficult for you to later sue the company for wrongful termination in a Labour Court, as the paper trail shows you left voluntarily.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">3. Avoiding Government Scrutiny</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Mass terminations require government permission in some states (for companies with 100+ or 300+ employees). Mass "resignations" bypass this law entirely.</p>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                    <ContentSection title="How to Protect Yourself" icon={HandHeart} variant="info">
                        <div className="space-y-5">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Do Not Resign Immediately</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Ask for time to think. HR might say "resign today or we terminate you tomorrow," but you have the right to process the request. Do not draft the letter in their office under pressure.</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Demand it in Writing</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">If they threaten to terminate you or "blacklist" you, tell them: <em>"Please send me an email detailing why I am being asked to resign."</em> Most HR will refuse, as it creates an illegal paper trail.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100">Create Your Own Paper Trail</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">If they refuse to email you, send an email to them summarizing the meeting: <em>"As discussed today, I am being pressured to resign by [Date] under threat of termination. I am willing to continue my employment..."</em></p>
                                </div>
                            </div>

                            <CalloutBox type="success" title="Should you just let them fire you?">
                                From a purely financial and legal standpoint, letting them terminate you is often better because you receive notice pay, severance, and retain the right to challenge it legally. However, many employees choose to resign to protect their resume and ensure smooth background verification for future jobs. This is a personal choice you must weigh.
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={forcedResignationFaqs} title="Forced Resignation FAQs" />
                    <InternalLinks currentPath="/forced-resignation" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
