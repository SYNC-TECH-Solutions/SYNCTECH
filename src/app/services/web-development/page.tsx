
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Layers, Smartphone, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Web Design & Development Services in Dublin, Ireland | Sync Tech",
  description: "Professional Web Design and Custom Web Development services in Dublin by Sync Tech. Build high-performing, mobile-first websites for eCommerce and corporate clients across Ireland. Contact us for top web development solutions.",
  keywords: ["Web design Dublin", "Web development Ireland", "custom web development Dublin", "eCommerce websites Ireland", "Next.js developer Dublin", "React developer Ireland", "corporate websites Dublin", "mobile-first design"],
};

const benefits = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "High-Performing Digital Platforms",
        description: "We build websites that are more than just digital brochures; they are strategic assets designed to drive growth and engagement."
    },
    {
        icon: <Smartphone className="h-8 w-8 text-primary" />,
        title: "Mobile-First UX/UI",
        description: "Our responsive, mobile-first approach ensures a flawless user experience on any device, boosting engagement and conversions."
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "Scalable Technical Stacks",
        description: "From custom eCommerce solutions to powerful web applications, we use modern tech like React, Next.js, and Headless CMS to build for the future."
    },
    {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Built-In SEO & Speed",
        description: "Technical SEO and performance optimization are integrated from day one, ensuring your site ranks high and converts visitors."
    }
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-secondary text-center">
        <div className="container">
          <Code className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Web Design & Development Services</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Sync Tech is Ireland's full-service partner for crafting high-performing, mobile-first websites and custom web applications for eCommerce and corporate clients.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a Free Web Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

       {/* Key Differentiators Section */}
      <section className="py-20 md:py-28">
        <div className="container">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Beyond Aesthetics: A Strategic Asset for Growth</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              A Sync Tech website is more than a digital brochure. It’s an integrated platform where design, development, and strategy converge to create a powerful engine for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center p-6 bg-card hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  {benefit.icon}
                  <CardTitle className="mt-4 text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-First Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                <Image 
                    src="/webdev.png" 
                    alt="Responsive web design shown on multiple devices in Dublin"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg"
                    data-ai-hint="responsive web design"
                />
            </div>
            <div>
                <h2 className="text-3xl md:text-4xl font-bold">Crafting Mobile-First UX/UI</h2>
                <p className="mt-4 text-muted-foreground text-lg">With the majority of web traffic coming from mobile devices, a mobile-first approach isn't optional—it's essential. Our design process prioritizes the user experience on the smallest screens first, ensuring your site is accessible, functional, and beautiful on every device.</p>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Responsive by Nature</h3>
                            <p className="text-muted-foreground">We build layouts that fluidly adapt, providing an optimal viewing experience from smartphones to desktops.</p>
                        </div>
                    </li>
                     <li className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Intuitive Navigation</h3>
                            <p className="text-muted-foreground">Our UX/UI design services focus on creating intuitive journeys that guide users to their goals, reducing bounce rates and increasing retention.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">From eCommerce to Custom Web Applications</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">We employ a diverse and modern technical stack to build powerful, scalable solutions that meet any business demand.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>eCommerce Expertise</CardTitle>
                        <CardDescription>We build robust online stores using platforms like Shopify or fully custom solutions, complete with secure payment gateways and inventory management.</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Custom Web Applications</CardTitle>
                        <CardDescription>From client portals to internal dashboards, we build tailored web apps that streamline your operations and grow with your business.</CardDescription>
                    </CardHeader>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Modern CMS Solutions</CardTitle>
                        <CardDescription>We master everything from traditional WordPress development to flexible Headless CMS architectures, giving you full control over your content.</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="text-center mt-8 text-muted-foreground">
                <p><strong>Our Core Technologies:</strong> React, Next.js, Node.js, PHP, JavaScript, Shopify, WordPress, and more.</p>
            </div>
        </div>
      </section>

      {/* SEO and Performance Section */}
        <section className="py-20 md:py-28 bg-secondary">
            <div className="container text-center">
                 <h2 className="text-3xl md:text-4xl font-bold">Building Websites That Rank and Convert</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">A beautiful website is useless if no one can find it. That's why technical SEO and performance optimization are built into our development process from the very beginning.</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Technical SEO is Built-In, Not Bolted-On</h3>
                        <p className="text-muted-foreground">We implement SEO best practices from the start, focusing on proper site structure, semantic HTML, and schema markup to ensure search engines can easily crawl and understand your content.</p>
                    </div>
                     <div className="bg-card p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Blazing-Fast Site Speed</h3>
                        <p className="text-muted-foreground">We optimize every aspect of your site—from images to code—to ensure lightning-fast load times, which is critical for both user experience and search engine rankings.</p>
                    </div>
                </div>
            </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 text-center bg-primary text-primary-foreground">
          <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Build a Website That Performs?</h2>
              <p className="mt-4 max-w-2xl mx-auto opacity-90">
                  Let's discuss your vision and how our web development expertise can help you achieve your business goals. Get a free, no-obligation quote today.
              </p>
              <div className="mt-8">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">
                          Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
          </div>
      </section>

    </div>
  );
}
