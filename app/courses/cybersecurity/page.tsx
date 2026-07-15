import type { Metadata } from 'next'
import CourseHeroSection from '@/components/courses/cybersecurity/CourseHeroSection'
import CurriculumSection from '@/components/courses/cybersecurity/CurriculumSection'
import WorkExperienceSection from '@/components/courses/cybersecurity/WorkExperienceSection'
import ProgramFeeAndScholarshipSection from '@/components/courses/cybersecurity/ProgramFeeAndScholarshipSection'
import ExclusiveCareerServices from '@/components/courses/cybersecurity/ExclusiveCareerServices'
import FAQSection from '@/components/courses/cybersecurity/FAQSection'
import CrioGradsSection from '@/components/courses/cybersecurity/CrioGradsSection'
import WorkAtCompaniesSection from '@/components/courses/cybersecurity/WorkAtCompaniesSection'
import FeatureBar from '@/components/courses/cybersecurity/FeatureBar'

export const metadata: Metadata = {
  title: 'Fellowship Program in Cybersecurity & Ethical Hacking | KodoWorks',
}

export default function CybersecurityCoursePage() {
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
