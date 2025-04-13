import React, { Suspense } from 'react';
import { useLoaderData } from "react-router-dom";
import HeroSection from "../component/HeroSection";
import HowItWorks from '../component/HowItWorks';
import WhyShadowGrid from '../component/WhyShadowGrid';
import CTASection from '../component/Cta';
import ScrollToTop from '../component/ScrollToTop';
import FaqSection from '../component/Faq';

const Home = () => {
  const { welcomeMessage } = useLoaderData() as { welcomeMessage: string };

  return (
    <section>
      <HeroSection />
      <Suspense fallback={<div className="h-screen bg-gray-900">
      </div>}>
        <HowItWorks />
        <WhyShadowGrid />
        <CTASection />
        <FaqSection />
        <ScrollToTop />
      </Suspense>
    </section>
  );
};

export default Home;