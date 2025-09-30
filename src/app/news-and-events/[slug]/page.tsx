
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, newsPosts } from '@/lib/news-data';
import { SocialShareButtons } from '@/components/social-share-buttons';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://synctech.ie';
  const excerpt = post.content.replace(/<[^>]+>/g, '').substring(0, 155) + '...';

  return {
    title: post.title,
    description: excerpt,
    keywords: post.hashtags,
    openGraph: {
      title: post.title,
      description: excerpt,
      type: 'article',
      url: `${siteUrl}/news-and-events/${post.slug}`,
      images: post.image ? [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ] : [],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/news-and-events">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to SYNC TECH Feed
                </Link>
            </Button>
        </div>
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{post.title}</h1>
          <p className="text-muted-foreground">
            Posted on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {post.image && (
             <Card className="overflow-hidden mb-12">
               <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  data-ai-hint={post.imageHint}
                  priority
                />
            </Card>
        )}

        <div
          className="prose dark:prose-invert max-w-none mx-auto mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.hashtags && post.hashtags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {post.hashtags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}

        <div className="border-t pt-8 flex items-center justify-between">
            <p className="text-sm font-semibold">Share this post:</p>
            <SocialShareButtons title={post.title} slug={post.slug} />
        </div>

      </div>
    </article>
  );
}
