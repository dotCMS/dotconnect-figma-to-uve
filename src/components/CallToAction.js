import Link from 'next/link';

export default function CallToAction({ label, href, variant = 'primary' }) {
  const styles = {
    primary: 'border-black hover:bg-black hover:text-white',
    secondary: 'border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <Link
      href={href}
      className={`inline-block whitespace-nowrap px-6 py-2.5 rounded-[100px] border transition-colors duration-200 text-[16px] font-medium ${styles[variant]}`}
    >
      {label}
    </Link>
  );
} 