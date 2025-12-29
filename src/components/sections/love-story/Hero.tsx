"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FloralDivider } from "../../ui/FloralDivider";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [150, -150]);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const boxShadow = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px 5px 15px rgba(0,0,0,0.1)", "0px 20px 50px rgba(212, 175, 55, 0.3)"]
    );

    return (
        <section ref={containerRef} className="py-24 bg-white overflow-hidden relative min-h-[600px] flex items-center justify-center">

            {/* Corner Photos - Repurposed from main section for consistency */}

            {/* Top Left */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -12 }}
                animate={{ opacity: 1, x: 0, rotate: -12 }}
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
                animate={{ opacity: 1, x: 0, rotate: 12 }}
                transition={{ duration: 0.8 }}
                style={{ y: yRight, scale, boxShadow }}
                className="absolute right-[2%] top-20 w-[200px] md:w-[300px] aspect-[3/4] bg-white p-2 shadow-xl z-10 hidden md:block"
            >
                <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                    <Image src="/images/sections/story-2.jpg" alt="Story 2" fill className="object-cover" />
                </div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-20 pt-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Floral Decoration Center */}
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-48 h-auto text-gold opacity-80" />
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl text-text-main mb-6 leading-tight">
                        Our Love Story
                    </h1>

                    <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-8">
                        STORY TO TELL FOR THE REST OF THE WORLD
                    </p>
                </div>
            </div>
        </section>
    );
}
