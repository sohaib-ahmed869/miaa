function QuatrefoilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 100 100" fill="#DD613E" className="3xl:w-[18px] 3xl:h-[18px]">
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
    <div className={`w-full px-6 md:px-10 lg:px-16 3xl:px-24 pt-8 3xl:pt-10 pb-2 3xl:pb-3 ${bg}`}>
      <div className="flex items-center gap-2 3xl:gap-3 mb-2">
        <span className="flex-shrink-0">
          <QuatrefoilIcon />
        </span>
        <span
          className="text-[10px] 3xl:text-sm font-normal tracking-[0.2em] uppercase"
          style={{ color: textColor }}
        >
          {label}
        </span>
      </div>
      <div
        className="h-[2px] 3xl:h-[3px] w-full"
        style={{
          backgroundImage: `radial-gradient(circle, ${lineColor}50 1.5px, transparent 1.5px)`,
          backgroundSize: "8px 3px",
        }}
      />
    </div>
  )
}
