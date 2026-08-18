import React from 'react';
import { useState, useMemo } from 'react';
import { FileText, Copy, Download, Check, Eye } from 'lucide-react';
import PDFExportButton from './PDFExportButton';

export default function TemplateCard({ template }) {
    const [copied, setCopied] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    // Extract unique placeholders like [Your Name] from content
    const placeholders = useMemo(() => {
        const matches = template.content.match(/\[(.*?)\]/g) || [];
        return Array.from(new Set(matches));
    }, [template.content]);

    // Track input values for each placeholder
    const [values, setValues] = useState(() => {
        const initial = {};
        placeholders.forEach(ph => {
            initial[ph] = '';
        });
        return initial;
    });

    const handleInputChange = (ph, val) => {
        setValues(prev => ({ ...prev, [ph]: val }));
    };

    // Compute customized content in real-time
    const customizedContent = useMemo(() => {
        let content = template.content;
        placeholders.forEach(ph => {
            // If the user hasn't filled the input, show the original placeholder
            const val = values[ph].trim() !== '' ? values[ph] : ph;
            content = content.replaceAll(ph, val);
        });
        return content;
    }, [template.content, placeholders, values]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(customizedContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textArea = document.createElement('textarea');
            textArea.value = customizedContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([customizedContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${template.slug}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const cleanLabel = (ph) => {
        return ph.replace('[', '').replace(']', '');
    };

    const categoryColors = {
        resignation: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
        complaint: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
        request: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
        legal: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
    };

    return (
        <>
            <div className="card card-hover p-6 flex flex-col h-full bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-soft">
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <FileText className="w-6 h-6 text-primary" />
                    </div>
                    {template.category && (
                        <span className={`badge ${categoryColors[template.category] || 'bg-gray-100 text-gray-700 dark:text-gray-300'} text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full`}>
                            {template.category}
                        </span>
                    )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{template.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">{template.description}</p>
                <div className="flex gap-2 mt-auto">
                    <button
                        onClick={() => setShowPreview(true)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 text-sm font-medium transition-colors"
                    >
                        <Eye className="w-4 h-4" /> Customize & Preview
                    </button>
                    <button
                        onClick={handleCopy}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 text-sm font-medium transition-colors"
                    >
                        {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Quick Copy</>}
                    </button>
                </div>
            </div>

            {/* Customizer & Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowPreview(false)}>
                    <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-primary" /> {template.title}
                                </h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Fill in details in the form to generate the letter in real-time.</p>
                            </div>
                            <button onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-600 dark:text-gray-400 text-2xl font-light">×</button>
                        </div>

                        {/* Modal Body - Split Layout */}
                        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
                            
                            {/* Left Side: Customization Form */}
                            <div className="p-6 overflow-y-auto max-h-[50vh] md:max-h-[65vh]">
                                <h4 className="font-bold text-sm text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">Letter Details</h4>
                                {placeholders.length === 0 ? (
                                    <p className="text-sm text-gray-500 dark:text-gray-400">No placeholders to customize in this template.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {placeholders.map(ph => (
                                            <div key={ph} className="flex flex-col gap-1.5">
                                                <label className="text-xs font-bold text-gray-600 dark:text-gray-400">
                                                    {cleanLabel(ph)}
                                                </label>
                                                <input
                                                    type="text"
                                                    value={values[ph]}
                                                    onChange={(e) => handleInputChange(ph, e.target.value)}
                                                    placeholder={`e.g. ${cleanLabel(ph)}`}
                                                    className="px-3.5 py-2 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Real-time Preview */}
                            <div className="p-6 bg-gray-50 dark:bg-gray-900/50 overflow-y-auto max-h-[50vh] md:max-h-[65vh]">
                                <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Live Preview</h4>
                                <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-150 dark:border-gray-800 shadow-inner font-sans leading-relaxed text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap select-all">
                                    {customizedContent}
                                </div>
                            </div>
                        </div>

                        {/* Footer Controls */}
                        <div className="flex gap-3 p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex-wrap">
                            <button onClick={handleCopy} className="bg-primary text-white hover:bg-primary/95 flex items-center gap-2 flex-1 justify-center py-3 rounded-xl font-bold transition-colors shadow-soft">
                                {copied ? <><Check className="w-5 h-5" /> Copied!</> : <><Copy className="w-5 h-5" /> Copy Custom Letter</>}
                            </button>
                            <PDFExportButton
                                documentTitle={template.title}
                                documentContent={customizedContent}
                                buttonText="Print / Export PDF"
                            />
                            <button onClick={handleDownload} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center gap-2 px-4 py-3 rounded-xl font-bold transition-colors">
                                <Download className="w-5 h-5" /> .txt
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
