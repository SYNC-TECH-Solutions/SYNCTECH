

import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot, BrainCircuit, FileText, Lightbulb, PlayCircle, ShoppingCart } from 'lucide-react';
import aiAgents from '@/lib/data/ai-agents.json';

export const metadata: Metadata = {
  title: "Agent & Workflow Marketplace | SYNC TECH",
  description: "Explore and acquire powerful AI agents and automated workflows from SYNC TECH. Boost productivity with solutions for lead generation, content creation, and business intelligence.",
  keywords: ["AI agents", "AI marketplace", "automated workflows", "business AI", "lead generation AI", "content automation", "SYNC TECH AI"],
};

type AiAgent = {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  price: number;
  demoUrl?: string;
};

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  BrainCircuit,
  FileText,
  Lightbulb,
  Bot,
};

export default function MarketplacePage() {
  const agentsWithDemos = aiAgents.filter(agent => agent.demoUrl);
  const otherAgents = aiAgents.filter(agent => !agent.demoUrl);

  const AgentCard = ({ agent }: { agent: AiAgent }) => {
    const IconComponent = iconMap[agent.icon];
    return (
      <Card className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="items-center">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
          </div>
          <CardTitle>{agent.title}</CardTitle>
          <CardDescription>{agent.category}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{agent.description}</p>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          {agent.demoUrl && (
            <Button asChild className="w-full" variant="secondary">
              <Link href={agent.demoUrl}>
                Try Live Demo <PlayCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
          <Button asChild className="w-full">
            <a href={`mailto:synctechire@gmail.com?subject=Quote%20Request:%20AI%20Agent%20-%20${encodeURIComponent(agent.title)}`}>
              Get a Quote
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">Starting from ${agent.price}</p>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            SYNC<span className="text-primary">TECH</span> Marketplace
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Empower your business with intelligent automation. Browse our collection of pre-built AI agents designed to streamline processes, enhance productivity, and drive growth.
          </p>
        </div>
      </section>

      {/* Live Demos Section */}
      {agentsWithDemos.length > 0 && (
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Try a Live Demo</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Experience the power of our AI agents firsthand. These interactive demos showcase the value and efficiency our solutions can bring to your business.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
              {agentsWithDemos.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Agents Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Explore Our Full Suite of AI Agents</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Browse our complete catalog of AI-powered solutions designed for sales, marketing, operations, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
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
