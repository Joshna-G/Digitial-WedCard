"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock } from "lucide-react";
import Image from "next/image";

export function WeddingDetails() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax and Scale transforms for Photos (unchanged)
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.95], [0, 1, 1, 0]);
    const yLeft = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const yRight = useTransform(scrollYProgress, [0, 1], [80, -80]); // Slightly different speed for variation

    // Floral Animations
    const floralScale = useTransform(scrollYProgress, [0, 1], [1.3, 0.95]);
    const floralY = useTransform(scrollYProgress, [0, 1], [0, 40]);
    const floralRotateLeft = useTransform(scrollYProgress, [0, 1], [-45, -15]);
    const floralRotateRight = useTransform(scrollYProgress, [0, 1], [135, 105]);

    // Light/Glow Effect (Shadow spread)
    const boxShadow = useTransform(
        scrollYProgress,
        [0, 1],
        ["0px 10px 30px rgba(0,0,0,0.1)", "0px 25px 60px rgba(212, 175, 55, 0.4)"]
    );

    return (
        <section
            id="details"
            className="py-24 px-6 md:px-12 bg-beige text-text-main flex flex-col items-center"
        >
            {/* Top Tilted Photos Container */}
            <div
                ref={containerRef}
                className="relative w-full max-w-4xl mb-12 flex justify-center items-center hidden md:flex"
            >

                {/* Left Floral Detail */}
                <motion.div
                    style={{
                        rotate: floralRotateLeft,
                        scale: floralScale,
                        y: floralY,
                        opacity: 0.8
                    }}
                    className="absolute -left-12 -top-12 w-96 h-96 z-0 pointer-events-none"
                >
                    <Image src="/images/misc/flower-side.svg" alt="" fill className="object-contain" />
                </motion.div>

                {/* Left Photo */}
                <motion.div
                    style={{ scale, opacity, y: yLeft, rotate: -6, boxShadow }}
                    className="w-[300px] h-[360px] bg-white p-3 shadow-xl z-10 mx-[-20px] origin-bottom-right"
                >
                    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                        <Image src="/images/sections/story-1.jpg" alt="Details 1" fill className="object-cover" />
                    </div>
                </motion.div>

                {/* Right Photo */}
                <motion.div
                    style={{ scale, opacity, y: yRight, rotate: 6 }}
                    className="w-[300px] h-[360px] bg-white p-3 shadow-xl z-20 mx-[-20px] origin-bottom-left"
                >
                    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                        <Image src="/images/sections/story-2.jpg" alt="Details 2" fill className="object-cover" />
                    </div>
                </motion.div>

                {/* Right Floral Detail */}
                <motion.div
                    style={{
                        rotate: floralRotateRight,
                        scale: floralScale,
                        y: floralY,
                        opacity: 0.8
                    }}
                    className="absolute -right-12 -bottom-12 w-96 h-96 z-0 pointer-events-none"
                >
                    <Image src="/images/misc/flower-side.svg" alt="" fill className="object-contain" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-serif mb-4 tracking-wide font-medium">SURIYA & JYOTHIKA</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl w-full relative mb-16">
                {/* Divider Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-text-main/20 -translate-x-1/2" />

                {/* Ceremony */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center text-center space-y-4"
                >
                    <div className="text-xs uppercase tracking-widest text-text-main/60 mb-2">Ceremony</div>
                    <h3 className="text-3xl font-bold text-text-main">09.00 am</h3>

                    <p className="text-sm leading-relaxed max-w-xs text-text-main/80 pt-2">
                        Rose Garden Estate, 123 Main
                        <br />
                        Street, Anytown, CHENNAI
                    </p>
                </motion.div>

                {/* Reception */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col items-center text-center space-y-4"
                >
                    <div className="text-xs uppercase tracking-widest text-text-main/60 mb-2">Reception</div>
                    <h3 className="text-3xl font-bold text-text-main">11.00 am</h3>

                    <p className="text-sm leading-relaxed max-w-xs text-text-main/80 pt-2">
                        Rose Garden Estate, 123 Main
                        <br />
                        Street, Anytown, CHENNAI
                    </p>
                </motion.div>
            </div>

            {/* RSVP Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <button
                    onClick={() => document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-gold text-white px-12 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gold/90 transition-colors"
                >
                    RSVP
                </button>
            </motion.div>

        </section>
    );
}
