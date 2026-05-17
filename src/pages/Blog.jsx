import { useMemo } from "react"
import BlogHeroSection from "../components/sections/blog/BlogHeroSection"
import BlogGridSection from "../components/sections/blog/BlogGridSection"
import SectionDivider from "../components/ui/SectionDivider"
import { BLOG_ARTICLES } from "../lib/constants"
import { useCMS } from "../hooks/useCMS"
import { api } from "../lib/api"

// Normalise a CMS blog doc into the shape the public components expect.
function toArticle(post) {
  return {
    ...post,
    image: post.image || "",
    imageUrl: post.coverImageUrl || post.imageUrl || "",
    body: post.body || "",
  }
}

export default function Blog() {
  // Fallbacks (used while loading, when API is unreachable, or when the CMS is empty)
  const fallbackUpdates = useMemo(
    () => BLOG_ARTICLES.filter((a) => a.category === "Update"),
    []
  )
  const fallbackPosts = useMemo(
    () => BLOG_ARTICLES.filter((a) => a.category === "Blog"),
    []
  )

  const { data: cmsUpdates } = useCMS(
    () => api.blogList({ category: "Update" }).then((items) => items.map(toArticle)),
    fallbackUpdates
  )
  const { data: cmsPosts } = useCMS(
    () => api.blogList({ category: "Blog" }).then((items) => items.map(toArticle)),
    fallbackPosts
  )

  return (
    <>
      <BlogHeroSection />

      <SectionDivider label="Updates" bg="bg-accent-cream" variant="light" />
      <BlogGridSection
        heading="MIAA Updates"
        intro="Check in to read about our latest news, reviews and happenings.
For up to the minute news and updates remember to follow us on our socials."
        articles={cmsUpdates}
      />

      <SectionDivider label="Blog" bg="bg-bg" variant="light" />
      <BlogGridSection
        heading="MIAA Blog Posts"
        intro="Check in to hear from the MIAA team about all things Islamic art, literature and creative communities."
        articles={cmsPosts}
        bg="bg-bg"
      />
    </>
  )
}
