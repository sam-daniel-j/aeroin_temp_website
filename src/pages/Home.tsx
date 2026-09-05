import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyAeroin from '@/components/WhyAeroin';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-midnight-900">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyAeroin />
      </main>
      <Footer />
    </div>
  );
}
