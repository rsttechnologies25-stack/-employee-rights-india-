import { useState } from 'react';
import { Receipt, Info, AlertTriangle } from 'lucide-react';

export default function SalaryCalculator() {
    const [gross, setGross] = useState('');

    const sal = parseFloat(gross) || 0;

    // Assumptions
    const basic = sal * 0.40;
    const hra = basic * 0.40;
    const other = sal - basic - hra;

    const pfApplicable = sal > 0; // Simplified for display
    const esiApplicable = sal > 0 && sal <= 21000;

    const employeePF = pfApplicable ? basic * 0.12 : 0;
    const employerPF = pfApplicable ? basic * 0.12 : 0;

    const employeeESI = esiApplicable ? sal * 0.0075 : 0;
    const employerESI = esiApplicable ? sal * 0.0325 : 0;

    const netTakeHome = sal - employeePF - employeeESI;
    const totalCTC = sal + employerPF + employerESI;

    return (
        <div className="card max-w-4xl mx-auto shadow-lg overflow-hidden">
            <div className="bg-accent p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Receipt className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">Salary Structure (CTC) Estimator</h2>
                </div>
                <p className="text-orange-100 text-sm">See how your Gross Salary is divided into Basic, HRA, PF, and ESI.</p>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Enter Monthly Gross Salary (₹)</label>
                        <input
                            type="number"
                            value={gross}
                            onChange={(e) => setGross(e.target.value)}
                            className="w-full px-4 py-4 rounded-xl border-2 border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all text-xl font-bold"
                            placeholder="e.g. 50000"
                        />
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 border-b pb-2">Components Breakdown</h4>
                        <div className="flex justify-between text-sm py-2">
                            <span className="text-gray-500">Basic Salary (40%)</span>
                            <span className="font-semibold">₹{basic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm py-2">
                            <span className="text-gray-500">HRA (40% of Basic)</span>
                            <span className="font-semibold">₹{hra.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm py-2">
                            <span className="text-gray-500">Other Allowances</span>
                            <span className="font-semibold">₹{other.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                        <div className="flex items-center gap-2 mb-2 text-accent">
                            <Info className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Standard Assumptions</span>
                        </div>
                        <p className="text-[10px] text-orange-800/70 leading-relaxed">
                            Calculations assume Basic = 40% of Gross. Actual company structures may vary.
                            PF is calculated as 12% of Basic. ESI is 0.75% (Employee) and 3.25% (Employer) of Gross.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Receipt className="w-5 h-5 text-accent" />
                            Impact on Your Pay
                        </h4>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                                <div className="text-sm">
                                    <p className="font-bold">Monthly Gross</p>
                                    <p className="text-[10px] text-gray-400">Total payable before deductions</p>
                                </div>
                                <p className="font-black text-lg">₹{sal.toLocaleString()}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                    <p className="text-[10px] uppercase font-bold text-red-600 mb-1">Deductions (PF)</p>
                                    <p className="font-bold text-gray-900">₹{employeePF.toLocaleString()}</p>
                                </div>
                                <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                                    <p className="text-[10px] uppercase font-bold text-red-600 mb-1">Deductions (ESI)</p>
                                    <p className="font-bold text-gray-900">₹{employeeESI.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-success/10 rounded-xl border border-success/20">
                                <div>
                                    <p className="font-bold text-success">Net Take Home</p>
                                    <p className="text-[10px] text-success/70">Estimated In-hand salary</p>
                                </div>
                                <p className="font-black text-2xl text-success font-mono">₹{netTakeHome.toLocaleString()}</p>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                                <div>
                                    <p className="font-bold text-primary">Monthly CTC</p>
                                    <p className="text-[10px] text-primary/70">Gross + Employer PF/ESI</p>
                                </div>
                                <p className="font-bold text-xl text-primary font-mono">₹{totalCTC.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
                        <p className="text-xs text-yellow-800 leading-tight">
                            <strong>Red Flag:</strong> If your company deducts "Employer PF" from your Gross Salary, it is an <strong>illegal practice</strong>. Employers must pay their share over and above the Gross.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
