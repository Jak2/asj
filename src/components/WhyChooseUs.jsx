import { ShieldCheck, CircleDollarSign, Smile } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                    <p className="text-lg text-gray-600">Your journey matters to us.</p>
                </div>

                <div className="space-y-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="p-4 bg-blue-100 rounded-xl text-brand">
                                <CircleDollarSign size={40} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Total Price Transparency</h3>
                            <p className="text-gray-600 mb-4">We believe in honest business. What you see is what you pay.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-brand rounded-full mr-2"></span>Zero Hidden Fees: No surprise charges.</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-brand rounded-full mr-2"></span>Fair Fuel Policy: Pay only for what you use.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="p-4 bg-blue-100 rounded-xl text-brand">
                                <ShieldCheck size={40} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Safety & Performance First</h3>
                            <p className="text-gray-600 mb-4">Regular inspections ensuring your absolute safety on the road.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-brand rounded-full mr-2"></span>Sanitization: Multi-point hygiene protocol.</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-brand rounded-full mr-2"></span>Mechanical Integrity: Regular 50-point inspections.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="p-4 bg-blue-100 rounded-xl text-brand">
                                <Smile size={40} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Stress-Free Experience</h3>
                            <p className="text-gray-600 mb-4">Adapt to changing plans with ease.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center"><span className="w-2 h-2 bg-brand rounded-full mr-2"></span>True Flexibility: Easy modifications.</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-brand rounded-full mr-2"></span>Instant Human Support: Real people, no bots.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
