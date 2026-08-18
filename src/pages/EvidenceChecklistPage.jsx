import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { CheckSquare, Printer, Download, AlertTriangle, ShieldCheck, CheckCircle2, RotateCcw } from 'lucide-react';

const initialItems = [
    { id: 1, category: 'contract', label: 'Signed Offer Letter / Appointment Letter with annexures' },
    { id: 2, category: 'contract', label: 'Employee Handbook / Company Policy Document acceptance' },
    { id: 3, category: 'salary', label: 'Last 3 to 6 months Payslips (PDF or printed format)' },
    { id: 4, category: 'salary', label: 'Bank Account Statements showing monthly salary credit narration' },
    { id: 5, category: 'salary', label: 'Form 26AS / AIS Tax Credit Statement downloaded from Income Tax portal' },
    { id: 6, category: 'salary', label: 'Form 16 Part A & Part B for previous assessment years' },
    { id: 7, category: 'social_sec', label: 'EPFO UAN Member Passbook screenshot showing monthly employer deposit status' },
    { id: 8, category: 'social_sec', label: 'ESIC e-Pehchan Card / Insurance Number document' },
    { id: 9, category: 'comms', label: 'Attendance logs / Biometric swipe records / Timesheet approvals' },
    { id: 10, category: 'comms', label: 'HR emails regarding salary delays, increments, or bonus promises' },
    { id: 11, category: 'comms', label: 'Manager WhatsApp / Slack / Teams chat screenshots regarding work instructions' },
    { id: 12, category: 'comms', label: 'Performance appraisal letters or PIP communication emails' },
    { id: 13, category: 'exit', label: 'Formal Resignation Email with sent timestamp and delivery confirmation' },
    { id: 14, category: 'exit', label: 'Employer / HR written response to resignation' },
    { id: 15, category: 'exit', label: 'Comprehensive Handover Document with recipient acknowledgment' },
    { id: 16, category: 'exit', label: 'Signed Asset Return Receipt (Laptop, Charger, ID Badge, Access Cards)' },
    { id: 17, category: 'govt', label: 'Official Government Complaint / Grievance Reference Number (SAMADHAN / EPFiGMS)' }
];

export default function EvidenceChecklistPage() {
    const [checkedIds, setCheckedIds] = useState(new Set());
    const [selectedCategory, setSelectedCategory] = useState('all');

    const toggleItem = (id) => {
        const next = new Set(checkedIds);
        if (next.has(id)) {
            next.delete(id);
        } else {
            next.add(id);
        }
        setCheckedIds(next);
    };

    const handlePrint = () => {
        window.print();
    };

    const handleReset = () => {
        setCheckedIds(new Set());
    };

    const filteredItems = selectedCategory === 'all' 
        ? initialItems 
        : initialItems.filter(item => item.category === selectedCategory);

    const progress = Math.round((checkedIds.size / initialItems.length) * 100);

    return (
        <div>
            <SEOHead 
                path="/tools/evidence-checklist"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Workplace Dispute Evidence Checklist — Employee Rights India",
                    "description": "Interactive 17-point legal evidence preservation checklist to prepare before filing labour complaints or demanding unpaid salary in India."
                }}
            />

            <PageHero 
                title="Evidence Preservation Checklist"
                subtitle="Before sending legal notices or filing complaints before the Labour Commissioner, ensure you have gathered these 17 critical documents to substantiate your claims."
                icon={CheckSquare}
                gradient="blue"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Evidence Checklist', path: '/tools/evidence-checklist' }
                    ]} />

                    {/* Strict Evidence Rules Card */}
                    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 p-6 rounded-2xl flex gap-4 text-amber-900 dark:text-amber-200 shadow-soft text-xs sm:text-sm">
                        <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <h3 className="font-bold text-base mb-1">Strict Rules for Evidence Preservation:</h3>
                            <ul className="list-disc list-inside space-y-1 text-amber-800 dark:text-amber-300">
                                <li><strong>Never alter, edit, or fabricate timestamps or emails.</strong> Fabricated evidence is punishable under Section 193 of the Indian Penal Code.</li>
                                <li><strong>Always preserve original digital copies</strong> with full email headers and raw metadata.</li>
                                <li><strong>Do not access company networks, cloud drives, or databases after your authorization terminates.</strong></li>
                            </ul>
                        </div>
                    </div>

                    {/* Interactive Checklist Dashboard */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        
                        {/* Progress Bar & Actions */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                    Evidence Readiness: {checkedIds.size} of {initialItems.length} Secured ({progress}%)
                                </h2>
                                <div className="w-64 bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 mt-2">
                                    <div 
                                        className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrint}
                                    className="px-4 py-2 bg-primary text-white font-bold rounded-xl text-xs flex items-center gap-1.5 hover:bg-primary/90 shadow-soft"
                                >
                                    <Printer className="w-3.5 h-3.5" /> Print / Save PDF
                                </button>
                                <button
                                    onClick={handleReset}
                                    className="px-3 py-2 border border-gray-200 dark:border-gray-700 font-bold rounded-xl text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: 'all', label: 'All Items' },
                                { id: 'contract', label: 'Appointment & Contract' },
                                { id: 'salary', label: 'Salary & Bank Statements' },
                                { id: 'social_sec', label: 'PF & ESI Records' },
                                { id: 'comms', label: 'Emails & Attendance' },
                                { id: 'exit', label: 'Resignation & Assets' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setSelectedCategory(tab.id)}
                                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                        selectedCategory === tab.id
                                            ? 'bg-primary text-white shadow-soft'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Checklist Grid */}
                        <div className="space-y-2.5">
                            {filteredItems.map(item => {
                                const isChecked = checkedIds.has(item.id);
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => toggleItem(item.id)}
                                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                                            isChecked
                                                ? 'bg-green-50/50 dark:bg-green-950/20 border-green-300 dark:border-green-800 text-gray-900 dark:text-gray-100'
                                                : 'bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                            isChecked 
                                                ? 'bg-green-500 border-green-500 text-white' 
                                                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'
                                        }`}>
                                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                                        </div>
                                        <span className={`text-sm ${isChecked ? 'font-semibold line-through text-gray-500 dark:text-gray-400' : 'font-medium'}`}>
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
