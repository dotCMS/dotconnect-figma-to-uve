import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-16 text-white bg-black">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="mb-16">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
                        {/* Logo and Description */}
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/logo.svg"
                                    alt="DotCMS"
                                    width={119}
                                    height={22}
                                    className="brightness-0 invert"
                                />
                            </Link>
                            <p className="text-gray-400">
                                dotCMS is the most agile, scalable and secure content management system for enterprise.
                            </p>
                        </div>

                        {/* Product Links */}
                        <div>
                            <h3 className="pb-2 mb-6 text-lg font-medium border-b border-primary">Product</h3>
                            <ul className="space-y-4">
                                <li><Link href="/dotcms-cloud" className="text-gray-400 hover:text-white">dotCMS Cloud</Link></li>
                                <li><Link href="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
                                <li><Link href="/request-demo" className="text-gray-400 hover:text-white">Request a Demo</Link></li>
                                <li><Link href="/feature-list" className="text-gray-400 hover:text-white">Feature List</Link></li>
                            </ul>
                        </div>

                        {/* Solutions Links */}
                        <div>
                            <h3 className="pb-2 mb-6 text-lg font-medium border-b border-primary">Solutions</h3>
                            <ul className="space-y-4">
                                <li><Link href="/content-management" className="text-gray-400 hover:text-white">Content Management</Link></li>
                                <li><Link href="/headless-apis" className="text-gray-400 hover:text-white">Headless/APIs</Link></li>
                                <li><Link href="/asset-management" className="text-gray-400 hover:text-white">Asset Management</Link></li>
                                <li><Link href="/agile-ecommerce" className="text-gray-400 hover:text-white">Agile E-Commerce</Link></li>
                                <li><Link href="/intranets-extranets" className="text-gray-400 hover:text-white">Intranets & Extranets</Link></li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <h3 className="pb-2 mb-6 text-lg font-medium border-b border-primary">Resources</h3>
                            <ul className="space-y-4">
                                <li><Link href="/documentation" className="text-gray-400 hover:text-white">Documentation</Link></li>
                                <li><Link href="/community" className="text-gray-400 hover:text-white">Community</Link></li>
                                <li><Link href="/videos" className="text-gray-400 hover:text-white">Videos</Link></li>
                                <li><Link href="/partners" className="text-gray-400 hover:text-white">Partners</Link></li>
                                <li><Link href="/trust-report" className="text-gray-400 hover:text-white">Trust Report</Link></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h3 className="pb-2 mb-6 text-lg font-medium border-b border-primary">Company</h3>
                            <ul className="space-y-4">
                                <li><Link href="/events" className="text-gray-400 hover:text-white">Events</Link></li>
                                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                                <li><Link href="/news-room" className="text-gray-400 hover:text-white">News Room</Link></li>
                                <li><Link href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-sm text-center text-gray-400">
                    Copyright © 2011-2023 dotCMS, LLC All rights reserved.
                </div>
            </div>
        </footer>
    )
} 