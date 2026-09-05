import { stats } from '@/data/content';

export default function Stats() {
  return (
    <section className="relative -mt-px bg-midnight-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-navy-950 to-midnight-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card group p-6 text-center hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-8"
            >
              <div className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <span className="bg-gradient-to-br from-white to-navy-200 bg-clip-text text-transparent transition-all duration-300 group-hover:from-electric-400 group-hover:to-accent-400">
                  {stat.value}
                </span>
              </div>
              <div className="mt-2 text-sm font-medium text-navy-200 sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
