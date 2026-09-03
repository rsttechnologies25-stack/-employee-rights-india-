import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'

// SPA redirect handler for static hosts (GitHub Pages / Netlify / Hostinger)
const spaRedirect = sessionStorage.getItem('spa_redirect');
if (spaRedirect) {
    sessionStorage.removeItem('spa_redirect');
    window.history.replaceState(null, null, spaRedirect);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </ErrorBoundary>
    </React.StrictMode>,
)
