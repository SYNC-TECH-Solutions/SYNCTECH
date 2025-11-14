
import type { Metadata } from 'next';
import { ServicesClient } from '@/components/sections/services-client';

export const metadata: Metadata = {
  title: "IT Services Dublin | Web Development, AI, & Cybersecurity",
  description: "Explore the comprehensive IT services offered by SYNC TECH in Dublin. From custom web and mobile app development to AI automation, secure cloud hosting, and expert cybersecurity, we provide affordable, high-impact solutions for Irish and global businesses.",
  keywords: ["IT services Dublin", "web development Ireland", "AI automation services Dublin", "cybersecurity solutions Ireland", "managed cloud services Dublin", "FinOps consulting", "digital growth SEO Dublin", "game development company Ireland", "Stripe integration Dublin"],
};

export default function ServicesPage() {
  return <ServicesClient />;
}
