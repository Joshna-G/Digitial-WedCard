"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";

export default function HomePage() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Hero />
            <Footer />
        </main>
    );
}
