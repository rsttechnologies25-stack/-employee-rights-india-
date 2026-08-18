import React from 'react';
import { useState, useMemo } from 'react';
import { MapPin, Phone, Mail, Globe, Search, Info, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import InternalLinks from '../components/InternalLinks';

const directoryData = {
    karnataka: [
        { district: 'Bengaluru (HQ)', office: 'Office of the Commissioner of Labour', address: 'Karmika Bhavana, ITI Compound, Bannerghatta Road, Bengaluru, Karnataka 560029', phone: '080-29753066', mail: 'labourcommissioner.ka@gmail.com', web: 'labour.karnataka.gov.in' },
        { district: 'Mysuru Division', office: 'Office of the Deputy Labour Commissioner', address: 'Karmika Bhavana, Kuvempunagar, Mysuru, Karnataka 570023', phone: '0821-2565651', mail: 'dlcmysore@gmail.com', web: 'labour.karnataka.gov.in' },
        { district: 'Hubballi Division', office: 'Office of the Deputy Labour Commissioner', address: 'Karmika Bhavana, Gokul Road, Hubballi, Karnataka 580030', phone: '0836-2330366', mail: 'dlchubli@gmail.com', web: 'labour.karnataka.gov.in' },
        { district: 'Mangaluru Division', office: 'Office of the Assistant Labour Commissioner', address: 'Karmika Bhavana, Kadri, Mangaluru, Karnataka 575003', phone: '0824-2211516', mail: 'alcmangalore@gmail.com', web: 'labour.karnataka.gov.in' },
    ],
    delhi: [
        { district: 'Delhi (HQ)', office: 'Office of the Labour Commissioner', address: '5-Sham Nath Marg, Civil Lines, Delhi 110054', phone: '011-23951230', mail: 'labourcommissioner@delhi.gov.in', web: 'labour.delhi.gov.in' },
        { district: 'West District Office', office: 'Office of the Joint Labour Commissioner', address: 'Labour Welfare Centre, Karampura, New Delhi 110015', phone: '011-25460833', mail: 'jlcwest.delhi@gov.in', web: 'labour.delhi.gov.in' },
        { district: 'South District Office', office: 'Office of the Joint Labour Commissioner', address: 'Labour Welfare Centre, Sector-4, Pushpa Vihar, New Delhi 110017', phone: '011-29562391', mail: 'jlcsouth.delhi@gov.in', web: 'labour.delhi.gov.in' },
    ],
    maharashtra: [
        { district: 'Mumbai (HQ)', office: 'Office of the Commissioner of Labour', address: 'Kamgar Bhavan, Block E, Bandra Kurla Complex (BKC), Bandra (E), Mumbai 400051', phone: '022-26573844', mail: 'commissioner.labour@maharashtra.gov.in', web: 'mahakamgar.maharashtra.gov.in' },
        { district: 'Pune Division', office: 'Office of the Deputy Labour Commissioner', address: 'Kamgar Bhavan, Wakdewadi, Shivaji Nagar, Pune 411005', phone: '020-25531235', mail: 'dlcpune@maharashtra.gov.in', web: 'mahakamgar.maharashtra.gov.in' },
        { district: 'Nagpur Division', office: 'Office of the Deputy Labour Commissioner', address: 'Kamgar Bhavan, Civil Lines, Nagpur 440001', phone: '0712-2561530', mail: 'dlcnagpur@maharashtra.gov.in', web: 'mahakamgar.maharashtra.gov.in' },
    ],
    tamilnadu: [
        { district: 'Chennai (HQ)', office: 'Office of the Commissioner of Labour', address: 'Tamil Nadu Labour Department, DMS Campus, Teynampet, Chennai 600006', phone: '044-24321302', mail: 'colchennai@tn.gov.in', web: 'labour.tn.gov.in' },
        { district: 'Coimbatore Division', office: 'Office of the Deputy Commissioner of Labour', address: 'Karmika Sangha Building, Balasundaram Road, Coimbatore 641018', phone: '0422-2241604', mail: 'dclcoimbatore@tn.gov.in', web: 'labour.tn.gov.in' },
        { district: 'Madurai Division', office: 'Office of the Deputy Commissioner of Labour', address: 'Government Offices Complex, Race Course Road, Madurai 625002', phone: '0452-2531602', mail: 'dclmadurai@tn.gov.in', web: 'labour.tn.gov.in' },
    ],
    uttarpradesh: [
        { district: 'Kanpur (HQ)', office: 'Office of the Labour Commissioner', address: 'UP Labour Commissionerate, GT Road, Shramik Bhavan, Kanpur 208005', phone: '0512-2296530', mail: 'labcommissioner-up@gov.in', web: 'uplabour.gov.in' },
        { district: 'Noida (G.B. Nagar)', office: 'Office of the Deputy Labour Commissioner', address: 'Sector-3, Near Harola, Noida, Uttar Pradesh 201301', phone: '0120-2442430', mail: 'dlcnoida.up@gov.in', web: 'uplabour.gov.in' },
        { district: 'Lucknow Division', office: 'Office of the Deputy Labour Commissioner', address: 'Pragati Bhavan, Kapoorthala, Aliganj, Lucknow 226024', phone: '0522-2325350', mail: 'dlclucknow.up@gov.in', web: 'uplabour.gov.in' },
    ],
    haryana: [
        { district: 'Chandigarh (HQ)', office: 'Office of the Labour Commissioner', address: '30 Bays Building, Sector 17-B, Chandigarh 160017', phone: '0172-2701350', mail: 'labourcommissioner@hry.gov.in', web: 'hrylabour.gov.in' },
        { district: 'Gurugram Division', office: 'Office of the Deputy Labour Commissioner', address: 'Karmik Bhawan, Sector-12, Gurugram, Haryana 122001', phone: '0124-2321530', mail: 'dlcgurugram.hry@gov.in', web: 'hrylabour.gov.in' },
        { district: 'Faridabad Division', office: 'Office of the Deputy Labour Commissioner', address: 'Labour Welfare Complex, Sector-23, Faridabad, Haryana 121005', phone: '0129-2231530', mail: 'dlcfaridabad.hry@gov.in', web: 'hrylabour.gov.in' },
    ],
    telangana: [
        { district: 'Hyderabad (HQ)', office: 'Office of the Commissioner of Labour', address: 'Anjaya Karmika Bhavan, RTC Cross Roads, Hyderabad, Telangana 500020', phone: '040-27615301', mail: 'comm_labour@telangana.gov.in', web: 'labour.telangana.gov.in' },
    ],
    andhrapradesh: [
        { district: 'Vijayawada (HQ)', office: 'Office of the Commissioner of Labour', address: 'AP Labour Commissionerate, Auto Nagar, Vijayawada, Andhra Pradesh 520007', phone: '0866-2541604', mail: 'aplabourcomm@gmail.com', web: 'labour.ap.gov.in' },
    ],
    gujarat: [
        { district: 'Gandhinagar (HQ)', office: 'Office of the Commissioner of Labour', address: 'Shram Bhavan, Sector-10/B, Gandhinagar, Gujarat 382010', phone: '079-23253531', mail: 'col-labour@gujarat.gov.in', web: 'col.gujarat.gov.in' },
    ],
    kerala: [
        { district: 'Trivandrum (HQ)', office: 'Office of the Labour Commissioner', address: 'Labour Commissionerate, Thozhil Bhavan, Vikas Bhavan P.O., Thiruvananthapuram 695033', phone: '0471-2301530', mail: 'lc@kerala.gov.in', web: 'lc.kerala.gov.in' },
    ],
    madhyapradesh: [
        { district: 'Indore (HQ)', office: 'Office of the Labour Commissioner', address: 'MP Labour Department, Shram Bhawan, 5-A, Jail Road, Indore 452003', phone: '0731-2531530', mail: 'labourcommissioner.mp@gov.in', web: 'labour.mp.gov.in' },
    ],
    rajasthan: [
        { district: 'Jaipur (HQ)', office: 'Department of Labour', address: 'Shram Bhavan, Shanti Nagar, Hasanpura Road, Jaipur, Rajasthan 302006', phone: '0141-2440350', mail: 'labourcomm-rj@gov.in', web: 'labour.rajasthan.gov.in' },
    ],
    westbengal: [
        { district: 'Kolkata (HQ)', office: 'Office of the Labour Commissioner', address: 'New Secretariat Buildings, 11th Floor, 1, K.S. Roy Road, Kolkata 700001', phone: '033-22625301', mail: 'lcwb@wb.gov.in', web: 'wblabour.gov.in' },
    ],
    odisha: [
        { district: 'Bhubaneswar (HQ)', office: 'Office of the Labour Commissioner', address: 'Shram Bhawan, Unit-III, Kharvel Nagar, Bhubaneswar, Odisha 751001', phone: '0674-2391530', mail: 'labourcommissioner.odisha@gov.in', web: 'labour.odisha.gov.in' },
    ],
    bihar: [
        { district: 'Patna (HQ)', office: 'Labour Resources Department', address: 'Vikas Bhawan, Bailey Road, Patna, Bihar 800015', phone: '0612-2211530', mail: 'labourresources-bih@gov.in', web: 'labour.bih.nic.in' },
    ]
};

const statesList = [
    { slug: 'karnataka', name: 'Karnataka' },
    { slug: 'delhi', name: 'Delhi' },
    { slug: 'maharashtra', name: 'Maharashtra' },
    { slug: 'tamilnadu', name: 'Tamil Nadu' },
    { slug: 'uttarpradesh', name: 'Uttar Pradesh' },
    { slug: 'haryana', name: 'Haryana' },
    { slug: 'telangana', name: 'Telangana' },
    { slug: 'andhrapradesh', name: 'Andhra Pradesh' },
    { slug: 'gujarat', name: 'Gujarat' },
    { slug: 'kerala', name: 'Kerala' },
    { slug: 'madhyapradesh', name: 'Madhya Pradesh' },
    { slug: 'rajasthan', name: 'Rajasthan' },
    { slug: 'westbengal', name: 'West Bengal' },
    { slug: 'odisha', name: 'Odisha' },
    { slug: 'bihar', name: 'Bihar' },
];

export default function LabourDirectoryPage() {
    const [selectedState, setSelectedState] = useState('karnataka');
    const [search, setSearch] = useState('');

    const filteredOffices = useMemo(() => {
        const offices = directoryData[selectedState] || [];
        return offices.filter(o => 
            !search || 
            o.district.toLowerCase().includes(search.toLowerCase()) || 
            o.office.toLowerCase().includes(search.toLowerCase()) ||
            o.address.toLowerCase().includes(search.toLowerCase())
        );
    }, [selectedState, search]);

    const relatedLinks = [
        { title: 'How to File Complaint', subtitle: 'Step-by-step portals list', path: '/complaint-guide' },
        { title: 'Grievance Generator', subtitle: 'Draft a complaint letter', path: '/tools/grievance-generator' },
        { title: 'State-Wise Labour Laws', subtitle: 'Verify local state rules', path: '/state-labour-laws' },
        { title: 'Minimum Wage Checker', subtitle: 'Verify compliance checker', path: '/tools/minimum-wage-checker' }
    ];

    return (
        <div>
            <SEOHead path="/tools/labour-directory" />

            <PageHero
                title="Regional Labour Office Directory"
                subtitle="Find addresses, map locations, contact phone numbers, and official emails of Labour Commissioner offices."
                icon={MapPin}
                gradient="teal"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <Breadcrumb items={[
                        { label: 'Tools & FAQ', path: '/tools' },
                        { label: 'Labour Directory', path: '/tools/labour-directory' }
                    ]} />

                    {/* ── JURISDICTION CAUTION ── */}
                    <div className="mt-8 mb-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-2xl p-6 flex gap-4 shadow-soft animate-in fade-in">
                        <AlertTriangle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h2 className="font-extrabold text-blue-800 dark:text-blue-300 text-lg mb-1">
                                Strict Jurisdictional Rule
                            </h2>
                            <p className="text-blue-755 dark:text-blue-400 text-sm leading-relaxed">
                                Statutory labor departments function strictly under regional jurisdictions. You <strong>must file your complaint with the Labour Commissioner office that holds physical jurisdiction over your workplace address</strong>. 
                                Filing at your residential address or the corporate headquarters city (if different from where you worked) will result in rejection or massive transfer delays.
                            </p>
                        </div>
                    </div>

                    {/* Filters: State Dropdown + Search Box */}
                    <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-5 mb-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Select State</label>
                                <select
                                    value={selectedState}
                                    onChange={e => setSelectedState(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 outline-none"
                                >
                                    {statesList.map(st => (
                                        <option key={st.slug} value={st.slug}>{st.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Search District / Office</label>
                                <div className="relative">
                                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="e.g. Noida, Pune, Bengaluru..."
                                        value={search}
                                        onChange={e => setSearch(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3.5 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900 text-sm outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Offices Card Grid */}
                    {filteredOffices.length === 0 ? (
                        <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 p-12 text-center text-gray-400">
                            <Info className="w-10 h-10 mx-auto mb-3 opacity-40" />
                            <p className="font-bold text-gray-500">No regional offices found matching "{search}"</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredOffices.map((office, idx) => (
                                <div key={idx} className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-soft p-6 flex flex-col justify-between hover:border-primary/30 transition-all">
                                    
                                    <div>
                                        <div className="flex justify-between items-start gap-2 mb-3">
                                            <h3 className="font-extrabold text-gray-900 dark:text-white text-base">{office.office}</h3>
                                            <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0">
                                                {office.district}
                                            </span>
                                        </div>

                                        <div className="flex gap-2.5 mt-4 text-sm text-gray-650 dark:text-gray-400">
                                            <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                                            <span>{office.address}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-850 space-y-2">
                                        {office.phone && (
                                            <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span>{office.phone}</span>
                                            </div>
                                        )}
                                        {office.mail && (
                                            <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <a href={`mailto:${office.mail}`} className="hover:underline text-primary">{office.mail}</a>
                                            </div>
                                        )}
                                        {office.web && (
                                            <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                <Globe className="w-4 h-4 text-gray-400" />
                                                <a href={`https://${office.web}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-primary flex items-center gap-1">
                                                    {office.web}
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}

                    <InternalLinks currentPath="/tools/labour-directory" links={relatedLinks} />
                </div>
            </div>
        </div>
    );
}
