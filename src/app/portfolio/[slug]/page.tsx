
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://synctech.ie';

  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      type: 'article',
      url: `${siteUrl}/portfolio/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 600,
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-5xl">
         <div className="mb-8">
            <Button asChild variant="outline" className="bg-card">
                <Link href="/portfolio">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Link>
            </Button>
        </div>
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{project.title}</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {project.excerpt}
          </p>
        </header>

        <Card className="overflow-hidden mb-12 shadow-lg">
           <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              data-ai-hint={project.imageHint}
              priority
            />
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-card p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <h2 className="text-2xl font-bold mb-4">Key Results</h2>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
            </div>
            <div className="md:col-span-1">
                <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                    
                    {project.liveUrl && (
                         <>
                            <h3 className="text-xl font-bold mb-4">Project Link</h3>
                            <Button asChild className="w-full">
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    View Live Project <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </>
                    )}
                </Card>
            </div>
        </div>

      </div>
    </article>
  );
}
