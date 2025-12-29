"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FloralDivider } from "../ui/FloralDivider";

// Data removed to fix unused variable lint error. 
// Images are hardcoded in the layout below.

export function QuoteSection() {
    return (
        <section id="story" className="py-24 bg-offwhite  relative min-h-[800px] flex items-center">

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Floral Decoration Center */}
                    <div className="flex justify-center mb-8">
                        <FloralDivider className="w-48 h-auto text-gold opacity-80" />
                    </div>

                    <h6 className="font-serif text-3xl md:text-4xl text-text-main mb-8 leading-snug font-bold">
                        &quot;So they are no longer two, but one flesh. Therefore, what God has joined together, no human being must separate.&quot;
                    </h6>

                    <p className="uppercase tracking-[0.2em] text-gold text-sm font-semibold mb-8">
                        - Matthew 19:6
                    </p>
                </div>
            </div>

            {/* Side Floral Watermark (Using the one I fixed earlier) */}
            <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] pointer-events-none z-0 opacity-10">
                <Image
                    src="/images/misc/flower-side.svg"
                    alt="Floral Watermark"
                    fill
                    className="object-contain"
                />
            </div>
            {/* Note: I'm reusing the fixed SVG for the watermark effect seen in other layouts, 
                as Screenshot 5 mainly focuses on the center text. 
            */}

        </section>
    );
}
