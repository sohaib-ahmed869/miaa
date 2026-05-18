import { motion } from "framer-motion"

import stageImg from "../../../assets/images/GalaDinner/hero.jpg"

export default function StageBannerSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="w-full bg-bg-deep"
    >
      <div className="w-full h-[260px] md:h-[380px] lg:h-[440px] 3xl:h-[560px] overflow-hidden">
        <img
          src={stageImg}
          alt="Inaugural Gala Dinner — stage performance"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.div>
  )
}
