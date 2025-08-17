
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent_40%)] -z-10 animate-[background-pan_15s_ease-in-out_infinite]"></div>
      </div>

      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
          Affordable IT Solutions
          <br />
          for a <span className="text-primary">Global Audience.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We provide smart, scalable, and secure IT services worldwide. From cloud solutions to 24/7 support, we make technology simple and effective.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Explore IT Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
