function QuatrefoilIcon() {
  return (
    <svg viewBox="0 0 100 100" fill="#DD613E" className="w-3.5 h-3.5">
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" fill="#DD613E" />
    </svg>
  )
}

export default function SectionDivider({
  label,
  bg = "bg-bg",
  variant = "light",
}) {
  // light = ivory/cream bg sections, dark = teal (#214952) bg sections
  const textColor = variant === "dark" ? "#D7B893" : "#7A3A42"
  const lineColor = variant === "dark" ? "#D7B893" : "#38717A"

  return (
    <div className={`w-full px-6 md:px-10 lg:px-16 3xl:px-24 pt-8 pb-2 ${bg}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="flex-shrink-0">
          <QuatrefoilIcon />
        </span>
        <span
          className="text-[0.625rem] font-normal tracking-[0.2em] uppercase"
          style={{ color: textColor }}
        >
          {label}
        </span>
      </div>
      <div
        className="h-[0.125rem] w-full"
        style={{
          backgroundImage: `radial-gradient(circle, ${lineColor}50 0.09375rem, transparent 0.09375rem)`,
          backgroundSize: "0.5rem 0.1875rem",
        }}
      />
    </div>
  )
}
