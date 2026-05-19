import { useEffect, useRef, useState } from "react"

/**
 * Fetch CMS data with a static fallback. If the backend is unreachable
 * (dev offline, CORS, etc.) the component still renders the original copy.
 */
export function useCMS(fetcher, fallback) {
  const [data, setData] = useState(fallback)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetcherRef = useRef(fetcher)
  fetcherRef.current = fetcher

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)

    fetcherRef.current()
      .then((result) => {
        if (controller.signal.aborted) return
        if (Array.isArray(result) && result.length === 0) {
          setData(fallback)
        } else {
          setData(result)
        }
        setError(null)
      })
      .catch((err) => {
        if (controller.signal.aborted) return
        setError(err)
        setData(fallback)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}
