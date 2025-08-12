
'use client';

import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';
import { Analytics } from '@/components/analytics';
import { Suspense } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
      <FloatingCta />
      <Suspense fallback={null}>
        <Analytics />
      </Suspense>
    </>
  );
}
