import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight, fadeInUp } from "../../../lib/motion"
import audienceImg from "../../../assets/images/Community Engagement/community-audience.png"
import workshopImg from "../../../assets/images/Community Engagement/workshop-program.png"
import float1 from "../../../assets/images/About/float1.png"

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

export default function CommunityCultureSection() {
  return (
    <section className="relative bg-bg py-12 md:py-16 overflow-hidden">
      {/* Section label + dotted divider */}
      <div className="px-6 md:px-10 lg:px-16 mb-8 md:mb-10">
        <div className="flex items-center gap-2 mb-2">
          <QuatrefoilMarker />
          <span className="text-[10px] font-normal tracking-[0.2em] uppercase text-secondary-terra">
            Community Engagement
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — heading + intro + 2-col paragraphs + full-width paragraph */}
          <motion.div {...fadeInLeft}>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-primary tracking-tight leading-tight mb-5">
              At the Heart of Community and Culture
            </h2>

            <p className="text-base md:text-[17px] text-primary leading-relaxed mb-10 max-w-2xl">
              Community engagement is at the heart of MIAA. The team behind the
              establishment of the Museum has welcomed thousands of community
              members over the course of more than 15 years.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-[13px] md:text-sm text-primary leading-relaxed mb-8">
              <p>
                ISRA was established in 2009 as a product of community dialogue
                and service, quickly becoming a prime organisation for Muslim
                communities for integration into Australian society. ISRA has
                established itself as an institution renowned for its academic
                and Islamic education, diversified community work and
                interfaith engagement.
              </p>
              <p>
                ISRA continues to engage Muslims, Islamic organisations and
                communities from different orientations as well as other faith
                and cultural groups, schools, and faith-based organisations and
                institutions. We envision the Museum as a hub for community
                activities and engagement through the arts and education.
              </p>
            </div>

            <p className="text-[13px] md:text-sm text-primary leading-relaxed max-w-3xl">
              MIAA is committed to enhancing audience experience through a
              thoughtfully curated selection of community engagement
              activities, public programs, events and community networking
              opportunities. Local communities will also enjoy the benefits of
              the Museum program which includes access to our facilities to
              hold events, meetings and celebrations. As MIAA&apos;s capacity
              grows, community based special interest groups such as art clubs
              and other creative groups will be supported to facilitate
              gatherings onsite at the museum through our Community Access
              Program (CAP).
            </p>
          </motion.div>

          {/* Right — overlapped photos with white border on photo 2 + float1 at bottom-right */}
          <motion.div {...fadeInRight} className="relative">
            {/* Top photo */}
            <div className="overflow-hidden rounded-sm">
              <img
                src={audienceImg}
                alt="Community audience at MIAA gathering"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* Bottom photo — overlapping the first, with thick white border + shadow */}
            <div className="relative z-10 w-[80%] ml-auto -mt-12 md:-mt-20 lg:-mt-28 bg-white p-2 md:p-3 shadow-2xl">
              <img
                src={workshopImg}
                alt="Sydney Muslim Writers Festival workshop"
                className="w-full h-auto object-cover block"
              />
            </div>

            {/* float1 — bottom-right corner of this column, partly off-edge */}
            <div className="hero-float pointer-events-none absolute -bottom-8 md:-bottom-10 lg:-bottom-12 -right-6 md:-right-10 lg:-right-14 w-20 md:w-28 lg:w-36 z-20">
              <img src={float1} alt="" className="w-full h-auto drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
