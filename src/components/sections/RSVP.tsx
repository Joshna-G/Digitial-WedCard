"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FloralDivider } from "../ui/FloralDivider";
import Image from "next/image";

export function RSVP() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 60]);
    const yContent = useTransform(scrollYProgress, [0, 1], [30, -30]);

    // Rotation animation
    const rotateLeft = useTransform(scrollYProgress, [0, 1], [-45, -25]);
    const rotateRight = useTransform(scrollYProgress, [0, 1], [135, 155]);

    return (
        <section ref={containerRef} id="rsvp" className="scroll-mt-28 py-24 bg-white relative flex justify-center items-center">

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ y: yContent }}
                className="relative z-10 w-full max-w-xl mx-4"
            >
                {/* Attached Floral Watermarks - Positioned at corners of the box */}
                <motion.div style={{ y: yBackground }} className="absolute -left-40 -top-40 w-[350px] h-[350px] opacity-60 pointer-events-none z-0">
                    <Image src="/images/misc/flower-side.svg" alt="" fill className="object-contain rotate-[-45deg]" />
                </motion.div>
                <motion.div style={{ y: yBackground }} className="absolute -right-35 -bottom-35 w-[350px] h-[350px] opacity-60 pointer-events-none z-0">
                    <Image src="/images/misc/flower-side.svg" alt="" fill className="object-contain rotate-[135deg]" />
                </motion.div>

                {/* Gold Border Container */}
                <div className="border border-gold p-8 md:p-12 bg-white text-center shadow-sm relative z-10">

                    {/* Header */}
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text-main">
                        Are You Attending?
                    </h2>
                    <p className="uppercase tracking-[0.2em] text-sm font-bold text-gold mb-8">
                        BOOK YOUR SPOT
                    </p>

                    {/* Form Fields */}
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-gray-50 border border-gray-100 p-4 text-text-main font-bold placeholder-text-main/40 focus:outline-none focus:border-gold transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-gray-50 border border-gray-100 p-4 text-text-main font-bold placeholder-text-main/40 focus:outline-none focus:border-gold transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="How many people"
                            className="w-full bg-gray-50 border border-gray-100 p-4 text-text-main font-bold placeholder-text-main/40 focus:outline-none focus:border-gold transition-colors"
                        />

                        <button
                            type="button"
                            className="w-full py-4 bg-gold text-white font-bold uppercase tracking-widest hover:bg-gold/90 transition-colors mt-6"
                        >
                            RSVP
                        </button>
                    </form>

                </div>
            </motion.div>
        </section>
    );
}
