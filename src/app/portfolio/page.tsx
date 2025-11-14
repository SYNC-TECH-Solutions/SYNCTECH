
import type { Metadata } from 'next';
import { PortfolioClient } from '@/components/sections/portfolio-client';

export const metadata: Metadata = {
  title: "Our Work | IT Project Portfolio for Dublin & Ireland | SYNC TECH",
  description: "Explore the portfolio of SYNC TECH. See real-world examples of our websites, e-commerce platforms, and custom applications that deliver value and ROI for clients in Dublin and worldwide.",
  keywords: ["SYNC TECH portfolio", "web development projects Dublin", "AI case studies Ireland", "e-commerce websites Dublin", "IT project examples Ireland", "our work", "tech portfolio Dublin"],
};


export default function PortfolioPage() {
  return <PortfolioClient />;
}
