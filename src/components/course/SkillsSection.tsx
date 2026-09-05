import { Sparkles } from 'lucide-react';
import type { Course } from '@/data/courses';

type SkillsSectionProps = {
  course: Course;
};

export default function SkillsSection({ course }: SkillsSectionProps) {
  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-midnight-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Skills
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Skills You Will Gain
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {course.skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-full border border-electric-500/20 bg-gradient-to-r from-electric-500/10 to-accent-500/10 px-4 py-2.5"
            >
              <Sparkles className="h-4 w-4 text-electric-400" />
              <span className="text-sm font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
