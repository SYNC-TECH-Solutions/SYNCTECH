
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
                "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Vision, Our Expertise, Unbeatable Value</h2>
                        <p className="text-muted-foreground mb-6">
                            SYNC TECH was founded on a simple principle: to make elite technology solutions accessible and affordable. We blend innovative strategies with cost-effective implementation to deliver superior quality without the premium price tag.
                        </p>
                        <Button asChild>
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                    <div className="relative">
                        <Card className="overflow-hidden">
                            <Image
                                src="https://placehold.co/800x600.png"
                                alt="Team collaborating on a project"
                                width={800}
                                height={600}
                                data-ai-hint="team collaboration"
                                className="w-full h-auto object-cover transition-transform hover:scale-105"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
