
'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PortfolioPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
          <h1 className="text-4xl md:text-5xl font-bold">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We deliver high-quality results that speak for themselves. Here’s a look at the value we’ve created for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.slug}
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
                    height={300}
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
                 <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                  {project.techStack.length > 3 && (
                    <Badge variant="outline">+{project.techStack.length - 3} more</Badge>
                  )}
                </div>
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
      </div>
    </section>
  );
}
