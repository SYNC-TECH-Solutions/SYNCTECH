
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot } from 'lucide-react';
import { aiAgents } from '@/lib/ai-agents';

export const metadata: Metadata = {
  title: "AI Agent & Workflow Marketplace | SYNC TECH",
  description: "Explore and acquire powerful AI agents and automated workflows from SYNC TECH. Boost productivity with solutions for lead generation, content creation, and business intelligence.",
  keywords: ["AI agents", "AI marketplace", "automated workflows", "business AI", "lead generation AI", "content automation", "SYNC TECH AI"],
};

export default function AiMarketplacePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">AI Agent & Workflow Marketplace</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Empower your business with intelligent automation. Browse our collection of pre-built AI agents designed to streamline processes, enhance productivity, and drive growth.
          </p>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiAgents.map((agent) => (
              <Card key={agent.title} className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {agent.icon}
                  </div>
                  <CardTitle>{agent.title}</CardTitle>
                  <CardDescription>{agent.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{agent.description}</p>
                </CardContent>
                <CardFooter className="flex-col gap-4">
                  <Button asChild className="w-full">
                     <a href={`mailto:synctechire@gmail.com?subject=Quote%20Request:%20AI%20Agent%20-%20${encodeURIComponent(agent.title)}`}>
                        Get a Quote
                     </a>
                  </Button>
                   <p className="text-xs text-muted-foreground">Starting from ${agent.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Custom Agent CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Have a Custom Need?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  If you don't see an agent that fits your exact needs, we can build a custom AI workflow tailored to your specific business processes. Let's discuss your automation goals.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Request a Custom AI Solution <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
