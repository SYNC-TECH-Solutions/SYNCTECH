
'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const logos = [
  { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.L8d3nzrXGpafB9Ldy-D4TgHaE8%3Fpid%3DApi&f=1&ipt=f637bc6621c7a7b271d109bba511cffeacf541bcf8de3413af118803761043d5", name: "GoDaddy", width: 140, height: 40 },
  { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F020%2F336%2F303%2Flarge_2x%2Fwordpress-logo-wordpress-icon-transparent-png-free-vector.jpg&f=1&nofb=1&ipt=355b0b5d960492bcf497702f5d6b4fc62f19cea32da859457562278f8df099e8", name: "WordPress", width: 140, height: 40 },
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
        "py-16 bg-black transition-opacity duration-1000 ease-in-out",
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
                      <div className="flex-shrink-0 w-48 flex justify-center items-center" aria-label={logo.name}>
                        <Image 
                          src={logo.src}
                          alt={logo.name}
                          width={logo.width}
                          height={logo.height}
                          className="object-contain transition-all duration-300"
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
