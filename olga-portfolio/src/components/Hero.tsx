"use client";

import { TelegramCTA } from "./TelegramCTA";
import { motion } from "framer-motion";

export function Hero() {
  const badges = [
    "SFX MAKEUP",
    "BEAUTY & FASHION",
    "COMMERCIAL",
    "PROSTHETICS"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transform"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/50 to-onyx" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-mono tracking-widest border border-ash/30 rounded-full text-silk/80 bg-cosmic/50 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl mb-4 text-silk"
        >
          Логачева Оля
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-lavender font-serif italic mb-12"
        >
          Визажист & Гримёр Кино
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 rounded-sm px-8 py-4 bg-orchid text-onyx hover:bg-orchid/90 font-medium min-w-[220px]"
          >
            Смотреть работы
          </a>
          <TelegramCTA
            text="Записаться / Обсудить"
            variant="ghost"
            className="px-8 py-4 min-w-[220px]"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest text-ash uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-ash to-transparent" />
      </motion.div>
    </section>
  );
}
