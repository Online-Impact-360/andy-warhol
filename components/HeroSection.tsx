'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import MotionButton from "@/components/MotionButton"

function HeroSection() {
    return (
        <section className="h-screen bg-black overflow-x-hidden max-h-[1500px]">
            <div className="max-w-[1440px] mx-auto relative h-full overflow-hidden p-2" >
                <div className="absolute top-[5%] left-[5%] bottom-[5%] w-[90%] md:w-[75%] overflow-hidden">
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
                        className="relative w-full h-full image-wrapper"
                    >
                        <Image
                            src="/marlon.png"
                            alt="Brando silkscreen background"
                            fill
                            priority
                            className="object-cover object-top img"
                        />
                         <div className="yellow-overlay"></div>
                    </motion.div>
                </div>

                <div className="relative z-20 h-full w-full flex flex-col items-center  justify-center md:justify-end lg:pb-20 text-center px-10">
                    <motion.h1
                        className="text-warm-white text-[30px] md:text-[40px] lg:text-[50px] font-serif font-bold tracking-normal"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Hidden for Decades. Now Revealed
                    </motion.h1>
                    <motion.p
                        className="mt-3 md:mt-6 text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-warm-white"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                        A rare private silkscreen of Marlon Brando emerging from decades of obscurity in the hands of Warhol’s trusted inner circle.
                    </motion.p>
                    <motion.div
                        className="mt-8 flex md:items-center gap-2 md:gap-4 flex-col md:flex-row"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <MotionButton variant="primary">Request Private Access</MotionButton>
                        <MotionButton variant="ghost">View the Story</MotionButton>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute right-px md:-right-[10%] lg:right-px bottom-[5%] w-[200px] h-[300px] lg:h-[450px] md:w-[460px] overflow-hidden opacity-75 md:opacity-90"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                >
                    <Image
                        src="/man_standing_sideways.png"
                        alt="Curator portrait"
                        fill
                        className="object-cover shadow-[0_0_30px_rgba(212,175,55,0.25)]"
                        sizes="460px"
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection