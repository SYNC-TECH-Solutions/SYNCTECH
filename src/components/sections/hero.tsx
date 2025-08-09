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
          Synchronizing Your Business
          <br />
          with the <span className="text-primary">Future of Technology.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          We deliver high-impact technology solutions that bridge the gap between complex innovation and real-world application.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/#contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
