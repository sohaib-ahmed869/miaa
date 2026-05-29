import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"


import bannerIcon from "../../../assets/images/Homepage/SMWF/banner-icon.svg"

const INDIVIDUAL_TICKETS = [
  { name: "Adults",     age: "26 and Above", priceLabel: "Normal", price: "$40" },
  { name: "Youth",      age: "18–25",        priceLabel: "Normal", price: "$30" },
  { name: "School Age", age: "7–17",         priceLabel: "Price",  price: "$15" },
  { name: "Under 6",    age: "0–6",          priceLabel: "Price",  price: "Free" },
]

const PACKAGE_TICKETS = [
  { name: "Family Package", description: "2 adults + 2 kids under 17", priceLabel: "Normal", price: "$100" },
  { name: "Family Small",   description: "1 adult + 2 kids under 17",  priceLabel: "Price",  price: "$60" },
]

const REGISTER_URL = "https://www.miaaustralia.org/smwf"

function DottedDivider() {
  return (
    <div
      aria-hidden
      className="flex items-center justify-between my-6 md:my-7 3xl:my-10"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="block w-4 h-4 md:w-[18px] md:h-[18px] 3xl:w-6 3xl:h-6 rounded-full"
          style={{ backgroundColor: "#2A9E9B" }}
        />
      ))}
    </div>
  )
}

function TicketCard({ ticket }) {
  return (
    <motion.div
      {...staggerItem}
      className="p-6 md:p-7 3xl:p-10 flex flex-col text-center"
      style={{ backgroundColor: "#124039" }}
    >
      <p className="font-aeonik text-white text-lg md:text-xl 3xl:text-3xl font-semibold tracking-tight">
        {ticket.name}
      </p>
      <p className="font-barlow text-white/70 text-xs md:text-sm 3xl:text-base mt-1">
        {ticket.age || ticket.description}
      </p>

      <DottedDivider />

      <p className="font-barlow text-white/70 text-xs md:text-sm 3xl:text-base">
        {ticket.priceLabel}
      </p>
      <p className="font-aeonik text-white text-2xl md:text-3xl 3xl:text-[2.75rem] font-medium leading-none mt-1">
        {ticket.price}
      </p>

      <motion.a
        href={REGISTER_URL}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="mt-6 md:mt-7 3xl:mt-10 inline-flex items-center justify-center font-aeonik text-xs md:text-sm 3xl:text-lg font-semibold tracking-[0.18em] uppercase rounded-md py-3 md:py-3.5 3xl:py-5"
        style={{ backgroundColor: "#CBCE58", color: "#124039" }}
      >
        Register
      </motion.a>
    </motion.div>
  )
}

function VerticalDottedDivider() {
  return (
    <div
      aria-hidden
      className="flex flex-col items-center self-stretch mx-4 md:mx-6 3xl:mx-10 -my-2 md:-my-2.5 3xl:-my-4 gap-0.5"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="block w-5 h-5 md:w-6 md:h-6 3xl:w-9 3xl:h-9 rounded-full shrink-0"
          style={{ backgroundColor: "#2A9E9B" }}
        />
      ))}
    </div>
  )
}

function PackageCard({ ticket }) {
  return (
    <motion.div
      {...staggerItem}
      className="px-6 md:px-8 3xl:px-12 py-4 md:py-5 3xl:py-7 flex items-stretch"
      style={{ backgroundColor: "#124039" }}
    >
      {/* Left: name + description */}
      <div className="flex-[1.3] flex flex-col justify-center text-left">
        <p className="font-aeonik text-white text-lg md:text-xl 3xl:text-3xl font-semibold tracking-tight whitespace-nowrap">
          {ticket.name}
        </p>
        <p className="font-barlow text-white/70 text-xs md:text-sm 3xl:text-base mt-1">
          {ticket.description}
        </p>
      </div>

      <VerticalDottedDivider />

      {/* Right: price + register */}
      <div className="flex-1 flex flex-col justify-center text-center">
        <p className="font-barlow text-white/70 text-xs md:text-sm 3xl:text-base">
          {ticket.priceLabel}
        </p>
        <p className="font-aeonik text-white text-xl md:text-2xl 3xl:text-4xl font-medium leading-none mt-1">
          {ticket.price}
        </p>

        <motion.a
          href={REGISTER_URL}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="mt-3 md:mt-4 3xl:mt-5 inline-flex items-center justify-center font-aeonik text-xs md:text-sm 3xl:text-base font-semibold tracking-[0.18em] uppercase rounded-md py-2 md:py-2.5 3xl:py-3.5"
          style={{ backgroundColor: "#CBCE58", color: "#124039" }}
        >
          Register
        </motion.a>
      </div>
    </motion.div>
  )
}

function TiltedMarquee({ text, bg, color, rotate, duration = 60, reverse = false }) {
  return (
    <div className="relative h-16 md:h-20 3xl:h-28 -my-1 md:-my-1 3xl:my-1">
      <div
        className="absolute left-[-120px] right-[-120px] top-1/2 -translate-y-1/2 overflow-hidden py-2.5 md:py-3 3xl:py-5"
        style={{
          backgroundColor: bg,
          transform: `translateY(-50%) rotate(${rotate}deg)`,
          transformOrigin: "center",
        }}
      >
        <div
          className="flex smwf-banner-top w-max"
          style={{
            animationDuration: `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 md:gap-6 px-3 md:px-4 shrink-0">
                  <span
                    className="font-aeonik font-semibold text-base md:text-lg 3xl:text-2xl tracking-tight whitespace-nowrap"
                    style={{ color }}
                  >
                    {text}
                  </span>
                  <span
                    aria-hidden
                    className="w-3.5 h-3.5 md:w-4 md:h-4 3xl:w-6 3xl:h-6 inline-block shrink-0"
                    style={{
                      backgroundColor: color,
                      WebkitMaskImage: `url(${bannerIcon})`,
                      maskImage: `url(${bannerIcon})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SMWFTicketsSection() {
  return (
    <section
      id="smwf-tickets"
      className="overflow-hidden py-10 md:py-12 lg:py-14 3xl:py-20"
      style={{ backgroundColor: "#2A9E9B" }}
    >
      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        {/* Festival Day Tickets */}
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-white text-center text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-medium tracking-tight mb-6 md:mb-8 3xl:mb-12"
        >
          Festival Day Tickets
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 3xl:gap-8"
        >
          {INDIVIDUAL_TICKETS.map((t) => (
            <TicketCard key={t.name} ticket={t} />
          ))}
        </motion.div>
      </div>

      {/* Tilted decorative marquees */}
      <div className="mt-12 md:mt-16 3xl:mt-24">
        <TiltedMarquee
          text="See you at the festival! 18 April 2026"
          bg="#4656CD"
          color="#FFFFFF"
          rotate={3}
          duration={70}
          reverse
        />
      </div>
      <TiltedMarquee
        text="Transforming Narratives — Inspiring Communities"
        bg="#F4A8A1"
        color="#124039"
        rotate={-2}
        duration={70}
      />

      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        {/* Packages */}
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-white text-center text-2xl md:text-3xl lg:text-4xl 3xl:text-5xl font-medium tracking-tight mb-6 md:mb-8 3xl:mb-12"
        >
          Packages
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 3xl:gap-9"
        >
          {PACKAGE_TICKETS.map((t) => (
            <PackageCard key={t.name} ticket={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
