import { useState } from 'react';
import { FileText, Copy, Download, Check, Eye } from 'lucide-react';

export default function TemplateCard({ template }) {
    const [copied, setCopied] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(template.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textArea = document.createElement('textarea');
            textArea.value = template.content;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleDownload = () => {
        const blob = new Blob([template.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${template.slug}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const categoryColors = {
        resignation: 'bg-blue-100 text-blue-700',
        complaint: 'bg-red-100 text-red-700',
        request: 'bg-green-100 text-green-700',
        legal: 'bg-purple-100 text-purple-700',
    };

    return (
        <>
            <div className="card card-hover p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                        <FileText className="w-6 h-6 text-primary" />
                    </div>
                    {template.category && (
                        <span className={`badge ${categoryColors[template.category] || 'bg-gray-100 text-gray-700'} text-[10px] uppercase tracking-wider`}>
                            {template.category}
                        </span>
                    )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{template.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{template.description}</p>
                <div className="flex gap-2 mt-auto">
                    <button
                        onClick={() => setShowPreview(true)}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium transition-colors"
                    >
                        <Eye className="w-4 h-4" /> Preview
                    </button>
                    <button
                        onClick={handleCopy}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-primary text-white hover:bg-primary-dark text-sm font-medium transition-colors"
                    >
                        {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy</>}
                    </button>
                    <button
                        onClick={handleDownload}
                        className="flex items-center justify-center p-2.5 rounded-lg bg-accent text-white hover:bg-accent-dark transition-colors"
                        title="Download as .txt"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Preview Modal */}
            {showPreview && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowPreview(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900">{template.title}</h3>
                            <button onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-600 text-2xl font-light">×</button>
                        </div>
                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">{template.content}</pre>
                        </div>
                        <div className="flex gap-3 p-6 border-t border-gray-100 bg-gray-50">
                            <button onClick={handleCopy} className="btn-primary flex items-center gap-2 flex-1 justify-center">
                                {copied ? <><Check className="w-4 h-4" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy to Clipboard</>}
                            </button>
                            <button onClick={handleDownload} className="btn-accent flex items-center gap-2 flex-1 justify-center">
                                <Download className="w-4 h-4" /> Download .txt
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
