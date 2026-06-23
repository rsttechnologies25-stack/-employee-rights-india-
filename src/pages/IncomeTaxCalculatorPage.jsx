import { useState } from 'react';
import { Calculator } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import CalculatorCard, { CalcInput, CalcResult, CalcDisclaimer } from '../components/CalculatorCard';
import InternalLinks from '../components/InternalLinks';

const relatedLinks = [
    { title: 'Form 16 Rights', subtitle: 'TDS deduction rules', path: '/form-16-rights' },
    { title: 'Salary Calculation Methods', subtitle: 'How pay is calculated', path: '/salary-calculation' },
    { title: 'All Calculators', subtitle: 'Explore more tools', path: '/tools' },
];

export default function IncomeTaxCalculatorPage() {
    const [income, setIncome] = useState(1200000);
    const [deductions, setDeductions] = useState(150000); // 80C
    const [nps, setNps] = useState(50000); // 80CCD(1B)
    const [hra, setHra] = useState(100000); // HRA exemption
    const [medical, setMedical] = useState(25000); // 80D
    const [lta, setLta] = useState(0); // LTA exemption
    const [homeLoanInterest, setHomeLoanInterest] = useState(0); // Sec 24

    // FY 2023-24 (AY 2024-25) tax rules
    const STANDARD_DEDUCTION = 50000;

    // Calculate Tax under OLD Regime
    const calculateOldTax = () => {
        // Gross income minus all exemptions and deductions
        const taxableIncome = income - STANDARD_DEDUCTION - deductions - nps - hra - medical - lta - homeLoanInterest;
        if (taxableIncome <= 500000) return 0; // Sec 87A rebate

        let tax = 0;
        if (taxableIncome > 250000) {
            tax += Math.min(250000, taxableIncome - 250000) * 0.05;
        }
        if (taxableIncome > 500000) {
            tax += Math.min(500000, taxableIncome - 500000) * 0.20;
        }
        if (taxableIncome > 1000000) {
            tax += (taxableIncome - 1000000) * 0.30;
        }
        
        return Math.round(tax * 1.04); // adding 4% health & edu cess
    };

    // Calculate Tax under NEW Regime (FY 23-24 rules)
    const calculateNewTax = () => {
        // New regime only allows Standard Deduction (from FY 23-24)
        const taxableIncome = income - STANDARD_DEDUCTION;
        
        if (taxableIncome <= 700000) return 0; // Sec 87A rebate enhanced to 7L

        let tax = 0;
        if (taxableIncome > 300000) {
            tax += Math.min(300000, taxableIncome - 300000) * 0.05;
        }
        if (taxableIncome > 600000) {
            tax += Math.min(300000, taxableIncome - 600000) * 0.10;
        }
        if (taxableIncome > 900000) {
            tax += Math.min(300000, taxableIncome - 900000) * 0.15;
        }
        if (taxableIncome > 1200000) {
            tax += Math.min(300000, taxableIncome - 1200000) * 0.20;
        }
        if (taxableIncome > 1500000) {
            tax += (taxableIncome - 1500000) * 0.30;
        }

        // Marginal Relief logic simplified for 7L edge case (Income > 7L but < 7.27L approx)
        if (taxableIncome > 700000 && taxableIncome <= 727777) {
            const taxWithoutRelief = tax * 1.04;
            const incomeAboveRebate = taxableIncome - 700000;
            // Pay tax OR pay the income above 7L, whichever is lower
            if (taxWithoutRelief > incomeAboveRebate) {
                return Math.round(incomeAboveRebate);
            }
        }

        return Math.round(tax * 1.04);
    };

    const oldTax = calculateOldTax();
    const newTax = calculateNewTax();
    const difference = Math.abs(oldTax - newTax);
    
    // Determine winner
    let winner = 'Equal';
    if (oldTax < newTax) winner = 'Old Regime';
    if (newTax < oldTax) winner = 'New Regime';

    return (
        <div>
            <SEOHead path="/tools/income-tax-calculator" />
            <PageHero
                title="Income Tax Calculator"
                subtitle="Compare Old vs. New Tax Regime for salaried employees to find out which saves you more money."
                icon={Calculator}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'Income Tax Calculator', path: '/tools/income-tax-calculator' }]} />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                        {/* Inputs */}
                        <div className="lg:col-span-5 space-y-4">
                            <CalculatorCard title="Income & Deductions" icon={Calculator}>
                                <div className="space-y-4">
                                    <CalcInput label="Gross Annual Salary (₹)" value={income} onChange={setIncome} type="number" min="0" step="50000" />
                                    
                                    <div className="pt-4 border-t border-gray-100">
                                        <h4 className="font-bold text-sm text-gray-900 mb-4">Old Regime Exemptions & Deductions</h4>
                                        <CalcInput label="Section 80C (EPF, LIC, ELSS) Max 1.5L" value={deductions} onChange={setDeductions} type="number" min="0" />
                                        <CalcInput label="Section 80CCD(1B) (NPS) Max 50K" value={nps} onChange={setNps} type="number" min="0" />
                                        <CalcInput label="HRA Exemption Amount" value={hra} onChange={setHra} type="number" min="0" />
                                        <CalcInput label="Section 80D (Medical Insurance)" value={medical} onChange={setMedical} type="number" min="0" />
                                        <CalcInput label="Home Loan Interest (Sec 24)" value={homeLoanInterest} onChange={setHomeLoanInterest} type="number" min="0" />
                                        <CalcInput label="LTA Exemption Amount" value={lta} onChange={setLta} type="number" min="0" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Standard Deduction of ₹50,000 is automatically applied to both regimes.</p>
                                </div>
                            </CalculatorCard>
                        </div>

                        {/* Results */}
                        <div className="lg:col-span-7">
                            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden sticky top-24">
                                <div className="bg-primary p-6 text-white text-center">
                                    <h3 className="text-lg font-medium opacity-90 mb-1">Recommendation</h3>
                                    {winner === 'Equal' ? (
                                        <div className="text-3xl font-bold">Both Regimes are Equal</div>
                                    ) : (
                                        <>
                                            <div className="text-3xl font-black">{winner} is Better</div>
                                            <div className="text-sm font-medium mt-2 bg-white/20 inline-block px-3 py-1 rounded-full">
                                                Saves you ₹{difference.toLocaleString('en-IN')}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Old Regime Card */}
                                        <div className={`p-4 rounded-xl border-2 transition-colors ${winner === 'Old Regime' ? 'border-success bg-success/5' : 'border-gray-100 bg-gray-50'}`}>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-gray-600 mb-1">Old Regime Tax</div>
                                                <div className={`text-2xl font-black ${winner === 'Old Regime' ? 'text-success' : 'text-gray-900'}`}>
                                                    ₹{oldTax.toLocaleString('en-IN')}
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-200/50 text-xs space-y-2">
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Gross Income</span>
                                                    <span>₹{income.toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Deductions</span>
                                                    <span>-₹{(Number(deductions) + Number(nps) + Number(hra) + Number(medical) + Number(lta) + Number(homeLoanInterest) + STANDARD_DEDUCTION).toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="flex justify-between font-bold text-gray-900">
                                                    <span>Taxable Income</span>
                                                    <span>₹{Math.max(0, income - deductions - nps - hra - medical - lta - homeLoanInterest - STANDARD_DEDUCTION).toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* New Regime Card */}
                                        <div className={`p-4 rounded-xl border-2 transition-colors ${winner === 'New Regime' ? 'border-success bg-success/5' : 'border-gray-100 bg-gray-50'}`}>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-gray-600 mb-1">New Regime Tax</div>
                                                <div className={`text-2xl font-black ${winner === 'New Regime' ? 'text-success' : 'text-gray-900'}`}>
                                                    ₹{newTax.toLocaleString('en-IN')}
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-200/50 text-xs space-y-2">
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Gross Income</span>
                                                    <span>₹{income.toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="flex justify-between text-gray-600">
                                                    <span>Deductions</span>
                                                    <span>-₹{(STANDARD_DEDUCTION).toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="flex justify-between font-bold text-gray-900">
                                                    <span>Taxable Income</span>
                                                    <span>₹{Math.max(0, income - STANDARD_DEDUCTION).toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <CalcDisclaimer />
                            </div>
                        </div>
                    </div>

                    <InternalLinks currentPath="/tools/income-tax-calculator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
