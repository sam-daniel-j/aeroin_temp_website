import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Course } from '@/data/courses';

type CurriculumAccordionProps = {
  course: Course;
};

export default function CurriculumAccordion({ course }: CurriculumAccordionProps) {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Curriculum
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Course Curriculum
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {course.curriculum.map((module, index) => {
            const isOpen = openModules.has(index);
            return (
              <div
                key={module.number}
                className="card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-accent-500/20 font-heading text-sm font-bold text-electric-400 ring-1 ring-electric-500/20">
                      {module.number}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-white">
                      {module.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy-200 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="border-t border-white/10 px-5 pb-5 pt-4 pl-[4.5rem]">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-navy-100"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-400/60" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
