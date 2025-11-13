'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import MotionButton from '@/components/MotionButton'
function ProvenanceSection() {
    const ref = useRef<HTMLDivElement | null>(null)
    // const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    // const yBg = useTransform(scrollYProgress, [0, 1], [15, -40])
    // const timelineY = useTransform(scrollYProgress, [0, 1], [50, -50]);


    return (
        <section
            ref={ref}
            id="provenance"
            className="relative w-full text-[#F2F2F2] bg-black py-24 md:py-32 overflow-hidden section"
        >
            {/* Background document with blur and dark overlay */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: 'url(/doc-background.jpg)',
                    backgroundPosition: 'right top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(1px)',
                }}
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="max-w-content mx-auto relative z-10">
                <div className="container">
                    <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
                        <motion.div
                            className="col-span-12 items-start md:col-span-8 lg:col-span-6"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            {/* Title: THE PROVENANCE */}
                            <motion.h2
                                className="overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <span className="text-[2.8rem] leading-snug uppercase tracking-[0.05em] text-offwhite">THE PROVENANCE</span>
                            </motion.h2>

                            <motion.div
                                className="mt-5 h-px w-48 relative overflow-hidden"
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileInView={{ scaleX: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                style={{ transformOrigin: 'left center' }}
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-[#d4af37] via-[#f5e28c] to-transparent" />
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent opacity-20 blur-[1px]" />
                            </motion.div>


                            <motion.div
                                className="mt-8 space-y-6   "
                                style={{
                                    color: '#EAE6DF',
                                    lineHeight: '1.8',
                                    letterSpacing: '0.04em',
                                    maxWidth: '65ch'
                                }}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                            >
                                <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    Acquired directly from Andy Warhol&apos;s legal counsel, Si Litvinoff, this silkscreen of Marlon Brando has remained in private hands for over four decades.
                                </motion.p>
                                <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    Accompanied by notarized documentation, payment records, and personal correspondence between Warhol and Litvinoff, the chain of custody is meticulously preserved and authenticated.
                                </motion.p>
                                <motion.p className="text-sm" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    <span className="text-gold">—</span> Full provenance documentation available to qualified collectors under a signed Non-Disclosure Agreement.
                                </motion.p>
                            </motion.div>

                            <div className="timeline mt-12 pe-6 md:mt-16">
                                <div className="flex items-center gap-4">
                                    <div className="dot"></div>
                                    <span className="text-xs tracking-wider small-caps">1970s</span>
                                </div>
                                <div className="rule"></div>
                                <div className="flex items-center gap-4">
                                    <div className="dot"></div>
                                    <span className="text-xs tracking-wider small-caps">1980s</span>
                                </div>
                                <div className="rule"></div>
                                <div className="flex items-center gap-4">
                                    <div className="dot"></div>
                                    <span className="text-xs tracking-wider small-caps">Present</span>
                                </div>
                            </div>

                            <motion.div className="mt-10 flex justify-start " viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}>
                                <MotionButton variant="primary" className=" ">REQUEST FULL PROVENANCE (NDA REQUIRED)</MotionButton>
                            </motion.div>


                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProvenanceSection
