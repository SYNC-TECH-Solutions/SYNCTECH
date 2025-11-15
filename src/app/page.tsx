
import { Hero } from '@/components/sections/hero';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import PortfolioSection from '@/components/sections/portfolio-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import PartnersSection from '@/components/sections/partners-section';
import NewSection from '@/components/sections/new-section';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <AboutSection />
      <ServicesSection />
      <NewSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
