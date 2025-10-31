"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import React from "react";

export interface MotionTextareaProps extends HTMLMotionProps<"textarea"> {
  label?: string;
  error?: string;
  success?: string;
  helperText?: string;
}

const baseField =
  "px-4 py-3 bg-transparent border border-warm-white/20 focus:border-gold outline-none text-warm-white placeholder-warm-white/40 w-full";
const baseLabel = "text-sm uppercase tracking-wide text-warm-white/80";

const MotionTextarea = React.forwardRef<HTMLTextAreaElement, MotionTextareaProps>(
  ({ label, className = "", error, success, helperText, id, name, ...props }, ref) => {
    const describedBy = id ? `${id}-desc` : name ? `${name}-desc` : undefined;
    const borderState = error ? "border-red-500 focus:border-red-500" : success ? "border-emerald-500 focus:border-emerald-500" : "";
    return (
      <label className="flex flex-col gap-2 w-full">
        {label ? <span className={baseLabel}>{label}</span> : null}
        <motion.textarea
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

MotionTextarea.displayName = "MotionTextarea";

export default MotionTextarea;
