import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "transition-all duration-500",
  {
    variants: {
      variant: {
        default: "bg-white border border-aruna-nude/30 p-8",
        dark: "bg-aruna-black border border-white/10 text-white p-8",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 p-8",
      },
      hover: {
        true: "hover:shadow-xl hover:-translate-y-1",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: true,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, hover, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, hover, className }))}
      {...props}
    />
  );
}

export { Card, cardVariants };
