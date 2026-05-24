import { useEffect, useState } from "react"

export function useCountdown(targetDate) {
  const target = new Date(targetDate).getTime()
  const compute = () => {
    const diff = Math.max(0, target - Date.now())
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds, done: diff === 0 }
  }
  const [time, setTime] = useState(compute)
  useEffect(() => {
    const id = setInterval(() => setTime(compute()), 1000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])
  return time
}
