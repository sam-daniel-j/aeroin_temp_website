import { useEffect } from 'react';
import { X, Rocket } from 'lucide-react';

export type EnrollmentInfo = {
  courseTitle: string;
  duration?: string;
  price?: number;
};

type EnrollmentModalProps = {
  open: boolean;
  enrollment: EnrollmentInfo | null;
  onClose: () => void;
};

export default function EnrollmentModal({ open, enrollment, onClose }: EnrollmentModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enrollment-modal-title"
    >
      <div
        className="absolute inset-0 bg-midnight-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md animate-fade-up rounded-2xl border border-white/10 bg-navy-900 p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-navy-200 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20">
          <Rocket className="h-7 w-7 text-electric-400" />
        </div>

        <h3
          id="enrollment-modal-title"
          className="mt-5 font-heading text-xl font-bold text-white"
        >
          Enrollment Coming Next
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-navy-200">
          Online enrollment and secure payment will be available soon.
        </p>

        {enrollment && (
          <div className="mt-4 space-y-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs">
            <div className="text-navy-200">
              Course: <span className="font-medium text-white">{enrollment.courseTitle}</span>
            </div>
            {enrollment.duration && (
              <div className="text-navy-200">
                Duration: <span className="font-medium text-white">{enrollment.duration}</span>
              </div>
            )}
            {enrollment.price != null && (
              <div className="text-navy-200">
                Fee: <span className="font-medium text-white">₹{enrollment.price.toLocaleString('en-IN')}</span>
                <span className="ml-1 text-navy-300">(Inclusive of GST)</span>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="btn-primary mt-6 w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
}
