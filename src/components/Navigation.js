import Link from 'next/link';
import Image from 'next/image';
import CallToAction from './CallToAction';

export default function Navigation() {
  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'Solutions', href: '/solutions', highlight: true },
    { label: 'Services', href: '/services' },
    { label: 'Partners', href: '/partners' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-4">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="dotCMS Logo"
          width={119}
          height={22}
          priority
        />
      </Link>

      <div className="flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-[16px] font-medium transition-colors duration-200 ${
              item.highlight ? 'text-primary' : 'text-black hover:text-primary'
            }`}
          >
            {item.label}
          </Link>
        ))}
        
        <div className="ml-4">
          <CallToAction 
            label="Request a demo" 
            href="/request-demo" 
          />
        </div>
      </div>
    </nav>
  );
} 