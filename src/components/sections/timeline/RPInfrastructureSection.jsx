import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import teamImg from "../../../assets/images/Timeline/rp-infrastructure-team.png"

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

export default function RPInfrastructureSection() {
  return (
    <section className="bg-bg pt-16 md:pt-20 pb-16 md:pb-24">
      {/* Section label + dotted divider */}
      <div className="px-6 md:px-10 lg:px-16 mb-10 md:mb-12">
        <div className="flex items-center gap-2 mb-2">
          <QuatrefoilMarker />
          <span className="text-[10px] font-normal tracking-[0.2em] uppercase text-secondary-terra">
            Project Management
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — photo */}
          <motion.div {...fadeInLeft}>
            <div className="overflow-hidden">
              <img
                src={teamImg}
                alt="RP Infrastructure team reviewing construction plans"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>

          {/* Right — heading + body paragraphs */}
          <motion.div {...fadeInRight} className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-medium text-primary tracking-tight leading-[1.1] mb-2">
              About RP Infrastructure
            </h2>

            <p className="text-[13px] md:text-sm text-primary leading-relaxed">
              After a rigorous selection process, the project management
              contract was awarded to RP Infrastructure, a highly reputable
              and experienced project management team with a history of
              managing major cultural infrastructure projects.
            </p>

            <p className="text-[13px] md:text-sm text-primary leading-relaxed">
              RP Infrastructure specialises in delivering total solutions
              through effective planning and project management methodologies.
              This way we help our clients minimise risk and deliver the right
              outcomes for each and every project.
            </p>

            <p className="text-[13px] md:text-sm text-primary leading-relaxed">
              RPI, in collaboration with our working committees, will manage
              the construction of the museum. Led by RPI Executive Director
              Chris Crick, with team members Paul van der Plaat (Project
              Director), Russell Kosko (Senior Project Manager), and Salma
              Malik (Assistant Project Manager).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
