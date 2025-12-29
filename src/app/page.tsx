"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Invitation } from "@/components/sections/Invitation";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { LoveStory } from "@/components/sections/LoveStory";
import { WeddingDetails } from "@/components/sections/WeddingDetails";
import { Gallery } from "@/components/sections/Gallery";
import { RSVP } from "@/components/sections/RSVP";
import { BlogSection } from "@/components/sections/BlogSection";
import { EventInfo } from "@/components/sections/EventInfo";
import { MapSection } from "@/components/sections/MapSection";

import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Invitation />
      <WeddingDetails />
      <QuoteSection />
      <LoveStory />
      <Gallery />
      <RSVP />
      <BlogSection />
      <EventInfo />
      <MapSection />
      <Footer />
    </main>
  );
}
