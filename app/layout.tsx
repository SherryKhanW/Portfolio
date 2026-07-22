import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sheharyar Khan | Software Engineer",
    description:
        "Portfolio of Sheharyar Khan, a Computer Science and Finance student at NYU Abu Dhabi.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}