
'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const logos = [
  { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.L8d3nzrXGpafB9Ldy-D4TgHaE8%3Fpid%3DApi&f=1&ipt=f637bc6621c7a7b271d109bba511cffeacf541bcf8de3413af118803761043d5", name: "GoDaddy Pro", width: 140, height: 40, description: "As a GoDaddy Pro partner, we manage your domains, hosting, and professional email, providing a one-stop-shop for your online infrastructure." },
  { src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F020%2F336%2F303%2Flarge_2x%2Fwordpress-logo-wordpress-icon-transparent-png-free-vector.jpg&f=1&nofb=1&ipt=355b0b5d960492bcf497702f5d6b4fc62f19cea32da859457562278f8df099e8", name: "WordPress", width: 140, height: 40, description: "As a WordPress affiliate, we build scalable, feature-rich websites and blogs using the world's most popular CMS." },
  { src: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg", name: "WooCommerce", width: 140, height: 40, description: "We leverage WooCommerce to create powerful, customizable e-commerce solutions on the WordPress platform." },
  { src: "https://cdn.worldvectorlogo.com/logos/jetpack.svg", name: "Jetpack", width: 120, height: 40, description: "We use Jetpack to enhance WordPress sites with top-tier security, performance, and marketing tools." },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", name: "Stripe", width: 80, height: 40, description: "Through our Stripe partnership, we build secure and seamless payment processing for e-commerce and subscription services." },
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
      aria-labelledby="partners-heading"
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
          <h2 id="partners-heading" className="text-center text-sm font-semibold text-primary uppercase tracking-wider mb-8">
            Proudly Partnered With Industry Leaders
          </h2>
          <TooltipProvider>
            <div
              className="relative w-full overflow-hidden"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
              }}
              aria-label="A scrolling slideshow of partner logos"
            >
              <div className="flex animate-infinite-scroll">
                {[...logos, ...logos].map((logo, index) => (
                  <Tooltip key={`${logo.name}-${index}`}>
                    <TooltipTrigger asChild>
                      <div className="flex-shrink-0 w-48 flex justify-center items-center" aria-label={logo.name}>
                        <Image 
                          src={logo.src}
                          alt={`${logo.name} partner logo`}
                          width={logo.width}
                          height={logo.height}
                          className="object-contain transition-all duration-300"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs text-center">
                      <p className="font-bold">{logo.name}</p>
                      <p className="text-sm text-muted-foreground">{logo.description}</p>
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
