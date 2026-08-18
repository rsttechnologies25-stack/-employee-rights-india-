import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import PageHero from '../components/PageHero';
import { Clock, Plus, Trash2, Printer, Download, FileText, CheckCircle2 } from 'lucide-react';

const sampleEvents = [
    { id: 1, date: '2026-08-01', event: 'Submitted Resignation via Email', person: 'HR Manager (Rahul)', comms: 'Official Email Thread', proof: 'Email Sent Receipt & Acknowledgment', notes: 'Gave 30 days notice period with Last Working Day as 31 Aug 2026' },
    { id: 2, date: '2026-08-05', event: 'Manager Verbal Refusal', person: 'Reporting Manager (Suresh)', comms: 'Verbal in 1-on-1 meeting', proof: 'Sent follow-up confirmation email summarizing meeting', notes: 'Manager claimed notice period is 90 days contrary to appointment letter' }
];

export default function TimelineBuilderPage() {
    const [events, setEvents] = useState(sampleEvents);
    const [date, setDate] = useState('');
    const [event, setEvent] = useState('');
    const [person, setPerson] = useState('');
    const [comms, setComms] = useState('');
    const [proof, setProof] = useState('');
    const [notes, setNotes] = useState('');

    const handleAddEvent = (e) => {
        e.preventDefault();
        if (!date || !event) return;

        const newEntry = {
            id: Date.now(),
            date,
            event,
            person: person || 'HR / Management',
            comms: comms || 'Email / Written',
            proof: proof || 'Attached in dossier',
            notes: notes || '-'
        };

        // Keep sorted chronologically
        const updated = [...events, newEntry].sort((a, b) => new Date(a.date) - new Date(b.date));
        setEvents(updated);
        
        // Reset form
        setDate('');
        setEvent('');
        setPerson('');
        setComms('');
        setProof('');
        setNotes('');
    };

    const handleDelete = (id) => {
        setEvents(events.filter(ev => ev.id !== id));
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <SEOHead 
                path="/tools/case-timeline-builder"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "Case Timeline Builder — Employee Rights India",
                    "description": "Log and generate a chronological incident timeline with evidence links to present before the Labour Commissioner or conciliation officer."
                }}
            />

            <PageHero 
                title="Employment Case Timeline Builder"
                subtitle="Labour Commissioners and judges decide disputes based on chronological facts. Build an organized timeline of dates, emails, meetings, and evidence."
                icon={Clock}
                gradient="purple"
            />

            <div className="py-12 px-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-5xl mx-auto space-y-8">
                    <Breadcrumb items={[
                        { label: 'Tools', path: '/tools' },
                        { label: 'Timeline Builder', path: '/tools/case-timeline-builder' }
                    ]} />

                    {/* Timeline Input Card */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                            <Plus className="w-5 h-5 text-primary" /> Add Timeline Event / Incident
                        </h2>

                        <form onSubmit={handleAddEvent} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Date *</label>
                                <input 
                                    type="date" 
                                    required
                                    value={date} 
                                    onChange={e => setDate(e.target.value)} 
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Incident / Event Description *</label>
                                <input 
                                    type="text" 
                                    required
                                    placeholder="e.g. Received Termination Email" 
                                    value={event} 
                                    onChange={e => setEvent(e.target.value)} 
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Person Involved</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. HR Head (Priya)" 
                                    value={person} 
                                    onChange={e => setPerson(e.target.value)} 
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Communication Channel</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Official Email / Zoom Call" 
                                    value={comms} 
                                    onChange={e => setComms(e.target.value)} 
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Available Supporting Proof</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Email Screenshot / Audio" 
                                    value={proof} 
                                    onChange={e => setProof(e.target.value)} 
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Key Notes / Impact</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g. Denied relieving without cause" 
                                    value={notes} 
                                    onChange={e => setNotes(e.target.value)} 
                                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div className="sm:col-span-3">
                                <button 
                                    type="submit"
                                    className="w-full py-3 bg-primary text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 hover:bg-primary/90 shadow-soft"
                                >
                                    <Plus className="w-4 h-4" /> Add Event to Case Chronology
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Timeline Output Table */}
                    <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft space-y-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                    Chronological Statement of Facts ({events.length} Events)
                                </h3>
                                <p className="text-xs text-gray-500">Ready to attach as Annexure with Labour Petition or Legal Notice</p>
                            </div>
                            <button
                                onClick={handlePrint}
                                className="px-4 py-2 bg-primary text-white font-bold rounded-xl text-xs flex items-center gap-1.5 hover:bg-primary/90 shadow-soft"
                            >
                                <Printer className="w-3.5 h-3.5" /> Print / Save Chronology PDF
                            </button>
                        </div>

                        {events.length === 0 ? (
                            <p className="text-center py-8 text-gray-500 text-sm">No events logged yet. Add your first event above.</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
                                            <th className="p-3 font-bold">Date</th>
                                            <th className="p-3 font-bold">Event Description</th>
                                            <th className="p-3 font-bold">Person</th>
                                            <th className="p-3 font-bold">Communication</th>
                                            <th className="p-3 font-bold">Proof Available</th>
                                            <th className="p-3 font-bold">Notes</th>
                                            <th className="p-3 font-bold print:hidden">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-800 dark:text-gray-200">
                                        {events.map((ev) => (
                                            <tr key={ev.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50">
                                                <td className="p-3 font-semibold whitespace-nowrap">{ev.date}</td>
                                                <td className="p-3 font-bold text-gray-900 dark:text-gray-100">{ev.event}</td>
                                                <td className="p-3 text-gray-600 dark:text-gray-400">{ev.person}</td>
                                                <td className="p-3 text-gray-600 dark:text-gray-400">{ev.comms}</td>
                                                <td className="p-3 text-gray-600 dark:text-gray-400">{ev.proof}</td>
                                                <td className="p-3 text-gray-600 dark:text-gray-400">{ev.notes}</td>
                                                <td className="p-3 print:hidden">
                                                    <button 
                                                        onClick={() => handleDelete(ev.id)}
                                                        className="text-red-500 hover:text-red-700 p-1"
                                                    >
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
