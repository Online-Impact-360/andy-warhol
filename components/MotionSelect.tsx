"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

export interface MotionSelectProps extends HTMLMotionProps<"select"> {
  label?: string;
  optionsClassName?: string;
  error?: string;
  success?: string;
  helperText?: string;
}

const baseField =
  "h-12 px-4 bg-transparent border border-line rounded-none focus:border-gold outline-none text-warm-white text-[16px] w-full transition-colors";
const baseLabel = "font-inter text-[14px] text-white/60";

const MotionSelect = React.forwardRef<HTMLSelectElement, MotionSelectProps>(
  ({ label, className = "", children, error, success, helperText, id, name, ...props }, ref) => {
    const describedBy = id ? `${id}-desc` : name ? `${name}-desc` : undefined;
    const borderState = error ? "border-red-500 focus:border-red-500" : success ? "border-emerald-500 focus:border-emerald-500" : "";
    return (
      <label className="flex flex-col gap-2 w-full">
        {label ? <span className={baseLabel}>{label}</span> : null}
        <motion.select
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
        >
          {children}
        </motion.select>
        {(error || success || helperText) ? (
          <span
            id={describedBy}
            role="status"
            aria-live="polite"
            className={[
              "text-xs",
              error ? "text-red-400" : success ? "text-emerald-400" : "text-warm-white/60"
            ].join(" ")}
          >
            {error || success || helperText}
          </span>
        ) : null}
      </label>
    );
  }
);

MotionSelect.displayName = "MotionSelect";

export default MotionSelect;
