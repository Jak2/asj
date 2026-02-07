import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const ContactFooter = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Area */}
                    <div>
                        <span className="text-2xl font-bold text-white tracking-tight block mb-4">
                            Car<span className="text-brand-light">Travels</span>
                        </span>
                        <p className="text-gray-400 mb-6">
                            Reliable, safe, and comfortable car rentals for all your travel needs in Ongole and across Andhra Pradesh.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-400 hover:text-brand-light transition-colors">Home</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-brand-light transition-colors">Services</a></li>
                            <li><a href="#fleet" className="text-gray-400 hover:text-brand-light transition-colors">Our Fleet</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-brand-light transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 mt-1 text-brand-light" />
                                <span>Ongole, Andhra Pradesh<br />Serving all nearby districts</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-brand-light" />
                                <a href="tel:9440144104" className="hover:text-white">944-014-4104</a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-brand-light" />
                                <a href="tel:8463915090" className="hover:text-white">846-391-5090</a>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Mobile/Desktop */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Book Your Ride</h3>
                        <p className="text-gray-400 mb-6">Available 24/7 for emergency and planned trips.</p>
                        <a
                            href="tel:9440144104"
                            className="inline-block bg-brand hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition-colors w-full text-center"
                        >
                            Call Now
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Car Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
