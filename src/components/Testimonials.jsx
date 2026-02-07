import { Star } from 'lucide-react';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Clients</h2>
                    <p className="text-lg text-blue-100">Trusted by 400+ happy customers</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                        <div className="flex text-yellow-400 mb-4">
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                        </div>
                        <p className="text-blue-50 italic mb-6">"Excellent service! The driver was very professional and the car was spotless. Highly recommended for outstation trips."</p>
                        <div className="font-bold">Google User</div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                        <div className="flex text-yellow-400 mb-4">
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                        </div>
                        <p className="text-blue-50 italic mb-6">"Very reliable and punctual. The booking process was simple and the pricing is transparent. Best in Ongole!"</p>
                        <div className="font-bold">Happy Customer</div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
                        <div className="flex text-yellow-400 mb-4">
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                            <Star fill="currentColor" size={20} />
                        </div>
                        <p className="text-blue-50 italic mb-6">"Safe and comfortable journey. The driver was polite and drove carefully. Will definitely book again."</p>
                        <div className="font-bold">Regular Traveler</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
