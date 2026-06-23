import { Users, AlertTriangle, Building, Briefcase, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { ContentList } from '../components/ContentSection';
import LawCard from '../components/LawCard';

export default function IRCodePage() {
    return (
        <div>
            <SEOHead 
                path="/new-labour-codes/ir-code" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Industrial Relations Code 2025: Firing and Layoff Rules",
                    "description": "Understand the Industrial Relations Code in India. Learn about the new layoff rules allowing companies with up to 300 employees to fire workers without government permission.",
                }}
            />
            <PageHero
                title="Industrial Relations Code"
                subtitle="The most controversial of the 4 Codes. Understand how the new rules dramatically shift the power dynamics of hiring and firing."
                icon={Users}
                gradient="red"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'New Labour Codes', path: '/new-labour-codes' },
                        { label: 'Industrial Relations Code', path: '/new-labour-codes/ir-code' }
                    ]} />

                    <ContentSection title="The Massive Layoff Rule Change" icon={Building}>
                        <p className="mb-4">
                            For decades, foreign and domestic companies complained that Indian labour laws were too rigid, primarily because the government made it nearly impossible to fire employees in large companies. The IR Code has completely changed this threshold to improve "Ease of Doing Business".
                        </p>
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                            <h3 className="font-bold text-red-900 mb-2">The 300 Employee Threshold</h3>
                            <p className="text-gray-800">
                                Previously, any company with 100 or more employees needed prior government permission before conducting mass layoffs, retrenchments, or shutting down. The new IR Code <strong>increases this threshold to 300 employees</strong>. This means the vast majority of IT startups, mid-size agencies, and manufacturing units can now layoff workers without seeking government approval.
                            </p>
                        </div>
                    </ContentSection>

                    <ContentSection title="Key Impacts on Job Security" icon={Briefcase}>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <LawCard
                                icon={AlertTriangle}
                                title="Easier Retrenchment"
                                description="While employers still must pay statutory severance (usually 15 days of average pay per year of service), the lack of government hurdles makes the process of firing much faster and entirely at the management's discretion."
                                status="yellow"
                            />
                            <LawCard
                                icon={Users}
                                title="Strikes Made Harder"
                                description="The Code makes it legally harder for employees to go on strike. A mandatory 14-day prior notice must be given to the employer before any strike, applying to all industrial establishments."
                                status="yellow"
                            />
                        </div>
                    </ContentSection>

                    <ContentSection title="Other Important Provisions" icon={HelpCircle}>
                        <ContentList 
                            items={[
                                {
                                    title: "Re-skilling Fund",
                                    description: "Employers who retrench (fire) workers must contribute 15 days of the worker's last drawn wages to a government 'Worker Re-skilling Fund', which will be transferred directly to the fired worker's bank account."
                                },
                                {
                                    title: "Fixed-Term Employment Legitimized",
                                    description: "Companies can now hire workers on a 'Fixed-Term Contract' for any core activity. These workers will have the same hours, wages, and allowances as permanent workers, but their employment automatically ends when the contract expires (no notice required)."
                                },
                                {
                                    title: "Grievance Redressal Committee",
                                    description: "Every company with 20 or more employees MUST establish a Grievance Redressal Committee (GRC) with equal representation from employers and employees to resolve disputes internally."
                                }
                            ]}
                        />
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
