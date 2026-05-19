import { createContext, useContext, useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, AlertCircle, X } from "lucide-react"

const ToastContext = createContext({ notify: () => {} })

export function ToastProvider({ children }) {
  const [items, setItems] = useState([])

  const notify = useCallback((message, type = "success") => {
    const id = Math.random().toString(36).slice(2)
    setItems((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setItems((prev) => prev.filter((t) => t.id !== id))
    }, 3500)
  }, [])

  const dismiss = (id) => setItems((prev) => prev.filter((t) => t.id !== id))

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {items.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className={`pointer-events-auto flex items-start gap-3 p-3 pl-4 rounded-md shadow-lg border ${
                t.type === "error"
                  ? "bg-rose-50 border-rose-200 text-rose-800"
                  : "bg-primary text-accent-cream border-primary/40"
              }`}
            >
              {t.type === "error" ? (
                <AlertCircle className="w-4.5 h-4.5 mt-0.5 text-rose-500" />
              ) : (
                <CheckCircle2 className="w-4.5 h-4.5 mt-0.5 text-accent-wheat" />
              )}
              <p className="flex-1 text-sm leading-snug">{t.message}</p>
              <button
                onClick={() => dismiss(t.id)}
                className="opacity-60 hover:opacity-100"
                aria-label="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
