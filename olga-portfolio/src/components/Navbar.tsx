"use client";

import { useState, useEffect } from "react";
import { TelegramCTA } from "./TelegramCTA";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Обо мне", href: "#about" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "Услуги", href: "#services" },
    { name: "Процесс", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-onyx/80 backdrop-blur-md border-ash/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-mono tracking-widest text-lg font-medium text-silk">
          LOGACHEVA<span className="text-orchid">.</span>OLGA
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-wide text-ash hover:text-silk transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <TelegramCTA
            text="Связаться"
            variant="outline"
            className="px-5 py-2 text-sm"
          />
        </div>
      </div>
    </header>
  );
}
