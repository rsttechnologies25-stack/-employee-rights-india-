import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { AlertTriangle, ShieldCheck, Scale, CheckCircle, Search, XCircle, HandMetal } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function ExitScannerPage() {
    const [selectedFlags, setSelectedFlags] = useState([]);

    const flags = [
        {
            id: 'non-compete',
            label: 'HR demands you sign a Non-Compete preventing you from joining a competitor for X months/years.',
            verdictTitle: 'Completely Illegal (Void)',
            verdictText: 'Under Section 27 of the Indian Contract Act, 1872, any agreement that restrains you from exercising a lawful profession after termination of employment is void. You can legally join a direct competitor the next day.',
            color: 'red'
        },
        {
            id: 'training-bond',
            label: 'HR demands you pay a "Training Bond" penalty for resigning before your lock-in period ends.',
            verdictTitle: 'Legally Unenforceable (Usually)',
            verdictText: 'Under Section 74 of the Contract Act, bonds are not enforceable as "penalties". HR must prove they spent actual money on specialized external training for you. They cannot charge you a penalty for "on-the-job" generic training.',
            color: 'red'
        },
        {
            id: 'withhold-fnf',
            label: 'HR threatens to withhold your Experience Letter or Full & Final Settlement until you agree to their terms.',
            verdictTitle: 'Illegal Retaliation',
            verdictText: 'Withholding your statutory dues (salary, leave encashment) or service certificates as blackmail is a violation of the State Shops and Establishments Act. You can file a grievance with the Labour Commissioner.',
            color: 'red'
        },
        {
            id: 'notice-pay',
            label: 'The company is firing/laying you off, but they are deducting "Notice Pay" from your final settlement.',
            verdictTitle: 'Illegal Deduction',
            verdictText: 'If the employer initiates the termination (layoff/firing), THEY must pay you for the notice period. They cannot deduct notice pay from your salary unless YOU initiated the resignation and refused to serve the notice.',
            color: 'red'
        },
        {
            id: 'confidentiality',
            label: 'HR demands you sign an NDA preventing you from sharing trade secrets, code, or client lists.',
            verdictTitle: 'Legal & Enforceable',
            verdictText: 'Unlike Non-Competes, Non-Disclosure Agreements (NDAs) protecting actual trade secrets, client data, and proprietary code are fully valid in India. Do not steal or share company data upon exit, as it can lead to criminal breach of trust charges.',
            color: 'green'
        }
    ];

    const toggleFlag = (id) => {
        setSelectedFlags(prev => 
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Exit Interview Red Flag Scanner - Employee Rights India"
                description="Scan your exit interview or resignation process for illegal HR demands like non-competes, training bonds, or withheld settlements."
                path="/tools/exit-scanner"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Exit Scanner', path: '/tools/exit-scanner' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <Search className="w-10 h-10 text-primary" />
                        Exit Interview Red Flag Scanner
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Select the demands or threats HR is making during your resignation or exit process. We will instantly scan them against the Indian Contract Act to tell you if they are legal, enforceable, or blatant intimidation tactics.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
                    {/* Selectors */}
                    <div className="lg:col-span-2 space-y-4">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <HandMetal className="w-6 h-6 text-primary" />
                            What is HR demanding?
                        </h2>
                        {flags.map((flag) => {
                            const isSelected = selectedFlags.includes(flag.id);
                            return (
                                <div 
                                    key={flag.id}
                                    onClick={() => toggleFlag(flag.id)}
                                    className={`p-4 rounded-xl cursor-pointer border-2 transition-all ${isSelected ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 hover:border-primary/50'}`}
                                >
                                    <div className="flex gap-3">
                                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center ${isSelected ? 'bg-primary border-primary' : 'border-gray-400'}`}>
                                            {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                                        </div>
                                        <p className={`text-sm font-medium ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                            {flag.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Scanner Results */}
                    <div className="lg:col-span-3">
                        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                            Legal Analysis
                        </h2>
                        
                        {selectedFlags.length === 0 ? (
                            <div className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Select one or more demands from the list to see their legal validity.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {selectedFlags.map(id => {
                                    const flag = flags.find(f => f.id === id);
                                    return (
                                        <div key={id} className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 animate-fade-in">
                                            <div className="flex items-start gap-4">
                                                {flag.color === 'red' ? (
                                                    <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                                                ) : (
                                                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                                                )}
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
                                                        " {flag.label.substring(0, 50)}... "
                                                    </p>
                                                    <h3 className={`text-lg font-bold mb-2 ${flag.color === 'red' ? 'text-red-700' : 'text-green-700'}`}>
                                                        Verdict: {flag.verdictTitle}
                                                    </h3>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                                        {flag.verdictText}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-yellow-800">
                        <AlertTriangle className="w-6 h-6" />
                        Never Sign Anything Under Pressure
                    </h3>
                    <p className="text-yellow-800 font-medium mb-3">
                        If HR locks you in a room and demands you sign an exit document or resignation letter immediately:
                    </p>
                    <ul className="text-yellow-700 space-y-2 list-disc list-inside text-sm">
                        <li>Tell them: <span className="font-bold">"I need 24 hours to review this document legally before signing."</span></li>
                        <li>If they threaten you, write on the document: <span className="font-bold">"Signed under duress and protest"</span> before signing. This invalidates the document in court.</li>
                        <li>Always request a copy of everything you sign.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
