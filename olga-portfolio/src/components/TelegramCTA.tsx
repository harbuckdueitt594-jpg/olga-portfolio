"use client";

import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface TelegramCTAProps {
  text: string;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
  message?: string;
  icon?: boolean;
}

export function TelegramCTA({
  text,
  className,
  variant = "primary",
  message = "Здравствуйте, хочу обсудить проект",
  icon = false
}: TelegramCTAProps) {
  const baseClasses = "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 rounded-sm px-6 py-3";

  const variants = {
    primary: "bg-orchid text-onyx hover:bg-orchid/90 font-medium",
    outline: "border border-orchid text-orchid hover:bg-orchid/10",
    ghost: "text-silk hover:text-orchid",
  };

  const telegramUrl = `https://t.me/logacheva_olga?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(baseClasses, variants[variant], className)}
    >
      {text}
      {icon && <Send className="ml-2 h-4 w-4" />}
    </a>
  );
}
