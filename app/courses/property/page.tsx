// app/courses/property/page.tsx
import StickyHeader from '@/components/StickyHeader'
import Footer from '@/components/Footer'
import PropertyHeroSection from '@/components/course/PropertyHeroSection'
import CurriculumSection from "@/components/course/CurriculumSection";
import WorkExperienceSection from "@/components/course/WorkExperienceSection";
import ProgramFeeAndScholarshipSection from "@/components/course/ProgramFeeAndScholarshipSection";
import ExclusiveCareerServices from '@/components/course/ExclusiveCareerServices';
import FAQSection from "@/components/course/FAQSection";
import CrioGradsSection from '@/components/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/WorkAtCompaniesSection'
import FeatureBar from '@/components/FeatureBar';

export default function PropertyCoursePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <StickyHeader />
      <div className="flex-1">
        <PropertyHeroSection />
        <FeatureBar />
                <CrioGradsSection />
         <CurriculumSection />
        <WorkExperienceSection />
        <WorkAtCompaniesSection />
        <ProgramFeeAndScholarshipSection />
        <ExclusiveCareerServices />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}