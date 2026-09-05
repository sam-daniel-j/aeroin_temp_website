import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeatureCard from '@/components/FeatureCard';
import { features } from '@/data/content';

export default function WhyAeroin() {
  return (
    <section id="why-aeroin" className="relative bg-midnight-900 py-20 sm:py-28">
      <div className="absolute inset-0 bg-space-radial opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            Why Aeroin
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Learn With Aeroin?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-200 sm:text-lg">
            We combine expert mentorship, hands-on practice, and an
            industry-aligned curriculum to prepare you for the future of space
            technology.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/why-aeroin" className="btn-secondary">
            Why Aeroin
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
