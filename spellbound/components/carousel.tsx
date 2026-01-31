"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Distort from '@/public/images/distort_reality.png';
import Doxra from '@/public/images/Doxra_Endless_Binder_FInal.png';
import Vex from '@/public/images/Vex_final_2.png';
import Xeton from '@/public/images/xeton all-seeing final.png';
const cards = [
    { id: 1, title: "Distort Reality", image: Distort.src },
    { id: 2, title: "Vex", image: Vex.src },
    { id: 3, title: "Doxra", image: Doxra.src },
    // { id: 4, title: "Xeton", image: Xeton.src },
];

export default function ExploreTheWeaveCarousel() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="relative py-32 overflow-hidden">
            <motion.h2
                style={{ opacity }}
                className="text-4xl md:text-5xl font-semibold text-center mb-16"
            >
                Explore the Weave
            </motion.h2>

            <motion.div
                style={{ x }}
                className="flex gap-8 px-8 md:px-24"
            >
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="w-64 md:w-72 bg-background/80 backdrop-blur shadow-lg rounded-2xl overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-4 text-center text-sm font-medium">
                                {card.title}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
