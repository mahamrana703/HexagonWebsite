import React from 'react';
import { HeroSection } from '../components/hero-section';
import { TrustedBySection } from '../components/trusted-by-section';
import { FeaturesSection } from '../components/features-section';
import { HowItWorksSection } from '../components/how-it-works-section';
import { UseCasesSection } from '../components/use-cases-section';
import { DashboardSection } from '../components/dashboard-section';
import { PricingSection } from '../components/pricing-section';
import { CTASection } from '../components/cta-section';
import { ContactSection } from '../components/contact-section';
import { AIChatbot } from '../components/ai-chatbot';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <DashboardSection />
      <PricingSection />
      <CTASection />
      <ContactSection />
      <AIChatbot />
    </>
  );
}