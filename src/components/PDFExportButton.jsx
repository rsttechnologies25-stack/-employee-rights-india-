import React from 'react';
import { Printer, Download, Check } from 'lucide-react';
import { useState } from 'react';

/**
 * PDFExportButton
 * Renders a formal document export button.
 * Can print directly using window.print() or open a sanitized print window with letterhead formatting.
 */
export default function PDFExportButton({ 
    documentTitle = 'Formal Legal Document', 
    documentContent = '', 
    dateString = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
    buttonText = 'Print / Export PDF',
    variant = 'primary'
}) {
    const [isPrinting, setIsPrinting] = useState(false);

    const handlePrint = () => {
        setIsPrinting(true);

        // Open a clean print iframe or window with legal letterhead styling
        const printWindow = window.open('', '_blank', 'width=800,height=900');
        if (!printWindow) {
            window.print();
            setIsPrinting(false);
            return;
        }

        const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${documentTitle}</title>
    <style>
        @page {
            size: A4;
            margin: 20mm 20mm 20mm 20mm;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #111827;
            background: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 24px;
            font-size: 11pt;
        }
        .header {
            border-bottom: 2px solid #1e3a8a;
            padding-bottom: 12px;
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .header-title {
            font-size: 16pt;
            font-weight: 800;
            color: #1e3a8a;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .header-sub {
            font-size: 8pt;
            color: #6b7280;
            margin-top: 4px;
        }
        .header-date {
            font-size: 9pt;
            font-weight: 600;
            color: #374151;
        }
        .content {
            white-space: pre-wrap;
            font-size: 10.5pt;
            color: #1f2937;
            line-height: 1.7;
            text-align: justify;
        }
        .signature-block {
            margin-top: 48px;
            padding-top: 24px;
            page-break-inside: avoid;
        }
        .sig-line {
            width: 200px;
            border-top: 1px solid #9ca3af;
            margin-top: 40px;
            padding-top: 4px;
            font-size: 9pt;
            color: #4b5563;
        }
        .footer {
            margin-top: 40px;
            border-top: 1px solid #e5e7eb;
            padding-top: 8px;
            font-size: 7.5pt;
            color: #9ca3af;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <div>
            <h1 class="header-title">${documentTitle}</h1>
            <div class="header-sub">Generated via Employee Rights India (Legal Assistance Utility)</div>
        </div>
        <div class="header-date">Date: ${dateString}</div>
    </div>

    <div class="content">${documentContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

    <div class="signature-block">
        <p style="margin: 0; font-size: 10pt; font-weight: 600;">Sincerely / Complainant Signature:</p>
        <div class="sig-line">Signature & Date</div>
    </div>

    <div class="footer">
        Confidential Notice: This document was prepared for legal recourse under applicable Indian Labour Statutes.
    </div>

    <script>
        window.onload = function() {
            window.print();
            setTimeout(function() {
                window.close();
            }, 1000);
        };
    </script>
</body>
</html>
        `;

        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        setTimeout(() => {
            setIsPrinting(false);
        }, 1500);
    };

    return (
        <button
            type="button"
            onClick={handlePrint}
            disabled={isPrinting || !documentContent}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-soft cursor-pointer ${
                variant === 'primary'
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
            } ${!documentContent ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Open printable A4 view or save as PDF"
        >
            {isPrinting ? (
                <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Preparing PDF...</span>
                </>
            ) : (
                <>
                    <Printer className="w-4 h-4" />
                    <span>{buttonText}</span>
                </>
            )}
        </button>
    );
}
