"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, className }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden select-none cursor-ew-resize group rounded-lg", className)}
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt="After makeup"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 right-4 bg-onyx/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-silk uppercase tracking-wider">
          После
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={beforeImage}
          alt="Before makeup"
          fill
          className="object-cover object-left"
          style={{ width: "100%", maxWidth: "none" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-4 left-4 bg-onyx/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-silk uppercase tracking-wider">
          До
        </div>
      </div>

      <div
        className="absolute inset-y-0 w-1 bg-silk cursor-ew-resize"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-silk rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-onyx/50 rounded-full" />
            <div className="w-0.5 h-3 bg-onyx/50 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
