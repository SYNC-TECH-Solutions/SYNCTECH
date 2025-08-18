
'use client';

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/posts";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function BlogClient() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="blog"
      ref={ref}
      className={cn(
        "py-20 md:py-28 bg-background transition-opacity duration-1000 ease-in-out",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">SYNC TECH Blog</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground text-lg">
            Insights, trends, and practical advice on technology, web development, and AI from our team of experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={post.slug}
              className={cn(
                "flex flex-col overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-card transform transition-all ease-in-out",
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                    data-ai-hint={post.imageHint}
                  />
                </div>
              </Link>
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">{post.title}</Link>
                </CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
