
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function Hero() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

  return (
    <section 
        id="home" 
        ref={ref}
        className="relative w-full h-[calc(100vh-5rem)] min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
         <div 
            className={cn(
                "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1),transparent_40%)] transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
          ></div>
      </div>

      <div 
        className={cn(
            "container text-center transition-all duration-1000 ease-in-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Elite Tech Solutions.
          <br />
          <span className="text-primary">Accessible Price.</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          We deliver enterprise-grade IT services—from AI strategy and custom development to 24/7 global support—at a value that empowers your business to compete and win.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
