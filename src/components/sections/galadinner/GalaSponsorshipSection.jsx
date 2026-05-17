import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import SectionDivider from "../../ui/SectionDivider"

export default function GalaSponsorshipSection() {
  return (
    <section className="bg-accent-cream">
      <div className="max-w-[1400px] mx-auto">
        <SectionDivider label="Sponsorship" bg="bg-transparent" variant="light" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left — Heading + CTA */}
          <motion.div {...fadeInLeft}>
            <h2 className="font-display text-3xl md:text-[42px] font-medium text-primary leading-none tracking-tight mb-10 mt-0 uppercase">
              Sponsorship<br />Opportunities
            </h2>
            <a
              href="https://drive.google.com/file/d/1072ktfGFYxJMQHalRFTKSyhICR5ONtEo/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
            >
              Download Sponsorship Package
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Right — Description */}
          <motion.div {...fadeInRight} className="flex flex-col gap-3 text-base text-primary leading-normal font-medium">
            <p>
              Sponsorship of the MIAA Inaugural Gala Dinner offers businesses and organisations a meaningful opportunity to be associated with the establishment of Australia&apos;s first Museum of Islamic Art.
            </p>
            <p>
              Our valued Sponsors will be supporting a nationally significant cultural initiative that contributes to education, community connection and Australia&apos;s engagement with global artistic heritage.
            </p>
            <p>
              To explore sponsorship opportunities please review our sponsorship package available via download here.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
