import { Award } from 'lucide-react';

export default function CertificationSection() {
  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
            Certification
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Certification
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900 to-midnight-900 p-8 sm:p-10">
            {/* Certificate visual */}
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-xl border-2 border-electric-500/30 bg-navy-950/50 p-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/30">
                  <Award className="h-8 w-8 text-electric-400" />
                </div>
                <p className="mt-4 font-heading text-lg font-bold text-white">
                  Certificate of Completion
                </p>
                <p className="mt-1 text-xs text-navy-300">
                  Aeroin EduTech
                </p>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <div className="h-1.5 w-24 mx-auto rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-sm leading-relaxed text-navy-100 sm:text-base">
              Students who successfully complete the applicable program will
              receive a certificate from Aeroin EduTech, subject to the
              program's completion requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
