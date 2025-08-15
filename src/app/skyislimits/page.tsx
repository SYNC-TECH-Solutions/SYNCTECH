
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Search, Lightbulb, MapPin, Mail, Phone, Globe, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { findBusinessLeads, type FindBusinessLeadsOutput } from '@/ai/flows/find-business-leads';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const formSchema = z.object({
  businessType: z.string().min(3, { message: 'Business type must be at least 3 characters.' }),
  location: z.string().min(2, { message: 'Location must be at least 2 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadFinderPage() {
  const [isPending, startTransition] = useTransition();
  const [generatedLeads, setGeneratedLeads] = useState<FindBusinessLeadsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessType: '',
      location: '',
    },
  });

  function onSubmit(values: FormValues) {
    setGeneratedLeads(null);
    startTransition(async () => {
      try {
        const result = await findBusinessLeads(values);
        setGeneratedLeads(result);
        if (result.leads.length === 0) {
            toast({
                title: 'No leads found',
                description: 'Try broadening your search criteria.',
            });
        } else {
            toast({
                title: 'Leads Generated!',
                description: `Found ${result.leads.length} potential leads.`,
            });
        }
      } catch (error) {
        console.error("Error generating leads:", error);
        toast({
            title: 'Error',
            description: 'There was an issue generating leads. Please try again.',
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
                    <CardTitle>AI Lead Finder</CardTitle>
                    <CardDescription>Discover potential clients who could benefit from your services. Enter a business type and location to start.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="businessType"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Business Type</FormLabel>
                                        <FormControl>
                                        <Input placeholder="e.g., Restaurants, Plumbers, Cafes" {...field} />
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
                                        <Input placeholder="e.g., Dublin, Cork, Ireland" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" disabled={isPending}>
                                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                                Find Leads
                            </Button>
                        </form>
                    </Form>

                    {isPending && (
                        <div className="mt-8 text-center">
                            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                            <p className="mt-2 text-muted-foreground">Searching for leads... This may take a moment.</p>
                        </div>
                    )}
                    
                    {generatedLeads && (
                        <div className="mt-8">
                            <Separator className="my-6" />
                            <h3 className="text-2xl font-bold mb-4">
                                {generatedLeads.leads.length > 0 ? 'Potential Leads' : 'No Leads Found'}
                            </h3>
                            <div className="grid grid-cols-1 gap-6">
                                {generatedLeads.leads.map((lead, index) => (
                                    <Card key={index} className="bg-secondary">
                                        <CardHeader>
                                            <CardTitle>{lead.name}</CardTitle>
                                            <CardDescription>{lead.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-sm">Opportunity:</p>
                                                    <p className="text-muted-foreground text-sm">{lead.reason}</p>
                                                </div>
                                            </div>
                                             <Separator />
                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-start gap-3">
                                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                    <p className="text-muted-foreground">{lead.address}</p>
                                                </div>
                                                {lead.phone && (
                                                    <div className="flex items-start gap-3">
                                                        <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                        <p className="text-muted-foreground">{lead.phone}</p>
                                                    </div>
                                                )}
                                                {lead.email && (
                                                    <div className="flex items-start gap-3">
                                                        <Mail className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                        <a href={`mailto:${lead.email}`} className="text-primary hover:underline">{lead.email}</a>
                                                    </div>
                                                )}
                                                {lead.website && (
                                                    <div className="flex items-start gap-3">
                                                        <Globe className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                        <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{lead.website}</a>
                                                    </div>
                                                )}
                                            </div>
                                            <Separator />
                                            <div className="mt-4">
                                                <Button asChild>
                                                    <Link href={`/skyislimitsplus?name=${encodeURIComponent(lead.name)}&opportunity=${encodeURIComponent(lead.reason)}&type=${encodeURIComponent(form.getValues('businessType'))}`}>
                                                        <Wand2 className="mr-2 h-4 w-4" />
                                                        Generate Outreach
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
             </Card>
        </div>
    </div>
  );
}
