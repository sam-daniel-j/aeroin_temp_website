import { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import CourseFilters from '@/components/CourseFilters';
import EnrollmentModal, { type EnrollmentInfo } from '@/components/EnrollmentModal';
import { courses, type Course, type CourseCategory } from '@/data/courses';

type FilterCategory = 'All Courses' | CourseCategory;

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All Courses');
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [enrollmentInfo, setEnrollmentInfo] = useState<EnrollmentInfo | null>(null);

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'All Courses') return courses;
    return courses.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const handleEnroll = (course: Course) => {
    setEnrollmentInfo({ courseTitle: course.title });
    setEnrollmentOpen(true);
  };

  const scrollToGrid = () => {
    document.getElementById('course-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight-900 pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 bg-space-radial" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-900" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
              Courses
            </div>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Our Courses
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-100 sm:text-lg">
              Build practical skills in space technology, aerospace engineering,
              robotics, UAVs and astronomy.
            </p>
          </div>
        </div>
      </section>

      {/* Course grid section */}
      <section id="course-grid" className="relative bg-midnight-900 pb-20 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-navy-950 to-midnight-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CourseFilters
            active={activeCategory}
            onChange={setActiveCategory}
            count={filteredCourses.length}
          />

          {filteredCourses.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onEnroll={handleEnroll}
                />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Search className="h-8 w-8 text-navy-200" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">
                No courses found
              </h3>
              <p className="mt-2 text-sm text-navy-200">
                Try selecting another category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory('All Courses')}
                className="btn-secondary mt-6"
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-midnight-900 py-20 sm:py-24">
        <div className="absolute inset-0 bg-space-radial opacity-60" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Space-Tech Journey?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
            Choose a course, select your preferred program duration and begin
            learning with Aeroin EduTech.
          </p>
          <button
            type="button"
            onClick={scrollToGrid}
            className="btn-primary mt-8"
          >
            Explore Courses
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <Footer />

      <EnrollmentModal
        open={enrollmentOpen}
        enrollment={enrollmentInfo}
        onClose={() => setEnrollmentOpen(false)}
      />
    </div>
  );
}
