
import type { Metadata } from 'next';
import { PresentationClient } from '@/components/sections/presentation-client';

export const metadata: Metadata = {
  title: "SYNC TECH Partnership Proposal | AI-Driven Growth & ROI",
  description: "Explore a partnership with SYNC TECH. We deliver scalable growth through AI strategy, custom digital solutions, and a proven framework for driving measurable ROI. Dublin-based, globally-focused.",
  keywords: ["AI strategy Dublin", "partnership proposal", "client acquisition AI", "scalable growth solutions", "digital transformation Ireland", "IT consulting partnership", "SYNC TECH proposal"],
};

export default function PresentationPage() {
  return <PresentationClient />;
}
