import { motion } from "framer-motion"
import { fadeInUp, staggerContainer, staggerItem } from "../../../lib/motion"
import { Plus } from "lucide-react"

import jumaanaAbdu          from "../../../assets/images/Homepage/SMWF/panellists/jumaana-abdu.jpg"
import michaelMohammedAhmad from "../../../assets/images/Homepage/SMWF/panellists/michael-mohammed-ahmad.jpg"
import zohraAly             from "../../../assets/images/Homepage/SMWF/panellists/zohra-aly.png"
import mirelaCufurovic      from "../../../assets/images/Homepage/SMWF/panellists/mirela-cufurovic.png"
import saharDandan          from "../../../assets/images/Homepage/SMWF/panellists/sahar-dandan.jpg"
import winnieDunn           from "../../../assets/images/Homepage/SMWF/panellists/winnie-dunn.png"
import eugeniaFlynn         from "../../../assets/images/Homepage/SMWF/panellists/eugenia-flynn.jpg"
import zeynabGamieldien     from "../../../assets/images/Homepage/SMWF/panellists/zeynab-gamieldien.jpg"
import peterGould           from "../../../assets/images/Homepage/SMWF/panellists/peter-gould.jpg"
import georgeGreen          from "../../../assets/images/Homepage/SMWF/panellists/george-green.jpg"
import edaGunaydin          from "../../../assets/images/Homepage/SMWF/panellists/eda-gunaydin.png"
import bilalHafda           from "../../../assets/images/Homepage/SMWF/panellists/bilal-hafda.jpg"
import mohamedHassan        from "../../../assets/images/Homepage/SMWF/panellists/mohamed-hassan.jpg"
import amaniHaydar          from "../../../assets/images/Homepage/SMWF/panellists/amani-haydar.jpg"
import nourHaydar           from "../../../assets/images/Homepage/SMWF/panellists/nour-haydar.jpg"
import hudaHayek            from "../../../assets/images/Homepage/SMWF/panellists/huda-hayek.png"
import naimaIbrahim         from "../../../assets/images/Homepage/SMWF/panellists/naima-ibrahim.png"
import soalihaIqbal         from "../../../assets/images/Homepage/SMWF/panellists/soaliha-iqbal.jpg"
import zuleyhaKeskin        from "../../../assets/images/Homepage/SMWF/panellists/zuleyha-keskin.jpg"
import lyebaKhan            from "../../../assets/images/Homepage/SMWF/panellists/lyeba-khan.png"
import melatiLum            from "../../../assets/images/Homepage/SMWF/panellists/melati-lum.jpg"
import annieMccann          from "../../../assets/images/Homepage/SMWF/panellists/annie-mccann.jpg"
import omarMusa             from "../../../assets/images/Homepage/SMWF/panellists/omar-musa.jpg"
import aaminaMusthafa       from "../../../assets/images/Homepage/SMWF/panellists/aamina-musthafa.png"
import mehmetOzalp          from "../../../assets/images/Homepage/SMWF/panellists/mehmet-ozalp.jpg"
import safiahRind           from "../../../assets/images/Homepage/SMWF/panellists/safiah-rind.jpg"
import sanyaRushdi          from "../../../assets/images/Homepage/SMWF/panellists/sanya-rushdi.jpg"
import samahSabawi          from "../../../assets/images/Homepage/SMWF/panellists/samah-sabawi.jpg"
import saraSaleh            from "../../../assets/images/Homepage/SMWF/panellists/sara-saleh.jpg"
import nurShkembi           from "../../../assets/images/Homepage/SMWF/panellists/nur-shkembi.jpg"
import annaThwaites         from "../../../assets/images/Homepage/SMWF/panellists/anna-thwaites.jpg"
import julideTurker         from "../../../assets/images/Homepage/SMWF/panellists/julide-turker.png"
import jihadYassine         from "../../../assets/images/Homepage/SMWF/panellists/jihad-yassine.png"

const SECTION_BG = "#F3EFEB"
const INK         = "#124039"
const LIME        = "#CBCE58"

const PANELLISTS = [
  { name: "Jumaana Abdu",            role: "Award-winning Author",                       image: jumaanaAbdu },
  { name: "Michael Mohammed Ahmad",  role: "Award-winning Novelist",                     image: michaelMohammedAhmad },
  { name: "Zohra Aly",               role: "Freelance Writer",                           image: zohraAly },
  { name: "Mirela Cufurovic",        role: "Book Review Editor & Historian",             image: mirelaCufurovic },
  { name: "Sahar Dandan",            role: "Poet, CEO & Community Advocate",             image: saharDandan },
  { name: "Winnie Dunn",             role: "Award-winning Author & Editor",              image: winnieDunn },
  { name: "Eugenia Flynn",           role: "Writer",                                     image: eugeniaFlynn },
  { name: "Zeynab Gamieldien",       role: "Award-winning Novelist",                     image: zeynabGamieldien },
  { name: "Peter Gould",             role: "Designer, Author & Entrepreneur",            image: peterGould },
  { name: "George Green",            role: "Children's Author & Youth Advocate",         image: georgeGreen },
  { name: "Eda Gunaydin",            role: "Essayist, Critic & Parramatta Laureate",     image: edaGunaydin },
  { name: "Bilal Hafda",             role: "Poet, Educator & Community Facilitator",     image: bilalHafda },
  { name: "Mohamed Hassan",          role: "Award-winning Poet, Journalist & Podcaster", image: mohamedHassan },
  { name: "Amani Haydar",            role: "Award-winning Writer-Artist",                image: amaniHaydar },
  { name: "Nour Haydar",             role: "Senior Producer & Podcast Co-host",          image: nourHaydar },
  { name: "Huda Hayek",              role: "Award-winning Children's Author",            image: hudaHayek },
  { name: "Naima Ibrahim",           role: "Emerging Author",                            image: naimaIbrahim },
  { name: "Soaliha Iqbal",           role: "Freelance Writer, Journalist & Podcaster",   image: soalihaIqbal },
  { name: "Dr Zuleyha Keskin",       role: "Writer, Educator & Speaker",                 image: zuleyhaKeskin },
  { name: "Lyeba Khan",              role: "Actor, Filmmaker & Educator",                image: lyebaKhan },
  { name: "Melati Lum",              role: "Children's Author & Publisher",              image: melatiLum },
  { name: "Annie McCann",            role: "Author & Emcee",                             image: annieMccann },
  { name: "Omar Musa",               role: "Author, Poet & Visual Artist",               image: omarMusa },
  { name: "Aamina Musthafa",         role: "Multimedia Artist",                          image: aaminaMusthafa },
  { name: "Prof Mehmet Ozalp",       role: "Award-winning Professor of Islamic Studies", image: mehmetOzalp },
  { name: "Safiah Rind",             role: "Storyteller & Multimedia Artist",            image: safiahRind },
  { name: "Sanya Rushdi",            role: "Author & Illustrator",                       image: sanyaRushdi },
  { name: "Dr Samah Sabawi",         role: "Award-winning Playwright, Poet & Scholar",   image: samahSabawi },
  { name: "Sara Saleh",              role: "Award-winning Writer & Human Rights Lawyer", image: saraSaleh },
  { name: "Dr Nur Shkembi OAM",      role: "Award-winning Curator, Writer & Art Historian", image: nurShkembi },
  { name: "Anna Thwaites",           role: "Editor & Publishing Professional",           image: annaThwaites },
  { name: "Julide Turker",           role: "Author & Holistic Health Practitioner",      image: julideTurker },
  { name: "Jihad Yassine",           role: "Award-winning Poet",                         image: jihadYassine },
]

function PanellistCard({ panellist }) {
  return (
    <motion.div
      {...staggerItem}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden bg-black">
        <img
          src={panellist.image}
          alt={panellist.name}
          loading="lazy"
          className="block w-full h-full object-cover grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-out"
        />
        {/* Plus button overlay */}
        <button
          type="button"
          aria-label={`More about ${panellist.name}`}
          className="absolute top-3 right-3 md:top-4 md:right-4 3xl:top-6 3xl:right-6 w-9 h-9 md:w-10 md:h-10 3xl:w-14 3xl:h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Plus
            className="w-4 h-4 md:w-5 md:h-5 3xl:w-7 3xl:h-7"
            style={{ color: INK }}
            strokeWidth={2.5}
          />
        </button>
      </div>
      <div className="mt-4 md:mt-5 3xl:mt-7">
        <p
          className="font-aeonik text-lg md:text-xl 3xl:text-2xl font-semibold tracking-tight"
          style={{ color: INK }}
        >
          {panellist.name}
        </p>
        <p
          className="font-barlow text-sm md:text-base 3xl:text-lg mt-1"
          style={{ color: "rgba(18,64,57,0.65)" }}
        >
          {panellist.role}
        </p>
      </div>
    </motion.div>
  )
}

export default function SMWFPanellistsSection() {
  return (
    <section
      id="smwf-panellists"
      className="pt-2 md:pt-3 lg:pt-4 3xl:pt-6 pb-20 md:pb-24 lg:pb-28 3xl:pb-40"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="max-w-[1500px] 3xl:max-w-[3200px] mx-auto px-6 md:px-10 lg:px-14 3xl:px-20">
        <motion.h2
          {...fadeInUp}
          className="font-aeonik text-3xl md:text-4xl lg:text-5xl 3xl:text-7xl font-medium tracking-tight leading-tight mb-8 md:mb-10 3xl:mb-16"
          style={{ color: INK }}
        >
          Meet our Panellists and Presenters
        </motion.h2>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7 3xl:gap-10"
        >
          {PANELLISTS.map((p) => (
            <PanellistCard key={p.name} panellist={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
