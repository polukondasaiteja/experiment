"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    title: "Bridal Makeup",
    description: "Tailored bridal looks that enhance your natural beauty for your special day.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop",
  },
  {
    title: "Engagement Makeup",
    description: "Sophisticated and glowing artistry for your engagement ceremony.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Pre-Wedding Makeup",
    description: "Versatile looks designed for stunning pre-wedding photo shoots.",
    image: "https://images.unsplash.com/photo-1457974182041-35c94d4c6281?q=80&w=2069&auto=format&fit=crop",
  },
  {
    title: "Non-Bridal Makeup",
    description: "Elegant makeup for bridesmaids, family, and special occasions.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="text-aruna-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block">
            Our Expertise
          </span>
          <h2 className="text-aruna-black">Signature Services</h2>
        </div>

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className="group cursor-pointer"
            >
              <div className="card-luxury h-full flex flex-col p-0 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-aruna-black/20 group-hover:bg-aruna-black/40 transition-colors duration-500" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl mb-4 font-serif">{service.title}</h3>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-[10px] uppercase tracking-widest text-aruna-gold font-bold border-b border-aruna-gold/0 group-hover:border-aruna-gold transition-all duration-300 pb-1">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
