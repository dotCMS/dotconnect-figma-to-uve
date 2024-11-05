"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CallToAction from './CallToAction';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Product', href: '/product' },
    { label: 'Solutions', href: '/solutions', highlight: true },
    { label: 'Services', href: '/services' },
    { label: 'Partners', href: '/partners' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className="relative flex items-center justify-between w-full max-w-[1440px] mx-auto px-6 py-4">
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.svg"
          alt="dotCMS Logo"
          width={119}
          height={22}
          priority
        />
      </Link>

      {/* Mobile Menu Button */}
      <button 
        className="p-2 lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path 
              d="M6 18L18 6M6 6L18 18" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          ) : (
            <path 
              d="M4 6H20M4 12H20M4 18H20" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:gap-8 lg:items-center">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 left-0 top-full p-4 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[16px] font-medium transition-colors duration-200 ${
                  item.highlight ? 'text-primary' : 'text-black hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4">
              <CallToAction 
                label="Request a demo" 
                href="/request-demo" 
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 