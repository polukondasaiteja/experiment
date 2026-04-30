"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stylingServices = [
  {
    title: "Elegant Updo",
    subtitle: "Sophisticated & Timeless",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471562/WhatsApp_Image_2026-04-29_at_5.26.32_PM_1_vqlk8b.jpg",
  },
  {
    title: "Traditional Styling",
    subtitle: "Classic Cultural Artistry",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471563/WhatsApp_Image_2026-04-29_at_5.26.32_PM_rfbhvx.jpg",
  },
  {
    title: "Contemporary Look",
    subtitle: "Effortless Editorial Style",
    image: "https://res.cloudinary.com/dxpl1ozdy/image/upload/q_auto/f_auto/v1777471564/WhatsApp_Image_2026-04-29_at_5.26.32_PM_2_tvu3zg.jpg",
  },
];

export default function StylingServices() {
  return (
    <Section id="styling-services" className="bg-white">
      <SectionHeader 
        subtitle="Complete Beauty Solutions"
        title="Hair & Styling Services"
        align="center"
      />

      <motion.div 
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stylingServices.map((item) => (
          <motion.div key={item.title} variants={staggerItem}>
            <Card className="p-0 overflow-hidden group border-none shadow-sm hover:shadow-2xl transition-all duration-700">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aruna-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-aruna-gold text-[10px] uppercase tracking-[0.4em] font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.subtitle}
                  </p>
                  <h3 className="text-white text-2xl font-serif font-light tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
