"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface MotionButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  href?: string;
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

const MotionButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, MotionButtonProps>(
  ({ variant = "primary", className = "", children, disabled, href, ...props }, ref) => {
    const classes = [baseClasses, variantClasses[variant], className]
      .filter(Boolean)
      .join(" ");

    const commonTransition = { duration: 0.12, ease: "easeOut" } as const;

    const hoverTap =
      variant === "primary" 
        ? {
            whileHover: {
              scale: 1.02,
              background: "linear-gradient(135deg, #a9883f 0%, #b7954b 50%, #8f6f2e 100%)",
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

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          style={
            variant === "primary"
              ? {
                  background: "linear-gradient(135deg, #b7954b 0%, #d1b068 50%, #8f6f2e 100%)",
                }
              : undefined
          }
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={commonTransition}
          {...hoverTap}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        style={
          variant === "primary"
            ? {
                background: "linear-gradient(135deg, #b7954b 0%, #d1b068 50%, #8f6f2e 100%)",
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
