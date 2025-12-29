"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloralDivider } from "@/components/ui/FloralDivider";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
    {
        title: "Ceremony",
        description: "Creating meaningful and personalized moments for your love-filled exchange.",
        image: "/images/sections/story-1.jpg",
        rotation: "-rotate-2"
    },
    {
        title: "Wedding",
        description: "Transforming dreams into reality for your perfect day.",
        image: "/images/sections/story-2.jpg",
        rotation: "rotate-2"
    },
    {
        title: "Party",
        description: "Crafting unforgettable celebrations tailored to your unique love story.",
        image: "/images/sections/story-3.jpg",
        rotation: "-rotate-1"
    }
];

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-6">Services</h1>
                    <p className="uppercase tracking-[0.2em] text-sm font-bold text-gray-400">
                        OUR TOP NOTCH SERVICES
                    </p>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-12 pb-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex flex-col items-center text-center space-y-8"
                            >
                                {/* Polaroid Image */}
                                <div className={`relative bg-white p-3 shadow-lg border border-gray-100 transform ${service.rotation} hover:scale-105 transition-transform duration-500`}>
                                    <div className="relative aspect-[4/5] w-[300px] overflow-hidden bg-gray-100">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="max-w-xs">
                                    <h3 className="font-serif text-3xl text-text-main mb-4">{service.title}</h3>
                                    <p className="text-text-main/60 leading-relaxed font-dark">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#F9F8F6] relative overflow-hidden">
                <div className="absolute -left-20 -top-20 w-[400px] h-[400px] opacity-20 pointer-events-none rotate-45 z-0">
                    <Image src="/images/misc/services-flower.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] opacity-30 pointer-events-none -rotate-12 z-0">
                    <Image src="/images/misc/services-flower.png" alt="" fill className="object-contain" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center mb-6">
                            <FloralDivider className="w-32 h-auto text-gold opacity-60" />
                        </div>
                        <h2 className="font-serif text-4xl text-text-main mb-3">Love Stories Shared</h2>
                        <p className="uppercase tracking-[0.2em] text-xs font-bold text-gold mb-12">
                            SEE WHAT OUR COUPLES HAVE TO SAY
                        </p>

                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <button className="hidden md:block text-gold/50 hover:text-gold transition-colors">
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col items-center">
                                <div className="relative w-64 h-80 mb-12">
                                    <div className="absolute top-0 left-0 w-full h-full bg-white p-2 shadow-md transform -rotate-6 z-10">
                                        <div className="relative w-full h-full bg-gray-200">
                                            <Image src="/images/sections/story-4.jpg" alt="Testimonial" fill className="object-cover" />
                                        </div>
                                    </div>
                                    <div className="absolute top-2 left-4 w-full h-full bg-white p-2 shadow-md transform rotate-3 z-20">
                                        <div className="relative w-full h-full bg-gray-200">
                                            <Image src="/images/sections/story-1.jpg" alt="Testimonial" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-lg md:text-xl text-text-main/70 italic font-serif leading-relaxed mb-6">
                                    "The team at Amore made our dream wedding a reality. Every detail was perfect, and we felt so supported throughout the entire process."
                                </blockquote>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full overflow-hidden relative">
                                        <Image src="/images/sections/story-2.jpg" alt="Profile" fill className="object-cover" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gold">Joe's, Client of Amore</span>
                                </div>
                            </div>

                            <button className="hidden md:block text-gold/50 hover:text-gold transition-colors">
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="bg-beige pt-24 pb-0 text-center">
            </section>

            <Footer />
        </main>
    );
}
