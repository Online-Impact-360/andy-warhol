'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function NarrativeSection() {
  return (
    <section className="relative w-full text-warm-white py-24 md:py-32 bg-charcoal overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 md:col-span-5">
            <motion.div
              className="font-serif text-warm-white/90"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="font-bold text-[34px] md:text-[40px] lg:text-[48px] leading-tight">A Legacy Hidden in Plain Sight</h2>
            </motion.div>
            <motion.div
              className="mt-7 space-y-6 text-[18px] md:text-[19px] leading-relaxed text-warm-white/90"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                For decades, this work has existed outside the public eye — part of a select few Warhol pieces transferred in lieu of payment for legal services during the artist’s prolific years in New York.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                It embodies a rare intersection of pop culture, art history, and private patronage, representing not only Warhol’s fascination with fame but also his personal network of creative and professional collaborators.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                With comprehensive provenance and independent authentication, this silkscreen stands among the most compelling rediscoveries of Warhol’s Brando series.
              </motion.p>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div
                className="relative aspect-3/4 overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Image
                  src="/man-black-hood-looking-down.jpg"
                  alt="Painting on easel"
                  fill
                  className="object-cover object-center"
                  priority={false}
                />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)' }} />
              </motion.div>

              <motion.div
                className="relative aspect-3/4 overflow-hidden"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              >
                <Image
                  src="/man_standing_sideways.png"
                  alt="Archival Warhol photograph"
                  fill
                  className="object-cover object-center grayscale"
                  priority={false}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NarrativeSection
