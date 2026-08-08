"use client";

import { motion } from "framer-motion";

export function TrustBar() {
  const brands = [
    "Кинопоиск", "Premier", "Okko", "START", "Vogue", "Harper's Bazaar", "Tatler", "TSUM", "Mosfilm", "Lenfilm"
  ];

  // Duplicate for seamless infinite scroll
  const scrollBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-12 border-y border-ash/10 bg-cosmic/50 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 md:px-12 mb-6 md:mb-0 md:w-1/4 shrink-0 hidden md:block">
        <p className="text-xs font-mono tracking-widest text-ash uppercase">Доверяют</p>
      </div>

      <div className="relative w-full flex overflow-hidden mask-image-fade">
        <motion.div
          animate={{ x: [0, -1035] }} // Approximate width of one set of brands
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex whitespace-nowrap items-center gap-16 pr-16"
        >
          {scrollBrands.map((brand, idx) => (
            <span
              key={idx}
              className="text-xl md:text-2xl font-serif text-ash/40 font-medium tracking-wide"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
