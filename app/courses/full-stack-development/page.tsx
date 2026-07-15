import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/full-stack-development/CourseHeroSection'
import CurriculumSection from '@/components/courses/full-stack-development/CurriculumSection'
import WorkExperienceSection from '@/components/courses/full-stack-development/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/full-stack-development/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/full-stack-development/ExclusiveCareerServices'
import FAQSection from '@/components/courses/full-stack-development/FAQSection'
import CrioGradsSection from '@/components/courses/full-stack-development/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/full-stack-development/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/full-stack-development/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship Program in Full-Stack Development with AI | KodoWorks',
}

export default function FullStackDevelopmentCoursePage() {
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
