import { useEffect } from 'react';
import {
  Users,
  Wrench,
  Cpu,
  Telescope,
  Award,
  MonitorSmartphone,
  BookOpen,
  Brain,
  Rocket,
  Hammer,
  type LucideIcon,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const whyFeatures: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  { number: '01', icon: Users, title: 'Expert-Led Learning', description: 'Learn from experienced professionals and mentors in aerospace and space technology.' },
  { number: '02', icon: Wrench, title: 'Practical Training', description: 'Understand concepts through practical activities, simulations and guided exercises.' },
  { number: '03', icon: Cpu, title: 'Industry-Oriented Curriculum', description: 'Explore concepts and technologies relevant to aerospace and space applications.' },
  { number: '04', icon: Telescope, title: 'Project-Based Learning', description: 'Apply your knowledge through practical engineering and space-tech projects.' },
  { number: '05', icon: Award, title: 'Certification', description: 'Eligible students who successfully complete the applicable program can receive a certificate from Aeroin EduTech.' },
  { number: '06', icon: MonitorSmartphone, title: 'Flexible Programs', description: 'Programs can support online, offline and hybrid learning depending on the specific program.' },
];

const philosophySteps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: BookOpen, title: 'Learn', description: 'Build a strong foundation in aerospace and space technology concepts.' },
  { icon: Brain, title: 'Understand', description: 'Deepen your understanding through guided exploration and analysis.' },
  { icon: Rocket, title: 'Apply', description: 'Put concepts into practice through simulations and engineering exercises.' },
  { icon: Hammer, title: 'Build', description: 'Complete practical projects that bring your learning together.' },
];

export default function WhyAeroin() {
  useEffect(() => {
    document.title = 'Why Aeroin EduTech | Practical Space Technology Learning';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Discover why learning with Aeroin goes beyond theory — expert-led, practical, project-based and industry-oriented space technology education.');
    return () => { document.title = 'Aeroin EduTech — Learn Space Technology. Build the Future.'; };
  }, []);

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      <PageHero
        badge="Why Aeroin"
        title="Why Learn With Aeroin?"
        subtitle="Go beyond theory. Explore aerospace and space technology through practical learning."
      />

      {/* Feature sections */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.number} className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20 transition-all duration-300 group-hover:from-electric-500/30 group-hover:to-accent-500/30">
                      <Icon className="h-6 w-6 text-electric-400" />
                    </div>
                    <span className="font-heading text-2xl font-bold text-white/10">
                      {feature.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-200">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-midnight-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
              Philosophy
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              From Theory to Application
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-100">
              The goal is not simply to consume course material but to help
              learners apply concepts through projects and practical activities.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {philosophySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="card h-full p-6 hover:border-electric-500/30 hover:bg-white/[0.05]">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500/20 to-accent-500/20 font-heading text-sm font-bold text-electric-400 ring-1 ring-electric-500/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <Icon className="h-5 w-5 text-electric-400" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                      {step.description}
                    </p>
                  </div>
                  {index < philosophySteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-navy-300 text-xl">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-electric-400">
            Learn → Understand → Apply → Build
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
