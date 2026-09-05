import PricingCard from '@/components/course/PricingCard';
import { programPlans, type ProgramPlan } from '@/data/courses';

type PricingSectionProps = {
  onEnroll: (plan: ProgramPlan) => void;
};

export default function PricingSection({ onEnroll }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-navy-950 to-midnight-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            Pricing
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Choose Your Learning Duration
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-100">
            Select the program duration that fits your learning goals.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {programPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} onEnroll={onEnroll} />
          ))}
        </div>
      </div>
    </section>
  );
}
