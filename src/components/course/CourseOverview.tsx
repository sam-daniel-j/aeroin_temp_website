import type { Course } from '@/data/courses';

type CourseOverviewProps = {
  course: Course;
};

export default function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Overview
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Course Overview
            </h2>
          </div>
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-navy-100 sm:text-lg">
              {course.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
