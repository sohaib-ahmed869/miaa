import { useEffect, useState } from "react"

/**
 * Fetch CMS data with a static fallback. If the backend is unreachable
 * (dev offline, CORS, etc.) the component still renders the original copy.
 */
export function useCMS(fetcher, fallback) {
  const [data, setData] = useState(fallback)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetcher()
      .then((result) => {
        if (cancelled) return
        if (Array.isArray(result) && result.length === 0) {
          // Backend has no entries yet — keep showing the static fallback so the
          // site doesn't look empty until the admin adds content.
          setData(fallback)
        } else {
          setData(result)
        }
        setError(null)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err)
        setData(fallback)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}
