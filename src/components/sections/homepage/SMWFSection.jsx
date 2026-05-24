import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import CTAButton from "../../ui/Button"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwf2 from "../../../assets/images/Homepage/SMWF/SMWF-02.png"
import smwf3 from "../../../assets/images/Homepage/SMWF/SMWF-03.png"
import bgPattern from "../../../assets/images/Homepage/SMWF/SMWF-BGPATTERN.png"
import smwfLogo from "../../../assets/images/Homepage/SMWF/smwflogo.png"

// 3 base images doubled for seamless infinite scroll
const baseImages = [smwf1, smwf2, smwf3]
const carouselImages = [...baseImages, ...baseImages]

function QuatrefoilIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 100 100" fill="#fff">
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" fill="#fff" />
    </svg>
  )
}

function BannerStrip({ text, count = 30 }) {
  return (
    <div className="flex whitespace-nowrap gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2.5 text-white font-aeonik text-base 3xl:text-xl font-normal tracking-wide flex-shrink-0"
        >
          <QuatrefoilIcon />
          {text}
        </span>
      ))}
    </div>
  )
}

export default function SMWFSection() {
  return (
    <section className="py-16 md:py-24 3xl:py-32 bg-bg overflow-hidden">
      <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-stretch">
          {/* Left content */}
          <motion.div {...fadeInLeft} className="pr-0 lg:pr-12 py-4">
            <div className="mb-6">
              <img
                src={smwfLogo}
                alt="Sydney Muslim Writers Festival"
                className="h-12 3xl:h-12 w-44 3xl:w-52 object-contain block"
              />
            </div>

            <h2 className="text-3xl md:text-4xl 3xl:text-[3.2rem] font-medium text-primary tracking-tight leading-snug">
              MIAA is home of the Sydney<br />Muslim Writer&apos;s Festival (SMWF)
            </h2>
            <p className="italic text-secondary-wine mt-4 text-base 3xl:text-xl font-medium">
              Our Story Our Words
            </p>
            <p className="mt-2 text-sm 3xl:text-lg text-primary leading-normal ">
              The Sydney Muslim Writers Festival is a unique platform that
              celebrates the diverse voices of Muslim writers, poets, and
              thinkers. Founded with the vision of showcasing authentic
              storytelling, SMWF offers a space for both emerging and established
              authors to share their narratives and explore various themes in
              literature. While the full festival will return in 2026, the journey
              continues with a series of smaller events, workshops, and discussions
              throughout the year. Join us as we celebrate the power of words,
              foster dialogue, and build connections across communities
            </p>
            <div className="mt-8">
              <CTAButton to="/events">Explore</CTAButton>
            </div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            {...fadeInRight}
            className="relative min-h-[480px] md:min-h-[33.75rem] 3xl:min-h-[35vw] rounded-lg overflow-hidden"
          >
            {/* Teal base */}
            <div className="absolute inset-0 bg-primary" />
            {/* Pattern on top */}
            <div className="absolute inset-0">
              <img src={bgPattern} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Vertical auto-carousel — tilted as a group */}
            <div
              className="absolute z-10 flex justify-center"
              style={{
                top: "-25%",
                bottom: "-25%",
                left: "0",
                right: "0",
                transform: "translateX(-2.5rem)",
              }}
            >
              <div className="smwf-vertical-carousel flex flex-col items-center">
                {carouselImages.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[380px] md:w-[29rem] 3xl:w-[22vw] rounded-lg overflow-hidden"
                    style={{
                      transform: `translateX(${i === 0 ? "0.2rem" : `${1.75 + (i - 1) * 1.75}rem`}) rotate(-0.3deg)`,
                      marginTop: i === 0 ? 0 : "-1.5rem",
                    }}
                  >
                    <img
                      src={src}
                      alt="SMWF event"
                      className="w-full object-cover block"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Top diagonal banner — "18 April 2026" */}
            <div
              className="absolute z-20"
              style={{
                top: 5,
                left: -300,
                right: -300,
                transform: "rotate(13deg)",
                backgroundColor: "#DD613E",
                padding: "14px 0",
              }}
            >
              <div className="smwf-banner-top">
                <BannerStrip text="18 April 2026" />
              </div>
            </div>

            {/* Bottom diagonal banner — "Festival Day" */}
            <div
              className="absolute z-20"
              style={{
                bottom: 45,
                left: -300,
                right: -300,
                transform: "rotate(-18deg)",
                backgroundColor: "#4656CD",
                padding: "14px 0",
              }}
            >
              <div className="smwf-banner-bottom">
                <BannerStrip text="Festival Day" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
