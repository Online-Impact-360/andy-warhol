'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import MotionButton from "@/components/MotionButton"

function HeroSection() {
    return (
        <section className="h-screen bg-charcoal overflow-x-hidden max-h-[1500px]">
            <div className="max-w-[1440px] mx-auto relative h-full overflow-hidden p-2">
                {/* Brando Silkscreen with Duotone */}
                <div className="absolute top-[5%] left-[5%] bottom-[5%] w-[90%] md:w-[75%] overflow-hidden">
                    <motion.div
                        initial={{ scale: 1, x: "0%", y: "0%" }}
                        animate={{
                            scale: [1, 1.1],
                            x: ["0%", "3%"],
                            y: ["0%", "3%"],
                        }}
                        transition={{
                            duration: 10,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src="/marlon1.jpg"
                            alt="Brando silkscreen background"
                            fill
                            priority
                            className="object-cover object-top"
                            style={{
                                filter: 'grayscale(100%) contrast(1.1)',
                            }}
                        />
                        {/* Duotone overlay: #CDAE5A at 62% multiply */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundColor: '#CDAE5A',
                                mixBlendMode: 'multiply',
                                opacity: 0.62,
                            }}
                        />
                        {/* Vignette for depth */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                boxShadow: 'inset 0 0 1500px rgba(0, 0, 0, 0.9)',
                            }}
                        />
                    </motion.div>
                </div>

                {/* Content - Positioned at bottom third */}
                <div className="relative z-20 h-full w-full flex flex-col items-center justify-end pb-[15%] md:pb-[12%] text-center px-10">
                    <motion.h1
                        className="font-didot leading-[1.05] uppercase tracking-[0.05em] text-offwhite font-medium "
                        style={{
                            fontSize: 'clamp(2rem, 8vw, 4.5rem)' // 32px min, scales, 72px max
                        }}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Hidden for Decades. Now Revealed
                    </motion.h1>

                    <motion.p
                        className="mt-6 font-inter text-[18px] leading-relaxed max-w-3xl mx-auto text-offwhite/90"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        A rare private silkscreen of Marlon Brando emerging from decades of obscurity in the hands of Warhol's trusted inner circle.
                    </motion.p>

                    {/* CTAs - Side by side, 24px gap, raised 32px */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 md:-mb-8"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <MotionButton variant="primary">REQUEST PRIVATE ACCESS</MotionButton>
                        <MotionButton variant="secondary">VIEW THE STORY</MotionButton>
                    </motion.div>
                </div>

                {/* Right portrait with Vignette */}
                <motion.div
                    className="absolute right-px md:-right-[10%] lg:right-px bottom-[5%] w-[400px] h-[600px]  overflow-hidden opacity-75 md:opacity-100"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                >
                    <Image
                        src="/man_standing_sideways.png"
                        alt="Curator portrait"
                        fill
                        className="object-cover"
                        sizes="460px"
                    />
                    {/* Radial gradient vignette from right edge */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 100% 50%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 70%)',
                        }}
                    />
                    {/* Additional vignette 20% */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            boxShadow: 'inset 0 0 120px rgba(0,0,0,0.2)',
                        }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection