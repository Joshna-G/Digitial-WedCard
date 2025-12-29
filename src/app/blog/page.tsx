"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BlogSection } from "@/components/sections/BlogSection";

export default function BlogPage() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <BlogSection />
            <Footer />
        </main>
    );
}
