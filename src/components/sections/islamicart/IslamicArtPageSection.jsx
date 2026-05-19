import { useRef, useMemo, useState, useEffect, forwardRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
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
  { src: art5, alt: "Blue sphere artwork", credit: "Luminous Geometry \u2014", creditAuthor: "Zarah Hussain", top: "16%", left: "12%", size: "w-20 md:w-28 lg:w-36 3xl:w-[10vw]", parallaxFactor: 1.2 },
  { src: art2, alt: "Prayer mat", credit: "Sacred Weave \u2014", creditAuthor: "Nada Rawhi Debs", top: "38%", left: "10%", size: "w-20 md:w-28 lg:w-36 3xl:w-[10vw]", parallaxFactor: 0.8 },
  { src: art3, alt: "Green figurine", credit: "The Green Horse \u2014", creditAuthor: "Hossein Valamanesh", top: "62%", left: "16%", size: "w-20 md:w-28 lg:w-32 3xl:w-[9vw]", parallaxFactor: 1.5 },
  { src: art1, alt: "Islamic metalwork", credit: "Patterns in Metal \u2014", creditAuthor: "Aisha Khalid", top: "18%", right: "17%", size: "w-24 md:w-32 lg:w-40 3xl:w-[12vw]", parallaxFactor: 1.0 },
  { src: art4, alt: "One Thousand and One and Counting", credit: "One Thousand and One and Counting (1004 and counting) \u2014", creditAuthor: "Abdullah M Syed", top: "55%", right: "9%", size: "w-28 md:w-36 lg:w-48 3xl:w-[13vw]", parallaxFactor: 1.3 },
]

const ArtFrame = forwardRef(function ArtFrame(
  { piece, isHovered, onHover, onLeave, springX, springY },
  ref,
) {
  const factor = piece.parallaxFactor
  const mx = useTransform(springX, (v) => -v * factor * 20)
  const my = useTransform(springY, (v) => -v * factor * 10)

  return (
    <div
      ref={ref}
      className={`${piece.size} absolute z-10 cursor-pointer hidden md:block`}
      style={{
        top: piece.top,
        left: piece.left,
        right: piece.right,
      }}
    >
      <motion.div
        style={{ x: mx, y: my }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="border-[4px] border-secondary-terra bg-secondary-terra overflow-hidden">
          <img
            src={piece.src}
            alt={piece.alt}
            className="w-full h-auto block scale-[1.15]"
          />
        </div>

        <AnimatePresence>
          {isHovered && piece.credit && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="mt-2.5 text-[0.5625rem] lg:text-[0.6875rem] 3xl:text-sm text-accent-cream leading-snug text-center italic"
            >
              {piece.credit}{" "}
              <span className="font-medium not-italic">{piece.creditAuthor}</span>
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
})

export default function IslamicArtPageSection() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const wordsRef = useRef([])
  const frameRefs = useRef([])
  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const indicatorRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

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
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!wordEls.length || !track || !viewport) return

      gsap.set(wordEls, { opacity: 0.18 })

      // Frames entrance — staggered rise from below
      const frames = frameRefs.current.filter(Boolean)
      if (frames.length) {
        gsap.set(frames, { y: 80, opacity: 0 })
        gsap.to(frames, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.3,
        })
      }

      const getOverflow = () => Math.max(0, track.scrollHeight - viewport.clientHeight)

      gsap.set(track, { y: 0 })

      // Scrubbed tween for text translation (like Director Message)
      gsap.to(track, {
        y: () => -getOverflow(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.5}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress
            // Word highlighting
            const start = 0.02
            const end = 0.95
            const local = Math.min(1, Math.max(0, (progress - start) / (end - start)))
            const targetCount = Math.round(local * wordEls.length)
            wordEls.forEach((el, idx) => {
              el.style.opacity = idx < targetCount ? "1" : "0.18"
            })
            // Scroll indicator
            if (indicatorRef.current) {
              indicatorRef.current.style.top = `${progress * 80}%`
            }
          },
        },
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative bg-bg-deep pt-14 md:pt-20">
      <div ref={pinRef} className="relative w-full h-screen" style={{ clipPath: "inset(0 0 0 0)" }}>
        {/* Frames — mouse-tracking parallax + hover credits */}
        {FRAMES.map((piece, i) => (
          <ArtFrame
            key={i}
            ref={(el) => (frameRefs.current[i] = el)}
            piece={piece}
            isHovered={hoveredIndex === i}
            onHover={() => setHoveredIndex(i)}
            onLeave={() => setHoveredIndex(null)}
            springX={springX}
            springY={springY}
          />
        ))}

        {/* Center column — title fixed, text scrolls in viewport */}
        <div className="absolute inset-0 z-20 flex justify-center pt-12 md:pt-16 px-4 pointer-events-none">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl 3xl:max-w-2xl text-center flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-3xl md:text-4xl lg:text-[2.4rem] 3xl:text-[4.5rem] font-medium text-accent-cream tracking-tight leading-tight mb-6"
            >
              Islamic Art in Australia
            </motion.h1>

            {/* Scrollable text viewport — like Director Message panel */}
            <div
              ref={viewportRef}
              className="relative flex-1 overflow-hidden mb-8"
            >
              {/* Fade gradients */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-bg-deep to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-bg-deep to-transparent z-10 pointer-events-none" />

              <div ref={trackRef} className="will-change-transform pt-6">
                <div className="text-[0.875rem] md:text-[0.9375rem] lg:text-base 3xl:text-xl text-accent-cream leading-[1.7] tracking-wide space-y-3 md:space-y-4 text-left md:text-justify">
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

                </div>
                <div className="h-16" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
