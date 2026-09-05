import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { legalLinks } from '@/data/content';

export default function LegalPlaceholder() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const legal = legalLinks.find((l) => l.href === `/${slug}`);

  useEffect(() => {
    if (legal) {
      document.title = `${legal.label} | Aeroin EduTech`;
    }
    return () => { document.title = 'Aeroin EduTech — Learn Space Technology. Build the Future.'; };
  }, [legal]);

  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />

      <section className="flex min-h-[70vh] items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <FileText className="h-8 w-8 text-navy-200" />
          </div>
          <h1 className="mt-6 font-heading text-2xl font-bold text-white sm:text-3xl">
            {legal?.label ?? 'Page'}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-100">
            This page is currently being prepared.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-primary mt-8"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
