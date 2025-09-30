
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { newsPosts } from '@/lib/news-data';
import { SocialShareButtons } from '@/components/social-share-buttons';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SYNC TECH Feed | Latest News & Updates from SYNC TECH',
  description: 'Stay up-to-date with the latest news, announcements, and events from SYNC TECH. Discover our recent achievements, product launches, and industry insights.',
};

export default function TheSyncReportPage() {
  // Sort posts by date in descending order
  const sortedPosts = [...newsPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="py-20 md:py-28 bg-secondary">
      <div className="container max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">SYNC TECH Feed</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            The latest announcements, updates, and insights from the team at SYNC TECH.
          </p>
        </header>

        <div className="space-y-12">
          {sortedPosts.map((post) => (
            <Card key={post.slug} className="bg-card">
              <CardHeader>
                <CardTitle>
                  <Link href={`/news-and-events/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
              </CardHeader>
              {post.image && (
                <CardContent>
                  <Link href={`/news-and-events/${post.slug}`}>
                    <div className="aspect-video overflow-hidden rounded-lg border">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={post.imageHint}
                      />
                    </div>
                  </Link>
                </CardContent>
              )}
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                 <Button asChild variant="outline" size="sm">
                    <Link href={`/news-and-events/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <SocialShareButtons title={post.title} slug={post.slug} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
