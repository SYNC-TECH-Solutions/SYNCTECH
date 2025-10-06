
'use client';

import { ArrowRight, BrainCircuit, Target, TrendingUp, Briefcase, Flag, Milestone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Pie, PieChart, Legend, Tooltip as RechartsTooltip, Cell } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const roiChartData = [
  { metric: "CAC Reduction", value: 35, label: "Up to 35% reduction in Customer Acquisition Cost (CAC) through AI-driven lead prioritization and sales automation." },
  { metric: "Efficiency Gain", value: 45, label: "Up to 45% increase in operational efficiency by eliminating manual bottlenecks and automating key sales funnel processes." },
  { metric: "LTV Increase", value: 25, label: "Up to 25% increase in Customer Lifetime Value (LTV) by using AI to identify and focus on high-potential client segments." },
];

const roiChartConfig = {
  value: {
    label: "Impact (%)",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const marketChartData = [
    { name: "Using AI/Automation", value: 25, fill: "hsl(var(--primary))" },
    { name: "Legacy/Manual Systems", value: 75, fill: "hsl(var(--secondary))" },
];

const marketChartConfig = {
    value: { label: 'Market Share' },
    "Using AI/Automation": { label: "Using AI/Automation" },
    "Legacy/Manual Systems": { label: "Relying on Legacy Systems" },
} satisfies ChartConfig;


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
                <span className="block text-primary">Through AI Strategy in Dublin</span>
            </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A partnership proposal from SYNC TECH. We convert fragmented processes into a high-performance, automated growth engine, driving significant ROI for Irish and global businesses.
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
          <h2 className="text-4xl md:text-5xl font-bold">Executive Summary: Your Innovation Partner</h2>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            SYNC TECH is an innovation partner specializing in architecting and implementing proprietary AI and Machine Learning solutions focused exclusively on the sales and client lifecycle. Based in <span className="font-semibold text-primary">Dublin, Ireland</span>, we combine a deep understanding of local market dynamics with a global perspective, enabling our partners to scale effectively. Our mission is to demystify complex AI strategy, making powerful technology accessible and immediately actionable for driving business growth.
          </p>
        </div>
      </Slide>

      {/* Slide 3: Market Opportunity */}
      <Slide className="bg-secondary">
        <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold">The Untapped Market Opportunity</h2>
            <p className="mt-4 text-lg text-muted-foreground">A significant portion of the market still relies on outdated, manual processes, creating a massive opportunity for disruption through AI-driven efficiency.</p>
            <div className="mt-12 w-full">
               <Card>
                <CardHeader>
                  <CardTitle>Current Market Landscape: AI Adoption</CardTitle>
                  <CardDescription>An estimated 75% of businesses have yet to fully integrate AI and automation into their core sales and client acquisition funnels.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={marketChartConfig} className="mx-auto aspect-square max-h-[300px]">
                    <PieChart>
                       <RechartsTooltip content={<ChartTooltipContent hideLabel />} />
                      <Pie data={marketChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} labelLine={false}>
                         {marketChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Legend
                        content={({ payload }) => (
                            <div className="flex justify-center gap-4 mt-4">
                            {payload?.map((entry, index) => (
                                <div key={`item-${index}`} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                                <span className="text-sm">{entry.value}</span>
                                </div>
                            ))}
                            </div>
                        )}
                        />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
        </div>
      </Slide>

      {/* Slide 4: Phased Engagement Model */}
      <Slide>
        <div className="max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold">Our 5-Year Vision & Phased Engagement Model</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our goal is a long-term, synergistic partnership. We structure our engagement for maximum impact and minimal disruption, with a clear path to continuous improvement and shared success.</p>
            <div className="relative mt-12 w-full max-w-2xl mx-auto">
                <div className="absolute left-1/2 w-1 h-full bg-border -translate-x-1/2"></div>
                <div className="space-y-16">
                    {/* Milestone 1 */}
                    <div className="relative flex items-center">
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background"><Target className="w-5 h-5"/></div>
                        <Card className="w-[calc(50%-2rem)] p-6 text-left ml-auto">
                            <h3 className="font-bold text-lg">Phase I: Discovery & Digital Audit</h3>
                            <p className="text-sm text-muted-foreground mt-2">A collaborative deep-dive into your client acquisition journey, tech stack, and data landscape to identify high-leverage points for AI intervention.</p>
                        </Card>
                    </div>
                     {/* Milestone 2 */}
                    <div className="relative flex items-center">
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background"><BrainCircuit className="w-5 h-5"/></div>
                        <Card className="w-[calc(50%-2rem)] p-6 text-left mr-auto">
                            <h3 className="font-bold text-lg">Phase II: AI Strategy Implementation</h3>
                            <p className="text-sm text-muted-foreground mt-2">Deployment of tailored AI tools (e.g., predictive lead scoring, automated segmentation) that integrate seamlessly with your existing infrastructure.</p>
                        </Card>
                    </div>
                     {/* Milestone 3 */}
                    <div className="relative flex items-center">
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background"><TrendingUp className="w-5 h-5"/></div>
                        <Card className="w-[calc(50%-2rem)] p-6 text-left ml-auto">
                             <h3 className="font-bold text-lg">Phase III: Optimization & Training</h3>
                            <p className="text-sm text-muted-foreground mt-2">Post-launch monitoring, continuous calibration based on real-world performance, and comprehensive training to ensure your teams master the new workflow.</p>
                        </Card>
                    </div>
                     {/* Milestone 4 */}
                     <div className="relative flex items-center">
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center ring-8 ring-background"><Briefcase className="w-5 h-5"/></div>
                        <Card className="w-[calc(50%-2rem)] p-6 text-left mr-auto">
                             <h3 className="font-bold text-lg">Years 2-5: Co-Development & Innovation</h3>
                            <p className="text-sm text-muted-foreground mt-2">Become a foundational partner with early access to new technologies as we co-develop vertical-specific AI solutions and expand our platform capabilities together.</p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
      </Slide>

       {/* Slide 5: Expected Benefits & ROI */}
      <Slide className="bg-secondary">
        <div className="max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold">Driving Measurable ROI: Your Expected Benefits</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our focus is on delivering a verifiable, positive Return On Investment. Here are the strategic benefits our partners can expect.</p>
            <div className="mt-12 w-full">
               <Card>
                <CardHeader>
                  <CardTitle>Projected Performance Uplift with AI Integration</CardTitle>
                  <CardDescription>Anticipated improvements based on our AI-driven optimizations across the client lifecycle.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={roiChartConfig} className="min-h-[200px] w-full">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart accessibilityLayer data={roiChartData} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="metric" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                        <ChartTooltip
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
        </div>
      </Slide>

       {/* Slide 6: Call to Action */}
      <Slide className="bg-primary text-primary-foreground">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Begin Your Scalable Growth Journey in Ireland</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            This proposal is a strategic starting point. A successful partnership requires mutual exploration. Let's schedule a complimentary session to discuss how we can tailor this framework to your specific business needs.
          </p>
           <div className="mt-8">
                <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">
                        Schedule Your Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </div>
      </Slide>
      
    </div>
  );
}
