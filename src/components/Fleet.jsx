import { Users, Wind } from 'lucide-react';

const fleet = [
    {
        name: "Sedan (Dzire / Etios)",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop", // Placeholder: White Compact Sedan
        capacity: "4 + 1",
        features: "AC, Spacious Boot, Comfortable"
    },
    {
        name: "SUV (Innova / Ertiga)",
        image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=2070&auto=format&fit=crop", // Placeholder: SUV 
        capacity: "6/7 + 1",
        features: "AC, Extra Legroom, Carrier"
    },
    // Added a third option for balance if needed, or stick to 2 as requested. Kept 2 main categories.
];

const Fleet = () => {
    return (
        <section id="fleet" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fleet</h2>
                    <p className="text-lg text-gray-600">Clean, well-maintained vehicles for your journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    {fleet.map((car, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-primary mb-4">{car.name}</h3>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center text-gray-600">
                                        <Users className="w-5 h-5 mr-3 text-brand" />
                                        <span>Seating: <span className="font-semibold text-gray-900">{car.capacity}</span></span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Wind className="w-5 h-5 mr-3 text-brand" />
                                        <span>{car.features}</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <a
                                        href="tel:9440144104"
                                        className="block w-full text-center bg-brand hover:bg-brand-dark text-white font-semibold py-3 rounded-lg transition-colors"
                                    >
                                        Book This Car
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
