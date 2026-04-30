"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
];

export default function Social() {
  return (
    <section className="bg-aruna-ivory border-t border-aruna-nude/10 py-24">
      <div className="container-wide text-center">
        {/* Branded Logo Display */}
        <motion.div
          variants={staggerItem}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl tracking-[0.4em] text-aruna-black mb-2">ARUNA</h2>
          <span className="text-[10px] uppercase tracking-[0.5em] text-aruna-gold font-bold">Follow Our Journey</span>
        </motion.div>

        {/* Social Icons Grid */}
        <motion.div 
          variants={staggerContainer(0.1)}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-12 md:space-x-20"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full border border-aruna-nude/30 flex items-center justify-center text-aruna-black group-hover:text-aruna-gold group-hover:border-aruna-gold transition-all duration-300">
                {social.icon}
              </div>
              <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 group-hover:text-aruna-black transition-colors duration-300">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
