import React from 'react';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    handleReload = () => {
        // Clear caches and force reload
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => caches.delete(name));
            });
        }
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                    <div className="p-4 bg-red-100 dark:bg-red-950/50 rounded-2xl text-red-600 dark:text-red-400 mb-6">
                        <AlertOctagon className="w-12 h-12" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black mb-3">Something went wrong</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
                        A new update was recently deployed or a network interruption occurred. Please click below to reload the latest version of this page.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={this.handleReload}
                            className="btn-primary flex items-center gap-2 text-sm"
                        >
                            <RefreshCw className="w-4 h-4" /> Reload Page
                        </button>
                        <a
                            href="/"
                            className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 font-bold text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
                        >
                            <Home className="w-4 h-4" /> Go to Homepage
                        </a>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
