// Shared quatrefoil marker — same shape used across the public site
export default function Quatrefoil({ size = 14, fill = "#C15C45", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill={fill}
      className={`flex-shrink-0 ${className}`}
    >
      <circle cx="50" cy="22" r="25" />
      <circle cx="50" cy="78" r="25" />
      <circle cx="22" cy="50" r="25" />
      <circle cx="78" cy="50" r="25" />
      <rect x="22" y="22" width="56" height="56" rx="4" />
    </svg>
  )
}
