import HeroSection from '@/components/home/HeroSection'
import LearningApproachSection from '@/components/home/LearningApproachSection'
import AllRoundCareerSection from '@/components/home/AllRoundCareerSection'
import FellowshipProgramSection from '@/components/home/FellowshipProgramSection'
import LearningApproachSection1 from '@/components/home/LearningApproachSection1'
import WorkAtCompaniesSection from '@/components/home/WorkAtCompaniesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CommunitySection from '@/components/home/CommunitySection'
import CrioGradsSection from '@/components/home/CrioGradsSection'
import CareerServicesSection from '@/components/home/CareerServicesSection'
import NsdcPartnershipSection from '@/components/home/NsdcPartnershipSection'
import RealWorkExperienceSection from '@/components/home/RealWorkExperienceSection'
import ResultsCard from '@/components/home/ResultsCard'
import B2BSection from '@/components/home/B2BConnectorStrip'
export default function Home() {
  return (
    <>
      <HeroSection />
      <ResultsCard />

      <LearningApproachSection />
      {/* <LearningApproachSection1 />  */}
      <AllRoundCareerSection />
      <B2BSection />
      <FellowshipProgramSection />

      <WorkAtCompaniesSection />
      <NsdcPartnershipSection />
      <CareerServicesSection />

      <CommunitySection />

      <TestimonialsSection />
      {/* <RealWorkExperienceSection /> */}
    </>
  )
}