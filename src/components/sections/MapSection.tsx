"use client";

import { motion } from "framer-motion";

export function MapSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full max-w-5xl mx-auto h-[350px] md:h-[450px] overflow-hidden shadow-sm"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13146.42571253683!2d-118.5720917!3d35.0841603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea5d0f1f1d1b1f%3A0xe37a8b4b1a4a1a1a!2sTriassic%20Vineyards!5e0!3m2!1sen!2sus!4v1655663731149!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
