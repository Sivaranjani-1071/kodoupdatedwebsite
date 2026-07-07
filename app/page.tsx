import StickyHeader from '@/components/StickyHeader'
import HeroSection from '@/components/HeroSection'
import LearningApproachSection from '@/components/LearningApproachSection'
import AllRoundCareerSection from '@/components/AllRoundCareerSection'
import FellowshipProgramSection from '@/components/FellowshipProgramSection'
import LearningApproachSection1 from '@/components/LearningApproachSection1'
import WorkAtCompaniesSection from '@/components/WorkAtCompaniesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'
import CrioGradsSection from '@/components/CrioGradsSection'
import CareerServicesSection from '@/components/CareerServicesSection'
import NsdcPartnershipSection from '@/components/NsdcPartnershipSection'
import RealWorkExperienceSection from '@/components/RealWorkExperienceSection'
import ResultsCard from '@/components/ResultsCard'
import B2BSection from '@/components/B2BConnectorStrip'
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
<StickyHeader />
      <div className="flex-1">
       <HeroSection />
       <ResultsCard />
    
        <LearningApproachSection />
         {/* <LearningApproachSection1 />  */}
        <AllRoundCareerSection />
        <B2BSection />
        <FellowshipProgramSection />
       
        <TestimonialsSection />
         <WorkAtCompaniesSection />
         <NsdcPartnershipSection />
          <CareerServicesSection />
         
        <CommunitySection />
        {/* <RealWorkExperienceSection /> */}
      </div>
      <Footer />
    </main>
  )
}