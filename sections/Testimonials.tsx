"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const testimonials = [
  {
    name: "Chethan Kumar",
    text: "One of the best and most budget-friendly makeup artists in town.",
    initials: "CK",
  },
  {
    name: "Deepika Deepu",
    text: "Very good artists... service is fantastic.",
    initials: "DD",
  },
  {
    name: "Mano 1994",
    text: "Highly recommend her for any makeup services.",
    initials: "M",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="text-aruna-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block">
            Testimonials
          </span>
          <h2 className="text-aruna-black">What Our Clients Say</h2>
        </div>

        <motion.div 
          variants={staggerContainer(0.1)}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              variants={staggerItem}
              whileHover={{ scale: 1.03 }}
              className="card-luxury flex flex-col items-center text-center group"
            >
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-aruna-nude/30 flex items-center justify-center mb-6 transition-colors duration-500 group-hover:bg-aruna-gold/20">
                <span className="text-aruna-gold font-serif text-xl tracking-tighter">
                  {item.initials}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-aruna-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-600 font-light italic mb-8 leading-relaxed">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Client Name with Gradient Accent */}
              <div className="mt-auto">
                <h4 className="text-sm uppercase tracking-[0.2em] font-bold bg-gradient-to-r from-aruna-black to-aruna-gold bg-clip-text text-transparent">
                  {item.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
