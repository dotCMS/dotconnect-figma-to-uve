import Image from 'next/image'
import Link from 'next/link'

export default function LogoListing({ heading, logos }) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Heading */}
                <h2 className="text-center text-primary text-xl mb-12">
                    {heading}
                </h2>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
                    {logos?.map((customer) => (
                        <Link 
                            key={customer.identifier}
                            href={customer.url}
                            className="grayscale hover:grayscale-0 transition-all duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={`http://localhost:8080/dA/${customer.identifier}/image`}
                                alt={customer.title}
                                width={140}
                                height={50}
                                className="w-auto h-8 object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
} 