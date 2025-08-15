
'use client';

import { useState, useTransition, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, Clipboard, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { generateOutreach, type GenerateOutreachOutput } from '@/ai/flows/generate-outreach';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const formSchema = z.object({
  businessName: z.string().min(2, { message: 'Business name is required.' }),
  businessType: z.string().min(2, { message: 'Business type is required.' }),
  opportunity: z.string().min(10, { message: 'Opportunity must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

function OutreachGeneratorPage() {
  const [isPending, startTransition] = useTransition();
  const [generatedContent, setGeneratedContent] = useState<GenerateOutreachOutput | null>(null);
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      businessType: '',
      opportunity: '',
    },
  });

  useEffect(() => {
    const name = searchParams.get('name');
    const opportunity = searchParams.get('opportunity');
    const type = searchParams.get('type');
    if (name) form.setValue('businessName', name);
    if (opportunity) form.setValue('opportunity', opportunity);
    if (type) form.setValue('businessType', type);
  }, [searchParams, form]);

  function onSubmit(values: FormValues) {
    setGeneratedContent(null);
    startTransition(async () => {
      try {
        const result = await generateOutreach(values);
        setGeneratedContent(result);
        toast({
            title: 'Outreach Content Generated!',
            description: 'Your email and call script are ready.',
        });
      } catch (error) {
        console.error("Error generating outreach content:", error);
        toast({
            title: 'Error',
            description: 'There was an issue generating content. Please try again.',
            variant: 'destructive',
        });
      }
    });
  }

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: 'Copied to Clipboard!',
        description: `${fieldName} has been copied.`,
    });
  }

  return (
    <div className="py-20 md:py-28">
        <div className="container max-w-4xl">
             <Card>
                <CardHeader>
                    <CardTitle>AI Outreach Generator</CardTitle>
                    <CardDescription>Create personalized cold emails and call scripts for your leads in seconds.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="businessName"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Name</FormLabel>
                                    <FormControl>
                                    <Input placeholder="e.g., Joe's Cafe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="businessType"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business Type</FormLabel>
                                    <FormControl>
                                    <Input placeholder="e.g., Cafe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="opportunity"
                                render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Opportunity / Reason for Contact</FormLabel>
                                    <FormControl>
                                    <Textarea placeholder="e.g., Outdated website, no online booking system..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={isPending}>
                                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                                Generate Outreach
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
                        <div className="mt-8 space-y-8">
                            <Separator />
                            <Card className="bg-secondary">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-primary" />
                                        Generated Cold Email
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="subject">Subject</Label>
                                        <div className="relative">
                                            <Input id="subject" readOnly value={generatedContent.coldEmailSubject} className="pr-10 bg-background" />
                                            <Button variant="ghost" size="icon" className="absolute top-1/2 right-1 -translate-y-1/2 h-8 w-8" onClick={() => copyToClipboard(generatedContent.coldEmailSubject, 'Subject')}>
                                                <Clipboard className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                     <div>
                                        <Label htmlFor="email-body">Body</Label>
                                        <div className="relative">
                                            <Textarea id="email-body" readOnly value={generatedContent.coldEmailBody} className="min-h-[250px] pr-10 bg-background" />
                                            <Button variant="ghost" size="icon" className="absolute top-2 right-1 h-8 w-8" onClick={() => copyToClipboard(generatedContent.coldEmailBody, 'Email body')}>
                                                 <Clipboard className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                             <Card className="bg-secondary">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-primary" />
                                        Generated Call Script
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                     <div>
                                        <Label htmlFor="call-script">Script</Label>
                                        <div className="relative">
                                            <Textarea id="call-script" readOnly value={generatedContent.callScript} className="min-h-[150px] pr-10 bg-background" />
                                            <Button variant="ghost" size="icon" className="absolute top-2 right-1 h-8 w-8" onClick={() => copyToClipboard(generatedContent.callScript, 'Call script')}>
                                                <Clipboard className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </CardContent>
             </Card>
        </div>
    </div>
  );
}


export default function SkyIsLimitsPlusPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OutreachGeneratorPage />
        </Suspense>
    )
}
