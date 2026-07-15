import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/cloud-devops/CourseHeroSection'
import CurriculumSection from '@/components/courses/cloud-devops/CurriculumSection'
import WorkExperienceSection from '@/components/courses/cloud-devops/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/cloud-devops/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/cloud-devops/ExclusiveCareerServices'
import FAQSection from '@/components/courses/cloud-devops/FAQSection'
import CrioGradsSection from '@/components/courses/cloud-devops/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/cloud-devops/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/cloud-devops/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship Program in Cloud Engineering & DevOps | KodoWorks',
}

export default function CloudDevopsCoursePage() {
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
