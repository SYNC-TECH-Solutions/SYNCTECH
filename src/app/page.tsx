
import { Hero } from '@/components/sections/hero';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import PartnersSection from '@/components/sections/partners-section';
import AgentShowcaseSection from '@/components/sections/agent-showcase-section';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <AgentShowcaseSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
