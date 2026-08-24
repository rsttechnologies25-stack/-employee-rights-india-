import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import ComplaintTimelineGuide from '../components/ComplaintTimelineGuide';
import { ShieldAlert, ExternalLink, FileText, CheckCircle2, Clock, Landmark, Scale } from 'lucide-react';

export default function ComplaintGuidePage() {
    const steps = [
        {
            title: "Internal Grievance (First Step)",
            description: "Always attempt to resolve the issue internally first. Send a formal email to HR and Management. Keep a copy of this communication as evidence.",
            icon: FileText,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        },
        {
            title: "Send a Legal Notice",
            description: "If the company doesn't respond within 15-30 days, hire an advocate to send a formal Legal Notice. Often, companies settle disputes at this stage to avoid litigation.",
            icon: ShieldAlert,
            color: "text-amber-600 dark:text-amber-400",
            bg: "bg-amber-50 dark:bg-amber-900/20"
        },
        {
            title: "File on Official Portals (Samadhan / EPFiGMS / SHe-Box)",
            description: "If the legal notice fails, file an official grievance on Samadhan (samadhan.labour.gov.in), EPFiGMS (epfigms.gov.in), or SHe-Box (shebox.wcd.gov.in).",
            icon: Landmark,
            color: "text-indigo-600 dark:text-indigo-400",
            bg: "bg-indigo-50 dark:bg-indigo-900/20"
        },
        {
            title: "Conciliation Proceedings",
            description: "The Labour Officer summons both employee and employer for a joint conciliation hearing. If the employer defaults or refuses to settle, conciliation fails.",
            icon: Clock,
            color: "text-purple-600 dark:text-purple-400",
            bg: "bg-purple-50 dark:bg-purple-900/20"
        },
        {
            title: "Recovery Certificate (RC) / Labour Court",
            description: "If conciliation fails, the Labour Officer issues a Recovery Certificate (RC) to the District Collector to attach employer bank accounts or an FOC report for Labour Court.",
            icon: CheckCircle2,
            color: "text-emerald-600 dark:text-emerald-400",
            bg: "bg-emerald-50 dark:bg-emerald-900/20"
        }
    ];

    return (
        <div className="bg-white dark:bg-gray-950 min-h-screen">
            <SEOHead 
                path="/complaint-guide" 
                title="Complaint Resolution Timelines & Process India | How Long Does It Take?"
                description="Exact resolution timelines (7 to 90 days) and step-by-step procedure after filing a complaint against an employer on EPFiGMS, SAMADHAN, POSH, or Labour Commissioner."
            />
            
            <PageHero 
                title="Official Complaint Process & Resolution Timelines" 
                subtitle="Know how many days complaint resolution takes and what step-by-step process happens after you file an official grievance."
                icon={ShieldAlert}
                gradient="danger"
            />

            <div className="max-w-4xl mx-auto px-4 py-8">
                <Breadcrumb items={[{ label: 'Complaint Guide', path: '/complaint-guide' }]} />

                {/* ── INTERACTIVE TIMELINES & POST-COMPLAINT PROCESS GUIDE ── */}
                <ComplaintTimelineGuide />

                <div className="mt-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 mb-12 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Official Government Portals (.gov.in)</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Register grievances directly on these verified Indian Government portals for official statutory action:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <a href="https://samadhan.labour.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors group">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">Samadhan Portal</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Industrial & Salary Disputes (Central Sphere)</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                        </a>

                        <a href="https://epfigms.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors group">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">EPFiGMS Portal</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">PF Default & UAN Disputes (7–15 Days)</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                        </a>
                        
                        <a href="https://pgportal.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors group">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">CPGRAMS</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">General Public Grievance (21–30 Days)</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                        </a>

                        <a href="https://shebox.wcd.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors group">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">SHe-Box Portal</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">POSH Workplace Harassment (90 Days Inquiry)</p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                        </a>
                    </div>
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">Step-by-Step Escalation Hierarchy</h2>

                <div className="space-y-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex gap-6 relative">
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-6 top-14 bottom-[-24px] w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                                )}
                                
                                <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${step.bg} ${step.color} relative z-10 border-4 border-white dark:border-gray-950`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                
                                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 rounded-2xl flex-1 shadow-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-sm font-bold text-gray-400 dark:text-gray-500">Step {index + 1}</span>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 p-6 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl flex gap-4">
                    <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-500 shrink-0" />
                    <div>
                        <h3 className="text-lg font-bold text-red-800 dark:text-red-400 mb-2">Important Legal Advice</h3>
                        <p className="text-red-700 dark:text-red-300 text-sm leading-relaxed">
                            Labour laws apply differently based on your designation. If you are in a managerial or supervisory role earning above ₹10,000/month, you are not considered a "Workman" under the Industrial Disputes Act, and cannot approach the Labour Court. You must file a civil suit for breach of contract instead.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
