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
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

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
      console.log(values)
      // const res = await fetch('/api/inquiry', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // })
      // if (!res.ok) throw new Error('Failed')

      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      let data: { success?: boolean; message?: string; errors?: Record<string, string> } | null = null
      try { data = await res.json() } catch {}
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
      setValues({ fullName: '', email: '', role: '', city: '', country: '', message: '' })
      setErrors({})
    } catch {
      setErrors((prev) => ({ ...prev, form: 'Something went wrong. Please try again.' }))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="relative w-full bg-charcoal text-warm-white py-24 md:py-32 overflow-hidden overflow-x-hidden">
      <motion.div
        className="absolute inset-0"
        // style={{ y, opacity }}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Image 
          src="/man_standing_sideways.png" 
          alt="Warhol silhouette" 
          fill 
          className="object-cover object-left grayscale"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
          className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent"
        />
      </motion.div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="font-serif">
            <motion.h2
              className="font-bold text-[36px] md:text-[44px] lg:text-[56px] leading-tight"
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

        <div aria-live="polite" className="mt-6 text-sm">
          {sent ? <div className="text-emerald-400">Thank you. We have received your request.</div> : null}
          {errors.form ? <div className="text-red-400">{errors.form}</div> : null}
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-10 md:mt-12 max-w-4xl"
          style={{ boxShadow: 'inset 0 0 60px rgba(212,175,d55,0.08)' }}
        >
          <motion.div
            className="rounded-sm border-2 border-gold/90"
            initial={{ opacity: 0, scale: 0.98, boxShadow: '0 0 0 rgba(212,175,55,0)' }}
            whileInView={{
              opacity: 1,
              scale: 1,
              boxShadow: [
                '0 0 0 rgba(212,175,55,0)',
                '0 0 30px rgba(212,175,55,0.2)',
                '0 0 0 rgba(212,175,55,0)',
              ],
            }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8 space-y-6 bg-black/40">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                  <MotionInput id="fullName" name="fullName" value={values.fullName} onChange={handleChange} label="Full Name" type="text" placeholder="Your full name" error={errors.fullName} />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}>
                  <MotionInput id="email" name="email" value={values.email} onChange={handleChange} label="Email Address" type="email" placeholder="you@example.com" error={errors.email} />
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}>
                  <MotionSelect id="role" name="role" value={values.role} onChange={handleChange} label="Collector / Dealer / Representative" error={errors.role}>
                    <option className="bg-black" value="">Select one</option>
                    <option className="bg-black" value="Collector">Collector</option>
                    <option className="bg-black" value="Dealer">Dealer</option>
                    <option className="bg-black" value="Representative">Representative</option>
                  </MotionSelect>
                </motion.div>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                >
                  <MotionInput id="city" name="city" value={values.city} onChange={handleChange} label="City" type="text" placeholder="City" />
                  <MotionInput id="country" name="country" value={values.country} onChange={handleChange} label="Country" type="text" placeholder="Country" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <MotionTextarea id="message" name="message" value={values.message} onChange={handleChange} label="Message" rows={5} placeholder="Tell us about your interest" error={errors.message} />
              </motion.div>

              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              >
                <MotionButton type="submit" variant="primary" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Request Provenance Access'}
                </MotionButton>
              </motion.div>
            </div>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}

export default InquirySection
