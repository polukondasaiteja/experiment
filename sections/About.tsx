"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

export default function About() {
  return (
    <Section id="about" className="bg-aruna-ivory">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          subtitle="The Art of Beauty"
          title="About Aruna"
          align="center"
          className="mb-12 md:mb-16"
        />
        
        <div className="text-center">
          <motion.p 
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-loose text-aruna-black/80 font-light font-sans tracking-tight"
          >
            Aruna is a professional makeup and hair stylist specializing in bridal, 
            engagement, pre-wedding, and non-bridal makeup with a focus on elegant, 
            long-lasting, and camera-ready looks.
          </motion.p>
          
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
            className="mt-16 flex flex-col items-center gap-6"
          >
            <div className="h-px w-24 bg-aruna-gold/40" />
            <p className="text-xs md:text-sm uppercase tracking-[0.5em] text-aruna-gold font-semibold">
              Elegance in Every Detail
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
