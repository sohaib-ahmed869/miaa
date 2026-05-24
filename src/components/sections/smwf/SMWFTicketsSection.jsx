import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import CTAButton from "../../ui/Button"

import smwf1 from "../../../assets/images/Homepage/SMWF/SMWF-01.png"
import smwf2 from "../../../assets/images/Homepage/SMWF/SMWF-02.png"

const SIDE_EVENTS = [
  {
    label: "Opening Night",
    date: "10 April 2026",
    time: "7:00 PM – 9:00 PM",
    venue: "Parramatta Town Hall",
    price: "$10 per person",
    image: smwf1,
  },
  {
    label: "Workshop Day",
    date: "19 April 2026",
    time: "10:00 AM – 1:30 PM",
    venue: "ISRA Centre Sydney",
    price: "$45 per person",
    image: smwf2,
  },
]

export default function SMWFTicketsSection() {
  return (
    <section className="bg-primary py-20 md:py-28 3xl:py-36">
      <div className="max-w-[1400px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-16 3xl:px-24">
        <motion.div {...fadeInUp} className="mb-12 md:mb-14 max-w-3xl">
          <p className="text-[0.6875rem] 3xl:text-sm tracking-[0.3em] uppercase text-accent-wheat mb-4">
            Across the Festival Period
          </p>
          <h2 className="text-3xl md:text-5xl 3xl:text-[3.75rem] font-medium text-accent-cream tracking-tight leading-tight">
            Tickets & Side Events
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7"
        >
          {SIDE_EVENTS.map((e) => (
            <motion.div
              key={e.label}
              {...staggerItem}
              className="bg-accent-cream rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.label}
                  className="w-full object-cover"
                  style={{ height: "100%" }}
                />
              </div>
              <div className="p-7 md:p-9 3xl:p-12">
                <p className="text-[0.625rem] 3xl:text-xs tracking-[0.3em] uppercase text-secondary-terra mb-4">
                  {e.label}
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
                  <div>
                    <p className="text-[0.625rem] 3xl:text-xs tracking-[0.25em] uppercase text-primary/55 mb-1">
                      Date
                    </p>
                    <p className="text-base 3xl:text-lg font-medium text-primary">
                      {e.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] 3xl:text-xs tracking-[0.25em] uppercase text-primary/55 mb-1">
                      Time
                    </p>
                    <p className="text-base 3xl:text-lg font-medium text-primary">
                      {e.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] 3xl:text-xs tracking-[0.25em] uppercase text-primary/55 mb-1">
                      Venue
                    </p>
                    <p className="text-base 3xl:text-lg font-medium text-primary">
                      {e.venue}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.625rem] 3xl:text-xs tracking-[0.25em] uppercase text-primary/55 mb-1">
                      Price
                    </p>
                    <p className="text-base 3xl:text-lg font-medium text-primary">
                      {e.price}
                    </p>
                  </div>
                </div>
                <CTAButton href="https://www.miaaustralia.org/smwf">
                  Register
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
