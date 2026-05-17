import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "../../../lib/motion"
import directorPortrait from "../../../assets/images/About/team-potrait-director.png"
import malePortrait from "../../../assets/images/About/team-portrait-male.png"
import femalePortrait from "../../../assets/images/About/team-portrait-female.png"

const PEOPLE = [
  { name: "Prof Mehmet Ozalp", role: "Director", img: directorPortrait },
  { name: "Orhan Kaba", role: "Design Consultant", img: malePortrait },
  { name: "Dr Nur Shkembi OAM", role: "Artistic Director & Curator", img: femalePortrait },
  { name: "Zeliha Baydogan", role: "Project Manager", img: directorPortrait },
  { name: "Dr Derya Iner", role: "Research & Education Advisor", img: malePortrait },
  { name: "Raaza Bashir", role: "Project Control Group", img: femalePortrait },
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

// Quatrefoil-clipped portrait via inline SVG clipPath
function QuatrefoilPortrait({ src, alt }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`qf-${alt.replace(/\s+/g, "-").toLowerCase()}`}>
          <circle cx="50" cy="22" r="25" />
          <circle cx="50" cy="78" r="25" />
          <circle cx="22" cy="50" r="25" />
          <circle cx="78" cy="50" r="25" />
          <rect x="22" y="22" width="56" height="56" rx="4" />
        </clipPath>
      </defs>
      <image
        href={src}
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#qf-${alt.replace(/\s+/g, "-").toLowerCase()})`}
      />
    </svg>
  )
}

export default function PeopleSection() {
  return (
    <section className="bg-accent-cream pt-12 md:pt-16 pb-12 md:pb-16">
      {/* Section label + dotted divider */}
      <div className="px-6 md:px-10 lg:px-16 mb-10 md:mb-14">
        <div className="flex items-center gap-2 mb-2">
          <QuatrefoilMarker />
          <span className="text-[10px] font-normal tracking-[0.2em] uppercase text-secondary-terra">
            Teams
          </span>
        </div>
        <div
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(56,113,122,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "8px 3px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[42px] font-medium text-primary tracking-tight leading-[1.1] mb-12 md:mb-16"
        >
          The People Behind MIAA
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 md:divide-x md:divide-primary/15 gap-y-12 md:gap-y-16"
        >
          {PEOPLE.map((person, i) => (
            <motion.div
              key={`${person.name}-${i}`}
              {...staggerItem}
              className="flex flex-col items-center text-center md:px-6"
            >
              <QuatrefoilPortrait src={person.img} alt={person.name} />
              <p className="text-primary text-base md:text-[17px] font-semibold leading-tight mt-5">
                {person.name}
              </p>
              <p className="text-primary/60 text-[13px] md:text-sm mt-1.5 leading-snug max-w-[200px]">
                {person.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
