'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { WordPressLogo, GoDaddyLogo, StripeLogo } from '@/components/partner-logos';

export default function PartnersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="partners" 
      ref={ref}
      className={cn(
        "py-16 bg-secondary transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div 
          className={cn(
            "transition-all duration-700 ease-in-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Proudly Partnered With Industry Leaders
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            <WordPressLogo className="h-8 text-muted-foreground hover:text-foreground transition-colors" />
            <GoDaddyLogo className="h-7 text-muted-foreground hover:text-foreground transition-colors" />
            <StripeLogo className="h-8 text-muted-foreground hover:text-foreground transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
}
