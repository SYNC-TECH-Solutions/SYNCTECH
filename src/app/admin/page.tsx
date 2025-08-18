
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateBlogPost, GenerateBlogPostOutput } from '@/ai/flows/generate-blog-post';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  topic: z.string().min(5, { message: 'Topic must be at least 5 characters.' }),
  keywords: z.string().min(3, { message: 'Please provide at least one keyword.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AdminPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [generatedContent, setGeneratedContent] = useState<GenerateBlogPostOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      keywords: '',
    },
  });

  function onSubmit(values: FormValues) {
    startTransition(async () => {
      try {
        const result = await generateBlogPost(values);
        setGeneratedContent(result);
        toast({
          title: 'Content Generated!',
          description: 'Your new blog post draft is ready below.',
        });
      } catch (error) {
        console.error('Error generating blog post:', error);
        toast({
          title: 'Generation Failed',
          description: 'An unexpected error occurred. Please try again.',
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <div className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>AI Blog Post Generator</CardTitle>
            <CardDescription>
              Enter a topic and some keywords to generate a draft for a new blog post.
              Review and edit the generated content before adding it to your website.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Post Topic</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., The Future of Web Development" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Keywords</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., AI, Next.js, Serverless" {...field} />
                      </FormControl>
                       <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate Content
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {generatedContent && (
          <Card>
            <CardHeader>
              <CardTitle>Generated Content</CardTitle>
              <CardDescription>Copy and paste this content into your `src/lib/posts.ts` file after reviewing.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="generated-title">Title</Label>
                <Textarea id="generated-title" readOnly value={generatedContent.title} className="min-h-[50px] mt-2" />
              </div>
              <div>
                <Label htmlFor="generated-excerpt">Excerpt</Label>
                <Textarea id="generated-excerpt" readOnly value={generatedContent.excerpt} className="min-h-[100px] mt-2" />
              </div>
              <div>
                <Label htmlFor="generated-html">HTML Content</Label>
                <Textarea id="generated-html" readOnly value={generatedContent.content} className="min-h-[300px] mt-2 font-mono text-xs" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
