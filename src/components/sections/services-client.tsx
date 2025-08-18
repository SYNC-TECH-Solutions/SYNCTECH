
'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Cloud, Shield, Smartphone, TrendingUp, DollarSign, Layers } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Application Modernization",
    description: "Innovate and reduce costs by refactoring legacy applications for secure, scalable cloud environments, enhancing business agility.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Managed Cloud & Optimization",
    description: "Offload cloud complexities with 24/7 support. We handle security, scalability, and data protection so you can focus on your core mission.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "FinOps & Cost Management",
    description: "Build a culture of financial accountability. We align IT, finance, and business teams to continuously optimize your cloud spending for maximum value.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI & Machine Learning",
    description: "Leverage AI to automate processes, enhance efficiency, and unlock new capabilities for the best value.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security protocols, threat detection, and risk management at a competitive price.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Digital Growth & SEO",
    description: "Optimizing your online presence to increase visibility, attract more traffic, and improve search engine rankings for maximum ROI.",
  },
];

export function ServicesClient() {
   const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="services" 
      ref={ref}
      className={cn(
        "py-20 md:py-28 transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">The Pillars of Modern Technology</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We provide a complete suite of future-ready technology services, engineered to propel your business into its next stage of growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={cn(
                "text-center p-6 hover:shadow-lg transition-shadow duration-300 transform transition-all ease-in-out flex flex-col",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="pt-4 justify-center">
                 <Button asChild variant="outline">
                    <Link href="/contact">Get a Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/contact">Get Your Custom Quote</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
