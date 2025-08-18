
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { sendLoginLink } from '@/app/actions';
import { useState, useTransition } from 'react';
import { Loader2, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';
import { loginFormSchema } from '@/lib/schemas';

type LoginFormValues = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: LoginFormValues) {
    setFormSubmitted(false);
    startTransition(async () => {
      const result = await sendLoginLink(values);

      if (result.success) {
          setFormSubmitted(true);
          toast({
            title: 'Check Your Email',
            description: result.message,
          });
      } else {
           toast({
            title: 'Login Failed',
            description: result.message || 'An unknown error occurred.',
            variant: 'destructive',
          });
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
            <div className="mx-auto mb-4">
                <Logo />
            </div>
          <CardTitle>Admin Panel Login</CardTitle>
          <CardDescription>Enter your admin email to receive a secure login link.</CardDescription>
        </CardHeader>
        <CardContent>
          {formSubmitted ? (
            <div className="text-center space-y-4">
              <Mail className="mx-auto h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Login Link Sent</h3>
              <p className="text-muted-foreground">
                We've sent a secure login link to the email address you provided. Please check your inbox and click the link to sign in. The link will expire in 15 minutes.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="admin@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending} className="w-full">
                  {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Login Link
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
