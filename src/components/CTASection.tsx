import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type CTASectionProps = {
  title?: string;
  subtitle?: string;
};

export default function CTASection({
  title = 'Ready to Start Your Space-Tech Journey?',
  subtitle = 'Explore our courses and find a program that matches your interests.',
}: CTASectionProps) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-midnight-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-space-radial opacity-60" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
          {subtitle}
        </p>
        <button
          type="button"
          onClick={() => navigate('/courses')}
          className="btn-primary mt-8"
        >
          Explore Courses
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
