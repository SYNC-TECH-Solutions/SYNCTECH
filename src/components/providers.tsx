
'use client';

import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
      <FloatingCta />
    </>
  );
}
