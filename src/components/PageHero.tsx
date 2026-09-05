type PageHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
};

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-midnight-900 pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-20">
      <div className="absolute inset-0 bg-space-radial" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-900" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            {badge}
          </div>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-navy-100 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
