export default function DottedDivider({ color = "rgba(56,113,122,0.4)", className = "" }) {
  return (
    <div
      className={`h-[0.125rem] w-full ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 0.09375rem, transparent 0.09375rem)`,
        backgroundSize: "0.5rem 0.1875rem",
      }}
    />
  )
}
