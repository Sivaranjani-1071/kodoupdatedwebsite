import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/servicenow-platform/CourseHeroSection'
import CurriculumSection from '@/components/courses/servicenow-platform/CurriculumSection'
import WorkExperienceSection from '@/components/courses/servicenow-platform/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/servicenow-platform/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/servicenow-platform/ExclusiveCareerServices'
import FAQSection from '@/components/courses/servicenow-platform/FAQSection'
import CrioGradsSection from '@/components/courses/servicenow-platform/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/servicenow-platform/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/servicenow-platform/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship Program in ServiceNow & Enterprise Platform Engineering | KodoWorks',
}

export default function ServiceNowPlatformCoursePage() {
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
