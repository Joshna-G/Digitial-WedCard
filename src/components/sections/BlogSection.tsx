"use client";

import { motion } from "framer-motion";
import { FloralDivider } from "../ui/FloralDivider";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        date: "JAN 12, 2022",
        title: "In Love's Embrace: Suriya & Joe's Pre-Marriage Journey",
        image: "/images/sections/story-1.jpg",
        slug: "in-loves-embrace-suriya-joes-pre-marriage-journey"
    },
    {
        date: "APR 8, 2022",
        title: "Moments of Reflection: Suriya & Joe's Journey to Self-Discovery",
        image: "/images/sections/story-2.jpg",
        slug: "moments-of-reflection-suriya-joe-s-journey-to-self-discovery"
    },
    {
        date: "MAY 20, 2022",
        title: "Walking Together: A Guide to Building a Strong Foundation",
        image: "/images/sections/story-3.jpg",
        slug: "walking-together-a-guide-to-building-a-strong-foundation"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function BlogSection() {
    return (
        <section id="blog" className="scroll-mt-28 py-24 bg-white text-center">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex justify-center mb-6">
                    <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                </div>

                <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text-main">Latest Blog</h2>
                <p className="uppercase tracking-[0.2em] text-sm font-semibold text-gold">
                    WHAT WE ARE UP TO
                </p>
            </motion.div>

            {/* Grid */}
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white text-left group cursor-pointer"
                        >
                            {/* Image Container with Border Effect */}
                            <div className="relative p-1 border border-gold/30 mb-6 transition-transform duration-500 hover:border-gold">
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="pr-4">
                                <p className="text-xs font-bold text-text-main/40 uppercase tracking-widest mb-3">
                                    {post.date}
                                </p>
                                <h3 className="font-serif text-2xl text-text-main mb-4 leading-tight group-hover:text-gold transition-colors duration-300">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <div className="inline-block border-b border-gold pb-1">
                                    <Link href={`/blog/${post.slug}`} className="text-gold text-xs font-bold uppercase tracking-widest">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
