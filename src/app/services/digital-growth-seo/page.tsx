
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, TrendingUp, Search, BarChart, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "SEO & Digital Growth Services in Dublin, Ireland | Sync Tech",
  description: "Sync Tech is a top digital marketing agency in Dublin, offering expert SEO, content marketing, and conversion rate optimization (CRO) to increase your website traffic and generate more leads.",
  keywords: ["SEO services Dublin", "Digital Growth Ireland", "Digital marketing agency Dublin", "Increase website traffic", "Lead generation services", "Conversion Rate Optimization", "Local SEO experts Ireland", "Content marketing strategy", "Sync Tech SEO"],
};

const coreServices = [
    {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Technical SEO & Audits",
        description: "Our comprehensive technical SEO audits identify and fix issues related to Core Web Vitals, site speed, and mobile-first indexing to build a strong foundation for ranking."
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "On-Page & Off-Page SEO",
        description: "We execute holistic on-page optimization, keyword research, and high-quality link-building services to enhance your site's authority and search engine ranking."
    },
    {
        icon: <BarChart className="h-8 w-8 text-primary" />,
        title: "Content & Analytics",
        description: "Leverage our content creation services and Google Analytics 4 consulting to create high-performing content that converts, backed by data-driven insights."
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Local & International SEO",
        description: "Dominate your local market with our expert Local SEO strategy for Dublin and expand globally with targeted international SEO and hreflang implementation."
    }
];

export default function DigitalGrowthPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Digital Growth & SEO Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            As a leading digital marketing agency in Dublin, Sync Tech delivers holistic digital strategies designed to increase website traffic, generate more leads, and maximize your marketing ROI.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free SEO Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Digital Growth Matters Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Your Partner in Sustainable Growth</h2>
                  <p className="mt-4 text-muted-foreground text-lg">In today's competitive market, a strong online presence isn't a luxury—it's essential for survival. Our digital growth consulting services focus on creating a holistic digital strategy that aligns with your business goals, turning your website into a powerful engine for lead generation and revenue growth.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Data-Driven Strategy</h3>
                              <p className="text-muted-foreground">We use advanced marketing data analysis and competitor analysis to craft performance marketing campaigns that deliver measurable results.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Full-Funnel Optimization</h3>
                              <p className="text-muted-foreground">From customer journey mapping to landing page optimization and CRO, we fine-tune every touchpoint to maximize conversions.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="/seo.png" 
                    alt="Chart showing digital growth and SEO success"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="digital growth chart"
                />
              </div>
          </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Digital Marketing Solutions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a complete suite of search engine optimization and digital marketing services, providing everything you need to improve your Google ranking and online presence.
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

       {/* Local SEO Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative order-last md:order-first">
                    <Card>
                        <CardHeader>
                            <CardTitle>Dominate the Local Market in Ireland</CardTitle>
                            <CardDescription>Our Local SEO strategy is designed to put your business on the map.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Google My Business optimization to rank in local search and maps.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Targeted keyword research for the Irish market to attract relevant customers.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Building high-quality local backlinks and citations to boost authority.</span></li>
                                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-primary mt-1" /><span>Schema markup implementation for local business details.</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">Your Trusted Dublin SEO Company</h2>
                    <p className="mt-4 text-muted-foreground">As local SEO experts in Ireland, we understand the nuances of the market. We provide reliable digital consulting to Irish SMEs, helping them connect with their community and grow their local customer base through proven search engine marketing strategies.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Digital Presence?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  Partner with a trusted Irish digital marketing agency that delivers results. Contact Sync Tech today for a free, no-obligation consultation and SEO analysis.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Request Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
