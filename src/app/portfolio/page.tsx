
import type { Metadata } from 'next';
import { PortfolioClient } from '@/components/sections/portfolio-client';

export const metadata: Metadata = {
  title: "Our Work | Portfolio of SYNC TECH Projects",
  description: "Explore the portfolio of SYNC TECH. See real-world examples of our high-quality websites, e-commerce platforms, and custom applications that deliver value and ROI.",
  keywords: ["SYNC TECH portfolio", "web development projects", "AI case studies", "e-commerce websites", "IT project examples", "our work", "tech portfolio"],
};


export default function PortfolioPage() {
  return <PortfolioClient />;
}
