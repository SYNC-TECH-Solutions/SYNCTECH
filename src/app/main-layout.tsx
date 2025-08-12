'use client';

import { Providers } from '@/components/providers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
