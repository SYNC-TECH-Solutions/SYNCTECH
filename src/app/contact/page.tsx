
import type { Metadata } from 'next';
import { ContactClient } from '@/components/sections/contact-client';

export const metadata: Metadata = {
  title: "Contact SYNC TECH | Get a Free Quote & Consultation",
  description: "Get in touch with SYNC TECH for a free, no-obligation quote. Let's discuss your project and how our affordable IT services can help you achieve your business goals.",
  keywords: ["contact SYNC TECH", "free IT quote", "tech consultation Dublin", "get in touch", "IT project quote", "web development contact", "AI services quote"],
};

export default function ContactPage() {
  return <ContactClient />;
}
