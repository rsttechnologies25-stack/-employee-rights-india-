import React from 'react';
import { ExternalLink, ShieldCheck, Building, Landmark } from 'lucide-react';

const govResources = [
    {
        name: 'Shram Suvidha Portal',
        dept: 'Ministry of Labour & Employment',
        url: 'https://shramsuvidha.gov.in',
        desc: 'Central government labour inspection, licensing, and online dispute filing portal.',
        badge: 'Central Sphere'
    },
    {
        name: 'EPFiGMS Grievance Portal',
        dept: 'Employees Provident Fund Organisation (EPFO)',
        url: 'https://epfigms.gov.in',
        desc: 'Official portal to register claims for uncredited PF deductions and UAN transfer disputes.',
        badge: 'EPFO Official'
    },
    {
        name: 'SAMADHAN Portal',
        dept: 'Chief Labour Commissioner (Central)',
        url: 'https://samadhan.labour.gov.in',
        desc: 'Industrial dispute resolution portal for Central PSUs, Banks, Railways, and Telecom.',
        badge: 'Conciliation'
    },
    {
        name: 'SHe-Box Portal',
        dept: 'Ministry of Women & Child Development',
        url: 'https://shebox.wcd.gov.in',
        desc: 'Single-window portal for registering workplace sexual harassment complaints under POSH Act.',
        badge: 'POSH Official'
    },
    {
        name: 'CPGRAMS Grievance System',
        dept: 'Department of Administrative Reforms (DARPG)',
        url: 'https://pgportal.gov.in',
        desc: 'Centralized public grievance portal to escalate unresolved statutory compliance complaints.',
        badge: 'Public Grievance'
    },
    {
        name: 'ESIC Official Portal',
        dept: 'Employees State Insurance Corporation',
        url: 'https://esic.gov.in',
        desc: 'Official medical benefits portal for sickness, maternity, and disability claims verification.',
        badge: 'ESIC Official'
    }
];

export default function OfficialGovResources() {
    return (
        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 my-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-100 dark:border-gray-850 pb-4">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                            Verified .gov.in Domains
                        </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                        Official Government Complaint & Grievance Portals
                    </h3>
                </div>
                <span className="text-xs font-semibold text-gray-500">
                    Direct Official Portals
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {govResources.map((res, idx) => (
                    <a
                        key={idx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-5 rounded-2xl border border-gray-150 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 hover:border-emerald-500/40 shadow-soft transition-all flex flex-col justify-between group active:scale-[0.99]"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                                    {res.badge}
                                </span>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                            </div>
                            <h4 className="font-extrabold text-sm text-gray-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                                {res.name}
                            </h4>
                            <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
                                {res.dept}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
                                {res.desc}
                            </p>
                        </div>

                        <div className="mt-4 pt-2 border-t border-gray-200/60 dark:border-gray-800 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                            <span>Visit Official Portal</span>
                            <span className="text-gray-400 text-[10px]">.gov.in</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
