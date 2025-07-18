
'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import LoveStoriesSection from '../components/LoveStoriesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <LoveStoriesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
