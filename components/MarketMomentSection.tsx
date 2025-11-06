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
    <section className="bg-[#121212] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Accent line */}
        <div className="w-16 h-[2px] bg-gold mb-4"></div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-warm-white mb-12">
          Market Moment & Press Highlights
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
          {articles.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#121212] hover:bg-[#1E1E1E] border border-[#1E1E1E] rounded-2xl transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-56 w-full relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-white/80 mb-2">
                  {item.source} · {item.date}
                </p>
                <p className="text-sm text-warm-white/70 mb-4 leading-relaxed">
                  {item.snippet}
                </p>
                <span className="text-gold text-sm underline underline-offset-4 group-hover:text-warm-white transition-colors">
                  Read full article →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-warm-white/70 text-sm mt-16 max-w-3xl mx-auto leading-relaxed">
          Selected press coverage demonstrating sustained market demand for
          Warhol’s Brando series.
        </p>
      </div>
    </section>
  )
}

export default MarketMomentSection
