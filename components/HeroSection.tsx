'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import MotionButton from "@/components/MotionButton"

function HeroSection() {
    return (
        <section className="h-screen bg-black overflow-x-hidden">
            <div className="max-w-[1440px] mx-auto relative h-full overflow-hidden" >
                <div className="absolute top-[5%] left-[5%] bottom-[5%] w-[75%] overflow-hidden">
                    <motion.div
                        initial={{ scale: 1, x: "0%", y: "0%" }}
                        animate={{
                            scale: [1, 1.1],  // zoom in halfway, then Framer will mirror back
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
                            src="/man-black-hood-looking-down.jpg"
                            alt="Brando silkscreen background"
                            fill
                            priority
                            className="object-cover object-center grayscale"
                        />
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)",
                    }}
                />

                <div className="relative z-20 h-full w-full flex flex-col items-center justify-end pb-24 text-center">
                    <motion.h1
                        className="text-warm-white font-serif font-bold tracking-normal"
                        style={{ fontSize: "68px" }}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Hidden for Decades. Now Revealed
                    </motion.h1>
                    <motion.p
                        className="mt-6 max-w-3xl mx-auto text-warm-white"
                        style={{ fontSize: "22px" }}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        A rare private silkscreen of Marlon Brando emerging from decades of obscurity in the hands of Warhol’s trusted inner circle.
                    </motion.p>
                    <motion.div
                        className="mt-8 flex items-center gap-4"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <MotionButton variant="primary">Request Private Access</MotionButton>
                        <MotionButton variant="ghost">View the Story</MotionButton>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute right-[3%] top-[20%] bottom-0 w-[460px] overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                >
                    <Image
                        src="/man_standing_sideways.png"
                        alt="Curator portrait"
                        fill
                        className="object-cover ring-1 ring-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                        sizes="460px"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection