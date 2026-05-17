import { motion } from "framer-motion"
import SectionLabel from "./SectionLabel"

export default function PageHeader({ label, title, subtitle, actions }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-8 md:mb-10"
    >
      <SectionLabel label={label} />
      <div className="mt-5 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium text-primary tracking-tight leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-primary/65 mt-2 max-w-2xl">{subtitle}</p>
          )}
        </div>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    </motion.div>
  )
}
