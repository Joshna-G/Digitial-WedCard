"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloralDivider } from "@/components/ui/FloralDivider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundContent() {
    return (
        <main className="relative min-h-screen bg-white flex flex-col justify-between">
            <Navbar />

            <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto"
                >
                    {/* Floral Icon */}
                    <div className="flex justify-center mb-8">
                        <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                    </div>

                    {/* 404 Title */}
                    <h1 className="font-serif text-[120px] leading-none text-[#A67C27] mb-6">404</h1>

                    {/* Subtitle */}
                    <h2 className="font-serif text-3xl md:text-4xl text-text-main mb-6">
                        Oops! Looks like you are lost in love!
                    </h2>

                    {/* Description */}
                    <p className="text-text-main/60 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                        Seems like you've taken a detour from the path to Happily Ever After. Take a moment to catch your breath and when you're ready.
                    </p>

                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-block bg-[#A67C27] text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8e6a21] transition-colors duration-300"
                    >
                        Back to Homepage
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
