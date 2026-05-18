import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import directorImg from "../../../assets/images/About/director-mehmet-ozalp.png"
import float1 from "../../../assets/images/About/float1.png"
import float2 from "../../../assets/images/About/float2.png"

gsap.registerPlugin(ScrollTrigger)

const MESSAGE_PARAGRAPHS = [
  "Director of the Islamic Sciences and Research Academy (ISRA), I am honoured to introduce this visionary project, which will be in Western Sydney and serve as a cultural landmark for all of Sydney and Australia.",
  "Our vision is clear and unwavering: to be a leading institution for the advancement of Islamic awareness, spiritual growth and community wellbeing in Australia. MIAA is a natural extension of this vision — a space that celebrates beauty, fosters understanding and inspires connection.",
  "The role of the Museum will be multifaceted. It will be a centre for cultural education, a repository for historical and contemporary Islamic art, and a place of encounter where Australians of all backgrounds can explore the artistic and intellectual contributions of Muslims throughout history and today. Through its exhibitions, programs and design, the museum will tell a story that is global and local — reflecting the heritage of Islamic art while capturing the Australian Muslim experience.",
  "Our aspirations for the museum are bold and ambitious. We aim to create a space that reflects excellence in architectural design, environmental harmony and spiritual symbolism. It will be an inclusive, engaging and contemporary institution — accessible to all, deeply rooted in authenticity and connected to the wider arts and cultural community.",
  "On behalf of the MIAA team, I invite you to follow our journey, share in our excitement, and help us build a place that will inspire generations to come.",
]

function QuatrefoilMarker({ size = 11 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="#C15C45"
      className="flex-shrink-0"
    >
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" />
    </svg>
  )
}

export default function DirectorMessageSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const viewportRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useGSAP(
    () => {
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!track || !viewport) return

      const mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
        const compute = () => Math.max(0, track.scrollHeight - viewport.clientHeight)
        let distance = compute()
        if (distance <= 0) return

        gsap.set(track, { y: 0 })

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${compute() + 200}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.4,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            distance = compute()
            gsap.set(track, { y: -self.progress * distance })
            setScrollProgress(self.progress)
          },
        })

        return () => trigger.kill()
      })

      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 300)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-deep min-h-screen flex flex-col overflow-hidden"
    >
      {/* Section label + dotted divider */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 3xl:px-24 pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="flex items-center gap-2 mb-2">
          <QuatrefoilMarker />
          <span className="text-[10px] 3xl:text-sm font-normal tracking-[0.2em] uppercase text-secondary-terra">
            Message
          </span>
        </div>
        <div
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(215,184,147,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "8px 3px",
          }}
        />
      </div>

      <div className="relative z-10 flex-1 max-w-[1400px] 3xl:max-w-[1800px] w-full mx-auto px-6 md:px-10 lg:px-16 3xl:px-24 pb-12 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-stretch h-full">
          {/* Left — heading at top, director card pinned to bottom */}
          <motion.div {...fadeInLeft} className="flex flex-col h-full">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] 3xl:text-[3.2rem] font-medium text-accent-cream tracking-tight leading-[1.1]">
              A Message from
              <br />
              MIAA&apos;s Director
            </h2>

            <div className="mt-auto pt-16">
              <div className="w-24 h-24 md:w-28 md:h-28 3xl:w-36 3xl:h-36 rounded-full overflow-hidden border-2 border-accent-wheat/30 mb-5">
                <img
                  src={directorImg}
                  alt="Professor Mehmet Ozalp"
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className="text-3xl md:text-4xl 3xl:text-5xl text-accent-cream leading-tight mb-5"
                style={{ fontFamily: "var(--font-script)" }}
              >
                Professor Mehmet Ozalp
              </p>

              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5">
                    <QuatrefoilMarker size={8} />
                  </span>
                  <span className="text-[13px] 3xl:text-base text-accent-cream/85 leading-snug">
                    Executive Director, ISRA (Islamic Sciences and Research
                    Academy)
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1.5">
                    <QuatrefoilMarker size={8} />
                  </span>
                  <span className="text-[13px] 3xl:text-base text-accent-cream/85 leading-snug">
                    Director, Museum of Islamic Art Australia
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right — white message panel + float2 behind */}
          <motion.div {...fadeInRight} className="relative">
            {/* float2 — sits behind the white panel, peeking out from the lower-left corner */}
            <div className="pointer-events-none absolute -bottom-28 -left-16 md:-bottom-36 md:-left-24 lg:-bottom-44 lg:-left-28 3xl:-bottom-52 3xl:-left-32 w-44 md:w-60 lg:w-72 3xl:w-88 z-0 hero-float">
              <img src={float2} alt="" className="w-full h-auto drop-shadow-2xl" />
            </div>

            <div
              ref={viewportRef}
              className="relative z-10 bg-accent-cream rounded-3xl overflow-hidden h-[60vh] md:h-[70vh] px-6 md:px-8 py-6 shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-accent-cream to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-accent-cream to-transparent z-10 pointer-events-none" />

              <div ref={trackRef} className="will-change-transform">
                <div className="flex flex-col gap-5 text-sm md:text-[15px] 3xl:text-lg text-primary leading-relaxed">
                  {MESSAGE_PARAGRAPHS.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Scroll indicator — right of the panel */}
            <div className="hidden md:block absolute -right-3 top-4 bottom-4 w-[2px] bg-accent-cream/20 z-20">
              <div
                className="absolute left-0 w-full bg-accent-cream/80 transition-[height,top] duration-100 ease-out rounded-full"
                style={{
                  height: "20%",
                  top: `${scrollProgress * 80}%`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
