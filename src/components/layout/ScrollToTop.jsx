import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Resets scroll position to the top whenever the route's pathname changes.
 * Without this, React Router preserves scroll on navigation and lands new pages
 * mid-scroll (which is jarring for hero-led layouts).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use auto behaviour — instant scroll, no animation that fights page transitions
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  return null
}
