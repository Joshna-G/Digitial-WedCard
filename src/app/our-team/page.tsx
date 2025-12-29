"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloralDivider } from "@/components/ui/FloralDivider";
import { EventInfo } from "@/components/sections/EventInfo";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
    {
        name: "Jospeh Vijay",
        role: "GROOMSMEN",
        image: "/images/sections/story-1.jpg"
    },
    {
        name: "Ajith Kumar",
        role: "GROOMSMEN",
        image: "/images/sections/story-2.jpg"
    },
    {
        name: "Karthick",
        role: "GROOMSMEN",
        image: "/images/sections/story-3.jpg"
    },
    {
        name: "Samantha Ruth",
        role: "BRIDESMAID",
        image: "/images/sections/story-4.jpg"
    },
    {
        name: "Sherya Ghoshal",
        role: "BRIDESMAID",
        image: "/images/sections/story-1.jpg"
    },
    {
        name: "Nayanthara",
        role: "BRIDESMAID",
        image: "/images/sections/story-2.jpg"
    }
];

export default function OurTeamPage() {
    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-6">Bride and Groom</h1>
                    <p className="uppercase tracking-[0.2em] text-sm font-bold text-gold">
                        OUR LOVELY FRIENDS
                    </p>
                </motion.div>
            </section>

            {/* Team Grid */}
            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Image with thin gold border */}
                                <div className="relative w-full aspect-[3/4] mb-8 border border-gold/30 p-2">
                                    <div className="relative w-full h-full overflow-hidden bg-gray-100">
                                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                                    </div>
                                </div>

                                <h3 className="font-serif text-3xl text-text-main mb-2">{member.name}</h3>
                                <p className="text-xs font-bold text-gold uppercase tracking-[0.2em]">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <EventInfo />

            {/* Bottom Image Section */}
            <section className="bg-[#F9F8F6] pb-24 flex justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-4xl px-6"
                >
                    <div className="relative aspect-video w-full bg-white p-4 shadow-xl border border-gray-100 transform rotate-2">
                        <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                            <Image
                                src="/images/sections/story-4.jpg"
                                alt="Couple"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
