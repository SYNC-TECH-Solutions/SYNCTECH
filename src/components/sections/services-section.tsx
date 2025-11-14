
'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Code, Bot, Shield, TrendingUp, Cloud, DollarSign, Gamepad2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const allServices = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "High-performance websites that look great and convert visitors.",
    link: "/services/web-development",
  },
  {
    icon: <Image src="https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" alt="WordPress Logo" width={32} height={32} />,
    title: "WordPress Development",
    description: "Custom themes and plugins for the world's most popular CMS.",
    link: "/services/wordpress",
  },
  {
    icon: <Image src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce Logo" width={32} height={32} className="grayscale" />,
    title: "WooCommerce Development",
    description: "Powerful, flexible e-commerce solutions for WordPress.",
    link: "/services/woocommerce",
  },
   {
    icon: <Image src="https://cdn.worldvectorlogo.com/logos/jetpack.svg" alt="Jetpack Logo" width={32} height={32} />,
    title: "Jetpack for WordPress",
    description: "Enhance your site with top-tier security, performance, and growth tools.",
    link: "/services/jetpack",
  },
   {
    icon: <Image src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe Logo" width={32} height={32} />,
    title: "Stripe Integration",
    description: "Expert integration of Stripe's payment and financial tools.",
    link: "/services/stripe",
  },
    {
    icon: <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.L8d3nzrXGpafB9Ldy-D4TgHaE8%3Fpid%3DApi&f=1&ipt=f637bc6621c7a7b271d109bba511cffeacf541bcf8de3413af118803761043d5" alt="GoDaddy Pro Logo" width={32} height={32} />,
    title: "GoDaddy Pro Services",
    description: "Managed hosting, domains, and security through the GoDaddy Pro platform.",
    link: "/services/godaddy",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Managed Cloud",
    description: "Offload cloud complexities with 24/7 global support.",
    link: "/services/managed-cloud",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "FinOps & Cost Management",
    description: "Optimize your cloud spending for maximum value.",
    link: "/services/finops-cost-management",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI & Machine Learning",
    description: "Automate workflows and gain a competitive edge affordably.",
    link: "/services/ai-machine-learning",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our top-tier security.",
    link: "/services/cybersecurity",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Digital Growth & SEO",
    description: "Increase your visibility and drive traffic with expert strategies.",
    link: "/services/digital-growth-seo",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-primary" />,
    title: "Game Development",
    description: "We build and deploy engaging, monetizable games.",
    link: "/services/games",
  }
];

export default function ServicesSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            id="services"
            ref={ref}
            className={cn(
                "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Services Built for Value and Impact</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
                        We provide a complete suite of technology solutions designed to deliver maximum impact without stretching your budget.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <Card 
                            key={service.title}
                            className={cn(
                                "text-center p-6 bg-card hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col",
                                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <CardHeader className="flex flex-col items-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                                    {service.icon}
                                </div>
                                <CardTitle className="mt-4">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                            <CardFooter className="pt-4 !justify-center">
                                <Button asChild variant="outline">
                                    <Link href={service.link || "/services"}>Learn More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Button asChild size="lg">
                        <Link href="/services">Explore All Our Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
