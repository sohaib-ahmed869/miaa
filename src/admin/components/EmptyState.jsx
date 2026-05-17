import { motion } from "framer-motion"
import Quatrefoil from "./Quatrefoil"

export default function EmptyState({ title = "Nothing here yet", hint = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center py-16"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-cream mb-4">
        <Quatrefoil size={18} fill="#7A3A42" />
      </div>
      <p className="text-base font-medium text-primary">{title}</p>
      {hint && <p className="text-sm text-primary/55 mt-1">{hint}</p>}
    </motion.div>
  )
}
