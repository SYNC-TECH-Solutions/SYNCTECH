
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function ContactSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            id="contact" 
            ref={ref}
            className={cn(
                "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Let's discuss how we can bring your vision to life with a high-quality solution that fits your budget.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Get Your Free, No-Obligation Quote</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
