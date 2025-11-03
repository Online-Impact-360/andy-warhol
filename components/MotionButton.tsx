"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

export type ButtonVariant = "primary" | "ghost";

export interface MotionButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
}

const baseClasses = "px-2.5 md:px-5 py-1.5 md:py-3 font-medium tracking-wide select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-gold text-black",
  ghost: "border border-warm-white/40 text-warm-white hover:bg-warm-white/10",
};

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ variant = "primary", className = "", children, disabled, ...props }, ref) => {
    const classes = [baseClasses, variantClasses[variant], className]
      .filter(Boolean)
      .join(" ");

    const commonTransition = { type: "spring", stiffness: 260, damping: 18 } as const;

    const hoverTap =
      variant === "primary" 
        ? {
            whileHover: {
              scale: 1.02,
              y: -1,
              boxShadow: "0 10px 30px rgba(212,175,55,0.25)",
            },
            whileTap: { scale: 0.98, y: 0 },
          }
        : {
            whileHover: {
              scale: 1.02,
              y: -1,
              backgroundColor: "rgba(245,245,245,0.8)",
              borderColor: "rgba(245,245,245,0.6)",
              color: "#0A0A0A",
              boxShadow: "0 10px 30px rgba(245,245,245,0.25)",
            },
            whileTap: { scale: 0.98, y: 0 },
          };

    return (
      <motion.button
        ref={ref}
        className={classes}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={commonTransition}
        {...hoverTap}
        disabled={disabled}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

MotionButton.displayName = "MotionButton";

export default MotionButton;
