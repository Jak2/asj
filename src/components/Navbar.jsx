import { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary tracking-tight">
                                Car<span className="text-brand">Travels</span>
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-brand font-medium transition-colors">Home</a>
                        <a href="#services" className="text-gray-700 hover:text-brand font-medium transition-colors">Services</a>
                        <a href="#fleet" className="text-gray-700 hover:text-brand font-medium transition-colors">Fleet</a>
                        <a href="#why-us" className="text-gray-700 hover:text-brand font-medium transition-colors">Why Us</a>
                        <a href="#contact" className="text-gray-700 hover:text-brand font-medium transition-colors">Contact</a>
                    </div>

                    {/* Desktop Call/Action */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex flex-col items-end text-sm">
                            <a href="tel:9440144104" className="font-bold text-gray-900 hover:text-brand flex items-center gap-1">
                                <Phone size={14} className="text-brand" /> 944-014-4104
                            </a>
                            <a href="tel:8463915090" className="text-gray-600 hover:text-brand text-xs">
                                846-391-5090
                            </a>
                        </div>
                        <a
                            href="tel:9440144104"
                            className="bg-brand hover:bg-brand-dark text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                        >
                            <Calendar size={18} />
                            Book Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <a href="tel:9440144104" className="mr-4 text-brand p-2 rounded-full bg-blue-50">
                            <Phone size={20} />
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-brand focus:outline-none p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a
                            href="#home"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-blue-50 rounded-md"
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-blue-50 rounded-md"
                        >
                            Services
                        </a>
                        <a
                            href="#fleet"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-blue-50 rounded-md"
                        >
                            Fleet
                        </a>
                        <a
                            href="#why-us"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-blue-50 rounded-md"
                        >
                            Why Us
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-blue-50 rounded-md"
                        >
                            Contact
                        </a>
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <p className="text-sm text-gray-500 mb-2 px-3">Call us anytime:</p>
                            <a href="tel:9440144104" className="block px-3 py-2 text-lg font-bold text-brand">944-014-4104</a>
                            <a href="tel:8463915090" className="block px-3 py-2 text-lg font-bold text-brand">846-391-5090</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
