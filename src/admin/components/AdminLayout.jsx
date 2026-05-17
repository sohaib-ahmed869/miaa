import { NavLink, Outlet, useNavigate, Link, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import {
  LogOut,
  Calendar,
  Archive,
  Users,
  Inbox,
  Mail,
  LayoutDashboard,
  ExternalLink,
  FileText,
} from "lucide-react"
import { clearSession, getAdminUser } from "../auth"
import { ToastProvider } from "./Toast"
import smallLogo from "../../assets/images/Homepage/smalllogo.png"
import Quatrefoil from "./Quatrefoil"

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/events", label: "Events", icon: Calendar },
  { to: "/admin/previous-events", label: "Previous Events", icon: Archive },
  { to: "/admin/team", label: "Team", icon: Users },
  { to: "/admin/blog", label: "Blog Posts", icon: FileText },
  { to: "/admin/contact", label: "Contact Submissions", icon: Inbox },
  { to: "/admin/newsletter", label: "Newsletter", icon: Mail },
]

function NavItem({ item }) {
  return (
    <NavLink to={item.to} end={item.end} className="block">
      {({ isActive }) => (
        <div
          className={`relative flex items-center gap-3 px-4 py-2.5 rounded-sm text-[13px] transition-colors duration-200 ${
            isActive
              ? "text-secondary-terra"
              : "text-accent-cream/70 hover:text-accent-cream"
          }`}
        >
          {/* Animated quatrefoil marker for active item */}
          <AnimatePresence>
            {isActive && (
              <motion.span
                layoutId="nav-marker"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute -left-1"
              >
                <Quatrefoil size={10} />
              </motion.span>
            )}
          </AnimatePresence>
          <item.icon size={15} strokeWidth={1.75} />
          <span className="tracking-wide">{item.label}</span>
        </div>
      )}
    </NavLink>
  )
}

export default function AdminLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const admin = getAdminUser()

  const onLogout = () => {
    clearSession()
    navigate("/admin/login", { replace: true })
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-accent-cream text-primary">
        <div className="flex">
          {/* Sidebar — branded dark teal */}
          <aside className="fixed inset-y-0 left-0 w-64 bg-bg-deep text-accent-cream flex flex-col z-30">
            <div className="px-6 pt-7 pb-6">
              <Link to="/admin" className="flex items-center gap-3">
                <img src={smallLogo} alt="MIAA" className="h-8 w-auto" />
                
              </Link>
            </div>

            {/* Dotted divider */}
            <div className="mx-6">
              <div
                className="h-[2px]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(215,184,147,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 3px",
                }}
              />
            </div>

            <nav className="flex-1 py-5 px-3 flex flex-col gap-0.5">
              {NAV.map((item) => (
                <NavItem key={item.to} item={item} />
              ))}
            </nav>

            <div className="px-5 pb-6">
              <div
                className="h-[2px] mb-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(215,184,147,0.3) 1.5px, transparent 1.5px)",
                  backgroundSize: "8px 3px",
                }}
              />
              <p
                className="text-[10px] tracking-[0.25em] uppercase text-accent-wheat mb-2"
              >
                Signed in
              </p>
              <p className="text-xs text-accent-cream/85 truncate mb-4">{admin?.email}</p>
              <div className="flex items-center gap-2">
                <Link
                  to="/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-[10px] tracking-[0.2em] uppercase text-accent-cream border border-accent-wheat/30 rounded-sm hover:border-accent-wheat transition-colors"
                >
                  <ExternalLink
                    size={11}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  Site
                </Link>
                <button
                  onClick={onLogout}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm bg-secondary-terra hover:bg-secondary-rust text-white text-[10px] tracking-[0.2em] uppercase transition-colors"
                >
                  <LogOut size={11} /> Logout
                </button>
              </div>
            </div>
          </aside>

          {/* Content area */}
          <main className="ml-64 flex-1 min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
    </ToastProvider>
  )
}
