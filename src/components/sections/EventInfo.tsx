"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloralDivider } from "../ui/FloralDivider";

const eventDetails = [
    {
        title: "Hotel Recommendation",
        content: "For exceptional comfort and luxury, I highly recommend Fav Hotel. With its elegant decor, impeccable service, and convenient location, it's the perfect choice for a memorable stay during your wedding festivities."
    },
    {
        title: "Dress Code",
        content: "We request formal attire for our special day. Black tie optional."
    },
    {
        title: "Gift & Registry Information",
        content: "Your presence is the greatest gift of all. However, should you wish to honour us with a gift, a registry is held at Amazon and Target."
    },
    {
        title: "Parking Spot",
        content: "Ample parking is available at the venue. Valet service will also be provided for your convenience."
    }
];

export function EventInfo() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-offwhite">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Content + Accordion */}
                    <div className="lg:w-1/2 w-full flex flex-col gap-12">
                        {/* Header Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex justify-start mb-6">
                                <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text-main">
                                Event Information
                            </h2>
                            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-gold mb-8">
                                QUESTIONS AND ANSWERS
                            </p>

                            <p className="text-text-main/70 leading-relaxed max-w-md">
                                Your presence at our wedding is the greatest gift to all, therefore we do not want you to miss any information about our event.
                            </p>
                        </motion.div>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {eventDetails.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                    className="border border-gold/20 bg-white"
                                >
                                    <button
                                        onClick={() => toggleIndex(index)}
                                        className="w-full flex justify-between items-center p-6 text-left hover:bg-gold/5 transition-colors duration-300"
                                    >
                                        <h3 className="font-serif text-xl text-text-main">{item.title}</h3>
                                        <span className={`text-gold text-2xl transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""}`}>
                                            +
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 pt-0 text-text-main/70 leading-relaxed border-t border-gold/10 mx-6 mt-2">
                                                    {item.content}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="lg:w-1/2 w-full h-full min-h-[500px] relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full h-full"
                        >
                            <img
                                src="/assets/images/event-info-couple.jpg"
                                alt="Event Couple"
                                className="w-full h-[400px] lg:h-[600px] object-cover border-4 border-white shadow-sm"
                                style={{ objectPosition: "55.3% 11.1%" }}
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
