import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "../../../lib/motion"
import CTAButton from "../../ui/Button"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwfLogo from "../../../assets/images/Homepage/SMWF/smwflogo.png"
import bgPattern from "../../../assets/images/Homepage/SMWF/SMWF-BGPATTERN.png"

const TESTIMONIALS = [
  {
    name: "Nadia Serhan Faour",
    role: "Author and Attendee",
    quote:
      "What attracted me to the festival was the children's library — Muslim books from all around the world and the chance to explore the range of books on display.",
  },
  {
    name: "George Green",
    role: "Motivational speaker and children's author",
    quote:
      "What I loved most about the Sydney Muslim Writers Festival was the clear effort to hear voices from many communities. It felt inclusive, intentional, and true to the diversity of Muslim stories.",
  },
  {
    name: "Annie McCann",
    role: "Indonesian-Australian emcee and author",
    quote:
      "I found great comfort in a space where joy and solace could naturally coexist. It was a safe haven for expressing collective grief — such spaces are crucial right now.",
  },
  {
    name: "Mostofa Alam",
    role: "Founder, Date Palm Tree Publishing House",
    quote:
      "SMWF is a distinguished program that enriches Australia's multicultural landscape — a professional platform that nurtures creative excellence.",
  },
  {
    name: "Lamisse Hamouda",
    role: "Author and Attendee",
    quote:
      "An opportunity to connect and learn from other writers and authors in the Muslim community, and to connect with people who are passionate about literature.",
  },
]

const PARTNER_LOGOS = [
  "NSW Government",
  "ISRA",
  "CBC",
  "MIAA",
  "Bryan Brown Theatre",
  "Giramondo",
  "WestWords",
  "Bankstown Poetry Slam",
]

export default function SMWFCommunitySection() {
  const [active, setActive] = useState(0)

  return (
    <>
      {/* Testimonials */}
      <section className="bg-primary py-20 md:py-28 3xl:py-36 border-t border-accent-cream/10">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <motion.div
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14 md:mb-16"
          >
            <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-accent-cream tracking-tight leading-tight">
              What Our Community Says
            </h2>
            <p className="mt-5 text-base 3xl:text-lg text-accent-cream/70">
              Hear from the writers, readers, and attendees who&apos;ve been
              part of the SMWF journey.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="bg-accent-cream rounded-xl p-8 md:p-12 3xl:p-16 shadow-xl text-center"
              >
                <Quote
                  className="w-8 h-8 3xl:w-10 3xl:h-10 mx-auto text-secondary-terra mb-6"
                  strokeWidth={1.5}
                />
                <p className="text-lg md:text-xl 3xl:text-2xl font-display italic text-primary leading-relaxed">
                  &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                </p>
                <p className="mt-8 text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-secondary-terra font-semibold">
                  {TESTIMONIALS[active].name}
                </p>
                <p className="text-sm 3xl:text-base text-primary/65 italic mt-1">
                  {TESTIMONIALS[active].role}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={() =>
                  setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                }
                className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-full border border-accent-cream/30 flex items-center justify-center text-accent-cream hover:bg-accent-cream hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
              </button>
              <div className="flex items-center gap-2 mx-3">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-6 bg-accent-wheat" : "w-1.5 bg-accent-cream/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
                className="w-10 h-10 3xl:w-12 3xl:h-12 rounded-full border border-accent-cream/30 flex items-center justify-center text-accent-cream hover:bg-accent-cream hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 3xl:w-5 3xl:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Mark */}
      <section className="relative bg-primary py-20 md:py-28 3xl:py-36 overflow-hidden border-t border-accent-cream/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src={bgPattern}
            alt=""
            className="w-full h-full object-cover"
            style={{ height: "100%" }}
          />
        </div>
        <div className="relative max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeInLeft}>
              <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
                Behind the Mark
              </p>
              <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-accent-cream tracking-tight leading-tight">
                The Meaning<br />Behind the Mark
              </h2>
              <p className="mt-7 text-base md:text-lg 3xl:text-xl text-accent-cream/80 leading-relaxed max-w-xl">
                The SMWF logo is more than an image — it&apos;s a story of
                voices, roots, and unity. Watch the video to see how its
                elements come together to reflect who we are and what we stand
                for.
              </p>
              <button
                className="mt-8 inline-flex items-center gap-3 bg-secondary-terra hover:bg-secondary-rust transition-colors text-white px-6 py-3 3xl:px-8 3xl:py-4 rounded-sm"
                aria-label="Play the meaning behind the mark video"
              >
                <Play
                  className="w-4 h-4 3xl:w-5 3xl:h-5"
                  fill="currentColor"
                  strokeWidth={0}
                />
                <span className="text-[0.625rem] 3xl:text-xs tracking-[0.3em] uppercase font-semibold">
                  Watch Video
                </span>
              </button>
            </motion.div>
            <motion.div
              {...fadeInRight}
              className="bg-accent-cream rounded-2xl p-10 md:p-16 3xl:p-20 flex items-center justify-center min-h-[20rem]"
            >
              <img
                src={smwfLogo}
                alt="SMWF logo"
                className="w-2/3 max-w-md h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors */}
      <section className="bg-primary py-16 md:py-20 3xl:py-28 border-t border-accent-cream/10">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <motion.div {...fadeInUp} className="text-center mb-10 md:mb-12">
            <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-2">
              Partners & Sponsors
            </p>
          </motion.div>
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {PARTNER_LOGOS.map((p) => (
              <motion.div
                key={p}
                {...staggerItem}
                className="h-20 md:h-24 3xl:h-32 bg-accent-cream/95 rounded-lg flex items-center justify-center px-4 text-center"
              >
                <span className="text-sm md:text-base 3xl:text-lg font-medium text-primary/75 tracking-wide">
                  {p}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join the SMWF Community CTA */}
      <section className="bg-accent-cream py-20 md:py-28 3xl:py-36">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <motion.div {...fadeInLeft}>
              <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-secondary-terra mb-4">
                Stay Connected
              </p>
              <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-primary tracking-tight leading-tight">
                Join the SMWF<br />Community
              </h2>
              <p className="mt-6 text-base md:text-lg 3xl:text-xl text-primary/75 leading-relaxed max-w-xl">
                Be the first to hear about the programme, speakers, ticket
                releases and the year-round events that lead up to Festival
                Day.
              </p>
              <div className="mt-8">
                <CTAButton href="https://www.miaaustralia.org/smwf">
                  Subscribe
                </CTAButton>
              </div>
            </motion.div>
            <motion.div {...fadeInRight} className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src={smwf1}
                alt=""
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
