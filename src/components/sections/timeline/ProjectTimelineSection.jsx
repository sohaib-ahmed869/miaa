import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInUp } from "../../../lib/motion"

const TIMELINE_DATA = {
  2022: [
    {
      date: "30 JUL 2022",
      body: "Submitted grant application for the WestInvest Program",
    },
  ],
  2023: [
    {
      date: "19 JAN 2023",
      body: "Received confirmation of successful grant application",
    },
    {
      date: "1 AUG 2023",
      body: "Confirmation of Museum relocation from Blacktown to either Cumberland or Parramatta local government area",
    },
    {
      date: "30 NOV 2023",
      body: "Signed the funding deed with the NSW Government",
    },
  ],
  2024: [
    {
      date: "18 JAN 2024",
      body: "SRA Board resolved to proceed with leasing the Oriole Park Auburn site and formally wrote to Cumberland Council",
    },
    {
      date: "22 JUN 2024",
      body: "Submitted Expression of Interest to the formal EOI process for the Oriole Park Auburn site",
    },
    {
      date: "15 JUL 2024",
      body: "Commenced community consultation with a combined national meeting of ISRA board, staff, members, and volunteers",
    },
    {
      date: "25 JUL 2024",
      body: "Appointed RP Infrastructure as project manager for the museum construction",
    },
    {
      date: "28 JUL 2024",
      body: "Appointed Dr Nur Shkembi as Artistic Director and Curator",
    },
    {
      date: "5 SEPT 2024",
      body: "Dr Eeqbal Hassim, Education Specialist formerly begins consultation for MIAA's museum education plan",
    },
    {
      date: "27 SEPT 2024",
      body: "EOI for MIAA Logo and Branding opens",
    },
    {
      date: "1 OCT 2024",
      body: "Confirmed name change from Sydney Islamic Arts Museum Project to Museum of Islamic Art Australia (MIAA), following internal ISRA consultation",
    },
    {
      date: "9 OCT 2024",
      body: "Functional Diagram for MIAA Architectural Design: Version 1 full draft complete",
    },
    {
      date: "31 OCT 2024",
      body: "MIAA Logo and Branding EOI closes",
    },
    {
      date: "11 DEC 2024",
      body: "Cumberland Council resolved to enter negotiations with ISRA for the Oriole Park Auburn site",
    },
  ],
  2025: [
    {
      date: "29 JAN 2025",
      body: "MIAA Logo and Branding shortlisted candidate interviews",
    },
    {
      date: "13 FEB 2025",
      body: "Negotiation process with Cumberland Council for Oriole Park Auburn site commences",
    },
    {
      date: "20 FEB 2025",
      body: "Functional Diagram for MIAA Architectural Design: Final Version complete",
    },
    {
      date: "1 MARCH 2025",
      body: "Powerhouse Museum x ISRA/MIAA Ramadan Event at Sydney Observatory",
    },
    {
      date: "9 APRIL 2025",
      body: "MIAA Education Pedagogical Design brief – Phases 1 and 2 full drafts completed",
    },
    {
      date: "29 APR 2025",
      body: "Cumberland Council did not pass the final resolution for the Oriole Park Auburn site",
    },
    {
      date: "27 JUN 2025",
      body: "Purchased new museum property for $8,800,000",
    },
    {
      date: "18 AUG 2025",
      body: "Finalised and released MIAA Architectural Design Brief for the architectural competition",
    },
    {
      date: "10 SEP 2025",
      body: "Land settlement for the new museum site completed",
    },
    {
      date: "26 OCT 2025",
      body: "MIAA public event held at Novotel Sydney Parramatta: land acquisition announcement and location reveal; official launch of the Museum's new Branding and Logo",
    },
    {
      date: "DEC 2025",
      body: "Finalise the MIAA Architectural Design competition and select the winning concept design",
    },
  ],
  2026: [
    {
      date: "JUN 2026",
      body: "Winning Architectural teams to complete detailed architectural design and documentation in consultation with RPI and MIAA; submit development application to council",
    },
    {
      date: "JUL 2026",
      body: "Host the inaugural Museum of Islamic Art Annual Gala Dinner",
    },
  ],
}

const YEARS = [
  { label: "2022", value: 2022 },
  { label: "2023", value: 2023 },
  { label: "2024", value: 2024 },
  { label: "2025, This Year", value: 2025 },
  { label: "2026", value: 2026 },
]

const COLS_PER_ROW = 4
const TERRA = "#C15C45"
const WHEAT_DOT = "rgba(215,184,147,0.45)"

function QuatrefoilMarker({ size = 11 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={TERRA}
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

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size))
  }
  return out
}

export default function ProjectTimelineSection() {
  const [active, setActive] = useState(2025)

  const rows = useMemo(() => chunk(TIMELINE_DATA[active] || [], COLS_PER_ROW), [active])

  return (
    <section className="bg-bg-deep pt-16 md:pt-20 pb-16 md:pb-24">
      {/* Section label + dotted divider */}
      <div className="px-6 md:px-10 lg:px-16 mb-10 md:mb-14">
        <div className="flex items-center gap-2 mb-2">
          <QuatrefoilMarker />
          <span className="text-[10px] font-normal tracking-[0.2em] uppercase text-secondary-terra">
            MIAA Project Timeline
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

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Title */}
        <motion.h2
          {...fadeInUp}
          className="text-3xl md:text-4xl lg:text-[42px] font-medium text-accent-cream tracking-tight leading-[1.1] text-center mb-8"
        >
          Museum of Islamic Art Australia
          <br />
          Project Timeline
        </motion.h2>

        {/* Year tabs — pill */}
        <motion.div
          {...fadeInUp}
          className="flex justify-center mb-14 md:mb-16"
        >
          <div className="inline-flex items-center bg-bg-teal/25 rounded-full p-1 gap-1">
            {YEARS.map((y) => {
              const isActive = active === y.value
              return (
                <button
                  key={y.value}
                  onClick={() => setActive(y.value)}
                  className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-accent-wheat text-primary font-medium"
                      : "text-accent-cream/70 hover:text-accent-cream"
                  }`}
                >
                  {y.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Timeline rows */}
        <motion.div {...fadeInUp} className="relative">
          {rows.map((row, rowIdx) => {
            const isLastRow = rowIdx === rows.length - 1
            const isEvenRow = rowIdx % 2 === 0
            // Right-side curve after even rows (0, 2…), left-side curve after odd rows (1, 3…)
            return (
              <div key={rowIdx} className="relative pb-16 md:pb-20 last:pb-0">
                {/* Horizontal dotted line spanning the row */}
                <div
                  className="absolute top-[6px] left-0 right-0 h-[2px] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${WHEAT_DOT} 1.5px, transparent 1.5px)`,
                    backgroundSize: "8px 3px",
                  }}
                />

                {/* Grid of milestones (max 4 per row) */}
                <div
                  className="grid gap-x-6 md:gap-x-8"
                  style={{
                    gridTemplateColumns: `repeat(${COLS_PER_ROW}, minmax(0, 1fr))`,
                  }}
                >
                  {row.map((m, colIdx) => (
                    <div key={colIdx} className="relative pt-12 md:pt-14">
                      {/* Terra dot on the horizontal line */}
                      <span
                        className="absolute -top-[3px] left-0 w-3 h-3 rounded-full"
                        style={{ background: TERRA }}
                      />
                      {/* Vertical dotted drop-line */}
                      <span
                        className="absolute top-[14px] left-[5px] w-[2px] h-7 md:h-9"
                        style={{
                          backgroundImage: `radial-gradient(circle, ${WHEAT_DOT} 1.5px, transparent 1.5px)`,
                          backgroundSize: "3px 6px",
                        }}
                      />
                      {/* Date */}
                      <p
                        className="text-[12px] md:text-[13px] tracking-[0.1em] uppercase mb-3 font-semibold"
                        style={{ color: "#D7B893" }}
                      >
                        {m.date}
                      </p>
                      {/* Body */}
                      <p className="text-[13px] md:text-sm text-accent-cream/90 leading-relaxed max-w-[230px]">
                        {m.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Snake connector between this row and the next — starts/ends exactly where the dotted lines end */}
                {!isLastRow && (
                  <svg
                    className="absolute pointer-events-none"
                    style={
                      isEvenRow
                        ? // right-side: SVG's left edge sits exactly at the row's right edge (= where the line ends)
                          {
                            top: 6,
                            right: -30,
                            width: 30,
                            height: "100%",
                          }
                        : // left-side: SVG's right edge sits exactly at the row's left edge
                          {
                            top: 6,
                            left: -30,
                            width: 30,
                            height: "100%",
                          }
                    }
                    viewBox="0 0 30 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={
                        isEvenRow
                          ? // bulges right
                            "M 0 0 C 30 0, 30 100, 0 100"
                          : // bulges left
                            "M 30 0 C 0 0, 0 100, 30 100"
                      }
                      fill="none"
                      stroke={TERRA}
                      strokeWidth="2"
                      strokeOpacity="0.6"
                      strokeDasharray="3 4"
                    />
                  </svg>
                )}
              </div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="flex justify-center mt-12 md:mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
          >
            Watch Our First Steps
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
