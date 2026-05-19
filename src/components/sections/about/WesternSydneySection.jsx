import { motion } from "framer-motion"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import sydneyMap from "../../../assets/images/About/sydney.png"

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

export default function WesternSydneySection() {
  return (
    <section className="relative bg-bg-deep pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden">
      {/* Section label + dotted divider */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16 3xl:px-24 mb-10 md:mb-14">
        <div className="flex items-center gap-2 mb-2">
          <QuatrefoilMarker />
          <span className="text-[0.625rem] 3xl:text-sm font-normal tracking-[0.2em] uppercase text-secondary-terra">
            Museum Location
          </span>
        </div>
        <div
          className="h-[2px] w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(215,184,147,0.4) 0.09375rem, transparent 0.09375rem)",
            backgroundSize: "0.5rem 0.1875rem",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        {/* Map — absolute, left, large, slight overlap into content */}
        <motion.div
          {...fadeInLeft}
          className="hidden lg:flex absolute left-0 top-0 bottom-0 w-[55%] items-center justify-start pointer-events-none"
        >
          <img
            src={sydneyMap}
            alt="Map silhouette of Western Sydney"
            className="w-full h-auto object-contain -ml-[3%]"
          />
        </motion.div>

        {/* Mobile/tablet — map above content, normal flow */}
        <div className="lg:hidden mb-8 flex justify-center">
          <img
            src={sydneyMap}
            alt="Map silhouette of Western Sydney"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* Right content — pushed right on lg so map overlaps slightly */}
        <motion.div {...fadeInRight} className="relative z-10 lg:ml-[48%]">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] 3xl:text-[3.2rem] font-medium text-accent-cream tracking-tight leading-[1.1] mb-5">
            Based in the Heart of Western Sydney
          </h2>

          <p className="text-base md:text-[1.0625rem] 3xl:text-xl text-accent-wheat leading-snug mb-6 font-medium">
            MIAA is proudly located in Granville in Western Sydney on beautiful
            Dharug country
          </p>

          <p className="text-[0.9375rem] md:text-base 3xl:text-lg text-accent-cream font-semibold leading-relaxed mb-10 max-w-2xl">
            The Museum of Islamic Art Australia (MIAA) respectfully
            acknowledges the Burramattagal people of the Dharug Nation as the
            Traditional Owners of the land on which the museum will be located.
            We also acknowledge the City of Parramatta Council&apos;s protocols
            and processes for engaging with First Nations custodians in
            relation to the museum&apos;s future construction and operations.
            We pay our respects to Elders past, present and emerging.
            Sovereignty has never been ceded.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 text-sm md:text-[0.875rem] 3xl:text-base text-accent-cream/85 leading-relaxed">
            <p>
              Western Sydney is home to one of Australia&apos;s most diverse
              local government areas (LGA). With a growing population of more
              than two and a half million residents hailing from over 170
              countries and speaking more than 100 different languages, the
              dynamic cultural heritage of Western Sydney is at the heart of
              this project.
            </p>
            <p>
              MIAA aims to become a creative hub for this diverse and growing
              population, operating as a locally established world-class
              museum, with national and international engagement and
              connections.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
