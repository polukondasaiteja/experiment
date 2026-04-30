import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string;
}

export default function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn("section-padding", className)} {...props}>
      <div className={cn("container-wide", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
