"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import { FloralDivider } from "../ui/FloralDivider";

const footerLinks = {
    links: [
        { name: "Home", href: "/home" },
        { name: "Love Story", href: "/love-story" },
        { name: "Gallery", href: "/gallery" },
        { name: "Blog", href: "/blog" },
        { name: "RSVP", href: "/rsvp" }
    ],
    pages: [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "Our Team", href: "/our-team" },
        { name: "404", href: "/404" }
    ],
    social: [
        { name: "Instagram", href: "#" },
        { name: "Thread", href: "#" },
        { name: "Email", href: "#" }
    ]
};

export function Footer() {
    return (
        <footer className="bg-beige pt-24 pb-12 overflow-hidden relative">
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Top Decorative Floral */}
                    <div className="flex justify-center mb-6">
                        <FloralDivider className="w-48 h-auto text-gold opacity-60" />
                    </div>

                    <div className="mb-8">
                        <span className="border border-gold text-gold px-6 py-2 uppercase tracking-widest text-sm inline-block">
                            Amore
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-4">
                        We can't wait to see you there!
                    </h2>
                    <p className="uppercase tracking-widest text-gold text-sm mb-16">
                        SURIYA & JYOTHIKA - 18 OCTOBER 2024
                    </p>

                    {/* Links Grid */}
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                        {/* Column 1 */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="font-serif text-xl mb-2 text-text-main">LINK</h3>
                            {footerLinks.links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-text-main/60 hover:text-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="font-serif text-xl mb-2 text-text-main">PAGES</h3>
                            {footerLinks.pages.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-text-main/60 hover:text-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="font-serif text-xl mb-2 text-text-main">SOCIAL</h3>
                            {footerLinks.social.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-text-main/60 hover:text-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Copyright & Bottom Info */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-text-main/70 uppercase tracking-widest border-t border-text-main/10 pt-8 w-full max-w-6xl mx-auto relative z-10">
                        <p>Built with Love.</p>
                        <p>Crafted by Joshna</p>
                    </div>
                </motion.div>
            </div>

            {/* Corner Decorations */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-[200px] md:w-[270px] z-0 translate-x-8 translate-y-10 rotate-55">
                <NextImage
                    src="/assets/images/footer-right-new.png"
                    alt="Floral Decoration"
                    width={246}
                    height={360}
                    className="w-full h-auto opacity-50"
                />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 w-[300px] md:w-[350px] z-0 translate-y-30 translate-x-10 rotate-320">
                <NextImage
                    src="/assets/images/footer-left-new.svg"
                    alt="Floral Decoration"
                    width={825}
                    height={1447}
                    className="w-full h-auto opacity-40"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </footer>
    );
}
