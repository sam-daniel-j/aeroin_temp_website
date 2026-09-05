import { Wrench } from 'lucide-react';
import type { Course } from '@/data/courses';

type ProjectSectionProps = {
  course: Course;
};

export default function ProjectSection({ course }: ProjectSectionProps) {
  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-navy-950 to-midnight-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-electric-500/20 bg-gradient-to-br from-electric-500/10 via-accent-500/5 to-transparent p-8 sm:p-10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-electric-500/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-semibold text-electric-400">
                <Wrench className="h-3.5 w-3.5" />
                Learn by Building
              </span>

              <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Practical Project
              </h2>

              <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
                {course.project}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-navy-200">
                Apply what you learn by working through a practical project
                designed around real-world aerospace and space technology
                concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
