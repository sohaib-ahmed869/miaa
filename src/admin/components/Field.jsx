export function Field({ label, hint, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-[0.625rem] tracking-[0.2em] uppercase text-primary/55 mb-1.5">
        {label}
      </span>
      {children}
      {hint && <span className="block text-[0.6875rem] text-primary/50 mt-1">{hint}</span>}
    </label>
  )
}

const baseInput =
  "block w-full px-3 py-2.5 text-sm text-primary bg-white border border-primary/15 rounded-sm placeholder:text-primary/35 focus:outline-none focus:border-secondary-terra/70 focus:ring-1 focus:ring-secondary-terra/30 transition-colors"

export function TextInput(props) {
  return <input className={baseInput} {...props} />
}

export function NumberInput(props) {
  return <input type="number" className={baseInput} {...props} />
}

export function TextArea(props) {
  return <textarea className={`${baseInput} resize-none`} {...props} />
}

export function Select({ children, ...props }) {
  return (
    <select className={`${baseInput} appearance-none cursor-pointer pr-8`} {...props}>
      {children}
    </select>
  )
}

export function Checkbox({ label, checked, onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-primary cursor-pointer select-none">
      <span
        className={`w-4 h-4 rounded-sm border transition-colors ${
          checked ? "bg-secondary-terra border-secondary-terra" : "bg-white border-primary/30"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 16 16" className="w-full h-full text-white">
            <path d="M3 8l3.5 3.5L13 5" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        )}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      {label}
    </label>
  )
}
