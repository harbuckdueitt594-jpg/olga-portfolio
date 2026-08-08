"use client";

import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "Заявка & Обсуждение", desc: "Сбор референсов, понимание задачи и сроков." },
    { num: "02", title: "Мудборд & Смета", desc: "Утверждение визуальной концепции и бюджета." },
    { num: "03", title: "Подготовка & Простетика", desc: "Создание накладок, подбор материалов до начала съемок." },
    { num: "04", title: "Работа на площадке", desc: "Грим, макияж и контроль образа в кадре." },
    { num: "05", title: "Финальное сопровождение", desc: "Снятие грима, уход за кожей актера после смены." }
  ];

  return (
    <section id="process" className="py-24 bg-onyx relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-silk mb-4">Pipeline <span className="text-orchid italic">Проекта</span></h2>
          <p className="text-ash font-sans max-w-xl">Прозрачный процесс от первой идеи до финального хлопка хлопушки.</p>
        </div>

        <div className="relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-ash/20" />

          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 justify-between">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex md:flex-col items-start gap-6 md:gap-8 flex-1"
              >
                {/* Number & Dot */}
                <div className="relative flex-shrink-0 z-10 bg-onyx md:pr-4">
                  <div className="w-14 h-14 rounded-full border border-orchid/30 flex items-center justify-center bg-cosmic text-lavender font-mono text-lg shadow-[0_0_15px_rgba(229,189,223,0.1)]">
                    {step.num}
                  </div>
                  {/* Vertical line for mobile */}
                  {idx !== steps.length - 1 && (
                    <div className="md:hidden absolute top-14 bottom-[-24px] left-7 w-[1px] bg-ash/20" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <h3 className="font-sans font-medium text-silk text-lg mb-2">{step.title}</h3>
                  <p className="text-ash text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
