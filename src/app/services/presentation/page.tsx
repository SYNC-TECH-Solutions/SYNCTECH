
import type { Metadata } from 'next';
import { PresentationClient } from '@/components/sections/presentation-client';

export const metadata: Metadata = {
  title: "AI Partnership Proposal Dublin | Drive ROI with SYNC TECH in Ireland",
  description: "Explore a strategic partnership with SYNC TECH in Dublin. We deliver scalable growth and measurable ROI through custom AI strategy, digital transformation, and a proven framework for client acquisition for Irish businesses.",
  keywords: ["AI strategy Dublin", "IT partnership proposal Ireland", "client acquisition AI Dublin", "scalable growth solutions Ireland", "digital transformation Dublin", "IT consulting partnership Ireland", "SYNC TECH proposal", "business growth Ireland"],
};

export default function PresentationPage() {
  return <PresentationClient />;
}
