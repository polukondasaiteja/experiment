"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const slides = [
  {
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777483039/hero-bridal_oc6xkc.jpg",
    title: "Bridal Artistry",
  },
  {
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.31_PM_2_ybjzuu.jpg",
    title: "Engagement Glow",
  },
  {
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471563/WhatsApp_Image_2026-04-29_at_5.26.33_PM_ealyub.jpg",
    title: "Traditional Bridal",
  },
  {
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.32_PM_1_vqlk8b.jpg",
    title: "Luxury Hair Styling",
  },
  {
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.31_PM_1_dastmc.jpg",
    title: "Reception Glamour",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 2.5, ease: [0.25, 0.1, 0.25, 1] } 
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover object-center"
              priority={currentSlide === 0}
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Dark Overlay - Outside AnimatePresence to avoid stacking during transitions */}
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 h-full w-full flex items-center justify-center">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-aruna-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold mb-6">
              Premium Bridal Artistry
            </span>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-8 font-extralight tracking-tight">
              ARUNA <span className="block md:inline">MAKEUP</span>
            </h1>

            <p className="text-aruna-ivory/90 text-sm md:text-lg font-light tracking-[0.3em] uppercase mb-12 max-w-2xl mx-auto leading-relaxed">
              Bridal • Engagement • Editorial
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Button 
                variant="luxury" 
                size="pill"
                className="w-full sm:w-auto"
              >
                Book Your Session
              </Button>

              <Button 
                variant="luxuryGhost" 
                size="pill"
                className="w-full sm:w-auto"
              >
                View Masterpieces
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Navigation - More premium styling */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={cn(
              "h-[2px] transition-all duration-500 rounded-full",
              currentSlide === index 
                ? "bg-aruna-gold w-8" 
                : "bg-white/30 w-4 group-hover:bg-white/60"
            )} />
          </button>
        ))}
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-10 z-30 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[9px] text-white/40 uppercase tracking-[0.4em] [writing-mode:vertical-lr] font-medium">
          Discover
        </span>
        <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
          <motion.div 
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-aruna-gold to-transparent"
          />
        </div>
      </motion.div>

      <style jsx>{`
        h1 {
          text-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}
