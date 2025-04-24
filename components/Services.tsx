const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building responsive and performant web applications using modern technologies.",
    },
    {
        id: 2,
        title: "SEO Optimization",
        description: "Improving website visibility and ranking on search engines.",
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces and experiences for web and mobile applications.",
    },
    {
        id: 4,
        title: "E-commerce Solutions",
        description: "Creating and managing online stores with secure payment gateways.",
    },
    
]


export const Services = () => {

    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
                    <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
                </div>
                <div className="md:w-3/4 ml-12 md:mt-20">
                    {services.map((service) => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-gray-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}