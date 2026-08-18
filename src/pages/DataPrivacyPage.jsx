import React from 'react';
import { Monitor, EyeOff, Shield, Smartphone, Laptop } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import FAQSection from '../components/FAQSection';
import InternalLinks from '../components/InternalLinks';
import ContentSection, { CalloutBox } from '../components/ContentSection';
import { dataPrivacyFaqs } from '../data/privacyData';

const relatedLinks = [
    { title: 'Moonlighting Rules', subtitle: 'Dual employment risks', path: '/moonlighting' },
    { title: 'Working Hours', subtitle: 'Your right to disconnect', path: '/working-hours' },
];

export default function DataPrivacyPage() {
    return (
        <div>
            <SEOHead path="/data-privacy" />
            <PageHero
                title="Data Privacy & Employee Monitoring"
                subtitle="Can your employer legally monitor your laptop, read your emails, or track your physical location? Know your digital rights."
                icon={Monitor}
                gradient="info"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Workplace Rules', path: '/working-hours' }, { label: 'Data Privacy', path: '/data-privacy' }]} />

                    <ContentSection title="Monitoring Company Devices" icon={Laptop} variant="info">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">The general legal rule is simple: <strong>If the company owns the device, they have the right to monitor it.</strong></p>
                            
                            <div className="bg-white dark:bg-gray-950 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mt-4">
                                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">What employers can legally track on a company laptop:</h4>
                                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> All internet browsing history (even in Incognito mode)</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Emails sent from the company network or server</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> USB drive insertions and file transfers</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Idle time and active software usage</li>
                                </ul>
                            </div>

                            <CalloutBox type="danger" title="Personal Accounts on Work Devices">
                                If you log into your personal Gmail, WhatsApp Web, or social media on a company laptop, the IT department can potentially intercept that data. <strong>Never use a company laptop for personal communication or banking.</strong>
                            </CalloutBox>
                        </div>
                    </ContentSection>

                    <ContentSection title="Monitoring Personal Devices (BYOD)" icon={Smartphone} variant="warning">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300">If you use your personal phone or laptop for work (Bring Your Own Device), the employer's rights are strictly limited.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-lg border border-warning/20">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">MDM Software</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">If you install Mobile Device Management (MDM) software to access company email, the employer can enforce security (like a remote wipe of the work profile) but cannot legally read your personal texts or view your photos.</p>
                                </div>
                                <div className="bg-white dark:bg-gray-950 p-4 rounded-lg border border-danger/20">
                                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm">Location Tracking</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Under the Information Technology Act, tracking the GPS location of a personal device without explicit, ongoing consent is a severe violation of privacy.</p>
                                </div>
                            </div>
                        </div>
                    </ContentSection>

                    <ContentSection title="Webcams and Microphones" icon={EyeOff} variant="danger">
                        <div className="space-y-4">
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                Secretly recording an employee via webcam or microphone without consent violates the constitutional Right to Privacy (Puttaswamy judgment) and the IT Act. 
                                However, many remote-work contracts now include fine print where you grant "consent" for random webcam snapshots to verify you are working.
                            </p>
                            <div className="bg-danger/5 p-4 rounded-lg border border-danger/20 flex gap-3">
                                <Shield className="w-5 h-5 text-danger shrink-0 mt-0.5" />
                                <p className="text-sm text-danger font-medium">Best Practice: Always keep a physical cover over your webcam when you are not actively on a video call, and mute your microphone via hardware if possible.</p>
                            </div>
                        </div>
                    </ContentSection>

                    <FAQSection faqs={dataPrivacyFaqs} title="Data Privacy FAQs" />
                    <InternalLinks currentPath="/data-privacy" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
