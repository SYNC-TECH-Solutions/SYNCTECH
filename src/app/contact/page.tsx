
import type { Metadata } from 'next';
import { ContactClient } from '@/components/sections/contact-client';

export const metadata: Metadata = {
  title: "Contact SYNC TECH | Get a Free Quote & Consultation",
  description: "Get in touch with SYNC TECH for a free, no-obligation quote. Let's discuss your project and how our affordable IT services can help you achieve your business goals.",
};

export default function ContactPage() {
  return <ContactClient />;
}
