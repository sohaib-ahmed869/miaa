import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import BlogDetailSection from "../components/sections/blog/BlogDetailSection"
import { BLOG_ARTICLES } from "../lib/constants"
import { api } from "../lib/api"

/**
 * Convert a body value into the {type,text}[] shape BlogDetailSection expects.
 * - Arrays: pass through
 * - HTML strings: split into intro + paragraph blocks, stripping tags
 * - Anything else / empty: undefined → component falls back to its lorem default
 */
function bodyToBlocks(body) {
  if (Array.isArray(body)) return body
  if (typeof body !== "string" || !body.trim()) return undefined

  const stripTags = (s) => s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()

  const blocks = []
  const pTagMatches = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
  if (pTagMatches.length) {
    pTagMatches.forEach((m, i) => {
      const text = stripTags(m[1])
      if (!text) return
      blocks.push({ type: i === 0 ? "intro" : "paragraph", text })
    })
  } else {
    // No <p> tags — split on blank lines
    body
      .split(/\n\s*\n/)
      .map((s) => stripTags(s))
      .filter(Boolean)
      .forEach((text, i) => {
        blocks.push({ type: i === 0 ? "intro" : "paragraph", text })
      })
  }

  return blocks.length ? blocks : undefined
}

function normalise(post) {
  if (!post) return null
  return {
    ...post,
    image: post.image || "",
    imageUrl: post.coverImageUrl || post.imageUrl || "",
    body: bodyToBlocks(post.body),
  }
}

export default function BlogDetail() {
  const { slug } = useParams()
  // Start with the static fallback so we render immediately + survive offline
  const [article, setArticle] = useState(() =>
    BLOG_ARTICLES.find((a) => a.slug === slug) || null
  )
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setNotFound(false)
    api
      .blogBySlug(slug)
      .then((post) => {
        if (cancelled) return
        setArticle(normalise(post))
      })
      .catch((err) => {
        if (cancelled) return
        // If the CMS doesn't have it AND we don't have a fallback, show 404
        const staticMatch = BLOG_ARTICLES.find((a) => a.slug === slug)
        if (!staticMatch) {
          if (err.status === 404) setNotFound(true)
          else setArticle(null)
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [slug])

  if (notFound || (!loading && !article)) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-bg-deep px-6">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-accent-wheat mb-3">404</p>
          <h1 className="text-3xl md:text-4xl text-accent-cream mb-4">
            We couldn&apos;t find that post.
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 px-5 py-2.5 bg-secondary-terra text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-bg-deep">
        <p className="text-accent-cream/60 text-sm tracking-[0.2em] uppercase">Loading…</p>
      </section>
    )
  }

  return <BlogDetailSection article={article} />
}
