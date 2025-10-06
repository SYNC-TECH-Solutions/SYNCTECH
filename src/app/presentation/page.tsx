
import type { Metadata } from 'next';
import { PresentationClient } from '@/components/sections/presentation-client';

export const metadata: Metadata = {
  title: "AI Partnership Proposal Dublin | Drive ROI with SYNC TECH",
  description: "Explore a strategic partnership with SYNC TECH in Dublin. We deliver scalable growth and measurable ROI through custom AI strategy, digital transformation, and a proven framework for client acquisition.",
  keywords: ["AI strategy Dublin", "IT partnership proposal Ireland", "client acquisition AI", "scalable growth solutions", "digital transformation Dublin", "IT consulting partnership", "SYNC TECH proposal", "business growth Ireland"],
};

export default function PresentationPage() {
  return <PresentationClient />;
}
