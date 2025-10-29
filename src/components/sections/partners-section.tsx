
'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { WordPressLogo, GoDaddyLogo, StripeLogo, WooCommerceLogo, JetpackLogo } from '@/components/partner-logos';

const logos = [
  { component: <GoDaddyLogo className="h-7 text-muted-foreground" />, name: "GoDaddy" },
  { component: <WordPressLogo className="h-8 text-muted-foreground" />, name: "WordPress" },
  { component: <WooCommerceLogo className="h-8 text-muted-foreground" />, name: "WooCommerce" },
  { component: <JetpackLogo className="h-8 text-muted-foreground" />, name: "Jetpack" },
  { component: <StripeLogo className="h-8 text-muted-foreground" />, name: "Stripe" },
];

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
          <div
            className="relative w-full overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
            }}
          >
            <div className="flex animate-infinite-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-64 flex justify-center items-center" aria-label={logo.name}>
                  {logo.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

