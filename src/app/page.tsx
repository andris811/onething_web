import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import WhyOneThing from '@/components/WhyOneThing';
import ReviewsSection from '@/components/ReviewsSection';
import VersionSection from '@/components/VersionSection';
import Features from '@/components/Features';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#F5F1E8]">
      <Navigation />
      <main>
        <Hero />
        <VersionSection />
        <WhyOneThing />
        <ReviewsSection />
        <Features />
        <ScreenshotsSection />
        <PricingSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
