'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MotionButton from '@/components/MotionButton'
import Image from 'next/image'

function ProvenanceSection() {
    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], [20, -20])
    const yBg = useTransform(scrollYProgress, [0, 1], [10, -10])

    return (
        <section ref={ref} className="relative w-full text-[#F2F2F2] bg-black py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
            <motion.div
                className="absolute inset-y-0 right-0 w-[55%] overflow-hidden"
                style={{ y: yBg }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                aria-hidden
            >
                <Image
                    src="/man_standing_sideways.png"
                    alt="Background document"
                    fill
                    className="object-cover object-center opacity-30 blur-[1px] grayscale"
                    priority={false}
                />
            </motion.div>

            <div className="container">
                <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
                    <motion.div
                        className="col-span-12 md:col-span-6 lg:col-span-6"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="font-serif text-warm-white/90"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                            <div className="text-base tracking-[0.25em] uppercase">The</div>
                            <h2 className="mt-1 font-bold text-[40px] md:text-[48px] lg:text-[56px] leading-tight">Provenance</h2>
                        </motion.div>
                        <motion.div
                            className="mt-5 h-px w-48 bg-linear-to-r from-gold to-transparent"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            style={{ transformOrigin: 'left center' }}
                        />

                        <motion.div
                            className="mt-8 space-y-6 text-[18px] md:text-[19px] leading-relaxed text-warm-white/90"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                        >
                            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                Acquired directly from Andy Warhol’s legal counsel, Si Litvinoff, this silkscreen of Marlon Brando has remained in private hands for over four decades.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                Accompanied by notarized documentation, payment records, and personal correspondence between Warhol and Litvinoff, the chain of custody is meticulously preserved and authenticated.
                            </motion.p>
                            <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                Full provenance details are available to qualified collectors upon execution of a Non-Disclosure Agreement.
                            </motion.p>
                        </motion.div>

                        <motion.div style={{ y }} className="mt-20 md:mt-28" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                            <div className="relative w-full h-[2px] bg-linear-to-r from-gold/70 via-gold/30 to-transparent flex">
                            <div className="absolute left-0 top-3.5 transform -translate-y-1/2">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.55)] z-10" />
                                    <div className="text-xs tracking-wide opacity-90">
                                        1970s
                                    </div>
                                </div>      
                            </div>
                            <div className="absolute left-1/2 top-3.5 transform -translate-y-1/2">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.55)] z-10" />
                                    <div className="text-xs tracking-wide opacity-90">
                                        1980s
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-0 top-3.5 transform -translate-y-1/2">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.55)] z-10" />
                                    <div className="text-xs tracking-wide opacity-90">
                                        Present
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.div>

                        <motion.div className="mt-10" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}>
                            <MotionButton variant="primary">Request Full Provenance (NDA Required)</MotionButton>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default ProvenanceSection
