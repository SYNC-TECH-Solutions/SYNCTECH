
import type { Metadata } from 'next';
import { ContactClient } from '@/components/sections/contact-client';

export const metadata: Metadata = {
  title: "Contact SYNC TECH Dublin | Get a Free Quote & Consultation",
  description: "Get in touch with SYNC TECH in Dublin for a free, no-obligation quote. Let's discuss your project and how our affordable IT services can help your Irish business achieve its goals.",
  keywords: ["contact SYNC TECH", "free IT quote Dublin", "tech consultation Dublin", "get in touch Ireland", "IT project quote Dublin", "web development contact", "AI services quote Dublin"],
};

export default function ContactPage() {
  return <ContactClient />;
}
