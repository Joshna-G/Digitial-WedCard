"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/love-story/Hero";
import { StoryItem } from "@/components/sections/love-story/StoryItem";
import { RSVP } from "@/components/sections/RSVP";

const storyEvents = [
    {
        year: "2019",
        title: "First meeting",
        description: "Regina, a passionate photographer, found herself drawn to the cozy ambiance of a local coffee shop. She met Amorino, a charismatic writer, and struck up a conversation with him.",
        images: ["/images/sections/story-1.jpg", "/images/sections/story-2.jpg"]
    },
    {
        year: "2020",
        title: "Shared passions",
        description: "Amorino and Regina discovered they both had a deep love for adventure and exploring the world around them.",
        images: ["/images/sections/story-3.jpg", "/images/sections/story-4.jpg"]
    },
    {
        year: "2024",
        title: "Proposal",
        description: "On a radiant summer's day, surrounded by loved ones, Amorino and Regina exchanged vows of eternal love and devotion. They pledged to journey through life hand in hand, their hearts forever entwined in a love story written in the stars.",
        images: ["/images/sections/story-1.jpg", "/images/sections/story-2.jpg"]
    }
];

export default function LoveStoryPage() {
    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />
            <Hero />

            <section className="py-24 space-y-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    {storyEvents.map((event, index) => (
                        <StoryItem
                            key={index}
                            year={event.year}
                            title={event.title}
                            description={event.description}
                            images={event.images}
                            index={index}
                        />
                    ))}
                </div>
            </section>



            <div id="rsvp">
                <RSVP />
            </div>

            <Footer />
        </main>
    );
}
