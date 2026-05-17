import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { adminApi } from "../auth"
import PageHeader from "../components/PageHeader"
import Button from "../components/Button"
import Drawer from "../components/Drawer"
import EmptyState from "../components/EmptyState"
import ImageUpload from "../components/ImageUpload"
import { Field, TextInput, NumberInput, TextArea, Select, Checkbox } from "../components/Field"
import { useToast } from "../components/Toast"
import { SkeletonCardGrid } from "../components/Skeleton"

const EMPTY = {
  category: "offsite",
  date: "",
  location: "",
  title: "",
  description: "",
  imageKey: "",
  order: 0,
  published: true,
}

export default function EventsAdmin() {
  const [items, setItems] = useState([])
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY)
  const [busy, setBusy] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { notify } = useToast()

  const load = async () => {
    setLoading(true)
    try {
      const data = await adminApi.listEvents()
      setItems(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    load()
  }, [])

  const open = (item) => {
    if (item) {
      setEditing(item._id)
      setForm({ ...EMPTY, ...item })
    } else {
      setEditing("new")
      setForm(EMPTY)
    }
    setError("")
  }
  const close = () => {
    setEditing(null)
    setForm(EMPTY)
    setError("")
  }

  const save = async () => {
    setBusy(true)
    setError("")
    try {
      if (editing === "new") {
        await adminApi.createEvent(form)
        notify("Event created")
      } else {
        await adminApi.updateEvent(editing, form)
        notify("Event saved")
      }
      close()
      load()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const remove = async (id) => {
    if (!confirm("Delete this event?")) return
    await adminApi.deleteEvent(id)
    notify("Event deleted")
    load()
  }

  return (
    <div>
      <PageHeader
        label="Events"
        title="Upcoming Events"
        subtitle="Manage events shown on the Homepage and the Offsite Events page."
        actions={
          <Button onClick={() => open(null)} variant="primary" withArrow>
            <Plus size={13} strokeWidth={2.5} className="-ml-0.5 mr-0.5" />
            New Event
          </Button>
        }
      />

      {loading ? (
        <SkeletonCardGrid count={6} withImage />
      ) : items.length === 0 ? (
        <EmptyState
          title="No events yet"
          hint="Add your first event so the homepage and offsite pages have something to show."
        />
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {items.map((it) => (
            <motion.div
              key={it._id}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="group bg-white border border-primary/10 rounded-sm overflow-hidden hover:border-secondary-terra/60 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[16/10] bg-accent-cream relative overflow-hidden">
                {it.imageUrl ? (
                  <img
                    src={it.imageUrl}
                    alt={it.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary/30 text-[10px] tracking-[0.2em] uppercase">
                    No Image
                  </div>
                )}
                <span
                  className={`absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm ${
                    it.published
                      ? "bg-emerald-500/90 text-white"
                      : "bg-white/85 text-primary/70"
                  }`}
                >
                  {it.published ? "Published" : "Draft"}
                </span>
                <span className="absolute top-3 right-3 text-[9px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm bg-primary/85 text-accent-cream">
                  {it.category}
                </span>
              </div>
              <div className="p-4">
                <p className="text-[10px] tracking-[0.2em] uppercase text-secondary-terra mb-1">
                  {it.date}
                </p>
                <p className="text-base font-medium text-primary leading-tight mb-1">
                  {it.title}
                </p>
                {it.location && (
                  <p className="text-xs text-primary/55 italic">{it.location}</p>
                )}
                {it.description && (
                  <p className="text-[13px] text-primary/75 mt-3 line-clamp-2">
                    {it.description}
                  </p>
                )}
                <div className="flex gap-2 mt-4 pt-4 border-t border-primary/8">
                  <button
                    onClick={() => open(it)}
                    className="inline-flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-primary hover:text-secondary-terra transition-colors"
                  >
                    <Pencil size={11} /> Edit
                  </button>
                  <button
                    onClick={() => remove(it._id)}
                    className="ml-auto inline-flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-primary/50 hover:text-rose-600 transition-colors"
                  >
                    <Trash2 size={11} /> Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <Drawer
        open={editing !== null}
        onClose={close}
        title={editing === "new" ? "New Event" : "Edit Event"}
        subtitle="Events appear on the homepage Offsite Programs row or the dedicated Events page."
        footer={
          <>
            <Button onClick={close} variant="ghost">Cancel</Button>
            <Button onClick={save} variant="primary" disabled={busy} withArrow>
              {busy ? "Saving…" : "Save"}
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-5">
          {error && (
            <p className="text-xs text-rose-600 bg-rose-50 px-3 py-2 rounded-sm">{error}</p>
          )}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Category">
              <Select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option value="homepage">Homepage</option>
                <option value="offsite">Offsite Events page</option>
              </Select>
            </Field>
            <Field label="Order" hint="Lower numbers appear first">
              <NumberInput
                value={form.order}
                onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Date" hint="e.g. 07.02.26 or TBA">
              <TextInput
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                placeholder="07.02.26"
              />
            </Field>
            <Field label="Location">
              <TextInput
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="At Gallery A, MIAA"
              />
            </Field>
          </div>
          <Field label="Title">
            <TextInput
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Islamic Art Showcase"
            />
          </Field>
          <Field label="Description">
            <TextArea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={4}
              placeholder="Short blurb shown beneath the event title…"
            />
          </Field>
          <ImageUpload
            folder="events"
            currentKey={form.imageKey}
            onUploaded={(key) => setForm({ ...form, imageKey: key })}
          />
          <div className="pt-2">
            <Checkbox
              label="Published"
              checked={form.published}
              onChange={(v) => setForm({ ...form, published: v })}
            />
          </div>
        </div>
      </Drawer>
    </div>
  )
}
