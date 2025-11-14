
import type { Metadata } from 'next';
import { BlogClient } from '@/components/sections/blog-client';

export const metadata: Metadata = {
    title: "Tech Blog | IT Insights from Dublin | SYNC TECH",
    description: "Explore the SYNC TECH blog for expert insights from Dublin on industry trends, and practical advice on web development, AI automation, cybersecurity, and digital growth strategies for Irish businesses.",
    keywords: ["tech blog Dublin", "AI insights Ireland", "web development trends Dublin", "cybersecurity articles Ireland", "digital strategy blog Dublin", "SYNC TECH blog", "IT industry news Ireland"],
};

export default function BlogPage() {
  return <BlogClient />;
}
