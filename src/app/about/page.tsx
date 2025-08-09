
'use client';

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="about" 
      ref={ref}
      className={cn(
        "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-last md:order-first">
            <Card className="overflow-hidden">
                <Image
                    src="https://placehold.co/800x600.png"
                    alt="A stylized image representing technology and innovation in Dublin"
                    width={800}
                    height={600}
                    data-ai-hint="technology innovation"
                    className="w-full h-auto object-cover transition-transform hover:scale-105"
                />
            </Card>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About SYNC TECH</h2>
            <p className="text-muted-foreground mb-6">
              Welcome to SYNC TECH, a leading tech company in Dublin, Ireland, dedicated to providing top-tier solutions in Web Development, AI Automation, and Cybersecurity. Founded by Sheraz Hussain in May 2024, SYNC TECH was born from a passion for making cutting-edge technology both accessible and affordable. We are on a mission to empower businesses of all sizes by bridging the gap between complex innovation and real-world application, ensuring our clients don’t just keep up with the future—they lead it.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">To deliver bespoke, high-impact technology solutions that drive growth, efficiency, and competitive advantage for our partners.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Our Value</h3>
                  <p className="text-muted-foreground text-sm">We combine deep technical expertise with a collaborative, client-centric approach, turning ambitious ideas into robust, scalable realities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
