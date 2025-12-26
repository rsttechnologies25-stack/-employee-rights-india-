import { Link } from 'react-router-dom';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <ShieldCheck className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900 leading-tight">Employee Rights</span>
                                <span className="text-[10px] text-accent font-semibold tracking-wider uppercase leading-none">RST Technologies</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/rights" className="text-accent hover:text-accent-dark font-bold transition-colors">All Rights</Link>
                        <Link to="/pf-esi" className="text-gray-600 hover:text-primary font-medium transition-colors">PF & ESI</Link>
                        <Link to="/contracts" className="text-gray-600 hover:text-primary font-medium transition-colors">Contracts & Bonds</Link>
                        <Link to="/notice-period" className="text-gray-600 hover:text-primary font-medium transition-colors">Notice Period</Link>
                        <Link to="/working-hours" className="text-gray-600 hover:text-primary font-medium transition-colors">Working Hours</Link>
                        <Link to="/leave-holidays" className="text-gray-600 hover:text-primary font-medium transition-colors">Leave & Holidays</Link>
                        <Link to="/illegal-practices" className="text-gray-600 hover:text-primary font-medium transition-colors">Illegal Practices</Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-3 shadow-lg">
                    <Link to="/rights" onClick={() => setIsOpen(false)} className="block text-accent hover:text-accent-dark font-bold">All Rights</Link>
                    <Link to="/pf-esi" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">PF & ESI</Link>
                    <Link to="/contracts" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Contracts & Bonds</Link>
                    <Link to="/notice-period" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Notice Period</Link>
                    <Link to="/working-hours" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Working Hours</Link>
                    <Link to="/leave-holidays" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Leave & Holidays</Link>
                    <Link to="/illegal-practices" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-primary font-medium">Illegal Practices</Link>
                </div>
            )}
        </nav>
    );
}
