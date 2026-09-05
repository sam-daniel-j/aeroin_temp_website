import { useEffect, useState, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { contactInfo } from '@/data/content';
import { courses } from '@/data/courses';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  fullName: '',
  email: '',
  phone: '',
  course: '',
  message: '',
};

const contactFaqs = [
  { question: 'How can I enroll in a course?', answer: 'Choose a course and select your preferred program duration. Online enrollment and payment will be connected in a later phase.' },
  { question: 'Are programs online or offline?', answer: 'Available learning modes may vary by program.' },
  { question: 'Is GST included in the course fees?', answer: 'Yes. All displayed program fees are inclusive of GST.' },
  { question: 'Do you offer institutional programs?', answer: 'Yes. Institutions can contact Aeroin EduTech to discuss customized training requirements.' },
];

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Aeroin EduTech | Space & Aerospace Courses';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Get in touch with Aeroin EduTech for questions about our aerospace and space technology courses, workshops and training programs.');
    return () => { document.title = 'Aeroin EduTech — Learn Space Technology. Build the Future.'; };
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Please enter your full name.';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }
    if (!form.course) newErrors.course = 'Please select a course.';
    if (!form.message.trim()) newErrors.message = 'Please enter your message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw}`;

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      <PageHero
        badge="Contact"
        title="Let's Build the Future Together."
        subtitle="Have a question about our programs, workshops or training? We'd love to hear from you."
      />

      {/* Contact info cards */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20">
                <Mail className="h-6 w-6 text-electric-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">Email</h3>
              <p className="mt-2 text-sm text-navy-200 group-hover:text-electric-400 transition-colors">
                {contactInfo.email}
              </p>
            </a>

            <a
              href={`tel:${contactInfo.phoneRaw}`}
              className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20">
                <Phone className="h-6 w-6 text-electric-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">Phone</h3>
              <p className="mt-2 text-sm text-navy-200 group-hover:text-electric-400 transition-colors">
                {contactInfo.phone}
              </p>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card group p-6 hover:border-electric-500/30 hover:bg-white/[0.05] sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/20">
                <MessageCircle className="h-6 w-6 text-electric-400" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-white">WhatsApp</h3>
              <p className="mt-2 text-sm text-navy-200 group-hover:text-electric-400 transition-colors">
                Chat with us on WhatsApp
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="relative bg-midnight-900 py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-midnight-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-400" />
                Enquiry
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Get In Touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy-200">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-electric-500/20 bg-gradient-to-br from-electric-500/10 to-accent-500/5 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-electric-500/20 to-accent-500/20 ring-1 ring-electric-500/30">
                    <CheckCircle2 className="h-7 w-7 text-electric-400" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-white">
                    Thank You!
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-100">
                    Your enquiry has been received. We'll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-6"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white">
                      Full Name <span className="text-electric-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-navy-300 transition-colors focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email <span className="text-electric-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-navy-300 transition-colors focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                      Phone <span className="text-electric-400">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-navy-300 transition-colors focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Interested Course */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-white">
                      Interested Course <span className="text-electric-400">*</span>
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="course"
                        value={form.course}
                        onChange={(e) => updateField('course', e.target.value)}
                        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-sm text-white transition-colors focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                      >
                        <option value="" className="bg-navy-900">Select a course</option>
                        {courses.map((c) => (
                          <option key={c.id} value={c.title} className="bg-navy-900">
                            {c.title}
                          </option>
                        ))}
                        <option value="General Enquiry" className="bg-navy-900">
                          General Enquiry
                        </option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-navy-200" />
                    </div>
                    {errors.course && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.course}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                      Message <span className="text-electric-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-navy-300 transition-colors focus:border-electric-500/50 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
                      placeholder="Tell us about your interests or questions..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-navy-100">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                FAQ
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-8 space-y-3">
                {contactFaqs.map((faq) => (
                  <div key={faq.question} className="card p-5">
                    <h3 className="font-heading text-base font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-200">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
