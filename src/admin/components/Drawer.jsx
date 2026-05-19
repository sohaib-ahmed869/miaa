import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"

export default function Drawer({ open, onClose, title, subtitle, children, footer }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-40"
          />
          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[35rem] bg-white z-50 flex flex-col shadow-2xl"
          >
            <div className="px-6 py-5 border-b border-primary/10 flex items-start justify-between gap-4">
              <div>
                <p
                  className="text-lg text-primary tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {title}
                </p>
                {subtitle && (
                  <p className="text-xs text-primary/55 mt-0.5">{subtitle}</p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1.5 rounded-sm text-primary/60 hover:text-primary hover:bg-accent-cream"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
            {footer && (
              <div className="px-6 py-4 border-t border-primary/10 bg-accent-cream/60 flex items-center justify-end gap-3">
                {footer}
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
