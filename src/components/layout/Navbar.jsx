import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import CTAButton from "../ui/Button"
import { NAV_LINKS } from "../../lib/constants"
import smallLogo from "../../assets/images/Homepage/smalllogo.png"
import topRightSpheres from "../../assets/images/Homepage/herotoprightelement.png"

const SOCIALS = [
  { label: "Tiktok", url: "#" },
  { label: "Twitter/X", url: "#" },
  { label: "Facebook", url: "https://www.facebook.com/" },
  { label: "YouTube", url: "https://www.youtube.com/" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      {/* Top-of-page CTAs (Gala + Follow) — absolute so they scroll away with the page */}
      <div className="absolute top-0 right-0 z-40 px-3 md:px-4 pointer-events-none">
        <div className="flex items-center justify-end h-20 md:h-24 3xl:h-28 gap-3 md:gap-5">
          <Link
            to="/gala-dinner"
            className="pointer-events-auto hidden md:inline-flex items-center gap-1.5 3xl:gap-2 px-4 py-3 3xl:px-6 3xl:py-3.5 bg-primary/60 backdrop-blur-sm text-white text-[10px] 3xl:text-sm font-bold tracking-[0.15em] uppercase rounded hover:bg-primary/80 transition-colors duration-200"
          >
            Gala Dinner
            <ArrowUpRight className="size-3 3xl:size-4" strokeWidth={2.5} />
          </Link>
          <CTAButton to="/support-us" className="pointer-events-auto hidden md:inline-flex px-4 py-3 3xl:px-7 3xl:py-3.5">
            Follow Our Journey
          </CTAButton>
          {/* Reserve the hamburger slot here so the CTAs sit left of it at the top of the page */}
          <span className="w-[80px] h-[48px] 3xl:w-[100px] 3xl:h-[56px]" aria-hidden="true" />
        </div>
      </div>

      {/* Hamburger — always sticky, sits in the same top-right corner */}
      <div className="fixed top-0 right-0 z-50 px-3 md:px-4">
        <div className="flex items-center justify-end h-20 md:h-24 3xl:h-28">
          <button
            onClick={() => setMenuOpen(true)}
            className="bg-accent-cream rounded-xl px-7 py-3 3xl:px-9 3xl:py-4 shadow-md hover:bg-white transition-colors"
            aria-label="Open menu"
          >
            <svg
              width="34"
              height="14"
              viewBox="0 0 34 14"
              fill="none"
              aria-hidden="true"
              className="3xl:w-[42px] 3xl:h-[18px]"
            >
              <rect x="0" y="1" width="34" height="3" rx="1.5" fill="#C15C45" />
              <rect x="0" y="10" width="34" height="3" rx="1.5" fill="#C15C45" />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen overlay nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-bg-deep overflow-hidden"
          >
            {/* Spheres ornament — top right decorative */}
            <div className="absolute top-0 right-0 w-[35%] md:w-[30%] lg:w-[24%] max-h-[50%] pointer-events-none">
              <img
                src={topRightSpheres}
                alt=""
                className="w-full h-auto opacity-90"
              />
            </div>

            {/* Top bar — logo left + CTA & close right */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 3xl:px-24">
              <div className="flex items-center justify-between h-20 md:h-24 3xl:h-28">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src={smallLogo}
                    alt="MIAA"
                    className="h-6 sm:h-8 md:h-10 3xl:h-14 w-auto"
                  />
                </Link>

                <div className="flex items-center gap-3">
                  <CTAButton to="/support-us" onClick={() => setMenuOpen(false)} className="hidden md:inline-flex px-4 py-2 3xl:px-7 3xl:py-3.5">
                    Follow Our Journey
                  </CTAButton>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="bg-accent-cream rounded-xl px-7 py-3 3xl:px-9 3xl:py-4 shadow-md hover:bg-white transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      width="34"
                      height="14"
                      viewBox="0 0 34 14"
                      fill="none"
                      aria-hidden="true"
                      className="3xl:w-[42px] 3xl:h-[18px]"
                    >
                      <line
                        x1="2"
                        y1="2"
                        x2="32"
                        y2="12"
                        stroke="#C15C45"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <line
                        x1="2"
                        y1="12"
                        x2="32"
                        y2="2"
                        stroke="#C15C45"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Dotted divider line */}
            <div
              className="relative z-10 mx-4 sm:mx-6 md:mx-10 lg:mx-16 3xl:mx-24 h-[2px] 3xl:h-[3px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.25) 1.5px, transparent 1.5px)",
                backgroundSize: "8px 3px",
              }}
            />

            {/* Body — nav links left, socials right */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 3xl:px-24 pt-10 md:pt-14 3xl:pt-16">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10">
                {/* Nav links */}
                <nav className="flex flex-col">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = location.pathname === link.path
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * i }}
                      >
                        <Link
                          to={link.path}
                          className={`nav-link group relative flex items-center gap-3 py-2 md:py-2.5 text-2xl md:text-3xl lg:text-[34px] 3xl:text-[42px] font-normal tracking-tight transition-colors duration-200 ${
                            isActive
                              ? "text-secondary-terra"
                              : "text-white/85 hover:text-secondary-terra"
                          }`}
                        >
                          {/* Quatrefoil marker — visible on hover or when active */}
                          <span
                            className={`flex-shrink-0 transition-opacity duration-200 ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 100 100"
                              fill="#C15C45"
                              className="3xl:w-[18px] 3xl:h-[18px]"
                            >
                              <circle cx="50" cy="22" r="25" />
                              <circle cx="50" cy="78" r="25" />
                              <circle cx="22" cy="50" r="25" />
                              <circle cx="78" cy="50" r="25" />
                              <rect
                                x="22"
                                y="22"
                                width="56"
                                height="56"
                                rx="4"
                              />
                            </svg>
                          </span>
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Social links — text only, right aligned */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="hidden md:flex flex-col items-end gap-2 self-center pr-2 lg:pr-6"
                >
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm md:text-[15px] 3xl:text-lg text-white/85 hover:text-accent-wheat transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Socials — mobile (inline below nav) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="md:hidden mt-10 flex flex-wrap gap-x-5 gap-y-2"
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-white/85 hover:text-accent-wheat transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
