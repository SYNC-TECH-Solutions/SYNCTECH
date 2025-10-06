
'use client';

import { ArrowRight, BrainCircuit, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { metric: "CAC Reduction", value: 35, label: "Up to 35% reduction in Customer Acquisition Cost (CAC) through automation and intelligent lead prioritization." },
  { metric: "Efficiency Gain", value: 45, label: "Up to 45% increase in operational efficiency by eliminating manual bottlenecks in the sales funnel." },
  { metric: "LTV Increase", value: 25, label: "Up to 25% increase in Customer Lifetime Value (LTV) by identifying and focusing on high-potential client segments." },
];

const chartConfig = {
  value: {
    label: "Impact (%)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

const Slide = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={cn(
        "w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center p-8 text-center border-b transition-all duration-1000 ease-in-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </section>
  );
};

export function PresentationClient() {
  return (
    <div className="bg-background text-foreground">
      
      {/* Slide 1: Title */}
      <Slide className="bg-secondary">
        <div className="max-w-4xl">
           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
                Accelerating Scalable Growth 
                <span className="block text-primary">Through AI Strategy</span>
            </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This is an introductory proposal for partnership. We convert fragmented processes into a high-performance, automated growth engine, driving significant ROI.
          </p>
           <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/contact">
                        Schedule a Complimentary Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </Slide>

      {/* Slide 2: Executive Summary */}
      <Slide>
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold">Executive Summary</h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            SYNC TECH is an innovation partner specializing in architecting and implementing proprietary AI and Machine Learning solutions focused exclusively on the sales and client lifecycle. Based in Dublin, Ireland, we combine a deep understanding of local market dynamics with a global perspective, enabling our partners to scale effectively. Our mission is to demystify complex AI strategy, making powerful technology accessible and immediately actionable.
          </p>
        </div>
      </Slide>

      {/* Slide 3: Our Proposed Offering */}
      <Slide className="bg-secondary">
        <div className="max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold">Our Phased Engagement Model</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our partnership is structured for maximum impact and minimal disruption, emphasizing custom implementation and continuous data analytics.</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Card>
                    <CardHeader>
                        <Target className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>Phase I: Discovery & Digital Audit</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">A collaborative effort to map your entire client acquisition journey, technology stack, and data landscape. We identify high-leverage points for AI intervention.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <BrainCircuit className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>Phase II: AI Strategy Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Deployment of tailored AI tools (e.g., predictive lead scoring, automated segmentation) that integrate seamlessly with your existing infrastructure.</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <TrendingUp className="w-10 h-10 text-primary mb-2" />
                        <CardTitle>Phase III: Optimization & Training</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm">Post-launch monitoring, continuous calibration based on real-world performance, and comprehensive training to ensure your teams master the new workflow.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </Slide>

       {/* Slide 4: Expected Benefits & ROI */}
      <Slide>
        <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold">Expected Benefits & Value Proposition</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our focus is on delivering a verifiable, positive return on investment (ROI). Here are the strategic benefits our partners can expect.</p>
            <div className="mt-12 w-full">
               <Card>
                <CardHeader>
                  <CardTitle>Measurable Performance Uplift</CardTitle>
                  <CardDescription>Anticipated improvements based on our AI-driven optimizations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                      <XAxis dataKey="metric" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                      <ChartTooltip
                          content={<ChartTooltipContent 
                              formatter={(value, name, item) => (
                                  <div className="flex flex-col gap-1 p-2">
                                      <span className="font-bold text-primary">{item.payload.metric}</span>
                                      <span>Impact: {value}%</span>
                                      <span className="text-xs text-muted-foreground max-w-xs">{item.payload.label}</span>
                                  </div>
                              )} 
                          />}
                      />
                      <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
        </div>
      </Slide>

      {/* Slide 5: The 5-Year Vision */}
      <Slide className="bg-secondary">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold">Our 5-Year Vision for Partnership</h2>
           <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Our goal is to build long-term, synergistic partnerships. Over the next five years, we plan to become the leading AI strategy firm for SMEs in Ireland by expanding our platform capabilities, achieving top-tier certifications with AWS and Google, and co-developing new vertical-specific AI solutions with our core partners. By joining us now, you become a foundational partner in this journey, gaining early access to new technologies and a direct influence on our innovation roadmap.
          </p>
        </div>
      </Slide>


       {/* Slide 6: Call to Action */}
      <Slide className="bg-primary text-primary-foreground">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Begin Your Scalable Growth Journey</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            This proposal is a strategic starting point. A successful partnership requires mutual exploration. Let's discuss how we can tailor this framework to your specific business needs.
          </p>
           <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">
                        Schedule a Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </Slide>
      
    </div>
  );
}
