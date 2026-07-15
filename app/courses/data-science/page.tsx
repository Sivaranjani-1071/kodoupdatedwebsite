import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/data-science/CourseHeroSection'
import CurriculumSection from '@/components/courses/data-science/CurriculumSection'
import WorkExperienceSection from '@/components/courses/data-science/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/data-science/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/data-science/ExclusiveCareerServices'
import FAQSection from '@/components/courses/data-science/FAQSection'
import CrioGradsSection from '@/components/courses/data-science/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/data-science/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/data-science/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship Program in NextGen Data Science & Analytics | KodoWorks',
}

export default function DataScienceCoursePage() {
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
