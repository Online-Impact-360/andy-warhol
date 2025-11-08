"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

export interface MotionInputProps extends HTMLMotionProps<"input"> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
}

const baseField =
  "h-12 px-4 bg-transparent border border-hair rounded-md focus:border-gold outline-none text-warm-white placeholder-warm-white/40 w-full transition-colors";
const baseLabel = "font-inter text-[0.95rem] text-white/80";

const MotionInput = React.forwardRef<HTMLInputElement, MotionInputProps>(
  ({ label, className = "", error, success, helperText, id, name, ...props }, ref) => {
    const describedBy = id ? `${id}-desc` : name ? `${name}-desc` : undefined;
    const borderState = error ? "border-red-500 focus:border-red-500" : success ? "border-emerald-500 focus:border-emerald-500" : "";
    return (
      <label className="flex flex-col gap-2 w-full">
        {label ? <span className={baseLabel}>{label}</span> : null}
        <motion.input
          ref={ref}
          className={[baseField, borderState, className].filter(Boolean).join(" ")}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          id={id}
          name={name}
          {...props}
        />
        {(error || success || helperText) ? (
          <span id={describedBy} className={[
            "text-xs",
            error ? "text-red-400" : success ? "text-emerald-400" : "text-warm-white/60"
          ].join(" ")}>{error || success || helperText}</span>
        ) : null}
      </label>
    );
  }
);

MotionInput.displayName = "MotionInput";

export default MotionInput;
