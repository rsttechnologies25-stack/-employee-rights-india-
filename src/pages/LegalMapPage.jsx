import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Map, Search, ExternalLink, MapPin, Scale, ChevronRight } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';

export default function LegalMapPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedState, setSelectedState] = useState(null);

    const statesData = [
        {
            id: 'ka',
            name: 'Karnataka',
            hubs: 'Bengaluru, Mysuru, Hubballi',
            act: 'Karnataka Shops & Commercial Establishments Act, 1961',
            minWageLink: '/minimum-wages',
            directoryLink: '/tools/labour-directory',
            specifics: 'IT Sector has specific exemptions from Standing Orders, but NOT from basic leave entitlements.'
        },
        {
            id: 'mh',
            name: 'Maharashtra',
            hubs: 'Mumbai, Pune, Nagpur',
            act: 'Maharashtra Shops & Establishments Act, 2017',
            minWageLink: '/minimum-wages',
            directoryLink: '/tools/labour-directory',
            specifics: 'Mandates specific casual and earned leaves. IT sector is fully covered for leaves and overtime.'
        },
        {
            id: 'dl',
            name: 'Delhi NCR',
            hubs: 'New Delhi, Noida (UP), Gurugram (HR)',
            act: 'Delhi Shops & Establishments Act, 1954',
            minWageLink: '/minimum-wages',
            directoryLink: '/tools/labour-directory',
            specifics: 'Note: Noida falls under UP labor laws, while Gurugram falls under Haryana labor laws.'
        },
        {
            id: 'tn',
            name: 'Tamil Nadu',
            hubs: 'Chennai, Coimbatore, Madurai',
            act: 'Tamil Nadu Shops & Establishments Act, 1947',
            minWageLink: '/minimum-wages/tamil-nadu',
            directoryLink: '/tools/labour-directory',
            specifics: 'Tamil Nadu recently proposed (then withdrew) 12-hour work shift exemptions for factories. IT sector leaves are protected.'
        },
        {
            id: 'ts',
            name: 'Telangana',
            hubs: 'Hyderabad, Warangal',
            act: 'Telangana Shops & Establishments Act, 1988',
            minWageLink: '/minimum-wages',
            directoryLink: '/tools/labour-directory',
            specifics: 'Strong protections for women working night shifts in IT/BPO with mandatory transport and security.'
        }
    ];

    const filteredStates = statesData.filter(state => 
        state.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        state.hubs.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
            <SEOHead 
                title="Interactive State Legal Hub - Employee Rights India"
                description="Find your state's specific labor laws, minimum wages, and regional labour commissioner directory in one place."
                path="/legal-map"
            />
            
            <div className="max-w-6xl mx-auto">
                <Breadcrumb 
                    items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'State Legal Hub', path: '/legal-map' }
                    ]} 
                />

                <div className="mb-10 mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
                            <Map className="w-10 h-10 text-primary" />
                            State Legal Hub
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                            Labor laws in India are "concurrent", meaning every state has its own specific rules. Search for your state or city to instantly find your applicable laws and directories.
                        </p>
                    </div>
                    
                    <div className="relative w-full md:w-72 flex-shrink-0">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Search state or city..." 
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Grid List */}
                    <div className="lg:col-span-1 space-y-3">
                        {filteredStates.map((state) => (
                            <div 
                                key={state.id}
                                onClick={() => setSelectedState(state)}
                                className={`p-4 rounded-xl cursor-pointer transition-all border-2 flex items-center justify-between ${selectedState?.id === state.id ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-primary/30 shadow-soft'}`}
                            >
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{state.name}</h3>
                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                                        <MapPin className="w-3 h-3" /> {state.hubs}
                                    </p>
                                </div>
                                <ChevronRight className={`w-5 h-5 ${selectedState?.id === state.id ? 'text-primary' : 'text-gray-300'}`} />
                            </div>
                        ))}

                        {filteredStates.length === 0 && (
                            <div className="p-8 text-center text-gray-500">
                                No states found. Try searching for a major IT hub like Bengaluru, Pune, or Delhi.
                            </div>
                        )}
                    </div>

                    {/* Detail Panel */}
                    <div className="lg:col-span-2">
                        {selectedState ? (
                            <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-soft sticky top-24 animate-fade-in">
                                <div className="border-b border-gray-100 dark:border-gray-800 pb-6 mb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <MapPin className="w-8 h-8 text-primary" />
                                        <h2 className="text-3xl font-black text-gray-900 dark:text-white">{selectedState.name}</h2>
                                    </div>
                                    <p className="text-gray-500 font-medium ml-11">Major Hubs: {selectedState.hubs}</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                                        <h3 className="font-bold flex items-center gap-2 mb-2 text-primary">
                                            <Scale className="w-5 h-5" />
                                            Governing Act
                                        </h3>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">
                                            {selectedState.act}
                                        </p>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl border border-gray-100 dark:border-gray-800">
                                        <h3 className="font-bold flex items-center gap-2 mb-2 text-gray-800 dark:text-gray-200">
                                            Regional Notes
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {selectedState.specifics}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                        <Link 
                                            to={selectedState.minWageLink}
                                            className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary rounded-xl group transition-colors"
                                        >
                                            <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">Check Minimum Wage</span>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                        </Link>
                                        
                                        <Link 
                                            to={selectedState.directoryLink}
                                            className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary rounded-xl group transition-colors"
                                        >
                                            <span className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">Labour Directory</span>
                                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full min-h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                                <div>
                                    <Map className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500 dark:text-gray-400 font-medium">Select a state from the list to view its specific labor laws, minimum wages, and directory links.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
