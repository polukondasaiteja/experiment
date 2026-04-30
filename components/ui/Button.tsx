import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-[0.15em] uppercase disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-aruna-gold text-white hover:bg-aruna-gold-dark",
        secondary: "border border-aruna-gold text-aruna-gold hover:bg-aruna-gold hover:text-white",
        luxury: "bg-gradient-to-r from-aruna-gold to-aruna-nude text-white shadow-[0_4px_15px_rgba(197,160,89,0.2)] hover:shadow-[0_8px_25px_rgba(197,160,89,0.4)] border border-white/20",
        cta: "bg-aruna-black text-white hover:bg-neutral-800",
        ghost: "text-aruna-black hover:opacity-70 border-b border-transparent hover:border-aruna-black pb-1 px-0",
        luxuryGhost: "border border-white/30 text-white hover:border-white hover:bg-white/5",
      },
      size: {
        default: "px-8 py-3 text-sm",
        sm: "px-6 py-2 text-[10px]",
        lg: "px-12 py-4 text-base",
        pill: "px-10 py-4 text-sm rounded-full",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
