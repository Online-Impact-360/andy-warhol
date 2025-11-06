'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MotionButton from '@/components/MotionButton'
function ProvenanceSection() {
    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const yBg = useTransform(scrollYProgress, [0, 1], [15, -40])
    const timelineY = useTransform(scrollYProgress, [0, 1], [50, -50]);


    return (
        <section
            ref={ref}
            className="relative w-full text-[#F2F2F2] bg-black py-24 md:py-32 overflow-hidden"
        >
            {/* Background document with blur and dark overlay */}
            <div
                className="absolute inset-0 opacity-35"
                style={{
                    backgroundImage: 'url(/doc-background.jpg)',
                    backgroundPosition: 'right top',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(1px)',
                }}
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="max-w-[1440px] mx-auto relative z-10">
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
                            <motion.div
                                className="overflow-hidden"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <h2 className="font-didot text-[2.8rem] leading-snug uppercase tracking-[0.05em] text-offwhite">THE PROVENANCE</h2>
                            </motion.div>

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
                                    letterSpacing: '0.04em'
                                }}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                            >
                                <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    Acquired directly from Andy Warhol's legal counsel, Si Litvinoff, this silkscreen of Marlon Brando has remained in private hands for over four decades.
                                </motion.p>
                                <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    Accompanied by notarized documentation, payment records, and personal correspondence between Warhol and Litvinoff, the chain of custody is meticulously preserved and authenticated.
                                </motion.p>
                                <motion.p className="text-sm" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    <span className="text-gold">—</span> Full provenance documentation available to qualified collectors under a signed Non-Disclosure Agreement.
                                </motion.p>
                            </motion.div>

                            <motion.div style={{ y: timelineY }} className="mt-12 pe-6   md:mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
                                <div className="relative w-full h-px bg-gradient-to-r from-gold via-gold/80 to-gold/30">
                                    {/* 1970s */}
                                    <div className="absolute left-1/5 top-4 -mt-1 transform -translate-y-1/2">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
                                            <span className="text-xs tracking-wider" style={{ fontVariant: 'small-caps' }}>
                                                1970s
                                            </span>
                                        </div>
                                    </div>
                                    {/* 1980s */}
                                    <div className="absolute left-4/7 top-4 -mt-1 transform -translate-x-1/2 -translate-y-1/2">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
                                            <span className="text-xs tracking-wider" style={{ fontVariant: 'small-caps' }}>
                                                1980s
                                            </span>
                                        </div>
                                    </div>
                                    {/* Present */}
                                    <div className="absolute -right-6  top-4 -mt-1 transform -translate-y-1/2">
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
                                            <span className="text-xs tracking-wider" style={{ fontVariant: 'small-caps' }}>
                                                Present
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

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
