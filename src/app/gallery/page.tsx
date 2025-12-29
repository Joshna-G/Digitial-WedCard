"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Gallery } from "@/components/sections/Gallery";

export default function GalleryPage() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <Gallery />
            <Footer />
        </main>
    );
}
