import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Course } from '@/data/courses';

type CourseFAQProps = {
  course: Course;
};

export default function CourseFAQ({ course }: CourseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-midnight-900 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {course.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/[0.03]"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-base font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-navy-200 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-navy-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
