import React, { useEffect, useState } from 'react';

export default function RawStaticViewer({ file, contentType }) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Unregister any stale Service Worker that might have intercepted this navigation
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    registration.unregister();
                }
            });
        }

        // Fetch fresh copy from origin bypassing browser cache
        fetch(file, { cache: 'no-store' })
            .then((res) => res.text())
            .then((text) => {
                setContent(text);
                setLoading(false);
            })
            .catch(() => {
                if (typeof window !== 'undefined') {
                    window.location.reload();
                }
            });
    }, [file]);

    if (loading) {
        return (
            <div style={{ padding: '2rem', fontFamily: 'monospace', fontSize: '14px' }}>
                Loading {file}...
            </div>
        );
    }

    return (
        <pre style={{
            margin: 0,
            padding: '1.5rem',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            fontSize: '13px',
            lineHeight: 1.5,
            backgroundColor: '#ffffff',
            color: '#111827',
            minHeight: '100vh'
        }}>
            {content}
        </pre>
    );
}
