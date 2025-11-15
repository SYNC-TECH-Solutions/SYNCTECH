
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateLeadInsight, LeadInsightOutput, LeadInsightInput } from '@/ai/flows/generate-lead-insight';
import { Loader2, Lightbulb, Target, CheckCircle, Building, Globe, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import Head from 'next/head';

const formSchema = z.object({
  industry: z.string().min(3, { message: 'Please enter a valid industry.' }),
  location: z.string().min(3, { message: 'Please enter a valid location.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadFinderDemoPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [leadInsight, setLeadInsight] = useState<LeadInsightOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      industry: '',
      location: '',
    },
  });

  function onSubmit(values: FormValues) {
    setLeadInsight(null);
    startTransition(async () => {
      try {
        const result = await generateLeadInsight(values);
        setLeadInsight(result);
        toast({
          title: 'Lead Report Generated!',
          description: 'Your potential leads are listed below.',
        });
      } catch (error) {
        console.error('Error generating lead insight:', error);
        toast({
          title: 'Analysis Failed',
          description: 'Could not generate leads. Please try again.',
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <>
    <Head>
        <title>Live Demo: AI Lead Finder | SYNC TECH</title>
        <meta name="description" content="Try the SYNC TECH AI Lead Finder live. Enter an industry and location to generate a list of potential leads for your business." />
        <meta name="robots" content="noindex, nofollow" />
    </Head>
    <div className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Live Demo: AI Lead Finder</CardTitle>
            <CardDescription>
              Enter an industry and location to generate a list of potential business leads. The AI will identify companies, analyze their potential needs, and suggest relevant SYNC TECH services.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Law Firms, Restaurants" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Dublin, Ireland" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Find Leads
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isPending && (
            <Card>
                <CardContent className="p-12 text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">Searching for leads and generating insights...</p>
                </CardContent>
            </Card>
        )}

        {leadInsight && (
            <div className="space-y-8">
                {leadInsight.leads.map((lead, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Building className="h-6 w-6 text-primary" />
                                {lead.companyName}
                            </CardTitle>
                            <CardDescription>
                                <a href={lead.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                                    <Globe className="h-4 w-4" />
                                    {lead.website}
                                </a>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                             <div>
                                <h3 className="font-semibold mb-2 flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-primary" />Company Summary</h3>
                                <p className="text-muted-foreground text-sm">{lead.summary}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2 flex items-center"><Target className="mr-2 h-5 w-5 text-primary" />Potential Needs</h3>
                                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                    {lead.potentialNeeds.map((need, i) => <li key={i}>{need}</li>)}
                                </ul>
                            </div>
                             <div>
                                <h3 className="font-semibold mb-2 flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-primary" />Suggested SYNC TECH Services</h3>
                                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                                    {lead.suggestedServices.map((service, i) => <li key={i}>{service}</li>)}
                                </ul>
                            </div>
                        </CardContent>
                        <CardFooter>
                           <p className="text-xs text-muted-foreground">This is a live demo. For a full proposal, please contact us.</p>
                        </CardFooter>
                    </Card>
                ))}

                {leadInsight.disclaimer && (
                    <Alert>
                        <AlertTitle>Disclaimer</AlertTitle>
                        <AlertDescription>
                            {leadInsight.disclaimer}
                        </AlertDescription>
                    </Alert>
                )}

                 <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                        <CardTitle>Ready to unlock your full sales potential?</CardTitle>
                        <CardDescription className="text-primary-foreground/90">The AI Lead Finder is just one of the powerful agents we can build for your business. Let's discuss how a custom AI solution can accelerate your growth.</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Button asChild variant="secondary">
                            <Link href="/contact">
                                Request a Custom AI Solution <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )}
      </div>
    </div>
    </>
  );
}
