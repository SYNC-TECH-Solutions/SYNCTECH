
import type { Metadata } from 'next';
import { BlogClient } from '@/components/sections/blog-client';

export const metadata: Metadata = {
    title: "Tech Blog | Insights from SYNC TECH",
    description: "Explore the SYNC TECH blog for expert insights, industry trends, and practical advice on web development, AI automation, cybersecurity, and digital growth strategies.",
    keywords: ["tech blog", "AI insights", "web development trends", "cybersecurity articles", "digital strategy blog", "SYNC TECH blog", "IT industry news"],
};

export default function BlogPage() {
  return <BlogClient />;
}
