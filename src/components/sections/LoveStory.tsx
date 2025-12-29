"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FloralDivider } from "../ui/FloralDivider";

export function LoveStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [150, -150]);

    // Continuous Scale & Glow Animation
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const boxShadow = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px 5px 15px rgba(0,0,0,0.1)", "0px 20px 50px rgba(212, 175, 55, 0.3)"]
    );

    return (
        <section ref={containerRef} id="story" className="scroll-mt-28 py-24 bg-white overflow-hidden relative min-h-[800px] flex items-center justify-center">

            {/* Corner Photos - Positioned absolutely based on Screenshot 1 */}

            {/* Top Left */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -12 }}
                whileInView={{ opacity: 1, x: 0, rotate: -12 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ y: yLeft, scale, boxShadow }}
                className="absolute left-[2%] top-10 w-[200px] md:w-[300px] aspect-[3/4] bg-white p-2 shadow-xl z-10 hidden md:block"
            >
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image src="/images/sections/story-1.jpg" alt="Story 1" fill className="object-cover" />
                </div>
            </motion.div>

            {/* Top Right */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 12 }}
                whileInView={{ opacity: 1, x: 0, rotate: 12 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ y: yRight, scale, boxShadow }}
                className="absolute right-[2%] top-20 w-[200px] md:w-[300px] aspect-[3/4] bg-white p-2 shadow-xl z-10 hidden md:block"
            >
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image src="/images/sections/story-2.jpg" alt="Story 2" fill className="object-cover" />
                </div>
            </motion.div>

            {/* Bottom Left */}
            <motion.div
                initial={{ opacity: 0, y: 50, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ y: yRight, scale, boxShadow }}
                className="absolute left-[5%] bottom-[-50px] w-[200px] md:w-[280px] aspect-[4/5] bg-white p-2 shadow-xl z-10 hidden md:block"
            >
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image src="/images/sections/story-3.jpg" alt="Story 3" fill className="object-cover" />
                </div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div
                initial={{ opacity: 0, y: 50, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ y: yLeft, scale, boxShadow }}
                className="absolute right-[5%] bottom-[-20px] w-[200px] md:w-[280px] aspect-[4/5] bg-white p-2 shadow-xl z-10 hidden md:block"
            >
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image src="/images/sections/story-4.jpg" alt="Story 4" fill className="object-cover" />
                </div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Floral Decoration Center */}
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-48 h-auto text-gold opacity-80" />
                    </div>

                    <h2 className="font-serif text-5xl md:text-6xl text-text-main mb-4 leading-tight">
                        Our Love Story
                    </h2>

                    <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-8">
                        STORY TO TELL FOR THE REST OF THE WORLD
                    </p>

                    <p className="text-text-main/80 text-lg leading-relaxed mb-10">
                        Met during a chance encounter at a coffee shop and fell in love over their shared passion for travel and adventure.
                    </p>

                    <Link href="/love-story" className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold inline-block">
                        Read More
                    </Link>
                </div>
            </div>
        </section>
    );
}
