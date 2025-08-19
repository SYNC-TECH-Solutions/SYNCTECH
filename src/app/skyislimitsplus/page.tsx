
'use client';

import { useState, useTransition, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { GenerateProposalOutput, generateProposal } from '@/ai/flows/generate-proposal';
import { Loader2, Mail, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
  leadInsightReport: z.string().refine((val) => {
    try {
      JSON.parse(val);
      return true;
    } catch (e) {
      return false;
    }
  }, { message: 'Invalid JSON format.' }),
});

type FormValues = z.infer<typeof formSchema>;

function SkyIsLimitsPlusContent() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [generatedContent, setGeneratedContent] = useState<GenerateProposalOutput | null>(null);
  const searchParams = useSearchParams();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      leadInsightReport: '',
    },
  });

  useEffect(() => {
    const reportData = searchParams.get('data');
    if (reportData) {
      try {
        // Pre-ttify the JSON for display in the textarea
        const parsedData = JSON.parse(reportData);
        const formattedData = JSON.stringify(parsedData, null, 2);
        form.setValue('leadInsightReport', formattedData);
      } catch (error) {
        console.error("Failed to parse lead insight data from URL", error);
        toast({
            title: 'Error',
            description: 'Could not load the lead insight data from the previous page.',
            variant: 'destructive',
        });
      }
    }
  }, [searchParams, form, toast]);


  function onSubmit(values: FormValues) {
    setGeneratedContent(null);
    startTransition(async () => {
      try {
        const parsedInput = JSON.parse(values.leadInsightReport);
        const result = await generateProposal(parsedInput);
        setGeneratedContent(result);
        toast({
          title: 'Content Generated!',
          description: 'Your new cold email and proposal outline are ready below.',
        });
      } catch (error) {
        console.error('Error generating proposal:', error);
        toast({
          title: 'Generation Failed',
          description: 'An unexpected error occurred. Please check your input and try again.',
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
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>AI Proposal & Cold Email Generator</CardTitle>
            <CardDescription>
              The Lead Insight Report has been pre-filled below. Click the button to generate a personalized cold email and a structured proposal outline.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="leadInsightReport"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lead Insight Report (JSON)</FormLabel>
                      <FormControl>
                        <Textarea 
                            placeholder='Paste the JSON report from the previous page here...' 
                            className="min-h-[200px] font-mono text-xs bg-secondary" 
                            {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate Proposal & Email
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {isPending && (
            <Card>
                <CardContent className="p-12 text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">Generating outreach materials...</p>
                </CardContent>
            </Card>
        )}

        {generatedContent && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Mail className="mr-2 h-5 w-5 text-primary" />
                        Generated Cold Email
                    </div>
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard(`Subject: ${generatedContent.emailSubject}\n\n${generatedContent.emailBody}`, 'Email content')}>Copy Email</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Subject:</h3>
                  <p className="text-sm text-muted-foreground p-3 bg-secondary rounded-md">{generatedContent.emailSubject}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Body:</h3>
                  <div className="text-sm text-muted-foreground p-3 bg-secondary rounded-md whitespace-pre-wrap">
                    {generatedContent.emailBody}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
               <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center">
                        <FileText className="mr-2 h-5 w-5 text-primary" />
                        Generated Proposal Outline
                    </div>
                     <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedContent.proposalOutline, 'Proposal outline')}>Copy Outline</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none p-4 bg-secondary rounded-md">
                    <ReactMarkdown>{generatedContent.proposalOutline}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}


export default function SkyIsLimitsPlusPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SkyIsLimitsPlusContent />
    </Suspense>
  );
}
