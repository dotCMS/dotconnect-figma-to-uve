import { BlockEditorRenderer } from '@dotcms/react'
import Button from './Button'

export default function Banner({ headline, content, callToAction }) {
    return (
        <section className="py-20 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    {/* Headline */}
                    <div className="mb-6 [&_b]:text-primary [&_strong]:text-primary">
                        <BlockEditorRenderer 
                            blocks={headline}
                            className="leading-tight text-black"
                        />
                    </div>

                    {/* Content */}
                    <div className="mb-10">
                        <BlockEditorRenderer 
                            blocks={content}
                            className="text-xl text-gray-600"
                        />
                    </div>

                    {/* CTA Button */}
                    {callToAction?.length > 0 && (
                        <Button href={callToAction[0].url || '/'} variant="solid">
                            {callToAction[0].title}
                            <svg 
                                className="ml-2 w-5 h-5" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                        </Button>
                    )}
                </div>
            </div>
        </section>
    )
} 