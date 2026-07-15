import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/ai-engineering-ml/CourseHeroSection'
import CurriculumSection from '@/components/courses/ai-engineering-ml/CurriculumSection'
import WorkExperienceSection from '@/components/courses/ai-engineering-ml/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/ai-engineering-ml/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/ai-engineering-ml/ExclusiveCareerServices'
import FAQSection from '@/components/courses/ai-engineering-ml/FAQSection'
import CrioGradsSection from '@/components/courses/ai-engineering-ml/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/ai-engineering-ml/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/ai-engineering-ml/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship Program in AI Engineering & Machine Learning | KodoWorks',
}

export default function AiEngineeringMlCoursePage() {
  return (
    <>
        <CourseHeroSection />
        <FeatureBar />
        {/* <CrioGradsSection /> */}
        <CurriculumSection />
        <WorkExperienceSection />
        <WorkAtCompaniesSection />
        <ProgramFeeAndScholarshipSection />
        <ExclusiveCareerServices />
        <FAQSection />
    </>
  )
}
