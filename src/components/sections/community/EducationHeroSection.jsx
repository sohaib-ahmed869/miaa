import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeInLeft, fadeInRight } from "../../../lib/motion"
import heroImg from "../../../assets/images/Community Engagement/education-hero.png"
import float2 from "../../../assets/images/About/float2.png"

const accordionItems = [
  {
    title: "Teachers, Educators and Students",
    content:
      "The Museum of Islamic Art Australia (MIAA) will deliver substantial education links for school-aged visitors through a bespoke education matrix which engages with both the Australian National curriculum and NSW curriculum. Dr Eeqbal Hassim, an education consultant specialising in intercultural education, international education, and global competencies development is currently working in collaboration with MIAA to deliver a dedicated suite of education programs. The museum education program will ensure meaningful engagement, tours, and specialised programs for school-aged visitors.",
  },
  {
    title: "Children and Families",
    content:
      "As part of our aim to enhance engagement with young people, the Museum will feature a Children's Gallery — the first dedicated Islamic arts focussed children's gallery in the Southern hemisphere. It will include hands-on and interactive displays, accessible contemporary and decorative Islamic art and literature for young children, and a curated series of educational programs with a focus on kinder and primary aged children. The space will also offer parents and bubs' reading groups and other age-appropriate art focussed activities.",
  },
]

export default function EducationHeroSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative z-20 bg-bg">
      {/* Top teal banner — title spans full width */}
      <div className="bg-bg-deep w-full px-6 md:px-10 lg:px-16 pt-28 md:pt-32 pb-8 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl md:text-4xl lg:text-[2.4rem] font-medium text-accent-cream tracking-tight leading-tight"
        >
          Education &amp; Community Engagement
        </motion.h1>
      </div>

      {/* Split body — left image on white section bg, right content on its own teal bg that extends lower */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
        {/* Left — image flush to LEFT edge, no bg behind. Below the image is the section's white bg. */}
        <motion.div {...fadeInLeft}>
          <img
            src={heroImg}
            alt="Educator at MIAA community event"
            className="w-full h-auto block"
          />
        </motion.div>

        {/* Right — teal bg block, padded, with extra pb so it ends lower than the image */}
        <motion.div
          {...fadeInRight}
          className="bg-bg-deep px-6 md:px-10 lg:px-16 lg:pl-12 pt-8 md:pt-10 pb-20 md:pb-32 lg:pb-40 self-stretch"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-medium text-accent-cream tracking-tight leading-snug">
            Educating the Next
            <br />
            Generation of Thinkers
          </h2>

          <div className="mt-8 flex flex-col">
            {accordionItems.map((item, i) => (
              <div
                key={i}
                className="border-b border-accent-wheat/15 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center gap-3 py-5 text-left group"
                >
                  <span className="w-6 h-6 rounded-full border border-accent-wheat/60 flex items-center justify-center flex-shrink-0 group-hover:border-accent-wheat transition-colors">
                    {openIndex === i ? (
                      <Minus size={12} className="text-accent-wheat" />
                    ) : (
                      <Plus size={12} className="text-accent-wheat" />
                    )}
                  </span>
                  <span
                    className={`text-base font-medium transition-colors ${
                      openIndex === i
                        ? "text-accent-cream"
                        : "text-accent-cream/60"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pl-9 pb-5 text-sm text-accent-cream/85 leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating quatrefoil — sits at the column boundary, near the bottom of the image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-float pointer-events-none absolute z-50 left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-32 md:w-40 lg:w-48"
        >
          <img src={float2} alt="" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
