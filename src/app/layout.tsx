import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingCta } from '@/components/floating-cta';
import { Analytics } from '@/components/analytics';

export const metadata: Metadata = {
  title: 'SYNC TECH | Synchronizing Innovation with Technology',
  description: 'SYNC TECH is a premier tech company based in Dublin, Ireland, specializing in Web Development, AI Automation, Cloud Hosting, Cybersecurity, Mobile Apps, and SEO.',
  keywords: ['tech company Dublin', 'web development', 'ai automation', 'cloud hosting', 'cybersecurity', 'mobile apps', 'seo'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased min-h-screen flex flex-col')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
          <FloatingCta />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
