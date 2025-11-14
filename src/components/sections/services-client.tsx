
'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Bot, Cloud, Shield, Smartphone, TrendingUp, DollarSign, Layers, Gamepad2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Design & Development",
    description: "Build high-performing, mobile-first websites for eCommerce and corporate clients across Ireland.",
    link: "/services/web-development",
  },
   {
    icon: <Image src="https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" alt="WordPress Logo" width={32} height={32} />,
    title: "WordPress Development",
    description: "Custom themes, plugins, and managed hosting to harness the full power of the world's most popular CMS.",
    link: "/services/wordpress",
  },
  {
    icon: <Image src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce Logo" width={32} height={32} className="grayscale" />,
    title: "WooCommerce Development",
    description: "Powerful, flexible e-commerce solutions that turn your WordPress site into a high-conversion online store.",
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
    description: "Expert integration of Stripe's financial tools to build a robust payment infrastructure for your business.",
    link: "/services/stripe",
  },
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    title: "Managed Cloud & Optimization",
    description: "Offload cloud complexities with 24/7 global support. We handle security, scalability, and data protection so you can focus on your core mission.",
    link: "/services/managed-cloud",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "FinOps & Cost Management",
    description: "Build a culture of financial accountability. We align IT, finance, and business teams to continuously optimize your cloud spending for maximum value.",
    link: "/services/finops-cost-management",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI & Machine Learning",
    description: "Leverage AI to automate processes, enhance efficiency, and unlock new capabilities for the best value, anywhere in the world.",
    link: "/services/ai-machine-learning",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security protocols, threat detection, and global risk management at a competitive price.",
    link: "/services/cybersecurity",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Digital Growth & SEO",
    description: "Optimizing your online presence to increase visibility, attract more traffic, and improve search engine rankings for maximum ROI.",
    link: "/services/digital-growth-seo",
  },
  {
    icon: <Gamepad2 className="w-8 h-8 text-primary" />,
    title: "Games",
    description: "We build and deploy engaging, monetizable games for web and mobile platforms, turning your creative vision into a playable reality.",
    link: "/services/games",
  }
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
          <h1 className="text-4xl md:text-5xl font-bold">Global Solutions, Local Expertise</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We provide a complete suite of future-ready technology services, engineered to propel your business into its next stage of growth, no matter where you are.
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
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                    {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
              <CardFooter className="pt-4 justify-center gap-2">
                 {service.link ? (
                    <Button asChild variant="outline" size="sm">
                        <Link href={service.link}>Learn More</Link>
                    </Button>
                 ) : (
                    <Button asChild variant="outline" size="sm" disabled>
                        <span className="cursor-not-allowed">Learn More</span>
                    </Button>
                 )}
                <Button asChild size="sm">
                    <a href={`mailto:synctechire@gmail.com?subject=Quote%20Request:%20${encodeURIComponent(service.title)}`}>Get a Quote</a>
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
