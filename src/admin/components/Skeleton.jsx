import { motion } from "framer-motion"

const pulse = {
  initial: { opacity: 0.4 },
  animate: { opacity: [0.4, 0.75, 0.4] },
  transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
}

/** A single shimmer block — uses brand cream so it blends with the admin background. */
export function SkeletonBlock({ className = "" }) {
  return (
    <motion.div
      {...pulse}
      className={`bg-primary/10 rounded-sm ${className}`}
    />
  )
}

/** Branded card-grid skeleton — used by Events, Previous Events, Team list views. */
export function SkeletonCardGrid({ count = 6, withImage = true, columns = "md:grid-cols-2 xl:grid-cols-3" }) {
  return (
    <div className={`grid grid-cols-1 ${columns} gap-4`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="bg-white border border-primary/10 rounded-sm overflow-hidden"
        >
          {withImage && <SkeletonBlock className="aspect-[16/10]" />}
          <div className="p-4 flex flex-col gap-3">
            <SkeletonBlock className="h-3 w-16" />
            <SkeletonBlock className="h-5 w-3/4" />
            <SkeletonBlock className="h-3 w-1/2" />
            <SkeletonBlock className="h-3 w-full mt-2" />
            <SkeletonBlock className="h-3 w-5/6" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/** Branded list-row skeleton — used by Previous Events / Newsletter / Contact list views. */
export function SkeletonList({ count = 6, withThumb = false }) {
  return (
    <div className="bg-white border border-primary/10 rounded-sm divide-y divide-primary/8 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03, duration: 0.3 }}
          className="flex items-center gap-4 px-5 py-3"
        >
          {withThumb && <SkeletonBlock className="w-16 h-12 flex-shrink-0" />}
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <SkeletonBlock className="h-3.5 w-2/5" />
            <SkeletonBlock className="h-2.5 w-1/3" />
          </div>
          <SkeletonBlock className="h-3 w-24" />
        </motion.div>
      ))}
    </div>
  )
}

/** Dashboard-style stat-card skeleton row. */
export function SkeletonStatCards({ count = 5 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="bg-white border border-primary/10 rounded-sm p-5"
        >
          <div className="flex items-start justify-between mb-4">
            <SkeletonBlock className="w-9 h-9 rounded-sm" />
            <SkeletonBlock className="w-4 h-4 rounded-sm" />
          </div>
          <SkeletonBlock className="h-9 w-16 mb-3" />
          <SkeletonBlock className="h-2.5 w-3/4" />
        </motion.div>
      ))}
    </div>
  )
}

/** Round-portrait grid skeleton for the Team page. */
export function SkeletonPortraitGrid({ count = 8 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="bg-white border border-primary/10 rounded-sm p-5 flex flex-col items-center"
        >
          <SkeletonBlock className="w-24 h-24 rounded-full mb-3" />
          <SkeletonBlock className="h-3.5 w-3/4 mb-2" />
          <SkeletonBlock className="h-3 w-1/2" />
        </motion.div>
      ))}
    </div>
  )
}
