"use client"

import React, { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type GalleryItem = {
  src: string
  alt: string
  caption: string
}

const defaultItems: GalleryItem[] = [
  {
    src: "/man-black-hood-looking-down.jpg",
    alt: "Canvas texture under angled light",
    caption: "Surface detail under raking light, highlighting texture and layering.",
  },
  {
    src: "/man_standing_sideways.png",
    alt: "Signature close-up",
    caption: "Authenticated signature in pencil, lower right.",
  },
  {
    src: "/man-black-hood-looking-down.jpg",
    alt: "Edges of stretcher bars or framing detail",
    caption: "Original silkscreen on canvas, circa 1970s.",
  },
  {
    src: "/man_standing_sideways.png",
    alt: "Canvas weave and pigment variation",
    caption: "Canvas weave and pigment variation under magnification.",
  },
  {
    src: "/man-black-hood-looking-down.jpg",
    alt: "Tonal layering and ink saturation",
    caption: "Ink saturation gradients revealing print layering.",
  },
  {
    src: "/man_standing_sideways.png",
    alt: "Edge wrap and frame junction",
    caption: "Edge wrap over stretcher bars with visible frame junction.",
  },
]

export default function CloserLookSection({
  title = "A Closer Look",
  items = defaultItems,
}: {
  title?: string
  items?: GalleryItem[]
}) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const fullyInViewRef = useRef<boolean>(false)
  const isDownRef = useRef<boolean>(false)
  const startXRef = useRef<number>(0)
  const startLeftRef = useRef<number>(0)

  useEffect(() => {
    const el = scrollerRef.current
    const sectionEl = sectionRef.current
    if (!el || !sectionEl) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        fullyInViewRef.current = (entry?.intersectionRatio ?? 0) >= 0.1
      },
      { threshold: [0.1] }
    )
    io.observe(el)

    const onWheel = (e: WheelEvent) => {
      if (!el || !sectionEl) return
      if (!fullyInViewRef.current) return // let page scroll until the whole section is in view

      const mostlyVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX)
      if (!mostlyVertical) return

      const atStart = el.scrollLeft <= 0
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
      const goingLeft = e.deltaY < 0
      const goingRight = e.deltaY > 0

      // Allow page scroll when at the edges; otherwise translate vertical to horizontal
      const shouldIntercept = (!goingLeft || !atStart) && (!goingRight || !atEnd)
      if (shouldIntercept) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false, capture: true })
    const onKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement !== el) return
      if (e.key === "ArrowRight") {
        e.preventDefault()
        el.scrollBy({ left: el.clientWidth * 0.9, behavior: "smooth" })
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        el.scrollBy({ left: -el.clientWidth * 0.9, behavior: "smooth" })
      }
    }
    el.addEventListener("keydown", onKeyDown)
    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return
      isDownRef.current = true
      startXRef.current = e.clientX
      startLeftRef.current = el.scrollLeft
      el.setPointerCapture(e.pointerId)
    }
    const onPointerMove = (e: PointerEvent) => {
      if (!isDownRef.current) return
      e.preventDefault()
      const dx = e.clientX - startXRef.current
      el.scrollLeft = startLeftRef.current - dx
    }
    const onPointerUp = () => {
      isDownRef.current = false
    }
    el.addEventListener("pointerdown", onPointerDown, { passive: true })
    el.addEventListener("pointermove", onPointerMove, { passive: false })
    el.addEventListener("pointerup", onPointerUp, { passive: true })
    el.addEventListener("pointerleave", onPointerUp, { passive: true })
    return () => {
      el.removeEventListener("wheel", onWheel, true)
      el.removeEventListener("keydown", onKeyDown)
      el.removeEventListener("pointerdown", onPointerDown)
      el.removeEventListener("pointermove", onPointerMove)
      el.removeEventListener("pointerup", onPointerUp)
      el.removeEventListener("pointerleave", onPointerUp)
      io.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-black text-warm-white overflow-hidden py-28 md:py-36 lg:py-40">
      <div
        ref={scrollerRef}
        role="region"
        aria-label="A Closer Look gallery"
        tabIndex={0}
        className="relative h-[72svh] md:h-[78svh] lg:h-[82svh] overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
      >
        <div className="flex h-full snap-x snap-mandatory">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="min-w-screen snap-start h-full"
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="container max-w-[1440px] mx-auto h-full">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0.85, scale: 0.995 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ amount: 0.6 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={i === 0}
                    className="object-cover object-center rounded-sm"
                  />
                  {i === 0 ? (
                    <motion.div
                      className="absolute left-4 md:left-6 top-4 md:top-6 font-serif text-warm-white/90"
                      initial={{ opacity: 0, y: -8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <h2 className="font-bold text-[28px] md:text-[40px] lg:text-[52px] leading-tight">{title}</h2>
                      <div className="mt-2 h-px w-32 md:w-40 bg-linear-to-r from-gold to-transparent" />
                    </motion.div>
                  ) : null}
                  <motion.p
                    className="absolute left-4 md:left-6 bottom-4 md:bottom-6 text-warm-white/95 text-[16px] md:text-[18px] lg:text-[19px] leading-relaxed bg-black/35 px-3 py-2 rounded-sm ring-1 ring-white/10 max-w-[90%] md:max-w-[70%]"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.6 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {item.caption}
                  </motion.p>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.6) 6%, rgba(10,10,10,0) 14%, rgba(10,10,10,0) 86%, rgba(10,10,10,0.6) 94%, rgba(10,10,10,0.9) 100%)",
          }}
        />
      </div>
    </section>
  )
}
