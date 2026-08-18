import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { UserX, ShieldAlert, AlertTriangle, CheckCircle, Scale, Building, Crosshair } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

export default function ShamContractorScannerPage() {
    const [answers, setAnswers] = useState({
        hours: null,
        equipment: null,
        exclusivity: null,
        integration: null,
        risk: null
    });

    const handleAnswer = (question, value) => {
        setAnswers(prev => ({ ...prev, [question]: value }));
    };

    const isComplete = Object.values(answers).every(v => v !== null);

    // Calculate score: 'true' means it points towards an Employer-Employee relationship
    let score = 0;
    if (answers.hours === true) score += 1;
    if (answers.equipment === true) score += 1;
    if (answers.exclusivity === true) score += 1;
    if (answers.integration === true) score += 1;
    if (answers.risk === false) score += 1; // False for risk means company takes financial risk, not contractor

    let verdict = { title: "", text: "", color: "" };
    if (isComplete) {
        if (score >= 4) {
            verdict = {
                title: "🚨 High Probability of Sham Contracting",
                text: "Based on the Indian Supreme Court's 'Control and Integration Test', you are legally acting as a full-time Employee, not an Independent Contractor. The company is likely classifying you as a contractor (under Section 194J) illegally to evade paying Provident Fund (PF), Gratuity, and statutory leaves. You have grounds to claim full employee benefits in a Labour Court.",
                color: "red"
            };
        } else if (score >= 2) {
            verdict = {
                title: "⚠️ Gray Area: Partial Employee Traits",
                text: "Your relationship has mixed traits. While you are officially a contractor, the company is exerting significant control over you. If they dictate your hours and prevent you from taking other clients, they are violating the legal definition of a freelancer.",
                color: "yellow"
            };
        } else {
            verdict = {
                title: "✅ Genuine Independent Contractor",
                text: "Your working arrangement aligns with the legal definition of an Independent Contractor. You retain autonomy over your hours, equipment, and financial risk. Because of this, you are not entitled to PF, Gratuity, or paid leaves.",
                color: "green"
            };
        }
    }

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Sham Contracting Scanner - Are you illegally hired as a contractor?"
                description="Use the Supreme Court's 'Control Test' to find out if your employer is illegally classifying you as a freelancer to avoid paying PF, Gratuity, and leaves."
                path="/tools/sham-contractor"
            />
            
            <div className="max-w-4xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Sham Contractor Scanner', path: '/tools/sham-contractor' }
                    ]} 
                />

                <div className="mb-10 mt-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                        <UserX className="w-10 h-10 text-primary" />
                        "Sham Contractor" Scanner
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Many Indian companies illegally hire full-time workers as "Independent Contractors" to avoid paying PF, Gratuity, Severance, and Leaves. Take the Supreme Court's legal test to see if you are being scammed out of your statutory benefits.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Quiz Section */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Crosshair className="w-6 h-6 text-primary" />
                            The Legal Control Test
                        </h2>

                        <div className="space-y-6">
                            {/* Q1 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">1. Does the company dictate your exact working hours (e.g., 9 to 5) or require daily attendance/login?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('hours', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.hours === true ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('hours', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.hours === false ? 'bg-gray-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No</button>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">2. Did the company provide you with a company laptop, software licenses, or core equipment?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('equipment', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.equipment === true ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('equipment', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.equipment === false ? 'bg-gray-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No</button>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">3. Are you contractually prohibited from working for other clients simultaneously?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('exclusivity', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.exclusivity === true ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('exclusivity', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.exclusivity === false ? 'bg-gray-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No</button>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">4. Are you integrated into the core team (e.g., you have a company email address, attend daily standups)?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('integration', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.integration === true ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes</button>
                                    <button onClick={() => handleAnswer('integration', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.integration === false ? 'bg-gray-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No</button>
                                </div>
                            </div>
                            
                            {/* Q5 */}
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">5. Do you take on personal financial risk if the project fails (e.g., you don't get paid if the client doesn't like the result)?</p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleAnswer('risk', true)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.risk === true ? 'bg-gray-500 text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>Yes (I bear risk)</button>
                                    <button onClick={() => handleAnswer('risk', false)} className={`flex-1 py-2 rounded-lg font-medium transition-colors ${answers.risk === false ? 'bg-primary text-white' : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>No (Fixed monthly pay)</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-6">
                        {!isComplete ? (
                            <div className="bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-center text-center">
                                <ShieldAlert className="w-12 h-12 text-gray-300 mb-4" />
                                <p className="text-gray-500 font-medium">Complete all 5 legal test questions to see if your employer is illegally denying your statutory benefits.</p>
                            </div>
                        ) : (
                            <>
                                <div className={`p-8 rounded-2xl shadow-sm border ${
                                    verdict.color === 'red' ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800' : 
                                    verdict.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-950/40 border-yellow-200 dark:border-yellow-800' : 
                                    'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800'
                                } animate-fade-in`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        {verdict.color === 'red' ? <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" /> : <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />}
                                        <h3 className={`font-black text-xl ${
                                            verdict.color === 'red' ? 'text-red-800 dark:text-red-300' : 
                                            verdict.color === 'yellow' ? 'text-yellow-800 dark:text-yellow-300' : 
                                            'text-green-800 dark:text-green-300'
                                        }`}>
                                            {verdict.title}
                                        </h3>
                                    </div>
                                    <p className={`font-medium ${
                                        verdict.color === 'red' ? 'text-red-700 dark:text-red-200' : 
                                        verdict.color === 'yellow' ? 'text-yellow-700 dark:text-yellow-200' : 
                                        'text-green-700 dark:text-green-200'
                                    }`}>
                                        {verdict.text}
                                    </p>
                                </div>

                                {score >= 4 && (
                                    <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 animate-fade-in">
                                        <h3 className="text-lg font-bold flex items-center gap-2 mb-3">
                                            <Building className="w-5 h-5 text-primary" />
                                            What you are being denied:
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                                            <li><span className="font-bold text-red-600">Provident Fund (12% Matching):</span> Your employer is avoiding paying their mandatory 12% contribution.</li>
                                            <li><span className="font-bold text-red-600">Gratuity Eligibility:</span> Contractors cannot claim gratuity after 5 years; employees can.</li>
                                            <li><span className="font-bold text-red-600">Paid Earned Leaves:</span> Contractors do not get statutory paid time off.</li>
                                            <li><span className="font-bold text-red-600">Retrenchment Severance:</span> If fired, a contractor gets nothing. An employee gets 15 days pay per year of service.</li>
                                        </ul>
                                        <div className="mt-5 p-4 bg-primary/10 rounded-xl border border-primary/20">
                                            <p className="text-sm font-bold text-primary mb-1">Your Legal Remedy:</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">You can file a petition with the Labour Commissioner claiming an "Employer-Employee Relationship" exists. Indian courts strictly look at the "substance" of the relationship, not the title on your contract.</p>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>

                <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Scale className="w-6 h-6 text-primary" />
                        The Law: Section 194J vs Section 192
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Many Indian startups and agencies hire people as "Consultants" and deduct TDS at 10% under Section 194J (Professional Fees) instead of deducting tax under Section 192 (Salaries). 
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                        The Supreme Court of India has repeatedly ruled that a contract's title does not matter. If the employer dictates <span className="font-bold">what</span> you do, <span className="font-bold">when</span> you do it, and <span className="font-bold">how</span> you do it, you are an employee. True independent contractors are hired to deliver a specific result and are free to achieve that result however they see fit, using their own tools, on their own schedule.
                    </p>
                </div>
            </div>
        </div>
    );
}
