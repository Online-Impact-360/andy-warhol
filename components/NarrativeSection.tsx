'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

function NarrativeSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // subtle parallax motion for the two photos - both move in same direction to maintain alignment
  const yLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const yRight = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    <section
      ref={ref}
      id="narrative"
      className="relative w-full text-warm-white py-28 md:py-36 bg-charcoal overflow-hidden transition-colors duration-700"
    >
      {/* top gradient to blend from previous section (responsive height) */}
      <div className="absolute top-0 left-0 w-full h-20 md:h-32 bg-linear-to-b from-charcoal to-transparent pointer-events-none" />

      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-16 lg:gap-20 items-start">
          {/* Left Text Column */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div
                className="absolute -inset-x-3 -inset-y-2 rounded-[2px] pointer-events-none blur-2xl"
                style={{
                  background: 'linear-gradient(90deg, rgba(212, 180, 105, 0.3), rgba(212, 180, 105, 0))',
                }}
              />
              <h2 className="text-[1.6rem] leading-tight text-offwhite relative">
                A Legacy Hidden in Plain Sight
              </h2>
              {/* Thin rule under headline: 1px #2B2B2B, 64px width */}
              <div className="mt-3 h-px w-16 bg-hair relative" />
            </motion.div>

            <motion.div
              className="mt-8 space-y-6 text-[1.1rem] leading-relaxed text-warm-white/90 px-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {[
                "For decades, this work remained outside the public eye, privately held following a direct transfer from Andy Warhol’s professional circle during one of the most influential periods of his career.",
                "The piece embodies a rare convergence of pop culture, art history, and private patronage, capturing Warhol’s enduring fascination with celebrity and his tightly held creative network.",
                "With extensive provenance documentation and independent authentication, this silkscreen ranks among the most significant rediscoveries from Warhol’s Marlon Brando series.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right Photo Column */}
          <div className="col-span-12 lg:col-span-7 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-center">
              {/* Left photo with parallax and frame */}
              <motion.div
                style={{ y: yLeft }}
                className="relative aspect-4/5 md:aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div
                  className="relative w-full h-full p-1.5 frame-gold"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/Andy-Warhol-Marlon-Brando-B2.jpg"
                      alt="Painting on easel"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.6)' }}
                    />
                    {/* Gold inner shadow 1px */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 0 1px rgba(212, 175, 55, 0.4)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Right photo with opposite parallax and frame */}
              <motion.div
                style={{ y: yRight }}
                className="relative aspect-4/5 md:aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              >
                <div
                  className="relative w-full h-full p-1.5 frame-gold"
                  style={{
                    boxShadow: '0 12px 40px rgba(0,0,0,0.45)', // Drop shadow
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/Andy-Warhol-Marlon-Brando-A2.jpg"
                      alt="Archival Warhol photograph"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.6)' }}
                    />
                    {/* Gold inner shadow 1px */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 0 1px rgba(212, 175, 55, 0.4)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NarrativeSection
