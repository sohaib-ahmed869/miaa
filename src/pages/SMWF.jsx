import SMWFHeroSection from "../components/sections/smwf/SMWFHeroSection"
import SMWFAboutSection from "../components/sections/smwf/SMWFAboutSection"
import SMWFTicketsSection from "../components/sections/smwf/SMWFTicketsSection"
import SMWFPanellistsSection from "../components/sections/smwf/SMWFPanellistsSection"
import SMWFProgramHighlightsSection from "../components/sections/smwf/SMWFProgramHighlightsSection"
import SMWFCommunitySection from "../components/sections/smwf/SMWFCommunitySection"

export default function SMWF() {
  return (
    <>
      <SMWFHeroSection />
      <SMWFAboutSection />
      <SMWFTicketsSection />
      <SMWFPanellistsSection />
      <SMWFProgramHighlightsSection />
      <SMWFCommunitySection />
    </>
  )
}
