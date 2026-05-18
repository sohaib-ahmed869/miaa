import { useState } from "react"
import { Outlet, useLocation, Link, useOutletContext } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Loader from "../loader/Loader"
import ScrollToTop from "./ScrollToTop"
import smallLogo from "../../assets/images/Homepage/smalllogo.png"

export default function Layout() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <>
      <ScrollToTop />

      {/* Show loader only on first visit to home */}
      <AnimatePresence>
        {loading && isHome && (
          <Loader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Hide page shell while loader is playing so footer doesn't flash */}
      <div style={loading && isHome ? { visibility: "hidden" } : undefined}>
        {/* Logo top-left — absolute so it scrolls away with the page (only the hamburger stays sticky) */}
        <Link
          to="/"
          className="absolute top-4 sm:top-5 md:top-6 3xl:top-7 left-4 sm:left-6 md:left-10 lg:left-16 3xl:left-24 z-50"
        >
          <img
            src={smallLogo}
            alt="MIAA"
            className="h-6 sm:h-8 md:h-10 3xl:h-14 w-auto"
          />
        </Link>

        <Navbar />
        <main>
          {/* Pages render directly — section-level Framer Motion handles entrance animations.
              No route-level opacity fade so the teal body bg never flashes on cream/light pages. */}
          <Outlet context={{ loaderDone: !loading || !isHome }} />
        </main>
        <Footer />
      </div>
    </>
  )
}
