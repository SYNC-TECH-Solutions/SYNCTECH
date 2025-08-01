import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "An e-commerce platform for a fashion startup, featuring a custom CMS and integrated payment gateway.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ecommerce fashion",
    techStack: ["Next.js", "TypeScript", "Stripe", "Firebase"],
    results: "Achieved a 40% increase in online sales and a 25% improvement in site performance.",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An AI-powered analytics dashboard for a marketing agency to track campaign performance in real-time.",
    image: "https://placehold.co/600x400.png",
    imageHint: "analytics dashboard",
    techStack: ["React", "Node.js", "Chart.js", "Google Cloud"],
    results: "Reduced reporting time by 60% and provided actionable insights that boosted client ROI by 15%.",
    liveUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "A cross-platform mobile app for a fitness company, offering personalized workout plans and progress tracking.",
    image: "https://placehold.co/600x400.png",
    imageHint: "fitness app",
    techStack: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
    results: "Reached 50,000+ downloads in the first three months with a 4.8-star app store rating.",
    liveUrl: "#",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Portfolio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into the successful solutions we've delivered for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300">
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
                <p className="text-sm font-semibold">Results:</p>
                <p className="text-sm text-muted-foreground">{project.results}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="outline" asChild className="w-full">
                    <Link href={project.liveUrl}>View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
