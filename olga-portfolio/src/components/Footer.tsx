"use client";

import { TelegramCTA } from "./TelegramCTA";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-onyx pt-24 pb-8 border-t border-ash/10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Direct CTA Banner */}
        <div className="bg-cosmic/50 border border-orchid/20 rounded-sm p-8 md:p-16 mb-24 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-silk mb-6 max-w-3xl mx-auto">
            Расскажите о вашем проекте — подготовлю предложение и подберем образ
          </h2>
          <TelegramCTA
            text="Написать в Telegram"
            variant="primary"
            icon={true}
            className="px-8 py-4 text-lg mt-4"
          />
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="font-mono tracking-widest text-xl font-medium text-silk block mb-6">
              LOGACHEVA<span className="text-orchid">.</span>OLGA
            </a>
            <p className="text-ash font-sans max-w-sm mb-6">
              Профессиональный визажист и художник-гримёр. Создание образов для кино, рекламы и fashion-индустрии.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-ash uppercase mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://t.me/logacheva_olga" target="_blank" rel="noopener noreferrer" className="text-silk hover:text-orchid transition-colors">Telegram</a>
              </li>
              <li>
                <a href="#" className="text-silk hover:text-orchid transition-colors">WhatsApp</a>
              </li>
              <li>
                <a href="#" className="text-silk hover:text-orchid transition-colors">Instagram</a>
              </li>
              <li>
                <a href="mailto:hello@example.com" className="text-silk hover:text-orchid transition-colors">hello@example.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-widest text-ash uppercase mb-6">Навигация</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-silk hover:text-orchid transition-colors">Обо мне</a></li>
              <li><a href="#portfolio" className="text-silk hover:text-orchid transition-colors">Портфолио</a></li>
              <li><a href="#services" className="text-silk hover:text-orchid transition-colors">Услуги & Цены</a></li>
              <li><a href="#faq" className="text-silk hover:text-orchid transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ash/10 text-sm text-ash/60">
          <p>© {currentYear} Logacheva Olga. Все права защищены.</p>
          <p className="mt-2 md:mt-0">Design & Development with AI</p>
        </div>
      </div>
    </footer>
  );
}
