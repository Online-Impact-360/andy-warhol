'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
    initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    className="bg-black text-gold py-10 px-6 md:px-16 border-t border-[#1E1E1E]"
  >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Hank’s Collectibles Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo1.png"
              alt="Hank’s Collectibles"
              width={100}
              height={60}
              className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Online Impact 360 Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo2.png"
              alt="Online Impact 360"
              width={100}
              height={60}
              className="opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Divider line */}
        <div className="w-20 h-px bg-gold opacity-60"></div>

        {/* Text */}
        <p className="text-xs tracking-[0.2em] uppercase font-serif text-warm-white/90 leading-relaxed">
          Presented by <span className="text-gold">Hank’s Collectibles</span> in collaboration with{' '}
          <span className="text-gold">Online Impact 360</span>.
          <br />
          Miami, Florida&nbsp;&nbsp;|&nbsp;&nbsp;Private Sale Inquiry:{' '}
          <a
            href="mailto:brando@hankscollectibles.com"
            className="underline hover:text-warm-white transition-colors duration-300"
          >
            brando@hankscollectibles.com
          </a>
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
