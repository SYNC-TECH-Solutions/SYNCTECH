'use client';

import { Suspense } from 'react';
import Script from 'next/script';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import CookieConsent from 'react-cookie-consent';
import { Analytics } from '@/components/analytics';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N63V26QZ"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <Script
        type="text/javascript"
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
      />
      <FirebaseClientProvider>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <FloatingCta />
        <CookieConsent
          location="bottom"
          buttonText="I understand"
          cookieName="synctechCookieConsent"
          style={{
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            borderTop: '1px solid hsl(var(--border))',
          }}
          buttonStyle={{
            background: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))',
            fontSize: '14px',
            borderRadius: '0.5rem',
          }}
          expires={150}
        >
          This website uses cookies to enhance the user experience. By continuing to use this site, you agree to our use of cookies. See our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>{' '}
          for details.
        </CookieConsent>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </FirebaseClientProvider>
    </>
  );
}
