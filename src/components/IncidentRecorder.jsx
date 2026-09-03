import React, { useState, useEffect } from 'react';
import { FileText, Save, Trash2, Download, Printer, ShieldCheck, Lock, AlertTriangle, Plus, CheckCircle2, Clock } from 'lucide-react';

const STORAGE_KEY = 'rst_micromanagement_incidents_v1';

export default function IncidentRecorder() {
    const [incidents, setIncidents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        time: '10:00',
        workMode: 'In-Office',
        managerName: '',
        department: '',
        description: '',
        exactWords: '',
        witnesses: '',
        docNotes: '',
        effectOnEmployee: '',
        previousIncidents: '',
        reportedStatus: 'No',
        responseReceived: ''
    });

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                setIncidents(JSON.parse(saved));
            }
        } catch (e) {
            console.error('Failed to load incidents', e);
        }
    }, []);

    const saveToLocalStorage = (data) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save incident', e);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.description.trim()) return;

        const newIncident = {
            id: Date.now(),
            createdAt: new Date().toLocaleString(),
            ...formData
        };

        const updated = [newIncident, ...incidents];
        setIncidents(updated);
        saveToLocalStorage(updated);
        setShowForm(false);
        setFormData({
            date: new Date().toISOString().split('T')[0],
            time: '10:00',
            workMode: 'In-Office',
            managerName: '',
            department: '',
            description: '',
            exactWords: '',
            witnesses: '',
            docNotes: '',
            effectOnEmployee: '',
            previousIncidents: '',
            reportedStatus: 'No',
            responseReceived: ''
        });
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this incident record?')) {
            const updated = incidents.filter(item => item.id !== id);
            setIncidents(updated);
            saveToLocalStorage(updated);
        }
    };

    const exportJSON = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(incidents, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `Incident_Log_RexonSoftTech_${new Date().toISOString().split('T')[0]}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-white dark:bg-gray-950 p-6 sm:p-8 rounded-3xl border border-gray-150 dark:border-gray-800 shadow-soft space-y-6 print-clean">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 dark:border-gray-850 pb-4">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary">Requirement 4 & 9 — Legal Evidence</span>
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" /> Incident Record & Evidence Preservation
                    </h3>
                </div>

                <div className="flex items-center gap-2 no-print">
                    {incidents.length > 0 && (
                        <>
                            <button
                                onClick={exportJSON}
                                className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 flex items-center gap-1.5"
                            >
                                <Download className="w-3.5 h-3.5 text-primary" /> Export JSON
                            </button>
                            <button
                                onClick={handlePrint}
                                className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-100 flex items-center gap-1.5"
                            >
                                <Printer className="w-3.5 h-3.5 text-emerald-600" /> Print Log
                            </button>
                        </>
                    )}
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-soft flex items-center gap-1.5 hover:bg-primary-dark"
                    >
                        <Plus className="w-4 h-4" /> {showForm ? 'Cancel' : 'Log New Incident'}
                    </button>
                </div>
            </div>

            {/* Privacy Guarantee Banner */}
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
                <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                    <p className="font-bold">100% Client-Side Private Storage (DPDP Act Compliant):</p>
                    <p className="text-[11px] text-emerald-800 dark:text-emerald-300 leading-relaxed">
                        All logged incidents are saved exclusively inside your local browser memory (`localStorage`). Zero personal data is sent to external servers.
                    </p>
                </div>
            </div>

            {/* Emergency Safety Alert */}
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-200 dark:border-rose-900/40 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                    <strong>Urgent Safety Notice:</strong> If you are experiencing immediate threats to your physical safety, acute severe psychological distress, or active physical harassment, please seek immediate help from trusted family, legal aid, or emergency hotlines (112 / Women Helpline 1091).
                </p>
            </div>

            {/* Form Modal / Accordion */}
            {showForm && (
                <form onSubmit={handleSubmit} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4 animate-in fade-in duration-300">
                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white border-b pb-2">Record Workplace Incident Details</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Date:</label>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Time:</label>
                            <input
                                type="time"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Work Mode / Location:</label>
                            <select
                                value={formData.workMode}
                                onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            >
                                <option value="In-Office">In-Office</option>
                                <option value="Work-From-Home">Work-From-Home (WFH)</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Client Site">Client Site / Travel</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Manager / Supervisor Name (Optional):</label>
                            <input
                                type="text"
                                placeholder="e.g. John Doe / Team Lead"
                                value={formData.managerName}
                                onChange={(e) => setFormData({ ...formData, managerName: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Department / Project:</label>
                            <input
                                type="text"
                                placeholder="e.g. Frontend Engineering / Sales"
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">What Happened (Factual Description):</label>
                        <textarea
                            rows={3}
                            placeholder="Describe objective facts: e.g. Manager demanded approval for minor CSS change and requested Slack ping every 15 mins."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Exact Words Used (where relevant):</label>
                            <input
                                type="text"
                                placeholder='e.g. "If you do not reply in 5 mins I will mark you absent"'
                                value={formData.exactWords}
                                onChange={(e) => setFormData({ ...formData, exactWords: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Witnesses (Colleagues/Peers):</label>
                            <input
                                type="text"
                                placeholder="e.g. Teammates present in meeting or CCed"
                                value={formData.witnesses}
                                onChange={(e) => setFormData({ ...formData, witnesses: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Emails / Documents / Screenshots Notes:</label>
                            <input
                                type="text"
                                placeholder="e.g. Saved screenshot as Sunday_Call_Invite.png"
                                value={formData.docNotes}
                                onChange={(e) => setFormData({ ...formData, docNotes: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Personal Impact on Employee:</label>
                            <input
                                type="text"
                                placeholder="e.g. 2 hours daily lost, sleep disruption, stress"
                                value={formData.effectOnEmployee}
                                onChange={(e) => setFormData({ ...formData, effectOnEmployee: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Reported Internally?</label>
                            <select
                                value={formData.reportedStatus}
                                onChange={(e) => setFormData({ ...formData, reportedStatus: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            >
                                <option value="No">No</option>
                                <option value="Yes - HR">Yes - Escalated to HR</option>
                                <option value="Yes - Senior Management">Yes - Escalated to Senior Management</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Response Received (if reported):</label>
                            <input
                                type="text"
                                placeholder="e.g. HR acknowledged, or No response received"
                                value={formData.responseReceived}
                                onChange={(e) => setFormData({ ...formData, responseReceived: e.target.value })}
                                className="w-full p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white text-xs outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-soft flex items-center gap-1.5 hover:bg-primary-dark"
                        >
                            <Save className="w-4 h-4" /> Save Incident Entry
                        </button>
                    </div>
                </form>
            )}

            {/* Saved Incidents List */}
            {incidents.length > 0 ? (
                <div className="space-y-4">
                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" /> Recorded Incident Log ({incidents.length})
                    </h4>

                    <div className="space-y-3">
                        {incidents.map((item) => (
                            <div key={item.id} className="p-5 bg-gray-50/70 dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200/60 dark:border-gray-800 pb-2">
                                    <div className="flex items-center gap-3 text-xs font-bold text-gray-900 dark:text-white">
                                        <span>📅 {item.date} at {item.time}</span>
                                        <span className="badge bg-primary/10 text-primary">{item.workMode}</span>
                                        {item.department && <span className="text-gray-500">Dept: {item.department}</span>}
                                    </div>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-xs text-rose-500 hover:text-rose-700 font-semibold flex items-center gap-1 no-print"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" /> Remove
                                    </button>
                                </div>

                                <div className="space-y-1.5 text-xs text-gray-800 dark:text-gray-200">
                                    <p><strong>Factual Description:</strong> {item.description}</p>
                                    {item.exactWords && <p className="text-amber-800 dark:text-amber-300"><strong>Exact Words Used:</strong> "{item.exactWords}"</p>}
                                    {item.managerName && <p><strong>Supervisor:</strong> {item.managerName}</p>}
                                    {item.witnesses && <p><strong>Witnesses:</strong> {item.witnesses}</p>}
                                    {item.docNotes && <p className="text-blue-700 dark:text-blue-400"><strong>Evidence/Doc Notes:</strong> {item.docNotes}</p>}
                                    {item.effectOnEmployee && <p><strong>Impact:</strong> {item.effectOnEmployee}</p>}
                                    <p><strong>Reported Status:</strong> {item.reportedStatus} {item.responseReceived ? `(${item.responseReceived})` : ''}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="p-8 text-center bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 space-y-2">
                    <FileText className="w-8 h-8 text-gray-300 mx-auto" />
                    <p className="text-xs font-bold text-gray-600 dark:text-gray-400">No workplace incidents logged yet.</p>
                    <p className="text-[11px] text-gray-400">Click "Log New Incident" above to start preserving an evidence log.</p>
                </div>
            )}
        </div>
    );
}
