'use client';

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";

export default function PortfolioSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const featuredProjects = projects.slice(0, 3);

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
                    {featuredProjects.map((project, index) => (
                        <Card 
                            key={project.title} 
                            className={cn(
                                "flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-card transform transition-all ease-in-out",
                                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                             <Link href={`/portfolio/${project.slug}`} className="block">
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
                            </Link>
                            <CardHeader>
                               <CardTitle>
                                    <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm mb-4">{project.excerpt}</p>
                            </CardContent>
                             <CardFooter>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/portfolio/${project.slug}`}>
                                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
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
