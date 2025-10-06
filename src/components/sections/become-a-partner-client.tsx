
'use client';

import { ArrowRight, Mail, Handshake, ShieldCheck, TrendingUp, Zap, Target, DollarSign, Milestone, Users, GitMerge, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip, Legend } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const partnerBenefits = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Expand Your Service Portfolio",
    description: "Instantly add enterprise-grade AI, web development, and cybersecurity solutions to your offerings without the overhead of building an in-house team."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Unlock New Revenue Streams",
    description: "Generate new, high-margin revenue through referral commissions, resale opportunities, and by adding value to your existing client relationships."
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    title: "Win More Deals",
    description: "Differentiate your proposals by bundling our cutting-edge tech solutions with your core services, giving you a decisive competitive advantage."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Deliver Unmatched Value",
    description: "Enhance client satisfaction and retention by providing comprehensive, end-to-end solutions that solve their most pressing technology challenges."
  }
];

const partnershipModels = [
    {
        icon: <GitMerge className="h-8 w-8 text-primary" />,
        model: "Technology Partner",
        description: "Integrate your products or platforms with our solutions to create a unique, combined offering for the market.",
        commitment: "High",
        benefits: ["Joint go-to-market", "Shared innovation", "Strategic alignment"]
    }
];

const partnerRoiChartData = [
  { metric: "New Revenue", value: 30, label: "Add up to 30% in new, high-margin revenue by reselling or referring our tech services." },
  { metric: "Client Retention", value: 50, label: "Increase client retention by up to 50% by offering a more comprehensive, valuable solution." },
  { metric: "Deal Win-Rate", value: 20, label: "Improve deal win-rates by up to 20% by differentiating your proposals with our advanced technology." },
];

const partnerRoiChartConfig = {
  value: {
    label: "Growth (%)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const processSteps = [
    {
        step: "1",
        title: "Discovery & Audit",
        description: "A collaborative effort to map your entire client acquisition journey and tech stack. We identify high-leverage points for AI intervention."
    },
    {
        step: "2",
        title: "AI Strategy Implementation",
        description: "Deployment of tailored AI tools (e.g., predictive lead scoring, automated segmentation) that integrate seamlessly with your existing infrastructure."
    },
    {
        step: "3",
        title: "Optimization & Training",
        description: "Post-launch monitoring, continuous calibration based on real-world performance, and comprehensive training to ensure your teams master the new workflow."
    }
];


export function BecomeAPartnerClient() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: modelsRef, inView: modelsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: roiRef, inView: roiInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={cn("py-20 md:py-32 text-center bg-secondary transition-opacity duration-1000 ease-in-out", heroInView ? "opacity-100" : "opacity-0")}
      >
        <div className="container">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Accelerating Scalable Growth Through AI Strategy</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Join our ecosystem of forward-thinking partners. Leverage our cutting-edge AI, web, and cybersecurity solutions to deliver more value, win more clients, and unlock powerful new revenue streams.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="#partner-form">
                Start the Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section 
        ref={whyRef}
        className={cn("py-20 md:py-28 transition-opacity duration-1000 ease-in-out", whyInView ? "opacity-100" : "opacity-0")}
      >
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Amplify Your Business with Our Expertise</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Partnering with SYNC TECH gives you an unfair advantage. We convert fragmented processes into a high-performance, automated growth engine. Here’s how we empower your growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className={cn("text-center p-6 bg-card hover:shadow-lg transition-all duration-300", whyInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0")}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-col items-center">
                  {benefit.icon}
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section 
        ref={modelsRef}
        className={cn("py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out", modelsInView ? "opacity-100" : "opacity-0")}
      >
        <div className="container max-w-6xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Our Partnership Model</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We offer a focused partnership structure designed to align with your business goals and commitment level.</p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-md mx-auto">
                {partnershipModels.map((model) => (
                    <Card key={model.model} className="flex flex-col text-center p-6">
                        <CardHeader className="items-center">
                            {model.icon}
                            <CardTitle className="mt-4">{model.model}</CardTitle>
                            <CardDescription>Commitment: <Badge variant="outline">{model.commitment}</Badge></CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground mb-4">{model.description}</p>
                            <h4 className="font-semibold mb-2">Key Benefits:</h4>
                             <ul className="list-disc list-inside text-sm text-muted-foreground text-left">
                                {model.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
             <p className="text-center mt-8 text-sm text-muted-foreground">
                We also offer hybrid success-based structures that align our financial incentives directly with your achieved performance metrics. Let's discuss a model that works for you.
            </p>
        </div>
      </section>

      {/* Partner ROI Section */}
      <section 
        ref={roiRef}
        className={cn("py-20 md:py-28 transition-opacity duration-1000 ease-in-out", roiInView ? "opacity-100" : "opacity-0")}
      >
        <div className="container max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">The Tangible ROI of Partnership</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our focus is on delivering a verifiable, positive Return On Investment. Partnering with SYNC TECH is expected to yield the following strategic benefits.</p>
            </div>
            <Card>
                <CardHeader>
                  <CardTitle>Projected Growth for Our Partners</CardTitle>
                  <CardDescription>Anticipated business improvements by leveraging SYNC TECH solutions, including up to a 35% reduction in Customer Acquisition Cost (CAC).</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={partnerRoiChartConfig} className="min-h-[200px] w-full">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart accessibilityLayer data={partnerRoiChartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="metric" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                        <RechartsTooltip
                            cursor={false}
                            content={<ChartTooltipContent 
                                formatter={(value, name, item) => (
                                    <div className="flex flex-col gap-1 p-2 w-48">
                                        <span className="font-bold text-primary">{item.payload.metric}</span>
                                        <span className="text-sm">Impact: Up to {value}%</span>
                                        <span className="text-xs text-muted-foreground max-w-xs">{item.payload.label}</span>
                                    </div>
                                )} 
                            />}
                        />
                        <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
        </div>
      </section>

       {/* How it Works Section */}
       <section
        ref={processRef}
        className={cn("py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out", processInView ? "opacity-100" : "opacity-0")}
      >
        <div className="container max-w-5xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">A Simple Path to Shared Success</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our engagement model is designed for maximum impact and minimal disruption.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center z-0">
            {/* Dashed line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px border-t border-dashed -translate-y-8"></div>
            
            {processSteps.map((step) => (
                <Card key={step.step} className="p-6 flex flex-col items-center">
                    <CardHeader className="items-center">
                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                            <p className="text-2xl font-bold text-primary">{step.step}</p>
                        </div>
                        <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New CTA Section */}
      <section
        id="partner-form"
        ref={ctaRef}
        className={cn(
          "py-20 md:py-28 bg-primary text-primary-foreground transition-opacity duration-1000 ease-in-out",
          ctaInView ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Become Our Partner</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-90">
            Ready to expand your services and unlock new revenue streams? Let's discuss how a partnership with SYNC TECH can drive mutual success.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:synctechire@gmail.com">
                Email Us to Start the Conversation <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
