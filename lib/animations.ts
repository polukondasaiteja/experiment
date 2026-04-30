import { Transition } from "framer-motion";

export const ANIMATION_DURATION = 0.8;
export const ANIMATION_EASE = [0.21, 0.45, 0.32, 0.9] as [number, number, number, number];

// Base variants that can be used with initial/animate or as variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE } as Transition,
};

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE } as Transition,
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE } as Transition,
};

// Variants for staggered children
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
  whileInView: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE } as Transition
  },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: ANIMATION_DURATION, ease: ANIMATION_EASE } as Transition
  },
};

export const hoverTransition = {
  duration: 0.3,
  ease: "easeInOut"
};
