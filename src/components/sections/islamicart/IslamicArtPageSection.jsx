import { useRef, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import art1 from "../../../assets/images/Homepage/Art in Aus.png"
import art2 from "../../../assets/images/Homepage/Art in Aus-1.png"
import art3 from "../../../assets/images/Homepage/Art in Aus-2.png"
import art4 from "../../../assets/images/Homepage/Art in Aus-3.png"
import art5 from "../../../assets/images/Homepage/Art in Aus-4.png"

gsap.registerPlugin(ScrollTrigger)

const PARAGRAPHS = [
  "Over the last few decades, diverse Muslim communities across Australia have grown and flourished, they have professionalised, established schools, mosques, community centres and organisations. As part of that extraordinary growth, there has been the steady development of a vibrant, tenacious and dedicated creative community, with many established artists and arts workers contributing to the cultural landscape and thriving arts sector both here and abroad.",
  "In fact, this growth is so significant that we are now able to dedicate a museum, right here in Australia, to Islamic art. This is truly an incredible achievement and indication of the growing cultural significance of Islam in Australia.",
  "The influence of Islamic art on artisans and makers across the globe, is in of itself a great study in cross-cultural exchange, of trade routes and expeditions of the past.",
  "For centuries, Islamic art has been celebrated, even coveted by private collectors and museums alike. However, with that has come the modern day challenge of re/defining and understanding Islamic art in the contemporary era.",
  "In recent years there has been significant traction in the research of modern and contemporary art globally. We endeavor to not only contribute to the broader narrative of Islamic art, right here from Western Sydney, but to become important voices in that conversation.",
  "MIAA is proud to be part of this historical development, and aims to work alongside artists and other creative practitioners to enrich and educate our communities through art and creativity.",
  "As the Artistic Director of MIAA I look forward to the many conversations and collaborations ahead.",
]

const FRAMES = [
  { src: art5, alt: "Blue sphere artwork", credit: "", top: "16%", left: "4%", size: "w-20 md:w-28 lg:w-36" },
  { src: art2, alt: "Prayer mat", credit: "", top: "38%", left: "2%", size: "w-20 md:w-28 lg:w-36" },
  { src: art3, alt: "Green figurine", credit: "", top: "62%", left: "10%", size: "w-20 md:w-28 lg:w-32" },
  { src: art1, alt: "Islamic metalwork", credit: "", top: "18%", right: "5%", size: "w-24 md:w-32 lg:w-40" },
  {
    src: art4,
    alt: "One Thousand and One and Counting",
    credit: "One Thousand and One and Counting (1004 and counting) —",
    creditAuthor: "Abdullah M Syed",
    top: "55%",
    right: "3%",
    size: "w-24 md:w-32 lg:w-40",
  },
]

export default function IslamicArtPageSection() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const wordsRef = useRef([])
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const wordTokens = useMemo(() => {
    const tokens = []
    PARAGRAPHS.forEach((para, pIdx) => {
      const words = para.split(/\s+/)
      words.forEach((w, wIdx) => {
        tokens.push({ word: w, paraIdx: pIdx, wordIdx: wIdx })
      })
    })
    return tokens
  }, [])

  useGSAP(
    () => {
      const wordEls = wordsRef.current.filter(Boolean)
      if (!wordEls.length) return

      gsap.set(wordEls, { opacity: 0.18 })

      const totalScroll = window.innerHeight * 2.5

      const trigger = ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress
          const start = 0.05
          const end = 0.95
          const local = Math.min(1, Math.max(0, (progress - start) / (end - start)))
          const targetCount = Math.round(local * wordEls.length)
          wordEls.forEach((el, idx) => {
            el.style.opacity = idx < targetCount ? "1" : "0.18"
          })
          setScrollProgress(progress)
        },
      })

      return () => {
        trigger.kill()
      }
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative bg-bg-deep">
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden">
        {/* Dotted divider under navbar — matches About hero */}
        <div
          className="absolute top-20 md:top-24 left-4 sm:left-6 md:left-10 lg:left-16 right-4 sm:right-6 md:right-10 lg:right-16 h-[2px] pointer-events-none z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(215,184,147,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "8px 3px",
          }}
        />

        {/* Frames scattered — to the far left and far right */}
        {FRAMES.map((piece, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 + 0.12 * i, ease: [0.25, 0.1, 0.25, 1] }}
            className={`${piece.size} absolute z-10 cursor-pointer`}
            style={{
              top: piece.top,
              left: piece.left,
              right: piece.right,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="border-[3px] md:border-[4px] border-secondary-terra bg-secondary-terra overflow-hidden">
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
                  className="mt-2 text-[9px] text-accent-cream leading-tight text-center italic"
                >
                  {piece.credit}{" "}
                  <span className="font-medium not-italic">{piece.creditAuthor}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Center column — title at top, body text directly below, signature at end */}
        <div className="absolute inset-0 z-20 flex justify-center pt-28 md:pt-32 pb-12 px-4 pointer-events-none">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl text-center flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl lg:text-[2.4rem] font-medium text-accent-cream tracking-tight leading-tight mb-6"
            >
              Islamic Art in Australia
            </motion.h1>

            <div className="text-[14px] md:text-[15px] lg:text-base text-accent-cream leading-[1.7] tracking-wide space-y-3 md:space-y-4 text-left md:text-justify">
              {PARAGRAPHS.map((para, pIdx) => {
                const words = para.split(/\s+/)
                return (
                  <p key={pIdx}>
                    {words.map((w, wIdx) => {
                      const flatIdx = wordTokens.findIndex(
                        (t) => t.paraIdx === pIdx && t.wordIdx === wIdx
                      )
                      return (
                        <span
                          key={`${pIdx}-${wIdx}`}
                          ref={(el) => (wordsRef.current[flatIdx] = el)}
                          className="transition-opacity duration-200"
                          style={{ opacity: 0.18 }}
                        >
                          {w}{" "}
                        </span>
                      )
                    })}
                  </p>
                )
              })}

              <p className="font-display italic text-accent-wheat text-2xl md:text-3xl tracking-wide pt-3 text-center">
                Dr Nur Shkembi OAM
              </p>
            </div>
          </div>
        </div>

        {/* Custom scroll indicator — right edge */}
        <div className="hidden md:block absolute right-4 top-32 bottom-16 w-[2px] bg-accent-wheat/15 z-30 pointer-events-none">
          <div
            className="absolute left-0 w-full bg-accent-wheat/80 transition-[height,top] duration-100 ease-out rounded-full"
            style={{
              height: "20%",
              top: `${scrollProgress * 80}%`,
            }}
          />
        </div>
      </div>

      {/* Acknowledgement strip — appears after the pinned section ends */}
      <div className="bg-bg-deep py-12 md:py-16 px-6 md:px-10 lg:px-16">
        <p className="max-w-3xl mx-auto text-center text-xs md:text-[13px] text-accent-cream/70 leading-relaxed italic">
          MIAA is proudly located on beautiful Dharug country in Granville,
          Western Sydney. The Museum of Islamic Art Australia (MIAA)
          respectfully acknowledges the Burramattagal people of the Dharug
          Nation as the Traditional Owners of the land on which the museum will
          be located. We pay our respects to Elders past, present and emerging.
          Sovereignty has never been ceded.
        </p>
      </div>
    </section>
  )
}
