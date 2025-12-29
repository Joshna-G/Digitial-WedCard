import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google"; 
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joe - Wedding Card Template",
  description: "Wedding Card Digital love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans bg-beige text-text-main selection:bg-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
