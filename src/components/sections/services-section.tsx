
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Bot, Shield, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const featuredServices = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Affordable IT Solutions",
    description: "High-performance IT and web services that look great and cost less.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description: "Automate workflows and gain a competitive edge affordably.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protect your digital assets with our top-tier, cost-effective security.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Global Tech Support",
    description: "Increase your visibility and drive traffic with our expert support.",
  },
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
                    <h2 className="text-3xl md:text-4xl font-bold">Smart & Scalable IT Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        We provide a wide range of IT solutions designed to deliver maximum impact without stretching your budget.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredServices.map((service, index) => (
                        <Card 
                            key={service.title}
                            className={cn(
                                "text-center p-6 hover:shadow-lg transition-shadow duration-300 transform transition-all ease-in-out",
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
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">View All Our Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
