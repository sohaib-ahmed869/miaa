import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { UploadCloud, Image as ImageIcon, X } from "lucide-react"
import { uploadFileToS3 } from "../auth"

const BASE = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "")

async function fetchPresignedGet(key) {
  if (!key) return ""
  try {
    const res = await fetch(`${BASE}/api/uploads/sign-get?key=${encodeURIComponent(key)}`)
    if (!res.ok) return ""
    const data = await res.json()
    return data.url || ""
  } catch {
    return ""
  }
}

export default function ImageUpload({
  folder = "uploads",
  currentKey,
  onUploaded,
  label = "Image",
}) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")
  const [drag, setDrag] = useState(false)

  useEffect(() => {
    let cancelled = false
    if (currentKey) {
      fetchPresignedGet(currentKey).then((url) => {
        if (!cancelled) setPreviewUrl(url)
      })
    } else {
      setPreviewUrl("")
    }
    return () => {
      cancelled = true
    }
  }, [currentKey])

  const handleFile = async (file) => {
    if (!file) return
    setUploading(true)
    setError("")
    try {
      const localUrl = URL.createObjectURL(file)
      setPreviewUrl(localUrl)
      const key = await uploadFileToS3(file, folder)
      onUploaded(key)
    } catch (err) {
      setError(err.message || "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  const onChange = (e) => handleFile(e.target.files?.[0])
  const onDrop = (e) => {
    e.preventDefault()
    setDrag(false)
    handleFile(e.dataTransfer.files?.[0])
  }

  const clear = () => {
    setPreviewUrl("")
    onUploaded("")
  }

  return (
    <div>
      <p className="block text-[10px] tracking-[0.2em] uppercase text-primary/55 mb-1.5">
        {label}
      </p>

      {previewUrl ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative group rounded-sm overflow-hidden border border-primary/15"
        >
          <img src={previewUrl} alt="" className="w-full h-48 object-cover block" />
          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <label className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 bg-white text-primary text-[10px] tracking-[0.15em] uppercase rounded-sm hover:bg-accent-cream">
              <UploadCloud size={12} /> Replace
              <input type="file" accept="image/*" onChange={onChange} className="hidden" />
            </label>
            <button
              type="button"
              onClick={clear}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary-terra text-white text-[10px] tracking-[0.15em] uppercase rounded-sm hover:bg-secondary-rust"
            >
              <X size={12} /> Remove
            </button>
          </div>
          {uploading && (
            <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
              <p className="text-xs tracking-[0.2em] uppercase text-white">Uploading…</p>
            </div>
          )}
        </motion.div>
      ) : (
        <label
          onDragOver={(e) => {
            e.preventDefault()
            setDrag(true)
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={onDrop}
          className={`flex flex-col items-center justify-center gap-2 px-4 py-10 border border-dashed rounded-sm cursor-pointer transition-colors ${
            drag
              ? "border-secondary-terra bg-secondary-terra/5"
              : "border-primary/25 hover:border-primary/45 bg-accent-cream/40"
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary/60">
            {uploading ? <ImageIcon size={18} /> : <UploadCloud size={18} />}
          </div>
          <p className="text-sm text-primary">
            {uploading ? "Uploading…" : "Drop an image or click to upload"}
          </p>
          <p className="text-[11px] text-primary/50">PNG / JPG · max ~5 MB</p>
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            disabled={uploading}
            className="sr-only"
          />
        </label>
      )}

      {currentKey && (
        <p className="text-[10px] text-primary/45 break-all mt-2">key: {currentKey}</p>
      )}
      {error && <p className="text-xs text-rose-600 mt-2">{error}</p>}
    </div>
  )
}
