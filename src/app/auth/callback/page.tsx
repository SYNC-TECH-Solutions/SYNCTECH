
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { verifyLoginToken } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ShieldCheck, ShieldX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('Verifying your login link...');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setStatus('error');
      setMessage('No login token provided. Please try again.');
      return;
    }

    async function verify() {
      const result = await verifyLoginToken(token);
      if (result.success) {
        setStatus('success');
        setMessage('Successfully logged in! Redirecting you now...');
        // Redirect to admin panel after a short delay
        setTimeout(() => {
          router.push('/admin');
        }, 1500);
      } else {
        setStatus('error');
        setMessage(result.message || 'An unknown error occurred.');
      }
    }

    verify();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>Finalizing your secure login.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {status === 'verifying' && (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-muted-foreground">{message}</p>
            </div>
          )}
          {status === 'success' && (
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck className="h-12 w-12 text-green-500" />
              <p className="text-muted-foreground">{message}</p>
            </div>
          )}
          {status === 'error' && (
            <div className="flex flex-col items-center gap-4">
              <ShieldX className="h-12 w-12 text-destructive" />
              <p className="text-destructive font-semibold">{message}</p>
              <Button asChild>
                <Link href="/login">Return to Login</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function AuthCallbackPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AuthCallbackContent />
        </Suspense>
    )
}
