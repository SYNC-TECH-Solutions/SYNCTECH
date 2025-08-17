
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Cloud, Shield, Smartphone, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Crafting responsive, high-performance websites and applications tailored to your business needs, for less.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description: "Leveraging artificial intelligence to automate processes, enhance efficiency, and unlock new capabilities for the best value.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Secure Cloud Hosting",
    description: "Providing secure, scalable, and reliable cloud hosting to keep your services online 24/7, with cost-effective plans.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security protocols, threat detection, and risk management at a competitive price.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile App Development",
    description: "Building intuitive and engaging mobile applications for both iOS and Android platforms, focusing on quality and affordability.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Digital Growth & SEO",
    description: "Optimizing your online presence to increase visibility, attract more traffic, and improve search engine rankings for maximum ROI.",
  },
];

export default function ServicesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We offer a complete suite of affordable technology services to propel your business forward, delivering exceptional quality and value.
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
