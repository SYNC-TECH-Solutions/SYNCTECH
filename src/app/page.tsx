
'use client';

import { Hero } from '@/components/sections/hero';
import AboutPage from './about/page';
import ServicesPage from './services/page';
import PortfolioPage from './portfolio/page';
import TestimonialsPage from './testimonials/page';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <ServicesPage />
      <PortfolioPage />
      <TestimonialsPage />
      <ContactPage />
    </>
  );
}
