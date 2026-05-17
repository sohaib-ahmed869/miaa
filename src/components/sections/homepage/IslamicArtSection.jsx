import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { fadeInUp } from "../../../lib/motion"

import art1 from "../../../assets/images/Homepage/Art in Aus.png"
import art2 from "../../../assets/images/Homepage/Art in Aus-1.png"
import art3 from "../../../assets/images/Homepage/Art in Aus-2.png"
import art4 from "../../../assets/images/Homepage/Art in Aus-3.png"
import art5 from "../../../assets/images/Homepage/Art in Aus-4.png"

// Left side: blue sphere (top), prayer mat (mid-left), horse (bottom-center)
// Right side: metalwork (top), patterned textile (bottom) with credit
const artPieces = [
  { src: art5, alt: "Blue sphere artwork", credit: "", top: "5%", left: "10%", size: "w-28 md:w-36 lg:w-56" },
  { src: art2, alt: "Prayer mat", credit: "", top: "40%", left: "-5%", size: "w-28 md:w-40 lg:w-56" },
  { src: art3, alt: "Green figurine", credit: "", top: "66%", left: "22%", size: "w-24 md:w-36 lg:w-50" },
  { src: art1, alt: "Islamic metalwork", credit: "", top: "8%", right: "0%", size: "w-32 md:w-48 lg:w-60" },
  {
    src: art4,
    alt: "One Thousand and One and Counting",
    credit: "One Thousand and One and Counting (1004 and counting) —",
    creditAuthor: "Abdullah M Syed",
    top: "56%",
    right: "10%",
    size: "w-28 md:w-40 lg:w-56",
  },
]

export default function IslamicArtSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Mobile layout — frames stack above + below the center text (no overlap)
  const mobileTopFrames = artPieces.slice(0, 3)
  const mobileBottomFrames = artPieces.slice(3)

  return (
    <section className="py-16 md:py-24 bg-accent-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Mobile layout — stacked, no overlap */}
        <div className="md:hidden flex flex-col items-center text-center gap-8">
          {/* Top frames row — tall portrait cells, alternating up/down for a wall feel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-3 w-full items-start"
          >
            {mobileTopFrames.map((piece, i) => (
              <div
                key={i}
                className={`aspect-[3/4] overflow-hidden ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                <img
                  src={piece.src}
                  alt={piece.alt}
                  className="w-full h-full object-cover block"
                />
              </div>
            ))}
          </motion.div>

          {/* Center text */}
          <motion.div {...fadeInUp} className="px-2 py-4">
            <h2 className="text-3xl font-medium text-primary tracking-tight leading-snug">
              Celebrating Islamic
              <br />
              Art in Australia
            </h2>
            <p className="mt-5 text-sm text-primary leading-relaxed">
              Across Australia, Islamic art continues to flourish — shaped by
              diverse artists, cultures, and stories. The Museum of Islamic Art
              Australia proudly supports this creative movement, celebrating its
              heritage and future through art, learning, and community.
            </p>
            <div className="mt-6">
              <Link
                to="/islamic-art"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
              >
                Explore
                <ArrowUpRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>

          {/* Bottom frames row — tall portrait cells, staggered down on the second */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3 w-full items-start"
          >
            {mobileBottomFrames.map((piece, i) => (
              <div
                key={i}
                className={`aspect-[3/4] overflow-hidden ${i % 2 === 1 ? "mt-10" : ""}`}
              >
                <img
                  src={piece.src}
                  alt={piece.alt}
                  className="w-full h-full object-cover block"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop layout — original scattered absolute-positioned frames (unchanged) */}
        <div className="hidden md:block">
          <div className="relative md:min-h-[750px] lg:min-h-[900px]">
            {/* Center text */}
            <motion.div
              {...fadeInUp}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-primary tracking-tight leading-snug">
                Celebrating Islamic
                <br />
                Art in Australia
              </h2>
              <p className="mt-5 text-sm md:text-[18px] text-primary leading-relaxed max-w-lg">
                Across Australia, Islamic art continues to flourish — shaped by
                diverse artists, cultures, and stories. The Museum of Islamic Art
                Australia proudly supports this creative movement, celebrating its
                heritage and future through art, learning, and community.
              </p>
              <div className="pointer-events-auto mt-6">
                <Link
                  to="/islamic-art"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-xs font-semibold tracking-wider uppercase rounded hover:bg-secondary-rust transition-colors duration-200"
                >
                  Explore
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>

            {/* Art frames - single teal border, image has its own white mat */}
            {artPieces.map((piece, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * i, ease: "easeOut" }}
                className={`${piece.size} absolute z-0 cursor-pointer`}
                style={{
                  top: piece.top,
                  left: piece.left,
                  right: piece.right,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="border-[4px] border-primary overflow-hidden">
                  <img
                    src={piece.src}
                    alt={piece.alt}
                    className="w-full h-auto block"
                  />
                </div>
                <AnimatePresence>
                  {piece.credit && hoveredIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 text-[9px] text-primary leading-tight text-center italic"
                    >
                      {piece.credit}{" "}
                      <span className="font-medium not-italic">{piece.creditAuthor}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
