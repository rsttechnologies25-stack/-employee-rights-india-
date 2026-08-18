import React from 'react';
import { Stethoscope, CalendarDays, Moon, Laptop, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { ContentList } from '../components/ContentSection';
import LawCard from '../components/LawCard';

export default function OSHCodePage() {
    return (
        <div>
            <SEOHead 
                path="/new-labour-codes/osh-code" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "OSH Code 2025: The 4-Day Workweek and Safety Rules",
                    "description": "Explore the Occupational Safety, Health and Working Conditions (OSH) Code. Learn about the new 4-day workweek, free health checkups, and women's night shift regulations.",
                }}
            />
            <PageHero
                title="Occupational Safety (OSH) Code"
                subtitle="Transforming workplace conditions. The Code introduces the highly-debated 4-day workweek and prioritizes employee health."
                icon={Stethoscope}
                gradient="green"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'New Labour Codes', path: '/new-labour-codes' },
                        { label: 'OSH Code', path: '/new-labour-codes/osh-code' }
                    ]} />

                    <ContentSection title="The 4-Day Workweek: Myth vs Reality" icon={CalendarDays}>
                        <p className="mb-4">
                            The most viral news surrounding the New Labour Codes is the introduction of a "4-Day Workweek". However, there is a major catch regarding daily working hours.
                        </p>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                            <h3 className="font-bold text-green-900 mb-2">How it Actually Works</h3>
                            <p className="text-gray-800 dark:text-gray-200">
                                The statutory maximum limit of <strong>48 working hours per week</strong> remains unchanged. What the OSH Code allows is flexibility in distributing these hours. If a company and its employees agree to a 4-day workweek, employees must work <strong>12 hours a day (12 x 4 = 48)</strong>. You get 3 days off, but your daily shifts become much longer.
                            </p>
                        </div>
                    </ContentSection>

                    <ContentSection title="Key Health & Working Condition Changes" icon={Stethoscope}>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <LawCard
                                icon={Stethoscope}
                                title="Free Annual Health Checkup"
                                description="Employers will be legally mandated to provide a free annual health checkup to employees above a certain age limit (to be specified in rules) working in specified establishments."
                                status="green"
                            />
                            <LawCard
                                icon={Moon}
                                title="Women Night Shifts"
                                description="The Code explicitly allows women to work in all establishments for all types of work, including night shifts (before 6 AM and after 7 PM), provided the employer strictly ensures adequate security, safety, and transportation."
                                status="green"
                            />
                        </div>
                    </ContentSection>

                    <ContentSection title="Other Important Provisions" icon={HelpCircle}>
                        <ContentList 
                            items={[
                                {
                                    title: "Leave Encashment Cap Increased",
                                    description: "Under the OSH code, the maximum number of Earned Leaves an employee can carry forward to the next calendar year is capped at 30 days. Any leaves exceeding 30 days must be mandatorily encashed by the employer at the end of the year."
                                },
                                {
                                    title: "Work From Home (WFH) Recognition",
                                    description: "The draft rules (especially for the IT sector) have begun explicitly recognizing Work From Home structures, laying the groundwork for future remote-work regulations."
                                },
                                {
                                    title: "Inter-State Migrant Workers",
                                    description: "Massive protections added for migrant workers, including travel allowances from the employer for journeys to their native places once a year."
                                }
                            ]}
                        />
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
