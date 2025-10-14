
'use client';

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

export default function PortfolioSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const featuredProjects = projects.slice(0, 4);

    return (
        <section 
            id="portfolio" 
            ref={ref}
            className={cn(
                "py-20 md:py-28 bg-secondary transition-opacity duration-1000 ease-in-out",
                inView ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Proof of Quality, Priced for Value</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
                        Our work speaks for itself. Explore projects where we've delivered exceptional results and ROI for our clients.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                        <Card 
                            key={project.title} 
                            className={cn(
                                "group flex flex-col overflow-hidden bg-card transform transition-all duration-500 ease-in-out hover:shadow-xl",
                                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            )}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <Link href={`/portfolio/${project.slug}`} className="block overflow-hidden">
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        data-ai-hint={project.imageHint}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                      <div className="flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded-full">
                                        <Eye className="h-5 w-5" />
                                        <span>View Case Study</span>
                                      </div>
                                    </div>
                                </div>
                            </Link>
                            <CardHeader>
                               <CardTitle className="text-xl">
                                    <Link href={`/portfolio/${project.slug}`} className="hover:text-primary transition-colors">{project.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm mb-4">{project.excerpt}</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.techStack.slice(0, 4).map((tech) => (
                                    <Badge key={tech} variant="secondary">{tech}</Badge>
                                  ))}
                                  {project.techStack.length > 4 && (
                                    <Badge variant="outline">+{project.techStack.length - 4} more</Badge>
                                  )}
                                </div>
                            </CardContent>
                             <CardFooter>
                                <Button asChild variant="link" className="p-0 h-auto">
                                    <Link href={`/portfolio/${project.slug}`}>
                                        Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <Button asChild size="lg">
                        <Link href="/portfolio">Explore All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
