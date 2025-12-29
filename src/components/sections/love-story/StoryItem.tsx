"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StoryItemProps {
    year: string;
    title: string;
    description: string;
    images: string[]; 
    index: number;
}

export function StoryItem({ year, title, description, images, index }: StoryItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-24"
        >
            {/* Left Side: Image Stack */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative h-[400px] md:h-[500px]">
                {/* Back Image */}
                <div className="absolute top-0 right-0 md:right-10 w-[240px] md:w-[320px] aspect-[3/4] bg-white p-3 shadow-xl transform -rotate-3 border-2 border-[#C5A25D]/20 z-10">
                    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                        <Image src={images[0]} alt={`${title} 1`} fill className="object-cover" />
                    </div>
                </div>

                {/* Front Image */}
                <div className="absolute top-12 right-12 md:right-24 w-[240px] md:w-[320px] aspect-[3/4] bg-white p-3 shadow-xl transform rotate-3 border-2 border-[#C5A25D]/20 z-20">
                    <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                        <Image src={images[1]} alt={`${title} 2`} fill className="object-cover" />
                    </div>
                </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left pt-12 md:pt-0">
                <span className="block font-serif text-lg text-[#C5A25D] font-bold mb-4 tracking-widest">{year}</span>
                <h3 className="font-serif text-4xl md:text-5xl text-text-main mb-6">{title}</h3>
                <p className="text-text-main/70 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-light">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
