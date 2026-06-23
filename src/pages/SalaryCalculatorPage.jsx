import { Calculator } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import SalaryCalculator from '../components/SalaryCalculator';

export default function SalaryCalculatorPage() {
    return (
        <div>
            <SEOHead path="/salary-calculator" />
            <PageHero
                title="Salary Calculator"
                subtitle="Calculate your in-hand salary from your gross pay, including PF deductions and ESI estimations."
                icon={Calculator}
                gradient="success"
            />
            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'Salary Calculator', path: '/salary-calculator' }]} />
                    <div className="mt-8">
                        <SalaryCalculator />
                    </div>
                </div>
            </div>
        </div>
    );
}
