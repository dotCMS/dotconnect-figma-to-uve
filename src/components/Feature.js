import { BlockEditorRenderer } from '@dotcms/react'
import Image from 'next/image'

export default function Feature({ preheadline, headline, content, image }) {
    return (
        <section className="py-20 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="grid gap-12 items-center md:grid-cols-2">
                    {/* Content */}
                    <div>
                        {/* Pre-headline */}
                        <div className="mb-4">
                            <span className="text-lg font-medium uppercase text-green">
                                {preheadline}
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="mb-6 text-4xl font-bold leading-tight text-black">
                            {headline}
                        </h2>

                        {/* Content with bottom borders */}
                        <div className="space-y-4 text-gray-600">
                            <BlockEditorRenderer 
                                blocks={content}
                                className="[&_ul]:list-none [&_li]:pb-1 [&_li]:mb-3 [&_li]:border-b [&_li]:border-green-500 last:[&_li]:border-b-0 last:[&_li]:mb-0 last:[&_li]:pb-0 [&_p]:mb-4"
                            />
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[480px]">
                        <Image
                            src={`http://localhost:8080/dA/${image}/image`}
                            alt={headline}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
} 