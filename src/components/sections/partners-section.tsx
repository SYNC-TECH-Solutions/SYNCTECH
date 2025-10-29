'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const logos = [
  { src: "https://cdn.worldvectorlogo.com/logos/godaddy-01.svg", name: "GoDaddy", width: 120, height: 40 },
  { src: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg", name: "WordPress", width: 40, height: 40 },
  { src: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg", name: "WooCommerce", width: 140, height: 40 },
  { src: "https://cdn.worldvectorlogo.com/logos/jetpack.svg", name: "Jetpack", width: 120, height: 40 },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", name: "Stripe", width: 80, height: 40 },
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
          <TooltipProvider>
            <div
              className="relative w-full overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
              }}
            >
              <div className="flex animate-infinite-scroll">
                {[...logos, ...logos].map((logo, index) => (
                  <Tooltip key={`${logo.name}-${index}`}>
                    <TooltipTrigger asChild>
                      <div className="flex-shrink-0 w-48 flex justify-center items-center h-12" aria-label={logo.name}>
                        <Image 
                          src={logo.src}
                          alt={logo.name}
                          width={logo.width}
                          height={logo.height}
                          className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{logo.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
