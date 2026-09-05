import { useEffect } from 'react';
import {
  Satellite,
  Rocket,
  Cpu,
  Telescope,
  Bot,
  PenTool,
  BookOpen,
  ScanLine,
  Wrench,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

const teachAreas: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Satellite, title: 'Space Technology', description: 'Satellites, CubeSats, orbital mechanics and mission design.' },
  { icon: Rocket, title: 'Aerospace Engineering', description: 'Propulsion, aerodynamics, structures and flow analysis.' },
  { icon: Cpu, title: 'UAV & Drones', description: 'Drone systems, flight control and autonomous UAV concepts.' },
  { icon: Bot, title: 'Space Robotics', description: 'Rovers, robotic arms and autonomous navigation.' },
  { icon: Telescope, title: 'Astronomy', description: 'Planets, stars, galaxies, black holes and cosmology.' },
  { icon: PenTool, title: 'Engineering Design & Simulation', description: 'CAD, CFD, structural analysis and simulation workflows.' },
];

const approachSteps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: BookOpen, title: 'Learn', description: 'Understand the fundamentals.' },
  { icon: ScanLine, title: 'Simulate', description: 'Explore concepts through engineering tools and simulations.' },
  { icon: Wrench, title: 'Build', description: 'Apply knowledge through practical projects.' },
  { icon: Lightbulb, title: 'Innovate', description: 'Develop ideas and solve engineering problems.' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About Aeroin EduTech | Space Technology Education';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Learn about Aeroin EduTech — making aerospace and space technology education practical, accessible and project-oriented.');
    return () => { document.title = 'Aeroin EduTech — Learn Space Technology. Build the Future.'; };
  }, []);

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      <PageHero
        badge="About Us"
        title="Building the Next Generation of Space Innovators"
        subtitle="Making aerospace and space technology education practical, accessible and project-oriented."
      />

      {/* Who We Are */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Introduction
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Who We Are
              </h2>
            </div>
            <div className="space-y-4 lg:col-span-2">
              <p className="text-base leading-relaxed text-navy-100 sm:text-lg">
                Aeroin EduTech is focused on helping students and aspiring
                professionals explore aerospace and space technology through
                practical, project-based and industry-oriented learning.
              </p>
              <p className="text-base leading-relaxed text-navy-100 sm:text-lg">
                Our programs cover areas such as CubeSat technology, rocket
                propulsion, UAVs, space robotics, astronomy, orbital mechanics
                and aerospace engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-midnight-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20">
                <Rocket className="h-6 w-6 text-electric-400" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-white">
                Our Mission
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-100">
                To make advanced aerospace and space technology education easier
                to understand, more practical to experience and accessible to
                the next generation of innovators.
              </p>
            </div>
            <div className="card p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-electric-500/20 ring-1 ring-accent-500/20">
                <Telescope className="h-6 w-6 text-accent-400" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-white">
                Our Vision
              </h3>
              <p className="mt-3 text-base leading-relaxed text-navy-100">
                To inspire and prepare a generation of engineers, researchers
                and innovators who can contribute to the future of aerospace
                and space technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Teach */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
              Curriculum
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What We Teach
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {teachAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20 transition-all duration-300 group-hover:from-electric-500/30 group-hover:to-accent-500/30">
                    <Icon className="h-5 w-5 text-electric-400" />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-200">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-midnight-900 via-navy-950 to-midnight-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              Methodology
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Our Learning Approach
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {approachSteps.map((step, index) => {
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
                  {index < approachSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-navy-300 text-xl">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-sm font-medium text-electric-400">
            Learn → Simulate → Build → Innovate
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
