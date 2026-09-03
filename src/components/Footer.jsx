import React from 'react';
import { ExternalLink, Heart, Instagram, Facebook, ShieldCheck, FileText, Scale, Lock, Mail, Info, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-auto border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    
                    {/* Platform Purpose */}
                    <div className="space-y-3">
                        <h3 className="text-white font-bold text-base flex items-center gap-2">
                            <Scale className="w-5 h-5 text-primary" /> Educational Guidance Only
                        </h3>
                        <p className="text-xs leading-relaxed">
                            This platform provides general educational information and procedural guidance on Indian labour laws, PF, ESI, gratuity, and complaint mechanisms.
                        </p>
                        <p className="text-xs leading-relaxed text-amber-400 font-medium">
                            It does not constitute formal legal representation or create an advocate-client relationship.
                        </p>
                    </div>

                    {/* Trust & Governance Links */}
                    <div className="space-y-3">
                        <h3 className="text-white font-bold text-base flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-primary" /> Trust & Policies
                        </h3>
                        <div className="flex flex-col space-y-2 text-xs">
                            <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                                <Info className="w-3.5 h-3.5 text-blue-400" /> About RexonSoftTech
                            </Link>
                            <Link to="/editorial-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-blue-400" /> Editorial & Verification Policy
                            </Link>
                            <Link to="/disclaimer" className="hover:text-white transition-colors flex items-center gap-1.5">
                                <Scale className="w-3.5 h-3.5 text-blue-400" /> Legal Disclaimer
                            </Link>
                            <Link to="/privacy-policy" className="hover:text-white transition-colors flex items-center gap-1.5">
                                <Lock className="w-3.5 h-3.5 text-blue-400" /> Privacy Policy (DPDP Act)
                            </Link>
                            <Link to="/terms" className="hover:text-white transition-colors flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-blue-400" /> Terms of Use
                            </Link>
                            <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                                <Mail className="w-3.5 h-3.5 text-blue-400" /> Contact & Feedback Desk
                            </Link>
                        </div>
                    </div>

                    {/* Official Portals */}
                    <div className="space-y-3">
                        <h3 className="text-white font-bold text-base">Official Portals</h3>
                        <div className="flex flex-col space-y-1.5 text-xs">
                            <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                Ministry of Labour <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://samadhan.labour.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                SAMADHAN Portal (Disputes) <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://epfigms.gov.in/grievance/grievancemaster" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                EPFiGMS (PF Grievance) <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.esic.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                ESIC Medical Portal <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://pgportal.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                CPGRAMS Public Grievance <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://labour.tn.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 text-primary-light">
                                Tamil Nadu Labour Dept <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* Data Privacy & Social */}
                    <div className="space-y-3">
                        <h3 className="text-white font-bold text-base">Privacy-First Architecture</h3>
                        <p className="text-xs leading-relaxed text-gray-400">
                            Zero server PII collection. All letters, calculators, and dispute timelines operate client-side in your device's browser memory.
                        </p>

                        <h4 className="text-white font-semibold text-xs pt-1">Company Website & Social</h4>
                        <div className="flex flex-col space-y-2 text-xs">
                            <a href="https://rexonsofttech.in" target="_blank" rel="noopener noreferrer" className="text-primary-light font-bold hover:text-white flex items-center gap-1.5">
                                <Globe className="w-3.5 h-3.5" /> rexonsofttech.in <ExternalLink className="w-3 h-3" />
                            </a>
                            <div className="flex items-center gap-4 text-xs pt-1">
                                <a href="https://www.instagram.com/rexonsofttech/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                    <Instagram className="w-3.5 h-3.5 text-pink-400" /> Instagram
                                </a>
                                <a href="https://www.facebook.com/people/Rexonsofttech-Rexonsofttech/pfbid0ZVtdv6PMbpnEUAMtoZqVVhkUZD37YrqvjefAaGPT6idmYzzYZDRDdL4eTcDwGsMsl/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                    <Facebook className="w-3.5 h-3.5 text-blue-400" /> Facebook
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs gap-3">
                    <div className="flex items-center gap-1 text-gray-400">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Indian Employees
                    </div>
                    <div className="text-center text-gray-400">
                        A public knowledge initiative created by{' '}
                        <a href="https://rexonsofttech.in" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-primary transition-colors">
                            RexonSoftTech
                        </a>{' '}
                        (
                        <a href="https://rexonsofttech.in" target="_blank" rel="noopener noreferrer" className="text-primary-light font-semibold hover:underline">
                            rexonsofttech.in
                        </a>
                        )
                    </div>
                    <div className="text-gray-500">
                        © {new Date().getFullYear()} RexonSoftTech. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
