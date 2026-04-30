"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Contact() {
  const whatsappNumber = "917702928749";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Aruna,%20I'm%20interested%20in%20your%20makeup%20services.`;

  return (
    <section id="contact-form" className="bg-white section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-aruna-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block">
              Get In Touch
            </span>
            <h2 className="text-aruna-black">Start Your Transformation</h2>
            <p className="text-neutral-500 font-light mt-4">
              Connect with us via WhatsApp for instant booking or fill out the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Direct Contact Options */}
            <motion.div
              {...fadeUp}
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif mb-8">Direct Contact</h3>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white mr-4 shadow-lg shadow-[#25D366]/20">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Fast Response</p>
                  <p className="text-lg font-medium text-aruna-black">Chat on WhatsApp</p>
                </div>
              </a>

              <a 
                href="tel:+917702928749"
                className="flex items-center p-6 bg-aruna-gold/5 border border-aruna-gold/20 hover:bg-aruna-gold/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-aruna-gold flex items-center justify-center text-white mr-4 shadow-lg shadow-aruna-gold/20">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.44 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.25 2.46.69 3.58a1 1 0 01-.27 1.11l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-1">Direct Call</p>
                  <p className="text-lg font-medium text-aruna-black">+91 77029 28749</p>
                </div>
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              {...fadeUp}
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="bg-aruna-ivory p-8 border border-aruna-nude/20"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white border border-aruna-nude/20 px-4 py-3 text-sm focus:outline-none focus:border-aruna-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white border border-aruna-nude/20 px-4 py-3 text-sm focus:outline-none focus:border-aruna-gold transition-colors resize-none"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full py-4">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
