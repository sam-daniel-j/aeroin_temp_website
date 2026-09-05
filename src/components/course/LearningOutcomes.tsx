import type { Course } from '@/data/courses';

type LearningOutcomesProps = {
  course: Course;
};

export default function LearningOutcomes({ course }: LearningOutcomesProps) {
  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-midnight-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            Learning Outcomes
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            What You'll Learn
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {course.learningOutcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div
                key={outcome.title}
                className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20 transition-all duration-300 group-hover:from-electric-500/30 group-hover:to-accent-500/30">
                  <Icon className="h-5 w-5 text-electric-400" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold text-white">
                  {outcome.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
