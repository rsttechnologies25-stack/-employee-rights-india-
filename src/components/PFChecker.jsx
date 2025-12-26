import { useState } from 'react';
import { Calculator, CheckCircle2, XCircle, Info, Landmark } from 'lucide-react';

export default function PFChecker() {
    const [salary, setSalary] = useState('');
    const [empType, setEmpType] = useState('full-time');
    const [result, setResult] = useState(null);

    const calculate = (e) => {
        e.preventDefault();
        const sal = parseFloat(salary);

        if (isNaN(sal) || sal <= 0) return;

        // PF Rules: 20+ employees, Day 1, Paid Interns only
        const pfEligible = empType !== 'student-intern';
        const pfMandatory = sal <= 15000;

        // ESI Rules: Gross <= 21000
        const esiEligible = sal <= 21000;

        setResult({
            pf: pfEligible,
            pfType: pfMandatory ? 'Mandatory' : 'Optional (Employer Policy)',
            esi: esiEligible,
            pfDesc: pfEligible
                ? (pfMandatory
                    ? "Your employer MUST contribute to your PF by law since your basic salary is below ₹15,000. It applies from Day 1."
                    : "PF is still standard, but mandatory limits apply to Basic ≤ ₹15k. Most companies provide it regardless.")
                : "PF doesn't typically apply to genuine unpaid student interns or statutory apprentices.",
            esiDesc: esiEligible
                ? "You are eligible for medical benefits under ESIC since your salary is ₹21,000 or less."
                : "Gross salary exceeds ₹21,000. You are not covered under ESI. Your company should provide private insurance."
        });
    };

    return (
        <div className="card max-w-2xl mx-auto shadow-lg">
            <div className="bg-primary p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">PF & ESI Eligibility Checker</h2>
                </div>
                <p className="text-blue-100 text-sm">Refined for Company Size (20+) and Employment Type.</p>
            </div>

            <form onSubmit={calculate} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Gross Salary (₹)</label>
                        <input
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            placeholder="e.g. 25000"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Employment Status</label>
                        <select
                            value={empType}
                            onChange={(e) => setEmpType(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                        >
                            <option value="full-time">Full-time / Probation</option>
                            <option value="paid-intern">Paid Intern</option>
                            <option value="student-intern">Student Intern / Apprentice</option>
                        </select>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-primary/80 leading-relaxed">
                        Note: These rules apply only to companies with 20 or more employees (for PF) and 10 or more (for ESI).
                        PF is mandatory from Day 1 for all eligible employees.
                    </p>
                </div>

                <button type="submit" className="w-full btn-accent py-4 flex items-center justify-center gap-2">
                    Check Eligibility
                </button>

                {result && (
                    <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className={`p-5 rounded-xl border ${result.pf ? 'bg-success/5 border-success/20' : 'bg-danger/5 border-danger/20'} flex items-start gap-4`}>
                            {result.pf ? <CheckCircle2 className="w-6 h-6 text-success shrink-0" /> : <XCircle className="w-6 h-6 text-danger shrink-0" />}
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-gray-900">PF Status: Eligible</span>
                                    <span className={`badge ${result.pfType.includes('Mandatory') ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'}`}>
                                        {result.pfType}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{result.pfDesc}</p>
                            </div>
                        </div>

                        <div className={`p-5 rounded-xl border ${result.esi ? 'bg-success/5 border-success/20' : 'bg-danger/5 border-danger/20'} flex items-start gap-4`}>
                            {result.esi ? <CheckCircle2 className="w-6 h-6 text-success shrink-0" /> : <Info className="w-6 h-6 text-primary shrink-0" />}
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-gray-900">ESI Status: {result.esi ? 'Active' : 'Not Covered'}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">{result.esiDesc}</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3 text-xs text-gray-500">
                            <Landmark className="w-4 h-4" />
                            <span>Note: PF applies to companies with 20+ employees. ESI applies to 10+ employees.</span>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
