import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { fadeInUp } from "../../../lib/motion"
import CTAButton from "../../ui/Button"

import art1 from "../../../assets/images/Homepage/Art in Aus.png"
import art2 from "../../../assets/images/Homepage/Art in Aus-1.png"
import art3 from "../../../assets/images/Homepage/Art in Aus-2.png"
import art4 from "../../../assets/images/Homepage/Art in Aus-3.png"
import art5 from "../../../assets/images/Homepage/Art in Aus-4.png"

gsap.registerPlugin(ScrollTrigger)

const artPieces = [
  {
    src: art5,
    alt: "Blue sphere artwork",
    credit: "Luminous Geometry —",
    creditAuthor: "Zarah Hussain",
    top: "3%",
    left: "12%",
    size: "w-28 md:w-36 lg:w-56 3xl:w-[18vw]",
    parallaxFactor: 1.2,
  },
  {
    src: art2,
    alt: "Prayer mat",
    credit: "Sacred Weave —",
    creditAuthor: "Nada Rawhi Debs",
    top: "35%",
    left: "-3%",
    size: "w-28 md:w-40 lg:w-56 3xl:w-[18vw]",
    parallaxFactor: 0.8,
  },
  {
    src: art3,
    alt: "Green figurine",
    credit: "The Green Horse —",
    creditAuthor: "Hossein Valamanesh",
    top: "62%",
    left: "20%",
    size: "w-24 md:w-36 lg:w-50 3xl:w-[15vw]",
    parallaxFactor: 1.5,
  },
  {
    src: art1,
    alt: "Islamic metalwork",
    credit: "Patterns in Metal —",
    creditAuthor: "Aisha Khalid",
    top: "5%",
    right: "2%",
    size: "w-32 md:w-48 lg:w-60 3xl:w-[19vw]",
    parallaxFactor: 1.0,
  },
  {
    src: art4,
    alt: "One Thousand and One and Counting",
    credit: "One Thousand and One and Counting (1004 and counting) —",
    creditAuthor: "Abdullah M Syed",
    top: "52%",
    right: "8%",
    size: "w-28 md:w-40 lg:w-56 3xl:w-[18vw]",
    parallaxFactor: 1.3,
  },
]

export default function IslamicArtSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const frameRefs = useRef([])

  // Track mouse globally — normalised to -1 … 1 based on window center
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

  // GSAP scroll-triggered entrance: frames rise one-by-one from below
  useGSAP(() => {
    const frames = frameRefs.current.filter(Boolean)
    if (!frames.length) return

    // Set initial state — far below and invisible
    gsap.set(frames, { y: 150, opacity: 0 })

    gsap.to(frames, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    })
  }, { scope: sectionRef })

  // Mobile layout — frames stack above + below the center text (no overlap)
  const mobileTopFrames = artPieces.slice(0, 3)
  const mobileBottomFrames = artPieces.slice(3)

  return (
    <section ref={sectionRef} className="py-16 md:py-24 3xl:py-32 bg-accent-cream overflow-hidden">
      <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        {/* Mobile layout — stacked, no overlap */}
        <div className="md:hidden flex flex-col items-center text-center gap-8">
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

          <motion.div {...fadeInUp} className="px-2 py-4">
            <h2 className="text-3xl font-medium text-primary tracking-tight leading-snug">
              Celebrating Islamic
              <br />
              Art in Australia
            </h2>
            <p className="mt-5 text-sm text-primary leading-relaxed font-medium">
              Across Australia, Islamic art continues to flourish — shaped by
              diverse artists, cultures, and stories. The Museum of Islamic Art
              Australia proudly supports this creative movement, celebrating its
              heritage and future through art, learning, and community.
            </p>
            <div className="mt-6">
              <CTAButton to="/islamic-art">Explore</CTAButton>
            </div>
          </motion.div>

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

        {/* Desktop layout — scattered frames with mouse-tracking */}
        <div ref={containerRef} className="hidden md:block">
          <div className="relative md:min-h-[46.875rem] lg:min-h-[56.25rem]">
            {/* Center text */}
            <motion.div
              {...fadeInUp}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] 3xl:text-[3.2rem] font-medium text-primary tracking-tight leading-snug">
                Celebrating Islamic
                <br />
                Art in Australia
              </h2>
              <p className="mt-5 text-sm md:text-lg 3xl:text-xl text-primary leading-relaxed max-w-lg 3xl:max-w-xl font-medium">
                Across Australia, Islamic art continues to flourish — shaped by
                diverse artists, cultures, and stories. The Museum of Islamic Art
                Australia proudly supports this creative movement, celebrating its
                heritage and future through art, learning, and community.
              </p>
              <div className="pointer-events-auto mt-6">
                <CTAButton to="/islamic-art">Explore</CTAButton>
              </div>
            </motion.div>

            {/* Art frames — GSAP drives the entrance, Framer Motion drives the mouse parallax */}
            {artPieces.map((piece, i) => (
              <ArtFrame
                key={i}
                ref={(el) => (frameRefs.current[i] = el)}
                piece={piece}
                index={i}
                isHovered={hoveredIndex === i}
                onHover={() => setHoveredIndex(i)}
                onLeave={() => setHoveredIndex(null)}
                springX={springX}
                springY={springY}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { forwardRef } from "react"

const ArtFrame = forwardRef(function ArtFrame(
  { piece, index, isHovered, onHover, onLeave, springX, springY },
  ref,
) {
  const factor = piece.parallaxFactor
  // Opposite direction: negate the spring values, scaled by factor * 20px
  const mx = useTransform(springX, (v) => -v * factor * 20)
  const my = useTransform(springY, (v) => -v * factor * 10)

  return (
    <div
      ref={ref}
      className={`${piece.size} absolute z-0 cursor-pointer`}
      style={{
        top: piece.top,
        left: piece.left,
        right: piece.right,
      }}
    >
      {/* Inner wrapper for mouse-tracking parallax (Framer Motion) */}
      <motion.div
        style={{ x: mx, y: my }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="border-[4px] border-primary overflow-hidden">
          <img
            src={piece.src}
            alt={piece.alt}
            className="w-full h-auto block"
          />
        </div>

        {/* Credit overlay — visible on hover */}
        <AnimatePresence>
          {isHovered && piece.credit && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="mt-2.5 text-[0.625rem] lg:text-[0.6875rem] 3xl:text-sm text-primary leading-snug text-center italic"
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
