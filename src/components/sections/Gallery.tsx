"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-2.jpg",
];

import { FloralDivider } from "../ui/FloralDivider";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";

export function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className="scroll-mt-28 py-24 bg-white text-center">
            <div className="flex justify-center mb-6">
                <FloralDivider className="w-32 h-auto text-gold opacity-80" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text-main">Captured Moments</h2>
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-gold mb-12">
                OUR MOMENTS TOGETHER
            </p>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-12">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative aspect-[3/4] group overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                <Maximize2 className="w-5 h-5 text-text-main" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl max-h-[90vh] aspect-[3/4] md:aspect-[3/2]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Selected gallery image"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
