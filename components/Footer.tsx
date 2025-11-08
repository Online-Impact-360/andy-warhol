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
      className="bg-black text-gold py-12 px-6 md:px-16 border-t border-hair"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Logo Lockup - Centered */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Hank's Collectibles Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/logo1.png"
              alt="Hank's Collectibles"
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
        <div className="w-20 h-px bg-gold/60"></div>

        {/* Contact Info */}
        <p className="font-inter text-xs text-warm-white/80 leading-relaxed">
          Miami, Florida&nbsp;&nbsp;|&nbsp;&nbsp;Private Sale Inquiry:{' '}
          <a
            href="mailto:brando@hankscollectibles.com"
            className="text-gold hover:text-gold/80 underline transition-colors duration-300"
          >
            brando@hankscollectibles.com
          </a>
        </p>

        {/* Legal Line - 70% white */}
        <p className="font-inter text-xs text-white/70">
          &copy; Gregory E. Micallef. All rights reserved.
        </p>

        {/* Privacy / NDA Links */}
        <div className="flex items-center gap-4 font-inter text-xs">
          <a
            href="/privacy"
            className="text-white/70 hover:text-gold transition-colors duration-300"
          >
            Privacy
          </a>
          <span className="text-white/30">|</span>
          <a
            href="/nda"
            className="text-white/70 hover:text-gold transition-colors duration-300"
          >
            NDA
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
