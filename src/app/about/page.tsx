
import type { Metadata } from 'next';
import { AboutClient } from '@/components/sections/about-client';

export const metadata: Metadata = {
  title: "About SYNC TECH | Our Mission, Value, and Story",
  description: "Learn about SYNC TECH, a Dublin-based IT company founded by Sheraz Hussain. Discover our mission to provide affordable, high-quality tech solutions in web development, AI, and cybersecurity, and meet the team dedicated to your success.",
};

export default function AboutPage() {
  return <AboutClient />;
}
