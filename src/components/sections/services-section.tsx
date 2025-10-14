
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Bot, Shield, TrendingUp, Cloud, DollarSign, Gamepad2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const allServices = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "High-performance websites that look great and convert visitors.",
    link: "/services/web-development",
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
                "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Services Built for Value and Impact</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We provide a complete suite of technology solutions designed to deliver maximum impact without stretching your budget.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                         <Link key={service.title} href={service.link || "/services"} className="block h-full">
                            <Card 
                                className={cn(
                                    "text-center p-6 h-full hover:shadow-lg hover:border-primary transition-all duration-300 transform ease-in-out",
                                    inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                )}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <CardHeader className="flex flex-col items-center">
                                    {service.icon}
                                    <CardTitle className="mt-4">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/services">Explore All Our Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
