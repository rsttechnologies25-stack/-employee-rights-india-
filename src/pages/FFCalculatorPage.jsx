import { useState } from 'react';
import { FileCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';
import CalculatorCard, { CalcInput, CalcResult, CalcDisclaimer } from '../components/CalculatorCard';

const relatedLinks = [
    { title: 'Full & Final Settlement Guide', subtitle: 'Complete F&F guide', path: '/full-final-settlement' },
    { title: 'Gratuity Calculator', subtitle: 'Calculate your gratuity', path: '/gratuity' },
    { title: 'All Calculators', subtitle: 'Other tools', path: '/tools' },
];

export default function FFCalculatorPage() {
    const [monthlySalary, setMonthlySalary] = useState(50000);
    const [daysWorked, setDaysWorked] = useState(22);
    const [leaveBalance, setLeaveBalance] = useState(12);
    const [bonusDue, setBonusDue] = useState(0);
    const [gratuityEligible, setGratuityEligible] = useState(false);
    const [basicDa, setBasicDa] = useState(20000);
    const [yearsService, setYearsService] = useState(5);
    const [noticeStatus, setNoticeStatus] = useState('served');
    const [noticeDays, setNoticeDays] = useState(0);

    const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

    const unpaidSalary = (monthlySalary / 30) * daysWorked;
    const leaveEncashment = (monthlySalary / 30) * leaveBalance;
    const gratuity = gratuityEligible ? Math.min((15 * basicDa * yearsService) / 26, 2000000) : 0;
    const noticeRecovery = noticeStatus === 'buyout' ? (monthlySalary / 30) * noticeDays : 0;
    const total = unpaidSalary + leaveEncashment + bonusDue + gratuity - noticeRecovery;

    return (
        <div>
            <SEOHead path="/tools/ff-calculator" />
            <PageHero title="F&F Settlement Calculator" subtitle="Estimate your Full & Final settlement — all components in one place." icon={FileCheck} gradient="primary" />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'F&F Calculator', path: '/tools/ff-calculator' }]} />
                    <CalculatorCard title="Full & Final Settlement Calculator" description="Comprehensive F&F estimation — salary, leave, gratuity, bonus, notice recovery" icon={FileCheck}
                        assumptions="This estimates your F&F using standard formulas. Actual F&F depends on your company policy, salary structure, applicable state laws, and specific employment contract terms.">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <CalcInput label="Last Monthly Salary (Gross)" value={monthlySalary} onChange={v => setMonthlySalary(Number(v))} prefix="₹" placeholder="50000" />
                            <CalcInput label="Days Worked in Final Month" value={daysWorked} onChange={v => setDaysWorked(Number(v))} placeholder="22" suffix="days" />
                            <CalcInput label="Earned Leave Balance" value={leaveBalance} onChange={v => setLeaveBalance(Number(v))} placeholder="12" suffix="days" />
                            <CalcInput label="Bonus Due (if any)" value={bonusDue} onChange={v => setBonusDue(Number(v))} prefix="₹" placeholder="0" helpText="Pro-rata or contractual bonus" />
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-4">
                            <div className="flex items-center justify-between mb-3">
                                <p className="font-bold text-sm text-gray-700">Gratuity Eligible (5+ years service)?</p>
                                <div className="flex gap-2">
                                    {[true, false].map(v => (
                                        <button key={v.toString()} onClick={() => setGratuityEligible(v)} className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${gratuityEligible === v ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>{v ? 'Yes' : 'No'}</button>
                                    ))}
                                </div>
                            </div>
                            {gratuityEligible && (
                                <div className="grid grid-cols-2 gap-3 mt-3">
                                    <CalcInput label="Basic + DA (Monthly)" value={basicDa} onChange={v => setBasicDa(Number(v))} prefix="₹" placeholder="20000" />
                                    <CalcInput label="Years of Service" value={yearsService} onChange={v => setYearsService(Number(v))} placeholder="5" suffix="yrs" />
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                            <p className="font-bold text-sm text-gray-700 mb-3">Notice Period Status</p>
                            <div className="flex gap-2 flex-wrap mb-3">
                                {[{ id: 'served', label: 'Fully Served' }, { id: 'waived', label: 'Waived by Employer' }, { id: 'buyout', label: 'Partial Buyout' }].map(s => (
                                    <button key={s.id} onClick={() => setNoticeStatus(s.id)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${noticeStatus === s.id ? 'bg-accent text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>{s.label}</button>
                                ))}
                            </div>
                            {noticeStatus === 'buyout' && (
                                <CalcInput label="Unserved Notice Days (to be recovered)" value={noticeDays} onChange={v => setNoticeDays(Number(v))} placeholder="30" suffix="days" />
                            )}
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Breakdown</p>
                            <CalcResult label="Unpaid Salary for Days Worked" value={fmt(unpaidSalary)} />
                            <CalcResult label="Leave Encashment" value={fmt(leaveEncashment)} />
                            {bonusDue > 0 && <CalcResult label="Bonus / Incentives" value={fmt(bonusDue)} />}
                            {gratuityEligible && <CalcResult label="Gratuity" value={fmt(gratuity)} />}
                            {noticeRecovery > 0 && <CalcResult label="Notice Pay Recovery (Deduction)" value={'- ' + fmt(noticeRecovery)} variant="danger" />}
                            <div className="border-t-2 border-gray-200 pt-3">
                                <CalcResult label="Estimated F&F (Before Tax)" value={fmt(Math.max(0, total))} variant="success" sublabel="Before TDS deduction" />
                            </div>
                        </div>
                        <CalcDisclaimer>TDS will be deducted by the employer on applicable components. Gratuity is exempt up to ₹20L; leave encashment exempt up to ₹25L. Actual F&F may differ based on your company's specific policy, CTC structure, and pending reimbursements.</CalcDisclaimer>
                    </CalculatorCard>
                    <InternalLinks currentPath="/tools/ff-calculator" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
