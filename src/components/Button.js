import Link from 'next/link'

export default function Button({ 
    href, 
    children, 
    variant = 'outline', // outline or solid
    className = ''
}) {
    const baseStyles = "inline-flex items-center px-6 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
    const variants = {
        outline: "border-2 border-black text-black hover:bg-black hover:text-white",
        solid: "bg-primary text-white hover:bg-primary/90"
    }

    return (
        <Link 
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    )
} 