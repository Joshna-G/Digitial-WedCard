"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RSVP } from "@/components/sections/RSVP";

export default function RSVPPage() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <RSVP />
            <Footer />
        </main>
    );
}
