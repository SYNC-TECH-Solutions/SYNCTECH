

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
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <div className="mx-auto mb-4 h-20 w-20 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
              {/* Cart body */}
              <path d="M80 85H25c-2.76 0-5-2.24-5-5V40h60v40c0 2.76-2.24 5-5 5z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              <path d="M20 40h60v-5c0-8.28-6.72-15-15-15H35c-8.28 0-15 6.72-15 15v5z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
              <circle cx="30" cy="92.5" r="4.5" stroke="currentColor" strokeWidth="3"/>
              <circle cx="70" cy="92.5" r="4.5" stroke="currentColor" strokeWidth="3"/>

              {/* Items in cart - slightly smaller and positioned */}
              {/* Laptop */}
              <g transform="translate(30 22) scale(0.35)">
                <rect x="2" y="2" width="44" height="28" rx="2" stroke="currentColor" strokeWidth="6" />
                <path d="M2 30v2a2 2 0 002 2h40a2 2 0 002-2v-2H2z" stroke="currentColor" strokeWidth="6" />
              </g>
              {/* AI Brain */}
              <g transform="translate(50 12) scale(0.3)">
                <path d="M36.4,28a10,10,0,0,0-12.8,0M25,41.42A20,20,0,1,0,59.1,28" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M42,21a2,2,0,1,0-4,0V15a2,2,0,1,0,4,0Z" fill="currentColor" />
                <path d="M50,31a2,2,0,1,0-4,0V25a2,2,0,1,0,4,0Z" fill="currentColor" />
              </g>
              {/* Smartphone */}
               <g transform="translate(18 18) scale(0.3)">
                <rect x="5" y="2" width="24" height="44" rx="4" stroke="currentColor" strokeWidth="6" />
                <line x1="12" y1="40" x2="22" y2="40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </g>
            </svg>
          </div>
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
