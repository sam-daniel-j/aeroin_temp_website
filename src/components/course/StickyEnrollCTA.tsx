import { useEffect, useState } from 'react';
import { ArrowRight, IndianRupee } from 'lucide-react';

type StickyEnrollCTAProps = {
  startingPrice: number;
  onEnroll: () => void;
};

export default function StickyEnrollCTA({ startingPrice, onEnroll }: StickyEnrollCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="border-t border-white/10 bg-midnight-900/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-electric-400" />
            <span className="font-heading text-base font-bold text-white sm:text-lg">
              Starting from ₹{startingPrice.toLocaleString('en-IN')}
            </span>
            <span className="hidden text-xs text-navy-300 sm:inline">
              Inclusive of GST
            </span>
          </div>
          <button type="button" onClick={onEnroll} className="btn-primary">
            Enroll Now
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
