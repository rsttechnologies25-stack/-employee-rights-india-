import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { ShieldAlert, AlertTriangle, Scale, Search, FileText, CheckCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function BGVShieldPage() {
    const [q1, setQ1] = useState(null); // Resigned properly?
    const [q2, setQ2] = useState(null); // Manager threatened?
    const [q3, setQ3] = useState(null); // Factual vs Opinion

    const isComplete = q1 !== null && q2 !== null && q3 !== null;
    
    // Evaluate if it's actionable defamation
    let status = 'neutral';
    let analysis = '';

    if (isComplete) {
        if (!q1) {
            status = 'warning';
            analysis = "If you absconded (left without serving notice or communicating), the employer is legally allowed to state the factual truth to the BGV agency: that you did not serve the notice period. This is not defamation. You should try to negotiate a notice buyout to get a clean exit.";
        } else if (q1 && q2 && !q3) {
            status = 'danger';
            analysis = "If you resigned properly but the manager is threatening to give 'bad feedback' based on personal opinions or false claims of performance issues (without any PIP history), this is MALICIOUS DEFAMATION.";
        } else {
            status = 'safe';
            analysis = "You followed the process. If they attempt to tank your BGV using factual records (like attendance), they can. But if they invent lies, you have strong grounds for legal action.";
        }
    }

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="BGV Defamation Shield - Background Verification Rights India"
                description="Is your manager threatening to ruin your background verification (BGV)? Learn your rights against corporate defamation and illegal 'absconding' tags."
                path="/tools/bgv-shield"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'BGV Shield', path: '/tools/bgv-shield' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <ShieldAlert className="w-10 h-10 text-primary" />
                        BGV Defamation Shield
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A common tactic used by toxic managers to prevent you from resigning is threatening to "ruin your background check" or tag you as an "absconder." Determine if they are crossing the line into criminal defamation.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Interactive Q&A */}
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Search className="w-6 h-6 text-primary" />
                            Incident Audit
                        </h2>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    1. Did you resign formally (via email) and offer to serve your notice period or pay a buyout?
                                </label>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setQ1(true)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${q1 === true ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >Yes</button>
                                    <button 
                                        onClick={() => setQ1(false)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${q1 === false ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >No, I absconded</button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    2. Has your manager or HR explicitly threatened to give a negative reference to future employers?
                                </label>
                                <div className="flex gap-3">
                                    <button 
                                        onClick={() => setQ2(true)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${q2 === true ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >Yes</button>
                                    <button 
                                        onClick={() => setQ2(false)}
                                        className={`flex-1 py-2 rounded-lg font-medium transition-colors border ${q2 === false ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >No</button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                                    3. Is their threatened feedback based on documented facts (e.g., actual PIP records) or personal malice/opinions?
                                </label>
                                <div className="flex gap-3 flex-col sm:flex-row">
                                    <button 
                                        onClick={() => setQ3(true)}
                                        className={`flex-1 py-2 px-2 rounded-lg font-medium text-sm transition-colors border ${q3 === true ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >Documented Facts</button>
                                    <button 
                                        onClick={() => setQ3(false)}
                                        className={`flex-1 py-2 px-2 rounded-lg font-medium text-sm transition-colors border ${q3 === false ? 'bg-primary text-white border-primary' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >Malice / Unproven Opinions</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="space-y-6">
                        {!isComplete ? (
                            <div className="h-full min-h-[300px] flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <p className="text-gray-500 dark:text-gray-400 font-medium">Answer the 3 questions to evaluate your legal standing.</p>
                            </div>
                        ) : (
                            <div className={`p-6 rounded-2xl shadow-sm border animate-fade-in ${
                                status === 'danger' ? 'bg-red-50 border-red-200' : 
                                status === 'warning' ? 'bg-yellow-50 border-yellow-200' : 
                                'bg-green-50 border-green-200'
                            }`}>
                                <div className="flex items-center gap-3 mb-4">
                                    {status === 'danger' ? <AlertTriangle className="w-8 h-8 text-red-600" /> : 
                                     status === 'warning' ? <AlertTriangle className="w-8 h-8 text-yellow-600" /> : 
                                     <CheckCircle className="w-8 h-8 text-green-600" />}
                                    <h3 className={`text-2xl font-bold ${
                                        status === 'danger' ? 'text-red-800' : 
                                        status === 'warning' ? 'text-yellow-800' : 
                                        'text-green-800'
                                    }`}>
                                        {status === 'danger' ? 'Actionable Defamation Detected' : 
                                         status === 'warning' ? 'Employer is Factually Correct' : 'Safe / Defensive Position'}
                                    </h3>
                                </div>
                                <p className={`font-medium ${
                                    status === 'danger' ? 'text-red-900' : 
                                    status === 'warning' ? 'text-yellow-900' : 'text-green-900'
                                }`}>
                                    {analysis}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-primary" />
                            The Legal Standard (Section 499 IPC)
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Under Section 499 of the Indian Penal Code, making false statements (written or spoken) that harm a person's professional reputation is Defamation. If an employer lies to a BGV agency about your conduct to intentionally tank your new job offer, they can be sued for heavy civil damages.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl shadow-soft border border-gray-800 text-white">
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-blue-400" />
                            How to Fight Back
                        </h3>
                        <ol className="text-gray-300 text-sm space-y-2 list-decimal list-inside">
                            <li>Keep all WhatsApp/Teams chats where they threaten your BGV.</li>
                            <li>Send a formal email to the HR Head (cc'ing your personal email) documenting the manager's verbal threats.</li>
                            <li>If you fail the BGV, ask the new company for the exact report.</li>
                            <li>Send a Legal Notice to the old employer for "Tortious Interference with Employment" demanding damages equal to your lost salary.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
