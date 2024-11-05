import Image from 'next/image';
import Link from 'next/link';

export default function LogoListing({ heading, logos }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="inline-block text-primary px-8 py-2 bg-primary/5 rounded-full text-base font-medium">
          {heading}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-12 items-center justify-items-center">
        {logos?.map((logo) => (
          <Link 
            key={logo.identifier} 
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={`http://localhost:8080/dA/${logo.identifier}/image`}
              alt={logo.title}
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
} 