import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import CTAButton from "../../ui/Button"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwf2 from "../../../assets/images/Homepage/SMWF/SMWF-02.png"
import smwf3 from "../../../assets/images/Homepage/SMWF/SMWF-03.png"

const HIGHLIGHTS = [
  {
    title: "Panel Discussions",
    body: "Thought-provoking conversations with writers, academics, and creatives exploring pressing ideas, stories, and perspectives.",
    image: smwf1,
  },
  {
    title: "Book Signings with Authors",
    body: "Meet your favourite authors in person and take home a signed copy as a treasured keepsake.",
    image: smwf2,
  },
  {
    title: "Hanging Poem Exhibition",
    body: "Experience poetry brought to life through a stunning visual display of words suspended in space.",
    image: smwf3,
  },
  {
    title: "Little Readers Corner",
    body: "A cosy space dedicated to children's love of books, brought to you by ISRA Children's Library.",
    image: smwf1,
  },
  {
    title: "Stalls",
    body: "Browse a vibrant marketplace of books, art, and community initiatives.",
    image: smwf2,
  },
  {
    title: "Teens with Pens",
    body: "A dynamic writing workshop for young creatives, guided by author George Green.",
    image: smwf3,
  },
]

const PAST_FESTIVAL_IMAGES = [smwf1, smwf2, smwf3, smwf1, smwf2, smwf3, smwf1, smwf2]

export default function SMWFProgramHighlightsSection() {
  return (
    <>
      {/* Program Highlights */}
      <section className="bg-primary py-20 md:py-28 3xl:py-36">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14"
          >
            <div>
              <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
                Programme Highlights
              </p>
              <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-accent-cream tracking-tight leading-tight">
                Program Highlights
              </h2>
            </div>
            <CTAButton href="https://www.miaaustralia.org/smwf">
              Download Full Programme
            </CTAButton>
          </motion.div>

          <motion.div
            {...staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {HIGHLIGHTS.map((h) => (
              <motion.div
                key={h.title}
                {...staggerItem}
                className="group bg-accent-cream rounded-xl overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={h.image}
                    alt={h.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ height: "100%" }}
                  />
                </div>
                <div className="p-6 md:p-7 3xl:p-9">
                  <h3 className="text-lg md:text-xl 3xl:text-2xl font-medium text-primary leading-tight">
                    {h.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base 3xl:text-lg text-primary/75 leading-relaxed">
                    {h.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights from Past Festivals */}
      <section className="bg-primary py-20 md:py-28 3xl:py-36 border-t border-accent-cream/10">
        <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
          <motion.div {...fadeInUp} className="mb-12 md:mb-14 max-w-3xl">
            <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
              From the Archive
            </p>
            <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-accent-cream tracking-tight leading-tight">
              Highlights from Past Festivals
            </h2>
          </motion.div>

          {/* Featured video poster */}
          <motion.div
            {...fadeInUp}
            className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 md:mb-8 group cursor-pointer"
          >
            <img
              src={smwf1}
              alt="Festival highlights"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              style={{ height: "100%" }}
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 md:w-24 md:h-24 3xl:w-32 3xl:h-32 rounded-full bg-accent-cream/95 group-hover:bg-white transition-colors flex items-center justify-center shadow-2xl">
                <Play
                  className="w-8 h-8 md:w-10 md:h-10 3xl:w-12 3xl:h-12 text-secondary-terra translate-x-0.5"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            </div>
          </motion.div>

          {/* Thumbnail strip */}
          <motion.div
            {...staggerContainer}
            className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-3"
          >
            {PAST_FESTIVAL_IMAGES.map((img, i) => (
              <motion.div
                key={i}
                {...staggerItem}
                className="aspect-square overflow-hidden rounded-md cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover"
                  style={{ height: "100%" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
