import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: 'dotCMS Cloud', href: '/product/cloud' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Request a Demo', href: '/request-demo' },
      { label: 'Feature List', href: '/features' },
    ],
    Solutions: [
      { label: 'Content Management', href: '/solutions/content-management' },
      { label: 'Headless/APIs', href: '/solutions/headless-apis' },
      { label: 'Asset Management', href: '/solutions/asset-management' },
      { label: 'Agile E-Commerce', href: '/solutions/ecommerce' },
      { label: 'Intranets & Extranets', href: '/solutions/intranets-extranets' },
    ],
    Resources: [
      { label: 'Documentation', href: '/resources/documentation' },
      { label: 'Community', href: '/resources/community' },
      { label: 'Videos', href: '/resources/videos' },
      { label: 'Partners', href: '/resources/partners' },
      { label: 'Trust Report', href: '/resources/trust-report' },
    ],
    Company: [
      { label: 'Events', href: '/company/events' },
      { label: 'Careers', href: '/company/careers' },
      { label: 'News Room', href: '/company/news' },
      { label: 'Contact Us', href: '/company/contact' },
    ],
  };

  return (
    <footer className="py-24 text-white bg-black">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_repeat(4,1fr)] gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.svg"
                alt="dotCMS Logo"
                width={119}
                height={22}
                className="brightness-0 invert"
              />
            </Link>
            <p className="max-w-sm text-base text-white/60">
              dotCMS is the most agile, scalable and secure content management system for enterprise.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="pb-4 mb-6 text-lg font-medium border-b border-primary">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="transition-colors duration-200 text-white/60 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-24 border-t border-white/10">
          <p className="text-sm text-white/40">
            Copyright © 2011-2023 dotCMS, LLC All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 