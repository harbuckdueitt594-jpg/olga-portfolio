"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  const stats = [
    { value: "3+ Года", label: "Опыт в индустрии" },
    { value: "2+ Полных", label: "метра. Кинопроекты и сериалы" },
    { value: "Fashion & Shows", label: "Подиумные и рекламные съемки" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
          >
            <div className="absolute inset-0 bg-orchid/10 -translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative h-full w-full overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
                alt="Логачева Оля - работа на съемочной площадке"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-cosmic border border-ash/20 p-6 rounded-sm shadow-xl backdrop-blur-md">
              <p className="font-serif text-2xl text-orchid italic">Художник-технолог</p>
              <p className="font-mono text-sm text-ash mt-1 tracking-widest uppercase">гримёр-постижёр</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-silk">
              Искусство <br/><span className="text-lavender italic">Трансформации</span>
            </h2>

            <div className="space-y-6 text-ash font-sans leading-relaxed text-lg mb-12">
              <p>
                Я создаю образы, которые рассказывают истории. От легкого коммерческого бьюти до сложных пластических накладок (SFX) — моя работа заключается в том, чтобы сделать визуальный нарратив убедительным.
              </p>
              <p>
                Работаю на пересечении моды, кино и рекламы. Понимаю специфику света на площадке, требования режиссеров и операторов, а также важность тайминга в production-процессе.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-cosmic/80 border border-ash/10 p-6 rounded-sm backdrop-blur-sm">
                  <p className="font-serif text-2xl text-orchid mb-2">{stat.value}</p>
                  <p className="font-sans text-sm text-ash/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
