import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
    title: "DotCMS",
    description: "Enterprise Headless CMS Platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="pt-[72px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
