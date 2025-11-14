
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, DollarSign, Target, Briefcase, BarChart, Users, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Cloud FinOps & Cost Management Services in Dublin, Ireland | Sync Tech",
  description: "Sync Tech offers expert FinOps and cloud cost management services in Dublin for AWS, Azure, and GCP. Maximize ROI and gain financial accountability with our local Irish expertise.",
  keywords: ["FinOps services Dublin", "cloud cost management Ireland", "AWS cost optimization Dublin", "Azure billing Ireland", "GCP cost savings", "FinOps consulting Dublin", "cloud financial management"],
};

const coreServices = [
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Governance & Financial Accountability",
        description: "Establish robust budget management and gain full financial transparency with accurate cloud usage reporting and analysis."
    },
    {
        icon: <DollarSign className="h-8 w-8 text-primary" />,
        title: "Strategic Cost Optimization",
        description: "We implement resource tagging and develop strategies around Reserved Instances and Savings Plans to significantly lower your TCO."
    },
    {
        icon: <Cpu className="h-8 w-8 text-primary" />,
        title: "Technical Optimization & Savings",
        description: "From instance rightsizing to serverless cost analysis, we identify and implement technical changes that lead to substantial savings."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "FinOps Culture & Reporting",
        description: "Through workshops and monthly reviews, we foster cross-functional collaboration and ensure costs remain predictable."
    }
];

export default function FinOpsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">SYNC TECH & FINOPS</p>
          <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">FinOps & Cloud Cost Management</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Gain control over your AWS, Azure, and GCP spending. We empower you to maximize ROI, ensure financial accountability, and build a culture of cost-conscious innovation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free Cost Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why FinOps Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">What is FinOps and Why Is It Critical?</h2>
                  <p className="mt-4 text-muted-foreground text-lg">FinOps is a cultural practice that brings financial accountability to the variable spend model of the cloud. It bridges the gap between your technical and financial teams, ensuring every dollar spent on cloud services drives maximum business value.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Enhance Financial Governance</h3>
                              <p className="text-muted-foreground">Move from reactive cost management to proactive financial planning and budget control.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Drive Cross-Functional Collaboration</h3>
                              <p className="text-muted-foreground">Align your finance, operations, and engineering teams around the shared goal of efficiency and innovation.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="/finops.png" 
                    alt="Chart showing financial operations and cost management for Dublin businesses"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="financial chart graph"
                />
              </div>
          </div>
      </section>

      {/* Our FinOps Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our FinOps & Cost Management Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a complete suite of services built on the core FinOps framework of Inform, Optimize, and Operate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service) => (
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

       {/* Local Expertise Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">Local Irish Expertise You Can Trust</h2>
                    <p className="mt-4 text-muted-foreground">As an established FinOps service provider in Ireland, Sync Tech combines deep cloud financial expertise with an understanding of the local business landscape. We partner closely with Irish SMEs to provide customized solutions that align with your specific financial and operational needs, helping you navigate compliance and market dynamics with a dedicated, local team.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center">
                        <CardHeader className="p-2 items-center">
                            <Briefcase className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-base font-semibold">Irish SME Focus</CardTitle>
                        </CardHeader>
                    </Card>
                     <Card className="p-4 text-center">
                        <CardHeader className="p-2 items-center">
                            <Target className="h-8 w-8 text-primary mb-2" />
                            <CardTitle className="text-base font-semibold">Customized Solutions</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Turn Cloud Costs into a Competitive Advantage</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  Stop letting cloud costs spiral out of control. Partner with Sync Tech to build a culture of financial accountability and maximize the ROI on your cloud investments.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Start Optimizing Today <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
