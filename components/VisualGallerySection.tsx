'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const slides = [
  { src: '/gallery-imgs/Andy-Warhol-Marlon-Brando-Silkscreen-1.JPG', alt: 'Canvas texture under angled light', caption: 'Original silkscreen on canvas, circa 1970s.' },
  { src: '/gallery-imgs/Andy-Warhol-Marlon-Brando-Silkscreen-2.JPG', alt: 'Signature close-up', caption: 'Authenticated signature in pencil, lower right.' },
  { src: '/gallery-imgs/Andy-Warhol-Marlon-Brando-Silkscreen-3.JPG', alt: 'Raking light detail', caption: 'Surface detail under raking light, highlighting texture and layering.' },
  { src: '/gallery-imgs/Andy-Warhol-Marlon-Brando-Silkscreen-4.JPG', alt: 'Framing detail', caption: 'Edges of stretcher bars and frame junction detail.' },
  { src: '/gallery-imgs/Andy-Warhol-Marlon-Brando-Silkscreen-5.JPG', alt: 'Pigment and screen', caption: 'Silkscreen matrix revealing ink deposition and mesh pattern.' },
]

function VisualGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  // We'll use the scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Horizontal translation mapping
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${(slides.length - 1) * 100}%`],
    { clamp: false }
  )

  // Dynamically calculate height: (slides.length - 1) * 100vh
  const scrollLength = (slides.length - 1) * 100


  return (
    <section
      className="w-full bg-black"
    >
      <div className="wrap-wide mx-auto relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-start pointer-events-none">
          <div className="px-6 pt-16">
            <motion.div
              className="font-serif text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-tight">
                A Closer Look
              </h2>
            </motion.div>
            <motion.div
              className="mt-3 h-px w-40 bg-linear-to-r from-yellow-600 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </div>
        <motion.div
          className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/20 via-transparent to-black/20"
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.3, 0.7]) }}
        />
        {/* <div className="pointer-events-none absolute top-10 left-0 right-0 h-[2px] bg-[rgba(212,180,105,.35)] z-10" />
        <div className="pointer-events-none absolute bottom-12 left-0 right-0 h-[2px] bg-[rgba(212,180,105,.35)] z-10" /> */}

        <section
          ref={sectionRef}
          style={{
            height: `${scrollLength}vh`,
          }}
        >
          {/* Sticky container for horizontal scroll */}
          <div className="sticky top-0 h-screen overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex h-full items-center"
            >
              {slides.map((s, i) => (
                <div key={i} className="relative w-full h-full shrink-0 flex flex-col items-center justify-center">
                  <motion.div
                    className="relative w-[80vw] h-[80vh] overflow-hidden rounded-none border-2 border-[rgba(212,180,105,.35)]"
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      className="object-cover object-center"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.5)_100%)]" />

                  </motion.div>
                  <motion.div
                    className="mt-3 text-sm text-ink-muted"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                  >
                    {s.caption}
                  </motion.div>
                </div>
              ))}

            </motion.div>
          </div>
        </section>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-6 left-0 right-0 z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="mx-auto px-6">
            <div className="h-px w-full bg-white/10" />
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              className="h-[2px] bg-yellow-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisualGallerySection
