import React from 'react';
import { HandCoins, AlertTriangle, TrendingDown, TrendingUp, HelpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ContentSection, { ContentList } from '../components/ContentSection';
import LawCard from '../components/LawCard';

export default function WageCodePage() {
    return (
        <div>
            <SEOHead 
                path="/new-labour-codes/wage-code" 
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "Code on Wages 2025: How the New 50% Basic Salary Rule Impacts You",
                    "description": "Understand the impact of the new Code on Wages in India. Learn about the 50% basic salary rule, reduction in take-home pay, and increased PF contributions.",
                }}
            />
            <PageHero
                title="Code on Wages"
                subtitle="The biggest change to your salary structure in decades. Learn how the new definition of 'Wage' affects your take-home pay."
                icon={HandCoins}
                gradient="blue"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'New Labour Codes', path: '/new-labour-codes' },
                        { label: 'Code on Wages', path: '/new-labour-codes/wage-code' }
                    ]} />

                    <ContentSection title="The Massive Change: Definition of 'Wage'" icon={AlertTriangle}>
                        <p className="mb-4">
                            Currently, Indian employers artificially keep the "Basic Salary" extremely low (often 20-30% of Total CTC) and inflate allowances (HRA, Special Allowance, Transport Allowance). They do this to reduce their PF (Provident Fund) and Gratuity liability, as these are calculated as a percentage of the Basic Salary.
                        </p>
                        <div className="bg-warning/10 border border-warning/20 rounded-xl p-6 my-6">
                            <h3 className="font-bold text-warning-dark mb-2">The New 50% Rule</h3>
                            <p className="text-gray-800 dark:text-gray-200">
                                Under the new Code on Wages, <strong>Basic Pay + Dearness Allowance (DA) MUST be at least 50% of your Total Salary</strong>. All other allowances combined cannot exceed 50%.
                            </p>
                        </div>
                    </ContentSection>

                    <ContentSection title="How This Impacts Your Pocket" icon={HandCoins}>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <LawCard
                                icon={TrendingDown}
                                title="Decreased Take-Home Salary"
                                description="Because your Basic Salary must double to meet the 50% rule, your 12% PF contribution (calculated on Basic) will also double. This means more money is deducted from your monthly paycheck, reducing your in-hand salary."
                                status="yellow"
                            />
                            <LawCard
                                icon={TrendingUp}
                                title="Increased Retirement Savings"
                                description="While your monthly take-home reduces, your Provident Fund corpus will grow significantly faster. Additionally, your Gratuity payout (calculated on Basic Salary) will be substantially higher when you leave the company."
                                status="green"
                            />
                        </div>
                    </ContentSection>

                    <ContentSection title="Other Key Changes in the Wage Code" icon={HelpCircle}>
                        <ContentList 
                            items={[
                                {
                                    title: "National Floor Wage",
                                    description: "The Central Government will fix a statutory 'National Floor Wage'. No state government or employer can pay minimum wages below this national threshold."
                                },
                                {
                                    title: "Quicker Full & Final Settlement",
                                    description: "Employers MUST clear all dues (Full and Final Settlement) within 2 working days of an employee's resignation, dismissal, or retrenchment."
                                },
                                {
                                    title: "Overtime Transparency",
                                    description: "Strict regulations on how overtime is calculated, ensuring employees are paid double the normal wage rate for extra hours."
                                },
                                {
                                    title: "Equal Remuneration",
                                    description: "Gender-based discrimination in wages is strictly prohibited for the same work or work of similar nature."
                                }
                            ]}
                        />
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}
