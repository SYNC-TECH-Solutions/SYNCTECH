
'use client';

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import { Logo } from "../logo";

const textTransitions = [
    {
        text: "Automate workflows, and boost your productivity with our suite of powerful AI Agents.",
    },
    { 
        text: "Generate qualified leads and analyze their needs instantly with our AI Lead Finder.",
    },
    { 
        text: "Create high-quality, SEO-optimized content in seconds with our AI Content Generator.",
    },
    {
        text: "From sales automation to business intelligence, find the right AI agent for your business.",
    }
];

export default function AgentShowcaseSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id="agent-showcase"
            ref={ref}
            className={cn(
                "py-20 md:py-32 bg-secondary transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container text-center">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <Bot className="h-10 w-10 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <Logo className="text-3xl md:text-4xl" /> Marketplace
                    </h2>
                </div>
                <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                    Discover intelligent solutions designed to automate your business processes and drive growth.
                </p>
                <div className="min-h-[160px] md:min-h-[120px] flex flex-col justify-center items-center">
                    <TypingAnimation transitions={textTransitions} />
                </div>
                 <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/marketplace">
                            Explore All AI Agents <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
