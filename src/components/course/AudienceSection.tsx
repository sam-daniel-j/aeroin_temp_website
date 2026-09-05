import { Users } from 'lucide-react';
import type { Course } from '@/data/courses';

type AudienceSectionProps = {
  course: Course;
};

export default function AudienceSection({ course }: AudienceSectionProps) {
  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            Audience
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Who Is This Course For?
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {course.audience.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-5 py-3"
            >
              <Users className="h-4 w-4 text-electric-400" />
              <span className="text-sm font-medium text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
