
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { generateLeadInsight, LeadInsightOutput } from '@/ai/flows/generate-lead-insight';
import { Loader2, Lightbulb, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const formSchema = z.object({
  companyWebsite: z.string().url({ message: 'Please enter a valid URL.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SkyIsLimitsPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [leadInsight, setLeadInsight] = useState<LeadInsightOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyWebsite: '',
    },
  });

  function onSubmit(values: FormValues) {
    setLeadInsight(null);
    startTransition(async () => {
      try {
        const result = await generateLeadInsight(values);
        setLeadInsight(result);
        toast({
          title: 'Lead Insight Generated!',
          description: 'The report is ready below. You can now generate a proposal.',
        });
      } catch (error) {
        console.error('Error generating lead insight:', error);
        toast({
          title: 'Analysis Failed',
          description: 'Could not analyze the website. Please check the URL or try another one.',
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
            <CardTitle>AI Lead Insight Generator</CardTitle>
            <CardDescription>
              Enter a company's website URL to automatically generate a lead qualification report.
              This tool will analyze the business and identify potential opportunities for SYNC TECH.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="companyWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Analyze Website
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isPending && (
            <Card>
                <CardContent className="p-12 text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">Analyzing website and generating insights...</p>
                </CardContent>
            </Card>
        )}

        {leadInsight && (
          <Card>
            <CardHeader>
              <CardTitle>Lead Insight Report for: {leadInsight.companyName}</CardTitle>
              <CardDescription>
                Here is the analysis of the company and suggested next steps. Use this information to generate a proposal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center"><Lightbulb className="mr-2 h-5 w-5 text-primary" />Company Summary</h3>
                <p className="text-muted-foreground text-sm">{leadInsight.companySummary}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center"><Target className="mr-2 h-5 w-5 text-primary" />Potential Needs</h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    {leadInsight.potentialNeeds.map((need, i) => <li key={i}>{need}</li>)}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-primary" />Suggested SYNC TECH Services</h3>
                 <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                    {leadInsight.suggestedServices.map((service, i) => <li key={i}>{service}</li>)}
                </ul>
              </div>
              
              <div className="border-t pt-6">
                 <h3 className="font-semibold mb-2">Next Step: Generate Proposal</h3>
                 <p className="text-sm text-muted-foreground mb-4">Click the button below to generate a cold email and proposal outline based on this report.</p>
                 <Button asChild className="w-full">
                    <Link href={{
                        pathname: '/skyislimitsplus',
                        query: { data: JSON.stringify(leadInsight) }
                    }}>
                        Go to Proposal & Email Generator <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </div>

            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
