import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const variantClass = {
  primary:
    "bg-secondary-terra text-white hover:bg-secondary-rust disabled:opacity-60",
  ghost:
    "bg-transparent text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/5",
  dark: "bg-primary text-white hover:bg-primary/85",
  danger:
    "bg-rose-600 text-white hover:bg-rose-500 disabled:opacity-60",
  soft: "bg-accent-cream text-primary hover:bg-accent-cream/70 border border-primary/10",
}

export default function Button({
  children,
  variant = "primary",
  withArrow = false,
  type = "button",
  onClick,
  disabled,
  className = "",
  as: Tag = "button",
  ...rest
}) {
  const cls = `group inline-flex items-center gap-1.5 px-5 py-2.5 text-[0.6875rem] font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors ${variantClass[variant] || ""} ${className}`
  return (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className="inline-flex"
    >
      <Tag
        type={Tag === "button" ? type : undefined}
        disabled={disabled}
        onClick={onClick}
        className={cls}
        {...rest}
      >
        {children}
        {withArrow && (
          <ArrowUpRight
            className="w-3.5 h-3.5"
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </Tag>
    </motion.span>
  )
}
