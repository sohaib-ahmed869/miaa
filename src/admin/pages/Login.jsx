import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { adminApi, setSession, getToken } from "../auth"
import smallLogo from "../../assets/images/Homepage/smalllogo.png"
import floatingOrnament from "../../assets/images/Homepage/herotoprightelement.png"
import Quatrefoil from "../components/Quatrefoil"
import DottedDivider from "../components/DottedDivider"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [busy, setBusy] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/admin"

  if (getToken()) {
    navigate(from, { replace: true })
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setBusy(true)
    setError("")
    try {
      const { token, admin } = await adminApi.login(email, password)
      setSession(token, admin)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || "Login failed")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-bg-deep text-accent-cream flex items-center justify-center px-4 overflow-hidden">
      {/* Top-right glossy ornament with gentle float */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="hero-float absolute -top-12 -right-12 md:-top-16 md:-right-16 lg:-top-20 lg:-right-20 w-48 md:w-64 lg:w-80 pointer-events-none"
      >
        <img src={floatingOrnament} alt="" className="w-full h-auto" />
      </motion.div>

      {/* Bottom-left small logo watermark */}
      <div className="absolute bottom-6 left-6 opacity-60 hidden md:block">
        <img src={smallLogo} alt="" className="h-7 w-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-md"
      >
        {/* Section label */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Quatrefoil size={11} />
            <span className="text-[10px] font-normal tracking-[0.25em] uppercase text-secondary-terra">
              CMS Admin
            </span>
          </div>
          <DottedDivider color="rgba(215,184,147,0.4)" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.1] mb-2"
        >
          Welcome back
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-sm text-accent-cream/70 mb-8"
        >
          Sign in to manage Museum of Islamic Art Australia content.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          onSubmit={onSubmit}
          className="bg-bg-deep/40 border border-accent-wheat/15 rounded-sm p-7 backdrop-blur-sm"
        >
          <label className="block text-[10px] tracking-[0.2em] uppercase text-accent-wheat mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
            placeholder="you@example.com"
            className="w-full mb-5 bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
          />

          <label className="block text-[10px] tracking-[0.2em] uppercase text-accent-wheat mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full mb-6 bg-transparent field-dotted-line text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
          />

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-secondary-terra mb-4"
              role="alert"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            type="submit"
            disabled={busy}
            className="group w-full inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-secondary-terra hover:bg-secondary-rust disabled:opacity-60 text-white text-[11px] font-semibold tracking-[0.15em] uppercase rounded-sm transition-colors"
          >
            {busy ? "Signing in…" : "Sign in"}
            <ArrowUpRight
              size={13}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}
