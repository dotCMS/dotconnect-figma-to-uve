import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo.svg"
                            alt="DotCMS"
                            width={119}
                            height={22}
                            priority
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/product" className="text-black hover:text-primary">
                            Product
                        </Link>
                        <Link href="/solutions" className="text-primary hover:text-primary/90">
                            Solutions
                        </Link>
                        <Link href="/services" className="text-black hover:text-primary">
                            Services
                        </Link>
                        <Link href="/partners" className="text-black hover:text-primary">
                            Partners
                        </Link>
                        <Link href="/resources" className="text-black hover:text-primary">
                            Resources
                        </Link>
                        <Link href="/pricing" className="text-black hover:text-primary">
                            Pricing
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button href="/demo" variant="outline">
                            Request a demo
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
} 