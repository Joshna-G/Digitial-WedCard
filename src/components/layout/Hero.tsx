"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full">
                <Image
                    src="/images/hero/hero-main.jpg"
                    alt="Suriya & Jyothika"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white pb-20">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-4 text-xs font-medium uppercase tracking-[0.2em]"
                >
                    The Wedding Of
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="mb-6 font-serif text-4xl md:text-7xl lg:text-8xl tracking-wide"
                >
                    Suriya & Jyothika
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm md:text-base font-light tracking-[0.2em]"
                >
                    (18.10.2024)
                </motion.p>
            </div>
        </section>
    );
}
