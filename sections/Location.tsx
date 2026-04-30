"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const serviceAreas = [
  "Bengaluru",
  "Hyderabad",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Karnataka",
  "Chennai",
  "Mysuru",
  "Mangaluru",
];

export default function Location() {
  return (
    <section id="contact" className="bg-aruna-ivory section-padding">
      <div className="container-wide">
        <div className="text-center mb-20">
          <span className="text-aruna-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block">
            Find Us
          </span>
          <h2 className="text-aruna-black">Location & Coverage</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map & Address */}
          <motion.div
            {...fadeUp}
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-luxury p-0 overflow-hidden h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9863456728!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714470000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aruna Makeup Artist Location"
                className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
            
            <div className="space-y-4 px-2">
              <h3 className="text-2xl font-serif">Studio Address</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                Aruna Makeup Artist Studio,<br />
                MG Road, Bengaluru,<br />
                Karnataka 560001, India
              </p>
              <div className="pt-4 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-aruna-gold/10 flex items-center justify-center text-aruna-gold">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm tracking-widest font-medium uppercase">+91 77029 28749</span>
              </div>
            </div>
          </motion.div>

          {/* Service Coverage */}
          <motion.div
            {...fadeUp}
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="bg-white p-10 md:p-16 border border-aruna-nude/20 shadow-sm"
          >
            <h3 className="text-3xl font-serif mb-8">Service Coverage</h3>
            <p className="text-neutral-500 font-light leading-relaxed mb-10">
              We travel to your destination to ensure you look your absolute best. Our team provides premium on-site makeup services across major cities and states in South India.
            </p>
            
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center space-x-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-aruna-gold/40 group-hover:bg-aruna-gold transition-colors duration-300" />
                  <span className="text-sm uppercase tracking-widest text-neutral-600 group-hover:text-aruna-black transition-colors duration-300">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-aruna-nude/10">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-aruna-gold mb-6">
                Planning a destination wedding?
              </p>
              <button className="btn btn-primary w-full">
                Check Availability
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
