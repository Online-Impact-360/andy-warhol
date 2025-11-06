"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface MotionButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
}

// Tailwind utility classes - proper Tailwind CSS v4 approach
const baseClasses = "inline-flex items-center justify-center font-medium select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-0 uppercase";

const variantClasses: Record<ButtonVariant, string> = {
  // Primary: Gold gradient button with charcoal text
  primary: "text-charcoal rounded-xs h-14 px-7 font-inter text-small tracking-[0.04em]",
  // Secondary: Outlined button
  secondary: "bg-transparent text-offwhite border border-offwhite rounded-xs h-14 px-7 font-inter text-small tracking-[0.04em]",
  // Ghost: Legacy style
  ghost: "border border-warm-white/40 text-warm-white hover:bg-warm-white/10 px-5 py-3",
};

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ variant = "primary", className = "", children, disabled, ...props }, ref) => {
    const classes = [baseClasses, variantClasses[variant], className]
      .filter(Boolean)
      .join(" ");

    const commonTransition = { duration: 0.12, ease: "easeOut" } as const;

    const hoverTap =
      variant === "primary" 
        ? {
            whileHover: {
              scale: 1.02,
            background: "linear-gradient(135deg, #C6A556 0%, #D0AB46 50%, #B88A30 100%)", // Darker gradient on hover
            boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.12)",
            },
          whileTap: { scale: 0.98 },
        }
        : variant === "secondary"
          ? {
            whileHover: {
              scale: 1.02,
              backgroundColor: "rgba(234, 230, 223, 0.1)", // offwhite at 10%
            },
            whileTap: { scale: 0.98 },
          }
        : {
            whileHover: {
              scale: 1.02,
            backgroundColor: "rgba(245,245,245,0.1)",
            },
            whileTap: { scale: 0.98 },
          };

    return (
      <motion.button
        ref={ref}
        className={classes}
        style={
          variant === "primary"
            ? {
              background: "linear-gradient(135deg, #D0AB46 0%, #E3C859 50%, #CA9A39 100%)",
            }
            : undefined
        }
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
