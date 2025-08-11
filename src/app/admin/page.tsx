
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { generateBlogPost, type GenerateBlogPostOutput } from '@/ai/flows/generate-blog-post';
import ReactMarkdown from 'react-markdown';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  topic: z.string().min(5, { message: 'Topic must be at least 5 characters.' }),
  keywords: z.string().min(3, { message: 'Please provide at least one keyword.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function AdminPage() {
  const [isPending, startTransition] = useTransition();
  const [generatedContent, setGeneratedContent] = useState<GenerateBlogPostOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      keywords: '',
    },
  });

  function onSubmit(values: FormValues) {
    setGeneratedContent(null);
    startTransition(async () => {
      try {
        const result = await generateBlogPost(values);
        setGeneratedContent(result);
        toast({
            title: 'Content Generated!',
            description: 'Your blog post has been successfully generated.',
        });
      } catch (error) {
        console.error("Error generating blog post:", error);
        toast({
            title: 'Error',
            description: 'There was an issue generating the content. Please try again.',
            variant: 'destructive',
        });
      }
    });
  }

  return (
    <div className="py-20 md:py-28">
        <div className="container max-w-4xl">
             <Card>
                <CardHeader>
                    <CardTitle>AI Blog Post Generator</CardTitle>
                    <CardDescription>This internal tool uses AI to generate a draft for a new blog post based on a topic and keywords. The generated content can be copied and added to the `src/lib/posts.ts` file.</CardDescription>
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
                                    <Input placeholder="e.g., The benefits of using Next.js for small businesses" {...field} />
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
                                    <Input placeholder="e.g., Next.js, SEO, performance, web development" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isPending}>
                                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Generate Content
                            </Button>
                        </form>
                    </Form>

                    {isPending && (
                        <div className="mt-8 text-center">
                            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                            <p className="mt-2 text-muted-foreground">Generating... Please wait a moment.</p>
                        </div>
                    )}
                    
                    {generatedContent && (
                        <div className="mt-8 space-y-6">
                            <hr />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Generated Title:</h3>
                                <p className="p-4 bg-secondary rounded-md">{generatedContent.title}</p>
                            </div>
                             <div>
                                <h3 className="text-xl font-bold mb-2">Generated Excerpt:</h3>
                                <p className="p-4 bg-secondary rounded-md">{generatedContent.excerpt}</p>
                            </div>
                             <div>
                                <h3 className="text-xl font-bold mb-2">Generated Content (Preview):</h3>
                                <div className="prose dark:prose-invert p-4 bg-secondary rounded-md max-w-none">
                                    <ReactMarkdown>{generatedContent.content}</ReactMarkdown>
                                </div>
                            </div>
                             <div>
                                <h3 className="text-xl font-bold mb-2">Content HTML (Copy this):</h3>
                                 <Textarea value={generatedContent.content} readOnly className="min-h-[200px] font-mono text-xs" />
                            </div>
                        </div>
                    )}
                </CardContent>
             </Card>
        </div>
    </div>
  );
}
