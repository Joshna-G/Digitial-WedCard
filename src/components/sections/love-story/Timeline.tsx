"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const timelineEvents = [
    {
        year: "2019",
        title: "First meeting",
        description: "Regina, a passionate photographer, found herself drawn to the cozy ambiance of a local coffee shop. She met Amorino, a charismatic writer, and struck up a conversation with him.",
        image: "/images/sections/story-3.jpg", // Reusing existing image
    },
    {
        year: "2020",
        title: "Shared passions",
        description: "Amorino and Regina discovered they both had a deep love for adventure and exploring the world around them.",
        image: "/images/sections/story-4.jpg", // Reusing existing image
    },
    {
        year: "2024",
        title: "Proposal",
        description: "On a radiant summer's day, surrounded by loved ones, Amorino and Regina exchanged vows of eternal love and devotion. They pledged to journey through life hand in hand, their hearts forever entwined in a love story written in the stars.",
        image: "/images/sections/story-1.jpg", // Reusing existing image
    }
];

export function Timeline() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl relative">

                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 -translate-x-1/2 hidden md:block" />

                <div className="space-y-24">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={cn(
                                "flex flex-col md:flex-row items-center gap-12 relative",
                                index % 2 === 1 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Text Side */}
                            <div className={cn(
                                "flex-1 text-center md:text-right",
                                index % 2 === 1 ? "md:text-left" : ""
                            )}>
                                <span className="block font-serif text-6xl text-gold/20 font-bold mb-4">{event.year}</span>
                                <h3 className="font-serif text-3xl text-text-main mb-4">{event.title}</h3>
                                <p className="text-text-main/80 leading-relaxed">
                                    {event.description}
                                </p>
                            </div>

                            {/* Center Dot (Desktop) */}
                            <div className="w-4 h-4 rounded-full bg-gold border-4 border-white shadow-md relative z-10 hidden md:block shrink-0" />

                            {/* Image Side */}
                            <div className="flex-1 w-full">
                                <div className={cn(
                                    "relative aspect-[4/3] w-full max-w-md mx-auto bg-gray-100 p-2 shadow-lg rotate-2",
                                    index % 2 === 1 ? "-rotate-2" : ""
                                )}>
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
