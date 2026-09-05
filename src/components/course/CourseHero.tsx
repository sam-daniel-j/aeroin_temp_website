import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, GraduationCap, Monitor, IndianRupee } from 'lucide-react';
import type { Course } from '@/data/courses';
import { coursePricingSubNote } from '@/data/courses';

type CourseHeroProps = {
  course: Course;
  onEnroll: () => void;
};

export default function CourseHero({ course, onEnroll }: CourseHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-midnight-900 pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24">
      <div className="absolute inset-0 bg-space-radial" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-electric-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
              {course.category}
            </span>

            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
              {course.shortDescription}
            </p>

            {/* Meta row */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-navy-100">
                <GraduationCap className="h-4 w-4 text-electric-400" />
                <span className="font-medium text-white">{course.level}</span>
              </div>
              <div className="flex items-center gap-2 text-navy-100">
                <Monitor className="h-4 w-4 text-electric-400" />
                <span className="font-medium text-white">{course.mode}</span>
              </div>
            </div>

            {/* Price */}
            <div className="mt-6">
              <div className="flex items-center gap-1.5">
                <IndianRupee className="h-5 w-5 text-electric-400" />
                <span className="font-heading text-2xl font-bold text-white">
                  Programs from ₹3,539
                </span>
              </div>
              <span className="text-xs text-navy-300">{coursePricingSubNote}</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button type="button" onClick={onEnroll} className="btn-primary">
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate('/courses')}
                className="btn-secondary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Courses
              </button>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
