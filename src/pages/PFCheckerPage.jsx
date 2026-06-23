import { Briefcase } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import PFChecker from '../components/PFChecker';

export default function PFCheckerPage() {
    return (
        <div>
            <SEOHead path="/pf-checker" />
            <PageHero
                title="PF Eligibility Checker"
                subtitle="Check if you qualify for Provident Fund and estimate your PF corpus over time."
                icon={Briefcase}
                gradient="primary"
            />
            <div className="py-12 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={[{ label: 'Tools', path: '/tools' }, { label: 'PF Checker', path: '/pf-checker' }]} />
                    <div className="mt-8">
                        <PFChecker />
                    </div>
                </div>
            </div>
        </div>
    );
}
