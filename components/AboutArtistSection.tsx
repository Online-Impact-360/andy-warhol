'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import MotionButton from './MotionButton';

export default function AboutArtistSection() {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-950 via-stone-900 to-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center px-8 py-16" style={{ background: 'linear-gradient(to bottom, #241515, #1A0F0F)' }}>
        {/* Background Image Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/man_standing_sideways.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'top'
          }}
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        
        <div className="relative z-10 max-w-6xl w-full">
          <div className="text-center mb-20">
            <motion.h2 
              className="font-didot text-[2.8rem] tracking-tight mb-3 text-offwhite"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              ANDY WARHOL
            </motion.h2>
            <motion.p 
              className="font-inter text-[0.9rem] tracking-[0.12em] uppercase text-offwhite/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              The Story of an Icon
            </motion.p>
          </div>
        </div>
      </div>

      {/* Marlon Section */}
      <div className="relative bg-black/60 backdrop-blur-sm py-20 px-8">
        <div className="max-w-content mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <motion.h2 
                className="text-6xl md:text-7xl font-serif font-bold mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                MARLON
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl font-light tracking-wide mb-3"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                style={{ transformOrigin: 'left' }}
              >
                SILKSCREEN ON CANVAS, 1966
              </motion.p>
              {/* Hairline rule: 1px height, 72px width */}
              <div className="h-px w-[72px] bg-hair mb-8" />
              <motion.p 
                className="text-[1.05rem] leading-[1.75] text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                Hailing from Warhol&apos;s famed series depicting Hollywood legend Marlon Brando, this iconic artwork embodies the allure of 1960s celebrity and the cool detachment of Warhol&apos;s Pop Art era.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-linear-to-br from-yellow-500/20 to-black/40 rounded-lg transform rotate-1"
                  initial={{ rotate: 1, scale: 0.95 }}
                  whileInView={{ rotate: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                />
                <motion.div
                  initial={{ scale: 0.9, rotate: -2 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.25 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                >
                  <Image
                    src="/man-black-hood-looking-down.jpg"
                    width={600}   
                    height={600}
                    alt="Marlon Brando Pop Art"
                    className="relative rounded-lg shadow-2xl border-8 border-white/90 w-full max-w-md"
                    style={{
                      filter: 'contrast(1.2) saturate(1.3)'
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative py-32 px-8 bg-linear-to-b from-black/60 to-stone-900">
        <div className="max-w-content mx-auto">
          <motion.h2 
            className="text-6xl md:text-7xl font-serif font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              style={{ display: 'inline-block' }}
              className='text-3xl md:text-4xl'
            >
              ABOUT
            </motion.span>
            <br/>
            <motion.span 
              className="text-amber-500"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              style={{ display: 'inline-block' }}
            >
              ANDY WARHOL
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl leading-relaxed text-gray-300 mb-12 text-center max-w-[1000px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            Andy Warhol (1928–1987) remains one of the most influential figures in contemporary art, revolutionizing the art world with his provocutative and groundbreaking works. Click below to delve into the compelling biography of this artistic genius.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className='flex items-center justify-center'
          >
            <MotionButton variant="secondary" className="h-14 tracking-[0.04em]">VIEW BIOGRAPHY</MotionButton>
          </motion.div>
        </div>
      </div>
    </div>
  );
}