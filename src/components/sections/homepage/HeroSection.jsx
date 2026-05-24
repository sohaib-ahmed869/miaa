import { useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import heroImg from "../../../assets/images/Homepage/Hero.png"
import ornament from "../../../assets/images/Homepage/Ornament_1.png"
import heroTopRight from "../../../assets/images/Homepage/herotoprightelement.png"
import GalaBanner from "./GalaBanner"

gsap.registerPlugin(ScrollTrigger)

export default function HeroSection() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      gsap.to(".hero-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(".hero-ornament-1", {
        y: -12,
        rotation: 8,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col bg-bg-deep overflow-hidden">
      {/* Ornament cluster - top right */}
      <div className="absolute top-0 right-0 z-20 pointer-events-none w-[30%] md:w-[35%] 3xl:w-[22%] max-h-[55%] 3xl:max-h-[45%] overflow-hidden">
        <img
          src={heroTopRight}
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Row 1: Title - left aligned */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 3xl:px-24 pt-32 md:pt-40 lg:pt-44 3xl:pt-52">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] 3xl:text-[4.5rem] font-medium text-accent-cream leading-[1.15] tracking-tight"
        >
          A Space For Art, Culture
          <br />
          and Community
        </motion.h1>
      </div>

      {/* Row 2: Description - right aligned */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 3xl:px-24 pt-6 pb-10 md:pb-14 3xl:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex justify-end"
        >
          <p className="text-sm md:text-[0.9375rem] text-accent-cream leading-relaxed max-w-md 3xl:max-w-lg text-left font-medium">
            Explore our website to discover information about Australia&apos;s
            first Islamic Museum dedicated to the arts. We invite you to join
            us on this unique journey as we navigate the various stages and
            milestones of this exciting museum project.
          </p>
        </motion.div>
      </div>

      {/* Full-width hero image — fills remaining viewport height */}
      <div className="relative flex-1 min-h-[250px]">
        {/* Flower ornament - half above image, half on image, left side */}
        <div className="hero-ornament-1 absolute top-2 md:-top-[80px] left-[3%] z-20 pointer-events-none">
          <img
            src={ornament}
            alt=""
            className="w-28 md:w-40 lg:w-52 3xl:w-64 h-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-image-container w-full h-full overflow-hidden"
        >
          <img
            src={heroImg}
            alt="People gathered around reflective art installation"
            className="hero-image w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Scrolling Gala Dinner banner — bottom of hero */}
      <GalaBanner />
    </section>
  )
}
