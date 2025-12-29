"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";
import { Menu, X, ChevronDown } from "lucide-react";

const leftNavItems = [
    { name: "Home", href: "#home" },
    { name: "Love Story", href: "#story" },
    { name: "Pages", href: "#", hasDropdown: true },
];

const rightNavItems = [
    { name: "Gallery", href: "#gallery", hasDropdown: false },
    { name: "Blog", href: "#blog", hasDropdown: false },
    { name: "RSVP", href: "#rsvp", hasDropdown: false },
];

const allSections = ["home", "story", "gallery", "rsvp", "blog"];

export function Navbar() {
    const { scrollY } = useScroll();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const activeSection = useActiveSection(allSections);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();

        if (!href.startsWith("#")) {
            router.push(href);
            setIsMobileMenuOpen(false);
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false);
        } else {
            router.push("/" + href);
            setIsMobileMenuOpen(false);
        }
    };

    const NavLink = ({ item, isActive }: { item: { name: string; href: string; hasDropdown?: boolean }; isActive?: boolean }) => {
        if (item.hasDropdown) {
            return (
                <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <button
                        className={cn(
                            "relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-1",
                            isActive ? "text-gold" : isScrolled ? "text-text-main hover:text-gold" : "text-white hover:text-gold"
                        )}
                    >
                        {item.name}
                        <ChevronDown className="w-3 h-3" />
                    </button>

                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full text-left left-0 pt-4"
                            >
                                <div className="bg-white shadow-lg border border-gold/10 p-4 min-w-[200px] flex flex-col gap-4">
                                    {["Services", "Pricing", "Our Team", "404"].map((subItem) => (
                                        <Link
                                            key={subItem}
                                            href={
                                                subItem === "Services"
                                                    ? "/services"
                                                    : subItem === "Pricing"
                                                        ? "/pricing"
                                                        : subItem === "Our Team"
                                                            ? "/our-team"
                                                            : subItem === "404"
                                                                ? "/404"
                                                                : "#"
                                            }
                                            className="text-text-main/70 hover:text-gold text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                                        >
                                            {subItem}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            );
        }

        return (
            <Link
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={cn(
                    "relative text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-1",
                    isActive ? "text-gold" : isScrolled ? "text-text-main hover:text-gold" : "text-white hover:text-gold"
                )}
            >
                {item.name}
                {isActive && (
                    <motion.div
                        layoutId="navbar-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                )}
            </Link>
        );
    };

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-text-main/5"
                        : "bg-black/20 backdrop-blur-[2px] py-6 border-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Desktop: Left Nav */}
                    <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-12">
                        {leftNavItems.map((item) => (
                            <NavLink key={item.name} item={item} isActive={activeSection === item.href.substring(1)} />
                        ))}
                    </div>

                    {/* Logo (Center) */}
                    <div className="flex-shrink-0 z-10">
                        <Link href="#home" onClick={(e) => handleScroll(e, "#home")}>
                            <span className={cn(
                                "font-serif text-3xl font-bold tracking-widest transition-all duration-300",
                                isScrolled ? "text-text-main scale-90" : "text-white scale-100"
                            )}>
                                S&J
                            </span>
                        </Link>
                    </div>

                    {/* Desktop: Right Nav */}
                    <div className="hidden md:flex items-center gap-8 flex-1 justify-start pl-12">
                        {rightNavItems.map((item) => (
                            <NavLink key={item.name} item={item} isActive={activeSection === item.href.substring(1)} />
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-text-main p-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-beige flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-text-main p-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="flex flex-col items-center gap-8">
                            {[...leftNavItems, ...rightNavItems].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-xl font-serif tracking-widest text-text-main hover:text-gold transition-colors",
                                        activeSection === item.href.substring(1) && "text-gold italic"
                                    )}
                                    onClick={(e) => {
                                        if (!item.hasDropdown) handleScroll(e, item.href);
                                        else setIsMobileMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
