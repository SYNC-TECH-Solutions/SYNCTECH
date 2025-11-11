
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Palette, Code, Server, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/logo';

export const metadata: Metadata = {
  title: "Expert WordPress Development Services Worldwide | SYNC TECH",
  description: "SYNC TECH offers affordable, custom WordPress development and design services globally. From bespoke themes to managed hosting, we provide world-class WordPress solutions at the best prices.",
  keywords: ["WordPress development", "custom WordPress themes", "WordPress design Ireland", "affordable WordPress services", "managed WordPress hosting", "WordPress experts", "global WordPress agency", "SYNC TECH WordPress"],
};

const coreServices = [
    {
        icon: <Palette className="h-10 w-10 text-primary" />,
        title: "Phase 1: Theme Design & Customization",
        description: "We start by designing a professionally crafted, custom WordPress theme that reflects your unique brand identity and engages your target audience, ensuring you stand out from the crowd."
    },
    {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "Phase 2: Custom Development",
        description: "Next, we build out your bespoke WordPress website and any custom plugins required. This ensures your site is perfectly tailored to your business needs, creating a unique and highly functional online presence."
    },
    {
        icon: <Server className="h-10 w-10 text-primary" />,
        title: "Phase 3: Managed Hosting & Support",
        description: "Once development is complete, we can manage your hosting environment. This ensures your site is fast, secure, and always online, backed by our 24/7 global support."
    },
    {
        icon: <Globe className="h-10 w-10 text-primary" />,
        title: "Phase 4: Global Service Delivery",
        description: "Our efficient model allows us to offer these world-class WordPress services at globally competitive prices, providing you with unmatched value and a long-term partnership for success."
    }
];

export default function WordpressPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
            <div className="flex justify-center items-center gap-4 md:gap-6 mb-8">
                <Image src="https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" alt="WordPress Logo" width={60} height={60} />
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground">x</span>
                <Logo className="text-4xl md:text-5xl" />
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Custom WordPress Development Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            From bespoke themes to managed hosting, SYNC TECH provides enterprise-grade WordPress solutions at prices that empower businesses worldwide.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:synctechire@gmail.com?subject=WordPress%20Service%20Inquiry">
                Get a Free WordPress Quote <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What is WordPress Section */}
      <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl md:text-4xl font-bold">What is <span className="text-primary">WordPress</span>?</h2>
                  <p className="mt-4 text-muted-foreground text-lg">WordPress is the world's most popular Content Management System (CMS), powering over 43% of all websites on the internet. Its flexibility, ease of use, and vast ecosystem of plugins and themes make it the ideal platform for everything from simple blogs and corporate websites to complex e-commerce stores and membership sites.</p>
                  <ul className="mt-6 space-y-4">
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">Unmatched Flexibility</h3>
                              <p className="text-muted-foreground">Easily extend your site's functionality with thousands of plugins for SEO, marketing, e-commerce, and more.</p>
                          </div>
                      </li>
                      <li className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <h3 className="font-semibold">User-Friendly Content Management</h3>
                              <p className="text-muted-foreground">Empower your team to update content, publish articles, and manage your site without needing to write a single line of code.</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  <Image 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F7ehqrjkNyoaWQ9eN7A65sC.jpg&f=1&nofb=1&ipt=7b791e4a6337402600e736e6efc1254d047b3be8af430559dff18404b64aad68"
                    alt="WordPress website"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="WordPress website"
                />
              </div>
          </div>
      </section>

      {/* Core Services Workflow Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our WordPress Development Workflow</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              We offer a full-spectrum, end-to-end process to build, launch, and manage your successful online presence.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical connector line */}
            <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 z-0"></div>
            
            <div className="space-y-16">
                {coreServices.map((service, index) => (
                    <div key={service.title} className="relative flex items-center md:even:flex-row-reverse">
                        <div className="hidden md:flex w-1/2 md:even:ml-auto"></div>
                        <div className="absolute left-8 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-secondary p-2 rounded-full ring-4 ring-primary">
                            {service.icon}
                        </div>
                        <div className="w-full md:w-1/2 pl-16 md:pl-8 md:even:pl-0 md:even:pr-8">
                             <Card className="bg-card hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

       {/* Managed Services Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative order-last md:order-first">
                    <Card>
                        <CardHeader>
                            <CardTitle>A True "Done-For-You" Partner</CardTitle>
                            <CardDescription>We go beyond development to become your long-term WordPress partner.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Whether you purchase a WordPress solution from us or through one of our referrals, we can manage your entire online site. This includes handling all technical updates, security monitoring, performance optimization, and content changes, allowing you to focus completely on running your business.</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">Your Success is Our Business</h2>
                    <p className="mt-4 text-muted-foreground">We believe in building long-term relationships. Our goal is to ensure your WordPress site remains a powerful asset for your business long after the initial launch. We provide ongoing support and strategic guidance to help you adapt to market changes and continue to grow.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Harness the Power of WordPress?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                 Let's build a WordPress solution that is powerful, scalable, and perfectly aligned with your business goals. Contact us today for a free, no-obligation consultation and quote.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <a href="mailto:synctechire@gmail.com?subject=WordPress%20Service%20Inquiry">
                          Discuss Your WordPress Project <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
