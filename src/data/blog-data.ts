export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    image: string;
    content: string[];
}

export const blogPosts: Record<string, BlogPost> = {
    "moments-of-reflection-amore-regina-s-journey-to-self-discovery": {
        slug: "moments-of-reflection-amore-regina-s-journey-to-self-discovery",
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
    },
    "in-loves-embrace-amore-reginas-pre-marriage-journey": {
        slug: "in-loves-embrace-amore-reginas-pre-marriage-journey",
        title: "In Love's Embrace: Amore & Regina's Pre-Marriage Journey",
        date: "JAN 12, 2022",
        image: "/images/sections/story-1.jpg",
        content: [
            "As we stood on the precipice of forever, holding hands and looking out at the horizon of our shared future, a sense of calm washed over us. The pre-marriage journey had been a whirlwind of emotions – excitement, anxiety, joy, and profound realization.",
            "We remember the early days, the nervous laughter, the stolen glances. Every step towards this moment has been paved with memories that we will cherish forever. From choosing the venue to writing our vows, every decision was a testament to our partnership.",
            "There were challenges, of course. Combining two lives is never seamless. But in those moments of friction, we found the spark that would ignite our lifelong commitment. We learned to listen, really listen, to what the other needed.",
            "Embracing this journey meant embracing each other, fully and completely. It meant accepting the quirks, the habits, and the histories that made us who we are. It was in this acceptance that we found true freedom.",
            "Now, as we prepare to say 'I do', we look back with gratitude and forward with hope. We are ready to embrace whatever comes next, wrapped in the warmth of our love and the strength of our union."
        ]
    },
    "walking-together-a-guide-to-building-a-strong-foundation": {
        slug: "walking-together-a-guide-to-building-a-strong-foundation",
        title: "Walking Together: A Guide to Building a Strong Foundation",
        date: "MAY 20, 2022",
        image: "/images/sections/story-3.jpg",
        content: [
            "A strong marriage isn't built in a day; it's constructed stone by stone, moment by moment. As we walked this path together, we realized that the foundation of our relationship rested on three pillars: communication, respect, and shared values.",
            "Communication was the mortar that held everything together. We made a pact to always speak our truth, even when it was difficult. We learned that silence could be just as damaging as harsh words, so we chose to fill the space with open, honest dialogue.",
            "Respect was the cornerstone. We promised to honor each other's individuality, to support each other's dreams, and to never diminish the other's light. We found that by lifting each other up, we both stood taller.",
            "Shared values gave us direction. We discussed what mattered most to us – family, adventure, kindness, creativity. These values became our compass, guiding our decisions and shaping our life together.",
            "Walking together doesn't mean we always have to be in step. Sometimes one leads, sometimes the other. But it means we are always heading in the same direction, hand in hand, building a future that is robust, resilient, and uniquely ours."
        ]
    }
};

export const allPosts = Object.values(blogPosts);
