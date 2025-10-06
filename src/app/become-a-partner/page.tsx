
import type { Metadata } from 'next';
import { BecomeAPartnerClient } from '@/components/sections/become-a-partner-client';

export const metadata: Metadata = {
  title: "Become a SYNC TECH Partner | Drive Revenue with AI & IT Solutions",
  description: "Partner with SYNC TECH in Dublin to expand your service offerings with cutting-edge AI, web development, and cybersecurity solutions. Join our partner program to deliver more value and unlock new revenue streams.",
  keywords: [
    "IT partnerships Dublin",
    "tech partner program Ireland",
    "resell AI solutions",
    "white-label web development",
    "cybersecurity partner program",
    "SYNC TECH partners",
    "business growth partnership",
    "technology reseller Ireland"
  ],
};

export default function BecomeAPartnerPage() {
  return <BecomeAPartnerClient />;
}
