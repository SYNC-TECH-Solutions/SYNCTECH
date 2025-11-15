
'use client';

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const textTransitions = [
    {
        text: "Check out our Marketplace.",
        element: (
            <Button asChild size="lg" className="mt-4">
                <Link href="/marketplace">
                    Visit the Marketplace <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        )
    },
    { text: "Make your Life Easier with the help of our Agents." },
    { text: "Need Your Content Created? Give Our Content Generator a Try!!" },
    { 
        text: "You are a Business and want to keep it smooth just like the life of a baby? Check out the SYNC TECH Marketplace.",
        element: (
             <Button asChild size="lg" className="mt-4">
                <Link href="/marketplace">
                    Explore the Marketplace <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        )
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
            <div className="container">
                <div className="text-center min-h-[240px] md:min-h-[160px] flex flex-col justify-center items-center">
                    <TypingAnimation transitions={textTransitions} />
                </div>
            </div>
        </section>
    );
}
