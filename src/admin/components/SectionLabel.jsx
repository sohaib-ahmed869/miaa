import Quatrefoil from "./Quatrefoil"
import DottedDivider from "./DottedDivider"

export default function SectionLabel({ label, divider = true }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Quatrefoil className="w-3 h-3" />
        <span className="text-[0.625rem] font-normal tracking-[0.2em] uppercase text-secondary-terra">
          {label}
        </span>
      </div>
      {divider && <DottedDivider />}
    </div>
  )
}
