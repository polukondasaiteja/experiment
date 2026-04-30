"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/animations";

const portfolioItems = [
  {
    id: 1,
    title: "Traditional Bridal",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471563/WhatsApp_Image_2026-04-29_at_5.26.33_PM_ealyub.jpg",
  },
  {
    id: 2,
    title: "Modern Bride",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471560/WhatsApp_Image_2026-04-29_at_5.26.29_PM_syy1om.jpg",
  },
  {
    id: 3,
    title: "Reception Glam",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.31_PM_1_dastmc.jpg",
  },
  {
    id: 4,
    title: "South India Bride",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.30_PM_czptyr.jpg",
  },
  {
    id: 5,
    title: "Party Makeup",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471564/WhatsApp_Image_2026-04-29_at_5.26.34_PM_kn1z2i.jpg",
  },
  {
    id: 6,
    title: "Bridal Elegance",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.30_PM_3_d8fl4r.jpg",
  },
  {
    id: 7,
    title: "Engagement Glow",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.31_PM_2_ybjzuu.jpg",
  },
  {
    id: 8,
    title: "Event Glamour",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471563/WhatsApp_Image_2026-04-29_at_5.26.33_PM_2_zgcikt.jpg",
  },
];

export default function Portfolio() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = portfolioItems.find((item) => item.id === selectedId);

  return (
    <Section id="portfolio" className="bg-aruna-ivory">
      <SectionHeader 
        subtitle="Our Portfolio"
        title="Signature Transformations"
        align="center"
      />

      {/* Gallery Grid */}
      <motion.div 
        variants={staggerContainer(0.05)}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            onClick={() => setSelectedId(item.id)}
            className="relative aspect-[3/4] cursor-pointer overflow-hidden group bg-aruna-nude/10"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-aruna-black/0 group-hover:bg-aruna-black/30 transition-all duration-500 ease-in-out flex items-center justify-center p-6">
              <div className="text-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                <h4 className="text-white font-serif text-2xl font-light tracking-wide mb-2">{item.title}</h4>
                <div className="h-px w-12 bg-aruna-gold/70 mx-auto" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-aruna-black/95 p-6 md:p-12"
            onClick={() => setSelectedId(null)}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }}
              className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[85vh]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-white text-3xl font-serif font-light tracking-wide">{selectedItem.title}</h3>
                <p className="text-aruna-gold/60 uppercase tracking-[0.4em] text-[10px] mt-4 font-medium">Aruna Makeup Artist</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
