import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { useCountdown } from "./useCountdown"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwf2 from "../../../assets/images/Homepage/SMWF/SMWF-02.png"
import smwf3 from "../../../assets/images/Homepage/SMWF/SMWF-03.png"

const FESTIVAL_DATE = "2026-04-18T09:30:00+10:00"

const PRESENTERS = [
  "Jumaana Abdu", "Michael Mohammed Ahmad", "Zohra Aly", "Mirela Cufurovic",
  "Sahar Dandan", "Winnie Dunn", "Eugenia Flynn", "Zeynab Gamieldien",
  "Peter Gould", "George Green", "Eda Gunaydin", "Bilal Hafda",
  "Mohamed Hassan", "Amani Haydar", "Nour Haydar", "Huda Hayek",
  "Naima Ibrahim", "Soaliha Iqbal", "Dr Zuleyha Keskin", "Lyeba Khan",
  "Melati Lum", "Annie McCann", "Omar Musa", "Aamina Musthafa",
  "Prof Mehmet Ozalp", "Safiah Rind", "Sanya Rushdi", "Dr Samah Sabawi",
  "Sara Saleh", "Dr Nur Shkembi OAM", "Anna Thwaites", "Julide Turker",
  "Jihad Yassine",
]

const PORTRAITS = [smwf1, smwf2, smwf3]

function CountdownBig({ time }) {
  const cells = [
    { v: time.days, l: "Days" },
    { v: time.hours, l: "Hours" },
    { v: time.minutes, l: "Minutes" },
    { v: time.seconds, l: "Seconds" },
  ]
  return (
    <div className="flex justify-center gap-4 md:gap-6 3xl:gap-10">
      {cells.map((c) => (
        <div key={c.l} className="text-center">
          <p className="text-5xl md:text-7xl 3xl:text-[7rem] font-medium text-accent-cream tabular-nums leading-none">
            {String(c.v).padStart(2, "0")}
          </p>
          <p className="text-[0.625rem] md:text-xs 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mt-3">
            {c.l}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function SMWFPanellistsSection() {
  const time = useCountdown(FESTIVAL_DATE)

  return (
    <>
      <section className="bg-primary py-20 md:py-28 3xl:py-36">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <motion.div {...fadeInUp} className="text-center mb-14 md:mb-16">
            <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
              Panellists & Presenters
            </p>
            <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-accent-cream tracking-tight leading-tight">
              Meet our Panellists and Presenters
            </h2>
            <p className="mt-5 text-sm 3xl:text-base text-accent-cream/70 italic">
              Click the picture to read more about the author.
            </p>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-5"
          >
            {PRESENTERS.map((name, i) => (
              <motion.div
                key={name}
                {...staggerItem}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden rounded-md bg-primary-dark/30">
                  <img
                    src={PORTRAITS[i % PORTRAITS.length]}
                    alt={name}
                    className="w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    style={{ height: "100%" }}
                  />
                </div>
                <p className="text-[0.6875rem] md:text-xs 3xl:text-sm text-accent-cream/85 mt-2 leading-tight text-center font-medium">
                  {name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Big countdown */}
      <section className="bg-primary py-20 md:py-28 3xl:py-36 border-t border-accent-cream/10">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24 text-center">
          <motion.p
            {...fadeInUp}
            className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-5"
          >
            Counting Down to Festival Day
          </motion.p>
          <motion.h2
            {...fadeInUp}
            className="text-3xl md:text-4xl 3xl:text-[3rem] font-medium text-accent-cream tracking-tight leading-tight mb-12 md:mb-14"
          >
            April 18, 2026 — a day for writers,<br />readers and dreamers to gather.
          </motion.h2>
          <motion.div {...fadeInUp}>
            <CountdownBig time={time} />
          </motion.div>
        </div>
      </section>
    </>
  )
}
