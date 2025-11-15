'use client';

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function NewSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="new-section"
            ref={ref}
            className={cn(
                "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">New Section Title</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
                        This is a placeholder for your new section. Let me know what you'd like to put here!
                    </p>
                </div>
                <Card>
                    <CardContent className="p-12 text-center">
                        <p>New content will go here.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
