
import type { Metadata } from 'next';
import { ServicesClient } from '@/components/sections/services-client';

export const metadata: Metadata = {
  title: "Our Services | Web Development, AI, & Cybersecurity",
  description: "Explore the comprehensive IT services offered by SYNC TECH. From custom web and mobile app development to AI automation, secure cloud hosting, and expert cybersecurity, we provide affordable, high-impact solutions.",
  keywords: ["IT services Dublin", "web development Ireland", "AI automation services", "cybersecurity solutions", "managed cloud services", "FinOps consulting", "digital growth SEO", "game development company"],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
