import { Phone, MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Use a high-quality placeholder or the user's reference style */}
                <img
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
                    alt="Car Travel Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-white/5"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
                    <span className="block text-white">Reliable & Affordable</span>
                    <span className="block text-brand-light mt-2">Car Travels You Can Trust</span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 mb-10 font-light">
                    Local • Outstation • Airport • Corporate Travel
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="tel:9440144104"
                        className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <Phone className="w-6 h-6" />
                        Call Now
                    </a>

                    <a
                        // Assuming WhatsApp format, usually wa.me/919440144104 for India
                        href="https://wa.me/919440144104"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                        <MessageCircle className="w-6 h-6" />
                        WhatsApp
                    </a>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-300">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <span className="block font-bold text-white text-lg">24/7</span> Support
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <span className="block font-bold text-white text-lg">Best</span> Pricing
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <span className="block font-bold text-white text-lg">Clean</span> Cars
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <span className="block font-bold text-white text-lg">Safe</span> Travel
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
