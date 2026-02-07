import { MapPin, Navigation, Plane, Briefcase, Heart } from 'lucide-react';

const services = [
    {
        icon: <MapPin className="w-12 h-12 text-brand" />,
        title: "Local City Rides",
        desc: "Comfortable rides for shopping, visits, and city tours."
    },
    {
        icon: <Navigation className="w-12 h-12 text-brand" />,
        title: "Outstation Trips",
        desc: "Reliable cars for long-distance travel and weekend getaways."
    },
    {
        icon: <Plane className="w-12 h-12 text-brand" />,
        title: "Airport Pickup & Drop",
        desc: "Punctual transfers to ensure you never miss a flight."
    },
    {
        icon: <Briefcase className="w-12 h-12 text-brand" />,
        title: "Corporate Travel",
        desc: "Professional service for business meetings and events."
    },
    {
        icon: <Heart className="w-12 h-12 text-brand" />,
        title: "Wedding / Event Travel",
        desc: "Luxury fleet for your special occasions."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Backed by 30 years of experience ensuring every mile is comfortable and rewarding.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-blue-50/50 rounded-2xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-white rounded-full inline-block shadow-md group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
