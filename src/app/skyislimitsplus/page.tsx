
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Cpu, Rocket } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "Advanced AI Integration",
    description: "Go beyond basic automation. We build sophisticated AI models that become a core competitive advantage for your business."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Hyper-Scalable Architecture",
    description: "Build for the future with infrastructure that can handle exponential growth without compromising performance or security."
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Autonomous Operations",
    description: "Implement systems that self-heal, self-optimize, and run with minimal human intervention, freeing you to focus on innovation."
  },
];

export default function SkyIsLimitsPlusPage() {
  return (
    <div className="py-20 md:py-28 bg-secondary">
      <div className="container text-center">
        <div className="inline-block bg-primary text-primary-foreground p-3 rounded-full mb-4">
            <Rocket className="h-10 w-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Sky is Limits+</h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          For the visionaries ready for the next frontier. This is where we build the technology that defines industries.
        </p>
      </div>

      <div className="container max-w-5xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
                 <Card key={feature.title} className="text-center">
                    <CardContent className="p-8">
                        <div className="mb-4 inline-block bg-secondary p-3 rounded-full">
                            {feature.icon}
                        </div>
                        <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
                        <p className="text-muted-foreground text-sm">
                            {feature.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>

       <div className="container text-center mt-16">
            <p className="text-muted-foreground mb-4">Ready to build what's next?</p>
            <Button asChild size="lg">
                <Link href="/contact">
                    Schedule an Innovation Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
    </div>
  );
}
