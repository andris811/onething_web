import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ReviewsSection from '@/components/ReviewsSection';
import Features from '@/components/Features';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <main>
        <Hero />
        <ReviewsSection />
        <Features />
        <ScreenshotsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
