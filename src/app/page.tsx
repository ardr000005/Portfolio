'use client';

import React, { useState, useEffect, Suspense } from 'react';
import LandingOverlay from '@/components/landing-overlay';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import SkillsSection from '@/components/sections/skills-section';
import ContactSection from '@/components/sections/contact-section';
import Chatbot from '@/components/chatbot';

const ThreeBackground = React.lazy(() => import('@/components/three-background'));

export default function Home() {
  const [isLanding, setIsLanding] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLandingFinish = () => {
    setIsLanding(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <ThreeBackground />
      </Suspense>

      <LandingOverlay isVisible={isLanding} onFinished={handleLandingFinish} />

      <div className={`transition-opacity duration-1000 ease-in ${isLanding ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navbar />
        {/* Add margin to account for desktop sidebar */}
        <div className="md:ml-64">
          <main id="home" className="container relative z-10 mx-auto px-4 md:px-8">
            <div className="flex flex-col space-y-24 md:space-y-32">
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </div>
          </main>
        </div>
        <Chatbot />
      </div>
    </div>
  );
}
