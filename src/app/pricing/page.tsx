"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloralDivider } from "@/components/ui/FloralDivider";
import { motion } from "framer-motion";
import Image from "next/image";
import NextImage from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-24 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-6xl text-text-main mb-6">Pricing</h1>
                    <p className="uppercase tracking-[0.2em] text-sm font-bold text-gray-400">
                        PACKAGE FOR YOU TO CHOOSE
                    </p>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-32">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative border border-gold/40 p-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-12 bg-[#FDFBF7]"
                    >
                        <div className="flex-1 text-left">
                            <h3 className="font-serif text-3xl text-text-main mb-2">Classic Package</h3>
                            <div className="text-4xlfont-serif text-gold mb-8 text-5xl">₹24,999</div>

                            <ul className="space-y-4 mb-8">
                                {["Full Wedding Website", "Digital Invitation", "Online Gallery High Res", "Engagement Session Site"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-main/70 font-light">
                                        <Check className="w-4 h-4 text-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="#" className="inline-block border border-gold px-8 py-3 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-white transition-colors duration-300">
                                Get Started
                            </Link>
                        </div>

                        <div className="flex-1 w-full flex justify-center md:justify-end relative">
                            <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] md:w-[350px] z-0 translate-y-70 translate-x-10 rotate-315">
                                <NextImage
                                    src="/assets/images/footer-left-new.svg"
                                    alt="Floral Decoration"
                                    width={825}
                                    height={1447}
                                    className="w-full h-auto opacity-40"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative border border-gold/40 p-12 bg-[#FDFBF7] text-center md:text-left"
                        >
                            <h3 className="font-serif text-3xl text-text-main mb-2">Mini</h3>
                            <div className="font-serif text-gold mb-8 text-5xl">₹8,999</div>

                            <ul className="space-y-4 mb-8 inline-block text-left">
                                {["Digital Invitation", "Shareable Link -(limited)", "Limited Period"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-main/70 font-light">
                                        <Check className="w-4 h-4 text-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center md:text-left">
                                <Link href="#" className="inline-block border border-gold px-8 py-3 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-white transition-colors duration-300">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>

                        {/* Deluxe Package */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative border border-gold/40 p-12 bg-[#FDFBF7] text-center md:text-left"
                        >
                            <h3 className="font-serif text-3xl text-text-main mb-2">Deluxe</h3>
                            <div className="font-serif text-gold mb-8 text-5xl">₹39,999</div>

                            <ul className="space-y-4 mb-8 inline-block text-left">
                                {["Premium Website", "Digital Memories", "Lifetime Access", "Customized Invitation"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-text-main/70 font-light">
                                        <Check className="w-4 h-4 text-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center md:text-left">
                                <Link href="#" className="inline-block border border-gold px-8 py-3 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold hover:text-white transition-colors duration-300">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="py-24 bg-[#F9F8F6] relative overflow-hidden">
                {/* Background Decorations */}
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

                        {/* Carousel Placeholder */}
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                            <button className="hidden md:block text-gold/50 hover:text-gold transition-colors">
                                <ChevronLeft className="w-8 h-8" />
                            </button>

                            <div className="flex-1 flex flex-col items-center">
                                {/* Stacked Images */}
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

            <Footer />
        </main>
    );
}
