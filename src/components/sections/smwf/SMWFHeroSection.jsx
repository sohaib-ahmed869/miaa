import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Plus, X } from "lucide-react"


const MotionLink = motion.create(Link)

import logoCollab from "../../../assets/images/Homepage/SMWF/logo-collab.svg"
import heroPhoto from "../../../assets/images/Homepage/SMWF/hero-photo.jpg"
import patternKufic from "../../../assets/images/Homepage/SMWF/pattern-kufic.png"

const MENU_LINKS = [
  { label: "Home",                       href: "#smwf-top" },
  { label: "Our Vision",                 href: "#smwf-vision" },
  { label: "Festival",                   href: "#smwf-festival" },
  { label: "Panellists and Presenters",  href: "#smwf-panellists" },
  { label: "Programme Highlights",       href: "#smwf-highlights" },
  { label: "The Stories We Inherit",     href: "#smwf-stories" },
  { label: "Behind the Mark",            href: "#smwf-mark" },
  { label: "Join SMWF",                  href: "#smwf-join" },
]

export default function SMWFHeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = prev }
    }
  }, [menuOpen])

  return (
    <section
      id="smwf-top"
      className="relative overflow-hidden min-h-screen"
      style={{ backgroundColor: "#124039" }}
    >
      {/* Kufic background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `url(${patternKufic})`,
          backgroundSize: "auto 720px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Top bar — MINN × SMWF lockup + back-to-MIAA CTA */}
      <div className="relative z-20 max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20 pt-5 md:pt-6 3xl:pt-10 flex items-center justify-between gap-4">
        <a href="/" className="block flex-shrink-0">
          <img
            src={logoCollab}
            alt="MINN × Sydney Muslim Writers Festival"
            className="h-7 sm:h-8 md:h-10 lg:h-11 3xl:h-14 w-auto"
          />
        </a>
        <div className="flex items-center gap-2 md:gap-3">
          <MotionLink
            to="/"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 md:px-5 lg:px-6 3xl:px-8 py-2 md:py-2.5 3xl:py-4 font-aeonik text-[0.5625rem] sm:text-[0.625rem] md:text-[0.6875rem] lg:text-xs 3xl:text-sm font-semibold tracking-[0.18em] uppercase rounded-full text-white"
            style={{ backgroundColor: "#C15C45" }}
          >
            <span className="hidden sm:inline">Proceed to Museum of Islamic Art Australia</span>
            <span className="sm:hidden">Visit MIAA</span>
            <ArrowUpRight
              className="w-3 h-3 md:w-3.5 md:h-3.5 3xl:w-5 3xl:h-5"
              strokeWidth={2.5}
            />
          </MotionLink>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 3xl:w-14 3xl:h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
            style={{ backgroundColor: "#CBCE58" }}
          >
            <Plus
              className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 3xl:w-8 3xl:h-8"
              style={{ color: "#124039" }}
              strokeWidth={2.5}
            />
          </button>
        </div>
      </div>

      {/* Slide-out menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="smwf-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px]"
            />
            <motion.aside
              key="smwf-menu-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 220, damping: 32 }}
              className="fixed top-0 right-0 z-[100] h-full w-[92%] sm:w-[75%] md:w-[60%] lg:w-1/2 3xl:w-1/2 shadow-2xl flex flex-col"
              style={{ backgroundColor: "#C15C45" }}
              role="dialog"
              aria-label="SMWF navigation"
            >
              <div className="flex justify-end px-7 md:px-9 lg:px-12 3xl:px-16 pt-7 md:pt-9 3xl:pt-14 pb-3 md:pb-4">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-12 h-12 md:w-14 md:h-14 3xl:w-20 3xl:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: "#CBCE58" }}
                >
                  <X
                    className="w-6 h-6 md:w-7 md:h-7 3xl:w-10 3xl:h-10"
                    style={{ color: "#124039" }}
                    strokeWidth={2.5}
                  />
                </button>
              </div>
              <nav className="flex-1 px-8 sm:px-12 md:px-14 lg:px-16 3xl:px-24 pb-8 overflow-y-auto">
                <ul className="flex flex-col gap-2.5 md:gap-3 lg:gap-3.5 3xl:gap-5">
                  {MENU_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.08 + i * 0.035, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block font-aeonik text-white text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[3.25rem] 3xl:text-[5rem] font-medium leading-[1.15] tracking-[-0.005em] hover:opacity-80 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="relative z-10 max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20 pt-20 md:pt-28 lg:pt-36 3xl:pt-48 pb-8 md:pb-10 lg:pb-12 3xl:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-10 3xl:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span
              className="inline-block rounded-full text-white font-medium tracking-[0.18em] uppercase text-[0.6875rem] md:text-xs 3xl:text-base px-5 md:px-6 3xl:px-10 py-2 md:py-2.5 3xl:py-4"
              style={{ backgroundColor: "#C15C45" }}
            >
              10-19 April 2026
            </span>

            <h1 className="mt-4 md:mt-5 3xl:mt-7 font-aeonik text-white tracking-[-0.01em] leading-[1.06] text-[1.875rem] sm:text-[2.25rem] md:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] 3xl:text-[5.5rem] font-medium">
              Celebrating the Power of<br />
              Muslim Voices
            </h1>

            <p className="mt-3 md:mt-4 3xl:mt-6 max-w-lg 3xl:max-w-2xl text-white/85 font-barlow text-sm md:text-base 3xl:text-xl leading-relaxed">
              Experience a festival that honours diverse Muslim writers and the
              stories that shape who we are — coming April 2026.
            </p>

            <motion.a
              href="https://www.miaaustralia.org/smwf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="mt-5 md:mt-6 3xl:mt-9 inline-flex items-center gap-2 px-7 md:px-8 3xl:px-12 py-3.5 md:py-4 3xl:py-6 font-aeonik text-xs md:text-sm 3xl:text-lg font-semibold tracking-[0.18em] uppercase rounded-md"
              style={{ backgroundColor: "#CBCE58", color: "#124039" }}
            >
              Get Tickets
            </motion.a>
          </motion.div>

          {/* Right — festival photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl 3xl:rounded-[40px] aspect-[3/2] shadow-2xl ring-1 ring-white/10">
              <img
                src={heroPhoto}
                alt="Sydney Muslim Writers Festival panel discussion"
                className="block w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
