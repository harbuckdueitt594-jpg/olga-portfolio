import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["cyrillic", "latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Логачева Оля | Визажист & Гримёр Кино",
  description: "SFX Makeup, Beauty & Fashion, Commercial, Prosthetics. Portfolio of Olga Logacheva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased font-sans bg-onyx text-silk selection:bg-orchid/30">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
