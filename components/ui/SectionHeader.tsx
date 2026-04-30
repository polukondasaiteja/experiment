import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps extends HTMLMotionProps<"div"> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <motion.div
      {...fadeUp}
      whileInView="whileInView"
      viewport={{ once: true }}
      className={cn(
        "mb-16 md:mb-24",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="text-aruna-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 inline-block">
          {subtitle}
        </span>
      )}
      <h2 className="text-aruna-black">{title}</h2>
    </motion.div>
  );
}
