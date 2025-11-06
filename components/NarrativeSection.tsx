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
      className="relative w-full text-warm-white py-28 md:py-36 bg-charcoal overflow-hidden transition-colors duration-700"
    >
      {/* optional top gradient to blend from previous section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-charcoal to-transparent pointer-events-none" />

      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-14 items-start">
          {/* Left Text Column */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="font-didot text-[1.6rem] leading-tight text-offwhite">
                A Legacy Hidden in Plain Sight
              </h2>
              {/* Thin rule under headline: 1px #2B2B2B, 64px width */}
              <div className="mt-3 h-px w-16 bg-hair" />
            </motion.div>

            <motion.div
              className="mt-8 space-y-6 text-[1.1rem] leading-relaxed text-warm-white/90"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {[
                "For decades, this work has existed outside the public eye — part of a select few Warhol pieces transferred in lieu of payment for legal services during the artist’s prolific years in New York.",
                "It embodies a rare intersection of pop culture, art history, and private patronage, representing not only Warhol’s fascination with fame but also his personal network of creative and professional collaborators.",
                "With comprehensive provenance and independent authentication, this silkscreen stands among the most compelling rediscoveries of Warhol’s Brando series.",
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
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-
            center">
              {/* Left photo with parallax and frame */}
              <motion.div
                style={{ y: yLeft }}
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div
                  className="relative w-full h-full p-1.5"
                  style={{
                    backgroundColor: '#EAE6DF', // 6px off-white keyline
                    boxShadow: '0 12px 40px rgba(0,0,0,0.45)', // Drop shadow
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/man-black-hood-looking-down.jpg"
                      alt="Painting on easel"
                      fill
                      className="object-cover object-center"
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
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              >
                <div
                  className="relative w-full h-full p-1.5"
                  style={{
                    backgroundColor: '#EAE6DF', // 6px off-white keyline
                    boxShadow: '0 12px 40px rgba(0,0,0,0.45)', // Drop shadow
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/man_standing_sideways.png"
                      alt="Archival Warhol photograph"
                      fill
                      className="object-cover object-center"
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
