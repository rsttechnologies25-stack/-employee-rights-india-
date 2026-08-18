import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BOT_NAME, BOT_TAGLINE, QUICK_QUESTIONS, getBotResponse } from '../data/chatbotKB';

/* ── Parse simple markdown-style bold **text** in answers ── */
function parseBold(text) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900 dark:text-gray-100">{part}</strong> : part
    );
}

function BotMessage({ text, link, isTyping }) {
    if (isTyping) {
        return (
            <div className="flex items-end gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1 items-center h-5">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-end gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-md">
                <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="max-w-[85%]">
                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {text.split('\n').map((line, i) => (
                        <p key={i} className={line.startsWith('•') ? 'ml-1 my-0.5' : 'my-0.5'}>
                            {parseBold(line)}
                        </p>
                    ))}
                </div>
                {link && (
                    <Link
                        to={link.path}
                        className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1.5 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors"
                    >
                        <ExternalLink className="w-3 h-3" />
                        {link.label}
                    </Link>
                )}
            </div>
        </div>
    );
}

function UserMessage({ text }) {
    return (
        <div className="flex items-end gap-2 mb-4 justify-end">
            <div className="max-w-[80%] bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl rounded-br-none px-4 py-2.5 text-sm shadow-md">
                {text}
            </div>
            <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
        </div>
    );
}

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: `Hi! I'm **${BOT_NAME}** 👋\n\nI can answer your questions about Indian Labour Laws, Minimum Wages, PF, ESI, Salary Rights, Termination, and more.\n\nAsk me anything or pick a quick question below!`,
            link: null,
        }
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const [showQuick, setShowQuick] = useState(true);
    const [unread, setUnread] = useState(0);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (open) {
            setUnread(0);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [open]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    const sendMessage = (text) => {
        const userText = text.trim();
        if (!userText) return;

        setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: userText }]);
        setInput('');
        setShowQuick(false);
        setTyping(true);

        setTimeout(() => {
            const response = getBotResponse(userText);
            setTyping(false);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'bot',
                text: response.answer,
                link: response.link,
            }]);
            if (!open) setUnread(n => n + 1);
        }, 900 + Math.random() * 400);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(input);
    };

    return (
        <>
            {/* ── FLOATING BUTTON ── */}
            <button
                id="chatbot-toggle"
                onClick={() => setOpen(o => !o)}
                className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
                    open
                        ? 'bg-gray-700 dark:bg-gray-800 rotate-0 scale-100'
                        : 'bg-gradient-to-br from-indigo-600 to-blue-600 hover:scale-110 hover:shadow-indigo-500/40'
                }`}
                aria-label="Open chat assistant"
            >
                {open ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white" />
                )}
                {!open && unread > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {unread}
                    </span>
                )}
                {!open && (
                    <span className="absolute -top-1 -left-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                )}
            </button>

            {/* ── CHAT WINDOW ── */}
            <div className={`fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-h-[600px] flex flex-col rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 origin-bottom-right ${
                open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
            }`}>

                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-700 to-blue-700 px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-white text-sm">{BOT_NAME}</p>
                        <p className="text-indigo-200 text-[11px]">{BOT_TAGLINE}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-[11px] text-green-300 font-medium">Online</span>
                    </div>
                    <button onClick={() => setOpen(false)} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                        <ChevronDown className="w-5 h-5 text-white" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-gray-900/50 min-h-[300px] max-h-[420px]">
                    {messages.map(msg => (
                        msg.type === 'bot'
                            ? <BotMessage key={msg.id} text={msg.text} link={msg.link} />
                            : <UserMessage key={msg.id} text={msg.text} />
                    ))}
                    {typing && <BotMessage isTyping={true} />}

                    {/* Quick Questions */}
                    {showQuick && !typing && (
                        <div className="mt-2 mb-1">
                            <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium mb-2 uppercase tracking-wide">Quick Questions</p>
                            <div className="flex flex-wrap gap-1.5">
                                {QUICK_QUESTIONS.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => sendMessage(q)}
                                        className="text-xs bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 px-3 py-1.5 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors text-left"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <div ref={bottomRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-3 py-3 flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ask about your rights..."
                        className="flex-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        disabled={typing}
                    />
                    <button
                        type="submit"
                        disabled={typing || !input.trim()}
                        className="w-9 h-9 flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </form>

                {/* Disclaimer */}
                <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-1.5">
                    <p className="text-[10px] text-gray-400 dark:text-gray-600 text-center">
                        For general guidance only. Consult a labour lawyer for specific legal advice.
                    </p>
                </div>
            </div>
        </>
    );
}
