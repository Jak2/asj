import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA = () => {
    return (
        <div className="fixed bottom-0 w-full z-50 md:hidden bg-white border-t border-gray-200 shadow-lg flex">
            <a
                href="tel:9440144104"
                className="flex-1 bg-brand hover:bg-brand-dark text-white py-4 flex items-center justify-center gap-2 font-bold transition-colors"
            >
                <Phone size={20} />
                Call Now
            </a>
            <a
                href="https://wa.me/919440144104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 flex items-center justify-center gap-2 font-bold transition-colors"
            >
                <MessageCircle size={20} />
                WhatsApp
            </a>
        </div>
    );
};

export default FloatingCTA;
