import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/generative-ai/CourseHeroSection'
import CurriculumSection from '@/components/courses/generative-ai/CurriculumSection'
import WorkExperienceSection from '@/components/courses/generative-ai/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/generative-ai/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/generative-ai/ExclusiveCareerServices'
import FAQSection from '@/components/courses/generative-ai/FAQSection'
import CrioGradsSection from '@/components/courses/generative-ai/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/generative-ai/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/generative-ai/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship in Generative AI for Professionals | KodoWorks',
}

export default function GenerativeAiCoursePage() {
  return (
    <>
        <CourseHeroSection />
        <FeatureBar />
        <CrioGradsSection />
        <CurriculumSection />
        <WorkExperienceSection />
        <WorkAtCompaniesSection />
        <ProgramFeeAndScholarshipSection />
        <ExclusiveCareerServices />
        <FAQSection />
    </>
  )
}
