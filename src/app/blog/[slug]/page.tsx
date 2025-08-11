
import { notFound } from 'next/navigation';
import { getPostBySlug, posts } from '@/lib/posts';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://synctech.ie';

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <div className="mb-8">
            <Button asChild variant="outline">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Link>
            </Button>
        </div>
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{post.title}</h1>
          <p className="text-muted-foreground">
            Posted on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

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

        <div
          className="prose dark:prose-invert max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
