import React from 'react';
import { ShieldPlus, Car, HeartPulse, ShieldCheck, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { ContentList } from '../components/ContentSection';
import LawCard from '../components/LawCard';

export default function SocialSecurityCodePage() {
    return (
        <div>
            <SEOHead 
                path="/new-labour-codes/social-security-code" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Code on Social Security: Gig Workers and EPF Rules",
                    "description": "Learn about the Code on Social Security in India. Explore how gig workers, platform workers, and freelancers will finally get EPF and ESI benefits.",
                }}
            />
            <PageHero
                title="Code on Social Security"
                subtitle="Extending safety nets to the unorganized sector. The biggest win for Gig and Platform workers in India's history."
                icon={ShieldPlus}
                gradient="indigo"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'New Labour Codes', path: '/new-labour-codes' },
                        { label: 'Code on Social Security', path: '/new-labour-codes/social-security-code' }
                    ]} />

                    <ContentSection title="The Gig Economy Revolution" icon={Car}>
                        <p className="mb-4">
                            Historically, Indian labour laws only protected "employees" in the organized sector. The millions of people working as delivery partners (Swiggy, Zomato), ride-hailing drivers (Ola, Uber), and freelancers were classified as "independent contractors," leaving them without any social security benefits like Provident Fund (PF) or health insurance (ESI).
                        </p>
                        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-6">
                            <h3 className="font-bold text-indigo-900 mb-2">Inclusion of Gig and Platform Workers</h3>
                            <p className="text-gray-800 dark:text-gray-200">
                                The new Code on Social Security mandates the creation of a <strong>National Social Security Board</strong> specifically for unorganized workers, gig workers, and platform workers. Aggregators (like Uber/Swiggy) must contribute <strong>1% to 2% of their annual turnover</strong> to a social security fund dedicated to these workers.
                            </p>
                        </div>
                    </ContentSection>

                    <ContentSection title="Key Benefits Extended" icon={ShieldPlus}>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <LawCard
                                icon={ShieldCheck}
                                title="Provident Fund (EPF)"
                                description="The government will formulate schemes to provide PF benefits to gig workers, helping them build a retirement corpus."
                                status="green"
                            />
                            <LawCard
                                icon={HeartPulse}
                                title="Health & Maternity Benefits"
                                description="Employees State Insurance (ESI) Corporation facilities will be extended to platform workers, providing crucial health coverage and maternity benefits."
                                status="green"
                            />
                        </div>
                    </ContentSection>

                    <ContentSection title="Other Important Changes" icon={HelpCircle}>
                        <ContentList 
                            items={[
                                {
                                    title: "Gratuity for Fixed-Term Employees",
                                    description: "Currently, you must work 5 years to get Gratuity. Under the new Code, 'Fixed-Term Contract' employees will receive Gratuity on a pro-rata basis even if their contract is for just 1 year!"
                                },
                                {
                                    title: "Aadhar Linkage",
                                    description: "Aadhar card becomes mandatory for registration as an unorganized/gig worker to avail social security benefits."
                                },
                                {
                                    title: "Tougher Penalties",
                                    description: "Employers who deduct PF/ESI from an employee's salary but fail to deposit it with the government will face much harsher criminal penalties."
                                }
                            ]}
                        />
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
