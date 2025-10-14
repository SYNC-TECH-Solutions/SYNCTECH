
'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function AboutSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            id="about" 
            ref={ref}
            className={cn(
                "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={cn("transition-transform duration-500 ease-in-out", inView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0")}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Vision, Our Expertise, Unbeatable Value</h2>
                        <p className="text-muted-foreground mb-6 text-lg">
                           SYNC TECH was founded on a simple principle: to make elite technology solutions accessible and affordable. We bridge the gap between enterprise-level quality and the budgets of growing businesses, delivering superior results without the premium price tag.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/about">Learn More About Our Mission</Link>
                        </Button>
                    </div>
                    <div className={cn("relative transition-transform duration-500 ease-in-out", inView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0")}>
                        <Card className="overflow-hidden shadow-lg">
                            <Image
                                src="/dublinsync.png"
                                alt="Team collaborating on a project in Dublin"
                                width={800}
                                height={600}
                                data-ai-hint="team collaboration"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
