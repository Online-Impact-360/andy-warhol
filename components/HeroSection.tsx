'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import MotionButton from "@/components/MotionButton"

function HeroSection() {
    return (
        <section className="h-screen bg-charcoal overflow-x-hidden max-h-[1500px]">
            <div className="wrap-wide mx-auto relative h-full overflow-hidden px-2 md:px-4 lg:px-6">
                {/* Brando Silkscreen with Duotone */}
                <div className="absolute top-[5%] left-[5%] bottom-[5%] w-[90%] md:w-[75%] overflow-hidden">
                    <motion.div
                        initial={{ scale: 1, x: "0%", y: "0%" }}
                        animate={{
                            scale: [1, 1.05],
                            x: ["0%", "3%"],
                            y: ["0%", "3%"],
                        }}
                        transition={{
                            duration: 10,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                        className="relative w-full h-full transform-gpu will-change-transform"
                    >
                        <Image
                            src="/marlon-min.jpg"
                            alt="Brando silkscreen background"
                            fill
                            priority
                            className="object-cover object-top select-none"
                            sizes="(min-width: 1024px) 75vw, 90vw"
                            quality={100}
                        />
                        {/* Duotone overlay: #CDAE5A at 62% multiply */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                  'linear-gradient(135deg, rgba(0,0,0,0.85) 10%, rgba(15,15,15,0.8) 40%, rgba(183,149,75,0.55) 85%)',
                                mixBlendMode: 'multiply',
                                opacity: 0.9,
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
                <div className="relative z-20 h-full w-full flex flex-col items-center justify-end pb-16 md:pb-14 lg:pb-20 text-center px-6 pt-28">
                    <motion.h1
                        className="hero-h1 uppercase text-offwhite"
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
                        A rare private silkscreen of Marlon Brando emerging from decades of obscurity in the hands of Warhol&apos;s trusted inner circle.
                    </motion.p>

                    {/* CTAs - Side by side, 24px gap, raised 32px */}
                    <motion.div
                        className="flex flex-col lg:flex-row items-center gap-4 md:gap-5 lg:gap-6 mt-6"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <MotionButton variant="primary" href="#inquiry">REQUEST PRIVATE ACCESS</MotionButton>
                        <MotionButton variant="secondary" href="#narrative">VIEW THE STORY</MotionButton>
                    </motion.div>
                </div>

                {/* Right portrait with masked fade into background */}
                <motion.div
                    className="absolute right-0 bottom-[5%] w-[400px] h-[300px] md:h-[600px] overflow-hidden"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                    style={{
                        WebkitMaskImage: 'radial-gradient(140% 140% at 100% 100%, black 62%, transparent 92%)',
                        maskImage: 'radial-gradient(140% 140% at 100% 100%, black 62%, transparent 92%)',
                    }}
                >
                    <Image
                        src="/henry.png"
                        alt="Curator portrait"
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="460px"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection