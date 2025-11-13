'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MotionButton from '@/components/MotionButton'
import MotionInput from '@/components/MotionInput'
import MotionSelect from '@/components/MotionSelect'
import MotionTextarea from '@/components/MotionTextarea'

function InquirySection() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    role: '',
    city: '',
    country: '',
    message: '',
  })
  const [ndaAgreed, setNdaAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)
  const [showNdaModal, setShowNdaModal] = useState(false)
  const [showToast, setShowToast] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setErrors((er) => ({ ...er, [name]: '' }))
  }

  function validate() {
    const er: Record<string, string> = {}
    if (!values.fullName.trim()) er.fullName = 'Full name is required'
    if (!values.email.trim()) er.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) er.email = 'Enter a valid email address'
    if (!values.role) er.role = 'Please select one'
    if (!values.message || values.message.trim().length < 10) er.message = 'Please add a short message (min 10 chars)'
    if (!ndaAgreed) er.nda = 'You must agree to the NDA terms'
    return er
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(false)
    const er = validate()
    if (Object.keys(er).length) {
      setErrors(er)
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      let data: { success?: boolean; message?: string; errors?: Record<string, string> } | null = null
      try { data = await res.json() } catch { }
      if (!res.ok || !data?.success) {
        if (data?.errors) {
          setErrors((prev) => ({ ...prev, ...data.errors }))
        } else {
          const msg = (data && typeof data.message === 'string' && data.message.trim()) ? data.message : 'Something went wrong. Please try again.'
          setErrors((prev) => ({ ...prev, form: msg }))
        }
        return
      }

      setSent(true)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 4000)
      setValues({ fullName: '', email: '', role: '', city: '', country: '', message: '' })
      setNdaAgreed(false)
      setErrors({})
    } catch {
      setErrors((prev) => ({ ...prev, form: 'Something went wrong. Please try again.' }))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section ref={ref} id="inquiry" className="relative w-full bg-[#111] text-warm-white py-16 md:py-32 overflow-hidden">
      {/* Desaturated portrait background on right with dark radial gradient */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full h-full hidden md:block"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 0.24, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 w-full h-full">
          <div className="col-span-1"></div>
          <div
            className="col-span-2 md:col-span-1 relative"
            style={{
              WebkitMaskImage: 'radial-gradient(160% 160% at 100% 100%, black 58%, transparent 82%)',
              maskImage: 'radial-gradient(160% 160% at 100% 100%, black 58%, transparent 82%)',
              filter: 'grayscale(55%) contrast(110%) brightness(85%)',
            }}
          >
            <Image
              src="/henry.png"
              alt="Warhol silhouette"
              fill
              className="object-cover absolute right-0 top-10 w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
        {/* Dark radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0.3)_0%,rgba(17,17,17,0.9)_70%,rgba(17,17,17,1)_100%)]"></div>
      </motion.div>

      <div className="container relative">
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="status"
            aria-live="polite"
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gold text-charcoal px-4 py-2 rounded-md shadow"
          >
            Request submitted. Check your email for the NDA link.
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="font-serif">
            <motion.h2
              className="font-medium text-[42px] md:text-[48px] leading-[1.1]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Request Private Access
            </motion.h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.p
              className="mt-6 text-warm-white/90 text-[18px] md:text-[19px] leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              Due to the confidential nature of this artwork, full provenance, documentation, and viewing arrangements are available exclusively to verified collectors, dealers, or representatives.
            </motion.p>
            <motion.p
              className="mt-4 text-warm-white/90 text-[18px] md:text-[19px] leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              Please complete the form below to begin the private access process. You will receive a secure NDA for digital signature before viewing the complete provenance record.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Success Message */}
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-md max-w-3xl"
          >
            <h3 className="font-inter text-emerald-400 text-lg font-semibold mb-2">Request Submitted Successfully</h3>
            <p className="font-inter text-white/80 text-[0.95rem] mb-2">Thank you. We have received your request and an email confirmation has been sent.</p>
            <p className="font-inter text-white/60 text-[0.85rem] italic">Provenance access link will be emailed upon NDA execution.</p>
          </motion.div>
        )}

        {/* Form Error */}
        {errors.form && (
          <div className="mt-6 text-red-400 text-sm" role="status" aria-live="polite">{errors.form}</div>
        )}

        {!sent && (
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="mt-10 md:mt-12 max-w-3xl inquiry-form transition-all duration-300 hover:translate-y-[-2px] shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] focus-within:shadow-[0_0_25px_rgba(212,175,55,0.3)] focus-within:ring-1 focus-within:ring-gold/50"
          >
            <div className="p-6 md:p-8 space-y-8 bg-[#1A1A1A] rounded-none border border-line">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                  <MotionInput id="fullName" name="fullName" value={values.fullName} onChange={handleChange} label="Full Name" type="text" placeholder="Your full name" error={errors.fullName} className="rounded-none border-line focus:border-gold text-[16px]" />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}>
                  <MotionInput id="email" name="email" value={values.email} onChange={handleChange} label="Email Address" type="email" placeholder="you@example.com" error={errors.email} className="rounded-none border-line focus:border-gold text-[16px]" />
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                  <MotionSelect id="role" name="role" value={values.role} onChange={handleChange} label="Collector / Dealer / Representative" error={errors.role} className="rounded-none border-line focus:border-gold text-[16px]">
                    <option className="bg-black" value="">Select one</option>
                    <option className="bg-black" value="Collector">Collector</option>
                    <option className="bg-black" value="Dealer">Dealer</option>
                    <option className="bg-black" value="Representative">Representative</option>
                  </MotionSelect>
                </motion.div>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5"
                  variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                >
                  <MotionInput id="city" name="city" value={values.city} onChange={handleChange} label="City" type="text" placeholder="City" className="rounded-none border-line focus:border-gold text-[16px]" />
                  <MotionInput id="country" name="country" value={values.country} onChange={handleChange} label="Country" type="text" placeholder="Country" className="rounded-none border-line focus:border-gold text-[16px]" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                className=""
              >
                <MotionTextarea id="message" name="message" value={values.message} onChange={handleChange} label="Message" rows={5} placeholder="Tell us about your interest" error={errors.message} className="rounded-none border-line focus:border-gold text-[16px]" />
              </motion.div>

              {/* NDA Checkbox */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ndaAgreed}
                    onChange={(e) => {
                      setNdaAgreed(e.target.checked)
                      setErrors((er) => ({ ...er, nda: '' }))
                    }}
                    className="mt-1 w-4 h-4 rounded-none border-line bg-transparent checked:bg-gold focus:ring-gold focus:ring-offset-0"
                  />
                  <span className="font-inter text-[0.9rem] text-white/80">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => setShowNdaModal(true)}
                      className="text-gold hover:text-gold/80 underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                    >
                      NDA terms
                    </button>
                    .
                  </span>
                </label>
                {errors.nda && <p className="text-red-400 text-xs mt-1">{errors.nda}</p>}
              </motion.div>

              {/* Submit Button - 48px height, full width on mobile */}
              <motion.div
                className="pt-5"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              >
                <MotionButton type="submit" variant="primary" disabled={submitting} className="btn-primary w-full md:w-auto">
                  {submitting ? 'Submitting...' : 'Request Provenance Access'}
                </MotionButton>
              </motion.div>
            </div>
          </motion.form>
        )}

        {/* NDA Modal */}
        {showNdaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setShowNdaModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#1A1A1A] border border-gold/30 rounded-md p-8 max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-didot text-2xl text-gold mb-4">Non-Disclosure Agreement</h3>
              <div className="font-inter text-white/80 text-sm space-y-4 mb-6">
                <p>This is a placeholder for the NDA terms and conditions.</p>
                <p>The actual NDA document will be provided here or as a downloadable PDF.</p>
              </div>
              <button
                onClick={() => setShowNdaModal(false)}
                className="font-inter bg-gold text-black px-6 py-2 rounded-md hover:bg-gold/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default InquirySection
