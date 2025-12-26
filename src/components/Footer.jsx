import { ExternalLink, Heart, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 mt-auto">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Platform Purpose */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Educational Awareness Only</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            This platform is intended only for employees who want to learn about PF, ESI, salary rules, labour laws, and employee benefits.
                        </p>
                        <p className="text-sm leading-relaxed">
                            The content provided is for general awareness and educational purposes only and <strong className="text-yellow-500">does not constitute legal or professional advice</strong>.
                        </p>
                    </div>

                    {/* Official Resources */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Official Resources</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <a href="https://www.epfindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                EPFO Portal <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://epfigms.gov.in/grievance/grievancemaster" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                EPFO Grievance Portal <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://www.esic.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                ESIC Portal <ExternalLink className="w-3 h-3" />
                            </a>
                            <a href="https://labour.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                                Ministry of Labour <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* Data & Privacy */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Privacy & Third-Party Tools</h3>
                        <p className="text-sm leading-relaxed mb-3">
                            We do not collect, request, or store personal or sensitive user data.
                        </p>
                        <p className="text-xs text-gray-500 mb-3">This website uses:</p>
                        <ul className="text-xs text-gray-500 space-y-1 mb-4">
                            <li>• <strong>Google Analytics</strong> – to understand website usage</li>
                            <li>• <strong>Google AdSense</strong> – to display relevant advertisements</li>
                        </ul>

                        {/* Social Media */}
                        <h4 className="text-white font-semibold text-sm mb-2">Follow Us</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/rsttechnologies25/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 text-sm">
                                <Instagram className="w-4 h-4" /> Instagram
                            </a>
                            <a href="https://www.facebook.com/people/Rexonsofttech-Rexonsofttech/pfbid0ZVtdv6PMbpnEUAMtoZqVVhkUZD37YrqvjefAaGPT6idmYzzYZDRDdL4eTcDwGsMsl/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 text-sm">
                                <Facebook className="w-4 h-4" /> Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
                    <div className="flex items-center gap-1">
                        Built with <Heart className="w-3 h-3 text-red-500 fill-current" /> for Indian Employees
                    </div>
                    <div className="text-center">
                        <span className="text-white font-bold">RST Technologies / RexonSoftTech</span>
                    </div>
                    <div className="text-gray-500">
                        © {new Date().getFullYear()} RST Technologies. All Rights Reserved.
                    </div>
                </div>

                {/* Terms Notice */}
                <div className="text-center mt-6 text-[10px] text-gray-600">
                    By using this website, you agree to our Privacy Policy and Terms & Conditions.
                </div>
            </div>
        </footer>
    );
}
