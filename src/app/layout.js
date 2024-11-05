import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'DotCMS',
  description: 'Enterprise Headless CMS Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
