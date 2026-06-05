import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Barlow_Condensed } from "next/font/google";

const bebasNeue = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-bebas",
});

const barlowCondensed = Barlow_Condensed({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-barlow",
});

export const metadata: Metadata = {
    title: "Kuan Wei | Portfolio",
    description: "Software Engineer | Full Stack Developer | AI Enthusiast",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={`
                ${bebasNeue.variable} 
                ${barlowCondensed.variable} 
                font-barlow 
                bg-background 
                text-primary 
                antialiased`}>{children}</body>
        </html>
    );
}
