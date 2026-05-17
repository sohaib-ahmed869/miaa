import Quatrefoil from "./Quatrefoil"
import DottedDivider from "./DottedDivider"

export default function SectionLabel({ label, divider = true }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Quatrefoil size={11} />
        <span className="text-[10px] font-normal tracking-[0.2em] uppercase text-secondary-terra">
          {label}
        </span>
      </div>
      {divider && <DottedDivider />}
    </div>
  )
}
