import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, MapPin, FileText, Scale, HelpCircle, ArrowRight } from 'lucide-react';

/**
 * NextStepActions Component
 * Answers "What would you like to do next?" at the bottom of major guides & tools
 */
export default function NextStepActions({
    title = "What would you like to do next?",
    customActions = null,
    category = "general"
}) {
    // Contextual pre-configured action profiles
    const defaultProfiles = {
        salary: [
            { title: 'Calculate Owed Dues', subtitle: 'Use Take-Home & F&F calculator', path: '/salary-calculator', icon: Calculator, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
            { title: 'Draft Grievance Letter', subtitle: 'Generate formal HR demand letter', path: '/tools/grievance-generator', icon: FileText, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40' },
            { title: 'Find Labour Authority', subtitle: 'Locate State ALC / Central RLC', path: '/tools/authority-finder', icon: MapPin, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40' },
            { title: 'Verify Minimum Wage', subtitle: 'Check legal state minimum wage', path: '/tools/minimum-wage-checker', icon: Scale, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40' }
        ],
        termination: [
            { title: 'Severance Pay Calculator', subtitle: 'Calculate Sec 25F retrenchment pay', path: '/tools/severance-calculator', icon: Calculator, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
            { title: 'Draft Legal Demand Notice', subtitle: 'Advocate-grade notice template', path: '/tools/legal-notice-generator', icon: FileText, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40' },
            { title: 'Find Labour Authority', subtitle: 'Locate competent conciliation officer', path: '/tools/authority-finder', icon: MapPin, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40' },
            { title: 'Evidence Checklist', subtitle: 'Preserve 17 critical legal proofs', path: '/tools/evidence-checklist', icon: Scale, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40' }
        ],
        exit: [
            { title: 'Estimate F&F Settlement', subtitle: 'Calculate salary, leave & gratuity', path: '/tools/ff-calculator', icon: Calculator, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
            { title: 'Notice Buyout Calculator', subtitle: 'Calculate buyout cost & leave offsets', path: '/tools/notice-buyout-calculator', icon: Calculator, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40' },
            { title: 'Resignation Letter Templates', subtitle: 'Download formal exit letter drafts', path: '/templates', icon: FileText, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40' },
            { title: 'Bond Legality Scanner', subtitle: 'Audit service bond enforceability', path: '/tools/employment-bond-scanner', icon: Scale, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40' }
        ],
        general: [
            { title: 'Workplace Problem Wizard', subtitle: '7-step interactive case evaluation', path: '/tools/problem-wizard', icon: HelpCircle, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40' },
            { title: 'Find Complaint Authority', subtitle: 'Locate State ALC or Central RLC', path: '/tools/authority-finder', icon: MapPin, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40' },
            { title: 'Explore Master Calculators', subtitle: 'Browse all 20+ statutory tools', path: '/tools', icon: Calculator, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40' },
            { title: 'Labour Law FAQ', subtitle: '180+ verified answers', path: '/faq', icon: Scale, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40' }
        ]
    };

    const actions = customActions || defaultProfiles[category] || defaultProfiles.general;

    return (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 space-y-6">
            <div className="text-center sm:text-left space-y-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-primary">
                    Next Step Action Guide
                </span>
                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                    {title}
                </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {actions.map((act, idx) => {
                    const IconComponent = act.icon || ArrowRight;
                    return (
                        <Link
                            key={idx}
                            to={act.path}
                            className="p-5 rounded-2xl bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-800 shadow-soft hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between group active:scale-[0.98]"
                        >
                            <div className="space-y-3">
                                <div className={`p-2.5 rounded-xl w-fit ${act.color}`}>
                                    <IconComponent className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        {act.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
                                        {act.subtitle}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-900 text-xs font-bold text-primary flex items-center justify-between group-hover:translate-x-0.5 transition-transform">
                                <span>Proceed</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
