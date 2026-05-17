import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { adminApi } from "../auth"
import PageHeader from "../components/PageHeader"
import Button from "../components/Button"
import Drawer from "../components/Drawer"
import EmptyState from "../components/EmptyState"
import ImageUpload from "../components/ImageUpload"
import { Field, TextInput, NumberInput, Select, Checkbox } from "../components/Field"
import { useToast } from "../components/Toast"
import { SkeletonList } from "../components/Skeleton"

const EMPTY = { title: "", imageKey: "", date: "", surface: "homepage", order: 0, published: true }

export default function PreviousEventsAdmin() {
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
      const data = await adminApi.listPreviousEvents()
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
        await adminApi.createPreviousEvent(form)
        notify("Created")
      } else {
        await adminApi.updatePreviousEvent(editing, form)
        notify("Saved")
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
    if (!confirm("Delete this entry?")) return
    await adminApi.deletePreviousEvent(id)
    notify("Deleted")
    load()
  }

  return (
    <div>
      <PageHeader
        label="Archive"
        title="Previous Events"
        subtitle="Past events listed in the &lsquo;Previous Events&rsquo; row on the homepage or the dedicated Offsite Events page."
        actions={
          <Button onClick={() => open(null)} variant="primary" withArrow>
            <Plus size={13} strokeWidth={2.5} className="-ml-0.5 mr-0.5" />
            New Entry
          </Button>
        }
      />

      {loading ? (
        <SkeletonList count={5} withThumb />
      ) : items.length === 0 ? (
        <EmptyState title="No previous events" hint="They&apos;ll appear in the public lists once added." />
      ) : (
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="bg-white border border-primary/10 rounded-sm divide-y divide-primary/8 overflow-hidden"
        >
          {items.map((it) => (
            <motion.li
              key={it._id}
              variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-4 px-5 py-3 hover:bg-accent-cream/60 transition-colors"
            >
              <div className="w-16 h-12 bg-accent-cream rounded-sm overflow-hidden flex-shrink-0">
                {it.imageUrl && (
                  <img src={it.imageUrl} alt="" className="w-full h-full object-cover" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-primary text-sm font-medium truncate">{it.title}</p>
                <p className="text-[11px] text-primary/55 tracking-wide uppercase">
                  {it.surface} {it.date && `· ${it.date}`}
                </p>
              </div>
              <button
                onClick={() => open(it)}
                className="inline-flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-primary hover:text-secondary-terra transition-colors"
              >
                <Pencil size={11} /> Edit
              </button>
              <button
                onClick={() => remove(it._id)}
                className="inline-flex items-center gap-1 text-[10px] tracking-[0.2em] uppercase text-primary/50 hover:text-rose-600 transition-colors"
              >
                <Trash2 size={11} /> Delete
              </button>
            </motion.li>
          ))}
        </motion.ul>
      )}

      <Drawer
        open={editing !== null}
        onClose={close}
        title={editing === "new" ? "New Previous Event" : "Edit Previous Event"}
        subtitle="Title + image is enough; the public list uses the hover-image effect."
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
          <Field label="Title">
            <TextInput
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Surface">
              <Select
                value={form.surface}
                onChange={(e) => setForm({ ...form, surface: e.target.value })}
              >
                <option value="homepage">Homepage</option>
                <option value="offsite">Offsite Events page</option>
              </Select>
            </Field>
            <Field label="Order">
              <NumberInput
                value={form.order}
                onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
              />
            </Field>
          </div>
          <Field label="Date (display)">
            <TextInput
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
          </Field>
          <ImageUpload
            folder="previous-events"
            currentKey={form.imageKey}
            onUploaded={(key) => setForm({ ...form, imageKey: key })}
          />
          <Checkbox
            label="Published"
            checked={form.published}
            onChange={(v) => setForm({ ...form, published: v })}
          />
        </div>
      </Drawer>
    </div>
  )
}
