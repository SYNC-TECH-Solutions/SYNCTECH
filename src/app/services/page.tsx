
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Cloud, Shield, Smartphone, TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Crafting responsive, high-performance websites and applications tailored to your business needs.",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description: "Leveraging artificial intelligence to automate processes, enhance efficiency, and unlock new capabilities.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Cloud Hosting",
    description: "Providing secure, scalable, and reliable cloud hosting solutions to keep your services online 24/7.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security protocols, threat detection, and risk management.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile Apps",
    description: "Building intuitive and engaging mobile applications for both iOS and Android platforms.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "SEO",
    description: "Optimizing your online presence to increase visibility, attract more traffic, and improve search engine rankings.",
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
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We offer a comprehensive suite of technology services to propel your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
      </div>
    </section>
  );
}
