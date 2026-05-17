export default function DottedDivider({ color = "rgba(56,113,122,0.4)", className = "" }) {
  return (
    <div
      className={`h-[2px] w-full ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: "8px 3px",
      }}
    />
  )
}
