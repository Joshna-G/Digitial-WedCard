"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloralDivider } from "@/components/ui/FloralDivider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogPost = {
    title: "Moments of Reflection: Suriya & Joe's Journey to Self-Discovery",
    date: "APR 8, 2022",
    image: "/images/sections/story-2.jpg", 
    content: [
        "In the quiet corners of our shared life, away from the camera flashes and the bustling crowds, we found something unexpected – ourselves. Our journey wasn't just about planning a wedding or building a home; it was a profound exploration of who we are as individuals and how we fit together in this intricate puzzle of love.",
        "There were days when the silence spoke louder than words. We learned to sit with our thoughts, to peel back the layers of expectation and societal norms. Regina found solace in her photography, capturing not just faces, but the emotions hidden behind them. It became a mirror for her own soul, revealing depths she hadn't dared to explore before.",
        "For Amore, writing became his sanctuary. He poured his fears, his dreams, and his rawest vulnerabilities onto paper. He realized that true strength wasn't about being unshakeable, but about being open to the tremors of life. We shared these discoveries with each other, sometimes with tears, sometimes with laughter.",
        "We realized that self-discovery isn't a destination, but a continuous path we walk side by side. It's in the way we support each other's individual passions, in the space we give one another to grow. We learned that to love another deeply, one must first learn to love oneself.",
        "This chapter of our lives taught us that vulnerability is the bedrock of intimacy. By sharing our true selves – our flaws, our doubts, our unpolished dreams – we built a foundation of trust that no storm could weather. Our love story isn't just about romance; it's about the beautiful, messy, and transformative journey of becoming who we were meant to be, together."
    ]
};

export default function BlogPostPage() {
    const params = useParams(); 

    return (
        <main className="relative min-h-screen bg-white">
            <Navbar />

            <article className="pt-24 pb-24">
                {/* Header Section */}
                <div className="container mx-auto px-6 text-center max-w-4xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center mb-8">
                            <FloralDivider className="w-32 h-auto text-gold opacity-80" />
                        </div>

                        <p className="text-xs font-bold text-text-main/60 uppercase tracking-[0.2em] mb-4">
                            {blogPost.date}
                        </p>

                        <h1 className="font-serif text-4xl md:text-5xl text-text-main mb-8 leading-tight">
                            {blogPost.title}
                        </h1>

                        <p className="text-text-main/60 font-medium tracking-wide max-w-2xl mx-auto mb-12">
                            A journey into the depths of our souls, finding strength in vulnerability and love in truth.
                        </p>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[16/9] w-full border border-gold/30 p-2 shadow-sm"
                    >
                        <div className="relative w-full h-full overflow-hidden bg-gray-100">
                            <Image
                                src={blogPost.image}
                                alt={blogPost.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-6 max-w-2xl text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="prose prose-lg prose-p:text-text-main/70 prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-text-main"
                    >
                        {blogPost.content.map((paragraph, index) => (
                            <p key={index} className="mb-8 indent-0 text-[17px] leading-[1.8]">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>

                    <div className="my-16 flex justify-center">
                        <div className="w-16 h-px bg-gold/50" />
                    </div>
                </div>

                {/* Read More Section */}
                <div className="bg-[#F9F8F6] py-24">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-4">
                                <FloralDivider className="w-24 h-auto text-gold opacity-60" />
                            </div>
                            <h2 className="font-serif text-3xl md:text-4xl text-text-main">Read More About Our Journey</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Related Post Card */}
                            <Link href="/blog/pre-marriage-journey" className="group bg-white p-4 border border-transparent hover:border-gold/30 transition-colors duration-300 flex items-center gap-6 cursor-pointer">
                                <div className="relative w-32 h-32 shrink-0 border border-gold/20 p-1">
                                    <div className="relative w-full h-full overflow-hidden bg-gray-100">
                                        <Image src="/images/sections/story-1.jpg" alt="Related" fill className="object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-main/40 uppercase tracking-widest mb-2">JAN 12, 2022</p>
                                    <h3 className="font-serif text-xl text-text-main mb-2 leading-tight group-hover:text-gold transition-colors">In Love's Embrace</h3>
                                    <div className="text-xs font-bold text-gold uppercase tracking-widest">Read More</div>
                                </div>
                            </Link>

                            {/* Related Post Card */}
                            <Link href="/blog/building-foundation" className="group bg-white p-4 border border-transparent hover:border-gold/30 transition-colors duration-300 flex items-center gap-6 cursor-pointer">
                                <div className="relative w-32 h-32 shrink-0 border border-gold/20 p-1">
                                    <div className="relative w-full h-full overflow-hidden bg-gray-100">
                                        <Image src="/images/sections/story-3.jpg" alt="Related" fill className="object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-text-main/40 uppercase tracking-widest mb-2">MAY 20, 2022</p>
                                    <h3 className="font-serif text-xl text-text-main mb-2 leading-tight group-hover:text-gold transition-colors">Walking Together</h3>
                                    <div className="text-xs font-bold text-gold uppercase tracking-widest">Read More</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </article>

            <Footer />
        </main>
    );
}
