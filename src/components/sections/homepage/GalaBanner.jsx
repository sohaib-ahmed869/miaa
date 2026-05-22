import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Quatrefoil({ size = 12 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      className="flex-shrink-0 opacity-90"
      aria-hidden="true"
    >
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" />
    </svg>
  )
}

const SEGMENTS = ["MIAA Gala Dinner", "25 July 2026", "Book your tickets here"]

// One repeating unit: each segment preceded by a quatrefoil separator
function MarqueeUnit() {
  return (
    <div className="flex items-center" aria-hidden="true">
      {SEGMENTS.map((text) => (
        <span key={text} className="flex items-center">
          <span className="mx-5 md:mx-7 3xl:mx-9">
            <Quatrefoil />
          </span>
          <span className="font-aeonik text-[24px] md:text-[40px] font-medium tracking-wide whitespace-nowrap">
            {text}
          </span>
        </span>
      ))}
    </div>
  )
}

export default function GalaBanner() {
  return (
    <Link
      to="/gala-dinner"
      aria-label="MIAA Gala Dinner, 25 July 2026 — book your tickets"
      style={{ backgroundColor: "#4656cd" }}
      className="group block w-full overflow-hidden text-white transition-[filter] duration-200 hover:brightness-110"
    >
      <motion.div
        className="flex w-max items-center py-3 md:py-3.5 3xl:py-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 58, ease: "linear", repeat: Infinity }}
      >
        {/* Two identical halves so the loop wraps seamlessly */}
        {Array.from({ length: 8 }).map((_, i) => (
          <MarqueeUnit key={i} />
        ))}
      </motion.div>
    </Link>
  )
}
