
import type { Metadata } from 'next';
import { PortfolioClient } from '@/components/sections/portfolio-client';

export const metadata: Metadata = {
  title: "Our Work | Portfolio of SYNC TECH Projects",
  description: "Explore the portfolio of SYNC TECH. See real-world examples of our high-quality websites, e-commerce platforms, and custom applications that deliver value and ROI.",
};


export default function PortfolioPage() {
  return <PortfolioClient />;
}
