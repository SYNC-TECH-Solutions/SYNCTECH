
'use client';

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-COMMERCE MANAGER | LUXE THREADS",
    description: "Launched and managed an online fashion brand on WordPress/WooCommerce with custom HTML/CSS, integrating Stripe and PayPal for seamless checkout.",
    image: "https://placehold.co/600x400.png",
    imageHint: "fashion website",
    techStack: ["WordPress", "WooCommerce", "SEO"],
  },
  {
    title: "GoExploree – Real Estate Mobile App",
    description: "Developed a cross-platform real estate mobile app for a local student accommodation service, enabling tenants to browse and schedule viewings.",
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile app interface",
    techStack: ["Ionic", "Angular", "Firebase"],
  },
  {
    title: "ATLANTIC HOTEL - Live Project",
    description: "Led the redesign and development of the Atlantic Hotel website, creating a user-friendly interface and a custom booking management system.",
    image: "https://placehold.co/600x400.png",
    imageHint: "hotel booking system",
    techStack: ["Booking.com API", "React"],
  },
];

export default function PortfolioSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section 
            id="portfolio" 
            ref={ref}
            className={cn(
                "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Proof of Quality, Priced for Value</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Our work speaks for itself. Explore projects where we've delivered exceptional results and ROI for our clients.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card 
                            key={project.title} 
                            className={cn(
                                "flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-card transform transition-all ease-in-out",
                                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                    data-ai-hint={project.imageHint}
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech) => (
                                        <Badge key={tech} variant="secondary">{tech}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/portfolio">Explore All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
