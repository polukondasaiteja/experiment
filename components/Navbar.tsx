"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          scrolled 
            ? "bg-aruna-ivory/90 backdrop-blur-md border-b border-aruna-nude/10 py-4" 
            : "bg-transparent py-6"
        )}
      >
        <nav className="container-wide flex items-center justify-between">
          <Link 
            href="/" 
            className={cn(
              "font-serif text-2xl tracking-[0.2em] font-light transition-colors duration-300",
              !scrolled && "text-white"
            )}
            onClick={closeMenu}
          >
            ARUNA
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 hover:text-aruna-gold",
                  scrolled ? "text-aruna-black/70" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className={cn(
              "btn !py-2 !px-6 !text-[10px] !tracking-[0.2em]",
              scrolled ? "btn-primary" : "bg-white text-black hover:bg-aruna-gold hover:text-white"
            )}>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[60] p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 6, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className={cn("h-[1px] transition-colors duration-300", (isOpen || scrolled) ? "bg-aruna-black" : "bg-white")}
              />
              <motion.span 
                animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className={cn("h-[1px] w-4 transition-colors duration-300", (isOpen || scrolled) ? "bg-aruna-black" : "bg-white")}
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -6, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
                className={cn("h-[1px] transition-colors duration-300", (isOpen || scrolled) ? "bg-aruna-black" : "bg-white")}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] bg-aruna-ivory flex flex-col items-center justify-center"
          >
            <motion.div 
              variants={staggerContainer(0.1, 0.2)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={staggerItem}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-3xl tracking-widest text-aruna-black hover:text-aruna-gold transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={staggerItem}
                className="pt-8"
              >
                <button className="btn btn-primary px-12" onClick={closeMenu}>
                  Book Now
                </button>
              </motion.div>
            </motion.div>

            {/* Background Decorative Element */}
            <div className="absolute bottom-20 opacity-5 pointer-events-none">
              <h2 className="font-serif text-[15vw] tracking-[0.3em] leading-none select-none">ARUNA</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
