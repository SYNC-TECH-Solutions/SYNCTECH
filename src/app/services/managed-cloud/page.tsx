
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Cloud, Cpu, Gauge, ShieldCheck, Zap, Server, GanttChartSquare, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Expert Managed Cloud Services in Ireland | Sync Tech",
  description: "Sync Tech offers expert Managed Cloud services for peak performance, scalability, and cost efficiency. Future-proof your business with our proactive monitoring and optimization.",
};

const infrastructureServices = [
    {
        icon: <Gauge className="h-8 w-8 text-primary" />,
        title: "Proactive Cloud Monitoring",
        description: "Benefit from 24/7 incident response that keeps your systems healthy and operational."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Automated Patching & Security",
        description: "Ensure compliance and security through our vigilant management practices."
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "Continuous Performance Audits",
        description: "Engage in constant optimization loops to enhance efficiency and reduce costs."
    },
    {
        icon: <Cloud className="h-8 w-8 text-primary" />,
        title: "Vendor Agnostic Expertise",
        description: "Leverage our proficiency in managing diverse cloud environments like AWS, Azure, and Google Cloud."
    }
];

const optimizationPillars = [
    {
        title: "Lightning-Fast Speeds",
        description: "Achieve optimal performance through strategic Cloud Optimization and Content Delivery Network (CDN) integration.",
    },
    {
        title: "Scalability and Elasticity",
        description: "Guarantee seamless performance during peak demand without over-provisioning resources.",
    },
    {
        title: "Strategic Cloud Cost Management",
        description: "Implement FinOps principles to eliminate unnecessary expenditures and significantly lower your monthly cloud costs.",
    },
    {
        title: "High Availability & Disaster Recovery",
        description: "Implement robust strategies and automated backups to ensure business continuity and data protection.",
    },
];

const modernizationServices = [
    {
        icon: <Server className="h-8 w-8 text-primary" />,
        title: "Seamless Cloud Migration",
        description: "From 'Lift-and-Shift' to full re-platforming, we ensure a smooth, risk-free transition to the cloud."
    },
    {
        icon: <GanttChartSquare className="h-8 w-8 text-primary" />,
        title: "DevOps & CI/CD Pipelines",
        description: "Accelerate your deployment cycles and improve reliability with our expert DevOps integration."
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Infrastructure as Code (IaC)",
        description: "Promote consistency, reduce manual errors, and enable rapid provisioning with IaC practices."
    }
];

export default function ManagedCloudPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <Cloud className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Expert Managed Cloud Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Achieve peak performance, scalability, and cost-efficiency. Sync Tech transforms your IT infrastructure from a cost center into a competitive advantage.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free Cloud Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Imperative Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Why Managed Cloud is the Future of Business IT</h2>
                  <p className="mt-4 text-muted-foreground text-lg">In today’s digital landscape, navigating IT infrastructure is a complex challenge. Sync Tech is your essential partner, transforming your cloud environment from a necessary expense into a strategic asset for growth and resilience.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Move Beyond Basic Hosting</h3>
                              <p className="text-muted-foreground">Understand the significant difference between raw cloud infrastructure and expert-managed services that deliver reliability and performance.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Future-Proof Your Business</h3>
                              <p className="text-muted-foreground">Our dedication to reliability and proactive management future-proofs your business against evolving technological demands.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                   <Card className="p-4 text-center bg-card">
                      <CardHeader className="p-2 items-center">
                          <div className="bg-primary/10 p-3 rounded-full mb-2">
                             <Zap className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-base font-semibold">Enhanced Performance</CardTitle>
                      </CardHeader>
                  </Card>
                  <Card className="p-4 text-center bg-card">
                      <CardHeader className="p-2 items-center">
                          <div className="bg-primary/10 p-3 rounded-full mb-2">
                             <ShieldCheck className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-base font-semibold">Ironclad Security</CardTitle>
                      </CardHeader>
                  </Card>
              </div>
          </div>
      </section>

      {/* Infrastructure Mastery Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Comprehensive Managed Cloud Offering</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                At Sync Tech, we take pride in our core managed cloud services, tailored to meet your unique requirements and ensure your infrastructure is always optimized.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureServices.map((service) => (
              <Card key={service.title} className="text-center p-6 bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  {service.icon}
                  <CardTitle className="mt-4 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Pillars Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Pillars of Optimization: Speed, Scale, & Cost-Efficiency</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our focus on measurable benefits ensures our clients experience significant improvements in their cloud operations.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {optimizationPillars.map(pillar => (
                    <div key={pillar.title} className="bg-secondary p-6 rounded-lg">
                        <h3 className="font-bold text-xl mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Modernization Section */}
      <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold">Modernizing Operations: Cloud Migration & DevOps</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We provide specialized services designed for growth and modernization, making your transition to the cloud smooth and efficient.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {modernizationServices.map(service => (
                      <Card key={service.title}>
                          <CardHeader className="flex flex-row items-center gap-4">
                              {service.icon}
                              <CardTitle>{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{service.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>
      
       {/* Onboarding Process Section */}
       <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Our Four-Step Cloud Partnership Process</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Our collaborative onboarding process ensures transparency and clarity from day one.</p>
            </div>
            <div className="space-y-8">
                <Card><CardHeader><CardTitle>Phase 1: Deep Discovery and Infrastructure Audit</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle>Phase 2: Customized Optimization and Security Blueprint</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle>Phase 3: Migration and Seamless Transition</CardTitle></CardHeader></Card>
                <Card><CardHeader><CardTitle>Phase 4: Ongoing Monitoring, Management, and Strategic Review</CardTitle></CardHeader></Card>
            </div>
        </div>
       </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Unlock Your Cloud's Full Potential</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  Don’t let your cloud infrastructure be a drain on resources. Partner with Sync Tech to turn it into a powerful engine for growth.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Elevate Your Operations Today <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
