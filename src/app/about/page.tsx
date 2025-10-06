
import type { Metadata } from 'next';
import { AboutClient } from '@/components/sections/about-client';

export const metadata: Metadata = {
  title: "Our Vision & Strategy | About SYNC TECH",
  description: "Learn about SYNC TECH's mission to deliver scalable growth through AI and digital strategy. Discover our commitment to excellence, our Dublin roots, and our roadmap for building the future of IT solutions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
