import type { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20 transition-all duration-300 group-hover:from-electric-500/30 group-hover:to-accent-500/30 group-hover:ring-electric-500/40">
        <Icon className="h-6 w-6 text-electric-400" />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-200">
        {description}
      </p>
    </div>
  );
}
