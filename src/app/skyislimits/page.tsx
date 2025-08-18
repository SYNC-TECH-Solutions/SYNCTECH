
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export default function SkyIsLimitsPage() {
  return (
    <div className="py-20 md:py-28 bg-background">
      <div className="container text-center">
        <Zap className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">The Sky is the Limit</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Your ambition has no ceiling. We provide the technology, strategy, and partnership to help you break through barriers and achieve exponential growth.
        </p>
      </div>

      <div className="container max-w-5xl mt-16">
        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Unlock Your Potential</h2>
                    <p className="text-muted-foreground mb-6">
                        Stop letting outdated technology or inefficient processes hold you back. We specialize in transforming your business operations, unlocking new levels of productivity and innovation.
                    </p>
                    <ul className="space-y-3 text-left">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1" />
                            <span><strong>Streamline Operations</strong> with custom automation.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1" />
                            <span><strong>Scale Effortlessly</strong> with robust cloud infrastructure.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1" />
                            <span><strong>Make Smarter Decisions</strong> with data-driven insights.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
             <Card className="bg-secondary">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Ready to Ascend?</h2>
                    <p className="text-muted-foreground mb-6">
                       Your journey to market leadership starts here. Let's build a strategy that not only meets your goals but shatters them.
                    </p>
                    <Button asChild size="lg" className="w-full">
                        <Link href="/contact">
                            Discuss Your Vision <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
