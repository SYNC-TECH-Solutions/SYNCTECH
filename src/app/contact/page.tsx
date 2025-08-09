'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { useState, useTransition } from 'react';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { contactFormSchema } from '@/lib/schemas';

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: 'Message Sent!',
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: result.message,
          variant: 'destructive',
        });
      }
    });
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Our Office</p>
                            <p className="text-muted-foreground">Dublin, Ireland</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Email Us</p>
                            <a href="mailto:hello@synctech.ie" className="text-muted-foreground hover:text-primary transition-colors">hello@synctech.ie</a>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                         <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Call Us</p>
                            <p className="text-muted-foreground">+353 83 068 2026</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your project..." className="min-h-[150px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
        </div>
      </div>
    </section>
  );
}
