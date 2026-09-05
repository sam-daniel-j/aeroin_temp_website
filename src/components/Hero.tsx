import { ArrowRight, Play, Satellite, Rocket, Cpu, Telescope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { brand } from '@/data/content';

const orbitBadges = [
  { icon: Satellite, label: 'CubeSats', className: 'top-[12%] right-[8%]' },
  { icon: Rocket, label: 'Rocket Propulsion', className: 'top-[40%] right-[22%]' },
  { icon: Cpu, label: 'UAVs', className: 'bottom-[18%] right-[6%]' },
  { icon: Telescope, label: 'Space Robotics', className: 'bottom-[8%] right-[34%]' },
];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-midnight-900 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-space-radial" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-900" />

      {/* Star field */}
      <div className="absolute inset-0 opacity-60">
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
      </div>

      {/* Orbit visual (right side, desktop) */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block lg:w-[45%] xl:w-[42%]">
        <div className="relative mx-auto aspect-square max-w-[520px]">
          {/* Orbit rings */}
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-[8%] rounded-full border border-white/8" />
          <div className="absolute inset-[18%] rounded-full border border-white/10" />
          <div className="absolute inset-[28%] rounded-full border border-electric-500/20" />

          {/* Core glow */}
          <div className="absolute inset-[32%] rounded-full bg-gradient-to-br from-electric-500/30 via-accent-500/20 to-transparent blur-2xl" />
          <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-electric-400/40 to-accent-500/30 blur-xl" />

          {/* Planet */}
          <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-navy-500 via-electric-600 to-accent-600 shadow-2xl shadow-electric-500/20" />

          {/* Floating badges */}
          {orbitBadges.map(({ icon: Icon, label, className }) => (
            <div
              key={label}
              className={`absolute ${className} animate-fade-in`}
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-midnight-900/60 px-3 py-2 backdrop-blur-md">
                <Icon className="h-4 w-4 text-electric-400" />
                <span className="text-xs font-medium text-white/90">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            {brand.parent}
          </div>

          <h1 className="animate-fade-up mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn Space Technology.
            <br />
            <span className="bg-gradient-to-r from-electric-400 via-electric-500 to-accent-400 bg-clip-text text-transparent">
              Build the Future.
            </span>
          </h1>

          <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            Practical, project-based learning in CubeSats, Rocket Propulsion,
            UAVs, Space Robotics, Astronomy and Aerospace Engineering.
          </p>

          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => navigate('/courses')}
              className="btn-primary"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#why-aeroin" className="btn-secondary">
              <Play className="h-4 w-4" />
              View Programs
            </a>
          </div>
        </div>
      </div>

      {/* Inline star styles */}
      <style>{`
        .stars-layer-1, .stars-layer-2 {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 50% 50%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 33% 80%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 15% 60%, rgba(255,255,255,0.5), transparent);
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .stars-layer-2 {
          opacity: 0.5;
          background-image:
            radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.5), transparent),
            radial-gradient(1px 1px at 70% 40%, rgba(255,255,255,0.4), transparent),
            radial-gradient(1px 1px at 40% 90%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 85% 85%, rgba(255,255,255,0.3), transparent);
        }
      `}</style>
    </section>
  );
}
