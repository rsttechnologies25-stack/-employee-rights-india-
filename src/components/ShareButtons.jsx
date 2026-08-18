import React, { useState } from 'react';
import { Share2, MessageCircle, Send, Linkedin, Link2, Check } from 'lucide-react';

/**
 * ShareButtons
 * Displays quick sharing options to WhatsApp, Telegram, LinkedIn, and Clipboard.
 */
export default function ShareButtons({
    title = 'Indian Employee Rights Guide',
    text = 'Check out this comprehensive guide on Indian Labour Laws & Employee Rights:',
    url = window.location.href,
    className = ''
}) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(`${text} ${title}\n\n`);

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url: shareUrl,
                });
            } catch (err) {
                // User dismissed share dialog
            }
        } else {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <div className="flex items-center gap-2">
                {/* Native / Main Share Toggle */}
                <button
                    onClick={handleNativeShare}
                    type="button"
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-1.5 shadow-soft"
                    title="Share this guide with a coworker"
                >
                    <Share2 className="w-3.5 h-3.5 text-primary" />
                    <span>Share Guide</span>
                </button>

                {/* Inline Quick WhatsApp button */}
                <a
                    href={`https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-all shadow-soft flex items-center justify-center"
                    title="Share via WhatsApp"
                >
                    <MessageCircle className="w-4 h-4" />
                </a>

                {/* Inline Quick Telegram button */}
                <a
                    href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white transition-all shadow-soft flex items-center justify-center"
                    title="Share via Telegram"
                >
                    <Send className="w-4 h-4" />
                </a>

                {/* Inline Copy Link Button */}
                <button
                    onClick={handleCopy}
                    type="button"
                    className="p-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center shadow-soft"
                    title="Copy Link to Clipboard"
                >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4" />}
                </button>
            </div>

            {/* Optional Fallback Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-950/30 rounded-xl transition-colors"
                    >
                        <MessageCircle className="w-4 h-4 text-green-500" /> WhatsApp
                    </a>
                    <a
                        href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-sky-950/30 rounded-xl transition-colors"
                    >
                        <Send className="w-4 h-4 text-sky-500" /> Telegram
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-colors"
                    >
                        <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
                    </a>
                    <button
                        onClick={handleCopy}
                        type="button"
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4 text-gray-500" />}
                        {copied ? 'Link Copied!' : 'Copy Link'}
                    </button>
                </div>
            )}
        </div>
    );
}
