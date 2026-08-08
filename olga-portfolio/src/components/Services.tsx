"use client";

import { motion } from "framer-motion";
import { TelegramCTA } from "./TelegramCTA";

export function Services() {
  const services = [
    {
      title: "Макияж для съемок & Fashion",
      items: ["Разработка мудборда", "Макияж любой сложности", "Работа с текстурами", "Стойкость 12+ часов"],
      price: "от 15 000 ₽",
      duration: "1.5 - 2 часа"
    },
    {
      title: "Свадебный & Вечерний образ",
      items: ["Репетиция образа (по желанию)", "Стойкий макияж", "Проработка зоны декольте", "Выезд в отель/на дом"],
      price: "от 20 000 ₽",
      duration: "2 часа"
    },
    {
      title: "Грим для кино, рекламы и клипов",
      items: ["Исторический грим", "Создание персонажей", "Поддержание образа на площадке", "Постижерные изделия (усы, бороды)"],
      price: "По запросу",
      duration: "Смена (12ч)"
    },
    {
      title: "Спецгрим & SFX",
      items: ["Шрамы, раны, ожоги", "Возрастной грим", "Силиконовые/латексные накладки", "Пластический грим (Prosthetics)"],
      price: "от 25 000 ₽",
      duration: "Индивидуально"
    },
    {
      title: "Сопровождение съемочного дня",
      items: ["Полный контроль образа в кадре", "Смена образов", "Поправление макияжа", "Выезд в любую локацию"],
      price: "от 35 000 ₽",
      duration: "Смена (12ч)"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orchid/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-silk mb-4">Направления <span className="text-lavender italic">Работы</span></h2>
          <p className="text-ash font-sans max-w-xl mx-auto">От легкого touch-up до полного перевоплощения с использованием SFX.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cosmic/80 border border-orchid/15 backdrop-blur-md p-8 rounded-sm flex flex-col h-full hover:border-orchid/40 transition-colors duration-300"
            >
              <h3 className="font-serif text-2xl text-silk mb-6">{service.title}</h3>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start text-ash text-sm">
                    <span className="text-orchid mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-ash/10 mt-auto">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-xs text-ash/70 font-mono tracking-widest uppercase mb-1">Стоимость</p>
                    <p className="text-xl text-silk font-medium">{service.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-ash/70 font-mono tracking-widest uppercase mb-1">Время</p>
                    <p className="text-sm text-ash">{service.duration}</p>
                  </div>
                </div>

                <TelegramCTA
                  text="Рассчитать смену"
                  variant="outline"
                  className="w-full"
                  message={`Здравствуйте! Интересует услуга: ${service.title}. Подскажите стоимость и свободные даты.`}
                />
              </div>
            </motion.div>
          ))}

          {/* Custom Request Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: services.length * 0.1 }}
            className="bg-orchid/10 border border-orchid/30 backdrop-blur-md p-8 rounded-sm flex flex-col h-full items-center justify-center text-center"
          >
            <h3 className="font-serif text-2xl text-silk mb-4">Нестандартный проект?</h3>
            <p className="text-ash text-sm mb-8">Сложные пластические крюки, кровь, облысение или разработка персонажа с нуля.</p>
            <TelegramCTA
              text="Обсудить идею"
              variant="primary"
              className="w-full"
              message="Здравствуйте! У нас нестандартный проект/идея, хотим обсудить возможность реализации."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
