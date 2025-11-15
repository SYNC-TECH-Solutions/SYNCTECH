
import { BrainCircuit, Lightbulb, FileText, Bot } from 'lucide-react';
import type { ReactNode } from 'react';

export type AiAgent = {
  icon: ReactNode;
  title: string;
  category: string;
  description: string;
  price: number;
};

export const aiAgents: AiAgent[] = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI Lead Finder & Qualifier",
    category: "Sales & Marketing",
    description: "Automatically scans the web to find potential business leads based on your specified industry and location. It analyzes each lead's website to determine their potential needs and suggests relevant services.",
    price: 499,
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Automated Proposal & Email Writer",
    category: "Sales & Marketing",
    description: "Takes qualified lead data and automatically generates a personalized cold outreach email and a structured business proposal outline. Drastically reduces the time spent on sales prep.",
    price: 399,
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "SEO-Optimized Blog Post Generator",
    category: "Content & SEO",
    description: "Generates high-quality, SEO-friendly blog posts from a simple topic and keyword list. Produces a title, excerpt, and full HTML content ready for publishing.",
    price: 299,
  },
   {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Customer Inquiry Validator",
    category: "Operations & Security",
    description: "An AI agent that automatically analyzes incoming contact form submissions to filter out spam, ads, and malicious content, ensuring your sales team only sees legitimate inquiries.",
    price: 199,
  },
];
