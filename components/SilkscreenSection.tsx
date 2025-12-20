 'use client'

 import { motion } from 'framer-motion'

export default function SilkscreenSection() {
  return (
    <motion.section
      id="silkscreen"
      className="section wrap silkscreen flex items-center flex-col px-4 md:px-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-center text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        Behind the Silkscreen: Warhol at Work
      </motion.h2>
      <motion.div
        className="w-32 h-px bg-gold mt-2 mb-6"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        style={{ transformOrigin: 'center' }}
      />
      <motion.p
        className="lead text-center max-w-[68ch] mx-auto px-1"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
      >
        A rare archival glimpse of Andy Warhol producing a <em>Marlon Brando</em> silkscreen during his 1966 Factory period. The scale, composition, and format visible in the footage align closely with the privately held work presented here.
      </motion.p>
      <motion.div
        className="video frame-gold rounded-md w-full h-full overflow-hidden border border-gold/30 bg-black/20 shadow-[0_0_20px_rgba(212,175,55,0.12)] p-0!"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.16 }}
      >
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/J4o6abzBKy0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Warhol Silkscreen: Marlon Brando"
          />
        </div>
      </motion.div>
      <motion.p
        className="mt-4! text-white/80 text-[0.95rem] text-center leading-relaxed max-w-[70ch] mx-auto px-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
      >
        Based on comparative analysis of known Marlon Brando paintings from this period, no other documented example matches the dimensions and proportions observed in the archival footage as precisely as the present work.
      </motion.p>
      <motion.div
        className="source mt-3 text-white/60 text-sm"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        Source: Archival footage via YouTube
      </motion.div>
    </motion.section>
  );
}
