import React from 'react';
import SEOHead from '../components/SEOHead';
import PageHero from '../components/PageHero';
import { FileX, Scale, MailWarning, Briefcase, Gavel, FileText } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import ContentSection from '../components/ContentSection';

export default function OfferRevocationPage() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
            <SEOHead 
                title="Offer Letter Revoked? Promissory Estoppel Rights India"
                description="What to do if a company revokes your job offer after you resigned. Learn about Promissory Estoppel and how to claim compensation for lost wages in India."
                path="/tools/offer-revocation"
            />

            <div className="max-w-4xl mx-auto px-4 pt-8">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Offer Revocation Guide', path: '/tools/offer-revocation' }
                    ]} 
                />
            </div>

            <PageHero 
                icon={FileX}
                title="Offer Letter Revocation Guide"
                description="Did a company withdraw your job offer after you already resigned from your current job? You can claim heavy compensation under the legal doctrine of Promissory Estoppel."
            />

            <main className="max-w-4xl mx-auto px-4 mt-8 space-y-8">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-2">
                        <Scale className="w-7 h-7" />
                        The Doctrine of "Promissory Estoppel"
                    </h2>
                    <p className="text-gray-800 dark:text-gray-200 mb-4 text-lg">
                        In Indian contract law, if a company makes a clear promise (a formal offer letter) and you rely on that promise to your detriment (you resign from your current job, losing your income), the company is legally stopped from going back on their word without paying damages. This is called <span className="font-bold underline">Promissory Estoppel</span>.
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                        Even if the offer letter says "The company reserves the right to withdraw this offer at any time," Indian civil courts often strike this down as unfair if you have already suffered financial damage by acting on it.
                    </p>
                </div>

                <ContentSection icon={Briefcase} title="Step-by-Step Survival Guide">
                    <div className="space-y-6 text-gray-700 dark:text-gray-300">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Do NOT withdraw your resignation yet (if possible)</h3>
                                <p>First, speak to your current employer. If you had a good relationship, explain the situation and ask if you can retract your resignation. If they say yes, your damages are mitigated.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Preserve ALL Evidence</h3>
                                <p>Save the signed offer letter, the welcome emails, background verification clearances, and the email where they revoked the offer. DO NOT delete anything.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Calculate Your Damages</h3>
                                <p>Your legal claim is for "Loss of Earnings." Calculate your monthly salary at your old job, multiplied by the number of months it realistically takes you to find a new job (usually 2 to 3 months).</p>
                            </div>
                        </div>
                    </div>
                </ContentSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <MailWarning className="w-5 h-5 text-yellow-500" />
                            Step 1: The HR Grievance
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            Before getting a lawyer, write a strong email to the Head of HR and the CEO. State clearly that you resigned based on their offer and are now suffering financial loss.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                            Quote: "Under the legal principle of Promissory Estoppel, I request you to either honor the offer or provide a severance payout of X months to cover my immediate loss of livelihood."
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <Gavel className="w-5 h-5 text-red-500" />
                            Step 2: Legal Notice
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            If HR ignores you, hire an employment lawyer to send a formal Legal Notice demanding compensation for damages and mental agony. 
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Many companies will settle out of court for 1-2 months' salary rather than face a civil lawsuit or bad PR on LinkedIn.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg mt-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-blue-400" />
                        The LinkedIn Strategy
                    </h3>
                    <p className="text-gray-300 mb-4">
                        If the company behaves unethically and refuses to compensate you, public pressure is often faster than the legal system. 
                    </p>
                    <p className="text-gray-300">
                        Post a polite, factual account on LinkedIn tagging the company. Do not use abusive language. Simply state: "I was offered a role on [Date]. I resigned my job on [Date] to join. On [Date], 3 days before joining, the offer was revoked without compensation." The tech community is highly intolerant of this practice, and companies often reverse their decision or offer a payout to remove the post.
                    </p>
                </div>
            </main>
        </div>
    );
}
