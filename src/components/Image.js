import NextImage from 'next/image'

export default function Image({ identifier, alt, className = '', ...props }) {
    // If src is an identifier, format it as a DotCMS image URL
    const imageUrl = identifier?.startsWith('http') 
        ? identifier 
        : `http://localhost:8080/dA/${identifier}/image`

    return (
        <div className="relative w-full">
            <NextImage
                src={imageUrl}
                alt={alt || ''}
                width={0}
                height={0}
                sizes="100vw"
                className={`w-full h-auto ${className}`}
                {...props}
            />
        </div>
    )
} 