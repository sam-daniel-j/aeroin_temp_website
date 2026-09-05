import { Check, IndianRupee } from 'lucide-react';
import type { ProgramPlan } from '@/data/courses';

type PricingCardProps = {
  plan: ProgramPlan;
  onEnroll: (plan: ProgramPlan) => void;
};

export default function PricingCard({ plan, onEnroll }: PricingCardProps) {
  return (
    <div className="card group flex flex-col p-6 hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-7">
      <h3 className="font-heading text-lg font-bold text-white">
        {plan.duration}
      </h3>

      <div className="mt-4 flex items-baseline gap-1">
        <IndianRupee className="h-5 w-5 text-electric-400" />
        <span className="font-heading text-3xl font-bold text-white">
          {plan.price.toLocaleString('en-IN')}
        </span>
      </div>
      <span className="mt-1 text-xs text-navy-300">Inclusive of GST</span>

      <ul className="mt-5 space-y-2 text-sm text-navy-200">
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-electric-400" />
          Full course access
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-electric-400" />
          Practical project
        </li>
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-electric-400" />
          Certificate on completion
        </li>
      </ul>

      <button
        type="button"
        onClick={() => onEnroll(plan)}
        className="btn-primary mt-6 w-full"
      >
        Enroll Now
      </button>
    </div>
  );
}
