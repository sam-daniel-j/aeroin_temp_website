import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/course/Breadcrumbs';
import CourseHero from '@/components/course/CourseHero';
import CourseOverview from '@/components/course/CourseOverview';
import LearningOutcomes from '@/components/course/LearningOutcomes';
import CurriculumAccordion from '@/components/course/CurriculumAccordion';
import ProjectSection from '@/components/course/ProjectSection';
import AudienceSection from '@/components/course/AudienceSection';
import SkillsSection from '@/components/course/SkillsSection';
import CertificationSection from '@/components/course/CertificationSection';
import PricingSection from '@/components/course/PricingSection';
import CourseFAQ from '@/components/course/CourseFAQ';
import StickyEnrollCTA from '@/components/course/StickyEnrollCTA';
import EnrollmentModal, { type EnrollmentInfo } from '@/components/EnrollmentModal';
import { getCourseBySlug, programPlans, type ProgramPlan } from '@/data/courses';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const course = slug ? getCourseBySlug(slug) : undefined;

  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [enrollmentInfo, setEnrollmentInfo] = useState<EnrollmentInfo | null>(null);

  useEffect(() => {
    if (course) {
      document.title = `${course.title} Course | Aeroin EduTech`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', course.shortDescription);
      }
    }
    return () => {
      document.title = 'Aeroin EduTech — Learn Space Technology. Build the Future.';
    };
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-midnight-900">
        <Header />
        <section className="flex min-h-[70vh] items-center justify-center px-4 pt-16">
          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Course Not Found
            </h1>
            <p className="mt-4 text-base text-navy-100 sm:text-lg">
              The course you're looking for doesn't exist.
            </p>
            <button
              type="button"
              onClick={() => navigate('/courses')}
              className="btn-primary mt-8"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const handleHeroEnroll = () => {
    setEnrollmentInfo({ courseTitle: course.title });
    setEnrollmentOpen(true);
  };

  const handlePlanEnroll = (plan: ProgramPlan) => {
    setEnrollmentInfo({
      courseTitle: course.title,
      duration: plan.duration,
      price: plan.price,
    });
    setEnrollmentOpen(true);
  };

  const handleStickyEnroll = () => {
    setEnrollmentInfo({ courseTitle: course.title });
    setEnrollmentOpen(true);
  };

  const startingPrice = programPlans[0].price;

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      <div className="pt-20 sm:pt-24">
        <Breadcrumbs courseTitle={course.title} />
      </div>

      <main className="pt-4">
        <CourseHero course={course} onEnroll={handleHeroEnroll} />
        <CourseOverview course={course} />
        <LearningOutcomes course={course} />
        <CurriculumAccordion course={course} />
        <ProjectSection course={course} />
        <AudienceSection course={course} />
        <SkillsSection course={course} />
        <CertificationSection />
        <PricingSection onEnroll={handlePlanEnroll} />
        <CourseFAQ course={course} />

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-midnight-900 py-20 sm:py-24">
          <div className="absolute inset-0 bg-space-radial opacity-60" />
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Learning?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
              Choose a program duration and begin your journey in {course.title.toLowerCase()} with Aeroin EduTech.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="btn-primary"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('/courses')}
                className="btn-secondary"
              >
                Back to Courses
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <StickyEnrollCTA startingPrice={startingPrice} onEnroll={handleStickyEnroll} />

      <EnrollmentModal
        open={enrollmentOpen}
        enrollment={enrollmentInfo}
        onClose={() => setEnrollmentOpen(false)}
      />
    </div>
  );
}
