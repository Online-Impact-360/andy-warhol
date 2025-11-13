'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const articles = [
  {
    title: "Warhol silkscreen of Brando may snag $20 million: Christie’s",
    date: "Sep 5, 2012",
    source: "Reuters",
    snippet:
      "An Andy Warhol silkscreen of Marlon Brando, one of the late pop artist’s most famous Hollywood portraits, is expected to sell for $20 million when it hits the auction block.",
    link: "https://www.reuters.com/article/lifestyle/warhol-silkscreen-of-brando-may-snag-20-million-christies-idUSBRE8840WJ/",
    image: "/articles-imgs/reuters.jpg",
  },
  {
    title:
      "Two Warhols fetch $153 million to lead Christie’s record-setting art auction",
    date: "Nov 13, 2014",
    source: "Reuters",
    snippet:
      "Two Andy Warhol paintings helped push Christie’s to a record-setting $853 million auction night, underscoring the market’s hunger for Pop Art icons.",
    link: "https://www.reuters.com/article/lifestyle/two-warhols-fetch-153-million-christies-record-setting-art-auction-idUSKCN0IX09O/",
    image: "/articles-imgs/reuters2.jpg",
  },
  {
    title:
      "Andy Warhol’s iconic Marilyn Monroe portrait sells for record $195 million",
    date: "May 10, 2022",
    source: "The Guardian",
    snippet:
      "A 1964 portrait of Marilyn Monroe by Andy Warhol has become the most expensive 20th-century artwork ever sold at auction.",
    link: "https://www.theguardian.com/artanddesign/2022/may/09/andy-warhol-marilyn-monroe-portrait-auction",
    image: "/articles-imgs/guardian.avif",
  },
  {
    title:
      "Andy Warhol’s painting of Trump Tower that Donald Trump rejected in the ‘80s up for auction",
    date: "Nov 19, 2024",
    source: "NY Post",
    snippet:
      "An early Warhol painting of Trump Tower, once turned down by Donald Trump, returns to auction—proof of Warhol’s continued cultural magnetism.",
    link: "https://nypost.com/2024/11/19/us-news/andy-warhols-painting-of-trump-tower-that-donald-trump-rejected-in-the-80s-up-for-auction/",
    image: "/articles-imgs/nyPost.webp",
  },
  {
    title: "Andy Warhol’s Most Expensive Paintings – Andipa Gallery",
    date: "Jan 8, 2024",
    source: "Andipa Gallery",
    snippet:
      "A curated list of Warhol’s top-selling works, highlighting the enduring demand and record-breaking values in the artist’s market.",
    link: "https://andipagallery.com/blog/142-andy-warhol-s-most-expensive-paintings-as-sold-at-auction/",
    image: "/articles-imgs/mariln.webp",
  },
]

const MarketMomentSection = () => {
  return (
    <section id="press" className="bg-bg-soft text-white pt-28 md:pt-32 pb-20 px-6 md:px-16">
      <div className="max-w-page mx-auto">
        {/* Accent line */}
        <div className="w-16 h-[2px] bg-gold mb-4"></div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-warm-white mb-2">
          Market Moment & Press Highlights
        </h2>
        <p className="text-warm-white/80 text-sm mb-12">
          Selected news demonstrating Warhol demand and market velocity.
        </p>

        {/* Cards Grid - 1-up mobile, 2-up tablet, 3-up desktop */}
        <div className="grid gap-13 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#1A1A1A] overflow-hidden transition-all duration-300 hover:translate-y-[-2px] shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Gold hairline at top */}
              <div className="h-px bg-gold"></div>

              {/* Image with 16:10 aspect ratio, warm grading and gradient overlay */}
              <div className="relative w-full aspect-16/10 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
                {/* Uniform warm grade overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[rgba(212,175,55,0.10)] mix-blend-overlay"></div>
                {/* Dark gradient on bottom 40% */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent from-60% to-black/80"></div>
              </div>

              <div className="p-6 flex flex-col grow">
                {/* Headline in Didot 18px with hover underline */}
                <h3 className="text-[1.125rem] leading-tight text-warm-white mb-3 line-clamp-3 group-hover:underline underline-offset-4 decoration-gold">
                  {item.title}
                </h3>
                
                {/* Source/date in Inter 0.85rem 70% white */}
                <p className="text-[0.85rem] text-white/80 mb-4">
                  {item.source} · {item.date}
                </p>
                
                {/* Snippet */}
                <p className="text-[0.9rem] text-white/80 mb-4 leading-relaxed line-clamp-3 grow">
                  {item.snippet}
                </p>
                
                {/* Read more link */}
                <span className="text-gold text-[0.85rem] group-hover:text-warm-white transition-colors">
                  Read full article →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-warm-white/80 text-sm mt-16! leading-relaxed">
          Selected press coverage demonstrating sustained market demand for
          Warhol&apos;s Brando series.
        </p>
      </div>
    </section>
  )
}

export default MarketMomentSection
